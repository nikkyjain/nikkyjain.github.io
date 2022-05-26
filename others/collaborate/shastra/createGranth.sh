#!/bin/sh

export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
. $dbDir/others/collaborate/shastra/common.sh
for group in $(ls -d $dbDir/others/collaborate/shastra/*/)
do
    myCntr=1
    mygroup=$(basename $group)
    OIFS="$IFS"
    IFS=$'\n'
    for item in $(ls -d $group/*/)
    do
        myItem=$(basename $item)
        myInDir=$dbDir/others/collaborate/shastra/$mygroup/$myItem
        myOutDir=$dbDir/jainDataBase/teeka/$mygroup/$myItem/html
        myHtml=$myOutDir/index.html
        echo $(dirname $myHtml)
        mkdir -p $(dirname $myHtml)
        if [ "$headerCreated" = "" ]; then
            ## ---- Header -----
            createHeader '../../../../../'
            headerCreated=$(cat $myHtml)
        else
            echo "$headerCreated" > $myHtml
        fi
#
#        for audio in $(ls $myInDir/audioLink/* 2> /dev/null)
#        do
#          curAudio=$(basename $audio | perl -pe 's/.txt//g')
#          c=$(cat $audio)
#          cat <<EOF >> $myHtml
#        <div align=center><audio controls>
#          <source src="$c" type="audio/mpeg">
#          Your browser does not support the audio element.
#        </audio></div><br>
#EOF
#
#        done

        for cFile in $(ls $myInDir/main/*)
        do
            curFile=$myInDir/adhikaar/$(basename $cFile)
            if [ -f $curFile ]; then
                echo "<br><br><div class=adhikaar><h1>$(cat $curFile)</h1></div><br>" >>  $myHtml
            fi
            if [ -d $myInDir/ftitle ]; then
                curFile=$myInDir/ftitle/$(basename $cFile)
                if [ -f $curFile ]; then
                    echo "<br><div class=title>$(cat $curFile)</div>" >> $myHtml
                else
                    echo "<br>" >> $myHtml
                fi
            else
                curFile=$myInDir/title/$(basename $cFile)
                if [ -f $myInDir/header/$cFile -o -f $curFile ]; then
                    echo "<br><div class=title>" >> $myHtml 
                    [ -f $myInDir/header/$(basename $cFile) ] && curFile=$myInDir/header/$(basename $cFile)
                    cat $curFile >>  $myHtml 
                    echo "</div>" >> $myHtml
                fi
            fi
            curFile=$myInDir/main/$(basename $cFile)
            echo "<div class=gatha>" >> $myHtml 
            cat $curFile | perl -pe 's/\n/<br>/g' >>  $myHtml
            echo "</div>" >> $myHtml
            curFile=$myInDir/mainH/$(basename $cFile)
            if [ -f $curFile ]; then
              echo "<div class=gadya>" >> $myHtml 
              cat $curFile | perl -pe 's/\n/<br>/g' >>  $myHtml
              echo "</div>" >> $myHtml
            fi
            curFile=$myInDir/arth/$(basename $cFile)
            if [ -f $curFile ]; then
                c="$(cat $curFile)"
                c=$(echo "$c" | perl -pe 's/\n/<br>/g' | perl -pe 's/\[/<b><font color=darkRed>[/g' | perl -pe 's/\]/]<\/font><\/b>/g')
                c=$(echo "$c" | perl -pe 's/\(/<span class=comment>(/g' | perl -pe 's/\)/)<\/span>/g'); 
                echo "<div class=arth><b><font color=black>अन्वयार्थ : </font></b>$c</div>" >>  $myHtml
            fi
            #        for teeka in $(ls -d $myInDir/teeka[0-9]* 2>/dev/null)
            #        do
            #            [[ $teeka =~ notes ]] && continue
            #            bottomFile=$teeka/$(basename $cFile)
            #            bottomFileS=$(echo $bottomFile | perl -pe 's/\..*//g')
            #            teekakaar=$(echo $(basename $teeka) | perl -pe 's/.*?-//' | perl -pe 's/_/ /g')
            #            teekaNum=$(echo $teeka | perl -pe 's/teeka(.*)/$1/')
            #            if ls $bottomFileS* 1> /dev/null 2>&1; then
            #                c="$(cat $bottomFileS*)"
            #                gathaName=$(echo $(basename $cFile) | sed 's/\..*//')
            #                c=$(echo "$c" | perl -pe 's/प्रतिशंका [-–—]/<b><\/font><font color=darkgreen>उत्तर –<\/font><\/b>/g');
            #                c=$(echo "$c" | perl -pe 's/शंका [-–—]/<b><font color=red>शंका –/g'); 
            #                c=$(echo "$c" | perl -pe 's/प्रश्न [-–—:]/<b><font color=red>प्रश्न –/g'); 
            #                c=$(echo "$c" | perl -pe 's/समाधान [-–—]/<\/font><font color=darkGreen>समाधान –<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/उत्तर [-–—:]/<\/font><font color=darkGreen>उत्तर –<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/अर्थ [-–—]/<b><font color=maroon>अर्थ –<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/विशेषार्थ [-–—]/<b><font color=maroon>विशेषार्थ –<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/भावार्थ [-–—]/<b><font color=maroon>भावार्थ –<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/\[\[/<b><font color=maroon>/g' | perl -pe 's/\]\]/<\/font><\/b>/g'); 
            #                c=$(echo "$c" | perl -pe 's/\[/<b><font color=maroon>/g' | perl -pe 's/\]/<\/b><\/font>/g'); 
            #                c=$(echo "$c" | perl -pe 's:\n:</p><p>:g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g'); 
            #                c=$(echo "<p>$c</p>" | perl -pe 's/<p>.*\(\(.*\)\)//g' | perl -pe 's/\;\;/<br>/g'); 
            #                c=$(echo "$c" | perl -pe 's/\(/<font color=DarkSlateGray>(/g' | perl -pe 's/\)/)<\/font>/g'); 
            #                c=$(echo "$c" | perl -pe 's/<p>\s*<\/p>//g'); 
            #                c=$(echo "$c" | perl -pe 's:<p><span:<span:g'); 
            #                c=$(echo "$c" | perl -pe 's:<\/p><br><p><sup:<br><sup:g'); 
            #                c=$(echo "$c" | perl -pe 's:</span></p>:</span>:g'); 
            #                c=$(echo "$c" | perl -pe 's/<br><br>/<br>/g'); 
            #                c=$(echo "$c" | perl -pe 's:<br>$::g'); 
            #                echo "<br><div class=arth><b><font color=darkgreen>$teekakaar :</font></b> $c</div>" >> $myHtml
            #                teekaCntr=$(($teekaCntr+1))
            #            fi
            #        done
            echo "<hr align=center width=40%>" >>  $myHtml
        done
        echo "</div></body></html>" >> $myHtml
        myCntr=$(($myCntr+1))
    done
    echo "Granth group $(basename $group) Done"
done
