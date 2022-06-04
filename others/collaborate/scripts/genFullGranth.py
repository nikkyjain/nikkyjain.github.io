# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import mkdirs


themes=['pomegranate', 'primary', 'danger', 'success', 'nephrite', 'belizehole', 'wisteria', 'asphalt', 'pumpkin'];

if not os.path.isdir('./main'):
  print("This doesnt seem to be shastra directory")
  sys.exit(1)

def handleJsMind (fData, jsmCtr):
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("</div>\n<div class=paragraph>", "\n"), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<b><font color=darkRed>[", "["), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("]</font></b>", "]"), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace("<span class=comment>", ""), fData, flags=re.DOTALL)
    fData=re.sub(r'<!--JsMindTagBegin.*?JsMindTagEnd-->', lambda m: m.group().replace(")</span>", ")"), fData, flags=re.DOTALL)
    fData=fData.replace('<div class=paragraph><!--JsMindTagBegin-->', '<div class=jsm id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH2-->', '<div class=jsm2 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH6-->', '<div class=jsm6 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH7-->', '<div class=jsm7 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH10-->', '<div class=jsm10 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<div class=paragraph><!--JsMindTagBeginH12-->', '<div class=jsm12 id="jsm'+str(jsmCtr)+'"></div>\n<script type="text/javascript">\nvar mind'+str(jsmCtr)+' = { meta:{ name:"demo", author:"abc@abc.com", version:"0.2" }, format:"node_array",data:[')
    fData=fData.replace('<!--JsMindTagEnd-->', ']}; var options'+str(jsmCtr)+' = { container:"jsm'+str(jsmCtr)+'", editable:false, theme:"'+themes[jsmCtr%9]+'" }; var jm = new jsMind(options'+str(jsmCtr)+'); jm.show(mind'+str(jsmCtr)+'); \n</script>\n')
    return(fData)


dbDir=os.path.abspath('../../../../../')
print("DB Dir ",dbDir)
pdir=os.path.basename(os.path.abspath('./'))
gdir=os.path.basename(os.path.abspath('../'))
myHtmlName=os.path.basename(os.path.abspath('./'))
myHtmlName=re.sub(r'.*_', "", myHtmlName)
myHtmlName=re.sub(r'--.*', "", myHtmlName)
myWriter=re.sub(r'.*--', "", os.path.basename(os.path.abspath('./')))
myMode='normal'
if (len(sys.argv) > 1 and sys.argv[1]=='-e'):
    myHtmlDir=dbDir+"/jainDataBase/egranth/"+gdir+"/"+pdir+"/html"
    myImgDir=dbDir+"/jainDataBase/egranth/"+gdir+"/"+pdir+"/images"
    myHtml=myHtmlDir+"/index.html"
    myTitle=myHtmlName+"--English"
    if( not os.path.isdir('./arthE')):
        sys.exit()
    myMode='english'
elif (len(sys.argv) > 1):
    myHtmlDir=dbDir+"/jainDataBase/teeka/"+gdir+"/"+pdir+"/html"
    myImgDir=dbDir+"/jainDataBase/teeka/"+gdir+"/"+pdir+"/images"
    myHtml=myHtmlDir+"/index.html"
    myTitle=myHtmlName
else:
    myHtmlDir=dbDir+"/jainDataBase/gatha/"+gdir+"/"+pdir+"/html"
    myImgDir=dbDir+"/jainDataBase/gatha/"+gdir+"/"+pdir+"/images"
    myHtml=myHtmlDir+"/index.html"
    myTitle=myHtmlName+"--Gatha"
print("HTML : ", myHtml)
mkdirs(myHtmlDir)
myRelPath="../../../../../"
hasImages=0
if os.path.isdir(myImgDir):
    hasImages=1
indexCol2=os.path.isfile('./config/indexCol2.txt')
noAnvayarth=os.path.isfile('./config/noAnvayarth.txt')
anvayarth=""
if not noAnvayarth :
    anvayarth="<b><font color=darkmagenta>अन्वयार्थ : </font></b>"
html=open(myHtml, "w")
#html.write("""<!DOCTYPE html>
html.write("""<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>"""+myTitle+"""</title>
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/orgchart.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/jsmind.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jsmind.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myFontSzCtrl.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/Chart.min.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/palette.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myChart.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/sticky-table-headers.js'></script>
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
    div.teeka {
      width:90%;
    }
  </style>
</head>
<body>
""")
if not os.path.isfile('./config/NoJainSaint.txt'):
    html.write("<div align=center><a href='"+myRelPath+"index.html'><img src='"+myRelPath+"images/jain-saint.jpg' height=270 width=300></img></a></div>")
else:
    html.write("<div align=center><a href='"+myRelPath+"index.html'><img src='"+myRelPath+"images/stories.png' height=270 width=300></img></a></div>")
html.write("""
<br><br><br>
<div class=hdr1 align=center>"""+myHtmlName+"""</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><b><font size=20>- """+myWriter+"""</font></b></div>
<br><br><br><font size=2 color=darkRed>
<div align=right>nikkyjain@gmail.com</div>
<div align=right>Date : """+datetime.now().strftime('%d')+"-"+datetime.now().strftime('%h')+"-"+datetime.now().strftime('%Y')+"</font></div>")

myGrCntr=1
myCntr=1
if( os.path.isdir('./adhikaar')):
  html.write("   <div class=adhikaar id=home><h1>Index</h1></div><br>\n")
  html.write("  <div class=main>अधिकार</div><br>\n")
  html.write("    <table align=center width=90% class=adhikarIndex>\n")
  # Create Title Group Anchors
  for adhikaar in sorted(os.listdir("./adhikaar")):
      with open('./adhikaar/'+adhikaar, 'r') as myfile:
          fData=myfile.read().replace('\n', '')
      html.write("      <td><a href='#ad"+str(myCntr)+"'>"+fData+"</a>\n")
      if myCntr%4==0:
          html.write("      <tr>\n")
      myCntr+=1
  html.write("    </table>\n")
  html.write("<br><br><br><br><br>\n")

myGrCntr=1
myCntr=1
if (os.path.isdir('./main') or os.path.isdir('./ftitle')):
    html.write("""<br><br><div class=adhikaar id=index><h1>Index</h1></div><br>
<div align=center><img src='"""+myRelPath+"""images/brownOm.png' width='5%'></img></div>
    <table align=center width=90% class=mainIndex>
<tr><th>गाथा / सूत्र<th>विषय""")
    if (indexCol2):
        html.write("<th>गाथा / सूत्र<th>विषय")
    html.write("</tr>\n")
    myCntr=0
    for bcFile in sorted(os.listdir('./main')):
        if os.path.isfile('./adhikaar/'+bcFile):
            with open('./adhikaar/'+bcFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("<tr><th colspan=4><h2 id='ad"+str(myGrCntr)+"'>"+fData+"</h2><tr>\n")
            myGrCntr+=1
        if os.path.isdir('./ftitle'):
            curFile="./ftitle/"+bcFile
            if os.path.isfile(curFile):
                if (not(myCntr%2 and indexCol2)):
                    html.write("    <tr>\n")
                myFName=re.sub(r'.txt',"", bcFile)
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n', '')
                    fData=fData.replace('\xef\xbb\xbf', '')
                html.write("<td><b>"+myFName+")<b> <td><a href=#gatha-"+myFName+">"+fData+"</a>")
                myCntr+=1
        else:
            curFile="./title/"+bcFile
            if (os.path.isfile('./header/'+bcFile) or os.path.isfile(curFile)):
                if os.path.isfile('./header/'+bcFile):
                    curFile='./header/'+bcFile
                if (not(myCntr%2 and indexCol2)):
                    html.write("    <tr>\n")
                myFName=re.sub(r'.txt',"", bcFile)
                with open(curFile, 'r') as myfile:
                    fData=myfile.read().replace('\n', '')
                    fData=fData.replace('\xef\xbb\xbf', '')
                html.write("<td><b>"+myFName+")<b> <td><a href=#gatha-"+myFName+">"+fData+"</a>")
                myCntr+=1
    html.write("    </table><br><br><br>\n")
html.write("<div align=center><img src='"+myRelPath+"images/hrim.png' width='20%'></img></div>\n");

jsmCtr=0
chartCtr=0
for bcFile in sorted(os.listdir('./main')):
    # Handle Adhikaar
    curFile="./adhikaar/"+bcFile
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("<br><br><div class=adhikaar><h1>"+fData+"</h1></div><br>")
        html.write("<div align=center><img src='"+myRelPath+"images/ahinsaParmoDharm.png' width='15%'></img></div>\n");
    # Handle Title
    if os.path.isdir('./ftitle'):
        curFile="./ftitle/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if os.path.isfile(curFile):
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("<br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>"+fData+"</a><span class=decFontSz> -</span></div>")
        else:
            html.write("<br>")
    else:
        curFile="./title/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if (os.path.isfile(curFile) or os.path.isfile('./header/'+bcFile)):
            html.write("<br><div class=title id=gatha-"+myFName+"><span class=incFontSz>+ </span><a href=#index>") 
            if os.path.isfile('./header/'+bcFile):
                curFile='./header/'+bcFile
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write(fData)
            html.write("</a><span class=decFontSz> -</span></div>")
    # Handle images
    if hasImages:
      iFile=re.sub(r'.txt',".png", bcFile)
      curFile=myImgDir+"/"+iFile
      if os.path.isfile(curFile):
          html.write("<div align=center><img class=png src='../images/"+iFile+"'></div>\n")
    # Handle Main
    curFile="./main/"+bcFile
    html.write("<div class=gatha>")
    with open(curFile, 'r') as myfile:
        fData=myfile.read().replace('\n', '<br>')
        fData=fData.replace('\xef\xbb\xbf', '')
        fData=fData.replace('(', '<span class=comment>(')
        fData=fData.replace(')', ')</span>')
    html.write(fData)
    html.write("</div>\n")
    # Handle Sanskrit Gatha 
    if (len(sys.argv) > 1 and myMode!='english'):
      curFile="./mainS/"+bcFile
      if os.path.isfile(curFile):
          html.write("<div class=gathaS>")
          with open(curFile, 'r') as myfile:
              fData=myfile.read().replace('\n', '<br>')
              fData=fData.replace('\xef\xbb\xbf', '')
          html.write(fData)
          html.write("</div>\n")
    # Handle Padya 
    if(myMode!='english'):
      curFile="./mainH/"+bcFile
      if os.path.isfile(curFile):
          html.write("<div class=gadya>")
          with open(curFile, 'r') as myfile:
              fData=myfile.read().replace('\n', '<br>')
              fData=fData.replace('\xef\xbb\xbf', '')
          fData=fData.replace('(', '<span class=comment>(')
          fData=fData.replace(')', ')</span>')
          html.write(fData)
          html.write("</div>\n")
      # Handle arth 
      curFile="./arth/"+bcFile
      if os.path.isfile(curFile):
          with open(curFile, 'r') as myfile:
              fData=myfile.read().replace('\n', '</div>\n<div class=paragraph>')
              #fData=re.sub('\n+','\n',fData)
              fData=fData.replace('\xef\xbb\xbf', '')
          fData=fData.replace('</div>\n<div class=paragraph><span class=shortFont', '<span class=shortFont')
          fData=re.sub(r'<span class=shortFont.*?span>', lambda m: m.group().replace("</div>\n<div class=paragraph>", "<br>"), fData, flags=re.DOTALL)
          fData=fData.replace('[', '<b><font color=darkRed>[')
          fData=fData.replace(']', ']</font></b>')
          fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("</div>\n<div class=paragraph>", "<br>"), fData, flags=re.DOTALL)
          fData=fData.replace('((', '<b><div class=gadya>')
          fData=fData.replace('))', '</div></b>'); 
          fData=fData.replace('(', '<span class=comment>(')
          fData=fData.replace(')', ')</span>')
          fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("</div>\n<div class=paragraph>", ""), fData, flags=re.DOTALL)
          if ( 'PythonTag' in fData ) : 
              fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("</div>\n<div class=paragraph>", "\n"), fData, flags=re.DOTALL)
              fData=fData.replace('<div class=paragraph><!--PythonTagBegin-->', '<div align=center>')
              fData=fData.replace('<!--PythonTagEnd-->', '</div>')
          if ( 'JsMindTag' in fData ) : 
              fData = handleJsMind (fData, jsmCtr)
              jsmCtr+=1
          html.write("<div class=paragraph>"+anvayarth+fData+"</div>")
    if (myMode=='english'):
      # Handle english arth
      curFile="./arthE/"+bcFile
      if os.path.isfile(curFile):
          with open(curFile, 'r') as myfile:
              fData=myfile.read().replace('\n', '<br>')
              fData=fData.replace('\xef\xbb\xbf', '')
          fData=fData.replace('(', '<span class=comment>(')
          fData=fData.replace(')', ')</span>')
          html.write("<br><div class=paragraphE><b><font color=darkmagenta>Meaning : </font></b>"+fData+"</div>")
    if (myMode!='english'):
      # Handle Teeka
      if (len(sys.argv) > 1):
          for teeka in sorted(glob.glob('teeka[0-9]*')):
              if bool('notes' in teeka):
                  continue
              bottomFile=teeka+"/"+bcFile
              bottomFileS=re.sub(r'\..*', "", bottomFile)
              teekakaar=re.sub(r'.*?-', '', teeka)
              teekakaar=re.sub(r'_', ' ', teekakaar)
              teekaNum=re.search(r'teeka(.*)', teeka)
              for curFile in sorted(glob.glob(bottomFileS+'*')):
                  with open(curFile, 'r') as myfile:
                      fData=myfile.read().replace('\xef\xbb\xbf', '')
                  fData=re.sub('\n+','\n',fData)
                  fData=fData.replace('\n', '</div><br><div class=teeka>\n')
                  fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("</div><br><div class=teeka>", "<br>"), fData, flags=re.DOTALL)
                  fData=re.sub(r'<ul>.*?</ul>', lambda m: m.group().replace("</div><br><div class=teeka>", ""), fData, flags=re.DOTALL)
                  fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("</div><br><div class=teeka>", ""), fData, flags=re.DOTALL)
                  fData=re.sub(r'<span.*?span>', lambda m: m.group().replace("</div><br><div class=teeka>", "<br>"), fData, flags=re.DOTALL)
                  # jsMind related
                  fData=re.sub(r'<!--PythonTagBegin.*?PythonTagEnd-->', lambda m: m.group().replace("</div><br><div class=teeka>", ""), fData, flags=re.DOTALL)
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
                  fData=fData.replace('[', '<b>[<font color=maroon>')
                  fData=fData.replace(']', '</font></b>]'); 
                  fData=fData.replace('(', '<span class=notes>(')
                  fData=fData.replace(')', ')</span>')
                  fData=fData.replace('</div></b><br><br>', '</div></b>')
                  if ( 'JsMindTag' in fData ) : 
                      fData = handleJsMind (fData, jsmCtr)
                      jsmCtr+=1
                  # chartJs related
                  if ( 'chartJsBegin'in fData ) : 
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("</div><br><div class=teeka>", ""), fData, flags=re.DOTALL)
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("<b>[<font color=maroon>", "["), fData, flags=re.DOTALL)
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("</font></b>]", "]"), fData, flags=re.DOTALL)
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("myData", "  myData"+str(chartCtr)), fData, flags=re.DOTALL)
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("myLabel", "  myLabel"+str(chartCtr)), fData, flags=re.DOTALL)
                      fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace("myTitle", "  myTitle"+str(chartCtr)), fData, flags=re.DOTALL)
                      #fData=re.sub(r'<!--chartJsBegin.*?ChartJsEnd-->', lambda m: m.group().replace(" </font></b>]", "]"), fData, flags=re.DOTALL)
                      fData=fData.replace('<!--chartJsBegin-->', '\n<div class="canvas-holder" id="ch-'+str(chartCtr)+'">\n  <canvas id="ca-'+str(chartCtr)+'" class=chartJsCanvas>\n </canvas>\n</div>\n<script>')
                      fData=fData.replace('<!--pieChartJsEnd-->', ' create2DPieChart("ca-'+str(chartCtr)+'",myData'+str(chartCtr)+', myLabel'+str(chartCtr)+');\n</script>\n')
                      # Bar Grapth Related
                      fData=fData.replace('<!--barChartJsEnd-->', ' create2DBarChart("ca-'+str(chartCtr)+'", myLabel'+str(chartCtr)+', myData'+str(chartCtr)+');\n</script>')
                      chartCtr+=1
                  html.write("<br><div class=teeka><b><font color=darkgreen>"+teekakaar+" :</font></b><br></div><div class=teeka>"+fData+"</div>")
    ##
    html.write("<hr class=type_7>\n")
    html.write("<a href='#home' class=index>&#x1f3e0;</a>\n")
    print ("\rDone - "+bcFile, end="")
if (len(sys.argv) > 1) and not os.path.isfile('./config/NoShrutSkandh.txt'):
    html.write("<div align=center><img src='"+myRelPath+"images/Srutskandh.jpg' width='70%'></img></div>\n");
html.write("<script> $('.myAltTable').stickyTableHeaders(); </script>")
html.write("</body></html>")
html.close()
print("Done")

