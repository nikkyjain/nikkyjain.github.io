var allItems=new Object();
var curIndex=0;
var curTypeIndex=1;
var curType="abc";
var selectedId=1;
var mainFontSz=6;
var menuFontSz=4;
var bottomFontSz=4;
var relativePath="./";
var homePage="index.html";

$(document).ready(function(){
   $("#submitCorrections").click(function() {
       $(".correctionForm").slideToggle();
   });
});
function incrFontSz () {
  if(mainFontSz!=7) {
    mainFontSz+=1;
    menuFontSz+=1;
    itemClick(selectedId);
  }
}
function decrFontSz () {
  if(mainFontSz!=1) {
    mainFontSz-=1;
    menuFontSz-=1;
    itemClick(selectedId);
  }
}
function itemObj(index, tIndex, type, name)
{
  this.index=index;
  this.tIndex=tIndex;
  this.type=type;
  this.name=name;
  this.img="";
  this.main="";
  this.bottom="";
}
function showAll()
{
  var div = document.getElementById('mainContainer');
  div.innerHTML="";
  document.getElementById('busy').style.display='block';
  var opts = {
    lines: 13, // The number of lines to draw
    length: 20, // The length of each line
    width: 10, // The line thickness
    radius: 30, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
  };
  var target = document.getElementById('busy');
  var spinner = new Spinner(opts).spin(target);
  myShowAll();
  spinner.stop();
  document.getElementById('busy').style.display='none';
}
function findItem() {
  var findStr=document.getElementById('itemSearch').value;
  var myDiv = document.getElementById('mainContainer');
  myDiv.innerHTML="";
  var myMatches=new Array();
  var finalMsg="";
  for(var i=1; i<curIndex+1; i++) {
    var name=allItems['b_'+i].name;
    if(name.indexOf(findStr) >= 0) {
      myMatches.push(i);
    }
  }
  if(myMatches.length) {
    finalMsg="<br>Found "+myMatches.length+" match for '"+findStr+"'<br><br>";
    finalMsg+="<table border=1>";
    finalMsg+="<tr><th>Index</th><th>Category</th><th>Name</th></tr>";
    for(var i=0; i<myMatches.length; i++) {
      var obj=allItems['b_'+myMatches[i]];
      finalMsg+="<tr align=left><td>"+(i+1)+"</td><td>"+obj.type+
        "</td><td><a href=# onclick=\"itemClick("+obj.index+");\">"+obj.name+"</a></td></tr>";
    }
    finalMsg+="</table>";
  }else{
    finalMsg="<font color=red>किसी भी भजन में '"+findStr+"' नहीं मिला</font>";
  } 
  myDiv.innerHTML='<font size='+mainFontSz+'>'+finalMsg+'</font>';
  //alert(finalMsg);
  document.getElementById('itemSearch').value="";
}
function myShowAll() {
  var itemNo=curIndex;
  var itemNo=20;
  if (!confirm("This is going to take a while as there are "+itemNo+" Items. Ae you really sure you want to continue?")) {
    return;
  }
  for(i=1; i<itemNo+1; i++) {
    var obj=allItems['b_'+i];
    var myType=obj.type;
    var myName=obj.name;
    var myUrl="jainDataBase/bhajans/"+myType+"/main/"+myName+".txt";
    $.ajax({
      url:myUrl,
      async: false,
      error: function()
      {
        alert('file '+myUrl+' does not exist');
      },
      success: function(data)
      {
        data=data.replace( /^/, "<h3><strong>"+obj.index+". "+myName+"</strong></h3>\n");
        data=data.replace( /\n/g, "<br>");
        var div = document.getElementById('mainContainer');
        div.innerHTML = div.innerHTML + data;
      }
    });
  }
}
function itemClick(id)
{
  var obj=allItems['b_'+id];
  var myType=obj.type;
  var myName=obj.name;
  selectedId=id;
  if(obj.main!="") {
    if(obj.img!="") {
      $("#imageContainer").html(obj.img);
    }
    obj.main=obj.main.replace( /size=./g, "size="+mainFontSz);
    $("#mainContainer").html(obj.main);
    if(obj.bottom!="") {
      $("#bottomContainer").html(obj.bottom);
    }
    return;
  }
  var myUrl="jainDataBase/bhajans/"+myType+"/main/"+myName+".txt";
  $.ajax({
    url:myUrl,
    error: function()
    {
      alert('file '+myUrl+' does not exist');
    }, success: function(data) {
      var myUrl="jainDataBase/bhajans/"+myType+"/audio/"+myName+".mp3";
      var has_audio=0;
      $.ajax({
        url:myUrl,
        type:'HEAD',
        async:false,
        error: function() {
          replaceAndAdd(obj, data, mainFontSz, myName);
        }, success: function() { 
            data=data.replace( /^/, "<audio controls> <source src='jainDataBase/bhajans/"+myType+"/audio/"+myName+".mp3' type='audio/mpeg'> Your browser does not support this audio format.  </audio><br><br>");
            replaceAndAdd(obj, data, mainFontSz, myName);
        }
      });
    }
  });
}

function replaceAndAdd(obj, data, sz, name) {
      data=data.replace( /^/, "<h3><strong>"+obj.index+". "+name+"</strong></h3>\n");
      data=data.replace( /\n/g, "<br>");
      data=data.replace( /<i>/g, "<i><font color=darkblue>");
      data=data.replace( /<\/i>/g, "</font></i>");
      data=data.replace( /<strong>/g, "<strong><font color=darkred>");
      data=data.replace( /<\/strong>/g, "</font></strong>");
      data='<font size='+sz+'>'+data+'</font>';
      obj.main=data;
      $("#mainContainer").html(data);

}

function clickNext() 
{
  selectedId=(selectedId==curIndex) ? 1 : selectedId+1;
  itemClick(selectedId);
}

function clickPrev() 
{
  selectedId=(selectedId==1) ? curIndex : selectedId-1;
  itemClick(selectedId);
}

function init() {
  var data;
  var availableTags=[];
  data=$.ajax({
    url: "jainDataBase/bhajans/index.txt",
    async: false
  }).responseText;
  allItems.categories=data.split("\n");
  allItems.categories.pop();

  for(i=0; i<allItems.categories.length; i++) {
    curType=allItems.categories[i];
    data=$.ajax({
      url: "jainDataBase/bhajans/"+curType+"/index.txt",
      async: false
    }).responseText;
    data=data.replace( /.txt/g, "");
    var myItems=data.split("\n");
    myItems.pop();
    for(j=0; j<myItems.length; j++) {
      curIndex++;
      myIndex=j+1;
      var myName=myItems[j];
      newitem=new itemObj(curIndex, myIndex, curType, myItems[j]);
      allItems['b_'+curIndex]=newitem;
      allItems[curType+"_"+myIndex]=newitem;
      allItems[curType]=myIndex;
      availableTags.push(myItems[j]);
    }
  }
  $( "#itemSearch" ).autocomplete({
    source: availableTags
  });
}

function addTable() 
{
  document.write("<table width=100% justify=center border=0><tr>");
  for(i=0; i<allItems.categories.length; i++) {
    curType=allItems.categories[i];
	myCurType=curType.replace( /.*-/g, '');
    document.write("<td class=example data-dropdown=#"+curType+">"+myCurType+"</td>");
  }
  document.write("</tr></table>");
  addType();
}

function addType() 
{
  for(i=0; i<allItems.categories.length; i++) {
    curType=allItems.categories[i];
    document.write("<div id="+curType+" class=\"dropdown dropdown-tip dropdown-scroll\">");
    document.write("<ul class=dropdown-menu>");
    for(j=1; j<allItems[curType]+1; j++) {
      var obj=allItems[curType+"_"+j];
      document.write("<li><a href=# onClick=\"itemClick("+obj.index+"); return false;\"><font size="+menuFontSz+">"+j+".  "+obj.name+"</font></a></li>");
    }
    document.write("</ul></div>");
  }
  itemClick(1);
}
