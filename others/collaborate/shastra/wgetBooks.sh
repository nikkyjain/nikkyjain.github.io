#!/bin/sh

for i in {1..237}
do
   file=$(printf %05d $i)
   file="http://jaingranths.com/Books/ALAP%20PADDHATI/${file}.jpg"
   #echo "Command = wget $file"
   wget "$file"
done
