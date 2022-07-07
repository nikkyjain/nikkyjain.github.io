
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
  mySel.append("<option value='002.html'><b>002</b> - ﻿गुणों के समुद्र की स्तुति असंभव</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿धृष्टतापूर्वक फिर भी आपकी स्तुति करता हूँ</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿आप ही शुद्ध, शक्तिमान, अनुपम एव शातं हैं</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿जिनशासन के अपवाद का हेतु</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿जिनदेव का शासन</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿अन्य एकांत मतों में बंध, मोक्ष आदि घटित नहीं होते हैं -- </option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿एकान्त मतों की सिद्धि स्वभाव हेतु से संभव नहीं है --</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿अवक्तव्य एकान्त में दोष</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿क्षणिकैकान्त पक्ष में दोष</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿निरन्वय विनाश मानने में दोष</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿क्षणिकैकान्तवाद में हेतु घटित नहीं होता</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿पदार्थों के आकस्मिक विनाश मानने में दोष</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿उपचार से भी क्षणिक पक्ष में दोष</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿क्षणिकैकान्त से लोक-व्यवहार का लोप</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿क्षणिकैकान्त में निर्विकल्प-बुद्धिभूत स्वपक्ष ही बाधित</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿विज्ञानाद्वैत में व्यभिचार दोष </option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿विज्ञानाद्वैत में स्वसंवेदन भाव नहीं बनता</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿स्वसंवेदनाद्वैत गूंगे की भाषा के समान प्रलाप-मात्र</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿संवेदनाद्वैत में संवृति और परमार्थ दोनों का अभाव</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿संवेदनाद्वैत की सिद्धि किसी प्रमाण से संभव नहीं</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿संवेदनाद्वैत को उपचार मानने में भी दोष</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿संवेदनाद्वैत में विद्या प्राप्ति असंभव</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿शून्यवाद की मान्यता में दोष</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿वस्तु सामान्य-विशेषात्मक</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿शून्यवाद में बन्ध और मोक्ष संभव नहीं</option>");
  mySel.append("<option value='028.html'><b>028</b> - ﻿उभय एकान्त रूप अवाच्य में दोष</option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿अवाच्य एकान्त का निराकरण</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿सर्वथा एकान्त से वस्तु की सिद्धि नहीं होती</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿असत्य में भेद विशेषण की अपेक्षा, एकान्तिक नहीं</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿बौद्ध मत में चतुःकोटि की मान्यता का खण्डन</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿बौद्ध मतानुसार मान्य निर्विकल्पक-प्रत्यक्ष का निरसन</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿शून्यैकान्तवाद में शुभाशुभ कार्य एवं कर्ता आदि घटित नहीं </option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿चार्वाक मत की मान्यतायें भोले प्राणियों को ठगने वाली</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿भूतचतुष्टय से चैतन्य की उत्पत्ति की मान्यता का निरसन-</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿चार्वाक एवं मीमांसक मत से स्वच्छन्द वृत्ति की पुष्टि</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿मीमांसक द्वारा मान्य हिंसादि से स्वर्ग की प्राप्ति मिथ्या</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿प्रचलित अन्य मिथ्या मान्यतायें युक्तिपूर्ण नहीं</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿विशेष सामान्यनिष्ठ है अतः वस्तु सामान्य-विशेषात्मक</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿'एवकार' एकान्तिक पक्ष होने से वस्तु का अभाव</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿'एवकार' के न कहने पर वस्तु के वस्तुत्व की हानि</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿'स्यात्' शब्द से ही वस्तु के स्वरूप का निश्चय</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿बिना कहे भी 'स्यात्' शब्द का ग्रहण करना चाहिए</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿सप्तभंगी का निरूपण</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿'स्यात्' के प्रयोग से ही अनेकान्तात्मक वस्तु की सिद्धि</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿स्याद्वाद में ही अनेकान्तात्मक वस्तुतत्त्व का सम्यक् निरूपण संभव</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿वीर शासन की 'युक्त्यनुशासन' ही सार्थक संज्ञा</option>");
  mySel.append("<option value='049.html'><b>049</b> - ﻿एकानेक रूप वस्तु की सिद्धि</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿सापेक्ष नयों से वस्तु तत्त्व की सिद्धि</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿अनेकान्तात्मक वस्तु-तत्त्व का निश्चय ही सम्यग्दर्शन</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿बन्ध्-मोक्ष की समीचीन सिद्धि अनेकान्त मत से ही संभव</option>");
  mySel.append("<option value='053.html'><b>053</b> - ﻿सामान्य-विशेषात्मक वस्तु तत्त्व की सिद्धि</option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿सामान्य मात्र वस्तु की सिद्धि संभव नहीं</option>");
  mySel.append("<option value='055.html'><b>055</b> - ﻿अवस्तुभूत सामान्य अप्रमेय होने से वस्तु तत्त्व की सिद्धि नहीं</option>");
  mySel.append("<option value='056.html'><b>056</b> - ﻿अन्य दर्शनों में मान्य सामान्य-विशेष के स्वरूप से वस्तु स्वरूप की सिद्धि नहीं</option>");
  mySel.append("<option value='057.html'><b>057</b> - ﻿निःस्वभावभूत संवृतिरूप साधन से संवृतिरूप साध्य की सिद्धि की युक्ति वस्तु स्वरूप के निर्धरण में असमर्थ</option>");
  mySel.append("<option value='058.html'><b>058</b> - ﻿संवेदनाद्वैत स्वपक्ष का घातक</option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿सर्वशून्यतारूप अभावैकान्त से वस्तु स्वरूप की सिद्धि संभव नहीं</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿वाक्य विधि-प्रतिषेध दोनों का विधायक है</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿स्याद्वाद शासन सभी की उन्नति का साध्क-रूप 'सर्वोदय' तीर्थ</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿हे वीर जिन! आपके शासन में श्रद्धान करने वाला अभद्र भी समन्तभद्र हो जाता है</option>");
  mySel.append("<option value='063.html'><b>063</b> - ﻿राग-द्वेष से रहित हिताभिलाषियों के हित के उपायभूत यह आपके गुणों का स्तवन किया है</option>");
  mySel.append("<option value='064.html'><b>064</b> - ﻿हे महावीर स्वामी! आप ही स्तुति के योग्य</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
