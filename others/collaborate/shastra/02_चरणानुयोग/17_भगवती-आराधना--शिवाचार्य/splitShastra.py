# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
import requests


count=2177
innerCount=0
myList = []
fileOpened=0
ignoreLine=1
firstLine=""
myNumber=0
arth=0
bhavarth=0

def my_function(myNumber, bhavarth):
    myList.pop()
    print(f'Found bhavarth {myNumber}')
    myNumber=int(myNumber)
    myFile=open(f'teeka/{myNumber:04}.txt', "w")
    for oneLine in myList:
      myFile.write(f'{oneLine}')
    myFile.close()

for line in open("data.txt").readlines():
    # Check if line ends with ॥
    if re.search("॥\d+॥$", line.strip()) :
        secondLine=line.strip()
        # get number within ॥
        myNumber=re.search(r"॥.*॥", secondLine).group();
        myNumber=re.sub(r'॥', "", myNumber);
        if not (myNumber.isdigit()) :
            continue
        else:
            arth=1
            if (bhavarth==2):
                my_function(int(myNumber)-1, bhavarth)
                myList=[]
                bhavarth=0
                continue

    if bhavarth:
        if bhavarth==2:
            myList.append(line.strip())
        if line.strip().endswith("-") and bhavarth==2:
            my_function(myNumber, bhavarth)
            bhavarth=0
        if re.search("भावार्थ - ", line.strip()):
            bhavarthText=re.sub(r'भावार्थ - ', "", line.strip());
            myList=[]
            myList.append(bhavarthText)
            bhavarth=2

    if arth:
        if line.strip()=="" and arth==2:
            print(f'Found arth {myNumber}')
            myNumber=int(myNumber)
            myFile=open(f'arth/{myNumber:04}.txt', "w")
            arthText=re.sub(r'अर्थ - ', "", arthText);
            myFile.write(f'{arthText}')
            myFile.close()
            arth=0
            bhavarth=1
        if re.search("अर्थ - ", line.strip()):
            arthText=line.strip()
            arth=2
        if arth==2:
            arthText=arthText+" "+line.strip()

