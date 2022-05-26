
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿देवों की पूजा आदि से आप महान नहीं हैं</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿विग्रह आदि महोदय से भी आप महान नहीं हैं</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿तीर्थंकरत्व हेतु से भी आप महान नहीं हैं</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿दोषों तथा आवरणों का पूर्णतया अभाव संभव है</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿सर्वज्ञ की व्यवस्था</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿आप ही निर्दोष सर्वज्ञ हैं</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿सर्वथा एकांतवाद प्रमाण से बाधित है</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿एकांत में शुभ-अशुभ आदि नहीं बनते</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿भावैकांत की मान्यता में दोष</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿प्रागभाव-प्रध्वंसाभाव को न मानने में दोष</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿अन्योन्याभाव-अत्यंताभाव को न मानने में दोष</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿अभावैकान्त की मान्यता में दोष</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿एकांतरूप भावाभाव और अवक्तव्य में दोष</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿भाव-अभाव आदि निर्दोष कैसे हैं ?</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿सत् असत् निर्दोष कैसे हैं ?</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿उभय और अवक्तव्य कथन निर्दोष कैसे हैं ?</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿भावधर्म अभाव के साथ रहता है</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿अभाव भाव के साथ रहता है</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿वस्तु भावाभावात्मक है</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿शेष भंग भी नय विवक्षा से बनेंगे</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿वस्तु एक रूप नहीं है</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿प्रत्येक धर्म का अर्थ पृथक् है</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿अन्य धर्मों में भी सप्तभंगी प्रक्रिया करना</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿अद्वैत एकांत में दोष</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿अद्वैत में शुभ-अशुभ आदि द्वैत नहीं बनते </option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿अद्वैत में द्वैत आ जाता है</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿अद्वैत के बिना द्वैत कैसे ?</option>");
  mySel.append("<option value='028.html'><b>028</b> - ﻿पृथक्त्वैकांत नहीं बनता</option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿बौद्ध की पृथक्त्व मान्यता में दोष</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿क्या ज्ञान ज्ञेय से सर्वथा भिन्न है</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿बौद्ध के यहाँ वचन किसको कहते हैं ?</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿अद्वैत पृथक्त्व एकान्त में दोष</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿अद्वैत और पृथक्त्व सच्चे भी हैं</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿सभी वस्तुएँ एकत्व और पृथक्त्व रूप केसे हैं ?</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿सत् में ही विवक्षा और अविवक्षा होती है</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿एक वस्तु में भेद और अभेद दोनों केसे होंगे ?</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿वस्तु को सर्वथा नित्य मानने में दोष</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿प्रमाण और कारकों के नित्य होने में विक्रिया केसी ?</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿सर्वथा सत् रूप कार्य उत्पन्न केसे होगा ?</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿नित्य एकांत में पुण्य पापादि भी असंभव हैं</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿क्षणिक एकांत भी असंभव है</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿कार्य सर्वथा असत् से केसे होगा ?</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿क्षणिक एकांत में कार्यकारण भाव असंभव है</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿बौद्ध भिन्न-भिन्न कार्यक्षणों में एकत्व को संवृति से मानता है</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿बौद्ध के यहाँ चतुष्कोटि विकल्प अवक्तव्य है</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿एकांत से अवक्तव्य मान्यता में दोष</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿असत् का निषेध होता है क्या ?</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿अवस्तु ही अवक्तव्य है</option>");
  mySel.append("<option value='049.html'><b>049</b> - ﻿सभी धर्मों से रहित को कहा नहीं जा सकता</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿आप बौद्ध वस्तु को अवाच्य क्यों मानते हो ?</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿सर्वथा क्षणिक में कृतनाश आदि दोष आते हैं</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿नाश को निर्हेतुक मानने में दोष</option>");
  mySel.append("<option value='053.html'><b>053</b> - ﻿बौद्ध ने हेतु को विसदृश कार्य के लिए माना है</option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿बौद्ध के यहाँ स्कंधादी में उत्पादादि नहीं बनते हैं</option>");
  mySel.append("<option value='055.html'><b>055</b> - ﻿नित्य क्षणिक का उभय एकांत सदोष है</option>");
  mySel.append("<option value='056.html'><b>056</b> - ﻿नित्य और क्षणिक स्याद्वाद में निर्दोष हैं</option>");
  mySel.append("<option value='057.html'><b>057</b> - ﻿उत्पाद, व्यय, ध्रौव्य की व्यवस्था</option>");
  mySel.append("<option value='058.html'><b>058</b> - ﻿उत्पाद आदि अभिन्न हैं</option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿एक द्रव्य के नाश आदि में भिन्न भाव होते है</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿वस्तु तत्त्व त्रयात्मक है</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿क्या कार्य कारण आदि सर्वथा भिन्न हैं ?</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿वैशेषिक के सर्वथा भिन्नैकांत में दोष</option>");
  mySel.append("<option value='063.html'><b>063</b> - ﻿वैशेषिक को देश-काल भेद भी मानना चाहिए</option>");
  mySel.append("<option value='064.html'><b>064</b> - ﻿समवाय से वृत्ति मानने में दोष</option>");
  mySel.append("<option value='065.html'><b>065</b> - ﻿सामान्य समवाय एक-एक हैं</option>");
  mySel.append("<option value='066.html'><b>066</b> - ﻿सामान्य समवाय भी परस्पर में भिन्न हैं</option>");
  mySel.append("<option value='067.html'><b>067</b> - ﻿परमाणु की अन्यरूप परिणति न मानने में दोष</option>");
  mySel.append("<option value='068.html'><b>068</b> - ﻿कार्य भ्रांत है तो कारण भी भ्रांत है</option>");
  mySel.append("<option value='069.html'><b>069</b> - ﻿सांख्य के यहाँ कार्यकारणादि में एकत्व ही है</option>");
  mySel.append("<option value='070.html'><b>070</b> - ﻿सर्वथा भिन्न-अभिन्न की उभय और अवाच्य भी सदोष है</option>");
  mySel.append("<option value='071.html'><b>071</b> - ﻿कथंचित् कार्य-कारण आदि का भेद-अभेद ठीक है</option>");
  mySel.append("<option value='072.html'><b>072</b> - ﻿</option>");
  mySel.append("<option value='073.html'><b>073</b> - ﻿धर्म, धर्मी सर्वथा आपेक्षिक या अनापेक्षिक ही नहीं है</option>");
  mySel.append("<option value='074.html'><b>074</b> - ﻿आपेक्षिक-अनापेक्षिक का उभय एवं अवाच्य एकांत से नहीं घटता</option>");
  mySel.append("<option value='075.html'><b>075</b> - ﻿आपेक्षिक-अनापेक्षिक की अनेकांत व्यवस्था</option>");
  mySel.append("<option value='076.html'><b>076</b> - ﻿सर्वथा हेतु सिद्ध या आगम सिद्ध तत्त्व बाधित है</option>");
  mySel.append("<option value='077.html'><b>077</b> - ﻿हेतु के और आगम के उभय एवं अवाच्य भी सदोष हैं</option>");
  mySel.append("<option value='078.html'><b>078</b> - ﻿हेतु और आगम का अनेकांत</option>");
  mySel.append("<option value='079.html'><b>079</b> - ﻿सर्वथा अंतरंग अर्थ मानना सदोष है</option>");
  mySel.append("<option value='080.html'><b>080</b> - ﻿ज्ञान मात्र मानने से साध्य-साधन भी नहीं बनेंगे</option>");
  mySel.append("<option value='081.html'><b>081</b> - ﻿सर्वथा बहिरंग अर्थ ही है ऐसा कहना भी सदोष है</option>");
  mySel.append("<option value='082.html'><b>082</b> - ﻿अंतरंग और बहिरंग अर्थ का उभय और अवाच्य भी सदोष हैं</option>");
  mySel.append("<option value='083.html'><b>083</b> - ﻿ज्ञान पदार्थ और बाह्य पदार्थ दोनों ही सिद्ध हैं</option>");
  mySel.append("<option value='084.html'><b>084</b> - ﻿जीव शब्द बाह्य अर्थ से सहित है</option>");
  mySel.append("<option value='085.html'><b>085</b> - ﻿संज्ञा रूप हेतु निर्दोष है </option>");
  mySel.append("<option value='086.html'><b>086</b> - ﻿विज्ञानाद्वैतवादी का समाधान</option>");
  mySel.append("<option value='087.html'><b>087</b> - ﻿ज्ञान और शब्द की प्रमाणता कैसे है ?</option>");
  mySel.append("<option value='088.html'><b>088</b> - ﻿क्या भाग्य से ही सभी कार्य सिद्ध हो सकते हैं ?</option>");
  mySel.append("<option value='089.html'><b>089</b> - ﻿क्या एकांत से पुरुषार्थ से ही कार्य सिद्ध होते हैं ?</option>");
  mySel.append("<option value='090.html'><b>090</b> - ﻿भाग्य-पुरुषार्थ के उभय एवं अवाच्य का खंडन</option>");
  mySel.append("<option value='091.html'><b>091</b> - ﻿भाग्य और पुरुषार्थ का अनेकांत</option>");
  mySel.append("<option value='092.html'><b>092</b> - ﻿क्या पर को सुख-दु:ख देने से ही पुण्य-पाप बंध निश्चित है ?</option>");
  mySel.append("<option value='093.html'><b>093</b> - ﻿क्या स्वयं में दु:ख-सुख से पुण्य-पाप होता है ?</option>");
  mySel.append("<option value='094.html'><b>094</b> - ﻿पुण्य-पाप का उभय एवं अवक्तव्य भी एकांत से सदोष है</option>");
  mySel.append("<option value='095.html'><b>095</b> - ﻿पुन: पुण्य-पाप का बंध कैसे होता है ?</option>");
  mySel.append("<option value='096.html'><b>096</b> - ﻿क्या अज्ञान से बंध और अल्पज्ञान से मोक्ष होता है ?</option>");
  mySel.append("<option value='097.html'><b>097</b> - ﻿अज्ञान, अल्पज्ञान से बंध-मोक्ष का उभय और अवक्तव्य नहीं बनता है</option>");
  mySel.append("<option value='098.html'><b>098</b> - ﻿अज्ञान से बंध एवं अल्पज्ञान से मोक्ष की सुंदर व्यवस्था</option>");
  mySel.append("<option value='099.html'><b>099</b> - ﻿कर्मबंध के अनुसार संसार विचित्र है</option>");
  mySel.append("<option value='100.html'><b>100</b> - ﻿शुद्धि-अशुद्धि शक्तियाँ कैसी हैं</option>");
  mySel.append("<option value='101.html'><b>101</b> - ﻿प्रमाण का लक्षण और भेद</option>");
  mySel.append("<option value='102.html'><b>102</b> - ﻿प्रमाणों का फल क्या है ?</option>");
  mySel.append("<option value='103.html'><b>103</b> - ﻿‘स्यात्’ शब्द का महत्व</option>");
  mySel.append("<option value='104.html'><b>104</b> - ﻿स्याद्वाद का स्वरूप</option>");
  mySel.append("<option value='105.html'><b>105</b> - ﻿स्याद्वाद और केवलज्ञान में क्या अंतर है ?</option>");
  mySel.append("<option value='106.html'><b>106</b> - ﻿नय और हेतु का लक्षण</option>");
  mySel.append("<option value='107.html'><b>107</b> - ﻿द्रव्य का स्वरूप</option>");
  mySel.append("<option value='108.html'><b>108</b> - ﻿मिथ्यानय-सम्यकनय का लक्षण</option>");
  mySel.append("<option value='109.html'><b>109</b> - ﻿वस्तु को विधि आदि के द्वारा कहते है</option>");
  mySel.append("<option value='110.html'><b>110</b> - ﻿उभयात्मक वस्तु को एक रूप कहना मिथ्या है</option>");
  mySel.append("<option value='111.html'><b>111</b> - ﻿वचन का वास्तविक स्वभाव क्या है ?</option>");
  mySel.append("<option value='112.html'><b>112</b> - ﻿स्यात्कार ही अभिप्रेत को प्राप्त कराने वाला है</option>");
  mySel.append("<option value='113.html'><b>113</b> - ﻿स्याद्वाद की सम्यक् व्यवस्था</option>");
  mySel.append("<option value='114.html'><b>114</b> - ﻿आप्त मीमांसा करने का उद्देश्य</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
