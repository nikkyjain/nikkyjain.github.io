#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
export dbDir=$(cd ../../.. && echo $PWD)
echo "DB Dir $dbDir"
myHtml=$dbDir/allPoojas.html
myInDir=$dbDir/others/collaborate/poojas
#. $dbDir/others/collaborate/shastra/common.sh
cat << EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jainpooja</title>
  <link rel="icon" type="image/png" href="${myRelPath}images/default/jainFlag-short.jpg"/>
  <!--link rel="stylesheet" href="${myRelPath}css/myJqueryMobile.css">
  <link rel="stylesheet" href="${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css">
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
      font-size: 200px;
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
    div.adhikaar {
        font-size: 60px;
        color: saddlebrown;
        text-align: center;
        font-weight: bold;
        margin: 0 auto;
    }
    h1 {
        position: relative;
        font-size: 50px;
        z-index: 1;
        overflow: hidden;
        text-align: center;
    }
    h1:before, h1:after {
        position: absolute;
        top: 51%;
        overflow: hidden;
        width: 50%;
        height: 1px;
        content: '\a0';
        background-color: red;
    }
    h1:before {
        margin-left: -50%;
        text-align: right;
    }
    .adhikaar {
        background-color: #ccc;
    }
    div.main {
        font-size: 50px;
        color: maroon;
        font-weight: bold;
        text-align: center;
    }
    div.pooja {
        font-size: 30px;
        color: darkBlue;
        text-align: center;
        line-height: 140%;
    }
    a, a:visited, a:hover, a:active {
      color: inherit;
    }
    .index {
        font-size: 20px;
    }
    div.title {
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    div.poojarth {
        font-size: 20px;
        color: darkGreen;
        width: 90%;
        text-align: justify;
        margin: 0 auto;
    }
    span.gatharth {
        font-size: 20px;
        color: darkBlue;
        font-weight: bold;
    }
    span.om {
        font-size: 30px;
        color: maroon;
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
  </style>
  <!--script>
    relPath="$myRelPath";
  </script>
  <script type="text/javascript" src="${myRelPath}js/myMobile.js"></script-->
</head>
<body>
<div align=center><img src="images/jain-saint.jpg" height=240 width=270></img></div>
<br><br><br>
<div class=hdr align=center>?????????<br>????????????-?????????</div>
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
        curFile=$myInDir/$mygroup/$myPooja/main/$(basename $cFile)
        echo "<div class=pooja>" >> $myHtml 
        c="$(cat $curFile)"
        c=$(echo "$c" | perl -pe 's/\n/<br>/g')
        c=$(echo "$c" | perl -pe 's/\(\(/<span class=comment>/g' | perl -pe 's/\)\)/<\/span>/g')
        c=$(echo "$c" | perl -pe 's/??? ???????????????/<span class=om>??? ???????????????/g')
        c=$(echo "$c" | perl -pe 's/????????????????????????????????? ??????????????????/????????????????????????????????? ??????????????????<\/span>/g')
        c=$(echo "$c" | perl -pe 's/????????????????????????????????? ????????????????????????/????????????????????????????????? ????????????????????????<\/span>/g')
        c=$(echo "$c" | perl -pe 's/????????????????????? ????????????????????????/????????????????????? ????????????????????????<\/span>/g')
        c=$(echo "$c" | perl -pe 's/?????? ?????????????????????/?????? ?????????????????????<\/span>/g')
        c=$(echo "$c" | perl -pe 's/???????????? ????????????????????? ????????????/???????????? ????????????????????? ????????????<\/span>/g')
        echo $c >>  $myHtml
        echo "</div>" >> $myHtml
        curFile=$myInDir/$mygroup/$myPooja/arth/$(basename $cFile)
        if [ -f $curFile ]; then
          c="$(cat $curFile)"
          c=$(echo "$c" | perl -pe 's/\(\(/<div class=comment>/g' | perl -pe 's/\)\)/<\/div>/g')
          c=$(echo "$c" | perl -pe 's/\[/<span class=gatharth>[/g' | perl -pe 's/\]/]<\/span>/g'); 
          echo "<div class=poojarth><font color=maroon><b>??????????????????????????? : </b></font>$c</div><br>" >>  $myHtml
        fi
      done
      echo "<br><hr align=center><br>" >>  $myHtml
      myCntr=$(($myCntr+1))
    done
    echo "Pooja group $(basename $group) Done"
    myGrCntr=$(($myGrCntr+1))
done

echo "</body></html>" >> $myHtml
