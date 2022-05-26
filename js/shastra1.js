var allItems=new Object();
var curIndex=0;
var curTypeIndex=1;
var curType="abc";
var selectedId=1;
var mainFontSz=30;
var menuFontSz=4;
var bottomFontSz=20;


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
    $(".mainTitle").css("font-size",mainFontSz+'px');
    $(".titleContainer").css("font-size",bottomFontSz+'px');
    $(".bottomContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
  }
}
function decrFontSz () {
  if(mainFontSz>10) {
    mainFontSz-=4;
    menuFontSz-=4;
    bottomFontSz-=4;
    $(".mainTitle").css("font-size",mainFontSz+'px');
    $(".titleContainer").css("font-size",bottomFontSz+'px');
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
    $("#mainContainer").html(obj.main);
    $(".mainTitle").css("font-size",mainFontSz+'px');
    $(".titleContainer").css("font-size",bottomFontSz+'px');
    $(".bottomContainer").css("font-size",bottomFontSz+'px');
    $(".topContainer").css("font-size",mainFontSz+'px');
    return;
  }
  var myUrl="jainDataBase/dravyanuyog/"+myType+"/"+myName+"/myXML.txt";
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
        var titleData=findNodeValue(pages[i], 'title');
        if(i==0) {
    	  var localType=myType;
    	  var localName=myName;
    	  var myRegEx = new RegExp('.*?_', 'g'); 
    	  localType=localType.replace(myRegEx, '');
    	  localName=localName.replace(myRegEx, '');
    	  localName=localType+' ( '+localName+')';
    	  obj.main='<div class=mainTitle><strong><font color=darkgreen>'+localName+'</font></strong><br><br></div>';
    	}
        if(titleData) {
          obj.main+='<div class=titleContainer><font color=darkmaroon>'+titleData+'</font></div>';
        }
        var topData=findNodeValue(pages[i], 'main');
        topData=topData.replace( /\n/g, "<br>");
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
        var imageData=findNodeValue(pages[i], 'image');
        topData="<div class=topContainer>"+topData+"</div>";
        obj.main+=topData;
        var bottomData=findNodeValue(pages[i], 'bottom');
        if(bottomData) {
          bottomData=bottomData.replace( /\n/g, '<br>');
          var myRegEx = new RegExp('शंका [-–—]', 'g'); 
          bottomData=bottomData.replace( myRegEx, '<b><font color=red>शंका –');
          var myRegEx = new RegExp("प्रश्न [-–—:]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<b><font color=red>शंका –');
          var myRegEx = new RegExp("समाधान [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '</font><font color=Darkgreen>समाधान –</font></b>');
          var myRegEx = new RegExp("उत्तर [-–—:]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '</font><font color=Darkgreen>समाधान –</font></b>');
          var myRegEx = new RegExp("अर्थ [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<b><font color=maroon>अर्थ –</font></b>');
          var myRegEx = new RegExp("विशेषार्थ [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<b><font color=maroon>विशेषार्थ –</font></b>');
          var myRegEx = new RegExp("भावार्थ [-–—]", 'g'); 
          bottomData=bottomData.replace( myRegEx, '<b><font color=maroon>भावार्थ –</font></b>');
          bottomData='<font color=darkblue>'+bottomData+'</font>';
	      if(imageData) {
            imageData="<div class=imageContainer align=center><img src="+imageData+" height=100% ></div>";
	      }else{
            imageData="";
		  }
          bottomData="<div class="+itemName+" style=\"display: none; text-align: justify; margin: 0 auto;  width: 90%;\">"+
            imageData+bottomData+"</div><hr width=50%><br>";
          bottomData="<div class=bottomContainer><br><a href=# onClick=\"myBottom(\'"+
          itemName+"\'); return false;\">"+'अर्थ'+"</a></br>"+bottomData+"</div>";
          obj.main+=bottomData;
        }
      }
      $("#mainContainer").html(obj.main);
      $(".mainTitle").css("font-size",mainFontSz+'px');
      $(".titleContainer").css("font-size",bottomFontSz+'px');
      $(".bottomContainer").css("font-size",bottomFontSz+'px');
      $(".topContainer").css("font-size",mainFontSz+'px');
    }
  });
}
function clickNext() 
{
  selectedId=(selectedId==curIndex) ? 1 : selectedId+1;
  itemClick(selectedId);
  $(".mainTitle").css("font-size",mainFontSz+'px');
  $(".titleContainer").css("font-size",bottomFontSz+'px');
  $(".bottomContainer").css("font-size",bottomFontSz+'px');
  $(".topContainer").css("font-size",mainFontSz+'px');
}
function clickPrev() 
{
  selectedId=(selectedId==1) ? curIndex : selectedId-1;
  itemClick(selectedId);
  $(".mainTitle").css("font-size",mainFontSz+'px');
  $(".titleContainer").css("font-size",bottomFontSz+'px');
  $(".bottomContainer").css("font-size",bottomFontSz+'px');
  $(".topContainer").css("font-size",mainFontSz+'px');
}


function init() {
  var data;
  var myUrl="jainDataBase/dravyanuyog/index.txt";
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
        var myUrl1="jainDataBase/dravyanuyog/"+curType+"/index.txt";
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
      document.write("<li><a href=# onClick=\"itemClick("+obj.index+"); return false;\"><font size=4>"+myName+"</font></a></li>");
    }
    document.write("</ul></div>");
  }
  itemClick(1);
}
