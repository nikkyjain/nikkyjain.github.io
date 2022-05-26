
function createBhajan {
  relPath=$1
  createSearch=$2
  [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
  <div data-history=false data-role=popup id=popupBhajan data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
  for category in $(ls -d $dbDir/jainDataBase/bhajans/*/)
  do
      myCategory=$(basename $category)
      myCategory=$(echo $myCategory | sed 's/-/ /g' | sed 's/.*_//')
      [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
      OIFS="$IFS"
      IFS=$'\n'
      myCntrL=1;
      for item in $(ls $category/main/* | sort)
      do
          myItem=$(basename $item)
          myItem=$(echo $myItem | sed 's/.txt//' | perl -pe 's/-/ /g');
          myCategory=$(basename $(dirname $(dirname $(readlink -f $item))))
          myWebName=$(echo $myItem | perl -pe 's/ /-/g');
          echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/bhajans/$myCategory/html/${myWebName}.html>$myCntrL) $myItem</a></li>" >> $myHtml
          myCntrL=$(($myCntrL+1))
  
      done
      [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
      IFS="$OIFS"
      if [ "$createSearch" = "" ]; then 
        echo "  Category $(basename $category) Done"
      else
        echo "  Search $(basename $category) Done"
      fi
  done
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createPooja {
  relPath=$1
  createSearch=$2
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml
  <div data-history=false data-role=popup id=popupPooja data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
for category in $(ls -d $dbDir/others/collaborate/poojas/*/)
do
    myCategory=$(basename $category)
    myCategory=$(echo $myCategory | sed 's/-/ /g' | sed 's/.*_//')
    [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
    OIFS="$IFS"
    IFS=$'\n'
    myCntrL=1
    for item in $(ls -d $category/*/)
    do
        myItem=$(basename $item)
        myItem=$(echo $myItem | sed 's/.*_//');
        echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/poojas/$(basename $category)/$(basename $item)/html/index.html>$myCntrL) $myItem</a></li>" >> $myHtml
        myCntrL=$(($myCntrL+1))
    done
    #echo "  \$(\"\#poojaListView-$myCategory\").listview('refresh');" >> $jsFile
    IFS="$OIFS"
     [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
   if [ "$createSearch" = "" ];then
      echo "  Category $(basename $category) Done"
   else
      echo "  Search $(basename $category) Done"
   fi
done

  [ "$createSearch" = "" ] && cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createGranth {
  relPath=$1
  myType=$2
  createSearch=$3
  myTypeCap="$(tr '[:lower:]' '[:upper:]' <<< ${myType:0:1})${myType:1}"
  [ "$createSearch" = "" ] && cat << EOF >> $myHtml
  <div data-history=false data-role=popup id=popup$myTypeCap data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
EOF
for category in $(ls -d $dbDir/others/collaborate/shastra/*/)
do
    myCategory=$(basename $category)
    myCategory=$(echo $myCategory | sed 's/-/ /g' | sed 's/.*_//')
    [ "$createSearch" = "" ] && cat <<EOF >> $myHtml
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>$myCategory</h2>
        <ul data-role=listview>
EOF
    OIFS="$IFS"
    IFS=$'\n'
    myCntrL=1
    for item in $(ls -d $category/*/)
    do
        myItem=$(basename $item)
        myItem=$(echo $myItem | sed 's/.*_//');
        echo "          <li data-theme=b><a data-ajax=false href=${relPath}jainDataBase/$myType/$(basename $category)/$(basename $item)/html/index.html>$myCntrL) $myItem</a></li>" >> $myHtml
        myCntrL=$(($myCntrL+1))
    done
    IFS="$OIFS"
    [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
        </ul>
      </div>
EOF
    if [ "$createSearch" = "" ]; then
      echo "  Search $(basename $category) Done"
    else
      echo "  Search $(basename $category) Done"
    fi
done

 [ "$createSearch" = "" ] &&  cat << EOF >> $myHtml 
    </div>
  </div>
EOF
}

function createMiscList {
  myRelPath=$1
cat << EOF >> $myHtml
  <div data-history=false data-role=popup id=popupMisc data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>गुणस्थान</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanTable.html>गुणस्थान-विभाजन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanKarmUdayTable.html>गुणस्थान में उदय</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanToAndFrom.html>गुणस्थान-गमनागमन</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GunsthanKaalTable.html>गुणस्थान-काल-संख्या</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>कर्म</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmUdayTable.html>कर्म-उदय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmBandhTable.html>कर्म-बन्ध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/karmSattaTable.html>कर्म-सत्ता</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>बंध</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/prakratiBandhPrarupana.html>प्रकृति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/stithiSaarani.html>स्थिति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/anubhagBandhPrarupana.html>अनुभाग-बंध</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>प्रमाण</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/kshetraPramaan.html>क्षेत्र-प्रमाण</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/sankhyaPramaan.html>संख्याप्रमाण</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Other</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/alpBahutva.html>अल्प बहुत्व</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/GatiAgati.html>गति-आगति</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/nyaay.html>न्याय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/misc/moolSanghPattavali.html>मूल संघ पट्टावली</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Download</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/JeevSamas.pdf>जीव समास</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/downloads/BookMark.pdf>BookMark</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Print Granth</h2>
          <ul data-role=listview>
EOF
for myPdfPath in $(ls -d $dbDir/jainDataBase/genBooks/*.html)
do
  myPdfFile=$(basename $myPdfPath)
 	myPdfName=$(echo $myPdfFile | perl -pe 's/.html//')
  echo "<li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/genBooks/$myPdfFile>$myPdfFile</a></li>"  >> $myHtml
done
for myPdfPath in $(ls -d $dbDir/jainDataBase/genBooks/*.pdf)
do
  myPdfFile=$(basename $myPdfPath)
 	myPdfName=$(echo $myPdfFile | perl -pe 's/.pdf//')
  echo "<li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/genBooks/$myPdfFile>$myPdfName</a></li>"  >> $myHtml
done
cat << EOF >> $myHtml
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Print Granth With Teeka</h2>
          <ul data-role=listview>
EOF
for myPdfPath in $(ls -d $dbDir/jainDataBase/genBooksWithTeeka/*.pdf)
do
  myPdfFile=$(basename $myPdfPath)
 	myPdfName=$(echo $myPdfFile | perl -pe 's/.pdf//')
  echo "<li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/genBooksWithTeeka/$myPdfFile>$myPdfName</a></li>"  >> $myHtml
done
cat << EOF >> $myHtml
          </ul>
        </div>
    </div>
  </div>

  <div data-history=false data-role=popup id=popupGames data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Kids Games</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}kidsGames1.html>Arrange Names</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Crossword Puzzle</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword1.html>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword2.html>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/crosswords/crossword3.html>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Word Search</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-1.pdf>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-2.pdf>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/wordSearch/WordSearch-3.pdf>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Exam</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/GunsthanVivechan.html>गुणस्थान विवेचन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/TattvarthSutra-1.html>तत्वार्थ मंजुषा - अध्याय 1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/jeevSamas.html>JeevSamas</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href=${myRelPath}jainDataBase/jainExam/karmUdayBandh.html>Karm Uday Bandh</a></li>
          </ul>
        </div>
    </div>
  </div>
EOF
}

function createHeader {
  myRelPath=$1

cat <<EOF > $myHtml
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jai Jinendra</title>
  <link rel="icon" type="image/png" href='${myRelPath}images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='${myRelPath}css/myJqueryMobile.css'>
  <link rel="stylesheet" href='${myRelPath}js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
  <script type="text/javascript" src='${myRelPath}js/jquery.js'></script>
  <script type="text/javascript" src='${myRelPath}js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script>
  <script>
    relPath='$myRelPath';
\$(document).on( "pagecontainershow", function(){
  \$("#my_audio").on("error", function (e) {
    \$("#myAudio").hide();
  });
  \$.getScript('${relPath}js/allAudioFiles.js', function() {
    console.log("Added Audio Files");
  });
})
  </script>
  <script type="text/javascript" src='${myRelPath}js/myMobile.js'></script>
</head>
<body>
<div data-role=page id=demo-page>
  <div data-role=panel id=leftPanel>
    <div data-role=navbar data-maxbutton=1 class=ui-body-a>
        <ul id=myPanelUl>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupBhajan'>भजन</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupPooja'>पूजा-पाठ</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupGatha'>Full Granth Only Gatha</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupTeeka'>Full Granth With Teeka</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupShastra'>Granth Gaatha-By-Gatha</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupGames'>Play / Test</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupMisc'>Misc</a></li>
        </ul>
    </div>
    <a href="#jainRadio" data-rel="popup" class="ui-button ui-corner-all ui-shadow ui-button-inline">Jain Radio</a>
    <div data-role="popup" id=jainRadio class="ui-content" style="max-width:480px">
      <a href="#" data-rel=back data-ajax=false class="ui-button ui-corner-all ui-shadow ui-button-a ui-button-icon-only ui-toolbar-header-button-right">Close <span class="ui-icon ui-icon-delete"></span></a>
      <br><p> Play Jain Bhajan / Pooja / Path</p>
      <a href='#' data-role=button data-inline=true data-icon=ui-icon-audio id=myRadioId>Radio</a>
      <a href="#" data-role=button data-inline=true data-icon=ui-icon-arrow-r id=myRadioNextId data-show-label=false>Next Audio</a>
      <div id=myRadio></div>
    </div>
    <div>
      <form>
        <input data-type='search' id='searchTitleIn' placeholder='Search in Hindi..'>
      </form>
      <ul id=searchTitle data-role="listview" data-filter="true" data-input="#searchTitleIn" data-filter-reveal="true" data-filter-placeholder="Search Bhajan / Pooja / Shastra">
EOF
    createBhajan $myRelPath 1
    createPooja $myRelPath 1
    createGranth $myRelPath 'teeka' 1
    cat << EOF >> $myHtml
      </ul>
    </div>
  </div> <!-- Panel -->
  <div data-role="header" data-position="fixed">
      <!--h1 align=center>Jai Jinendra</h1-->
      <figure align=center>
        <a href="#leftPanel" class="ui-button ui-shadow ui-corner-all ui-button-inline">
          <img id=enPanel src="${myRelPath}images/jain-saint.jpg" height=80 width=90></img>
          <figcaption>Click Here</figcaption>
        </a>
      </figure>
  </div> <!-- Header -->

EOF

## ---- Bhajan Div -----
createBhajan $myRelPath
## ---- Pooja Div -----
createPooja $myRelPath
## ---- Granth Div -----
createGranth $myRelPath 'gatha'
## ---- Granth Div -----
createGranth $myRelPath 'teeka'
## ---- Shastra Div -----
createGranth $myRelPath 'shastra'
## ---- Misc Div ----
createMiscList $myRelPath
}
