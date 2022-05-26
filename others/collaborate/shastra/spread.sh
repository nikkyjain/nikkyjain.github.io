#!/bin/sh


inFile=text.txt
curCntr=1;
numLines=`cat text.txt | wc -l`
numLines=$(($numLines+1))

for (( ; ; ))
do
   outFile=`printf "%02d" $curCntr`
   sed "${curCntr}q;d;" $inFile > main/$outFile.txt
   unix2dos main/$outFile.txt
   [ "$curCntr" = "$numLines" ] && echo "Done" && exit 0
   curCntr=$(($curCntr+1))
done
