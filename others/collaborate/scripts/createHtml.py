# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
import shutil
from shutil import copyfile
from common import createBhajan
from common import mkdirs
from common import createHeader

curDir=re.sub(r'.*_','',os.path.basename(os.path.abspath('./')))
parentDir=re.sub(r'.*_','',os.path.basename(os.path.dirname(os.path.abspath('./'))))
pDir=os.path.basename(os.path.abspath('./'))
gDir=os.path.basename(os.path.dirname(os.path.abspath('./')))
ggDir=os.path.basename(os.path.dirname(os.path.dirname(os.path.abspath('./'))))
jsFile="myItem.js"
dbDir=re.sub('jaindb.*', 'jaindb', os.path.abspath('./'))
outDir=dbDir+"/jainDataBase/"+ggDir+"/"+gDir+"/"+pDir+"/html"
#outDir=os.path.abspath('./')+"/html"
print("Will Create HTML files here - "+outDir)
if os.path.isdir(outDir):
    shutil.rmtree(outDir)
mkdirs(outDir)
firstFile=0

def handleJsMind (fData, jsmCtr):
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("</div>\n<div class=paragraph>", "\n"), fData, flags=re.DOTALL)
    #fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<br>", "\n"), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<b><font color=darkRed>[", "["), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("]</font></b>", "]"), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<span class=comment>", ""), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace(")</span>", ")"), fData, flags=re.DOTALL)
    fData=fData.replace('<div class=paragraph><!--JsMindTagBegin-->', '<div class=jsm id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH2-->', '<div class=jsm2 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH6-->', '<div class=jsm6 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH7-->', '<div class=jsm7 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<!--JsMindTagBeginH10-->', '<div class=jsm10 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH12-->', '<div class=jsm12 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<!--JsMindTagEnd-->', ']}; var options'+str(jsmCtr)+' = { container:"jsm'+str(jsmCtr)+'", editable:false, theme:"'+themes[jsmCtr%9]+'" }; var jm = new jsMind(options'+str(jsmCtr)+'); jm.show(mind'+str(jsmCtr)+'); \n</script>\n')
    return (fData)

############## Start Main Code Here ######################
js=open(outDir+"/"+jsFile, "w")

# All Javascript Functions
js.write("""
$( document ).ready(function() {
  $('.teekakaar').change(function() {
    window.location.href = $(this).val()
  })
})
function toggleTeeka(teeka) {
  $('#teeka'+teeka).toggle();
  if($('.teeka'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('.teeka'+teeka).css('color', 'green')
  }else{
    $('.teeka'+teeka).css('color', 'red')
  }
}
function toggleSTeeka(teeka) {
  $('#steeka'+teeka).toggle();
  if($('#stitle'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('#stitle'+teeka).css('color', 'green')
  }else{
    $('#stitle'+teeka).css('color', 'red')
  }
}
""")
# Keep notes display none by default, if they exist
myCntr=0
for teeka in sorted(glob.glob('teeka[0-9]*')):
  if bool('notes' in teeka):
    js.write("""
    $( document ).ready(function() {
        $('#teeka"""+str(myCntr)+"""').toggle();
        $('.teeka"""+str(myCntr)+"""').css('color', 'red')
    })
""")
  myCntr+=1

myMainFIles=sorted(glob.glob('main/*'))
firstMain=os.path.basename(myMainFIles[0]);
lastMain=os.path.basename(myMainFIles[-1]);
myMainCntr=0;
jsmCtr=0
themes=['pomegranate', 'primary', 'danger', 'success', 'nephrite', 'belizehole', 'wisteria', 'asphalt', 'pumpkin'];
        
for gatha in myMainFIles:
    myGatha=os.path.basename(gatha)
    if myGatha==firstMain:
        myPrevGatha=""
    else:
        myPrevGatha=os.path.basename(myMainFIles[myMainCntr-1]).replace('.txt','.html')
    if myGatha==lastMain:
        myNextGatha=""
    else:
        myNextGatha=os.path.basename(myMainFIles[myMainCntr+1]).replace('.txt','.html')
    myMainCntr+=1
    myGathaNum=myGatha.replace('.txt','')
    html=open(outDir+"/"+myGathaNum+".html", "w")
    myRelPath="../../../../../"
    html.write("""<!DOCTYPE html>
    <html>
    <head>
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
      <title>"""+curDir+"""</title>
      <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
      <link rel="stylesheet" href='"""+myRelPath+"""css/orgchart.css'>
      <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
      <link rel="stylesheet" href='"""+myRelPath+"""css/jsmind.css'>
      <link rel="stylesheet" href='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
      <script type="text/javascript" src='"""+myRelPath+"""js/jsmind.js'></script>
      <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
      <script type="text/javascript" src='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script>
      <script type="text/javascript" src='"""+myRelPath+"""js/myFontSzCtrl.js'></script>
      <script type="text/javascript" src='myItem.js'></script>
      <style>
        body {
          background-color: #fcf5e8;
        }
        a {
          text-decoration: none !important;
        }
        .hdr {
          font-size: 5vw;
          color : darkred;
          font-weight:bold;
        }
        .index {
          color:blue;
          float:right;
        }
        hr {
          border: none;
          height: 3px;
          color: #333;
          background-color: #333;
          width:50%;
        }
        a, a:visited, a:hover, a:active {
          color: inherit;
        }
        $('select option:even').css({'color': 'red'})
        $('select option:odd').css({'color': 'blue'})
      </style>
    </head>
    <body>
    """)
    if(myPrevGatha!=""):
        html.write("<a href='"+myPrevGatha+"' rel=external style='float: left'><img src='"+myRelPath+"images/common/prev.jpg' height=50 width=50/></a>")
    if(myNextGatha!=""):
        html.write("<a href='"+myNextGatha+"' rel=external style='float: right'><img src='"+myRelPath+"images/common/next.jpg' height=50 width=50/></a>")
    html.write("<div style='text-align: center'><a href='"+myRelPath+"index.html' rel=external><img src='"+myRelPath+"images/jain-saint.jpg' width=8%></img></a></div>")
    # See if teeka exists
    numTeeka=len(glob.glob("teeka[0-9][0-9]-*/"))
    if(numTeeka>0):
        html.write("  <div data-role='navbar'>\n    <ul>\n")
        myCntr=0;
        adhikaarStarted=0
        # For every existing teeka, create a select menu and add all files in it
        for teeka in sorted(glob.glob("teeka[0-9][0-9]-*/")):
            myTeeka=re.sub("teeka\d+-", "", os.path.basename(os.path.dirname(teeka)))
            html.write("""
        <li>
          <select name='select-native-"""+str(myCntr)+"""' class='teekakaar' id='select-native-"""+str(myCntr)+"""' >
              <option disabled=disabled selected=true>"""+myTeeka+"""</option>\n""")
            if firstFile==0:
                js.write("$( document ).ready(function() {\n")
                js.write("  mySel=$('select#select-native-"+str(myCntr)+"')\n")
            myCntr+=1
            for item in sorted(glob.glob(teeka+"/*")):
                myItem=re.sub(r'.*__', '', os.path.basename(item))
                myLink=re.sub(r'__.*.txt', '.txt', os.path.basename(item))
                myLinkName=myLink.replace('.txt', '')
                myItemName=myItem.replace('.txt', '')
                if(os.path.isfile("adhikaar/"+myLink)):
                    with open("adhikaar/"+myLink, 'r') as myfile:
                        fData=myfile.read()
                    if(adhikaarStarted):
                        if firstFile==0:
                            js.write("  mySel.append($optgrp);\n")
                    adhikaarStarted=1
                    if firstFile==0:
                        js.write("    $optgrp=$('<optgroup label=\""+fData+"\">')\n")
                if(os.path.isfile("header/"+myLink)):
                    with open("header/"+myLink, 'r') as myfile:
                        fData="<b>"+myItemName+"</b> - "+myfile.read()
                elif(os.path.isfile("title/"+myLink)):
                    with open("title/"+myLink, 'r') as myfile:
                        fData="<b>"+myItemName+"</b> - "+myfile.read()
                else:
                    fData="<b>"+myItemName+"</b>"
                #html.write("              <option value='"+myLinkName+".html'>"+fData+"</option>\n")
                if firstFile==0 and not fData.endswith('>'):
                    if adhikaarStarted:
                        js.write("       $optgrp.append(\"<option value='"+myLinkName+".html'>"+fData+"</option>\");\n")
                    else:
                        js.write("  mySel.append(\"<option value='"+myLinkName+".html'>"+fData+"</option>\");\n")
            if firstFile==0:
                if(adhikaarStarted):
                    js.write("    mySel.append($optgrp);\n")
            html.write("      </select>\n    </li>\n")
            if firstFile==0:
                js.write("  mySel.selectmenu();\n  mySel.selectmenu('refresh', true);\n})\n")
            adhikaarStarted=0
    if(numTeeka>0):
        html.write("      </ul>\n    </div>\n")

#    # Handle Adhikaar
#    curFile="./adhikaar/"+myGatha
#    if os.path.isfile(curFile):
#        with open(curFile, 'r') as myfile:
#            fData=myfile.read().replace('\n', '')
#            fData=fData.replace('\xef\xbb\xbf', '')
#        html.write("<br><br><div class=adhikaar><h1>"+fData+"</h1></div><br>")
    # Handle Title
    if os.path.isdir('./ftitle'):
        curFile="./ftitle/"+myGatha
        myFName=re.sub(r'.txt',"", myGatha)
        if os.path.isfile(curFile):
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("    <br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>"+fData+"</a><span class=decFontSz> -</span></div>\n")
        else:
            html.write("<br>")
    else:
        curFile="./title/"+myGatha
        myFName=re.sub(r'.txt',"", myGatha)
        if (os.path.isfile(curFile) or os.path.isfile('./header/'+myGatha)):
            html.write("    <br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>\n") 
            if os.path.isfile('./header/'+myGatha):
                curFile='./header/'+myGatha
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write(fData)
            html.write("</a><span class=decFontSz> -</span></div>\n")
    # Handle Main
    curFile="./main/"+myGatha
    with open(curFile, 'r') as myfile:
        fData=myfile.read().replace('\n', '<br>')
        fData=fData.replace('\xef\xbb\xbf', '')
        fData=fData.replace('(', '<span class=comment>(')
        fData=fData.replace(')', ')</span>')
    html.write("   <div class=gatha>"+fData+"</div>\n")
    # Handle Sanskrit Gatha 
    curFile="./mainS/"+myGatha
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("    <div class=gathaS>"+fData+"</div>\n")
    # Handle Padya 
    curFile="./mainH/"+myGatha
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("    <div class=gadya>"+fData+"</div>\n")
    # Handle arth 
    curFile="./arth/"+myGatha
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            #fData=myfile.read().replace('\n', '<br>')
            fData=myfile.read().replace('\n', '</div>\n<div class=paragraph>')
            fData=fData.replace('\xef\xbb\xbf', '')
        fData=fData.replace('</div>\n<div class=paragraph><span class=shortFont', '<span class=shortFont')
        fData=re.sub(r'<span class=shortFont.*?/span>', lambda m: m.group().replace("</div>\n<div class=paragraph>", "<br>"), fData, flags=re.DOTALL)
        fData=fData.replace('[', '<b><font color=darkRed>[')
        fData=fData.replace(']', ']</font></b>')
        fData=fData.replace('(', '<span class=comment>(')
        fData=fData.replace(')', ')</span>')
        fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("</div>\n<div class=paragraph>", ""), fData, flags=re.DOTALL)
        if ( 'PythonTag' in fData ) : 
            fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("</div>\n<div class=paragraph>", "\n"), fData, flags=re.DOTALL)
            #fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("<br>", "\n"), fData, flags=re.DOTALL)
            fData=fData.replace('<!--PythonTagBegin-->', '<div align=center>')
            fData=fData.replace('<!--PythonTagEnd-->', '</div>')
        if ( 'JsMindTag' in fData ) : 
            fData = handleJsMind (fData, jsmCtr)
            jsmCtr+=1
        html.write("    <div class=paragraph><b><font color=darkmagenta>अन्वयार्थ : </font></b>"+fData+"</div>\n")
    # Handle English arth 
    curFile="./arthE/"+myGatha
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        fData=fData.replace('[', '<b><font color=darkRed>[')
        fData=fData.replace(']', ']</font></b>')
        fData=fData.replace('(', '<span class=comment>(')
        fData=fData.replace(')', ')</span>')
        html.write("    <div class=paragraphE><b><font color=darkmagenta>Meaning : </font></b>"+fData+"</div>\n")
    # Handle Teeka
    if numTeeka>0:
        html.write("  <br><div class=teekakaar>\n")
        myCntr=0
        for teeka in sorted(glob.glob('teeka[0-9]*')):
            #if bool('notes' in teeka):
            #    continue
            teekakaar=re.sub(r'.*?-', '', teeka)
            teekakaar=re.sub(r'_', ' ', teekakaar)
            html.write("    <span onclick='toggleTeeka(\""+str(myCntr)+"\")' class=teeka"+str(myCntr)+">&nbsp;&nbsp;"+teekakaar+"</span>&nbsp;\n")
            myCntr+=1
        html.write("  </div>\n")
        myCntr=0
        sTeeka=0
        html.write("  <br><table width=90% align=center>\n")
        for teeka in sorted(glob.glob('teeka[0-9]*')):
            #if bool('notes' in teeka):
            #    continue
            bottomFile=teeka+"/"+myGatha
            bottomFileS=re.sub(r'\..*', "", bottomFile)
            teekakaar=re.sub(r'.*?-', '', teeka)
            teekakaar=re.sub(r'_', ' ', teekakaar)
            teekaNum=re.search(r'teeka(.*)', teeka)
            for curFile in glob.glob(bottomFileS+'*'):
                # If Sanskrit Teeka exists, add it
                if(os.path.isfile('s'+curFile)):
                    with open('s'+curFile, 'r') as myfile:
                        sfData=myfile.read().replace('\xef\xbb\xbf', '')
                        sfData=sfData.replace('\n', '<br>')
                        sfData=sfData.replace('((', '<b><div class=gadya>')
                        sfData=sfData.replace('))', '</div></b>'); 
                        sfData=sfData.replace('[[', '<b><font color=blue>')
                        sfData=sfData.replace(']]', '</font></b>')
                        sfData=sfData.replace('(', '<font color=DarkSlateGray>(')
                        sfData=sfData.replace(')', ')</font>') 
                        sTeeka=1
                else:
                    sTeeka=0
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                fData=re.sub('\n+','\n',fData)
                fData=fData.replace('\n', '<br><br>\n')
                fData=re.sub(r'{{.*?}}', lambda m: m.group().replace("</div><br><div class=teeka>", "<br>"), fData, flags=re.DOTALL)
                fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("<br><br>", "<br>"), fData, flags=re.DOTALL)
                fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("<br>", ""), fData, flags=re.DOTALL)
                fData=re.sub(r'<span.*?span>', lambda m: m.group().replace("<br><br>", "<br>"), fData, flags=re.DOTALL)
                fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("<br><br>", ""), fData, flags=re.DOTALL)
                fData=re.sub(r'प्रतिशंका [-–—]', '<b></font><font color=darkgreen>उत्तर –</font></b>', fData)
                fData=re.sub(r'शंका [-–—]', '<b><font color=red>शंका –', fData); 
                fData=re.sub(r'प्रश्न [-–—]', '<b><font color=red>प्रश्न –', fData); 
                fData=re.sub(r'समाधान [-–—]', '</font><font color=darkGreen>समाधान –</font></b>', fData); 
                fData=re.sub(r'उत्तर [-–—]', '</font><font color=darkGreen>उत्तर –</font></b>', fData); 
                fData=re.sub(r'अर्थ [-–—]', '<b><font color=maroon>अर्थ –</font></b>', fData); 
                fData=re.sub(r'विशेषार्थ [-–—]', '<b><font color=maroon>विशेषार्थ –</font></b>', fData); 
                fData=re.sub(r'भावार्थ [-–—]', '<b><font color=maroon>भावार्थ –</font></b>', fData); 
                fData=fData.replace('((', '<b><div class=gadya>')
                fData=fData.replace('))', '</div></b>'); 
                fData=fData.replace('[[', '<b><font color=blue>')
                fData=fData.replace(']]', '</font></b>')
                fData=fData.replace('[(', '<div class=sheershak>')
                fData=fData.replace(')]', '</div>')
                fData=fData.replace('[', '<b>[<font color=maroon>')
                fData=fData.replace(']', '</font>]</b>');
                fData=fData.replace('{{', '<div class=sanskrit>')
                fData=fData.replace('}}', '</div>'); 
#                fData=fData.replace('\n', '</p><p>')
#                fData="<p>"+fData+"</p>"
#                fData=re.sub(r'<p>.*\(\(.*\)\)', '', fData)
#                fData=re.sub(r'\;\;', '<br>', fData) 
                fData=fData.replace('(', '<span class=notes>(')
                fData=fData.replace(')', ')</span>') 
#                fData=re.sub(r'<p>\s*</p>', '', fData)
#                fData=fData.replace('<p><span', '<span:'); 
#                fData=fData.replace('</p><br><p><sup','<br><sup'); 
#                fData=fData.replace('</span></p>', '</span>'); 
#                fData=fData.replace('<br><br>', '<br>'); 
#                fData=re.sub(r'<br>$', '', fData); 
                fData=fData.replace('</div></b><br><br>', '</div></b>')
                html.write("    <tr><td><div id=teeka"+str(myCntr)+" class=teeka>")
                html.write("<b><font color=darkgreen>"+teekakaar+" :</font></b> ")
                if(sTeeka):
                    html.write("<span class=stitle id=stitle"+str(myCntr)+" onclick='toggleSTeeka(\""+str(myCntr)+"\")'><b><font color=red>संस्कृत</font></b></span>")
                    html.write("<div class=steeka id=steeka"+str(myCntr)+">"+sfData+"<hr class=type_7></div>")
                if(os.path.isfile('u'+curFile)):
                    with open('u'+curFile, 'r') as myfile:
                        ufData=myfile.read().replace('\xef\xbb\xbf', '')
                        fData=ufData+"<br>"+fData
                        myfile.close()
                html.write('<br><br>'+fData+"\n       </div>\n    </td></tr>\n")
                myCntr+=1
        html.write("  </table><br><br><br>\n")
    html.write("  </body>\n</html>")
    js.close()
    html.close()
    if(firstFile==0):
        os.rename(outDir+"/"+myGathaNum+".html",outDir+"/index.html")
    firstFile=1
    print("\rDone Gatha : "+myGathaNum, end="")
