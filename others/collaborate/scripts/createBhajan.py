# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import createBhajan
from common import mkdirs
from common import createHeader
from common import createTitle
import requests

outDir=os.path.abspath('../../../')
dbDir=os.path.abspath('../../../../jaindb/')
print("DB Dir ",dbDir)

def exists(path):
    r = requests.head(path, verify=False)
    return r.status_code == requests.codes.ok

headerCreated=""
myCntr=1
for group in glob.glob(dbDir+"/others/collaborate/bhajans/*/"):
    myGroup=os.path.basename(os.path.dirname(group))
    if not os.path.isdir(group+'/main'):
        continue
    mkdirs(outDir+"/jainDataBase/bhajans/"+myGroup+"/html")
    for bhajan in sorted(glob.glob(group+"/main/*")):
        if os.path.islink(bhajan):
            continue
        myBhajanName=os.path.basename(bhajan).replace('.txt', '');
        myHtml=outDir+"/jainDataBase/bhajans/"+myGroup+"/html/"+myBhajanName+".html"
        html=open(myHtml, "w")
        createTitle(html, (myBhajanName.replace('.*_','')).replace('-', ' '))
        if(headerCreated==""):
            createHeader(html, '../../../../', dbDir)
            html.close();
            with open(myHtml, 'r') as myfile:
                headerCreated=myfile.read()
            html=open(myHtml, "a")
        else:
            html.write(headerCreated)
        myBhajanName=re.sub('.*--', '', myBhajanName)
        html.write("<br><div class=main>"+myBhajanName.replace('-', ' ')+"<br></div>\n")
        aFile=re.sub(r'\.txt', '.mp3', os.path.basename(bhajan))
        myAlFile=group+"/audioL/"+os.path.basename(bhajan)
        myAlinkF=""
        if (os.path.isfile(myAlFile)):
          with open(myAlFile, 'r') as myAlink:
              audioFileName=myAlink.read().replace('\xef\xbb\xbf', '')
              audioFileName=audioFileName.replace('\n', '')
        else:
          audioFileName="https://nikkyjain.github.io/bhajans/"+myGroup+"/audio/"+aFile
        karaokeFileName="https://nikkyjain.github.io/bhajans/"+myGroup+"/karaoke/"+aFile
        #if exists("https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/audio/"+myBhajanName+".mp3") :
        html.write("""
        <div align=center id=myAudio><audio controls>
            <source src='../audio/"""+aFile+"""' type="audio/mpeg">
            <source src='"""+audioFileName+"""'  type="audio/mpeg">
        </audio></div>\n""")
        #if exists("https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/karaoke/"+myBhajanName+".mp3") :
        html.write("""
        <div align=right id=myKaraoke>Karaoke :  <audio controls>
            <source src='../karaoke/"""+aFile+"""' type="audio/mpeg">
            <source src='"""+karaokeFileName+"""'  type="audio/mpeg">
            No Karaoke Found
        </audio></div>\n""")
        with open(bhajan, 'r') as myfile:
            fData=myfile.read().replace('\n', '</br>')
            fData=fData.replace('((', '<span class=tarj>')
            if '))' in fData:
              fData=fData.replace('))', '</span>\n    <div class=pooja>\n')
              html.write(fData+"<br><br>\n")
            else:
              html.write("<br>    <div class=pooja>\n"+fData+"<br><br>\n")
        myArthFile=group+"/arth/"+os.path.basename(bhajan)
        if (os.path.isfile(myArthFile)):
           with open(myArthFile, 'r') as myfile:
             fData=myfile.read().replace('\xef\xbb\xbf', '')
             fData=fData.replace('\n', '<br>')
           html.write("\n<hr class=type_7>\n")
           html.write("<br><div class=poojarth><font color=maroon><b>अर्थ : </b></font>"+fData+"\n  </div>\n")
        html.write("  </div></div></body></html>")
        myCntr+=1
    print("Bhajan group "+myGroup+" Done")

