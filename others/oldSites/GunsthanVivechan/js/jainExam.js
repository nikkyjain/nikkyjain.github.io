var password = "706173737764";
var result = "";
for(var i=0;i<password.length;i=i+2){result=result+'%'+password.substr(i,2);}
if (prompt('Password','') != unescape(result)) { close(); top.location.reload(); }
var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
var answers={};
var marks=0;
// Que Counter
var qCntr=0;
// Item Counter
var iCntr=0;
var aCntr=0;
var mistakeAlerts="";


$(function(){
  $('input:text').change(function(){
      localStorage[this.id]=this.value;
    }
  );
});
$(function(){
  $('input:radio').change(function(){
      var elemName=$(this).attr('name');
      localStorage[elemName]=$(this).val();
    }
  );
});
$(function(){
  $('select').change(function () {
      var elemName=$(this).attr('name');
      localStorage[elemName]=$(this).val();
    }
  );
});

function resetVals() {
  localStorage.clear();
  location.reload();
}

function restoreInput(id) {
  if(localStorage[id]){ document.getElementById(id).value = localStorage[id];}
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
      if(localStorage[curQue]) { elements[localStorage[curQue]-1].checked = true; }
    }else{ // else DropDown
      if(elements[0].value=='default') {
        if(localStorage[curQue]) {
          elements[0].value=localStorage[curQue];
        }
      }
    }
  }
}
function calcMarks() {
  if (confirm('Do you want to validate whether form is completely filled?')) {
    if (inputValidator("myForm")) { return; }
  }
  marks=0;
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
            myDiv.innerHTML="<strong>Correct &#10004;</strong>";
            myDiv.style.color='darkGreen';
          }
          else{ 
            //mistakeAlerts=mistakeAlerts+"Solution to "+curQue+" is wrong. Exp '"+exp+"' Rcvd '"+(x+1)+"'\n";
            var expVal=document.getElementById(curQue+"_"+(exp-1)).innerHTML;
            myDiv.innerHTML="<strong>Wrong X exp="+expVal+"</strong>";
            myDiv.style.color='red';
          } 
          break;
        }
      }
    }else{		// If dropDown
      var exp=(answers[curQue]);
      var myDiv=document.getElementById('q'+curQue);
      if(exp==elements[0].value) { 
        marks++; 
        myDiv.innerHTML="<strong>Correct &#10004;</strong>";
        myDiv.style.color='darkGreen';
      }
      else{ 
        if(elements[0].value!='default') {
          var expVal=elements[0].options[exp].text;
          myDiv.innerHTML="<strong>Wrong X exp="+expVal+"</strong>";
          //myDiv.innerHTML="<strong>Wrong X</strong>";
          myDiv.style.color='red';
        }
      }
    }
  }
  scroll(0,0);
  document.getElementById("showGif").style.visibility='visible';
  var mySMDiv=document.getElementById("showMarks");
  mySMDiv.innerHTML=marks+" / "+iCntr+" Marks "+(marks*100/iCntr)+" Percent";
}
function inputValidator(name) {
  var ShowAlert=''; var i;
  var AllFormElements=document.forms[name].getElementsByTagName("input");
  for (i = 0; i < AllFormElements.length; i++) {
    if (AllFormElements[i].type == 'text') {
      var x=AllFormElements[i].value;
      if (x==null || x=="") {
        alert("Text element '"+AllFormElements[i].name+"' must be filled out");
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
        alert('Please answer ' + ThisRadio + '\n');
        return(1);
      }     
    }
  }
  var AllSelects=document.forms[name].getElementsByTagName("select");
  for (i = 0; i < AllSelects.length; i++) {
    if (AllSelects[i].value=="default") {
      alert("'"+AllSelects[i].name+"' must be filled out");
      return 1;
    }
  }
  return 0;
}
function createTrueFalse(ans, qDes) {
  var qNum=++qCntr;
  iCntr=qCntr;
  var idx="Que"+qNum;
  document.write("<div class=d"+qNum%2+"><BR>"+qNum+") <select name="+idx+">");
  document.write("<option value=default selected>True / False</option>");
  document.write("<option value=1>FALSE</option>");
  document.write("<option value=2>TRUE</option>");
  document.write("</select>&nbsp;&nbsp;"+qDes+"<BR>");
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
    document.write("<td><p><select name="+idx+">");
    document.write("<option value=default selected></option>");
    for(j=0;j<aColumn.length;j++) { 
      document.write("<option value=" + (j+1) + ">" + aColumn[j] + "</option>");
    };
    document.write("</select></td>");
    document.write("<td><div id=q"+idx+">&nbsp;</div></td></tr>");
    answers[idx]=(ans[i]-aCntr++-1);
  };
  document.write("</table><BR></div>");
}
function createTableGridChose(qDes, qColumn, aColumn, aRow, ans) {
  var i; var j; var k;
  var qNum=++qCntr;
  document.write("<div class=d" + qNum%2 + "><BR>" + qNum + ") Chose right answer from drop-down menu. " + qDes + "<BR><BR>");
  document.write("<table bgcolor=Pink BORDER=1 RULES=NONE FRAME=BOX cellspacing=0 style=\"margin-left:50;\">");
  document.write("<tr class=d1><td></td>");
  var cntr=0;
  var idx="";
  for(i=0;i<aRow.length;i++) { document.write("<td>" + aRow[i] + "</td><td></td>"); }
  for(i=0;i<qColumn.length;i++) {
    document.write("<tr class=d" + i%2 + "><td>"+(i+1)+") " + qColumn[i] + "</td>");
    for(k=0;k<aRow.length;k++) { 
      iCntr++;
      idx="Que"+iCntr;
      document.write("<td><p><select name="+idx+">");
      document.write("<option value=default selected></option>");
      for(j=0;j<aColumn.length;j++) { document.write("<option value="+(j+1)+">"+aColumn[j]+"</option>");};
      document.write("</select></td>");
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
      document.write("<td><select name="+idx+">");
      document.write("<option value=default selected></option>");
      for(j=0;j<qColumn.length;j++) { 
        document.write("<option value=" + (j+1) + ">" + (j+1) + "</option>" + aColumn[j]);
      };
      document.write("</select></td>");
      document.write("<td><div id=q"+idx+">&nbsp;</div></td>");
      document.write("<td style=\"padding-left:100px;\">"+(i+1)+") "+aColumn[i]+"</td></tr>");
      answers[idx]=ans[i]-aCntr++-1;
    } else { 
      document.write("<tr class=d" + i%2 + "><td>"+(i+1)+") " + qColumn[i] + "</td><td></td></tr>");
    }
  };
  document.write("</table><BR></div>");
}
