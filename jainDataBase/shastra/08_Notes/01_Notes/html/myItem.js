
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
    $optgrp=$('<optgroup label="﻿कर्म">')
       $optgrp.append("<option value='01-01.html'><b>01-01</b> - ﻿कर्म की १४८ प्रकृतियाँ</option>");
       $optgrp.append("<option value='01-02.html'><b>01-02</b> - ﻿कर्म प्रकृतियों में समूह-वाचक शब्द</option>");
       $optgrp.append("<option value='01-03.html'><b>01-03</b> - ﻿प्रकृति बंध संबंधी नियम</option>");
       $optgrp.append("<option value='01-04.html'><b>01-04</b> - ﻿कर्मों में विभाजन</option>");
       $optgrp.append("<option value='01-05.html'><b>01-05</b> - ﻿स्वोदय / परोदय बंधी प्रकृतियाँ</option>");
       $optgrp.append("<option value='01-06.html'><b>01-06</b> - ﻿सांतर / निरन्तर बंधी प्रकृतियाँ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणस्थान">')
       $optgrp.append("<option value='02-00.html'><b>02-00</b> - ﻿14 गुणस्थान</option>");
       $optgrp.append("<option value='02-01.html'><b>02-01</b> - ﻿गुणस्थानों में विभाजन</option>");
       $optgrp.append("<option value='02-02.html'><b>02-02</b> - ﻿गुणस्थानों में गमनागमन</option>");
       $optgrp.append("<option value='02-03.html'><b>02-03</b> - ﻿गुणस्थानों में समुद्घात</option>");
       $optgrp.append("<option value='02-04.html'><b>02-04</b> - ﻿गुणस्थानों में कर्म के उदय / उदीरणा</option>");
       $optgrp.append("<option value='02-05.html'><b>02-05</b> - ﻿गुणस्थानों में कर्म के बन्ध</option>");
       $optgrp.append("<option value='02-06.html'><b>02-06</b> - ﻿गुणस्थानों में कर्म की सत्ता</option>");
       $optgrp.append("<option value='02-07.html'><b>02-07</b> - ﻿गुणस्थानों का काल और उनमें जीवों की संख्या</option>");
       $optgrp.append("<option value='02-09.html'><b>02-09</b> - ﻿गुणस्थानों में संभव योग</option>");
       $optgrp.append("<option value='02-10.html'><b>02-10</b> - ﻿गुणस्थानों में कर्म की उदय / बंध व्युच्छिति</option>");
       $optgrp.append("<option value='02-11.html'><b>02-11</b> - ﻿गुणस्थान में मूल-प्रकृतियों में स्थान-समुत्कीर्तन</option>");
       $optgrp.append("<option value='02-12.html'><b>02-12</b> - ﻿गुणस्थानों में करण संबंधी विशेष विचार</option>");
       $optgrp.append("<option value='02-13.html'><b>02-13</b> - ﻿गुणस्थानों में परीषह</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गति-आगति नियम">')
       $optgrp.append("<option value='03-01.html'><b>03-01</b> - ﻿गति-आगति</option>");
       $optgrp.append("<option value='03-02.html'><b>03-02</b> - ﻿जीव कहाँ तक जा सकता है</option>");
       $optgrp.append("<option value='03-03.html'><b>03-03</b> - ﻿जीव नियमत: कहाँ जाते हैं</option>");
       $optgrp.append("<option value='03-04.html'><b>03-04</b> - ﻿आयु</option>");
       $optgrp.append("<option value='03-05.html'><b>03-05</b> - ﻿संहनन की अपेक्षा गति प्राप्ति</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सामन्य जानकारी ">')
       $optgrp.append("<option value='04-01.html'><b>04-01</b> - ﻿पांचों ज्ञानों का स्‍वामित्‍व</option>");
       $optgrp.append("<option value='04-02.html'><b>04-02</b> - ﻿संसारी जीवों में प्राण</option>");
       $optgrp.append("<option value='04-03.html'><b>04-03</b> - ﻿उत्तर प्रकृतियों में संक्रमण के संभव प्रकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿प्रकृति बंध ">')
       $optgrp.append("<option value='05-01.html'><b>05-01</b> - ﻿प्रकृति-बन्ध प्ररूपणा</option>");
       $optgrp.append("<option value='05-02.html'><b>05-02</b> - ﻿नरक में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-03.html'><b>05-03</b> - ﻿तिर्यञ्च-गति में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-04.html'><b>05-04</b> - ﻿मनुष्य-गति में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-05.html'><b>05-05</b> - ﻿देवगति में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-06.html'><b>05-06</b> - ﻿जाति-मार्गणा में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-07.html'><b>05-07</b> - ﻿काय-मार्गणा में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-08.html'><b>05-08</b> - ﻿योग-मार्गणा में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-09.html'><b>05-09</b> - ﻿वेद-मार्गणा में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-10.html'><b>05-10</b> - ﻿लेश्या-मार्गणा में प्रकृति बंध</option>");
       $optgrp.append("<option value='05-11.html'><b>05-11</b> - ﻿कषाय और ज्ञान मार्गणा में कर्म का बंध</option>");
       $optgrp.append("<option value='05-15.html'><b>05-15</b> - ﻿मूल प्रकृति में सादि आदि बंध के भेद</option>");
       $optgrp.append("<option value='05-16.html'><b>05-16</b> - ﻿उत्तर प्रकृति में सादि आदि बंध के भेद</option>");
       $optgrp.append("<option value='05-17.html'><b>05-17</b> - ﻿एक जीव के एक काल में होने वाला प्रकृति-बंध</option>");
       $optgrp.append("<option value='05-18.html'><b>05-18</b> - ﻿मोहनीय के भुजाकार आदि बंध</option>");
       $optgrp.append("<option value='05-21.html'><b>05-21</b> - ﻿गति के साथ बंधने वाले नाम-कर्म के स्थान</option>");
       $optgrp.append("<option value='05-22.html'><b>05-22</b> - ﻿गति-संयुक्त नाम-कर्म बंध के आठ स्थान</option>");
       $optgrp.append("<option value='05-23.html'><b>05-23</b> - ﻿नाम-कर्म बंध के आठ स्थान</option>");
       $optgrp.append("<option value='05-24.html'><b>05-24</b> - ﻿नाम-कर्म बन्ध-स्थान आदेश प्ररूपणा</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿स्थिति बंध ">')
       $optgrp.append("<option value='06-01.html'><b>06-01</b> - ﻿जघन्य-उत्कृष्ट स्थिति बंध का काल और स्वामी</option>");
       $optgrp.append("<option value='06-02.html'><b>06-02</b> - ﻿मार्गणा में जघन्य और उत्कृष्ट स्थिति-बंध</option>");
       $optgrp.append("<option value='06-03.html'><b>06-03</b> - ﻿मूल-प्रकृतियों में अजघन्य आदि स्थिति के प्रकार</option>");
       $optgrp.append("<option value='06-04.html'><b>06-04</b> - ﻿स्थिति-बंधस्थान प्ररूपणा</option>");
       $optgrp.append("<option value='06-05.html'><b>06-05</b> - ﻿संक्लेश-विशुद्धि-स्थान प्ररूपणा</option>");
       $optgrp.append("<option value='06-06.html'><b>06-06</b> - ﻿स्थिति बंध अल्प-बहुत्व</option>");
       $optgrp.append("<option value='06-07.html'><b>06-07</b> - ﻿उत्तर-प्रकृतियों में अजघन्य आदि स्थिति के प्रकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अनुभाग बंध ">')
       $optgrp.append("<option value='07-01.html'><b>07-01</b> - ﻿अनुभाग बन्ध के स्वामी</option>");
       $optgrp.append("<option value='07-02.html'><b>07-02</b> - ﻿मूल प्रकृतियों में सादि आदि भेद</option>");
       $optgrp.append("<option value='07-03.html'><b>07-03</b> - ﻿मूल प्रकृतियों के अनुभाग बंध में स्वामित्व प्ररूपणा</option>");
       $optgrp.append("<option value='07-10.html'><b>07-10</b> - ﻿उत्तर प्रकृतियों में सादि आदि भेद</option>");
       $optgrp.append("<option value='07-15.html'><b>07-15</b> - ﻿आठ मूल-प्रकृतियों के जघन्य / उत्कृष्ट अनुभाग बंध में स्वामित्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿प्रदेश बंध">')
       $optgrp.append("<option value='08-01.html'><b>08-01</b> - ﻿मूल प्रकृतियों में प्रदेश बंध</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कर्म-उदय-उदीरणा">')
       $optgrp.append("<option value='09-01.html'><b>09-01</b> - ﻿नरक और तिर्यञ्च गति मार्गणा में उदय</option>");
       $optgrp.append("<option value='09-02.html'><b>09-02</b> - ﻿मनुष्य और देव गति मार्गणा में उदय</option>");
       $optgrp.append("<option value='09-03.html'><b>09-03</b> - ﻿इंद्रिय मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-04.html'><b>09-04</b> - ﻿काय मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-05.html'><b>09-05</b> - ﻿योग मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-06.html'><b>09-06</b> - ﻿वेद मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-07.html'><b>09-07</b> - ﻿कषाय मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-08.html'><b>09-08</b> - ﻿ज्ञान मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-09.html'><b>09-09</b> - ﻿संयम मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-10.html'><b>09-10</b> - ﻿दर्शन मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-11.html'><b>09-11</b> - ﻿लेश्या मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-12.html'><b>09-12</b> - ﻿सम्यक्त्व मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-13.html'><b>09-13</b> - ﻿संज्ञी मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-14.html'><b>09-14</b> - ﻿आहार मार्गणा में कर्म का उदय</option>");
       $optgrp.append("<option value='09-18.html'><b>09-18</b> - ﻿नाम-कर्म अपेक्षा जीव-पद के 41 भेद</option>");
       $optgrp.append("<option value='09-19.html'><b>09-19</b> - ﻿उदय योग्य पाँच काल</option>");
       $optgrp.append("<option value='09-20.html'><b>09-20</b> - ﻿ओघ से एक जीव के एक काल में कर्म-उदय</option>");
       $optgrp.append("<option value='09-21.html'><b>09-21</b> - ﻿योग की अपेक्षा गुणस्थानों में मोहनीय के उदय संबंधी भंग</option>");
       $optgrp.append("<option value='09-22.html'><b>09-22</b> - ﻿योग की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-23.html'><b>09-23</b> - ﻿उपयोग की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-24.html'><b>09-24</b> - ﻿लेश्या की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-25.html'><b>09-25</b> - ﻿वेद की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-26.html'><b>09-26</b> - ﻿संयम की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-27.html'><b>09-27</b> - ﻿सम्यक्त्व की अपेक्षा मोहनीय के उदय संबंधी पदवृंद भंग</option>");
       $optgrp.append("<option value='09-31.html'><b>09-31</b> - ﻿एक जीव की अपेक्षा नाम कर्म के उदय-स्थान</option>");
       $optgrp.append("<option value='09-32.html'><b>09-32</b> - ﻿नाम-कर्म उदय-स्थान जीव-समास प्ररूपणा</option>");
       $optgrp.append("<option value='09-33.html'><b>09-33</b> - ﻿नाम-कर्म के उदय-स्थानों का यंत्र</option>");
       $optgrp.append("<option value='09-34.html'><b>09-34</b> - ﻿नाम कर्म के उदय-स्थान में जीव-पद अपेक्षा भंग</option>");
       $optgrp.append("<option value='09-35.html'><b>09-35</b> - ﻿आदेश से एक जीव के एक काल में नाम कर्म-उदय</option>");
       $optgrp.append("<option value='09-51.html'><b>09-51</b> - ﻿मोहनीय की जघन्य/उत्कृष्ट प्रकृति/अनुभाग उदीरणा के स्वामी</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कर्म-सत्व">')
       $optgrp.append("<option value='10-01.html'><b>10-01</b> - ﻿नरक गति मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-02.html'><b>10-02</b> - ﻿तिर्यञ्च गति मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-03.html'><b>10-03</b> - ﻿मनुष्य गति मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-04.html'><b>10-04</b> - ﻿देव गति मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-05.html'><b>10-05</b> - ﻿इंद्रिय और काय मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-07.html'><b>10-07</b> - ﻿योग मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-08.html'><b>10-08</b> - ﻿वेद, कषाय और ज्ञान मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-09.html'><b>10-09</b> - ﻿संयम और दर्शन मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-10.html'><b>10-10</b> - ﻿लेश्या, भव्य और सम्यक्त्व मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-11.html'><b>10-11</b> - ﻿संज्ञी और आहार मार्गणा में सत्व</option>");
       $optgrp.append("<option value='10-12.html'><b>10-12</b> - ﻿एक जीव के सत्व में स्थान और भंग की संख्या</option>");
       $optgrp.append("<option value='10-13.html'><b>10-13</b> - ﻿मिथ्यादृष्टि के सत्व में 18 स्थान / 50 भंग</option>");
       $optgrp.append("<option value='10-14.html'><b>10-14</b> - ﻿सासादन के सत्व में 4 स्थान / 12 भंग</option>");
       $optgrp.append("<option value='10-15.html'><b>10-15</b> - ﻿मिश्र गुणस्थान के सत्व में स्थान / 36 भंग</option>");
       $optgrp.append("<option value='10-16.html'><b>10-16</b> - ﻿अविरत-सम्यक्त्वी के सत्व में 40 स्थान / 120 भंग</option>");
       $optgrp.append("<option value='10-17.html'><b>10-17</b> - ﻿देशविरती के सत्व में 40 स्थान / 48 भंग</option>");
       $optgrp.append("<option value='10-18.html'><b>10-18</b> - ﻿6-7 गुणस्थान के सत्व में 40 स्थान / 40 भंग</option>");
       $optgrp.append("<option value='10-19.html'><b>10-19</b> - ﻿उपशम श्रेणी के सत्व में 24 स्थान और भंग</option>");
       $optgrp.append("<option value='10-20.html'><b>10-20</b> - ﻿अपूर्वकरण क्षपक के 4 सत्त्व स्थान / 4 भंग</option>");
       $optgrp.append("<option value='10-21.html'><b>10-21</b> - ﻿अनिवृत्तिकरण क्षपक के 36 सत्त्व स्थान / 38 भंग</option>");
       $optgrp.append("<option value='10-22.html'><b>10-22</b> - ﻿सूक्ष्मसांपरायिक / क्षीणमोह क्षपक के सत्त्व स्थान / भंग</option>");
       $optgrp.append("<option value='10-23.html'><b>10-23</b> - ﻿सयोग / आयोग केवली के स्थान और भंग</option>");
       $optgrp.append("<option value='10-30.html'><b>10-30</b> - ﻿नाम-कर्म के 13 सत्त्व-स्थान</option>");
       $optgrp.append("<option value='10-31.html'><b>10-31</b> - ﻿चार गति में पाए जाने वाले नाम-कर्म के सत्त्व-स्थान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध-उदय-सत्त्व त्रिसंयोग">')
       $optgrp.append("<option value='11-01.html'><b>11-01</b> - ﻿मूल-प्रकृतियों में त्रिसंयोग में स्थान</option>");
       $optgrp.append("<option value='11-02.html'><b>11-02</b> - ﻿ओघ से मूल-प्रकृतियों में त्रिसंयोग में स्थान</option>");
       $optgrp.append("<option value='11-03.html'><b>11-03</b> - ﻿उत्तर-प्रकृतियों में त्रिसंयोग में स्थान</option>");
       $optgrp.append("<option value='11-04.html'><b>11-04</b> - ﻿गोत्र कर्म के त्रिसंयोग भंग</option>");
       $optgrp.append("<option value='11-05.html'><b>11-05</b> - ﻿चारों गति में आयु कर्म के त्रिसंयोग भंग</option>");
       $optgrp.append("<option value='11-06.html'><b>11-06</b> - ﻿मोहनीय कर्म के त्रिसंयोग भंग</option>");
       $optgrp.append("<option value='11-07.html'><b>11-07</b> - ﻿मोहनीय के बंध अधिकरण, उदय-सत्त्व आधेय भंग</option>");
       $optgrp.append("<option value='11-08.html'><b>11-08</b> - ﻿मोहनीय के उदय अधिकरण, बंध-सत्त्व आधेय भंग</option>");
       $optgrp.append("<option value='11-09.html'><b>11-09</b> - ﻿मोहनीय के सत्त्व अधिकरण, बंध-उदय आधेय भंग</option>");
       $optgrp.append("<option value='11-10.html'><b>11-10</b> - ﻿नाम कर्म के बंध, उदय, सत्त्व त्रिसंयोग भंग</option>");
       $optgrp.append("<option value='11-11.html'><b>11-11</b> - ﻿14 जीव-समास में नाम कर्म के बंध, उदय, सत्त्व</option>");
       $optgrp.append("<option value='11-12.html'><b>11-12</b> - ﻿14 मार्गणा में नाम कर्म के बंध, उदय, सत्त्व भंग</option>");
       $optgrp.append("<option value='11-13.html'><b>11-13</b> - ﻿नाम कर्म के बंध अधिकरण, उदय, सत्त्व आधेय</option>");
       $optgrp.append("<option value='11-14.html'><b>11-14</b> - ﻿नाम कर्म के उदय आधार, बंध सत्त्व आधेय भंग</option>");
       $optgrp.append("<option value='11-15.html'><b>11-15</b> - ﻿नाम कर्म के सत्त्व आधार, बंध उदय आधेय भंग</option>");
       $optgrp.append("<option value='11-16.html'><b>11-16</b> - ﻿नाम कर्म के बंध / उदय आधार सत्त्व आधेय</option>");
       $optgrp.append("<option value='11-17.html'><b>11-17</b> - ﻿नाम कर्म के बंध / सत्त्व आधार उदय आधेय भंग</option>");
       $optgrp.append("<option value='11-18.html'><b>11-18</b> - ﻿नाम कर्म के उदय / सत्त्व आधार बन्ध आधेय भंग</option>");
       $optgrp.append("<option value='12-02.html'><b>12-02</b> - ﻿गुणस्थान में आस्रवों के मूल-प्रत्यय</option>");
       $optgrp.append("<option value='12-03.html'><b>12-03</b> - ﻿गुणस्थानों में आस्रवों के उत्तर प्रत्यय</option>");
       $optgrp.append("<option value='12-04.html'><b>12-04</b> - ﻿गुणस्थानों में आस्रव के स्थान संख्या और उनके प्रकार</option>");
       $optgrp.append("<option value='12-05.html'><b>12-05</b> - ﻿गुणस्थानों में आस्रव के प्रत्यय के भंगों का प्रमाण</option>");
       $optgrp.append("<option value='12-06.html'><b>12-06</b> - ﻿मार्गणा में आस्रव</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿भाव अधिकार">')
       $optgrp.append("<option value='13-01.html'><b>13-01</b> - ﻿नाना जीवों में पाए जाने वाले भाव</option>");
       $optgrp.append("<option value='13-02.html'><b>13-02</b> - ﻿नाना जीवों में पाए जाने वाले उत्तरभाव</option>");
       $optgrp.append("<option value='13-03.html'><b>13-03</b> - ﻿गुणस्थानों में एक जीव के एक काल में संभव भाव</option>");
       $optgrp.append("<option value='13-04.html'><b>13-04</b> - ﻿गुणस्थानों में उत्तरभावों के भंग</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणस्थानों में आलाप">')
       $optgrp.append("<option value='14-01.html'><b>14-01</b> - ﻿गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='14-02.html'><b>14-02</b> - ﻿नरक में गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='14-03.html'><b>14-03</b> - ﻿तिर्यन्चों में गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='14-04.html'><b>14-04</b> - ﻿मनुष्यों में गुणस्थानों में आलाप</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सत्-अनुगम">')
       $optgrp.append("<option value='15-01.html'><b>15-01</b> - ﻿मार्गणा में भंग-विचय</option>");
       $optgrp.append("<option value='15-02.html'><b>15-02</b> - ﻿मार्गणा का स्वामित्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संख्यानुगम">')
       $optgrp.append("<option value='16-01.html'><b>16-01</b> - ﻿मार्गणा में द्रव्य-प्रमाणानुगम</option>");
       $optgrp.append("<option value='16-02.html'><b>16-02</b> - ﻿वैमानिक देवों की संख्या</option>");
       $optgrp.append("<option value='16-03.html'><b>16-03</b> - ﻿नारकियों की संख्या</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿क्षेत्रानुगम">')
       $optgrp.append("<option value='17-01.html'><b>17-01</b> - ﻿मार्गणा में क्षेत्रानुगम</option>");
       $optgrp.append("<option value='17-02.html'><b>17-02</b> - ﻿जीवों का वर्तमान निवास-स्थान / अवस्था</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿स्पर्शानुगम">')
       $optgrp.append("<option value='18-01.html'><b>18-01</b> - ﻿गुणस्थानों में स्पर्श</option>");
       $optgrp.append("<option value='18-02.html'><b>18-02</b> - ﻿मार्गणा में स्पर्शानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कालानुगम">')
       $optgrp.append("<option value='19-01.html'><b>19-01</b> - ﻿गुणस्थानों में काल</option>");
       $optgrp.append("<option value='19-02.html'><b>19-02</b> - ﻿मार्गणा में कालानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿भावानुगम">')
       $optgrp.append("<option value='20-01.html'><b>20-01</b> - ﻿मार्गणा में भावानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अन्तरानुगम">')
       $optgrp.append("<option value='21-01.html'><b>21-01</b> - ﻿गुणस्थानों में अंतर</option>");
       $optgrp.append("<option value='21-02.html'><b>21-02</b> - ﻿मार्गणा में अन्तरानुगम</option>");
       $optgrp.append("<option value='21-03.html'><b>21-03</b> - ﻿एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-04.html'><b>21-04</b> - ﻿गति-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-05.html'><b>21-05</b> - ﻿इंद्रिय और काय मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-06.html'><b>21-06</b> - ﻿योग-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-07.html'><b>21-07</b> - ﻿वेद-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-08.html'><b>21-08</b> - ﻿कषाय-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-09.html'><b>21-09</b> - ﻿ज्ञान-दर्शन-संयम-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='21-10.html'><b>21-10</b> - ﻿लेश्या-मार्गणा में एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
       $optgrp.append("<option value='23-01.html'><b>23-01</b> - ﻿योग-स्थान</option>");
       $optgrp.append("<option value='23-02.html'><b>23-02</b> - ﻿योग-स्थान अल्प-बहुत्व</option>");
       $optgrp.append("<option value='23-03.html'><b>23-03</b> - ﻿जीव-समास में योगस्थान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोहनीय-विभक्ति">')
       $optgrp.append("<option value='27-01.html'><b>27-01</b> - ﻿मोहनीय प्रकृति-स्थान विभक्ति -- स्थान आदि</option>");
       $optgrp.append("<option value='27-02.html'><b>27-02</b> - ﻿मोहनीय विभक्ति-स्थान में अल्प-बहुत्व</option>");
       $optgrp.append("<option value='27-03.html'><b>27-03</b> - ﻿एक जीव अपेक्षा मोहनीय-विभक्ति का काल</option>");
       $optgrp.append("<option value='27-04.html'><b>27-04</b> - मोहनीय की उत्तर प्रकृति में विभक्ति -- समुत्कीर्तन</option>");
       $optgrp.append("<option value='27-05.html'><b>27-05</b> - मोहनीय की उत्तर प्रकृति में विभक्ति -- कालानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿विविध विषय">')
       $optgrp.append("<option value='28-01.html'><b>28-01</b> - ﻿मूल संघ पट्टावली</option>");
       $optgrp.append("<option value='28-02.html'><b>28-02</b> - ﻿पुराण-पुरुष</option>");
       $optgrp.append("<option value='28-03.html'><b>28-03</b> - ﻿जीव-समास (98 भेद)</option>");
       $optgrp.append("<option value='28-04.html'><b>28-04</b> - ﻿नरक संबंधी जानकारी</option>");
       $optgrp.append("<option value='28-05.html'><b>28-05</b> - ﻿नरक के 49 पटलों में आयु</option>");
       $optgrp.append("<option value='28-06.html'><b>28-06</b> - ﻿तिर्यञ्च-गति में जघन्य / उत्कृष्ट आयु</option>");
       $optgrp.append("<option value='28-07.html'><b>28-07</b> - ﻿एक अंतर्महुर्त में लब्ध्यपर्याप्तक के संभव निरंतर क्षुद्र भव</option>");
       $optgrp.append("<option value='28-08.html'><b>28-08</b> - ﻿मनुष्य-गति मार्गणा में आयु</option>");
       $optgrp.append("<option value='28-09.html'><b>28-09</b> - ﻿देव-गति में व्यन्तर देव संबंधी आयु</option>");
       $optgrp.append("<option value='28-10.html'><b>28-10</b> - ﻿देव गति में भवनवासी संबंधी आयु</option>");
       $optgrp.append("<option value='28-11.html'><b>28-11</b> - ﻿देव गति में ज्योतिष संबंधी आयु</option>");
       $optgrp.append("<option value='28-12.html'><b>28-12</b> - ﻿देव गति मे सौधर्म-ईशान देव सम्बन्धी आयु</option>");
       $optgrp.append("<option value='28-13.html'><b>28-13</b> - ﻿सानतकुमार / महेंद्र युगल में आयु</option>");
       $optgrp.append("<option value='28-14.html'><b>28-14</b> - ﻿ब्रह्म-कापिष्ठ युगल संबंधी आयु</option>");
       $optgrp.append("<option value='28-15.html'><b>28-15</b> - ﻿शुक्र से अच्युत स्वर्ग सम्बन्धी आयु</option>");
       $optgrp.append("<option value='28-16.html'><b>28-16</b> - ﻿आरण से सर्वार्थ-सिद्धि तक आयु</option>");
       $optgrp.append("<option value='28-17.html'><b>28-17</b> - ﻿वैमानिक परिवार में आयु</option>");
       $optgrp.append("<option value='28-18.html'><b>28-18</b> - ﻿वैमानिक इंद्राणि / देवियों संबंधी आयु</option>");
       $optgrp.append("<option value='28-19.html'><b>28-19</b> - ﻿चौबीस तीर्थंकर निर्देश</option>");
       $optgrp.append("<option value='28-20.html'><b>28-20</b> - ﻿द्वादश चक्रवर्ती निर्देश</option>");
       $optgrp.append("<option value='28-21.html'><b>28-21</b> - ﻿नव बलदेव निर्देश</option>");
       $optgrp.append("<option value='28-22.html'><b>28-22</b> - ﻿नव नारायण निर्देश</option>");
       $optgrp.append("<option value='28-23.html'><b>28-23</b> - ﻿नव प्रतिनारायण निर्देश</option>");
       $optgrp.append("<option value='28-24.html'><b>28-24</b> - ﻿एकादश रूद्र निर्देश</option>");
       $optgrp.append("<option value='28-26.html'><b>28-26</b> - ﻿चक्रवर्ती के 14 रत्न</option>");
       $optgrp.append("<option value='28-31.html'><b>28-31</b> - ﻿भगवान महावीर के पूर्व भव</option>");
       $optgrp.append("<option value='28-41.html'><b>28-41</b> - ﻿भवनवासी देवों में इंद्र परिवार</option>");
       $optgrp.append("<option value='28-45.html'><b>28-45</b> - ﻿तीर्थकरों का धर्म-तीर्थकाल</option>");
       $optgrp.append("<option value='28-50.html'><b>28-50</b> - ﻿द्वादशाङ्ग निर्देश</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अलौकिक गणित">')
       $optgrp.append("<option value='29-01.html'><b>29-01</b> - ﻿क्षेत्र प्रमाण</option>");
       $optgrp.append("<option value='29-02.html'><b>29-02</b> - ﻿संख्या प्रमाण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आहार-संबंधी">')
       $optgrp.append("<option value='30-01.html'><b>30-01</b> - ﻿आहार संबंधी</option>");
       $optgrp.append("<option value='30-02.html'><b>30-02</b> - ﻿अष्टांग योग</option>");
       $optgrp.append("<option value='30-03.html'><b>30-03</b> - ﻿प्रतिक्रमण</option>");
       $optgrp.append("<option value='30-04.html'><b>30-04</b> - ﻿सम्यक्त्व</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
