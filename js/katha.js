var allItems=new Object();
var curIndex=0;
var curTypeIndex=1;
var curType="abc";
var selectedId=1;
var mainFontSz=30;
var menuFontSz=4;
var bottomFontSz=20;
var relativePath="./";
var homePage="index.html";


$(document).ready(function(){
  $("#submitCorrections").click(function() {
    $(".correctionForm").slideToggle();
  });
});
function incrFontSz () {
  if(mainFontSz<50) {
    mainFontSz+=4;
    menuFontSz+=4;
    bottomFontSz+=4;
    $(".bottomContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
  }
}
function decrFontSz () {
  if(mainFontSz>10) {
    mainFontSz-=4;
    menuFontSz-=4;
    bottomFontSz-=4;
    $(".bottomContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
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
function itemClick(id)
{
  var obj=allItems['b_'+id];
  var myType=obj.type;
  var myName=obj.name;
  selectedId=id;
  if(obj.main!="") {
    if(obj.img!="") {
      $("#imageContainer").html(obj.img);
    }else{
      $("#imageContainer").html('');
    }
    //obj.main=obj.main.replace( /size=./g, "size="+mainFontSz);
    $("#mainContainer").html(obj.main);
    $(".bottomContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
    return;
  }
  var myUrl="jainDataBase/kathas/"+myType+"/"+myName+"/myXML.txt";
  $.ajax({
    url:myUrl,
    error: function()
    {
      alert('file '+myUrl+' does not exist');
    },
    success: function(data)
    {
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(data,"text/xml");
      var pages = xmlDoc.getElementsByTagName('page');
      for(var i=0;i<pages.length;i++){
        var itemName=findNodeValue(pages[i], 'name');
        var topData=findNodeValue(pages[i], 'main');
        topData=topData.replace( /\n/g, "<br>");
        if(i==0) {topData="<strong>"+myName+"</strong><br><br>"+topData;}
        var tooltipData=findNodeValue(pages[i], 'tooltip');
        if(tooltipData) {
          var tips=tooltipData.split("\n");
          tips.pop();
          for (var j=0; j<tips.length; j++) {
            var tip=tips[j].split('=');
            var myRegEx = new RegExp(tip[0], 'g'); 
            topData=topData.replace(myRegEx, '<a class=tooltip href=# onclick=\"doNothing(); return false;\">'+tip[0]+'<span class=classic>'+tip[1]+'</span></a>');
          }
        }
        topData="<div class=topContainer>"+topData+"</div>";
        obj.main+=topData;
        var bottomData=findNodeValue(pages[i], 'bottom');
        if(bottomData) {
          bottomData=bottomData.replace( /\n/g, '<br><br></p><p>');
          var myRegEx = new RegExp("शंका [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<font color=red>शंका –');
          var myRegEx = new RegExp("प्रश्न [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<font color=red>शंका –');
          var myRegEx = new RegExp("समाधान [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '</font><font color=Darkgreen>समाधान –</font>');
          var myRegEx = new RegExp("उत्तर [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '</font><font color=Darkgreen>समाधान –</font>');
          bottomData=bottomData.replace( /विशेषार्थ –/g, '<b><font color=maroon>विशेषार्थ –</font></b>');
          bottomData='<font color=darkblue><p>'+bottomData+'</font>';
          bottomData="<div class="+itemName+" style=\"display: none; text-align: justify; margin: 0 auto;  width: 90%;\">"+
          bottomData+"</div><hr width=50%><br>";
          bottomData="<div class=bottomContainer><br><a href=# onClick=\"myBottom(\'"+
          itemName+"\'); return false;\">"+'कथा'+"</a></br>"+bottomData+"</div>";
          obj.main+=bottomData;
        }
      }
      $("#mainContainer").html(obj.main);
      $(".bottomContainer").css("font-size",bottomFontSz+'px');
      $(".topContainer").css("font-size",mainFontSz+'px');
    }
  });
}
function clickNext() 
{
  selectedId=(selectedId==curIndex) ? 1 : selectedId+1;
  itemClick(selectedId);
  $(".bottomContainer").css("font-size",bottomFontSz+'px');
  $(".topContainer").css("font-size",mainFontSz+'px');
}
function clickPrev() 
{
  selectedId=(selectedId==1) ? curIndex : selectedId-1;
  itemClick(selectedId);
  $(".bottomContainer").css("font-size",bottomFontSz+'px');
  $(".topContainer").css("font-size",mainFontSz+'px');
}


function init() {
  var data;
  var myUrl="jainDataBase/kathas/index.txt";
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
        var myUrl1="jainDataBase/kathas/"+curType+"/index.txt";
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
    document.write("<td class=example data-dropdown=#"+curType+">"+curType+"</td>");
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
      document.write("<li><a href=# onClick=\"itemClick("+obj.index+"); return false;\"><font size=4>"+obj.name+"</font></a></li>");
    }
    document.write("</ul></div>");
  }
  itemClick(1);
}
