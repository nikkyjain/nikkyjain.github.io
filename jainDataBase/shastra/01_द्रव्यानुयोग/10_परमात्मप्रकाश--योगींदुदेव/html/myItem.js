
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
  mySel.append("<option value='1-001.html'><b>1-001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='1-002.html'><b>1-002</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-003.html'><b>1-003</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-004.html'><b>1-004</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-005.html'><b>1-005</b> - ﻿सिद्ध परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-006.html'><b>1-006</b> - ﻿अरिहंत परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-007.html'><b>1-007</b> - ﻿आचार्य, उपाध्याय, साधु परमेष्ठी को नमस्कार</option>");
  mySel.append("<option value='1-008.html'><b>1-008</b> - ﻿प्रभाकरभट्ट द्वारा विनती</option>");
  mySel.append("<option value='1-009.html'><b>1-009</b> - ﻿विनती</option>");
  mySel.append("<option value='1-010.html'><b>1-010</b> - ﻿परमात्मा के कथन की विनती</option>");
  mySel.append("<option value='1-011.html'><b>1-011</b> - ﻿तीन प्रकार के आत्मा को कहने की प्रतिज्ञा</option>");
  mySel.append("<option value='1-012.html'><b>1-012</b> - ﻿तीन प्रकार के आत्मा को जानने का प्रयोजन</option>");
  mySel.append("<option value='1-013.html'><b>1-013</b> - ﻿बहिरात्मा</option>");
  mySel.append("<option value='1-014.html'><b>1-014</b> - ﻿अन्तरात्मा</option>");
  mySel.append("<option value='1-015.html'><b>1-015</b> - ﻿परमात्मा</option>");
  mySel.append("<option value='1-016.html'><b>1-016</b> - ﻿ध्येय</option>");
  mySel.append("<option value='1-017.html'><b>1-017</b> - ﻿लक्ष्य के लक्षण</option>");
  mySel.append("<option value='1-018.html'><b>1-018</b> - ﻿शान्त और शिव</option>");
  mySel.append("<option value='1-019-021.html'><b>1-019-021</b> - ﻿निरन्जन</option>");
  mySel.append("<option value='1-022.html'><b>1-022</b> - ﻿परमात्मा - ध्यान के साधन नहीं</option>");
  mySel.append("<option value='1-023.html'><b>1-023</b> - ﻿परमात्मा - ज्ञान का साधन नहीं</option>");
  mySel.append("<option value='1-024.html'><b>1-024</b> - ﻿परमात्मा - अनन्त ज्ञान-दर्शन-सुख-वीर्यमयी</option>");
  mySel.append("<option value='1-025.html'><b>1-025</b> - ﻿परमात्मा - शरीर रहित लोक के शिखर पर स्थित</option>");
  mySel.append("<option value='1-026.html'><b>1-026</b> - ﻿परमात्मा - शरीर में स्थित</option>");
  mySel.append("<option value='1-027.html'><b>1-027</b> - ﻿परमात्मा - अंतर-दृष्टि के प्रेरणा</option>");
  mySel.append("<option value='1-028.html'><b>1-028</b> - ﻿परमात्मा शारीरिक और मानसिक सुख-दुःख रहित </option>");
  mySel.append("<option value='1-029.html'><b>1-029</b> - ﻿[परमात्मा - देह में रहते हुए भी स्वभाव में स्थित </option>");
  mySel.append("<option value='1-030.html'><b>1-030</b> - ﻿भेद-ज्ञान की प्रेरणा</option>");
  mySel.append("<option value='1-031.html'><b>1-031</b> - ﻿आत्मा का लक्षण</option>");
  mySel.append("<option value='1-032.html'><b>1-032</b> - ﻿ध्यान की विधि और उसका फल</option>");
  mySel.append("<option value='1-033.html'><b>1-033</b> - ﻿देह में ही परमात्मा का निवास</option>");
  mySel.append("<option value='1-034.html'><b>1-034</b> - ﻿परमात्मा का एक अद्भुत् लक्षण</option>");
  mySel.append("<option value='1-035.html'><b>1-035</b> - ﻿परमात्मा - समभाव द्वारा परम आनन्द की प्राप्ति</option>");
  mySel.append("<option value='1-036.html'><b>1-036</b> - ﻿आत्मा का परम आत्मा स्वरूप</option>");
  mySel.append("<option value='1-037.html'><b>1-037</b> - ﻿पूर्व कथन की पुष्टि</option>");
  mySel.append("<option value='1-038.html'><b>1-038</b> - ﻿परमात्मा - केवलज्ञान में स्वयं प्रतिभासित</option>");
  mySel.append("<option value='1-039.html'><b>1-039</b> - ﻿परमात्मा - ध्यान का ध्येय</option>");
  mySel.append("<option value='1-040.html'><b>1-040</b> - ﻿परमात्मा - संसार को उपजाता है</option>");
  mySel.append("<option value='1-041.html'><b>1-041</b> - ﻿परमात्मा - संसार में रहते हुए भी संसार से परे</option>");
  mySel.append("<option value='1-042.html'><b>1-042</b> - ﻿परमात्मा उत्कृष्ट समाधि / तप द्वारा ही जाना जाता है</option>");
  mySel.append("<option value='1-043.html'><b>1-043</b> - ﻿परमात्मा - उत्पाद-व्यय-ध्रौव्य संयुक्त</option>");
  mySel.append("<option value='1-044.html'><b>1-044</b> - ﻿शरीर और आत्मा के दृढ़ सम्बन्ध </option>");
  mySel.append("<option value='1-045.html'><b>1-045</b> - ﻿देह से आत्मा का विशिष्ट महत्व</option>");
  mySel.append("<option value='1-046.html'><b>1-046</b> - ﻿परमात्मा का वीतराग स्वरूप</option>");
  mySel.append("<option value='1-047.html'><b>1-047</b> - ﻿परमात्मा के ज्ञान के स्थान का कथन</option>");
  mySel.append("<option value='1-048.html'><b>1-048</b> - ﻿कर्म बंधन से मुक्त परमात्मा का स्वरूप</option>");
  mySel.append("<option value='1-049.html'><b>1-049</b> - ﻿कर्म बंधन से मुक्त परमात्मा का स्वरूप</option>");
  mySel.append("<option value='1-050.html'><b>1-050</b> - ﻿आत्मा क्या है</option>");
  mySel.append("<option value='1-051.html'><b>1-051</b> - ﻿आत्मा का स्वरूप</option>");
  mySel.append("<option value='1-052.html'><b>1-052</b> - ﻿आत्मा का सर्वव्यापक स्वरूप</option>");
  mySel.append("<option value='1-053.html'><b>1-053</b> - ﻿आत्मा का जड स्वरूप</option>");
  mySel.append("<option value='1-054.html'><b>1-054</b> - ﻿आत्मा का चरम शरीर प्रमाणरूप स्वरूप</option>");
  mySel.append("<option value='1-055.html'><b>1-055</b> - ﻿आत्मा के शून्य स्वरूप का कथन</option>");
  mySel.append("<option value='1-056.html'><b>1-056</b> - ﻿आत्मा के लक्षण</option>");
  mySel.append("<option value='1-057.html'><b>1-057</b> - ﻿आत्मा के लक्षण का स्पष्टीकरण</option>");
  mySel.append("<option value='1-058.html'><b>1-058</b> - ﻿आत्मा द्रव्य और उसके गुण</option>");
  mySel.append("<option value='1-059.html'><b>1-059</b> - ﻿आत्मा और कर्म का परष्पर सम्बन्ध</option>");
  mySel.append("<option value='1-060.html'><b>1-060</b> - ﻿सभी जीवों का प्राण कर्म</option>");
  mySel.append("<option value='1-061.html'><b>1-061</b> - ﻿कर्म के कारण जीव को स्वभाव-लाभ नहीं</option>");
  mySel.append("<option value='1-062.html'><b>1-062</b> - ﻿विषय-कषायों में लिप्तता से कर्म-बंध</option>");
  mySel.append("<option value='1-063.html'><b>1-063</b> - ﻿इन्द्रियाँ, मन, समस्त विभाव, दुःख कर्म-जनित</option>");
  mySel.append("<option value='1-064.html'><b>1-064</b> - ﻿परमार्थ से दुःख-सुख कर्म जनित</option>");
  mySel.append("<option value='1-065-1.html'><b>1-065-1</b> - ﻿जिन्वचन को नहीं मानने का परिणाम</option>");
  mySel.append("<option value='1-065.html'><b>1-065</b> - ﻿परमार्थ से बन्ध और मोक्ष कर्मजनित</option>");
  mySel.append("<option value='1-066.html'><b>1-066</b> - ﻿कर्म द्वारा ही जीव के लोक में भ्रमण </option>");
  mySel.append("<option value='1-067.html'><b>1-067</b> - ﻿द्रव्य-रूप परिवर्तित नहीं होता</option>");
  mySel.append("<option value='1-068.html'><b>1-068</b> - ﻿जीव के जन्म-मरण बंध-मोक्ष नहीं</option>");
  mySel.append("<option value='1-069.html'><b>1-069</b> - ﻿जीव के जन्म-मरण-रोग, इन्द्रियाँ, वर्ण नहीं</option>");
  mySel.append("<option value='1-070.html'><b>1-070</b> - ﻿जन्म-बुढापा-मरण, रोग, वर्ण देह के</option>");
  mySel.append("<option value='1-071.html'><b>1-071</b> - ﻿जीव को अमर जानकर भय-मुक्त हो</option>");
  mySel.append("<option value='1-072.html'><b>1-072</b> - ﻿शरीर से ममत्व त्यागकर आत्मा को ध्या</option>");
  mySel.append("<option value='1-073.html'><b>1-073</b> - ﻿पर-भाव और पर द्रव्य जीव स्वभाव से भिन्न</option>");
  mySel.append("<option value='1-074.html'><b>1-074</b> - ﻿ज्ञानमयी भाव को छोड़कर अन्य सभी भाव को त्याग</option>");
  mySel.append("<option value='1-075.html'><b>1-075</b> - ﻿रत्नत्रयमयी आत्मा का ध्यान कर</option>");
  mySel.append("<option value='1-076.html'><b>1-076</b> - ﻿सम्यग्दृष्टि</option>");
  mySel.append("<option value='1-077.html'><b>1-077</b> - ﻿मिथ्यादृष्टि</option>");
  mySel.append("<option value='1-078.html'><b>1-078</b> - ﻿कर्म बलवान हैं</option>");
  mySel.append("<option value='1-079.html'><b>1-079</b> - ﻿मिथ्यात्वी का लक्षण</option>");
  mySel.append("<option value='1-080.html'><b>1-080</b> - ﻿मिथ्यात्वी की मान्यता</option>");
  mySel.append("<option value='1-081.html'><b>1-081</b> - ﻿और भी</option>");
  mySel.append("<option value='1-082.html'><b>1-082</b> - ﻿और भी</option>");
  mySel.append("<option value='1-083.html'><b>1-083</b> - ﻿और भी</option>");
  mySel.append("<option value='1-084.html'><b>1-084</b> - ﻿अज्ञान ही पाप</option>");
  mySel.append("<option value='1-085.html'><b>1-085</b> - ﻿सम्यक्त्व की प्राप्ति</option>");
  mySel.append("<option value='1-086.html'><b>1-086</b> - ﻿आत्मा स्पर्श या वर्ण नहीं</option>");
  mySel.append("<option value='1-087.html'><b>1-087</b> - ﻿आत्मा के वर्ण या लिंग नहीं</option>");
  mySel.append("<option value='1-088.html'><b>1-088</b> - ﻿आत्मा के वेष नहीं</option>");
  mySel.append("<option value='1-089.html'><b>1-089</b> - ﻿आत्मा गुरु-शिष्यादिक भी नहीं</option>");
  mySel.append("<option value='1-090.html'><b>1-090</b> - ﻿आत्मा मनुष्य-देव आदि नहीं</option>");
  mySel.append("<option value='1-091.html'><b>1-091</b> - ﻿आत्मा पंडित मूर्ख आदि नहीं</option>");
  mySel.append("<option value='1-092.html'><b>1-092</b> - ﻿आत्मा पुण्य-पापादि नहीं</option>");
  mySel.append("<option value='1-093.html'><b>1-093</b> - ﻿आत्मा क्या है?</option>");
  mySel.append("<option value='1-094.html'><b>1-094</b> - ﻿आत्मा ही ज्ञान-दर्शन-चारित्र</option>");
  mySel.append("<option value='1-095.html'><b>1-095</b> - ﻿आत्मध्यान किसी तीर्थ, गुरु, देव से भी उत्कृष्ट</option>");
  mySel.append("<option value='1-096.html'><b>1-096</b> - ﻿आत्मा ही दर्शन</option>");
  mySel.append("<option value='1-097.html'><b>1-097</b> - ﻿आत्मध्यान से क्षणमात्र में मुक्ति</option>");
  mySel.append("<option value='1-098.html'><b>1-098</b> - ﻿आत्म-ज्ञान बिना ज्ञान तप निष्फल </option>");
  mySel.append("<option value='1-099.html'><b>1-099</b> - ﻿आत्मज्ञान से केवलज्ञान</option>");
  mySel.append("<option value='1-100.html'><b>1-100</b> - ﻿उसी को दृढ़ करते हैं</option>");
  mySel.append("<option value='1-101.html'><b>1-101</b> - ﻿केवलज्ञान का स्वभाव</option>");
  mySel.append("<option value='1-102.html'><b>1-102</b> - ﻿उदाहरण</option>");
  mySel.append("<option value='1-103.html'><b>1-103</b> - ﻿उपसंहार</option>");
  mySel.append("<option value='1-104.html'><b>1-104</b> - ﻿प्रश्न</option>");
  mySel.append("<option value='1-105.html'><b>1-105</b> - ﻿आत्मा का संस्थान</option>");
  mySel.append("<option value='1-106.html'><b>1-106</b> - ﻿पर भावों को छोड़</option>");
  mySel.append("<option value='1-107.html'><b>1-107</b> - ﻿आत्मा ज्ञान गोचर</option>");
  mySel.append("<option value='1-108.html'><b>1-108</b> - ﻿परलोक -- आत्मा से परमात्मा</option>");
  mySel.append("<option value='1-109.html'><b>1-109</b> - ﻿परलोक -- अपना स्वरूप जानना</option>");
  mySel.append("<option value='1-110.html'><b>1-110</b> - ﻿परलोक -- ध्यान का ध्येय</option>");
  mySel.append("<option value='1-111.html'><b>1-111</b> - ﻿जैसी मति वैसी गति</option>");
  mySel.append("<option value='1-112.html'><b>1-112</b> - ﻿पर-द्रव्य को मत देख</option>");
  mySel.append("<option value='1-113.html'><b>1-113</b> - ﻿पर-द्रव्य</option>");
  mySel.append("<option value='1-114.html'><b>1-114</b> - ﻿ध्यान की सामर्थ्य</option>");
  mySel.append("<option value='1-115.html'><b>1-115</b> - ﻿चिंता रहित होकर देख</option>");
  mySel.append("<option value='1-116.html'><b>1-116</b> - ﻿आत्म-ध्यान के बिना सुख सम्भव नहीं</option>");
  mySel.append("<option value='1-117.html'><b>1-117</b> - ﻿आत्म-ध्यानी के सुख के सामान सुख नहीं</option>");
  mySel.append("<option value='1-118.html'><b>1-118</b> - ﻿आत्म-ध्यानी को भगवान जैसा सुख</option>");
  mySel.append("<option value='1-119.html'><b>1-119</b> - ﻿मोक्ष अपने आप में</option>");
  mySel.append("<option value='1-120.html'><b>1-120</b> - ﻿राग-रंजित को मोक्ष-सुख नहीं</option>");
  mySel.append("<option value='1-121.html'><b>1-121</b> - ﻿राग और सुख एक साथ नहीं रह सकते</option>");
  mySel.append("<option value='1-122.html'><b>1-122</b> - ﻿भगवान आत्मा अनादि से</option>");
  mySel.append("<option value='1-123-A.html'><b>1-123-A</b> - ﻿वन्द्य-वंदक भाव रहित</option>");
  mySel.append("<option value='1-123-B.html'><b>1-123-B</b> - ﻿मन पर लगाम द्वारा मुक्ति प्राप्ति</option>");
  mySel.append("<option value='2-001.html'><b>2-001</b> - ﻿समभाव द्वारा सुख की प्राप्ति</option>");
  mySel.append("<option value='2-002.html'><b>2-002</b> - ﻿शिष्य द्वारा अनुरोध</option>");
  mySel.append("<option value='2-003.html'><b>2-003</b> - ﻿मोक्ष, मोक्ष का फल, मोक्ष का कारण करने की प्रतिज्ञा</option>");
  mySel.append("<option value='2-004.html'><b>2-004</b> - ﻿मोक्ष ही सुख</option>");
  mySel.append("<option value='2-005.html'><b>2-005</b> - ﻿तीन पुरुषार्थों की अपेक्षा मोक्ष पुरुषार्थ की उत्तमता</option>");
  mySel.append("<option value='2-006.html'><b>2-006</b> - ﻿मोक्ष तीन-लोक में उत्कृष्ट</option>");
  mySel.append("<option value='2-007.html'><b>2-007</b> - ﻿मोक्ष में अविनाशी सुख</option>");
  mySel.append("<option value='2-008.html'><b>2-008</b> - ﻿सभी ज्ञानियों का ध्येय मोक्ष</option>");
  mySel.append("<option value='2-009.html'><b>2-009</b> - ﻿मोक्ष के चिंतवन की प्रेरणा</option>");
  mySel.append("<option value='2-010.html'><b>2-010</b> - ﻿मोक्ष - परमात्म-प्राप्ति </option>");
  mySel.append("<option value='2-011.html'><b>2-011</b> - ﻿मोक्षफल - शास्वत सुख</option>");
  mySel.append("<option value='2-012.html'><b>2-012</b> - ﻿मोक्ष-मार्ग - निश्चय रत्नत्रय</option>");
  mySel.append("<option value='2-013.html'><b>2-013</b> - ﻿मोक्ष-मार्ग - रत्नत्रय परिणत आत्मा</option>");
  mySel.append("<option value='2-014.html'><b>2-014</b> - ﻿व्यवहार-रत्नत्रय की सार्थकता</option>");
  mySel.append("<option value='2-015.html'><b>2-015</b> - ﻿व्यवहार-सम्यक्त्व</option>");
  mySel.append("<option value='2-016.html'><b>2-016</b> - ﻿छह-द्रव्य</option>");
  mySel.append("<option value='2-017.html'><b>2-017</b> - ﻿द्रव्यों के नाम</option>");
  mySel.append("<option value='2-018.html'><b>2-018</b> - ﻿जीव का लक्षण</option>");
  mySel.append("<option value='2-019.html'><b>2-019</b> - ﻿पुद्गल, धर्म, अधर्म का लक्षण</option>");
  mySel.append("<option value='2-020.html'><b>2-020</b> - ﻿आकाश द्रव्य</option>");
  mySel.append("<option value='2-021.html'><b>2-021</b> - ﻿काल द्रव्य</option>");
  mySel.append("<option value='2-022.html'><b>2-022</b> - ﻿अखंड-प्रदेशी द्रव्य</option>");
  mySel.append("<option value='2-023.html'><b>2-023</b> - ﻿क्रिया-रहित द्रव्य</option>");
  mySel.append("<option value='2-024.html'><b>2-024</b> - ﻿द्रव्यों के प्रदेश</option>");
  mySel.append("<option value='2-025.html'><b>2-025</b> - ﻿एक जगह रहते हुए भी मिलते नहीं</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
