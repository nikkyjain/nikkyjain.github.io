
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
  mySel.append("<option value='002.html'><b>002</b> - ﻿आराधनाओं के नाम और स्वरूप</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿दो प्रकार की आराधना</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿दो प्रकार की आराधना का हे</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿आगे सम्यक्‌त्व के बिना जो ज्ञान है, वह अज्ञान है – ऐसा कहते हैं–</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿अब चारित्र-आराधना में गर्भित तप आराधना को दिखाते हैं–</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿अब कहते हैं कि अविरत सम्यग्द्रष्टि के भी तपश्चरण महान उपकारी नहीं होता है –</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿चारित्राराधना में सभी आराधनाएँ गर्भित हैं -</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
