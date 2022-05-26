#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
outDir=$(cd ../../../ && echo $PWD)
export dbDir=$(cd ../../../../jaindb-dev && echo $PWD)
echo "DB Dir $dbDir"
. $dbDir/others/collaborate/shastra/common.sh
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    myGroup=$(basename $group);
    [ ! -d $group/main ] && continue
    mkdir -p $outDir/jainDataBase/bhajans/$myGroup/html1
    for bhajan in $(ls $group/main/* | sort)
    do
      if ! test -f $bhajan; then
        continue
      fi
      myBhajanName=$(echo $(basename $bhajan) | perl -pe 's/.txt//g');
      myHtml=$outDir/jainDataBase/bhajans/$myGroup/html1/${myBhajanName}.html
      if [ "$headerCreated" = "" ]; then
        ## ---- Header -----
        createHeader '../../../../'
        headerCreated=$(cat $myHtml)
      else
        echo "$headerCreated" > $myHtml
      fi


      echo "<br><div class=main>$(echo $myBhajanName | perl -pe 's/-/ /g')<br></div>" >> $myHtml
      aFile=$(basename $bhajan | perl -pe 's/\.txt/.mp3/g')
      audioFileName="https://nikkyjain.github.io/jainDataBase/bhajans/$myGroup/audio/$aFile"
      #if wget --spider $audioFileName 2>/dev/null; then
      #if [ -f $outDir/jainDataBase/bhajans/$myGroup/audio/$audioFileName ]; then
        cat <<EOF >> $myHtml
        <div align=center id=myAudio><audio controls>
            <source src="../audio/$aFile" type="audio/mpeg">
            <source id=my_audio src="$audioFileName"  type="audio/mpeg">
        </audio></div>
EOF
      #fi
      c="$(cat $bhajan)"
      c=$(echo "$c" | perl -pe 's/\n/<br>/g')
      echo "<br>    <div class=pooja>$c" >>  $myHtml
      echo "  </div></div></body></html>" >> $myHtml
      myCntr=$(($myCntr+1))
    done
    echo "Bhajan group $(basename $group) Done"
done
