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
myHtml=myHtmlDir+"/jainBhajans.html"
mkdirs(myHtmlDir)
myRelPath="../../"

html=open(myHtml, "w")
html.write("""
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainBhajan</title>
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/orgchart.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <!--link rel="stylesheet" href='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script-->
  <style>
    body {
      background-color: #fcf5e8;
    }
    td {
      text-align: left; 
      vertical-align: middle;
      height : 40px;
      font-size: 25px;
      color : darkblue;
    }
    td a {
      text-decoration: none !important;
    }
    .hdr1 {
      font-size: 200px;
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
  <!--script>
    relPath='"""+myRelPath+"""';
  </script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myMobile.js'></script-->
</head>
<body>
<div align=center><a href='"""+myRelPath+"""index.html'><img src='"""+myRelPath+"""images/jain-saint.jpg' height=240 width=270></img></a></div>
<br><br><br>
<div class=hdr1 align=center>जैन भजन</div>
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
for group in sorted(glob.glob(dbDir+"/others/collaborate/bhajans/*/")):
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
for group in sorted(glob.glob(dbDir+"/others/collaborate/bhajans/*/")):
    myGroup=os.path.basename(os.path.dirname(group)).replace('-', ' ')
    myGroup=re.sub('.*_', '', myGroup)
    html.write("  <div class=main1 id='ad"+str(myGrCntr)+"'>"+myGroup+" भजन</div><br>\n")
    html.write("  <div align=center><img src='"+myRelPath+"images/brownOm.png' width='5%'></img></div>\n");
    html.write("    <table align=center width=90% class=mainIndex>\n")
    myCntr=1
    # Loop for all bhajans in a group
    for bhajan in sorted(glob.glob(group+"/main/*")):
        myBhajanName=os.path.basename(bhajan).replace('.txt','')
        myBhajanId=myBhajanName
        myBhajanName=myBhajanName.replace('--', '=')
        myBhajanName=myBhajanName.replace('-', ' ')
        myBhajanName=myBhajanName.replace('=', '--')
        #myBjn=myBhajanName.replace('\s', '_')
        html.write("      <td><a href='#"+myBhajanId+"'>"+str(myCntr)+") "+myBhajanName+"</a>\n")
        if myCntr%2==0:
            html.write("      <tr>\n")
        myCntr+=1
    html.write("    </table>\n")
    myGrCntr+=1

html.write("<br><br><br><br><br>\n")
myGrCntr=1
myTotalBhajan=1
for group in sorted(glob.glob(dbDir+"/others/collaborate/bhajans/*/")):
    myGroup=os.path.basename(os.path.dirname(group)).replace('-', ' ')
    myGroup=re.sub('.*_', '', myGroup)
    html.write("<br><br><div class=adhikaar><h1>"+myGroup+" भजन</h1></div><br>\n")
    html.write("<div align=center><img src='"+myRelPath+"images/ahinsaParmoDharm.png' width='15%'></img></div>\n");
    myCntr=1
    if not os.path.isdir(group+'./main'):
        continue
    for bhajan in sorted(glob.glob(group+"/main/*")):
        if os.path.islink(bhajan):
            continue
        myBhajanName=os.path.basename(bhajan).replace('.txt','')
        myBhajanId=myBhajanName
        myBhajanName=re.sub('.*--', '', myBhajanName)
        myBhajanName=myBhajanName.replace('-',' ')
        #myBjn=myBhajanName.replace('\s' ,'_')
        html.write("<br><div class=main1 id='"+myBhajanId+"'>"+myBhajanName+"<a href='#home' class=index>&#x1f3e0;</a></div>\n")
        with open(bhajan, 'r') as myfile:
            fData=myfile.read().replace('\xef\xbb\xbf', '')
            fData=fData.replace('\n', '<br>')
            fData=fData.replace('((', '<span class=tarj>')
            if '))' in fData:
              fData=fData.replace('))', '</span>\n    <div class=pooja>\n')
              html.write(fData+"</div><br><br>\n")
            else:
              html.write("<br>    <div class=pooja>\n"+fData+"</div><br>\n")
        myBjnName=os.path.basename(bhajan)
        myArthFile=group+"/arth/"+myBjnName
        if (os.path.isfile(myArthFile)):
           with open(myArthFile, 'r') as myfile:
             fData=myfile.read().replace('\xef\xbb\xbf', '')
             fData=fData.replace('\n', '<br>')
             fData=fData.replace('((', '<span class=tarj>')
             fData=fData.replace('))', '</span>')
           html.write("<br><div class=poojarth><font color=maroon><b>अर्थ : </b></font>"+fData+"\n  </div>\n")
        html.write("\n<br>\n<hr class=type_7>\n")
        myCntr+=1
        myTotalBhajan+=1
    print ("\rDone - Bhajan Group "+os.path.basename(group), end="")
    myGrCntr+=1
html.write("<div align=center><img src='"+myRelPath+"images/Srutskandh.jpg' width='70%'></img></div>\n");
html.write("</body></html>\n")
print ("Total Bhajans : ",myTotalBhajan)
