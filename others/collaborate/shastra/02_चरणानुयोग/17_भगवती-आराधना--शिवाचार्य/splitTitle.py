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

for line in reversed(open("data.txt").readlines()):
    # Check if line ends with ॥
    if re.search("॥\d+॥$", line.strip()) :
        secondLine=line.strip()
        # get number within ॥
        myNumber=re.search(r"॥.*॥", secondLine).group();
        myNumber=re.sub(r'॥', "", myNumber);

    if line.strip().endswith("-"):
        print(f'Found title {myNumber}')
        myNumber=int(myNumber)
        myFile=open(f'title/{myNumber:04}.txt', "w")
        myFile.write(f'{line.strip()}')
        myFile.close()

