#!/bin/sh

bhajansDir=$(cd ../../../../bhajans && echo $PWD)
outDir=$(cd ../../../.. && echo $PWD)
myAudioJs=$outDir/js/allAudioFiles.js
/bin/rm $myAudioJs
echo "Will create $myAudioJs"
echo "Top Dir : $outDir"

for audio in $(find $bhajansDir/*/audio -name '*.mp3')
do
  myAudioFile=$(echo $audio | perl -pe 's|.*?jainData|.|')
  echo "myAudioFIles.push(https://nikkyjain.github.io/bhajans/+'$myAudioFile');" >> $myAudioJs
done
