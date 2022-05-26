
var curCntr=0;

var puzzleW=puzzle.rows[0].length;		// Puzzle Width
var puzzleL=puzzle.rows.length;			// Puzzle Length
var choices=[];							// All valid puzzle characters
var activeCells=[];
var answers=[];
var hints={};
var cells={};							// This saves all cells with their master and type info
	cells["across"]={};
	cells["down"]={};
var marks=0;
var commonStr="";
var curAns="";
var password = "706173737764";

function randomizeChoice(ans) {
  var curChoices=[];
  curChoices.push(ans);
  for(var i=0;i<15;i++) {
    var rand=Math.floor((Math.random() * (choices.length-1)) + 1);
	if($.inArray(choices[rand], curChoices)==-1) {
	  curChoices.push(choices[rand]);
	}
  }
  curChoices.sort();
  var commonStr="<option value='default'></option>";
  for(k=0;k<curChoices.length;k++){
  	commonStr+="<option value='"+curChoices[k]+"'>"+curChoices[k]+"</option>";
  }
  commonStr+="</select>";
  return commonStr;
}

function createPuzzle() {
  for (var i=0; i<puzzle.rows.length;i++ ) {
  	for (j=0; j<puzzle.rows[i].length;j++ ) {
  		if(puzzle.rows[i][j]!="_" && $.inArray(puzzle.rows[i][j], choices)==-1) {
  			choices.push(puzzle.rows[i][j]);
  		}
  	}
  }
  choices.sort();
  for (var i=0; i<puzzleL;i++ ) {
  	document.write("<tr>");
  	for (j=0; j<puzzleW;j++ ) {
  		if(puzzle.rows[i][j]!="_") {
  			// Now determine whether a new ID needs to be created at this index
  			str="<td id=td"+((i*puzzleW)+j)+" align=center><span class=ss id=ss"+((i*puzzleW)+j)+"></span>";
  			if(j<puzzleW-1 && ((j!=0 && puzzle.rows[i][j-1]=="_") || !j) && puzzle.rows[i][j+1]!="_") {
  				curCntr++;
  				str+="<sup><span class=topSubScript>"+curCntr+"</span></sup>";
  			}else if(i<puzzleL-1 && ((i!=0 && puzzle.rows[i-1][j]=="_") || !i) && puzzle.rows[i+1][j]!="_") {
  				curCntr++;
  				str+="<sup><span class=topSubScript>"+curCntr+"</span></sup>";
			}
  			if(j<puzzleW-1 && ((j!=0 && puzzle.rows[i][j-1]=="_") || !j) && puzzle.rows[i][j+1]!="_") {
				hints[((i*puzzleW)+j).toString()]={};
				hints[((i*puzzleW)+j).toString()]["across"]=curCntr;
				cells["across"][curCntr.toString()]=[(i*puzzleW)+j];
  			}
			if(i<puzzleL-1 && ((i!=0 && puzzle.rows[i-1][j]=="_") || !i) && puzzle.rows[i+1][j]!="_") {
				if(!(((i*puzzleW)+j).toString() in hints)) { 
					hints[((i*puzzleW)+j).toString()]={}; 
				}
				hints[((i*puzzleW)+j).toString()]["down"]=curCntr;
				cells["down"][curCntr.toString()]=[(i*puzzleW)+j];
  			}
			if(j && ((i*puzzleW)+j-1).toString() in hints && ("across" in hints[((i*puzzleW)+j-1).toString()])) {
				if(!(((i*puzzleW)+j).toString() in hints)) {
					hints[((i*puzzleW)+j).toString()]={};
				}
				hints[((i*puzzleW)+j).toString()]["across"]=hints[((i*puzzleW)+j-1).toString()]["across"];
				cells["across"][hints[((i*puzzleW)+j-1).toString()]["across"]].push((i*puzzleW)+j);
			}
			if((((i-1)*puzzleW)+j).toString() in hints && "down" in hints[(((i-1)*puzzleW)+j).toString()]) {
				if(!(((i*puzzleW)+j).toString() in hints)) {
					hints[((i*puzzleW)+j).toString()]={};
				}
				hints[((i*puzzleW)+j).toString()]["down"]=hints[(((i-1)*puzzleW)+j).toString()]["down"];
				cells["down"][hints[(((i-1)*puzzleW)+j).toString()]["down"]].push((i*puzzleW)+j);
			}
  			str+="<select id=sel"+((i*puzzleW)+j)+" style='margin: 0; padding: 5'>";
			activeCells.push((i*puzzleW)+j);
			answers.push(puzzle.rows[i][j]);
			var myStr=randomizeChoice(puzzle.rows[i][j]);
			str+=myStr;
  			document.write(str);
			$("#td"+((i*puzzleW)+j)).mouseover(function () {
				var myStr="";
   			    myCell=hints[(($(this).closest("tr").index()*puzzleW)+$(this).closest("td").index())];
				if("across" in myCell) {
					myStr="<font color=red>"+myCell["across"]+") <strong>&#8594;</strong> : "+clues[myCell["across"]]["across"]+"<br></font>";
					for(var x in cells["across"][myCell["across"]]) {
						document.getElementById("td"+cells["across"][myCell["across"].toString()][x]).style.backgroundColor="#FACC2E";
					}
				}else{
					myStr="<br>";
				}
				if("down" in myCell) {
					myStr+="<font color=blue>"+myCell["down"]+") <strong>&#8595;</strong> : "+clues[myCell["down"]]["down"]+"</font>";
					for(var x in cells["down"][myCell["down"]]) {
						document.getElementById("td"+cells["down"][myCell["down"].toString()][x]).style.backgroundColor="#FACC2E";
					}
				}else{
					myStr+="<br>";
				}
   			    document.getElementById("showHints").innerHTML=myStr;
   			    document.getElementById("showHints1").innerHTML=myStr;
   			});
 			$("#td"+((i*puzzleW)+j)).mouseleave(function(){
 			 	document.getElementById("showHints").innerHTML="<br>";
 			 	document.getElementById("showHints1").innerHTML="<br>";
				for(var x in cells["across"][myCell["across"]]) {
					if(document.getElementById('sel'+cells["across"][myCell["across"].toString()][x]).value!="default") {
						document.getElementById("td"+cells["across"][myCell["across"].toString()][x]).style.backgroundColor="yellow";
					}else{
						document.getElementById("td"+cells["across"][myCell["across"].toString()][x]).style.backgroundColor="white";
					}
				}
				for(var x in cells["down"][myCell["down"]]) {
					if(document.getElementById('sel'+cells["down"][myCell["down"].toString()][x]).value!="default") {
						document.getElementById("td"+cells["down"][myCell["down"].toString()][x]).style.backgroundColor="yellow";
					}else{
						document.getElementById("td"+cells["down"][myCell["down"].toString()][x]).style.backgroundColor="white";
					}
				}
 			});
  		}else{
  			document.write("<td BGCOLOR=grey>");
  		}
  	}
  	document.write("</tr>");
  }
  $('select').on('change', function() {
    var myId=this.id.replace("sel","");
    var myRow=Math.ceil(myId/puzzleW);
    var myCol=myId%puzzleW;
    if(this.value=="default") {
    	document.getElementById('td'+myId).style.backgroundColor="white";
		localStorage.removeItem(puzzleID+"_"+myId);
    }else{
    	document.getElementById('td'+myId).style.backgroundColor="yellow";
		localStorage[puzzleID+"_"+myId]=this.value;
    }
  });
  restoreHistory();
}

function restoreHistory() {
  for(x in activeCells) {
    if(localStorage[(puzzleID+"_"+activeCells[x])]) {
      document.getElementById('sel'+activeCells[x]).value=localStorage[(puzzleID+"_"+activeCells[x])];
      document.getElementById('td'+activeCells[x]).style.backgroundColor="yellow";
	}
  }
}
function fillClues(id, type, header) {
  myTxt="<strong>"+header+"<br></strong>";
  for(i=1;i<=curCntr;i++) {
  	if(type in clues[i]) {
  		myTxt+=i+") "+clues[i.toString()][type]+"<br>";
  	}
  }
  $("#"+id).html(myTxt);
}

function setDivSz() {
  document.getElementById("showHints").style.height="40px";
  document.getElementById("showHints1").style.height="40px";
}

function calculate() {
  marks=0;
  for(x in activeCells) {
	var actual=document.getElementById('sel'+activeCells[x]).value;
	var exp=answers[x];
	if(actual!=exp) {
      document.getElementById('ss'+activeCells[x]).innerHTML="<sub><font color=red>&#10007;</font></sub>";
	}else{
      document.getElementById('ss'+activeCells[x]).innerHTML="<sub><font color=darkgreen>&#10003;</font></sub>";
	  marks++;
	}
  }
  document.getElementById("showGif").style.visibility='visible';
  document.getElementById("showMarks").innerHTML=marks+" / "+activeCells.length+" Marks "+(marks*100/activeCells.length)+" Percent";
}

function reset() {
  marks=0;
  for(x in activeCells) {
	document.getElementById('sel'+activeCells[x]).value="default";
    document.getElementById('td'+activeCells[x]).style.backgroundColor="white";
    document.getElementById('ss'+activeCells[x]).innerHTML="";
  }
  document.getElementById("showGif").style.visibility='hidden';
}

function solve() {
  var result = "";
  if (confirm('Press "OK" only if you have password to solve puzzle')) {
    for(var i=0;i<password.length;i=i+2){result=result+'%'+password.substr(i,2);}
    if (prompt('Password','') != unescape(result)) { close(); top.location.reload(); }
  }else{
    return;
  }
  for(x in activeCells) {
	var exp=answers[x];
	document.getElementById('sel'+activeCells[x]).value=exp;
  }
}
