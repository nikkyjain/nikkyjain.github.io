
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
    $optgrp=$('<optgroup label="﻿कलश">')
       $optgrp.append("<option value='000_मंगलाचरण.html'><b>000_मंगलाचरण</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿द्रव्य-सामान्य">')
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿शास्त्र का प्रयोजन</option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿﻿पंचास्तिकाय-संक्षिप्त व्याख्यान</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿पाँच अस्तिकायों के विशेष नाम</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿अस्तित्व और कायत्व किसप्रकार ?</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿पंचास्तिकायों और काल की द्रव्य संज्ञा</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿द्रव्यों के एक-क्षेत्रावगाह</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿सत्ता का स्वरूप</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿सत्ता और द्रव्य में अभिन्नता</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿द्रव्य-लक्षण तीन प्रकार से</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿नयों द्वारा द्रव्य का लक्षण</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿द्रव्य-पर्यायों में अभेद</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿द्रव्य और गुणों में अभेद</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿प्रमाण सप्तभंगी</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿सत का विनाश नहीं, असत् का उत्पाद नहीं</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿गुण-पर्याय</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿कथंचित उत्पाद-विनाश</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿जीव का कथंचित जन्म-मरण</option>");
       $optgrp.append("<option value='019.html'><b>019</b></option>");
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿सिद्ध भगवान में कथंचित उत्पाद-व्यय</option>");
       $optgrp.append("<option value='021.html'><b>021</b></option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿पाँच अस्तिकाय का विशेष वर्णन</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿काल द्रव्य का प्रतिपादन</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿व्यवहार-काल</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿व्यवहारकाल की पराधीनता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीवास्तिकाय">')
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿जीवास्तिकाय का व्याख्यान</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿मुक्त अवस्था का निरुपाधि-स्वरूप</option>");
       $optgrp.append("<option value='029.html'><b>029</b></option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿व्यवहार से जीवत्व गुण</option>");
       $optgrp.append("<option value='031-032.html'><b>031-032</b> - ﻿जीवों का स्वाभाविक प्रमाण तथा मुक्त / अमुक्त </option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿संसारी जीव देह प्रमाण</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿शरीर के अनुसार जीव की अवगाहना</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿सिद्धों की अवगाहना</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿सिद्धों मेँ कार्य-कारण-भाव</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿मुक्ति में भी जीव का सद्भाव</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿जीव का चेतना भाव</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿त्रिविध चेतना के स्वामी</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿जीव का उपयोग</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿ज्ञानोपयोग के भेद</option>");
       $optgrp.append("<option value='048.html'><b>042</b> - ﻿दर्शनोपयोग के भेद</option>");
       $optgrp.append("<option value='049.html'><b>043</b> - ﻿जीव और ज्ञान में अभेद</option>");
       $optgrp.append("<option value='050.html'><b>044</b> - ﻿द्रव्य का गुण में सर्वथा भेद में दोष</option>");
       $optgrp.append("<option value='051.html'><b>045</b> - ﻿द्रव्य और गुण के अभिन्न प्रदेश</option>");
       $optgrp.append("<option value='052.html'><b>046</b> - ﻿भेद में भी कथंचित अभेद का समर्थन</option>");
       $optgrp.append("<option value='053.html'><b>047</b> - ﻿निश्चय से भेदाभेद का उदाहरण</option>");
       $optgrp.append("<option value='054.html'><b>048</b> - ﻿ज्ञान-ज्ञानी के सर्वथा भेद में दोष</option>");
       $optgrp.append("<option value='055.html'><b>049</b> - ﻿नैयायिक मानी समवाय सम्बन्ध का निषेध</option>");
       $optgrp.append("<option value='056.html'><b>050</b> - ﻿गुण-गुणी के कथंचित् एकत्व</option>");
       $optgrp.append("<option value='057-058.html'><b>051-052</b> - ﻿द्रव्य-गुणों के कथंचित् अभेद में दृष्टांत</option>");
       $optgrp.append("<option value='059.html'><b>053</b> - ﻿गुणमयी जीवों की संख्या</option>");
       $optgrp.append("<option value='060.html'><b>054</b> - ﻿कथंचित उत्पाद-व्यय</option>");
       $optgrp.append("<option value='061.html'><b>055</b> - ﻿अब पूर्व सूत्र में जो जीव का उत्पाद-व्यय स्वरूप कहा है उसका कारण नर-नारक आदि गति-नामकर्म का उदय है, ऐसा कहते हैं</option>");
       $optgrp.append("<option value='062.html'><b>056</b> - ﻿औदयिकादि पाँच भाव व्याख्यान </option>");
       $optgrp.append("<option value='064.html'><b>058</b> - ﻿अब उदयागत द्रव्यकर्म, व्यवहार से रागादि परिणामों का कारण हैऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='065.html'><b>059</b> - ﻿अब एकान्त से जीव को कर्म के अकर्तृत्व में दूषण द्वार से पूर्वपक्ष कहते हैं</option>");
       $optgrp.append("<option value='066.html'><b>060</b> - ﻿अब, पूर्व गाथा में आत्मा को कर्म का अकर्तृत्व होने पर दूषणरूप से जो पूर्वपक्ष प्रस्तुत किया था, यहाँ उसका परिहार करते हैं तथा द्वितीय व्याख्यान के पक्ष में स्थितपक्ष (सुनिश्चित हुआ तथ्य) दिखाते हैं</option>");
       $optgrp.append("<option value='067.html'><b>061</b> - ﻿अब उस ही व्याख्यान को आगम-संवाद से दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='068.html'><b>062</b> - ﻿अब निश्चयनय की अपेक्षा अभेद षट्कारकी रूप से कर्म पुद्गल स्वकीय स्वरूप को करता है; उसीप्रकार जीव भी ( अपने स्वरूप को ही करता है), ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='069.html'><b>063</b> - ﻿पूर्वपक्ष गाथा</option>");
       $optgrp.append("<option value='070.html'><b>064</b> - ﻿परिहार गाथाएं - द्रव्य कर्मों का कर्ता जीव नहीं</option>");
       $optgrp.append("<option value='071.html'><b>065</b> - ﻿अब, आत्मा के मिथ्यात्व-रागादि परिणाम होने पर कर्मवर्गणा योग्य पुद्गल निश्चय की अपेक्षा उपादानरूप से स्वयं ही कर्मपने से परिणमित होते हैं, ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='072.html'><b>066</b> - ﻿अब कर्मवर्गणा योग्य पुद्गल जिसप्रकार स्वयं ही कर्मरूप से परिणमित होते हैं, वैसा दृष्टान्त देते हैं</option>");
       $optgrp.append("<option value='073.html'><b>067</b> - ﻿कर्म-फल में भोक्तृत्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुदगलास्तिकाय">')
       $optgrp.append("<option value='074.html'><b>068</b> - ﻿कर्तृत्व भोक्तृत्व का उपसंहार</option>");
       $optgrp.append("<option value='075.html'><b>069</b> - ﻿कर्म-संयुक्तत्व कर्म-रहितत्व</option>");
       $optgrp.append("<option value='076.html'><b>070</b> - ﻿अब यहाँ भी पूर्वकथित प्रभुत्व का ही कर्मरहितत्व की मुख्यता से प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='077-078.html'><b>071-072</b> - ﻿अब उस ही नौ अधिकार द्वारा कहे गए जीवास्तिकाय का और भी दश भेदों द्वारा या २० भेदों द्वारा विशेष व्याख्यान करते हैं</option>");
       $optgrp.append("<option value='079.html'><b>073</b> - ﻿अब मुक्त के ऊर्ध्वगति और मरणकाल में संसारी जीवों के छहगतियाँ होती हैं, ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='080.html'><b>074</b> - ﻿पुद्गल-स्कन्ध व्याख्यान</option>");
       $optgrp.append("<option value='081.html'><b>075</b> - ﻿अब, पूर्वोक्त स्कन्ध आदि चार विकल्पों में से प्रत्येक का लक्षण कहते हैं</option>");
       $optgrp.append("<option value='082.html'><b>076</b> - ﻿अब, स्कन्धों के पुद्गलत्व व्यवहार व्यवस्थापित करते हैं</option>");
       $optgrp.append("<option value='084.html'><b>077</b> - ﻿परमाणु व्याख्यान</option>");
       $optgrp.append("<option value='085.html'><b>078</b> - ﻿अब पृथ्वी आदि जाति से भिन्न परमाणु नहीं है, ऐसा निश्चय करते हैं</option>");
       $optgrp.append("<option value='086.html'><b>079</b> - ﻿अब शब्द पुद्गल-स्कन्ध की पर्याय है; ऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='087.html'><b>080</b> - ﻿अब परमाणु के एक प्रदेशत्व व्यवस्थापित करते हैं</option>");
       $optgrp.append("<option value='088.html'><b>081</b> - ﻿अब परमाणु द्रव्य में गुण-पर्याय के स्वरूप को कहते हैं</option>");
       $optgrp.append("<option value='089.html'><b>082</b> - ﻿पुदगलास्तिकाय उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आकाशास्तिकाय">')
       $optgrp.append("<option value='090.html'><b>083</b> - ﻿धर्मास्तिकाय का स्वरूप</option>");
       $optgrp.append("<option value='091.html'><b>084</b> - ﻿अब धर्म के ही शेष रहे स्वरूप का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='092.html'><b>085</b> - ﻿अब धर्म के गतिहेतुत्व में लोकप्रसिद्ध दृष्टान्त कहते हैं</option>");
       $optgrp.append("<option value='093.html'><b>086</b> - ﻿अधर्मास्तिकाय का स्वरूप</option>");
       $optgrp.append("<option value='094.html'><b>087</b> - ﻿धर्माधर्म द्रव्य का अस्तित्व ण मानने पर दूषण</option>");
       $optgrp.append("<option value='095.html'><b>088</b> - ﻿अब, गति-स्थितिहेतुत्व के विषय में धर्म-अधर्म अत्यन्त उदासीन हैं, ऐसा निश्चित करते हैं</option>");
       $optgrp.append("<option value='096.html'><b>089</b> - ﻿अब धर्म-अधर्म की गति-स्थिति हेतुत्व सम्बन्धी उदासीनता के विषय में युक्ति प्रकाशित करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चूलिका">')
       $optgrp.append("<option value='097.html'><b>090</b> - ﻿लोकालोकाकाश-स्वरूप</option>");
       $optgrp.append("<option value='098.html'><b>091</b> - ﻿अब षड्द्रव्यों का समूह लोक है, उससे बाहर अनन्त आकाश अलोक है, ऐसा प्रगट करते हैं</option>");
       $optgrp.append("<option value='099.html'><b>092</b> - ﻿धर्माधर्म सम्बन्धी पूर्वपक्ष के निराकरणार्थ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿काल-द्रव्य">')
       $optgrp.append("<option value='100.html'><b>093</b> - ﻿अब स्थित पक्ष (निश्चित हुए पक्ष) का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='101.html'><b>094</b> - ﻿अब आकाश के गति-स्थिति हेतुत्व के अभावरूप साध्य में और भी कारण कहते हैं</option>");
       $optgrp.append("<option value='102.html'><b>095</b> - ﻿अब आकाश की गति-स्थिति कारणता के निराकरणपरक व्याख्यान का उपसंहार कहते हैं / करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿उपसंहार">')
       $optgrp.append("<option value='103.html'><b>096</b> - ﻿धर्मादि तीनों के कथंचित एकत्व-पृथक्त्व का प्रतिपादन</option>");
       $optgrp.append("<option value='104.html'><b>097</b> - ﻿चेतानाचेतन-मुर्तामुर्तत्व प्रतिपादन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नव-पदार्थ">')
       $optgrp.append("<option value='105.html'><b>098</b> - ﻿सक्रिय-निश्क्रियत्व प्रतिपादन</option>");
       $optgrp.append("<option value='106.html'><b>099</b> - ﻿प्रकारान्तर से मूर्तामूर्तत्व प्रतिपादन</option>");
       $optgrp.append("<option value='107.html'><b>100</b> - ﻿व्यवहार-निश्चय काल प्रतिपादन</option>");
       $optgrp.append("<option value='108.html'><b>101</b> - ﻿अब नित्य और क्षणिक होने के कारण फिर से काल के भेद दिखाते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीव-पदार्थ">')
       $optgrp.append("<option value='109.html'><b>102</b> - ﻿काल के द्रव्यत्व-अकायत्व का प्रतिपादन</option>");
       $optgrp.append("<option value='110.html'><b>103</b> - ﻿भावना-फल प्रतिपादन</option>");
       $optgrp.append("<option value='111.html'><b>104</b> - ﻿अब दु:ख से मोक्ष के कारण का क्रम कहते हैं</option>");
       $optgrp.append("<option value='112.html'><b>105</b> - ﻿अंतिम तीर्थंकर परम-देव को नमस्कार कर पंचास्तिकाय षड्द्रव्य सम्बन्धी नव-पदार्थ के भेद और मोक्ष-मार्ग कहता हूँ; इसप्रकार प्रतिज्ञा-पूर्वक नमस्कार करते हैं</option>");
       $optgrp.append("<option value='112.html'><b>कलश-7</b> - ﻿अंतिम तीर्थंकर परम-देव को नमस्कार कर पंचास्तिकाय षड्द्रव्य सम्बन्धी नव-पदार्थ के भेद और मोक्ष-मार्ग कहता हूँ; इसप्रकार प्रतिज्ञा-पूर्वक नमस्कार करते हैं</option>");
       $optgrp.append("<option value='113.html'><b>106</b> - ﻿अब सर्वप्रथम मोक्षमार्ग की संक्षेप में सूचना करते हैं</option>");
       $optgrp.append("<option value='115.html'><b>107</b> - ﻿अब सम्यग्दर्शन, ज्ञान, चारित्र -- तीनों का विशेष विवरण करते हैं</option>");
       $optgrp.append("<option value='116.html'><b>108</b> - ﻿अब इसके बाद (द्वितीय अन्तराधिकार में सर्वप्रथम) जीवादि नवपदार्थों का मुख्य वृत्ति से नाम और गौण वृत्ति से स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='117.html'><b>109</b> - ﻿जीव के स्वरूप का निरूपण करते हैं</option>");
       $optgrp.append("<option value='118.html'><b>110</b> - ﻿अब पृथ्वीकाय आदि पाँच भेदों का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='119.html'><b>111</b> - ﻿व्यवहार से अग्नि और वायुकायिक जीवों के त्रसपना दिखाते हैं</option>");
       $optgrp.append("<option value='120.html'><b>112</b> - ﻿अब पृथ्वीकायिक आदि पाँचों के एकेन्द्रियत्व का नियम करते हैं</option>");
       $optgrp.append("<option value='121.html'><b>113</b> - ﻿अब पृथ्वीकाय आदि एकेन्द्रियों के चैतन्य सम्बंधी अस्तित्व के विषय में दृष्टांत कहते हैं</option>");
       $optgrp.append("<option value='122.html'><b>114</b> - ﻿अब दो इन्द्रिय के भेदों को प्ररूपित करते हैं</option>");
       $optgrp.append("<option value='123.html'><b>115</b> - ﻿अब तीन इन्द्रिय के भेद प्रदर्शित करते हैं --</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव-पदार्थ">')
       $optgrp.append("<option value='124.html'><b>116</b> - ﻿विकलेन्द्रिय - चार इन्द्रिय जीव</option>");
       $optgrp.append("<option value='125.html'><b>117</b> - ﻿अब पंचेन्द्रिय भेदों का आवेदन करते हैं (मर्यादा-पूर्वक ज्ञान कराते हैं) --</option>");
       $optgrp.append("<option value='126.html'><b>118</b> - ﻿अब एकेन्द्रिय आदि भेद-रूप से कहे गए जीवों का चार गति के सम्बंध-रूप से उपसंहार करते हैं</option>");
       $optgrp.append("<option value='127.html'><b>119</b> - ﻿अब गति नाम-कर्म और आयु-कर्म से रचित होने के कारण देवत्व आदि के अनात्म-स्वभावत्व दिखाते हैं; अथवा जो कोई कहते हैं कि जगत में अन्य-अन्य नहीं है, देव मरकर देव ही और मनुष्य मरकर मनुष्य ही होते हैं; उनका निषेध करने के लिए यह गाथा कहते हैं --</option>");
       $optgrp.append("<option value='128.html'><b>120</b> - ﻿अब पूर्वोक्त जीव-प्रपंच का (जीव पदार्थ-व्याख्यान के विस्तार का) संसारी-मुक्त भेद से उपसंहार --</option>");
       $optgrp.append("<option value='129.html'><b>121</b> - ﻿भेद-भावना, हिताहित कर्तृत्व-भोक्तृत्व प्रतिपादन</option>");
       $optgrp.append("<option value='130.html'><b>122</b> - ﻿अब ज्ञातृत्व आदि कार्य जीव के सम्भव हैं / होते हैं, ऐसा निश्चय करते हैं --</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुण्य-पाप-पदार्थ">')
       $optgrp.append("<option value='131.html'><b>123</b> - ﻿जीव पदार्थ उपसंहार, अजीव पदार्थ प्रारंभ सूचक</option>");
       $optgrp.append("<option value='132.html'><b>124</b> - ﻿अजीव-तत्त्व प्रतिपादन</option>");
       $optgrp.append("<option value='133.html'><b>125</b> - ﻿अब आकाशादि के ही अचेतनत्व सिद्ध करने में और भी कारण कहता हूँ; ऐसा अभिप्राय मन में धारण कर यह सूत्र प्रतिपादित करते हैं --</option>");
       $optgrp.append("<option value='134-135.html'><b>126-127</b> - ﻿भेद-भावनार्थ देहगत शुद्ध जीव प्रतिपादन</option>");
       $optgrp.append("<option value='136-137-138.html'><b>128-129-130</b> - ﻿इससे आगे अब जो पहले कथंचित् परिणामित्व के बल से जीव-पुद्गल का संयोग-परिणाम स्थापित किया था वह ही आगे कहे जाने वाले पुण्यादि सात पदार्थों का कारण, बीज जानना चाहिए (इसे तीन गाथाओं द्वारा स्पष्ट करते हैं) --</option>");
       $optgrp.append("<option value='139.html'><b>131</b> - ﻿भाव पुण्य-पाप-योग्य परिणाम की सूचना</option>");
       $optgrp.append("<option value='140.html'><b>132</b> - ﻿द्रव्य-भाव पुण्य-पाप का व्याख्यान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर-पदार्थ">')
       $optgrp.append("<option value='141.html'><b>133</b> - ﻿पुण्य-पाप का मुर्तत्व-समर्थन</option>");
       $optgrp.append("<option value='142.html'><b>134</b> - ﻿कथंचित मूर्त जीव का मूर्त कर्म के साथ बन्ध प्रतिपादन</option>");
       $optgrp.append("<option value='143.html'><b>135</b> - ﻿पुण्यास्रव प्रतिपादक</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा-पदार्थ">')
       $optgrp.append("<option value='144.html'><b>136</b> - ﻿अब प्रशस्त राग के स्वरूप का आवेदन करते हैं (मर्यादा पूर्वक ज्ञान कराते हैं)-</option>");
       $optgrp.append("<option value='145.html'><b>137</b> - ﻿अब अनुकम्पा का स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='146.html'><b>138</b> - ﻿अब चित्त की कलुषता का स्वरूप प्रतिपादित करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध-पदार्थ">')
       $optgrp.append("<option value='147.html'><b>139</b> - ﻿पापास्रव प्रतिपादक</option>");
       $optgrp.append("<option value='148.html'><b>140</b> - ﻿अब भाव पापास्रव का विस्तार से कथन करते हैं</option>");
       $optgrp.append("<option value='149.html'><b>141</b> - ﻿संवर पदार्थ प्रतिपादक अंतराधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-पदार्थ">')
       $optgrp.append("<option value='150.html'><b>142</b> - ﻿अब सामान्य से पुण्य-पाप संवर का स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='151.html'><b>143</b> - ﻿अब अयोग-केवली जिन (चौदहवें) गुणस्थान की अपेक्षा सम्पूर्ण पुण्य-पाप-संवर का प्रतिपादन करते हैं </option>");
       $optgrp.append("<option value='152.html'><b>144</b> - ﻿निर्जरा पदार्थ प्रतिपादक अंतराधिकार</option>");
       $optgrp.append("<option value='153.html'><b>145</b> - ﻿अब मुख्य वृत्ति से आत्म-ध्यान निर्जरा का कारण है, ऐसा प्रगट करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-मार्ग चूलिका">')
       $optgrp.append("<option value='154.html'><b>146</b> - ﻿अब पहले जो निर्जरा का कारण ध्यान कहा गया है, उसे उत्पन्न करने वाली सामग्री और लक्षण का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='155.html'><b>147</b> - ﻿बन्ध पदार्थ प्रतिपादक अंतराधिकार</option>");
       $optgrp.append("<option value='156.html'><b>148</b> - ﻿अब, बहिरंग-अंतरंग बंध के कारण का उपदेश देते हैं</option>");
       $optgrp.append("<option value='157.html'><b>149</b> - ﻿अब, बंध का बहिरंग निमित्त मात्र योग ही नहीं है, अपितु द्रव्यत्व-रूप मिथ्यात्वादि द्रव्य प्रत्यय भी रागादि भाव-प्रत्यय की अपेक्षा बहिरंग निमित्त हैं; ऐसा समर्थन करते हैं</option>");
       $optgrp.append("<option value='158-159.html'><b> 150-151</b> - ﻿भाव-मोक्ष-रूप एकदेश मोक्ष का व्याख्यान</option>");
       $optgrp.append("<option value='160.html'><b>152</b> - ﻿द्रव्य-कर्म-मोक्ष प्रतिपादन</option>");
       $optgrp.append("<option value='161.html'><b>153</b> - ﻿अब सकल मोक्ष नामक द्रव्य-मोक्ष का आवेदन करते हैं (मर्यादापूर्वक ज्ञान कराते हैं) -</option>");
       $optgrp.append("<option value='162.html'><b>154</b> - ﻿जीव-स्वभाव</option>");
       $optgrp.append("<option value='163.html'><b>155</b> - ﻿स्वसमय-परसमय प्रतिपादन</option>");
       $optgrp.append("<option value='164.html'><b>156</b> - ﻿परसमय का विशेष विवरण </option>");
       $optgrp.append("<option value='165.html'><b>157</b> - ﻿अब परचारित्र परिणत पुरुष के बंध देखकर मोक्ष का निषेध करते हैं; अथवा पूर्वोक्त ही परसमय के स्वरूप को वृद्धमत-संवाद से (जिनेन्द्र भगवान के कथन से) दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='166.html'><b>158</b> - ﻿स्व-समय का विशेष विवरण </option>");
       $optgrp.append("<option value='167.html'><b>159</b> - ﻿अब उसी स्वसमय को प्रकारान्तर से व्यक्त करते हैं</option>");
       $optgrp.append("<option value='168.html'><b>160</b> - ﻿व्यवहार मोक्ष-मार्ग का निरूपण</option>");
       $optgrp.append("<option value='169.html'><b>161</b> - ﻿निश्चय मोक्ष-मार्ग का प्रतिपादन</option>");
       $optgrp.append("<option value='170.html'><b>162</b> - ﻿अब अभेद से आत्मा ही दर्शन-ज्ञान-चारित्र है; इस कथन की मुख्यता से पूर्वोक्त ही निश्चय-मोक्षमार्ग को दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='171.html'><b>163</b> - ﻿भाव सम्यग्दृष्टि व्याख्यान</option>");
       $optgrp.append("<option value='172.html'><b>164</b> - ﻿निश्चय-व्यवहार रत्नत्रय का फल</option>");
       $optgrp.append("<option value='173.html'><b>165</b> - ﻿स्थुल-सूक्ष्म पर-समय का व्याख्यान</option>");
       $optgrp.append("<option value='174.html'><b>166</b> - ﻿अब पूर्वोक्त शुद्ध सम्प्रयोग के पुण्यबंध को देखकर मोक्ष का निषेध करते हैं</option>");
       $optgrp.append("<option value='175.html'><b>167</b></option>");
       $optgrp.append("<option value='176.html'><b>168</b> - ﻿अब राग ही सम्पूर्ण अनर्थ-परम्पराओं का मूल है; ऐसा उपदेश देते हैं</option>");
       $optgrp.append("<option value='177.html'><b>169</b> - ﻿उसके बाद, उस कारण मोक्षार्थी पुरुष द्वारा आस्रव के कारण-भूत रागादि विकल्प-जाल के निर्मूलन हेतु, ग्रहण से रहित होने के कारण नि:संगता ही आचरणीय है; इसप्रकार से सूक्ष्म परसमय के व्याख्यान का उपसंहार करते हैं</option>");
       $optgrp.append("<option value='178.html'><b>170</b> - ﻿पुण्यास्रव के मोक्ष नहीं होता है</option>");
       $optgrp.append("<option value='179.html'><b>171</b> - ﻿अब, उस भव में मोक्ष प्राप्त नहीं करता, पुण्यबंध को ही प्राप्त होता है पूर्व सूत्र में कहे गए उसी अर्थ को दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='180.html'><b>172</b> - ﻿पन्चास्तिकाय प्राभृत शास्त्र का तात्पर्य वीतरागता</option>");
       $optgrp.append("<option value='181.html'><b>173</b> - ﻿उपसंहार रूप से शास्त्र पारी-समाप्ति-हेतु</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
    $optgrp=$('<optgroup label="﻿कलश">')
       $optgrp.append("<option value='000_मंगलाचरण.html'><b>000_मंगलाचरण</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿द्रव्य-सामान्य">')
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿शास्त्र का प्रयोजन</option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿﻿पंचास्तिकाय-संक्षिप्त व्याख्यान</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿पाँच अस्तिकायों के विशेष नाम</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿अस्तित्व और कायत्व किसप्रकार ?</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿पंचास्तिकायों और काल की द्रव्य संज्ञा</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿द्रव्यों के एक-क्षेत्रावगाह</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿सत्ता का स्वरूप</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿सत्ता और द्रव्य में अभिन्नता</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿द्रव्य-लक्षण तीन प्रकार से</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿नयों द्वारा द्रव्य का लक्षण</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿द्रव्य-पर्यायों में अभेद</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿द्रव्य और गुणों में अभेद</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿प्रमाण सप्तभंगी</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿सत का विनाश नहीं, असत् का उत्पाद नहीं</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿गुण-पर्याय</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿कथंचित उत्पाद-विनाश</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿जीव का कथंचित जन्म-मरण</option>");
       $optgrp.append("<option value='019.html'><b>019</b></option>");
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿सिद्ध भगवान में कथंचित उत्पाद-व्यय</option>");
       $optgrp.append("<option value='021.html'><b>021</b></option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿पाँच अस्तिकाय का विशेष वर्णन</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿काल द्रव्य का प्रतिपादन</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿निश्चय-काल</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿व्यवहार-काल</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿व्यवहारकाल की पराधीनता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीवास्तिकाय">')
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿जीवास्तिकाय का व्याख्यान</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿मुक्त अवस्था का निरुपाधि-स्वरूप</option>");
       $optgrp.append("<option value='029.html'><b>029</b></option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿व्यवहार से जीवत्व गुण</option>");
       $optgrp.append("<option value='031-032.html'><b>031-032</b> - ﻿जीवों का स्वाभाविक प्रमाण तथा मुक्त / अमुक्त </option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿संसारी जीव देह प्रमाण</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿शरीर के अनुसार जीव की अवगाहना</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿सिद्धों की अवगाहना</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿सिद्धों मेँ कार्य-कारण-भाव</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿मुक्ति में भी जीव का सद्भाव</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿जीव का चेतना भाव</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿त्रिविध चेतना के स्वामी</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿जीव का उपयोग</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿ज्ञानोपयोग के भेद</option>");
       $optgrp.append("<option value='042.html'><b>042</b></option>");
       $optgrp.append("<option value='043.html'><b>043</b></option>");
       $optgrp.append("<option value='044.html'><b>044</b></option>");
       $optgrp.append("<option value='045.html'><b>045</b></option>");
       $optgrp.append("<option value='046.html'><b>046</b></option>");
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿तीन अज्ञान</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿दर्शनोपयोग के भेद</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿जीव और ज्ञान में अभेद</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿द्रव्य का गुण में सर्वथा भेद में दोष</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿द्रव्य और गुण के अभिन्न प्रदेश</option>");
       $optgrp.append("<option value='052.html'><b>052</b> - ﻿भेद में भी कथंचित अभेद का समर्थन</option>");
       $optgrp.append("<option value='053.html'><b>053</b> - ﻿निश्चय से भेदाभेद का उदाहरण</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿ज्ञान-ज्ञानी के सर्वथा भेद में दोष</option>");
       $optgrp.append("<option value='055.html'><b>055</b> - ﻿नैयायिक मानी समवाय सम्बन्ध का निषेध</option>");
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿गुण-गुणी के कथंचित् एकत्व</option>");
       $optgrp.append("<option value='057-058.html'><b>057-058</b> - ﻿द्रव्य-गुणों के कथंचित् अभेद में दृष्टांत</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿गुणमयी जीवों की संख्या</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿कथंचित उत्पाद-व्यय</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿अब पूर्व सूत्र में जो जीव का उत्पाद-व्यय स्वरूप कहा है उसका कारण नर-नारक आदि गति-नामकर्म का उदय है, ऐसा कहते हैं</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿औदयिकादि पाँच भाव व्याख्यान </option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿कर्तृत्व की मुख्यता से व्याख्यान</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿अब उदयागत द्रव्यकर्म, व्यवहार से रागादि परिणामों का कारण हैऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿अब एकान्त से जीव को कर्म के अकर्तृत्व में दूषण द्वार से पूर्वपक्ष कहते हैं</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿अब, पूर्व गाथा में आत्मा को कर्म का अकर्तृत्व होने पर दूषणरूप से जो पूर्वपक्ष प्रस्तुत किया था, यहाँ उसका परिहार करते हैं तथा द्वितीय व्याख्यान के पक्ष में स्थितपक्ष (सुनिश्चित हुआ तथ्य) दिखाते हैं</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿अब उस ही व्याख्यान को आगम-संवाद से दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿अब निश्चयनय की अपेक्षा अभेद षट्कारकी रूप से कर्म पुद्गल स्वकीय स्वरूप को करता है; उसीप्रकार जीव भी ( अपने स्वरूप को ही करता है), ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿पूर्वपक्ष गाथा</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿परिहार गाथाएं - द्रव्य कर्मों का कर्ता जीव नहीं</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿अब, आत्मा के मिथ्यात्व-रागादि परिणाम होने पर कर्मवर्गणा योग्य पुद्गल निश्चय की अपेक्षा उपादानरूप से स्वयं ही कर्मपने से परिणमित होते हैं, ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿अब कर्मवर्गणा योग्य पुद्गल जिसप्रकार स्वयं ही कर्मरूप से परिणमित होते हैं, वैसा दृष्टान्त देते हैं</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿कर्म-फल में भोक्तृत्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुदगलास्तिकाय">')
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿कर्तृत्व भोक्तृत्व का उपसंहार</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿कर्म-संयुक्तत्व कर्म-रहितत्व</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿अब यहाँ भी पूर्वकथित प्रभुत्व का ही कर्मरहितत्व की मुख्यता से प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='077-078.html'><b>077-078</b> - ﻿अब उस ही नौ अधिकार द्वारा कहे गए जीवास्तिकाय का और भी दश भेदों द्वारा या २० भेदों द्वारा विशेष व्याख्यान करते हैं</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿अब मुक्त के ऊर्ध्वगति और मरणकाल में संसारी जीवों के छहगतियाँ होती हैं, ऐसा प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿पुद्गल-स्कन्ध व्याख्यान</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿अब, पूर्वोक्त स्कन्ध आदि चार विकल्पों में से प्रत्येक का लक्षण कहते हैं</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿अब, स्कन्धों के पुद्गलत्व व्यवहार व्यवस्थापित करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿धर्मास्तिकाय">')
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿अब, उन्हीं छह भेदों का वर्णन करते हैं</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿परमाणु व्याख्यान</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿अब पृथ्वी आदि जाति से भिन्न परमाणु नहीं है, ऐसा निश्चय करते हैं</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿अब शब्द पुद्गल-स्कन्ध की पर्याय है; ऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿अब परमाणु के एक प्रदेशत्व व्यवस्थापित करते हैं</option>");
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿अब परमाणु द्रव्य में गुण-पर्याय के स्वरूप को कहते हैं</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿पुदगलास्तिकाय उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आकाशास्तिकाय">')
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿धर्मास्तिकाय का स्वरूप</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿अब धर्म के ही शेष रहे स्वरूप का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿अब धर्म के गतिहेतुत्व में लोकप्रसिद्ध दृष्टान्त कहते हैं</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿अधर्मास्तिकाय का स्वरूप</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿धर्माधर्म द्रव्य का अस्तित्व ण मानने पर दूषण</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿अब, गति-स्थितिहेतुत्व के विषय में धर्म-अधर्म अत्यन्त उदासीन हैं, ऐसा निश्चित करते हैं</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿अब धर्म-अधर्म की गति-स्थिति हेतुत्व सम्बन्धी उदासीनता के विषय में युक्ति प्रकाशित करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चूलिका">')
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿लोकालोकाकाश-स्वरूप</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿अब षड्द्रव्यों का समूह लोक है, उससे बाहर अनन्त आकाश अलोक है, ऐसा प्रगट करते हैं</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿धर्माधर्म सम्बन्धी पूर्वपक्ष के निराकरणार्थ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿काल-द्रव्य">')
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿अब स्थित पक्ष (निश्चित हुए पक्ष) का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿अब आकाश के गति-स्थिति हेतुत्व के अभावरूप साध्य में और भी कारण कहते हैं</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿अब आकाश की गति-स्थिति कारणता के निराकरणपरक व्याख्यान का उपसंहार कहते हैं / करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿उपसंहार">')
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿धर्मादि तीनों के कथंचित एकत्व-पृथक्त्व का प्रतिपादन</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿चेतानाचेतन-मुर्तामुर्तत्व प्रतिपादन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नव-पदार्थ">')
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿सक्रिय-निश्क्रियत्व प्रतिपादन</option>");
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿प्रकारान्तर से मूर्तामूर्तत्व प्रतिपादन</option>");
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿व्यवहार-निश्चय काल प्रतिपादन</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿अब नित्य और क्षणिक होने के कारण फिर से काल के भेद दिखाते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीव-पदार्थ">')
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿काल के द्रव्यत्व-अकायत्व का प्रतिपादन</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿भावना-फल प्रतिपादन</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿अब दु:ख से मोक्ष के कारण का क्रम कहते हैं</option>");
       $optgrp.append("<option value='112.html'><b>112</b> - ﻿अंतिम तीर्थंकर परम-देव को नमस्कार कर पंचास्तिकाय षड्द्रव्य सम्बन्धी नव-पदार्थ के भेद और मोक्ष-मार्ग कहता हूँ; इसप्रकार प्रतिज्ञा-पूर्वक नमस्कार करते हैं</option>");
       $optgrp.append("<option value='113.html'><b>113</b> - ﻿अब सर्वप्रथम मोक्षमार्ग की संक्षेप में सूचना करते हैं</option>");
       $optgrp.append("<option value='114.html'><b>114</b> - ﻿अब व्यवहार सम्यग्दर्शन को कहते हैं</option>");
       $optgrp.append("<option value='115.html'><b>115</b> - ﻿अब सम्यग्दर्शन, ज्ञान, चारित्र -- तीनों का विशेष विवरण करते हैं</option>");
       $optgrp.append("<option value='116.html'><b>116</b> - ﻿अब इसके बाद (द्वितीय अन्तराधिकार में सर्वप्रथम) जीवादि नवपदार्थों का मुख्य वृत्ति से नाम और गौण वृत्ति से स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='117.html'><b>117</b> - ﻿जीव के स्वरूप का निरूपण करते हैं</option>");
       $optgrp.append("<option value='118.html'><b>118</b> - ﻿अब पृथ्वीकाय आदि पाँच भेदों का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='119.html'><b>119</b> - ﻿व्यवहार से अग्नि और वायुकायिक जीवों के त्रसपना दिखाते हैं</option>");
       $optgrp.append("<option value='120.html'><b>120</b> - ﻿अब पृथ्वीकायिक आदि पाँचों के एकेन्द्रियत्व का नियम करते हैं</option>");
       $optgrp.append("<option value='121.html'><b>121</b> - ﻿अब पृथ्वीकाय आदि एकेन्द्रियों के चैतन्य सम्बंधी अस्तित्व के विषय में दृष्टांत कहते हैं</option>");
       $optgrp.append("<option value='122.html'><b>122</b> - ﻿अब दो इन्द्रिय के भेदों को प्ररूपित करते हैं</option>");
       $optgrp.append("<option value='123.html'><b>123</b> - ﻿अब तीन इन्द्रिय के भेद प्रदर्शित करते हैं --</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव-पदार्थ">')
       $optgrp.append("<option value='124.html'><b>124</b> - ﻿विकलेन्द्रिय - चार इन्द्रिय जीव</option>");
       $optgrp.append("<option value='125.html'><b>125</b> - ﻿अब पंचेन्द्रिय भेदों का आवेदन करते हैं (मर्यादा-पूर्वक ज्ञान कराते हैं) --</option>");
       $optgrp.append("<option value='126.html'><b>126</b> - ﻿अब एकेन्द्रिय आदि भेद-रूप से कहे गए जीवों का चार गति के सम्बंध-रूप से उपसंहार करते हैं</option>");
       $optgrp.append("<option value='127.html'><b>127</b> - ﻿अब गति नाम-कर्म और आयु-कर्म से रचित होने के कारण देवत्व आदि के अनात्म-स्वभावत्व दिखाते हैं; अथवा जो कोई कहते हैं कि जगत में अन्य-अन्य नहीं है, देव मरकर देव ही और मनुष्य मरकर मनुष्य ही होते हैं; उनका निषेध करने के लिए यह गाथा कहते हैं --</option>");
       $optgrp.append("<option value='128.html'><b>128</b> - ﻿अब पूर्वोक्त जीव-प्रपंच का (जीव पदार्थ-व्याख्यान के विस्तार का) संसारी-मुक्त भेद से उपसंहार --</option>");
       $optgrp.append("<option value='129.html'><b>129</b> - ﻿भेद-भावना, हिताहित कर्तृत्व-भोक्तृत्व प्रतिपादन</option>");
       $optgrp.append("<option value='130.html'><b>130</b> - ﻿अब ज्ञातृत्व आदि कार्य जीव के सम्भव हैं / होते हैं, ऐसा निश्चय करते हैं --</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुण्य-पाप-पदार्थ">')
       $optgrp.append("<option value='131.html'><b>131</b> - ﻿जीव पदार्थ उपसंहार, अजीव पदार्थ प्रारंभ सूचक</option>");
       $optgrp.append("<option value='132.html'><b>132</b> - ﻿अजीव-तत्त्व प्रतिपादन</option>");
       $optgrp.append("<option value='133.html'><b>133</b> - ﻿अब आकाशादि के ही अचेतनत्व सिद्ध करने में और भी कारण कहता हूँ; ऐसा अभिप्राय मन में धारण कर यह सूत्र प्रतिपादित करते हैं --</option>");
       $optgrp.append("<option value='134-135.html'><b>134-135</b> - ﻿भेद-भावनार्थ देहगत शुद्ध जीव प्रतिपादन</option>");
       $optgrp.append("<option value='136-137-138.html'><b>136-137-138</b> - ﻿इससे आगे अब जो पहले कथंचित् परिणामित्व के बल से जीव-पुद्गल का संयोग-परिणाम स्थापित किया था वह ही आगे कहे जाने वाले पुण्यादि सात पदार्थों का कारण, बीज जानना चाहिए (इसे तीन गाथाओं द्वारा स्पष्ट करते हैं) --</option>");
       $optgrp.append("<option value='139.html'><b>139</b> - ﻿भाव पुण्य-पाप-योग्य परिणाम की सूचना</option>");
       $optgrp.append("<option value='140.html'><b>140</b> - ﻿द्रव्य-भाव पुण्य-पाप का व्याख्यान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर-पदार्थ">')
       $optgrp.append("<option value='141.html'><b>141</b> - ﻿पुण्य-पाप का मुर्तत्व-समर्थन</option>");
       $optgrp.append("<option value='142.html'><b>142</b> - ﻿कथंचित मूर्त जीव का मूर्त कर्म के साथ बन्ध प्रतिपादन</option>");
       $optgrp.append("<option value='143.html'><b>143</b> - ﻿पुण्यास्रव प्रतिपादक</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा-पदार्थ">')
       $optgrp.append("<option value='144.html'><b>144</b> - ﻿अब प्रशस्त राग के स्वरूप का आवेदन करते हैं (मर्यादा पूर्वक ज्ञान कराते हैं)-</option>");
       $optgrp.append("<option value='145.html'><b>145</b> - ﻿अब अनुकम्पा का स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='146.html'><b>146</b> - ﻿अब चित्त की कलुषता का स्वरूप प्रतिपादित करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध-पदार्थ">')
       $optgrp.append("<option value='147.html'><b>147</b> - ﻿पापास्रव प्रतिपादक</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿अब भाव पापास्रव का विस्तार से कथन करते हैं</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿संवर पदार्थ प्रतिपादक अंतराधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-पदार्थ">')
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿अब सामान्य से पुण्य-पाप संवर का स्वरूप कहते हैं</option>");
       $optgrp.append("<option value='151.html'><b>151</b> - ﻿अब अयोग-केवली जिन (चौदहवें) गुणस्थान की अपेक्षा सम्पूर्ण पुण्य-पाप-संवर का प्रतिपादन करते हैं </option>");
       $optgrp.append("<option value='152.html'><b>152</b> - ﻿निर्जरा पदार्थ प्रतिपादक अंतराधिकार</option>");
       $optgrp.append("<option value='153.html'><b>153</b> - ﻿अब मुख्य वृत्ति से आत्म-ध्यान निर्जरा का कारण है, ऐसा प्रगट करते हैं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-मार्ग चूलिका">')
       $optgrp.append("<option value='154.html'><b>154</b> - ﻿अब पहले जो निर्जरा का कारण ध्यान कहा गया है, उसे उत्पन्न करने वाली सामग्री और लक्षण का प्रतिपादन करते हैं</option>");
       $optgrp.append("<option value='155.html'><b>155</b> - ﻿बन्ध पदार्थ प्रतिपादक अंतराधिकार</option>");
       $optgrp.append("<option value='156.html'><b>156</b> - ﻿अब, बहिरंग-अंतरंग बंध के कारण का उपदेश देते हैं</option>");
       $optgrp.append("<option value='157.html'><b>157</b> - ﻿अब, बंध का बहिरंग निमित्त मात्र योग ही नहीं है, अपितु द्रव्यत्व-रूप मिथ्यात्वादि द्रव्य प्रत्यय भी रागादि भाव-प्रत्यय की अपेक्षा बहिरंग निमित्त हैं; ऐसा समर्थन करते हैं</option>");
       $optgrp.append("<option value='158-159.html'><b>158-159</b> - ﻿भाव-मोक्ष-रूप एकदेश मोक्ष का व्याख्यान</option>");
       $optgrp.append("<option value='160.html'><b>160</b> - ﻿द्रव्य-कर्म-मोक्ष प्रतिपादन</option>");
       $optgrp.append("<option value='161.html'><b>161</b> - ﻿अब सकल मोक्ष नामक द्रव्य-मोक्ष का आवेदन करते हैं (मर्यादापूर्वक ज्ञान कराते हैं) -</option>");
       $optgrp.append("<option value='162.html'><b>162</b> - ﻿जीव-स्वभाव</option>");
       $optgrp.append("<option value='163.html'><b>163</b> - ﻿स्वसमय-परसमय प्रतिपादन</option>");
       $optgrp.append("<option value='164.html'><b>164</b> - ﻿परसमय का विशेष विवरण </option>");
       $optgrp.append("<option value='165.html'><b>165</b> - ﻿अब परचारित्र परिणत पुरुष के बंध देखकर मोक्ष का निषेध करते हैं; अथवा पूर्वोक्त ही परसमय के स्वरूप को वृद्धमत-संवाद से (जिनेन्द्र भगवान के कथन से) दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='166.html'><b>166</b> - ﻿स्व-समय का विशेष विवरण </option>");
       $optgrp.append("<option value='167.html'><b>167</b> - ﻿अब उसी स्वसमय को प्रकारान्तर से व्यक्त करते हैं</option>");
       $optgrp.append("<option value='168.html'><b>168</b> - ﻿व्यवहार मोक्ष-मार्ग का निरूपण</option>");
       $optgrp.append("<option value='169.html'><b>169</b> - ﻿निश्चय मोक्ष-मार्ग का प्रतिपादन</option>");
       $optgrp.append("<option value='170.html'><b>170</b> - ﻿अब अभेद से आत्मा ही दर्शन-ज्ञान-चारित्र है; इस कथन की मुख्यता से पूर्वोक्त ही निश्चय-मोक्षमार्ग को दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='171.html'><b>171</b> - ﻿भाव सम्यग्दृष्टि व्याख्यान</option>");
       $optgrp.append("<option value='172.html'><b>172</b> - ﻿निश्चय-व्यवहार रत्नत्रय का फल</option>");
       $optgrp.append("<option value='173.html'><b>173</b> - ﻿स्थुल-सूक्ष्म पर-समय का व्याख्यान</option>");
       $optgrp.append("<option value='174.html'><b>174</b> - ﻿अब पूर्वोक्त शुद्ध सम्प्रयोग के पुण्यबंध को देखकर मोक्ष का निषेध करते हैं</option>");
       $optgrp.append("<option value='175.html'><b>175</b></option>");
       $optgrp.append("<option value='176.html'><b>176</b> - ﻿अब राग ही सम्पूर्ण अनर्थ-परम्पराओं का मूल है; ऐसा उपदेश देते हैं</option>");
       $optgrp.append("<option value='177.html'><b>177</b> - ﻿उसके बाद, उस कारण मोक्षार्थी पुरुष द्वारा आस्रव के कारण-भूत रागादि विकल्प-जाल के निर्मूलन हेतु, ग्रहण से रहित होने के कारण नि:संगता ही आचरणीय है; इसप्रकार से सूक्ष्म परसमय के व्याख्यान का उपसंहार करते हैं</option>");
       $optgrp.append("<option value='178.html'><b>178</b> - ﻿पुण्यास्रव के मोक्ष नहीं होता है</option>");
       $optgrp.append("<option value='179.html'><b>179</b> - ﻿अब, उस भव में मोक्ष प्राप्त नहीं करता, पुण्यबंध को ही प्राप्त होता है पूर्व सूत्र में कहे गए उसी अर्थ को दृ़ढ करते हैं</option>");
       $optgrp.append("<option value='180.html'><b>180</b> - ﻿पन्चास्तिकाय प्राभृत शास्त्र का तात्पर्य वीतरागता</option>");
       $optgrp.append("<option value='181.html'><b>181</b> - ﻿उपसंहार रूप से शास्त्र पारी-समाप्ति-हेतु</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
