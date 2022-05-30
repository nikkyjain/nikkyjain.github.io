#!/bin/sh

outDir=$(cd ../../.. && echo $PWD)
myAudioJs=$outDir/js/allAudioFiles.js
/bin/rm $myAudioJs
echo "Will create $myAudioJs"
echo "Top Dir : $outDir"

for audio in $(find $outDir/jainDataBase/bhajans/*/audio -name '*.mp3')
do
  myAudioFile=$(echo $audio | perl -pe 's|.*?jainData|.|')
  echo "myAudioFIles.push(relPath+'$myAudioFile');" >> $myAudioJs
done
for audio in $(find $outDir/jainDataBase/poojas/. -name '*.mp3')
do
  myAudioFile=$(echo $audio | perl -pe 's|.*?jainData|.|')
  echo "myAudioFIles.push(relPath+'$myAudioFile');" >> $myAudioJs
done
