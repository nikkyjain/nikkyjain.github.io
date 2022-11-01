# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
import requests


myInput = open('data.txt', 'r')
Lines = myInput.readlines()
count=1
innerCount=0
myList = []
fileOpened=0

for line in Lines:
    if line.strip()=="" :
      if len(myList)>0 :
        # Handle arth
        myFile=open(f'arth/26-{count:03}.txt', "w")
        myFile.write(f'{myList.pop()}')
        #print(f'arth--26-{count:03}: {myList.pop().strip()}')
        # Handle mainH
        for oneLine in myList:
          if fileOpened==0 :
            myFile=open(f'mainH/26-{count:03}.txt', "w")
            fileOpened=1
          myFile.write(f'{oneLine}')
          #print(f'mainH--26-{count:03}: {oneLine.strip()}')
      count += 1
      innerCount=0
      myList=[]
      fileOpened=0
      continue
    # Keep pushing lines in another list
    if innerCount>1 :
      myList.append(line)

    # Handle main
    if innerCount==1 :
      if fileOpened==0 :
        myFile=open(f'main/26-{count:03}.txt', "w")
        fileOpened=1
      myFile.write(f'{line}')
      #print(f'main--26-{count:03}: {line.strip()}')
      if re.search(r'\d+', line):
        innerCount += 1
        mainStarted=0
        fileOpened=0

    # Handle Title
    if innerCount==0 :
      myFile=open(f'title/26-{count:03}.txt', "w")
      myFile.write(f'{line}')
      #print(f'{myFileS}: {line.strip()}')
      innerCount += 1
