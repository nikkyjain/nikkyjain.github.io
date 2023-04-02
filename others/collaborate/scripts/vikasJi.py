# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import mkdirs



if not os.path.isdir('./main'):
  print("This doesnt seem to be shastra directory")
  sys.exit(1)


dbDir=os.path.abspath('../../../../../')
print("DB Dir ",dbDir)
pdir=os.path.basename(os.path.abspath('./'))
gdir=os.path.basename(os.path.abspath('../'))
myHtmlName=os.path.basename(os.path.abspath('./'))
myHtmlName=re.sub(r'.*_', "", myHtmlName)
myHtmlName=re.sub(r'--.*', "", myHtmlName)
myWriter=re.sub(r'.*--', "", os.path.basename(os.path.abspath('./')))
myHtmlDir=dbDir+"/jainDataBase/teeka/"+gdir+"/"+pdir+"/html"
myHtml=myHtmlDir+"/index.xml"
print("HTML : ", myHtml)
mkdirs(myHtmlDir)
myRelPath="../../../../../"
html=open(myHtml, "w")

for bcFile in sorted(os.listdir('./main')):
    # Handle Title
    if os.path.isdir('./ftitle'):
        curFile="./ftitle/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if os.path.isfile(curFile):
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write("<gathautthanika"+fData+"</gathautthanika>")
    else:
        curFile="./title/"+bcFile
        myFName=re.sub(r'.txt',"", bcFile)
        if (os.path.isfile(curFile)):
            with open(curFile, 'r') as myfile:
                fData=myfile.read().replace('\n', '')
                fData=fData.replace('\xef\xbb\xbf', '')
            html.write(fData)
            html.write("<gathautthanika"+fData+"</gathautthanika>")
    # Handle Main
    curFile="./main/"+bcFile
    with open(curFile, 'r') as myfile:
        fData=myfile.read().replace('\n', '<br>')
        fData=fData.replace('\xef\xbb\xbf', '')
    html.write("<moolgatha>"+fData+"<moolgatha>")
    # Handle Padya 
    curFile="./mainH/"+bcFile
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("<hindigatha>"+fData+"<hindigatha>")
    # Handle arth 
    curFile="./arth/"+bcFile
    if os.path.isfile(curFile):
        with open(curFile, 'r') as myfile:
            fData=myfile.read().replace('\n', '<br>')
            fData=fData.replace('\xef\xbb\xbf', '')
        html.write("<anvayarth>"+fData+"</anvayarth>")
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
                fData=fData.replace('\n', '<br><br>\n')
                fData=re.sub(r'\(\(.*?\)\)', lambda m: m.group().replace("<br><br>", "<br>"), fData, flags=re.DOTALL)
                fData=re.sub(r'<table.*?table>', lambda m: m.group().replace("<br>", ""), fData, flags=re.DOTALL)
                fData=re.sub(r'प्रतिशंका [-–—]', '<b></font><font color=darkgreen>उत्तर –</font></b>', fData)
                fData=re.sub(r'शंका [-–—]', '<b><font color=red>शंका –', fData); 
                fData=re.sub(r'प्रश्न [-–—]', '<b><font color=red>प्रश्न –', fData); 
                fData=re.sub(r'समाधान [-–—]', '</font><font color=darkGreen>समाधान –</font></b>', fData); 
                fData=re.sub(r'उत्तर [-–—]', '</font><font color=darkGreen>उत्तर –</font></b>', fData); 
                fData=re.sub(r'अर्थ [-–—]', '<b><font color=maroon>अर्थ –</font></b>', fData); 
                fData=re.sub(r'विशेषार्थ [-–—]', '<b><font color=maroon>विशेषार्थ –</font></b>', fData); 
                fData=re.sub(r'भावार्थ [-–—]', '<b><font color=maroon>भावार्थ –</font></b>', fData); 
                fData=fData.replace('((', '<b><div align=center>')
                fData=fData.replace('))', '</div></b>'); 
                fData=fData.replace('[[', '<b><font color=blue>')
                fData=fData.replace(']]', '</font></b>')
                fData=fData.replace('[', '<b>[<font color=maroon>')
                fData=fData.replace(']', '</font></b>]'); 
#                fData=fData.replace('\n', '</p><p>')
#                fData="<p>"+fData+"</p>"
#                fData=re.sub(r'\;\;', '<br>', fData) 
                fData=fData.replace('(', '<font color=DarkSlateGray>(')
                fData=fData.replace(')', ')</font>') 
#                fData=re.sub(r'<p>\s*</p>', '', fData)
#                fData=fData.replace('<p><span', '<span:'); 
#                fData=fData.replace('</p><br><p><sup','<br><sup'); 
#                fData=fData.replace('</span></p>', '</span>'); 
#                fData=fData.replace('<br><br>', '<br>'); 
#                fData=re.sub(r'<br>$', '', fData); 
                html.write("<br><div class=teeka><b><font color=darkgreen>"+teekakaar+" :</font></b><br><br>"+fData+"</div>")
    ##
    html.write("<hr align=center width=40%>\n")
    print ("\rDone - "+bcFile, end="")
html.write("</body></html>")
html.close()
print("Done")

