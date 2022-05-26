# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import mkdirs


dbDir=os.path.abspath('../../../')
print("DB Dir ",dbDir)
myHtmlDir=dbDir+"/jainDataBase/genBooks"
myHtml=myHtmlDir+"/jainPoojas.html"
mkdirs(myHtmlDir)
myInDir=dbDir+"/others/collaborate/poojas"
myRelPath="../../"

html=open(myHtml, "w")
html.write("""
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainPooja</title>
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/orgchart.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/jsmind.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/jsmind.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myFontSzCtrl.js'></script>
  <style>
    body {
      background-color: #fcf5e8;
    }
    a {
      text-decoration: none !important;
    }
    .hdr1 {
      font-size: 14vw;
      color : darkred;
      font-weight:bold;
    }
    .index {
      color:blue;
      float:right;
      font-size: 4vw;
    }
    hr.type_7 {
      border: 0;
      height: 55px;
      background: url("""+myRelPath+"""images/type_7.png) no-repeat top center;
      display: block;
      position: relative;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
  </style>
</head>
<body>
<div align=center><a href='"""+myRelPath+"""index.html'><img src='"""+myRelPath+"""images/jain-saint.jpg' height=240 width=270></img></a></div>
<br><br><br>
<div class=hdr1 align=center>जैन<br>पूजा-पाठ</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><font size=2 color=darkRed>nikkyjain@gmail.com<br>
<div align=right>Date : """+datetime.now().strftime('%d')+"-"+datetime.now().strftime('%h')+"-"+datetime.now().strftime('%Y')+"""</font></div>
   <div class=adhikaar id=home><h1>Index</h1></div><br>\n""")

html.write("  <div class=main1>अधिकार</div><br>\n")
html.write("    <table align=center width=90% class=adhikarIndex>\n")
# Create Title Group Anchors
myGrCntr=1
myCntr=1
for group in sorted(glob.glob(myInDir+"/*/")):
    myGroup=os.path.basename(os.path.dirname(group))
    myGroup=re.sub('.*_', '', myGroup)
    html.write("      <td><a href='#ad"+str(myCntr)+"'>"+myGroup+"</a>\n")
    if myCntr%4==0:
        html.write("      <tr>\n")
    myCntr+=1
html.write("    </table>\n")
html.write("<br><br><br><br><br>\n")

# Create Individual Title Anchors
myGrCntr=1
for group in sorted(glob.glob(myInDir+"/*/")):
    myGroup=os.path.basename(os.path.dirname(group))
    myGroup=re.sub('.*_', '', myGroup)
    html.write("  <div class=main1 id='ad"+str(myGrCntr)+"'>"+myGroup+"</div><br>\n")
    html.write("  <div align=center><img src='"+myRelPath+"images/brownOm.png' width='5%'></img></div>\n");
    html.write("    <table align=center width=90% class=mainIndex>\n")
    myCntr=1
    # Loop for all bhajans in a group
    for bhajan in sorted(glob.glob(group+"/*/")):
        myBhajanName=os.path.basename(os.path.dirname(bhajan)).replace('.txt','')
        myBjn=re.sub('.*_','',myBhajanName)
        myBjnName=re.sub('--.*','',myBjn)
        myWriter=re.sub('.*--','',myBjn)
        if(myBjn==myBjnName):
            myWriter=""
        else:
            myWriter=re.sub('-',' ',myWriter)
            myWriter=myWriter.replace('पण्डित', 'पं.')
            myWriter=myWriter.replace('आर्यिका', 'आ.')
            myWriter=myWriter.replace('आचार्य', 'आ.')
            myWriter=" -- "+myWriter
        myBjnName=re.sub('-',' ',myBjnName)
        html.write("      <td><a href='#gr"+str(myGrCntr)+"-bh"+str(myCntr)+"'><b>"+str(myCntr)+")</b> "+myBjnName+myWriter+"</a>\n")
        if myCntr%2==0:
            html.write("      <tr>\n")
        myCntr+=1
    html.write("    </table>\n")
    myGrCntr+=1

html.write("<br><br><br><br><br>\n")
myGrCntr=1
jsmCtr=0
themes=['pomegranate', 'primary', 'danger', 'success', 'nephrite', 'belizehole', 'wisteria', 'asphalt', 'pumpkin'];
for group in sorted(glob.glob(myInDir+"/*/")):
    myCntr=1
    myGroup=os.path.basename(os.path.dirname(group))
    for pooja in sorted(glob.glob(group+"/*/")):
        noAnvayarth=os.path.isfile(pooja+'/config/noAnvayarth.txt')
        anvayarth=""
        if not noAnvayarth :
            anvayarth="<b><font color=darkmagenta>अन्वयार्थ : </font></b>"
        myPooja=os.path.basename(os.path.dirname(pooja))
        myPoojaName=re.sub('.*_','',myPooja)
        myPoojaName=re.sub('--.*','',myPoojaName)
        html.write("<div class=main1 id='gr"+str(myGrCntr)+"-bh"+str(myCntr)+"'>"+myPoojaName+"<a href='#home' class=index>&#x1f3e0;</a></div>\n")
        for cFile in sorted(glob.glob(pooja+"/main/*")):
            pName=os.path.basename(cFile)
            if (pName.startswith('000')):
               continue
            # Handle title
            curFile=pooja+"/title/"+pName
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                html.write("<br><div class=title>\n"+fData+"</div>\n")
            # Handle Image
            if not os.path.isfile(pooja+"/config/noImage.txt"):
                curFile="poojas/"+myGroup+"/"+myPooja+"/images/"+pName.replace('.txt','.jpg')
                if os.path.isfile(dbDir+"/jainDataBase/"+curFile):
                    html.write("<p align=center><img src=../"+curFile+" class=itemImage></img><p>\n")
            # Handle main
            curFile=pooja+"/main/"+pName
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\xef\xbb\xbf', '')
                fData=fData.replace('\n','<br>')
            fData=fData.replace('((', '<span class=tarj>')
            fData=fData.replace('))', '</span>')
            fData=fData.replace('(', '<span class=lay>')
            fData=fData.replace(')', '</span>')
            fData=fData.replace('ॐ ह्रीं','<span class=om>ॐ ह्रीं')
            fData=fData.replace('निर्वपामीति स्वाहा','निर्वपामीति स्वाहा</span>')
            fData=fData.replace('पुष्पांजलिं क्षिपामि','पुष्पांजलिं क्षिपामि</span>')
            fData=fData.replace('संवौषट् आह्वाननं','संवौषट् आह्वाननं</span>')
            fData=fData.replace('ठः स्थापनं','ठः स्थापनं</span>')
            fData=fData.replace('वषट् सन्निधि करणं','वषट् सन्निधि करणं</span>')
            html.write("<div class=pooja>\n"+fData+"<br>\n</div>\n")
            # Handle gadya
            curFile=pooja+"/mainH/"+pName
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                    fData=fData.replace('\n','<br>')
                html.write("<div class=gadya>"+fData+"</div>")
            # Handle arth
            curFile=pooja+"/arth/"+pName
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                    fData=re.sub('\n+','<br>',fData)
                    #fData=myfile.read().replace('\n', '</div>\n<div class=paragraph>')
                    #fData=fData.replace('\xef\xbb\xbf', '')
                    #fData=fData.replace('\n','<br>')
                fData=fData.replace('[', '<b><font color=darkRed>[')
                fData=fData.replace(']', ']</font></b>')
                fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("<br>", ""), fData, flags=re.DOTALL)
                fData=fData.replace('((', '<b><div class=gadya>')
                fData=fData.replace('))', '</div></b>'); 
                fData=fData.replace('(', '<span class=comment>(')
                fData=fData.replace(')', ')</span>')
                fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("<br>", ""), fData, flags=re.DOTALL)
                if ( 'PythonTag' in fData ) : 
                    fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("<br>", "\n"), fData, flags=re.DOTALL)
                    fData=fData.replace('<!--PythonTagBegin-->', '<div align=center>')
                    fData=fData.replace('<!--PythonTagEnd-->', '</div>')
                if ( 'JsMindTag' in fData ) : 
                    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<br>", "\n"), fData, flags=re.DOTALL)
                    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<b><font color=darkRed>[", "["), fData, flags=re.DOTALL)
                    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("]</font></b>", "]"), fData, flags=re.DOTALL)
                    fData=fData.replace('<!--JsMindTagBegin-->', '<div class=jsm id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagBeginH2-->', '<div class=jsm2 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagBeginH6-->', '<div class=jsm6 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagBeginH7-->', '<div class=jsm7 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagBeginH10-->', '<div class=jsm10 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagBeginH12-->', '<div class=jsm12 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
                    fData=fData.replace('<!--JsMindTagEnd-->', ']}; var options'+str(jsmCtr)+' = { container:"jsm'+str(jsmCtr)+'", editable:false, theme:"'+themes[jsmCtr%9]+'" }; var jm = new jsMind(options'+str(jsmCtr)+'); jm.show(mind'+str(jsmCtr)+'); \n</script>\n')
                    jsmCtr+=1
                html.write("<div class=poojarth><font color=maroon><b>अन्वयार्थ : </b></font>"+fData+"</div><br>\n")
                #html.write("<div class=paragraph>"+anvayarth+fData+"</div>")
            # Handle english arth
            curFile=myInDir+"/arthE/"+os.path.basename(cFile)
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n', '<br>')
                    fData=fData.replace('\xef\xbb\xbf', '')
                fData=fData.replace('(', '<span class=comment>(')
                fData=fData.replace(')', ')</span>')
                html.write("<div class=paragraphE><b><font color=darkmagenta>Meaning : </font></b>"+fData+"</div>\n")
            # Handle argh
            curFile=pooja+"/argh/"+pName
            if os.path.isfile(curFile):
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\xef\xbb\xbf', '')
                html.write('<div class=om>'+fData+'</div>')
        html.write("<br><hr class=type_7><br>\n")
        myCntr+=1
    print ("\rDone - Pooja Group "+os.path.basename(group), end="")
    myGrCntr+=1
html.write("<div align=center><img src='"+myRelPath+"images/Srutskandh.jpg' width='70%'></img></div>\n");
html.write("</body></html>\n")
