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
globalCntr=0
jsFile="myGatha.js"
jsDone=0
export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
echo "DB Dir $dbDir"
echo "pDir $pDir"
echo "gDir $gDir"
echo "ggDir $ggDir"


mkdir -p $dbDir/jainDataBase/$ggDir/$gDir/$pDir
outDir=$(find $dbDir/jainDataBase/$ggDir/$gDir -name $pDir -type d)
echo "Will Create HTML files here - $outDir"
/bin/rm -rf $outDir/html
mkdir -p $outDir/html
/bin/cp -f $dbDir/others/collaborate/$ggDir/$gDir/$pDir/index.txt $outDir/index.txt 
/bin/cp -f $dbDir/others/collaborate/$ggDir/$gDir/index.txt $outDir/../index.txt 
/bin/cp -f $dbDir/others/collaborate/$ggDir/index.txt $outDir/../../index.txt 

exit

while read cFile; do
  #q=`echo $p | sed 's/.txt//'`
  cFile=$(echo "$cFile" | tr -d '\r')
  sFile=`echo $cFile | sed 's/.txt//'`
  curFile=main/$cFile
  [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
  curFile=title/$cFile
  outFile="$outDir/html/$sFile.html"
  jsFilePath="$outDir/html/$jsFile"
  curIndexLine=$(($curIndexLine + 1))
  nextIndexLine=$(($curIndexLine + 1))
  prevIndexLine=$(($curIndexLine - 1))
  prevPage=
  nextPage=
  [ "$prevIndexLine" == "0" ] && prevPage="" || prevPage=$(sed -n "${prevIndexLine}p" index.txt | sed -e 's/.txt/.html/')	# Prev HTML Page
  [ "$nextIndexLine" -gt "$totalIndexLines" ] && nextPage="" || nextPage=$(sed -n "${nextIndexLine}p" index.txt | sed 's/.txt/.html/')	# Prev HTML Page
  cat <<EOF > $outFile
<html>
  <head>
    <title>$parentDir</title>
    <link rel="icon" type="image/png" href="../../../../../images/default/jainFlag-short.jpg"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="hi" />
    <link type="text/css" rel="stylesheet" href="../../../../../css/shastra.css" />
    <link type="text/css" rel="stylesheet" href="../../../../../css/myJqueryMobile.css" />
    <script type="text/javascript" src="../../../../../js/jquery.js"></script>
    <script type="text/javascript" src="../../../../../js/${ggDir}.js"></script>
    <script type="text/javascript" src="../../../../../js/myFontSzCtrl.js"></script>
  </head>
  <body>
    <script src="../../../../../js/myRockingRolling.js" type="text/javascript"></script>
EOF
  [ "$prevPage" != "" ] && echo "      <a href='$prevPage'><img src='../../../../../images/common/prev.jpg' id=next height=50 width=50/></a>" >> $outFile
  [ "$nextPage" != "" ] && echo "      <a href='$nextPage' style='float: right'><img src='../../../../../images/common/next.jpg' id=prev height=50 width=50/></a>" >> $outFile
  cat <<EOF >> $outFile
	<!--div align=center>
    <form name=myForm align=center>
        <button id=submitCorrections onclick="return false;">Submit Corrections</button>
    </form>
	</div-->
	<table width=100% justify=center border=0><tr>
EOF
  for teeka in $(ls -d teeka[0-9]*)
  do
	if [ "$(/bin/ls $teeka | wc -l)" != "0" ]; then 
      mysFile=$(echo $teeka | perl -pe 's/teeka.*?-//')
      echo  "      <td class=example data-dropdown=#$mysFile>$mysFile</td>" >> $outFile
	fi
  done
  echo "    </table><script type='text/javascript' src='$jsFile'>" >> $outFile

  if [ "$jsDone" = "0" ]; then
    echo "Creating Common JS file : $jsFilePath"
    for teeka in $(ls -d teeka[0-9]*)
    do
      if [ "$(/bin/ls $teeka | wc -l)" != "0" ]; then 
        mysFile=$(echo $teeka | perl -pe 's/teeka.*?-//')
        cat <<EOF >> $jsFilePath
document.write("<div id=$mysFile class='dropdown dropdown-tip dropdown-scroll'>");
document.write("  <ul class=dropdown-menu>");
EOF
        for curTeeka in $(/bin/ls $teeka)
        do
          mysFile=$(echo $curTeeka | perl -pe 's/.txt//')
          myHtmlFile=$(echo $mysFile | perl -pe 's/.*?__//')	# For Disp
          myDispsFile=$(echo $mysFile | perl -pe 's/__.*//')	# For Main
      	  [ "$globalCntr" = "0" ] && globalCntr=1 || globalCntr=0
      	  [ "$globalCntr" = "0" ] && fontColor='darkGreen' || fontColor='darkBlue'
          if [ -e "header/${myDispsFile}.txt" ]; then
            if [ -e "adhikaar/${myDispsFile}.txt" ]; then
              myHtmlFile=$(echo "<br><font size=5 color=black><b>`cat adhikaar/${myDispsFile}.txt` </b></font><br><br><font color=darkPurple><b>$myHtmlFile</b></font> - <font color=$fontColor>`cat header/${myDispsFile}.txt`</font>")
            else
              myHtmlFile=$(echo "<font color=darkPurple><b>$myHtmlFile</b></font> - <font color=$fontColor>`cat header/${myDispsFile}.txt`</font>")
            fi
          elif [ -e "title/${myDispsFile}.txt" ]; then
            if [ -e "adhikaar/${myDispsFile}.txt" ]; then
              myHtmlFile=$(echo "<br><font size=5 color=black><b>`cat adhikaar/${myDispsFile}.txt` </b></font><br><br><font color=darkPurple><b>$myHtmlFile</b></font> - <font color=$fontColor>`cat title/${myDispsFile}.txt`</font>")
            else
              myHtmlFile=$(echo "<font color=darkPurple><b>$myHtmlFile</b></font> - <font color=$fontColor>`cat title/${myDispsFile}.txt`</font>")

            fi
          fi
          echo "document.write(\"        <li><a href='${myDispsFile}.html'><font size=4>$myHtmlFile</font></a></li>\");" >> $jsFilePath
        done
        echo 'document.write("</ul></div>");' >> $jsFilePath
      fi
    done
	echo "Common JS file created"
	jsDone=1
  fi
  cat <<EOF >> $outFile
      </script></div>
	  <hr style='height:4px;border:none;color:#333;background-color:#333;'><h2 align=center>$parentDir ($curDir)</h2>
EOF
  if [ -f "$curFile" ]; then
      echo "      <br><div class=titleContainer align=center><font color=darkGreen>`cat $curFile`</font></div>">>$outFile
  fi
  curFile=main/$cFile
  if [ -f "$curFile" ]; then
    c="$(cat $curFile)"
    c=$(echo "$c" | perl -pe 's/\n/<br>/g'); 
    cat <<EOF >> $outFile
    <h3 class=mainTitle align=center><font color=maroon> $c </font></h3>
EOF
    curCntr=$(($curCntr + 1))
    numTeeka=$(ls -d teeka[0-9]* | wc -l)
    arthFile=arth/$cFile
    if [ -e "$arthFile" ]; then
      cat <<EOF >> $outFile
  <div class=bottomContainer id=bottomTxt$curCntr style="text-align: justify; margin: 0 auto; width: 90%;">
EOF
    if [ -f "$arthFile" ]; then
	  #dos2unix $arthFile
      c="$(cat $arthFile)"
	  #unix2dos $arthFile
      c=$(echo "$c" | perl -pe 's/\n/<br>/g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g')
	  c=$(echo "$c" | perl -pe 's/(\()/$1<font color=DarkSlateGray>/g' | perl -pe 's/(\))/<\/font>$1/g'); 
      echo "      <div class=arthContainer><b><font color=black>अन्वयार्थ : </font></b>$c</div>" >> $outFile
    fi
      cat <<EOF >> $outFile
    <div class=tikaTopContainer><b><br> टीका : 
EOF
      teekaCntr=0;
      for teeka in $(ls -d teeka[0-9]*)
      do
        bottomFile=$teeka/$cFile
        bottomFileS=$(echo $teeka/$cFile | perl -pe 's/\..*//g')
        teekakaar=$(echo $teeka | perl -pe 's/.*?-//' | perl -pe 's/_/-/g')
		    if ls $bottomFileS* 1> /dev/null 2>&1; then
          gathaName=$(echo $cFile | sed 's/\..*//')
          echo "    <span id=teeka$teekaCntr class=gatha$gathaName style=\"color: darkGreen;\">&nbsp;&nbsp;$teekakaar</span>" >> $outFile
          if [[ $teeka = *"notes"* ]]; then
              cat <<EOF >> $outFile
      <script>
        \$(document).ready(function(){
          \$('#teeka$teekaCntr').click();
        });
      </script>
EOF
          fi
          teekaCntr=$(($teekaCntr + 1))
        fi
      done
      teekaCntr=0;
      cat <<EOF >> $outFile
    <b></div>
  <table class=display cellspacing=0 width="100%" border=1>
     <tbody>
         <tr>
EOF
      for teeka in $(ls -d teeka[0-9]*)
      do
        bottomFile=$teeka/$cFile
        bottomFileS=$(echo $teeka/$cFile | perl -pe 's/\..*//g')
        teekakaar=$(echo $teeka | perl -pe 's/.*?-//' | perl -pe 's/_/ /g')
        teekaNum=$(echo $teeka | perl -pe 's/teeka(.*)/$1/')
        teekaSNum=$(echo teekaS$teekaNum/$cFile | perl -pe 's/\..*//g')
		#echo "HaHa $teekaSNum"
		if ls $teekaSNum* 1> /dev/null 2>&1; then
		  st="<span class=sanskritTeeka justify=right>संस्कृत टीका</span>"
		  s="<span id=sanskritTeeka justify=left><font color=datkMaroon><br><br>$(cat $teekaSNum*)</font></span>"
          s=$(echo "$s" | perl -pe 's/\n/<br>/g'); 
		else
		  s=""
		  st=""
		fi
		if ls $bottomFileS* 1> /dev/null 2>&1; then
          c="$(cat $bottomFileS*)"
          gathaName=$(echo $cFile | sed 's/\..*//')
          c=$(echo "$c" | perl -pe 's/शंका [-–—]/<b><font color=red>शंका –/g'); 
          c=$(echo "$c" | perl -pe 's/प्रश्न [-–—:]/<b><font color=red>प्रश्न –/g'); 
          c=$(echo "$c" | perl -pe 's/समाधान [-–—]/<\/font><font color=darkGreen>समाधान –<\/font><\/b>/g'); 
          c=$(echo "$c" | perl -pe 's/उत्तर [-–—:]/<\/font><font color=darkGreen>उत्तर –<\/font><\/b>/g'); 
          c=$(echo "$c" | perl -pe 's/अर्थ [-–—]/<b><font color=maroon>अर्थ –<\/font><\/b>/g'); 
          c=$(echo "$c" | perl -pe 's/विशेषार्थ [-–—]/<b><font color=maroon>विशेषार्थ –<\/font><\/b>/g'); 
          c=$(echo "$c" | perl -pe 's/भावार्थ [-–—]/<b><font color=maroon>भावार्थ –<\/font><\/b>/g'); 
          c=$(echo "$c" | perl -pe 's/\[\[/<b>/g' | perl -pe 's/\]\]/<\/b>/g'); 
          c=$(echo "$c" | perl -pe 's:\n:</p><br><p>:g' | perl -pe 's/\[/<b>[/g' | perl -pe 's/\]/]<\/b>/g'); 
          c=$(echo "<p>$c</p>" | perl -pe 's/<p>.*\(\(/<div class=teekaPadya align=center>/g' | perl -pe 's/\)\)/<\/div><br><p>/g' | perl -pe 's/\;\;/<br>/g'); 
	        c=$(echo "$c" | perl -pe 's/(\()/$1<font color=DarkSlateGray>/g' | perl -pe 's/(\))/<\/font>$1/g'); 
          c=$(echo "$c" | perl -pe 's/<p>\s*<\/p>//g'); 
          c=$(echo "$c" | perl -pe 's:<p><span:<span:g'); 
          c=$(echo "$c" | perl -pe 's:<\/p><br><p><sup:<br><sup:g'); 
          c=$(echo "$c" | perl -pe 's:</span></p>:</span>:g'); 
          c=$(echo "$c" | perl -pe 's/<br><br>/<br>/g'); 
          c=$(echo "$c" | perl -pe 's:<br>$::g'); 
          c=$(echo "$c" | perl -pe 's:></p><br><p>\s*:>:g');
          echo "    <td id=gatha$gathaName-teeka$teekaCntr><b><font color=darkGreen>$teekakaar $st$s</font></b><br><br><font color=darkBlue>$c</font></td>" >> $outFile
          teekaCntr=$(($teekaCntr+1))
        fi
      done
      echo "      </tbody></table></div>" >> $outFile
    fi
  fi
  echo "</body>" >> $outFile
  echo "</html>" >> $outFile
  echo -ne "Done - $bcFile"\\r
  if [ "$indexDone" = "" ]; then
    indexDone="Done"
    cp $outFile $outDir/html/index.html
  fi
done < "index.txt"

# Add Footer
#unix2dos $outFile
exit 0
