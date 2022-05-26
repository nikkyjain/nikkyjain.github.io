$(document).ready(function(){

    // Handle Registration Form Submit
    $("#regSubmit").on('click', function(evt){
        evt.preventDefault();
        if (validatePasscode('regPasswd')) return(1);
        if (validatePasscode('regRPasswd')) return(1);
        if ($('#regPasswd').val()!=$('#regRPasswd').val()) {
            $('#regRPasswd').notify("Passcode mismatch. Retype passcode");
            return(1);
        }
        $('#regPasswd').val(CryptoJS.SHA256($('#regPasswd').val()).toString());
        $('#regRPasswd').val(CryptoJS.SHA256($('#regPasswd').val()).toString());
        // send ajax
        $.ajax({
            url: 'http://'+window.location.hostname+':8001/post', // url where to submit the request
            type : "POST", // type of action POST || GET
            //dataType : 'application/json; charset=utf-8', // data type
            //data : JSON.stringify($("#form").serializeJSON()), // post data || get data
            data : 'postType=register&'+$("#regForm").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
                if(result['status']=='true') {
                    $.notify(result['msg'], 'success');
                    localStorage['jj__uName']=$('#regUname').val();
                    //$('a[href="#loginDiv"]').trigger("click");
                    //window.location.href="/karmUdayBandh.html";
                    //window.location.href="/margnaBandh.html";
                    window.location.href="/margnaUday.html";
                } else {
                    $.notify(result['msg'], 'error');
                }
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });

    $("#lgnSubmit").on('click', function(evt){
        evt.preventDefault();
        if (validateUname('loginUname')) return(1);
        if (validatePasscode('loginPasswd')) return(1);
        $('#loginPasswd').val(CryptoJS.SHA256($('#loginPasswd').val()).toString());
        // send ajax
        $.ajax({
            url: 'http://'+window.location.hostname+':8001/post', // url where to submit the request
            type : "POST", // type of action POST || GET
            //dataType : 'application/json; charset=utf-8', // data type
            //data : JSON.stringify($("#form").serializeJSON()), // post data || get data
            data : 'postType=login&'+$("#lgnForm").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
                if(result['status']=='true') {
                    $.notify(result['msg'], 'success');
                    localStorage['jj__uName']=$('#loginUname').val();
                    //window.location.href="/karmUdayBandh.html";
                    //window.location.href="/margnaBandh.html";
                    window.location.href="/margnaUday.html";
                } else {
                    $.notify(result['msg'], 'error');
                }
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });

})

function validateUname (id) {
    var uname=$('#'+id).val();
    if (uname.length<2) {
        $('#'+id).notify('UserName Should Contain at-least 2 Alphabets', 'error');
        return(1);
    }
}

function validatePasscode (id) {
    var pcode=$('#'+id).val();
    if (pcode.toString().length!=4) {
        $('#'+id).notify('Passcode Should Be Exactly 4-Digits Long', 'error');
        return(1);
    }
    return(0);
}

