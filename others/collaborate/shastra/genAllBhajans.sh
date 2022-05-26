#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
myHtml=$dbDir/jainDataBase/genBooks/jainBhajans.html
#. $dbDir/others/collaborate/shastra/common.sh

myRelPath=../../
# Start creating It
cat << EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JainBhajan</title>
  <link rel="icon" type="image/png" href='${myRelPath}images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='${myRelPath}css/myJqueryMobile.css'>
  <!--link rel="stylesheet" href='${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
  <script type="text/javascript" src='${myRelPath}js/jquery.js'></script>
  <script type="text/javascript" src='${myRelPath}js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script-->
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
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
  </style>
  <!--script>
    relPath='$myRelPath';
  </script>
  <script type="text/javascript" src='${myRelPath}js/myMobile.js'></script-->
</head>
<body>
<div align=center><a href='${myRelPath}index.html'><img src='${myRelPath}images/jain-saint.jpg' height=240 width=270></img></a></div>
<br><br><br>
<div class=hdr align=center>जैन भजन</div>
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
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    myGroup=$(basename $group | perl -pe 's/-/ /g' | perl -pe 's/.*_//g')
    echo "  <div class=main>$myGroup भजन</div><br>" >> $myHtml
    echo "    <table align=center width=90%>" >>  $myHtml
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    for bhajan in $(ls $group/main/* | sort)
    do
        myBhajanName=$(basename $bhajan | perl -pe 's/.txt//g' | perl -pe 's/-/ /g')
        myBjn=$(echo $myBhajanName | perl -pe 's/\s/_/g')
        echo "      <td><a href='#gr$myGrCntr-bh$myCntr'>$myCntr) $myBhajanName</a>" >> $myHtml
        [ $((myCntr%2)) -eq 0 ] && echo "      <tr>" >> $myHtml
        myCntr=$(($myCntr+1))
    done
    IFS="$OIFS"
    echo "    </table>" >> $myHtml
    myGrCntr=$(($myGrCntr+1))
done

echo "<br><br><br><br><br>" >> $myHtml
myGrCntr=1
for group in $(ls -d $dbDir/jainDataBase/bhajans/*/)
do
    myGroup=$(basename $group | perl -pe 's/-/ /g' | perl -pe 's/.*_//g')
    echo "<br><br><div class=adhikaar><h1>$myGroup भजन</h1></div><br>" >>  $myHtml
    myCntr=1
    OIFS="$IFS"
    IFS=$'\n'
    [ ! -d $group/main ] && continue
    for bhajan in $(ls $group/main/* | sort)
    do
      myBhajanName=$(basename $bhajan | perl -pe 's/.txt//g' | perl -pe 's/-/ /g')
      myBjn=$(echo $myBhajanName | perl -pe 's/\s/_/g')
      echo "<br><div class=main id='gr$myGrCntr-bh$myCntr'>$myBhajanName<a href='#home' class=index>&#x1f3e0;</a></div>" >> $myHtml
      c="$(cat $bhajan)"
      c=$(echo "$c" | perl -pe 's/\n/<br>/g')
      echo "<br><br>    <div class=pooja>$c" >>  $myHtml
      echo "  </div><br>" >> $myHtml
      echo "<hr align=center>" >>  $myHtml
      myCntr=$(($myCntr+1))
    done
    IFS="$OIFS"
    echo -ne "Done - Bhajan group $(basename $group)"\\r
    myGrCntr=$(($myGrCntr+1))
done
echo "</body></html>" >> $myHtml
echo
