
$( document ).ready(function() {
  $('.teekakaar').change(function() {
    window.location.href = $(this).val()
  })
})
function toggleTeeka(teeka) {
  $('#teeka'+teeka).toggle();
  if($('.teeka'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('.teeka'+teeka).css('color', 'green')
  }else{
    $('.teeka'+teeka).css('color', 'red')
  }
}
function toggleSTeeka(teeka) {
  $('#steeka'+teeka).toggle();
  if($('#stitle'+teeka).css('color')=='rgb(255, 0, 0)') {
    $('#stitle'+teeka).css('color', 'green')
  }else{
    $('#stitle'+teeka).css('color', 'red')
  }
}
$( document ).ready(function() {
  mySel=$('select#select-native-0')
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿संक्षिप्त और मध्यम रुचि वाले शिष्य की अपेक्षा प्ररूपणा - २ (अभेद विवक्षा) और २० (भेद विवक्षा)</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿किस-किस मार्गणा में कौन-कौन सी प्ररूपणा अन्तर्भूत हो सकती है?</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿गुणस्थान का लक्षण</option>");
  mySel.append("<option value='009-010.html'><b>009-010</b> - ﻿१४ गुणस्थान</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿१४ गणुस्थानों में भाव (मोहनीय की अपेक्षा)</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿मिथ्यात्व गुणस्थान (पहला)</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿मिथ्याभाव को समझने के लिए उदाहरण</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿मिथ्यादृष्टि के बाह्य चिह्न</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿सासादन / सासन गुणस्थान (दूसरा)</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿सासादन का उदाहरण</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿मिश्र / सम्यग्मिथ्यात्व गुणस्थान (तीसरा)</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿अविरत सम्यक्त्व (चौथा)</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿अविरत सम्यक्त्व (चौथा)</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿विपरीत अर्थ का श्रद्धान करने पर भी क्या कोई सम्यग्दृष्टि हो सकता है?</option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿देशविरत (पाँचवां)</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿देशविरत (पाँचवां)</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿देशविरत (पाँचवां)</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿प्रमत्तविरत (छठा)</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿प्रमत्तविरत (छठा)</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿१५ प्रमाद</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿प्रमाद के अन्य ५ प्रकार</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿संख्या (भंग का जोड़) कैसे लाए</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿प्रस्तार - प्रथम प्रकार</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿प्रस्तार - द्वितीय प्रकार</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿प्रथम प्रस्तार का परिवर्तन</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿दूसरे प्रस्तार का परिवर्तन</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿नष्ट लाने की विधि</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿उद्दिष्ट लाने की विधि</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿प्रथम प्रस्तार का गूढ़ यन्त्र</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿दूसरे प्रस्तार का गूढ़ यंत्र</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿अप्रमत्त विरत (सातवां)</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿स्वस्थान अप्रमत्त विरत की विशषेता</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿सातिशय अप्रमत्त विरत का स्वरूप</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿तीन करण की विशषेता</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿अपूर्वकरण गुणस्थान</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
