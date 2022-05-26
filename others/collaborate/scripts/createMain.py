# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob
from common import createBhajan
from common import mkdirs
from common import createHeader
from common import createTitle

outDir=os.path.abspath('../../../')
dbDir=os.path.abspath('../../../../jaindb/')
print("DB Dir ",dbDir)
myHtml=outDir+"/index.html"
myJs=outDir+"/js/myMobile.js"
html=open(myHtml, "w")
js=open(myJs, "w")

createTitle(html)
createHeader(html, './', dbDir)

html.write("""
<br><br>
  <div id=myQuotes> </div>
  <!--div data-role="footer" data-position="fixed" data-fullscreen="true">
    <div align=right>nikkyjain@gmail.com</div>
  </div-->
</div>
</body>
</html>""")

js.write("""

var myAudioFIles = [];
var quotes = [];

""")

for curFile in sorted(glob.glob(dbDir+"/others/collaborate/quotes/*")):
    with open(curFile, 'r') as myfile:
        fData=myfile.read().replace('\n','<br>')
        fData=fData.replace('--','</p><div class=aacharyaName>--')
    js.write("quotes.push('<p>"+fData+"</div>');\n")

js.write("""
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
    $('#myQuotes').html(quotes[curQuote]);
    $('#myQuotes p').css( 'color', quoteCol[curQuote%(quoteCol.length)]);
    curQuote++;
    if(curQuote==quotes.length) curQuote=0;
    setTimeout(load_quotes, 10000);
}

$(document).on( 'pagecontainershow', function(){
    //    // Swip Panel Code
    //    //$( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
    //    $( document ).on( "swiperight", "#demo-page", function( e ) {
    //        // We check if there is no open panel on the page because otherwise
    //        // a swipe to close the left panel would also open the right panel (and v.v.).
    //        // We do this by checking the data that the framework stores on the page element (panel: open).
    //        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
    //            //if ( e.type === "swipeleft" ) {
    //            //    $( "#right-panel" ).panel( "open" );
    //            //} else if ( e.type === "swiperight" ) {
    //            if ( e.type === "swiperight" ) {
    //                $( "#leftPanel" ).panel( "open" );
    //            }
    //        }
    //    });
    var myAudio;
    var myAudioCntr=0;
    if(myAudioFIles.length>0) {
      $('#myRadioIconDiv').show();
    }
    shuffle(quotes);
    var maxHeight = $( window ).height() - 60 + "px";
    $('#myQuotes').css( 'height', maxHeight );
    load_quotes();

    $('#myRadioNextId').click(function() {
        if (myAudio) {
            myAudio.pause();
            myAudioCntr++;
            myAudio.setAttribute('src',myAudioFIles[myAudioCntr]);
            myAudio.play();
        }
    })

    $('#myRadioId').click(function() {
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
              $('#myRadio').html(myAudio);
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
""")
