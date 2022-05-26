#!/bin/sh

#export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb-dev).*/$1/g')
outDir=$(cd ../../.. && echo $PWD)
export dbDir=$(cd ../../../../jaindb-dev && echo $PWD)
echo "DB Dir $dbDir"
. $dbDir/others/collaborate/shastra/common.sh
myHtml=$outDir/index.html
myJs=$outDir/js/myMobile.js

## ---- Header -----
createHeader './'

cat << EOF >> $myHtml
<br><br>
  <div id=myQuotes> </div>
  <!--div data-role="footer" data-position="fixed" data-fullscreen="true">
    <div align=right>nikkyjain@gmail.com</div>
  </div-->
</div>
</body>
</html>
EOF

cat << EOF > $myJs

var myAudioFIles = [];
var quotes = [];

EOF

OIFS="$IFS"
IFS=$'\n'
declare -a myAudioFIles=()
for quote in $(ls $dbDir/others/collaborate/quotes/*)
do
    c="$(cat $quote)"
    c=$(echo "$c" | perl -pe 's/\n/<br>/g' | perl -pe 's/--/<\/p><div class=aacharyaName>--/')
    echo "quotes.push('<p>$c</div>');" >> $myJs
done
IFS="$OIFS"

cat << EOF >> $myJs
var curQuote=0;
var quoteCol=['darkRed', 'darkBlue', 'maroon', 'darkGreen', 'darkMagenta', 'indigo'];

// Shuffle Array
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function load_quotes() {
    \$('#myQuotes').html(quotes[curQuote]);
    \$('#myQuotes p').css( 'color', quoteCol[curQuote%(quoteCol.length)]);
    curQuote++;
    if(curQuote==quotes.length) curQuote=0;
    setTimeout(load_quotes, 8000);
}

\$(document).on( 'pagecontainershow', function(){
    //    // Swip Panel Code
    //    //\$( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
    //    \$( document ).on( "swiperight", "#demo-page", function( e ) {
    //        // We check if there is no open panel on the page because otherwise
    //        // a swipe to close the left panel would also open the right panel (and v.v.).
    //        // We do this by checking the data that the framework stores on the page element (panel: open).
    //        if ( \$( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
    //            //if ( e.type === "swipeleft" ) {
    //            //    \$( "#right-panel" ).panel( "open" );
    //            //} else if ( e.type === "swiperight" ) {
    //            if ( e.type === "swiperight" ) {
    //                \$( "#leftPanel" ).panel( "open" );
    //            }
    //        }
    //    });
    var myAudio;
    var myAudioCntr=0;
    if(myAudioFIles.length>0) {
      \$('#myRadioIconDiv').show();
    }
    shuffle(quotes);
    var maxHeight = \$( window ).height() - 60 + "px";
    \$('#myQuotes').css( 'height', maxHeight );
    load_quotes();

    \$('#myRadioNextId').click(function() {
        if (myAudio) {
            myAudio.pause();
            myAudioCntr++;
            myAudio.setAttribute('src',myAudioFIles[myAudioCntr]);
            myAudio.play();
        }
    })

    \$('#myRadioId').click(function() {
        if(myAudioFIles.length==0) {
            alert("No Audio Files Detected");
        } else {
          shuffle(myAudioFIles);
          if (myAudio) {
              myAudioCntr=0;
              myAudio.pause();
              myAudio.remove();
              myAudio=null;
          } else {
              myAudio = document.createElement("AUDIO");
              myAudio.setAttribute('src',myAudioFIles[0]);
              myAudio.setAttribute('controls', 'controls');
              \$('#myRadio').html(myAudio);
              playAudio();
          }
      }
    });

    function playAudio() {
        myAudio.setAttribute('src',myAudioFIles[myAudioCntr]);
        myAudio.play();
        myAudio.addEventListener('ended', function() {
            myAudioCntr++;
            playAudio();
        });
    }
})

EOF
