#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
myHtml=$dbDir/jainDataBase/genBooks/jainPoojas.html
myInDir=$dbDir/others/collaborate/poojas
#. $dbDir/others/collaborate/shastra/common.sh

myRelPath=../../
# Start creating It
cat << EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainPooja</title>
  <link rel="icon" type="image/png" href='${myRelPath}images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='${myRelPath}css/myJqueryMobile.css'>
  <style>
    body {
      background-color: #fcf5e8;
    }
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
      font-size: 200px;
      color : darkred;
      font-weight:bold;
    }
    .index {
      color:blue;
      float:right;
      font-size: 4vw;
    }
    hr {
      border: none;
      height: 3px;
      color: #333;
      background-color: #333;
      width:50%;
    }
    div.adhikaar {
        font-size: 5vw;
    }
    h1 {
        font-size: 5vw;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
  </style>
  <!--script>
    relPath="$myRelPath";
  </script>
  <script type="text/javascript" src="${myRelPath}js/myMobile.js"></script-->
</head>
<body>
<div align=center><a href="${myRelPath}index.html"><img src="${myRelPath}images/jain-saint.jpg" height=240 width=270></img></a></div>
<br><br><br>
<div class=hdr align=center>जैन<br>पूजा-पाठ</div>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<div align=right><font size=2 color=darkRed>nikkyjain@gmail.com<br>
Date : $(date +%d-%m-%y)</font></div>
EOF

# Create Anchors
myGrCntr=1
echo "  <div class=adhikaar id=home><h1>Index</h1></div><br>" >> $myHtml
for group in $(ls -d $dbDir/others/collaborate/poojas/*/)
do
    echo "  <div class=main>$(basename $group | perl -pe 's/.*_//g')</div><br>" >> $myHtml
    echo "    <table align=center width=90%>" >>  $myHtml
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    for bhajan in $(ls -d $group/*/)
    do
        myBhajanName=$(basename $bhajan | perl -pe 's/.txt//g')
        myBjn=$(echo $myBhajanName | perl -pe 's/.*_//g')
        echo "      <td><a href='#gr$myGrCntr-bh$myCntr'>$myCntr) $myBjn</a>" >> $myHtml
        [ $((myCntr%2)) -eq 0 ] && echo "      <tr>" >> $myHtml
        myCntr=$(($myCntr+1))
    done
    IFS="$OIFS"
    echo "    </table>" >> $myHtml
    myGrCntr=$(($myGrCntr+1))
done

echo "<br><br><br><br><br>" >> $myHtml
myGrCntr=1
for group in $(ls -d $dbDir/others/collaborate/poojas/*/)
do
    myCntr=1
    mygroup=$(basename $group)
    OIFS="$IFS"
    IFS=$'\n'
    for pooja in $(ls -d $group/*/)
    do
      myPooja=$(basename $pooja)
      echo "<div class=main id='gr$myGrCntr-bh$myCntr'>$(basename $pooja | perl -pe 's/.*_//g' | perl -pe 's/--.*//')<a href='#home' class=index>&#x1f3e0;</a></div>" >> $myHtml
      for cFile in $(ls $pooja/main/*)
      do
        curFile=$myInDir/$mygroup/$myPooja/main/$(basename $cFile)
        [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
        curFile=$myInDir/$mygroup/$myPooja/title/$(basename $cFile)
        if [ -f $curFile ]; then
          echo "<div class=title>" >> $myHtml 
          cat $curFile >>  $myHtml 
          echo "</div>" >> $myHtml
        fi
        curFile=$(basename $cFile | perl -pe 's/\.txt/.jpg/')
        if [ -f $dbDir/jainDataBase/poojas/$mygroup/$myPooja/images/$curFile ]; then
          echo "<p align=center><img src=../poojas/$mygroup/$myPooja/images/$curFile class=itemImage></img><p>" >> $myHtml 

        fi
        curFile=$myInDir/$mygroup/$myPooja/main/$(basename $cFile)
        echo "<div class=pooja>" >> $myHtml 
        c="$(cat $curFile)"
        c=$(echo "$c" | perl -pe 's/\n/<br>/g')
        c=$(echo "$c" | perl -pe 's/\(\(/<span class=detail>/g' | perl -pe 's/\)\)/<\/span>/g')
        c=$(echo "$c" | perl -pe 's/\(/<span class=lay>/g' | perl -pe 's/\)/<\/span>/g'); 
        c=$(echo "$c" | perl -pe 's/ॐ ह्रीं/<span class=om>ॐ ह्रीं/g')
        c=$(echo "$c" | perl -pe 's/निर्वपामीति स्वाहा/निर्वपामीति स्वाहा<\/span>/g')
        c=$(echo "$c" | perl -pe 's/पुष्पांजलिं क्षिपामि/पुष्पांजलिं क्षिपामि<\/span>/g')
        c=$(echo "$c" | perl -pe 's/संवौषट् आह्वाननं/संवौषट् आह्वाननं<\/span>/g')
        c=$(echo "$c" | perl -pe 's/ठः स्थापनं/ठः स्थापनं<\/span>/g')
        c=$(echo "$c" | perl -pe 's/वषट् सन्निधि करणं/वषट् सन्निधि करणं<\/span>/g')
        echo $c >>  $myHtml
        echo "</div>" >> $myHtml
        curFile=$myInDir/$mygroup/$myPooja/mainH/$(basename $cFile)
        if [ -f $curFile ]; then
          c="$(cat $curFile)"
          c=$(echo "$c" | perl -pe 's/\n/<br>/g')
          echo "<div class=gadya>$c</div>" >> $myHtml 
        fi
        curFile=$myInDir/$mygroup/$myPooja/arth/$(basename $cFile)
        if [ -f $curFile ]; then
          c="$(cat $curFile)"
          c=$(echo "$c" | perl -pe 's/\n/<br>/g')
          c=$(echo "$c" | perl -pe 's/\(\(/<span class=details>/g' | perl -pe 's/\)\)/<\/span>/g')
          c=$(echo "$c" | perl -pe 's/\[/<span class=gatharth>[/g' | perl -pe 's/\]/]<\/span>/g'); 
          c=$(echo "$c" | perl -pe 's/\(/<span class=comment>\(/g' | perl -pe 's/\)/\)<\/span>/g'); 
          echo "<div class=poojarth><font color=maroon><b>अन्वयार्थ : </b></font>$c</div><br>" >>  $myHtml
        fi
      done
      echo "<br><hr align=center><br>" >>  $myHtml
      myCntr=$(($myCntr+1))
    done
    echo -ne "Done - Pooja group $(basename $group)"\\r
    myGrCntr=$(($myGrCntr+1))
done

echo "</body></html>" >> $myHtml
echo
