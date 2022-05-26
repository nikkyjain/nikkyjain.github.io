#!/bin/sh

if [ ! -d main ]; then
  echo "This doesnt seem to be shastra directory"
  exit
fi

export dbDir=$(cd ../../../../.. && echo $PWD)
echo "DB Dir $dbDir"
myHtmlName=$(basename $PWD | sed 's/.*_//' | sed 's/--.*//')
myWriter=$(basename $PWD | sed 's/.*--//')
myHtml=$dbDir/jainDataBase/genBooksWithTeeka/${myHtmlName}.html
echo "Creating $myHtml"

myRelPath=../../
# Start creating It
cat << EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$myHtmlName</title>
  <link rel="icon" type="image/png" href="${myRelPath}images/default/jainFlag-short.jpg"/>
  <link rel="stylesheet" href="${myRelPath}css/myJqueryMobile.css">
  <!--link rel="stylesheet" href="${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css">
  <script type="text/javascript" src="${myRelPath}js/jquery.js"></script>
  <script type="text/javascript" src="${myRelPath}js/jquery-mobile/1.5-alpha/jquery.mobile.js"></script-->
  <style>
    td {
      text-align: left; 
      vertical-align: middle;
      height : 40px;
      font-size: 25px;
      color : darkblue;
    }
    td a {
      text-decoration: none !important;
    }
    .hdr {
      font-size: 14vw;
      color : darkred;
      font-weight:bold;
    }
    .index {
      color:blue;
      float:right;
    }
    hr {
      border: none;
      height: 3px;
      color: #333;
      background-color: #333;
      width:50%;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
    .index {
        font-size: 20px;
    }
  </style>
  <!--script>
    relPath="$myRelPath";
  </script>
  <script type="text/javascript" src="${myRelPath}js/myMobile.js"></script-->
</head>
<body>
<div align=center><img src="${myRelPath}images/jain-saint.jpg" height=270 width=300></img></div>
<br><br><br>
<div class=hdr align=center>$myHtmlName</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><b><font size=20>- $myWriter</font></b></div>
<br><br><br>
<div align=right><font size=2 color=darkRed>nikkyjain@gmail.com<br>
Date : $(date +%d-%m-%y)</font></div>
EOF

for cFile in $(ls $PWD/main/*)
do
    bcFile=$(basename $cFile)
    curFile=$PWD/adhikaar/$bcFile
    if [ -f $curFile ]; then
        echo "<br><br><div class=adhikaar><h1>$(cat $curFile)</h1></div><br>" >>  $myHtml
    fi
    if [ -d $PWD/ftitle ]; then
        curFile=$PWD/ftitle/$bcFile
        if [ -f $curFile ]; then
            echo "<br><div class=title>$(cat $curFile)</div>" >> $myHtml
        else
            echo "<br>" >> $myHtml
        fi
    else
        curFile=$PWD/title/$bcFile
        if [ -f $PWD/header/$cFile -o -f $curFile ]; then
            echo "<br><div class=title>" >> $myHtml 
            [ -f $PWD/header/$bcFile ] && curFile=$PWD/header/$bcFile
            cat $curFile >>  $myHtml 
            echo "</div>" >> $myHtml
        fi
    fi
    curFile=$PWD/main/$bcFile
    echo "<div class=gatha>" >> $myHtml 
    cat $curFile | perl -pe 's/\n/<br>/g' >>  $myHtml
    echo "</div>" >> $myHtml
    curFile=$PWD/mainH/$bcFile
    if [ -f $curFile ]; then
      echo "<div class=gadya>" >> $myHtml 
      cat $curFile | perl -pe 's/\n/<br>/g' >>  $myHtml
      echo "</div>" >> $myHtml
    fi
    curFile=$PWD/arth/$bcFile
    if [ -f $curFile ]; then
        c="$(cat $curFile)"
        c=$(echo "$c" | perl -pe 's/\n/<br>/g' | perl -pe 's/\[/<b><font color=darkRed>[/g' | perl -pe 's/\]/]<\/font><\/b>/g')
        c=$(echo "$c" | perl -pe 's/\(/<span class=comment>(/g' | perl -pe 's/\)/)<\/span>/g'); 
        echo "<div class=arth><b><font color=black>अन्वयार्थ : </font></b>$c</div>" >>  $myHtml
    fi
            for teeka in $(ls -d $PWD/teeka[0-9]* 2>/dev/null)
            do
                [[ $teeka =~ notes ]] && continue
                bottomFile=$teeka/$bcFile
                bottomFileS=$(echo $bottomFile | perl -pe 's/\..*//g')
                teekakaar=$(echo $(basename $teeka) | perl -pe 's/.*?-//' | perl -pe 's/_/ /g')
                teekaNum=$(echo $teeka | perl -pe 's/teeka(.*)/$1/')
                if ls $bottomFileS* 1> /dev/null 2>&1; then
                    c="$(cat $bottomFileS*)"
                    gathaName=$(echo $bcFile | sed 's/\..*//')
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
                    c=$(echo "$c" | perl -pe 's:\n:</p><p>:g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g'); 
                    c=$(echo "<p>$c</p>" | perl -pe 's/<p>.*\(\(.*\)\)//g' | perl -pe 's/\;\;/<br>/g'); 
                    c=$(echo "$c" | perl -pe 's/\(/<font color=DarkSlateGray>(/g' | perl -pe 's/\)/)<\/font>/g'); 
                    c=$(echo "$c" | perl -pe 's/<p>\s*<\/p>//g'); 
                    c=$(echo "$c" | perl -pe 's:<p><span:<span:g'); 
                    c=$(echo "$c" | perl -pe 's:<\/p><br><p><sup:<br><sup:g'); 
                    c=$(echo "$c" | perl -pe 's:</span></p>:</span>:g'); 
                    c=$(echo "$c" | perl -pe 's/<br><br>/<br>/g'); 
                    c=$(echo "$c" | perl -pe 's:<br>$::g'); 
                    echo "<br><div class=arth><b><font color=darkgreen>$teekakaar :</font></b> $c</div>" >> $myHtml
                    teekaCntr=$(($teekaCntr+1))
                fi
            done
    echo "<hr align=center width=40%>" >>  $myHtml
    echo -ne "Done - $bcFile"\\r
done
echo "</body></html>" >> $myHtml
echo
