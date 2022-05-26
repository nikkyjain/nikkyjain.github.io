// my color assigned by the server

var myColor = false;
var allNames = [];
// my name sent to the server
var myName="";
var allUsers = [];
var allUsersData = {};
var allOnlineUsers = [];
var allRoomNames = [];  // All active rooms (tabs) names of a user
var allGroups = {};
var curRoomIndex = 1;
var numUsers=0;
var curRoom="";
var tabsBg = [];    // Will save tabs backgrond, on blink
// open connection
var connection;
var contentHeight=0;
var leftBottomHeight=0;
var rightBottomHeight=0;
var history = {};

function arrayToStr() {
    var str="";
    for(var i=0; i<allRoomNames.length; i++) {
        if(allRoomNames[i].startsWith('Duet_')) {
            var hdr=allRoomNames[i];
            var roomys=hdr.replace(/Duet_/, '');
            var usrA=roomys.replace(/__.*/,'');
            var usrB=roomys.replace(/.*__/,'');
            var toUsr=(usrA==myName) ? usrB : usrA;
            str+='<div class=div_rooms id=div_'+allRoomNames[i]+' onclick="openRoom(\''+toUsr+'\')">';
            str+='<span class=dot id=dot_'+roomys+'></span>';
            str+='&nbsp;<span>'+allUsersData[toUsr]+'</span>';
            str+='<span class=msgFlg id="'+allRoomNames[i]+'">'+$('#'+allRoomNames[i]).text()+'</span><br>';
            str+='<span class=lastMsg id="last_'+allRoomNames[i]+'"> '+$('#last_'+allRoomNames[i]).text()+'</span></div>';
        }
    }
    for(var group in allGroups) {
        var gName="";
        gName=group.replace(/.*__/, '');
        str+='<div class=div_rooms id=div_'+group+' onclick="openGroup(\''+group+'\')">';
        str+='<p><img width=30 height=30 src="images/grChat.png"></img>&nbsp; '+gName;
        str+='<span class=msgFlg id="'+group+'">'+$('#'+group).text()+'</span></p>';
        str+='<span class=lastMsg id="last_'+group+'"> '+$('#last_'+group).text()+'</span></div>';
    }
    str+="<br><br>";
    $('#left-container-bottom').html(str);
    if (curRoom) {
        $('#div_'+curRoom).css('background', 'WhiteSmoke');
    }
    for(var i=0; i<allOnlineUsers.length; i++) {
        var myRoom=[myName,allOnlineUsers[i]].sort().toString().replace(/,/,'__');
        $('#dot_'+myRoom).css('background-color','green');
    }
    if(!leftBottomHeight) {
        leftBottomHeight=contentHeight-$('#left-container-top').outerHeight()-10;
        rightBottomHeight=contentHeight-$('#right-container-first').outerHeight()-$('#right-container-bottom').outerHeight()-50;
    }
    $("#left-container-bottom").height(leftBottomHeight);
    $("#right-container-top").height(rightBottomHeight);

}

function refreshListview (id) {
    $('#'+id+':visible').listview("refresh");
    $('#'+id+' li').each(function() {
        $(this).addClass('ui-screen-hidden');
    });
}

function addToListview (listId, id) {
    $('#'+listId).append("<li><a href='#'>"+id+"</a></li>");
}
// When User Clicks New User Registration, close existing login popup
function switchPopup(myId, popupId) {
    $('#'+myId).popup("close");
    $('#'+popupId).popup("open");
}
function validateEmail(email) { //Validates the email address
    myEmail=$('#'+email).val();
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!emailRegex.test(myEmail)) {
      $('#'+email).notify("Email format is not ok", 'error');
      return(1);
    } else {
      return(0);
    }
}
function validatePasscode (id) {
  var pcode=$('#'+id).val();
  if (pcode.toString().length!=4) {
    $('#'+id).notify('Passcode Should Be Exactly 4-Digits Long', 'error');
    return(1);
  } else if (isNaN(pcode)) {
    $('#'+id).notify('Passcode Should Be Numeric', 'error');
    return(1);
  }
  return(0);
}
function validateUname (id) {
  var letters = /^[A-Za-z]+$/;
  var uname=$('#'+id).val();
  if (uname.length<2) {
      $('#'+id).notify('UserName Should Contain at-least 2 Alphabets', 'error');
      return(1);
  } else if(!letters.test(uname)) {
      $('#'+id).notify('UserName Should Only Contain Alphabets', 'error');
      return(1);
  }
  return(0);
}
function verifyLogin(id, pcode, otp='NA') {
    myName=$('#'+id).val();
    var letters = /^[A-Za-z]+$/;
    if (validateUname(id)) {
        return(1);
    } else if (validatePasscode(pcode)) {
        return(1);
//    } else if (otp!='NA' && validatePasscode('otp')) {
//        return(1);
    } else {
        connection.send(JSON.stringify({
            type:'login', 
            uname:myName, 
            otp: otp.toString(),
            pcode:CryptoJS.SHA256($('#'+pcode).val()).toString()
        }));
    }
}

$(document).on( "pagecontainershow", function(){
    connection = new WebSocket('ws://'+window.location.hostname+':8001');
    window.onbeforeunload = function (evt) {
        var message = 'Are you sure you want to leave, cause there are some unsaved changes?';
        if (typeof evt == 'undefined') {
            evt = window.event;
        }
        if (evt ) {
            evt.returnValue = message;
        }
        return message;
    }

    // Login Submit Click Function
    $('#loginSubmit').click(function(evt) {
        evt.preventDefault();
        verifyLogin('uname', 'pword');
    })
    // First Time Login Click Function

    $('#loginFSubmit').click(function(evt) {
        evt.preventDefault();
        var otp=$('#otp').val();
        verifyLogin('ftluname', 'ftlpword', otp);
    })
    // Change Passcode Submit Click
    $('#loginCpc').click(function(evt) {
        evt.preventDefault();
        if(validateUname('pcuname')){
            return(1);
        } else if(validatePasscode('opcpword')){
            return(1);
        } else if (validatePasscode('npcpword')) {
            return(1);
        } else if ($('npcpword').val()!=$('rnpcpword').val()) {
            $('rnpcpword').notify("Passcode mismatch. Retype passcode");
            return(1);
        } else {
            console.log("Sending old pcode : "+ CryptoJS.SHA256($('#opcpword').val()).toString());
            connection.send(JSON.stringify({
                type:'changePcode', 
                uname:$('#pcuname').val(), 
                oldpcode:CryptoJS.SHA256($('#opcpword').val()).toString(),
                newpcode:CryptoJS.SHA256($('#npcpword').val()).toString()
            }));
        }
    })

    // Forgot Username Submit Click
    $('#loginFun').click(function(evt) {
        evt.preventDefault();
        if (validateEmail('funemail')) {
            return(1);
        } else {
            connection.send(JSON.stringify({
                type:'forgotUname', 
                email:$('#funemail').val()
            }));
        }
    })

    // Forgot Passcode Submit Click
    $('#loginFpc').click(function(evt) {
        evt.preventDefault();
        if (validateUname('fpcuname')) {
            return(1);
        } else if (validateEmail('fpcemail')) {
            return(1);
        } else {
            var pcode=Math.floor(1000 + Math.random() * 9000).toString();
            //console.log("Server side old pcode : "+pcode+ " Hash : "+CryptoJS.SHA256(pcode).toString());
            connection.send(JSON.stringify({
                type:'forgotPcode', 
                uname:$('#fpcuname').val(), 
                pcode:pcode, 
                pcodeHash:CryptoJS.SHA256(pcode).toString(),
                email:$('#fpcemail').val()
            }));
        }
    })

    // Register Submit Click Function
    $('#loginReg').click(function(evt) {
        evt.preventDefault();
        myRName=$('#runame').val();
        var pcode=$('#rpword').val();
        var rpcode=$('#rrpword').val();
        //var email=$('#email').val();
        //var fname=$('#fname').val();
        //var dob=$('#dob').val();
        if (validateUname('runame')) {
            return(1);
        } else if (validatePasscode('rpword')) {
            return(1);
        } else if (pcode!=rpcode) {
            $('#rrpword').notify('Passcode doesnt match', 'error');
//        } else if (fname.length<2) {
//            $('#fname').notify('Full name Should Contain at-least 2 Alphabets', 'error');
//        } else if (validateEmail('email')) {
//            return(1);
//        } else if (dob.length<8) {
//            $('#dob').notify('Please fill DOB', 'error');
        } else {
            connection.send(JSON.stringify({
                type:'register', 
                uname:myRName, 
                pcode:CryptoJS.SHA256(pcode).toString()
                //dob:dob,
                //fname:fname,
                //email:email
            }));
        }
    })

    connection.onopen = function () {
        $('#popupLgn').popup("open");
        $("#favicon").attr("href","images/chat.png");
    };

    connection.onclose = function (error) {
        // just in there were some problems with connection...
        console.log(error);
        $(document).attr("title", "Server Disconnected");
        $("#favicon").empty();
        $('#right-container-top').text('Either Server Got Disconnected or You Attempted Multiple Logins (multiple chat windows open)');
        $('.input').each(function() {
            $(this).val('Server Connection Closed. Refresh Web-Page');
            $(this).attr('disabled', 'disabled');
        });
    };


    // most important part - incoming messages
    connection.onmessage = function (message) {
        // try to parse JSON message. Because we know that the server always returns
        // JSON this should work without any problem but we should make sure that
        // the massage is not chunked or otherwise damaged.
        try {
            var myData = JSON.parse(message.data);
            //console.log("New Msg : "+JSON.stringify(myData));
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        // NOTE: if you're not sure about the JSON structure
        // check the server source code above
        //input.removeAttr('disabled').focus();

        // User Registration Failed. User already registered
        if (myData.type === 'userAlreadyRegistered') { 
            $('#runame').notify(myData.msg, 'error');
            return;
        // User Registration Failed. Email Already In Use
        } else if (myData.type === 'emailAlreadyUsed') { 
            $('#email').notify(myData.msg, 'error');
            return;
        // User Registration Successful
        } else if (myData.type === 'userRegSuccess') { 
            $("#popupReg").popup("close");
//            $("#popupFtl").popup("open");
//            $('#otp').notify("OTP is sent to you mailID. Please check", 'success');
//            return;
        // eMail not found when forgot userName requested
        } else if (myData.type === 'forgotUnameEmail') { 
            $('#funemail').notify("Email not registered. Chk  for typo error and retry", 'error');
            return;
        // forgot userName request serviced
        } else if (myData.type === 'forgotUnameSuccess') { 
            $("#popupFun").popup("close");
            $("#popupLgn").popup("open");
            $('#uname').notify("userName was sent on your registered eMail. Use that to login.", 'success');
            return;
        // UserName not found when pcode change requested
        } else if (myData.type === 'chPcodeNoUser') { 
            $('#pcuname').notify("Passcode Change Failed. UserName doesnt exists", 'error');
            return;
        // Passcode not right when pcode change requested
        } else if (myData.type === 'chPcodeMismatch') { 
            $('#opcpword').notify("Passcode Change Failed. Passcode Not Right", 'error');
            return;
        // Passcode change successful
        } else if (myData.type === 'chPcodeSuccess') { 
            $("#popupCpc").popup("close");
            $("#popupLgn").popup("open");
            $('#pword').notify("Passcode Changed. Login With New Credentials", 'success');
            return;
        // Wrong Email When Passcode Rst Requested
        } else if (myData.type === 'rstPcodeNoEmail') { 
            $('#fpcemail').notify("Please enter right eMail for user '"+myData.uname+"'", 'error');
            return;
        // Wrong Email When Passcode Rst Requested
        } else if (myData.type === 'rstPcodeNoUname') { 
            $('#fpcuname').notify("Reset Passcode Failed. Enter right username", 'error');
            return;
        // Reset Passcode Success
        } else if (myData.type === 'rstPcodeSuccess') { 
            $("#popupFpc").popup("close");
            $("#popupCpc").popup("open");
            $('#opcpword').notify("Enter Passcode Sent To Your eMail As Old Passcode", 'success');
            $('#npcpword').notify("Set Passcode Of Your Choice", 'success');
            return;
        // OTP entered doesnt match with what was sent
        } else if (myData.type === 'otpIncorrect') { 
            $('#otp').notify("OTP not correct. Try again or contact admin", 'error');
            return;
        // User re-directed to login with OTP
        } else if (myData.type === 'loginWithOtp') { 
            $("#popupLgn").popup("close");
            $("#popupFtl").popup("open");
            $('#otp').notify("Redirecting To First Time Login. Please chk your eMail for OTP");
        // Login failed. UserName not found
        } else if (myData.type === 'loginFailNoUname') { 
            $('#uname').notify("Login '"+myData.uname+"' Not Found.", 'error');
            return;
        // Login failed. Passcode Incorrect
        } else if (myData.type === 'loginFailPcode') { 
            $('#pword').notify("Passcode Not correct. Please re-try", 'error');
            return;
        } else if (myData.type === 'loginFail') { 
            $.notify(myData.msg, 'error');
            return;
        } else if (myData.type === 'history') { // entire message history
            // insert every single message to the chat window
            if(!(myData.room in history)) {
                history[myData.room]=[];
                for (var i=0; i < myData.data.length; i++) {
                    var obj = {};
                    obj.time=myData.data[i].time;
                    obj.author=myData.data[i].author;
                    obj.text=myData.data[i].text;
                    obj.roomId=myData.room;
                    obj.color='black';
                    history[myData.room].push(obj);
                }
            }
            if(myData.room.startsWith('Group_')){
                allGroups[myData.room]=myData.users;
                $('#grTotal').html(myData.users.length);
                if(myData.users.length>1) {
                    for(var i=0; i<myData.users.length; i++) {
                        if(!(myData.room.startsWith("Group_"+myData.users[i]))) {
                            $('#removeUser').append("<li id='rem-"+myData.users[i]+"'><a href='javascript:removeUser(\""+
                                    myData.room+"\", \""+myData.users[i]+"\")'>"+allUsersData[myData.users[i]]+"</a></li>");
                            }
                    }
                    $('#removeUser').listview('refresh');
                }
            }
            for (var i=0; i < myData.data.length; i++) {
                addMessage(myData.data[i].author,  
                        myData.data[i].roomId, myData.data[i].text,
                        myData.data[i].color, new Date(myData.data[i].time));
            }
        } else if (myData.type === 'offlineMsgs') { // get offline msgs cnt per room
            // insert every single message to the chat window
            console.log("Offline Msgs : " + JSON.stringify(myData.data));
            for(var room in myData.data) {
                $('#'+room).css('background', 'lawngreen');
                $('#'+room).css('animation','blinker 1s linear infinite');
                $('#'+room).html(myData.data[room]);
            }
        } else if (myData.type === 'lastMsg') { // get last msgs per room
            console.log("Last Msg For Room : "+myData.room+" : "+JSON.stringify(myData.msg));
            var myStr=myData.msg.author+' : '+myData.msg.text;
            if(myStr.length > 25) myStr = myStr.substring(0,25)+'...';
            myStr=myStr.replace(/<br>.*/, '...');
            $('#last_'+myData.room).text(myStr);
        } else if (myData.type === 'connected') { // someone connected / disconnected
            $.notify(myData.uname+' Joined', 'success');
            //console.log("HuiHui : " + allOnlineUsers);
            if($.inArray(myData.uname, allOnlineUsers) === -1) {
                allOnlineUsers.push(myData.uname);
            }
            if(!(myData.uname in  allUsersData)) {
                allUsersData[myData.uname]=myData.name;
            }
            if($.inArray(myData.uname, allUsers) === -1) {
                allUsers.push(myData.uname);
                arrayToStr(allUsers.sort());
                addToListview('userRooms', myData.name);
                addToListview('groupUsers', myData,name);
                refreshListview('userRooms');
                refreshListview('groupUsers');
            }
            var myRoom=[myName,myData.uname].sort().toString().replace(/,/,'__');
            $('#dot_'+myRoom).css('background-color','green');
            $('.numOnline').html(allOnlineUsers.length);
            $('.numUsers').html(allUsers.length);
            //console.log("HuiHui : " + allOnlineUsers);
        } else if (myData.type === 'allUsers') { // All Connected Users
            $("#popupLgn").popup("close");
            $("#popupLgn").remove();
            $("#popupReg").popup("close");
            $("#popupReg").remove();
            $("#popupCpc").popup("close");
            $("#popupCpc").remove();
            $("#popupFpc").popup("close");
            $("#popupFpc").remove();
            $("#popupFun").popup("close");
            $("#popupFun").remove();
            $("#popupFtl").popup("close");
            $("#popupFtl").remove();
            //$('#top-container').show();
            $.notify('Your credentials matched successfully. Welcome !!', 'success');
            allUsers=myData.ids;
            for(var i=0; i<allUsers.length; i++) {
                allUsersData[allUsers[i]]=myData.names[i];
            }
            $('.myName').html(allUsersData[myName]);
            //arrayToStr(allUsers);
            for(var i=0; i<allUsers.length; i++) {
                if(allUsers[i]!=myName) {
                    addToListview('userRooms', allUsersData[allUsers[i]]);
                    addToListview('groupUsers', allUsersData[allUsers[i]]);
                }
            }
            refreshListview('userRooms');
            refreshListview('groupUsers');
        } else if (myData.type === 'warning') { // Warning received from server
            $.notify(myData.warning, 'error');
        } else if (myData.type === 'allGroups') { // All Connected Users
            //console.log("HuHu "+JSON.stringify(myData.groups));
            for(var group in myData.groups) {
                allGroups[group]=myData.groups[group];
            }
            //console.log("HuHu "+JSON.stringify(allGroups));
            for(var group in allGroups) {
                var gName=group.replace(/.*__/, '');
                addToListview('userRooms', gName);
            }
            refreshListview('userRooms');
        } else if (myData.type === 'allOnlineUsers') { // All Connected Users
            allOnlineUsers=myData.ids;
            $('.numOnline').html(allOnlineUsers.length);
            $('.numUsers').html(allUsers.length);
        } else if (myData.type === 'allRooms') { // All my rooms
            console.log("HiHa "+JSON.stringify(myData));
            allRoomNames=[];
            allGroups={};
            for(var i=0; i<myData.rooms.length; i++) {
                if(myData.rooms[i].startsWith('Duet_')) {
                    allRoomNames.push(myData.rooms[i]);
                } else {
                    var gName=myData.rooms[i].replace(/.*__/, '');
                    console.log("Adding "+gName);
                    addToListview('userRooms', gName);
                    if(!(myData.rooms[i] in allGroups)) {
                        allGroups[myData.rooms[i]]=[];
                    }
                }
            }
            refreshListview('userRooms');
            arrayToStr();
        } else if (myData.type === 'remUser') { // Remove a user from group
            console.log("Hi Hi"+JSON.stringify(myData));
            if(myData.id==myName) {
                $.notify("You are removed from group "+myData.group);
                delete allGroups[myData.group];
                arrayToStr();
                $('#rem-'+myData.id).remove();
                console.log("Hi Hi"+allUsersData[myData.id]);
            } else {
                var index = allGroups[myData.group].indexOf(myData.id);
                console.log("Find Index Of "+myData.id+ " in "+JSON.stringify(allGroups[myData.group]));
                if (index > -1) {
                    allGroups[myData.group].splice(index, 1);
                }
                if(curRoom == myData.group) {
                    $('#rem-'+myData.id).remove();
                    $('#removeUser').listview('refresh');
                }
                $('#grTotal').html(allGroups[myData.group].length);
            }
        } else if (myData.type === 'newGrpUsr') { // New Group Created or User Added
            console.log("HuiHui "+myData);
            if (!(myData.group in allGroups)) {
              allGroups[myData.group]=myData.users;
              var grName=myData.group.replace(/.*__/,'');
              addToListview('userRooms', grName);
              refreshListview('userRooms');
            } else {
              allGroups[myData.group].push(myData.id);
            }
            if (curRoom==myData.group) {
                if(!(curRoom.startsWith('Group_'+myData.id))) {
                    $('#removeUser').append("<li id='rem-"+myData.id+"'><a href='javascript:removeUser(\""+
                            curRoom+"\", \""+myData.id+"\")'>"+allUsersData[myData.id]+"</a></li>");
                    $('#removeUser').listview('refresh');
                }
            }
            console.log("Hi Hi"+allUsersData[myData.id]);
            $('#grTotal').html(myData.users.length);
            arrayToStr();
        } else if (myData.type === 'newRoom') { // New room created
            allRoomNames.push(myData.room);
            arrayToStr();
        } else if (myData.type === 'disconnected') { // All Connected Users
            $.notify(myData.data + ' Left', 'error');
            index = allOnlineUsers.indexOf(myData.data);
            if (index > -1) {
                allOnlineUsers.splice(index, 1);
            }
            $('.numOnline').html(allOnlineUsers.length);
            $('.numUsers').html(allUsers.length);
        } else if (myData.type === 'message') { // it's a single message
            //input.removeAttr('disabled'); // let the user write another message
            if(!(myData.data.roomId in history)) {
                history[myData.data.roomId]=[];
            }
            var obj = {};
            obj.time=myData.data.time;
            obj.author=myData.data.author;
            obj.text=myData.data.text;
            obj.roomId=myData.data.roomId;
            obj.color='black';
            history[myData.data.roomId].push(obj);
            console.log("Adding to history : "+myData.data.roomId);
            addMessage(myData.data.author, myData.data.roomId, myData.data.text,
                    myData.data.color, new Date(myData.data.time));
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', myData);
        }
    }
});


/**
 * This method is optional. If the server wasn't able to respond to the
 * in 3 seconds then show some error message to notify the user that
 * something is wrong.
 */
//        setInterval(function() {
//            if (connection.readyState !== 1) {
//                status.text('Error');
//                input.attr('disabled', 'disabled').val('Unable to comminucate '
//                                                     + 'with the WebSocket server.');
//            }
//        }, 3000);

/**
 * Add message to the chat window
 */
function addMessage(author, roomId, message, color, dt) {
    //if(roomId.startsWith("Duet_")) {
    pageTitleNotification.on("New Message", 1000);
    var myStr=author + ' : ' + message;
    if(myStr.length > 25) myStr = myStr.substring(0,25)+'...';
    myStr=myStr.replace(/<br>.*/, '...');
    $('#last_'+roomId).text(myStr);
    if(roomId!=curRoom) {
        $('#'+roomId).css('background', 'lawngreen');
        $('#'+roomId).css('animation','blinker 1s linear infinite');
        var myMsgCnt=$('#'+roomId).text();
        if(myMsgCnt==="") {
            $('#'+roomId).html(1);
        } else {
            $('#'+roomId).text(parseInt(myMsgCnt)+1);
        }
        return;
    }
    var msg=linkify(message);

    //console.log("Msg Rcvd : "+msg);
    $('#right-container-top').append('<div class=chatContainer>'
            + '<p><img width=30 height=30 src="images/chat.png" alt=Avatar>'
            + '<b>' + author + ' : </b>'
            + msg + '</p>'
            + '<span class=time-right>'
            //                      + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours())
            //                      + ':'
            //                      + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
            //                      + ' - '
            //                      + (dt.getDay())
            //                      + (dt.getMonth())
            //                      + (dt.getFullYear())
            + (dt.toLocaleString())
            + '</span></div>');
    //}
    $('#right-container-top').scrollTop($('#right-container-top').prop("scrollHeight"));
}

function linkify(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return '<a target="_blank" rel="noopener noreferrer" href="' + url + '">' + url + '</a>';
    });
}

(function(window, document){

    window.pageTitleNotification = (function () {

        var config = {
            currentTitle: null,
    interval: null
        };

        var on = function (notificationText, intervalSpeed) {
            if (!config.interval && !document.hasFocus()) {
                config.currentTitle = document.title;
                config.interval = window.setInterval(function() {
                    document.title = (config.currentTitle === document.title)
                    ? notificationText
                    : config.currentTitle;
                }, (intervalSpeed) ? intervalSpeed : 1000);
            }
        };

        var off = function () {
            window.clearInterval(config.interval);
            config.interval = null;
            if(config.currentTitle!=null) {
                document.title = config.currentTitle;
            }
        };

        return {
            on: on,
                off: off
        };

    })();

}(window, document));

$(window).focus(function () {
    pageTitleNotification.off();
});

