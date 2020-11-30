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
import requests

outDir=os.path.abspath('../../../')
dbDir=os.path.abspath('../../../../jaindb/')
print("DB Dir ",dbDir)

def exists(path):
    r = requests.head(path, verify=False)
    return r.status_code == requests.codes.ok

headerCreated=""
for group in glob.glob(dbDir+"/others/collaborate/bhajans/*/"):
    myCntr=1
    myGroup=os.path.basename(os.path.dirname(group))
    if not os.path.isdir(group+'/main'):
        continue
    mkdirs(outDir+"/jainDataBase/bhajans/"+myGroup+"/html")
    for bhajan in sorted(glob.glob(group+"/main/*")):
        myBhajanName=os.path.basename(bhajan).replace('.txt', '');
        myHtml=outDir+"/jainDataBase/bhajans/"+myGroup+"/html/"+myBhajanName+".html"
        html=open(myHtml, "w")
        if(headerCreated==""):
            createHeader(html, '../../../../', dbDir)
            html.close();
            with open(myHtml, 'r') as myfile:
                headerCreated=myfile.read()
            html=open(myHtml, "a")
        else:
            html.write(headerCreated)
        html.write("<br><div class=main>"+myBhajanName.replace('-', ' ')+"<br></div>\n")
        aFile=re.sub(r'\.txt', '.mp3', os.path.basename(bhajan))
        audioFileName="https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/audio/"+aFile
        karaokeFileName="https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/karaoke/"+aFile
        #if exists("https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/audio/"+myBhajanName+".mp3") :
        html.write("""
        <div align=center id=myAudio><audio controls>
            <source src='../audio/"""+aFile+"""' type="audio/mpeg">
            <source id=my_audio src='"""+audioFileName+"""'  type="audio/mpeg">
        </audio></div>\n""")
        #if exists("https://nikkyjain.github.io/jainDataBase/bhajans/"+myGroup+"/karaoke/"+myBhajanName+".mp3") :
        html.write("""
        <div align=right id=myKaraoke>Karaoke :  <audio controls>
            <source src='../karaoke/"""+aFile+"""' type="audio/mpeg">
            <source id=my_audio src='"""+karaokeFileName+"""'  type="audio/mpeg">
            No Karaoke Found
        </audio></div>\n""")
        with open(bhajan, 'r') as myfile:
            fData=myfile.read().replace('\n', '</br>')
            fData=fData.replace('((', '<span class=tarj>')
            fData=fData.replace('))', '</span>')
        html.write("<br>    <div class=pooja>\n"+fData+"<br><br>\n")
        html.write("  </div></div></body></html>")
        myCntr+=1
        sys.exit()
    print("Bhajan group "+myGroup+" Done")

