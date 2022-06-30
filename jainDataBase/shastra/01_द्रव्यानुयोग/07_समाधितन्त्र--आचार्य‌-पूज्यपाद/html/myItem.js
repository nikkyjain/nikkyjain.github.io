
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
  mySel.append("<option value='000_मंगलाचरण.html'><b>000_मंगलाचरण</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿अरिहंत भगवान की स्तुति</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿आचार्य द्वारा संकल्प</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿आत्मा के भेद</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿तीनों का स्वरूप</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿परमात्मा के पर्यायवाची</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿बहिरात्मा को देह में आत्मबुद्धि का कारण</option>");
  mySel.append("<option value='008-009.html'><b>008-009</b> - ﻿बहिरात्मा की चारों गतियों में आत्मबुद्धि</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿बहिरात्मा दूसरे के शरीर को ही उसकी आत्मा मानता है</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿इस अध्यवसाय का परिणाम</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿अविद्या के संस्कार से जन्मान्तर में भी मूढ़ता</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿बहिरात्मा और अन्तरमा का दृष्टिकोण भिन्न</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿ममकार पतन का कारण</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿उपसंहार</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿अंतरात्मा को पूर्व की बहिरात्मदशा का खेद</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿आत्मा को जानने का उपाय</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿वचन-प्रवृत्ति का त्याग</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿विकल्पों का त्याग</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿निर्विकल्प स्वरूप</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿आत्मज्ञान के पूर्व चेष्टा</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿वर्तमान में चेष्टा</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿अखण्ड स्वरूप</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿जाग्रत अवस्था में आत्मा मात्र स्व-संवेदन गम्य</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿आत्मानुभव करने वाले के राग-द्वेष का अभाव</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿अन्य कोई भी मेरे शत्रु और मित्र नहीं</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿अंतरात्मा का कर्तव्य</option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿अज्ञानी का भय भी विपरीत</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿आत्म-स्वरूप की प्राप्ति</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿मैं ही परमात्मा</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿भेद-विज्ञान रहित के घोर तपस्या भी व्यर्थ</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿भेद-विज्ञानी को तप में खेद नहीं</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿निस्तरंग चित्त को ही आत्म-दर्शन</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿भेद-ज्ञान से रहित आत्मानुभव एक भ्रान्ति</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿भेद-विज्ञान के बिना विक्षिप्त चित्त में राग-द्वेष</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿विक्षिप्त चित्त को ही मान-अपमान</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿शुद्ध-आत्म स्वरूप की भावना द्वारा अपमानादि दूर</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿शरीर और इन्द्रिय विषयों से प्रेम नाश का उपाय</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿भेद-विज्ञान द्वारा ही शरीर में आत्म-बुद्धि दूर होती है</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿अज्ञानी और ज्ञानी के तप करने के प्रयोजन में भेद</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿अज्ञानी कर्म से बंधता है और ज्ञानी मुक्त होता है</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿आत्मा को लेकर अज्ञानी और ज्ञानी में दृष्टि भेद</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿अभेदरूप भ्रान्ति का कारण</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿अन्तरात्मा भ्रान्ति को कैसे दूर करता है?</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿तीनों प्रकार के आत्मा के ग्रहण त्याग में भेद</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿अन्तरात्मा का ग्रहण-त्याग</option>");
  mySel.append("<option value='049.html'><b>049</b> - ﻿स्त्री-पुत्र में विशवास और रमणता -- बहिरात्म-दशा</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿अन्तरात्मा के स्व-पर उपकारादिक में अनासक्तता</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿अन्तरात्मा की भावना</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿अन्तरात्मा में समूल परिवर्तन</option>");
  mySel.append("<option value='053.html'><b>053</b> - ﻿अन्तरात्मा वैज्ञानिक की भांति</option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿आत्मा वचन और वाणी से असंग</option>");
  mySel.append("<option value='055.html'><b>055</b> - ﻿इन्द्रिय विषय से आत्मा का तनिक भी भला नहीं</option>");
  mySel.append("<option value='056.html'><b>056</b> - ﻿अनादि जड़-संस्कार द्वारा पर में ममत्व</option>");
  mySel.append("<option value='057.html'><b>057</b> - ﻿अन्तारामा के पर में अनात्म-बुद्धि</option>");
  mySel.append("<option value='058.html'><b>058</b> - ﻿दूसरों को बताने का श्रम व्यर्थ है</option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿दूसरों को समझाना व्यर्थ क्यों?</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿मोहाच्छादित बाह्य पदार्थों से सन्तुष्ट</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿अन्तरात्मा शरीरादि के प्रति उदासीन</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿मन-वचन-शरीर में आत्मबुद्धि का फल संसार</option>");
  mySel.append("<option value='063-066.html'><b>063-066</b> - ﻿अन्तरात्मा के शरीर के प्रति भेद-भावना</option>");
  mySel.append("<option value='067.html'><b>067</b> - ﻿अन्तरात्मा को शरीर जड़ दिखता है</option>");
  mySel.append("<option value='068.html'><b>068</b> - ﻿आत्मा के यथार्थ स्वरूप को नहीं जानने से संसार</option>");
  mySel.append("<option value='069.html'><b>069</b> - ﻿अज्ञानी शरीर को ही आत्मा समझ लेते हैं</option>");
  mySel.append("<option value='070.html'><b>070</b> - ﻿मैं शरीर नहीं, ज्ञान मेरा शरीर</option>");
  mySel.append("<option value='071.html'><b>071</b> - ﻿आत्म-स्वरूप में निश्चल धारणा से मुक्ति</option>");
  mySel.append("<option value='072.html'><b>072</b> - ﻿अन्तरात्मा लौकिक संसर्ग से परे</option>");
  mySel.append("<option value='073.html'><b>073</b> - ﻿अन्तरात्मा के लिए ग्राम-वन में कोई भेद नहीं</option>");
  mySel.append("<option value='074.html'><b>074</b> - ﻿आत्मदर्शी और अनात्मदर्शी के फल</option>");
  mySel.append("<option value='075.html'><b>075</b> - ﻿आत्मा स्वयं अपना गुरु, कोई और नहीं</option>");
  mySel.append("<option value='076.html'><b>076</b> - ﻿अज्ञानी को मरण का भय</option>");
  mySel.append("<option value='077.html'><b>077</b> - ﻿ज्ञानी भय-रहित</option>");
  mySel.append("<option value='078.html'><b>078</b> - ﻿ज्ञानी और अज्ञानी की परिणति भिन्न</option>");
  mySel.append("<option value='079.html'><b>079</b> - ﻿आत्म-स्वरूप में जाग्रत के मुक्ति-प्राप्ति</option>");
  mySel.append("<option value='080.html'><b>080</b> - ﻿योगी को जगत कैसा प्रतिभासित होता है?</option>");
  mySel.append("<option value='081.html'><b>081</b> - ﻿आत्मा की चर्चा मात्र से मुक्ति नहीं</option>");
  mySel.append("<option value='082.html'><b>082</b> - ﻿अन्तरात्मा स्वप्न में भी अपने को शरीर नहीं मानता </option>");
  mySel.append("<option value='083.html'><b>083</b> - ﻿व्रत का विकल्प भी त्यागने योग्य</option>");
  mySel.append("<option value='084.html'><b>084</b> - ﻿त्याग का क्रम</option>");
  mySel.append("<option value='085.html'><b>085</b> - ﻿अंतर-जल्प रहित को मुक्ति</option>");
  mySel.append("<option value='086.html'><b>086</b> - ﻿विकल्पों के नाश का क्रम</option>");
  mySel.append("<option value='087.html'><b>087</b> - ﻿लिंग-रहित को मुक्ति</option>");
  mySel.append("<option value='088.html'><b>088</b> - ﻿जाति का हठ मुक्ति में बाधक</option>");
  mySel.append("<option value='089.html'><b>089</b> - ﻿जाति और लिंग को लेकर हठ भी मुक्ति में बाधक</option>");
  mySel.append("<option value='090.html'><b>090</b> - ﻿निर्मोही और मोही में भेद</option>");
  mySel.append("<option value='091.html'><b>091</b> - ﻿अज्ञानी को संयोग में एकत्व-बुद्धि</option>");
  mySel.append("<option value='092.html'><b>092</b> - ﻿अन्तरात्मा संयोग को संयोग ही देखता है</option>");
  mySel.append("<option value='093.html'><b>093</b> - ﻿बहिरात्मा और अन्तरात्मा किसे भ्रम कहते हैं</option>");
  mySel.append("<option value='094.html'><b>094</b> - ﻿शास्त्र-ज्ञान और जाग्रत अवस्था से ही मुक्ति नहीं</option>");
  mySel.append("<option value='095.html'><b>095</b> - ﻿रूचि के अनुसार तन्मयता</option>");
  mySel.append("<option value='096.html'><b>096</b> - ﻿रुचि नहीं तो श्रद्धा हट जाती है</option>");
  mySel.append("<option value='097.html'><b>097</b> - ﻿भिन्न आत्मा की उपासना</option>");
  mySel.append("<option value='098.html'><b>098</b> - ﻿अभिन्न आत्मा की उपासना</option>");
  mySel.append("<option value='099.html'><b>099</b> - ﻿भिन्न-अभिन्न आराधना द्वारा लक्ष्य प्राप्ति</option>");
  mySel.append("<option value='100.html'><b>100</b> - ﻿चार्वाक और सांख्य के प्रति</option>");
  mySel.append("<option value='101.html'><b>101</b> - ﻿आत्मा का नाश नहीं होता</option>");
  mySel.append("<option value='102.html'><b>102</b> - ﻿काय-क्लेश क्या व्यर्थ है?</option>");
  mySel.append("<option value='103.html'><b>103</b> - ﻿आत्मा और शरीर में निमित्त-नैमित्तिक सम्बन्ध </option>");
  mySel.append("<option value='104.html'><b>104</b> - ﻿बहिरात्मा निमित्त को उपादान देखता है </option>");
  mySel.append("<option value='105.html'><b>105</b> - ﻿समाधितंत्र शास्त्र पढ़ने का फल</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
  mySel.append("<option value='000_मंगलाचरण.html'><b>000_मंगलाचरण</b> - ﻿मंगलाचरण</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
