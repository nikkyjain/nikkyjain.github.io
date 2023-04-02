
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

outDir=os.path.abspath('../../../')
dbDir=os.path.abspath('../../../../jaindb/')
print("DB Dir ",dbDir)

headerCreated=""
for group in sorted(glob.glob(dbDir+"/others/collaborate/poojas/*/")):
    myGroup=os.path.basename(os.path.dirname(group))
    myGroupTrimmed=re.sub('.*_','',myGroup)
#    if not os.path.isdir(group+'/main'):
#        continue
    for pooja in sorted(glob.glob(group+"/*/")):
        myPooja=os.path.basename(os.path.dirname(pooja))
        myPoojaTrimmed=re.sub('.*_','',myPooja)
        myPoojaTrimmed=re.sub('\.','',myPoojaTrimmed)
        myPoojaTrimmed=re.sub('--.*', '',myPoojaTrimmed)
        myWriter=""
        if ('--' in myPooja):
          myWriter=re.sub('.*--','',myPooja)
          myWriter=re.sub('\.','',myWriter)
        myInDir=dbDir+"/others/collaborate/poojas/"+myGroup+"/"+myPooja
        myOutDir=outDir+"/others/vikasjiPoojas/"
        if(myWriter):
          myHtml=myOutDir+"/"+myGroupTrimmed+"ZZ"+myPoojaTrimmed+"—"+myWriter+".txt"
        else:
          myHtml=myOutDir+"/"+myGroupTrimmed+"ZZ"+myPoojaTrimmed+".txt"
        mkdirs(myOutDir)
        html=open(myHtml, "w")
        html.write("<div class=pooja>\n")
        for cFile in sorted(glob.glob(pooja+"/main/*")):
            # Handle main
            curFile=myInDir+"/main/"+os.path.basename(cFile)
            with open(curFile, 'r') as myfile:
                fData=myfile.read()
                fData=fData.replace('\xef\xbb\xbf', '')
                fData=fData.replace(u'\ufeff', '')
                fData=fData.replace('\n','\n\n')
                fData=fData.replace('((','(')
                fData=fData.replace('))',')')
        html.write(fData+"\n</div>\n")
        if(myWriter) :
          html.write("[[category:"+myGroupTrimmed+"]] [[category:"+myWriter+"]]")
        else:
          html.write("[[category:"+myGroupTrimmed+"]]")
    print("Pooja group "+myGroup+" Done")

