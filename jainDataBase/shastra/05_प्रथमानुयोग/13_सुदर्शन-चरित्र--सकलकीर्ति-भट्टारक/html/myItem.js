
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
  mySel.append("<option value='0001.html'><b>0001</b> - ﻿मंगल और प्रस्तावना</option>");
  mySel.append("<option value='001.html'><b>001</b> - ﻿सुदर्शन का जन्म</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿सुदर्शन की युवावस्था </option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿सुदर्शन संकट में</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿सुदर्शन का धर्म-श्रवण</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿सुदर्शन और मनोरमा के भव</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿सुदर्शन की तपस्या </option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿संकट पर विजय </option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿सुदर्शन का निर्वाण-गमन</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
