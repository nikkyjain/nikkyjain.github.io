#!/bin/sh


# Add Header
convert=0

[ "$1" = "-c" ] && convert=1

curCntr=0
curIndexLine=0
curDir=$(basename $PWD | sed -e 's/.*_//')
parentDir=$(basename $(dirname $PWD) | sed -e 's/.*_//')
pDir=$(basename $PWD)
gDir=$(basename $(dirname $PWD))
ggDir=$(basename $(dirname $(dirname $PWD)))
totalIndexLines=$(cat index.txt | wc -l)
export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
echo "DB Dir $dbDir"
echo "pDir $pDir"
echo "gDir $gDir"
echo "ggDir $ggDir"

outDir=$dbDir/jainDataBase/teeka/$gDir/$pDir/html
/bin/rm -rf $outDir
mkdir -p $outDir
echo "Will Create HTML files here - $outDir"
mkdir -p $outDir
outFile="$outDir/index.html"
/bin/rm -f $outFile

cat <<EOF >> $outFile
<html>
<head>
<title>$parentDir</title>
<link rel="icon" type="image/png" href="../../../../images/default/jainFlag-short.jpg"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="hi" />
<link type="text/css" rel="stylesheet" href="../../../../css/shastra.css" />
<script type="text/javascript" src="../../../../js/jquery.js"></script>
<script type="text/javascript" src="../../../../js/teeka.js"></script>
</head>
<body>
<script src="../../../../js/myRockingRolling.js" type="text/javascript"></script>
<script>
  \$('.myMenu').html("<a href='#'><button class='hideShowTeeka' onclick='hideShowTeeka()'>Hide Teeka</button></a>"+
  "<a href='#'><button class='hideShowArth' onclick='hideShowArth()'>Hide Arth</button></a>"+
  "<a href='#'><button class='hideShowTitle' onclick='hideShowTitle()'>Hide Title</button></a>"+
  "<a href='#'><button class='hideShowPadhya' onclick='hideShowPadhya()'>Hide Padhya</button></a>");
</script>
EOF


while read cFile; do
    #q=`echo $p | sed 's/.txt//'`
    cFile=$(echo "$cFile" | tr -d '\r')
    sFile=`echo $cFile | sed 's/.txt//'`
    curFile=main/$cFile
    [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
    curFile=title/$cFile
    curIndexLine=$(($curIndexLine + 1))
    nextIndexLine=$(($curIndexLine + 1))
    prevIndexLine=$(($curIndexLine - 1))
    prevPage=
    nextPage=
    [ "$prevIndexLine" == "0" ] && prevPage="" || prevPage=$(sed -n "${prevIndexLine}p" index.txt | sed -e 's/.txt/.html/')	# Prev HTML Page
    [ "$nextIndexLine" -gt "$totalIndexLines" ] && nextPage="" || nextPage=$(sed -n "${nextIndexLine}p" index.txt | sed 's/.txt/.html/')	# Prev HTML Page
    echo "<hr style='height:4px;border:none;color:#333;background-color:#333;' width=50%><div class='context'>" >> $outFile
    if [ -f "$curFile" ]; then
        if [ -e "adhikaar/$cFile" ]; then
          echo "<br><div align=center><font size=10 color=black><b>`cat adhikaar/$cFile` </b></font><br></div>" >> $outFile
        fi
        echo "      <br><div class=titleContainer align=center><font color=darkGreen>`cat $curFile`</font></div>">>$outFile
    fi
    curFile=main/$cFile
    if [ -f "$curFile" ]; then
        c="$(cat $curFile)"
        c=$(echo "$c" | perl -pe 's/\n/<br>/g'); 
        echo "<h3 class=mainTitle align=center><font color=maroon> $c </font></h3>" >> $outFile
        if [ -f "mainH/$cFile" ]; then
          echo "<div class=padhyaContainer align=center><b><font color=darkmaroon> `cat mainH/$cFile | perl -pe 's/\n/<br>/g'` </font></b></div>" >> $outFile
        fi
        curCntr=$(($curCntr + 1))
        numTeeka=$(ls -d teeka[0-9]* 2>/dev/null | wc -l)
        arthFile=arth/$cFile
        if [ -e "$arthFile" ]; then
            echo "<div class=bottomContainer id=bottomTxt$curCntr style='text-align: justify; margin: 0 auto; width: 90%;'>" >> $outFile
            if [ -f "$arthFile" ]; then
                #dos2unix $arthFile
                c="$(cat $arthFile)"
                #unix2dos $arthFile
                c=$(echo "$c" | perl -pe 's/\n/<br>/g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g')
                c=$(echo "$c" | perl -pe 's/(\()/$1<font color=DarkSlateGray>/g' | perl -pe 's/(\))/<\/font>$1/g'); 
                echo "      <div class=arthContainer><b><font color=black>अन्वयार्थ : </font></b>$c</div>" >> $outFile
            fi
            for teeka in $(ls -d teeka[0-9]* 2>/dev/null)
            do
                [[ $teeka =~ notes ]] && continue
                bottomFile=$teeka/$cFile
                bottomFileS=$(echo $teeka/$cFile | perl -pe 's/\..*//g')
                teekakaar=$(echo $teeka | perl -pe 's/.*?-//' | perl -pe 's/_/ /g')
                teekaNum=$(echo $teeka | perl -pe 's/teeka(.*)/$1/')
                if ls $bottomFileS* 1> /dev/null 2>&1; then
                    c="$(cat $bottomFileS*)"
                    gathaName=$(echo $cFile | sed 's/\..*//')
                    c=$(echo "$c" | perl -pe 's/प्रतिशंका [-–—]/<b><\/font><font color=darkgreen>उत्तर –<\/font><\/b>/g');
                    c=$(echo "$c" | perl -pe 's/शंका [-–—]/<b><font color=red>शंका –/g'); 
                    c=$(echo "$c" | perl -pe 's/प्रश्न [-–—:]/<b><font color=red>प्रश्न –/g'); 
                    c=$(echo "$c" | perl -pe 's/समाधान [-–—]/<\/font><font color=darkGreen>समाधान –<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/उत्तर [-–—:]/<\/font><font color=darkGreen>उत्तर –<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/अर्थ [-–—]/<b><font color=maroon>अर्थ –<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/विशेषार्थ [-–—]/<b><font color=maroon>विशेषार्थ –<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/भावार्थ [-–—]/<b><font color=maroon>भावार्थ –<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/\[\[/<b><font color=maroon>/g' | perl -pe 's/\]\]/<\/font><\/b>/g'); 
                    c=$(echo "$c" | perl -pe 's/\[/<b><font color=maroon>/g' | perl -pe 's/\]/<\/b><\/font>/g'); 
                    c=$(echo "$c" | perl -pe 's:\n:</p><br><p>:g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g'); 
                    c=$(echo "<p>$c</p>" | perl -pe 's/<p>.*\(\(.*\)\)//g' | perl -pe 's/\;\;/<br>/g'); 
                    c=$(echo "$c" | perl -pe 's/(\()/$1<font color=DarkSlateGray>/g' | perl -pe 's/(\))/<\/font>$1/g'); 
                    c=$(echo "$c" | perl -pe 's/<p>\s*<\/p>//g'); 
                    c=$(echo "$c" | perl -pe 's:<p><span:<span:g'); 
                    c=$(echo "$c" | perl -pe 's:<\/p><br><p><sup:<br><sup:g'); 
                    c=$(echo "$c" | perl -pe 's:</span></p>:</span>:g'); 
                    c=$(echo "$c" | perl -pe 's/<br><br>/<br>/g'); 
                    c=$(echo "$c" | perl -pe 's:<br>$::g'); 
                    echo "<br><div class='teeka' align=justify><b><font color=darkgreen>$teekakaar :</font></b> <font color=darkblue>$c</font></div>" >> $outFile
                    teekaCntr=$(($teekaCntr+1))
                fi
            done
            echo "</div>" >> $outFile
        fi
    fi
    echo -ne "Processed $cFile"\\r
done < "index.txt"

# Add Footer
#unix2dos $outFile
echo "</div></body>" >> $outFile
echo "</html>" >> $outFile
exit 0
