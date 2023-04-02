var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
var answers={};
var marks=0;
// Que Counter
var qCntr=0;
// Item Counter
var iCntr=0;
var aCntr=0;
var mistakeAlerts="";

$(document).ready(function(){
    if(localStorage['jj__uName']) {
        console.log("MainPaper UserName : "+localStorage['jj__uName']);
        $('#myName').val(localStorage['jj__uName']);
        $('#myName').attr('readonly', true);
        $('#myName').css('border', '0');
        $('#myName').css('font-size', '45');
        $('#myName').css('color', 'darkBlue');
        $('#myName').css('font-weight', 'bold');
        $('#mainPaper').show();
    } else {
        console.log("Trying to login directy to this page. Skipping login page !!");
        var password = "706173737764";
        var result = "";
        for(var i=0;i<password.length;i=i+2){result=result+'%'+password.substr(i,2);}
        if (prompt('Password','') != unescape(result)) { close(); top.location.reload(); }
    }
    restoreAns();
    // click on button submit
    $(".submit").on('click', function(){
        //console.log(JSON.stringify( $('#form').serializeJSON()));
        // send ajax
        alertify.confirm("Do you really want me to submit?", function (e) {
            if(e) {
                //                var val=inputValidator("myForm");
                //                console.log("HaHa +"+val);
                //                if (val) { 
                //                    alertify.confirm("Some Questions Are Left Unanswered. Do you really want me to go ahead and submit?", function (f) {
                //                      if(f) postToServer();
                //                    });
                //                } else {
                //                    postToServer();
                //                }
                postToServer();
            }
        });
    });

    $(".solution").on('click', function() {
        if (localStorage[myStorageID+'Done']) {
            calcMarks(1);
        } else {
            $.notify('Please Submit First. Then Only You Can See Solution', 'error');
        }
    });
});

function postToServer() {
    $.ajax({
        url: 'http://'+window.location.hostname+':3001/post', // url where to submit the request
        type : "POST", // type of action POST || GET
        //dataType : 'application/json; charset=utf-8', // data type
        //data : JSON.stringify($("#form").serializeJSON()), // post data || get data
        data : 'postType=exam&examType=karmUdayBandh&marks='+calcMarks()+'&'+$("#form").serialize(), // post data || get data
        success : function(result) {
            // you can see the result from the console
            // tab of the developer tools
            console.log(result);
            if(result['status']=='true') {
                $.notify(result['msg'], 'success');
                localStorage[myStorageID+'Done']=1;
            } else {
                $.notify(result['msg'], 'error');
            }
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    })
}

$(function(){
    $('input:text').change(function(){
        localStorage[myStorageID+"_"+this.id]=this.value;
    }
    );
});
$(function(){
    $('input:radio').change(function(){
        var elemName=myStorageID+"_"+$(this).attr('name');
        localStorage[elemName]=$(this).val();
    }
    );
});
$(function(){
    $('select').change(function () {
        var elemName=myStorageID+"_"+$(this).attr('name');
        localStorage[elemName]=$(this).val();
    }
    );
});

function resetVals() {
    //localStorage.clear();
    alertify.confirm("Do you really want me to delete all answers?", function (e) {
        if(e) {
            var myLength = myStorageID.length;
            Object.keys(localStorage).forEach(function(key){
                if (key.substring(0,myLength) == myStorageID) {
                    localStorage.removeItem(key);
                }
            });
            location.reload();
        }
    })
}

function restoreInput(id) {
    myid=myStorageID+"_"+id;
    if(localStorage[myid]){ document.getElementById(id).value = localStorage[myid];}
}
function restoreAns() {
    var i; var x;
    restoreInput("myName");
    restoreInput("myMobile");
    restoreInput("myEmail");
    for (i = 1; i<=iCntr; i++) {
        var curQue="Que"+i;
        var elements=document.getElementsByName(curQue);
        if(elements.length>1) { // If CheckBox
            for (x = 0; x < elements.length; x++) {
                if (elements[x].checked) { 
                    break; 
                }
            }
            if(localStorage[myStorageID+"_"+curQue]) { elements[localStorage[myStorageID+"_"+curQue]-1].checked = true; }
        }else{ // else DropDown
            if(elements[0].value=='default') {
                if(localStorage[myStorageID+"_"+curQue]) {
                    elements[0].value=localStorage[myStorageID+"_"+curQue];
                }
            }
        }
    }
}

function calcMarks(show) {
    var marks=0;
    aCntr=0;
    mistakeAlerts="";
    var i; var x;
    for (i=1; i<=iCntr; i++) {
        var curQue="Que"+i;
        var elements=document.getElementsByName(curQue);
        if(elements.length>1) {		// If radio button
            for (x=0; x<elements.length; x++) {
                if (elements[x].checked) { 
                    var exp=(answers[curQue]);
                    var myDiv=document.getElementById('q'+curQue);
                    if(exp==elements[x].value) {
                        marks++; 
                    }
                    if(show) {
                        if(exp==elements[x].value) {
                            myDiv.innerHTML="<strong>Correct &#10004;</strong>";
                            myDiv.style.color='darkGreen';
                        } else{ 
                            var expVal=document.getElementById(curQue+"_"+(exp-1)).innerHTML;
                            myDiv.innerHTML="<strong>Wrong X exp="+expVal+"</strong>";
                            myDiv.style.color='red'; 
                        } 
                    } 
                    break;
                }
            }
        }else{		// If dropDown
            var exp=(answers[curQue]);
            var myDiv=document.getElementById('q'+curQue);
            if(exp==elements[0].value) { 
                marks++; 
            }
            if(show) {
                if(exp==elements[0].value) { 
                    myDiv.innerHTML="<strong>Correct &#10004;</strong>";
                    myDiv.style.color='darkGreen';
                } else  if(elements[0].value!='default') {
                    var expVal=elements[0].options[exp].text;
                    myDiv.innerHTML="<strong>Wrong X exp="+expVal+"</strong>";
                    //myDiv.innerHTML="<strong>Wrong X</strong>";
                    myDiv.style.color='red';
                }
            }
        }
    }
    console.log('Dbg: Calculated Marks = '+marks);
    if (show) {
        scroll(0,0);
        document.getElementById("showGif").style.visibility='visible';
        var mySMDiv=document.getElementById("showMarks");
        mySMDiv.innerHTML=marks+" / "+iCntr+" Marks "+(marks*100/iCntr)+" Percent";
    } else {
        console.log('Calculated Marks = '+marks);
        return (marks);
    }
}

function inputValidator(name) {
    var ShowAlert=''; var i;
    var AllFormElements=document.forms[name].getElementsByTagName("input");
    console.log("Dbg : All Form Elem = "+AllFormElements.length);
    for (i = 0; i < AllFormElements.length; i++) {
        if (AllFormElements[i].type == 'text') {
            var x=AllFormElements[i].value;
            if (x==null || x=="") {
                //alert("Text element '"+AllFormElements[i].name+"' must be filled out");
                return 1;
            }
        }
        if (AllFormElements[i].type == 'radio') {
            var ThisRadio=AllFormElements[i].name;
            var ThisChecked='No';
            var AllRadioOptions=document.getElementsByName(ThisRadio);
            for (x = 0; x < AllRadioOptions.length; x++) {
                if (AllRadioOptions[x].checked && ThisChecked == 'No') { ThisChecked = 'Yes'; break; } 
            }   
            var AlreadySearched = ShowAlert.indexOf(ThisRadio);
            if (ThisChecked == 'No' && AlreadySearched == -1) {
                //alert('Please answer ' + ThisRadio + '\n');
                return(1);
            }     
        }
    }
    var AllSelects=document.forms[name].getElementsByTagName("select");
    console.log("Dbg : All Sel = "+AllSelects.length);
    for (i = 0; i < AllSelects.length; i++) {
        console.log("Dbg : Sel No "+i+" Val = "+AllSelects[i].value);
        if (AllSelects[i].value=="default") {
            //alert("'"+AllSelects[i].name+"' must be filled out");
            return 1;
        }
    }
    return 0;
}
function createTrueFalse(ans, qDes) {
    var qNum=++qCntr;
    iCntr=qCntr;
    var idx="Que"+qNum;
    document.write("<div class=d"+qNum%2+"><BR>"+qNum+") <select name="+idx+" style='margin: 0; padding: 5'><optgroup>");
    document.write("<option value=default selected>True / False</option>");
    document.write("<option value=1>FALSE</option>");
    document.write("<option value=2>TRUE</option>");
    document.write("</optgroup></select>&nbsp;&nbsp;"+qDes+"<BR>");
    document.write("<div id=q"+idx+"><BR></div></div>");
    answers[idx]=ans-aCntr++;
}
function createMultipleChoice(ans, qDes, choice) {
    var i;
    var qNum=++qCntr;
    iCntr=qCntr;
    var idx="Que"+iCntr;
    document.write("<div class=d"+qNum%2+"><BR>"+qNum+") "+qDes+"<BR>");
    document.write("<table cellspacing=10>");
    for(i=0;i<choice.length;i++) {
        if(i%2==0) { document.write("<tr>");}
        document.write("<td><input type=radio name="+idx+" value=\""+(i+1)+"\"><label id="+idx+"_"+i+">"+choice[i]+"</label></td>");
        if(i%2==1) { document.write("</tr>");}
    }
    if(i%2==0) { document.write("</tr>");}
    document.write("</table><div id=q"+idx+"><BR></div></div>");
    answers[idx]=ans-aCntr++-1;
}
function createTableChose(qDes, qColumn, aColumn, ans) {
    var i; var j;
    var qNum=++qCntr;
    var idx="";
    document.write("<div class=d"+qNum%2+"><BR>"+qNum+") Chose right answer from drop-down menu. "+qDes+"<BR><BR>");
    document.write("<table bgcolor=Pink BORDER=1 RULES=NONE FRAME=BOX cellspacing=0 style=\"margin-left:50;\">");
    for(i=0;i<qColumn.length;i++) {
        iCntr++;
        idx="Que"+iCntr;
        document.write("<tr class=d" + i%2 + "><td>"+(i+1)+") " + qColumn[i] + "</td>");
        document.write("<td><p><select name="+idx+" style='margin: 0; padding: 5'><optgroup>");
        document.write("<option value=default selected></option>");
        for(j=0;j<aColumn.length;j++) { 
            document.write("<option value=" + (j+1) + ">" + aColumn[j] + "</option>");
        };
        document.write("</optgroup></select></td>");
        document.write("<td><div id=q"+idx+">&nbsp;</div></td></tr>");
        answers[idx]=(ans[i]-aCntr++-1);
    };
    document.write("</table><BR></div>");
}
function createTableGridChose(qDes, qColumn, aColumn, aRow, ans) {
    var i; var j; var k;
    var qNum=++qCntr;
    document.write("<div class=d" + qNum%2 + "><BR>" + qNum + ") Chose right answer from drop-down menu. " + qDes + "<BR><BR>");
    document.write("<table bgcolor=Pink BORDER=1 RULES=NONE FRAME=BOX cellspacing=0 style=\"width:100%;\">");
    document.write("<tr class=d1><td></td>");
    var cntr=0;
    var idx="";
    for(i=0;i<aRow.length;i++) { document.write("<td>" + aRow[i] + "</td><td></td>"); }
    for(i=0;i<qColumn.length;i++) {
        document.write("<tr class=d" + i%2 + "><td>"+(i+1)+") " + qColumn[i] + "</td>");
        for(k=0;k<aRow.length;k++) { 
            iCntr++;
            idx="Que"+iCntr;
            document.write("<td><p><select name="+idx+" style='width: 100%; margin: 5; padding: 5;'><optgroup>");
            document.write("<option value=default selected></option>");
            for(j=0;j<aColumn.length;j++) { document.write("<option value="+(j+1)+">"+aColumn[j]+"</option>");};
            document.write("</optgroup></select></td>");
            document.write("<td><div id=q"+idx+">&nbsp;</div></td>");
            answers[idx]=(ans[cntr++]-aCntr++-1);
        }
        document.write("</td></tr>");
    };
    document.write("</table><BR></div>");
}
function createMatchTheColumn(qDes, qColumn, aColumn, ans) {
    var i; var j;
    var qNum=++qCntr;
    document.write("<div class=d" + qNum%2 + "><BR>" + qNum + ") Match The Columns. " + qDes + "<BR><BR>");
    document.write("<table bgcolor=Pink BORDER=1 RULES=NONE FRAME=BOX cellspacing=0 style=\"margin-left:50;\">");
    for(i=0;i<qColumn.length;i++) {
        var answer;
        iCntr++;
        idx="Que"+iCntr;
        if(i<aColumn.length) { 
            document.write("<tr class=d" + i%2 + "><td align=right>" + qColumn[i] + "</td>");
            document.write("<td><select name="+idx+" style='margin: 0; padding: 5'><optgroup>");
            document.write("<option value=default selected></option>");
            for(j=0;j<qColumn.length;j++) { 
                document.write("<option value=" + (j+1) + ">" + (j+1) + "</option>" + aColumn[j]);
            };
            document.write("</optgroup></select></td>");
            document.write("<td><div id=q"+idx+">&nbsp;</div></td>");
            document.write("<td style=\"padding-left:100px;\">"+(i+1)+") "+aColumn[i]+"</td></tr>");
            answers[idx]=ans[i]-aCntr++-1;
        } else { 
            document.write("<tr class=d" + i%2 + "><td>"+(i+1)+") " + qColumn[i] + "</td><td></td></tr>");
        }
    };
    document.write("</table><BR></div>");
}
