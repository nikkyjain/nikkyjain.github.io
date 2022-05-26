
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
    $optgrp=$('<optgroup label="﻿मुंशी प्रेमचंद">')
       $optgrp.append("<option value='1-001.html'><b>1-001</b> - ﻿सद्गति</option>");
       $optgrp.append("<option value='1-002.html'><b>1-002</b> - ﻿कश्मीरी सेब</option>");
       $optgrp.append("<option value='1-003.html'><b>1-003</b> - ﻿जादू</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿Leo Tolstoy">')
       $optgrp.append("<option value='2-001.html'><b>2-001</b> - ﻿प्रेम में परमेश्वर</option>");
       $optgrp.append("<option value='2-002.html'><b>2-002</b> - ﻿क्षमादान</option>");
       $optgrp.append("<option value='2-003.html'><b>2-003</b> - ﻿राजपूत कैदी</option>");
       $optgrp.append("<option value='2-004.html'><b>2-004</b> - ﻿दो वृद्ध</option>");
       $optgrp.append("<option value='2-005.html'><b>2-005</b> - ﻿एक चिंगारी</option>");
       $optgrp.append("<option value='2-006.html'><b>2-006</b> - ﻿क्षमादान</option>");
       $optgrp.append("<option value='2-007.html'><b>2-007</b> - ﻿दो गज जमीन</option>");
       $optgrp.append("<option value='2-008.html'><b>2-008</b> - ﻿तीन प्रश्न</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿Anton Chekhov">')
       $optgrp.append("<option value='3-001.html'><b>3-001</b> - ﻿कमजोर</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿Misc">')
       $optgrp.append("<option value='9-001.html'><b>9-001</b> - ﻿हार की जीत</option>");
       $optgrp.append("<option value='9-002.html'><b>9-002</b> - ﻿उसने कहा था</option>");
       $optgrp.append("<option value='9-003.html'><b>9-003</b> - ﻿काबुलीवाला</option>");
       $optgrp.append("<option value='9-004.html'><b>9-004</b> - ﻿हींगवाला</option>");
       $optgrp.append("<option value='9-005.html'><b>9-005</b> - ﻿पाजेब</option>");
       $optgrp.append("<option value='9-006.html'><b>9-006</b> - ﻿दुख का अधिकार</option>");
       $optgrp.append("<option value='9-007.html'><b>9-007</b> - ﻿परदा</option>");
       $optgrp.append("<option value='9-008.html'><b>9-008</b> - ﻿टोबा टेकसिंह</option>");
       $optgrp.append("<option value='9-009.html'><b>9-009</b> - ﻿वापसी</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
