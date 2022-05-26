
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
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿इष्टदेव को नमस्कार</option>");
       $optgrp.append("<option value='002-003.html'><b>002-003</b> - ﻿बारह-भावनाओं के नाम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अनित्य अनुप्रेक्षा">')
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿अनित्य अनुप्रेक्षा का सामान्य स्वरूप</option>");
       $optgrp.append("<option value='005-006.html'><b>005-006</b> - ﻿अनित्य-अनुप्रेक्षा का विशेष स्वरूप</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿इन्द्रियों की क्षणिकता</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿बंधुजनों का संयोग कैसा?</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿देह-संयोग की अस्थिरता</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿लक्ष्मी की अस्थिरता</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿इसी को विशेष समझाते हैं </option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿प्राप्त लक्ष्मी का क्या करना चाहिए?</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿लक्ष्मी की अनित्यता</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿लक्ष्मी को गाड़ने वाला मूर्ख </option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿बचाकर रखने वाले का धन पर के लिए</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿लक्ष्मी पर मोहित जीव की दशा</option>");
       $optgrp.append("<option value='017-018.html'><b>017-018</b> - ﻿लक्ष्मी का दास</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿लक्ष्मी को धर्म-कार्य में लगाने वाले की प्रशंसा</option>");
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿सत्कार्यों में धन खर्चने वाले का जन्म सफल</option>");
       $optgrp.append("<option value='021.html'><b>021</b> - ﻿मोह का महात्मय</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अशरण अनुप्रेक्षा">')
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿अशरण अनुप्रेक्षा का स्वरूप</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿दृष्टांत</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿इसी को दृढ़ करते हैं</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿इसी को दृढ़ करते हैं</option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿शरण की कल्पना अज्ञान</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿मरण आयु क्षय से</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿इसी को दृढ़ करते हैं</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿परमार्थ शरण</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿निष्कर्ष</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संसार अनुप्रेक्षा">')
       $optgrp.append("<option value='032-033.html'><b>032-033</b> - ﻿संसार का सामान्य स्वरूप</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿नरक-गति के दुःख</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿नरक में पांच प्रकार के दुःख</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿इसी को विशेष कहते हैं</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿नरक के दुःख कहना संभव नहीं</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿नरक का क्षेत्र और परिणाम दुखमयी</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿नरक में दुःख बहुत काल तक</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿पुण्यवान के भी इष्ट-वियोग सम्भव</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿इसी को आगे और दृढ़ करते हैं</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿कर्म-वशता</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿मानसिक दुःख</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿विषयों में पराधिनता ही दुःख</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿संसार में सभी जगह दुःख</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿मोह का महात्मय</option>");
       $optgrp.append("<option value='064-065.html'><b>064-065</b> - ﻿विचित्र संयोग</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿पांच प्रकार का परिभ्रमण</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿द्रव्य परावर्तन</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿क्षेत्र परावर्तन</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿काल परावर्तन</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿भव परावर्तन</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿भाव परावर्तन</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿एकत्व अनुप्रेक्षा">')
       $optgrp.append("<option value='074-076.html'><b>074-076</b> - ﻿एकत्व अनुप्रेक्षा</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿स्वजन भी दुःख के साथी नहीं</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿वास्तव में धर्म ही शरण</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿भेद-भावना की प्रेरणा</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अशुचि अनुप्रेक्षा">')
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿अशुचि अनुप्रेक्षा का स्वरूप</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿दुर्गंधित देह</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿इसी को और विस्तार से बताते हैं</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿इसी को और विस्तार से बताते हैं</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आस्रव अनुप्रेक्षा">')
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿आस्रव अनुप्रेक्षा का स्वरूप</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿मोह से आस्रव</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿आस्रव के दो प्रकार</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿तीव्र-कषाय</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿आस्रव को हे जानकर त्यागने की प्रेरणा</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर अनुप्रेक्षा">')
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿संवर अनुप्रेक्षा का स्वरूप</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿इसी का विशेष कहते हैं</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿चारित्र</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿संवर बिना भव-भ्रमण</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा अनुप्रेक्षा">')
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿निशल्य तप द्वारा निर्जरा</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿निर्जरा का स्वरूप</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿निर्जरा के दो प्रकार</option>");
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿निर्जरा कैसे बढती है?</option>");
       $optgrp.append("<option value='106-108.html'><b>106-108</b> - ﻿निर्जरा की वृद्धी के स्थान</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿अधिक निर्जरा के उपाय</option>");
       $optgrp.append("<option value='110-111.html'><b>110-111</b> - ﻿विज्ञानघन निर्ममत्व आत्म-सम्मुख के निर्जरा </option>");
       $optgrp.append("<option value='112-113.html'><b>112-113</b> - ﻿विनम्र के निर्जरा</option>");
       $optgrp.append("<option value='114.html'><b>114</b> - ﻿उपसंहार</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
