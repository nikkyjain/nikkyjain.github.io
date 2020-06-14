#!/bin/sh

outDir=$(cd ../../.. && echo $PWD)
myAudioJs=$outDir/js/allAudioFiles.js
/bin/rm -f $myAudioJs
for audio in $(find $outDir/jainDataBase/bhajans/. -name '*.mp3')
do
  myAudioFile=$(echo $audio | perl -pe 's|.*?jainData|.|')
  echo "myAudioFIles.push(relPath+'$myAudioFile');" >> $myAudioJs
done
for audio in $(find $outDir/jainDataBase/poojas/. -name '*.mp3')
do
  myAudioFile=$(echo $audio | perl -pe 's|.*?jainData|.|')
  echo "myAudioFIles.push(relPath+'$myAudioFile');" >> $myAudioJs
done
