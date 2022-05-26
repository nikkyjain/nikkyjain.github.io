var allItems=new Object();
var curIndex=0;
var curTypeIndex=1;
var curType="abc";
var selectedId=1;
var mainFontSz=30;
var menuFontSz=4;
var bottomFontSz=20;
var hideTeeka=0;
var hideArth=0;
var hideTitle=0;
var hidePadhya=0;
showHideMenu=1;

if (typeof homePage === 'undefined') {
  var homePage="teeka.html";
}
if (typeof relativePath === 'undefined') {
  relativePath="../../../../";
}

$.getScript(relativePath+"js/jquery-animate-css-rotate-scale.js");
$.getScript(relativePath+"js/jquery.dropdown.js");
$.getScript(relativePath+"js/common.js");

$(document).ready(function(){
  $("#submitCorrections").click(function() {
    $(".correctionForm").slideToggle();
  });
});
function hideShowTitle() {
  $('.titleContainer').toggle();
  if(!hideTitle) {
    $('.hideShowTitle').html('Show Title');
    hideTitle=1;
  } else {
    $('.hideShowTitle').html('Hide Title');
    hideTitle=0;
  }
}
function hideShowPadhya() {
  $('.padhyaContainer').toggle();
  if(!hidePadhya) {
    $('.hideShowPadhya').html('Show Padhya');
    hidePadhya=1;
  } else {
    $('.hideShowPadhya').html('Hide Padhya');
    hidePadhya=0;
  }
}
function hideShowArth() {
  $('.arthContainer').toggle();
  if(!hideArth) {
    $('.hideShowArth').html('Show Arth');
    hideArth=1;
  } else {
    $('.hideShowArth').html('Hide Arth');
    hideArth=0;
  }
}
function hideShowTeeka() {
  $('.teeka').toggle();
  if(!hideTeeka) {
    $('.hideShowTeeka').html('Show Teeka');
    hideTeeka=1;
  } else {
    $('.hideShowTeeka').html('Hide Teeka');
    hideTeeka=0;
  }
}
function incrFontSz () {
  if(mainFontSz<50) {
    mainFontSz+=4;
    menuFontSz+=4;
    bottomFontSz+=4;
    $(".mainTitle").css("font-size",mainFontSz+'px');
    $(".padhyaContainer").css("font-size",bottomFontSz+'px');
    $(".titleContainer").css("font-size",bottomFontSz+'px');
    $(".teeka").css("font-size",bottomFontSz+'px');
    $(".arthContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
    $(".display").css("font-size",bottomFontSz+'px');
  }
}
function decrFontSz () {
  if(mainFontSz>10) {
    mainFontSz-=4;
    menuFontSz-=4;
    bottomFontSz-=4;
    $(".mainTitle").css("font-size",mainFontSz+'px');
    $(".titleContainer").css("font-size",bottomFontSz+'px');
    $(".padhyaContainer").css("font-size",bottomFontSz+'px');
    $(".teeka").css("font-size",bottomFontSz+'px');
    $(".arthContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
    $(".display").css("font-size",bottomFontSz+'px');
  }
}
function itemObj(index, tIndex, type, name)
{
  this.index=index;
  this.tIndex=tIndex;
  this.type=type;
  this.name=name;
  this.img="";
  this.title="";
  this.main="";
  this.bottom="";
}

function findNodeValue(element, nodeName) {
  var nodes=element.getElementsByTagName(nodeName);
  if(nodes.length) {
    return(element.getElementsByTagName(nodeName)[0].childNodes[0].nodeValue);
  }else{
    return(0);
  }
}
function myBottom(elem){
  $("."+elem).slideToggle();
}
function doNothing() {
  return 0;
}

function addTable() 
{
  document.write("<table width=100% justify=center border=0><tr>");
  for(i=0; i<allItems.categories.length; i++) {
    var curType=allItems.categories[i];
    //alert("HuHu"+allItems.categories[i]);
    var myRegEx = new RegExp('.*?_', 'g'); 
    var myType=curType.replace( myRegEx, '');
    document.write("<td class=example data-dropdown=#"+curType+">"+myType+"</td>");
  }
  document.write("</tr></table>");
  addType();
}

function addType() 
{
  //alert("HiHi");
  for(i=0; i<allItems.categories.length; i++) {
    var curType=allItems.categories[i];
    document.write("<div id="+curType+" class=\"dropdown dropdown-tip dropdown-scroll\">");
    document.write("<ul class=dropdown-menu>");
    for(j=1; j<allItems[curType]+1; j++) {
      var obj=allItems[curType+"_"+j];
      var myRegEx = new RegExp('.*?_', 'g'); 
      var myName=obj.name.replace( myRegEx, '');
      document.write("<li><a href=\"jainDataBase/teeka/"+curType+"/"+obj.name+"/index.html\"><font size=4>"+myName+"</font></a></li>");
    }
    document.write("</ul></div>");
  }
}

function myExpand(elem){
  $('#'+elem).slideToggle();
}
$(document).ready(function(){
  function toggleTeeka(gatha,teeka) {
    var a=gatha+'-'+teeka;
    if(document.getElementById(a).style.display=='none') {
      document.getElementById(a).style.display='block';
      $('#'+teeka+'.'+gatha).css('color', 'green');
    }else{
      document.getElementById(a).style.display='none';
      $('#'+teeka+'.'+gatha).css('color', 'red');
    };
  };
  $('span[id^="teeka"]').click(function() { 
	toggleTeeka(this.className,this.id); 
  });
  $('.sanskritTeeka').click(function() { 
	$('#sanskritTeeka').slideToggle(); 
  });
});
function init() {
  var data;
  var myUrl="jainDataBase/teeka/index.txt";
  var curType;
  $.ajax({
    url:myUrl,
    async: false,
    success: function(data)
    {
      allItems.categories=data.split("\n");
      allItems.categories.pop();
      for(var i=0; i<allItems.categories.length; i++) {
        curType=allItems.categories[i];
        var myUrl1="jainDataBase/teeka/"+curType+"/index.txt";
        $.ajax({
          url:myUrl1,
          async: false,
          success: function(myData)
          {
            myData=myData.replace( /.txt/g, "");
            var myItems=myData.split("\n");
            myItems.pop();
            //alert("Yahoo "+curType+" : "+myItems.length);
            for(j=0; j<myItems.length; j++) {
              curIndex++;
              myIndex=j+1;
              newitem=new itemObj(curIndex, myIndex, curType, myItems[j]);
              allItems['b_'+curIndex]=newitem;
              allItems[curType+"_"+myIndex]=newitem;
              allItems[curType]=myIndex;
            }
          }
        });
      }
    }
  });
}

function addTable() 
{
  document.write("<table width=100% justify=center border=0><tr>");
  for(i=0; i<allItems.categories.length; i++) {
    var curType=allItems.categories[i];
    //alert("HuHu"+allItems.categories[i]);
    var myRegEx = new RegExp('.*?_', 'g'); 
    var myType=curType.replace( myRegEx, '');
    document.write("<td class=example data-dropdown=#"+curType+">"+myType+"</td>");
  }
  document.write("</tr></table>");
  addType();
}

function addType() 
{
  //alert("HiHi");
  for(i=0; i<allItems.categories.length; i++) {
    var curType=allItems.categories[i];
    document.write("<div id="+curType+" class=\"dropdown dropdown-tip dropdown-scroll\">");
    document.write("<ul class=dropdown-menu>");
    for(j=1; j<allItems[curType]+1; j++) {
      var obj=allItems[curType+"_"+j];
      var myRegEx = new RegExp('.*?_', 'g'); 
      var myName=obj.name.replace( myRegEx, '');
      document.write("<li><a href=\"jainDataBase/teeka/"+curType+"/"+obj.name+"/index.html\"><font size=4>"+myName+"</font></a></li>");
    }
    document.write("</ul></div>");
  }
}

