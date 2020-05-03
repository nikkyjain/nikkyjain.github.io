
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
       $optgrp.append("<option value='01-03.html'><b>01-03</b> - ﻿कर्मों में विभाजन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणस्थान">')
       $optgrp.append("<option value='02-01.html'><b>02-01</b> - ﻿गुणस्थानों में विभाजन</option>");
       $optgrp.append("<option value='02-02.html'><b>02-02</b> - ﻿गुणस्थानों में गमनागमन</option>");
       $optgrp.append("<option value='02-03.html'><b>02-03</b> - ﻿गुणस्थानों में समुद्घात</option>");
       $optgrp.append("<option value='02-04.html'><b>02-04</b> - ﻿गुणस्थानों में कर्म के उदय / उदीरणा</option>");
       $optgrp.append("<option value='02-05.html'><b>02-05</b> - ﻿गुणस्थानों में कर्म के बन्ध</option>");
       $optgrp.append("<option value='02-06.html'><b>02-06</b> - ﻿गुणस्थानों में कर्म की सत्ता</option>");
       $optgrp.append("<option value='02-07.html'><b>02-07</b> - ﻿गुणस्थानों का काल और उनमें जीवों की संख्या</option>");
       $optgrp.append("<option value='02-08.html'><b>02-08</b> - ﻿एक जीव के एक काल में होने वाला प्रकृति-बंध</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गति-आगति नियम">')
       $optgrp.append("<option value='03-01.html'><b>03-01</b> - ﻿गति-आगति</option>");
       $optgrp.append("<option value='03-02.html'><b>03-02</b> - ﻿जीव कहाँ तक जा सकता है</option>");
       $optgrp.append("<option value='03-03.html'><b>03-03</b> - ﻿जीव नियमत: कहाँ जाते हैं</option>");
       $optgrp.append("<option value='03-04.html'><b>03-04</b> - ﻿आयु</option>");
       $optgrp.append("<option value='03-05.html'><b>03-05</b> - ﻿संहनन की अपेक्षा गति प्राप्ति</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध प्रत्यय">')
       $optgrp.append("<option value='04-01.html'><b>04-01</b> - ﻿गुणस्थानों में बंध प्रत्यय</option>");
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
       $optgrp.append("<option value='05-15.html'><b>05-15</b> - ﻿मूल प्रकृति में सादि आदि बंध के भेद</option>");
       $optgrp.append("<option value='05-16.html'><b>05-16</b> - ﻿उत्तर प्रकृति में सादि आदि बंध के भेद</option>");
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
       $optgrp.append("<option value='07-03.html'><b>07-03</b> - ﻿उत्तर प्रकृतियों में सादि आदि भेद</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿प्रदेश बंध">')
       $optgrp.append("<option value='08-01.html'><b>08-01</b> - ﻿मूल प्रकृतियों में प्रदेश बंध</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कर्म-उदय">')
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
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणस्थानों में आलाप">')
       $optgrp.append("<option value='11-01.html'><b>11-01</b> - ﻿गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='11-02.html'><b>11-02</b> - ﻿नरक में गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='11-03.html'><b>11-03</b> - ﻿तिर्यन्चों में गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='11-04.html'><b>11-04</b> - ﻿मनुष्यों में गुणस्थानों में आलाप</option>");
       $optgrp.append("<option value='11-06.html'><b>11-06</b></option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सत्-अनुगम">')
       $optgrp.append("<option value='12-01.html'><b>12-01</b> - ﻿मार्गणा में भंग-विचय</option>");
       $optgrp.append("<option value='12-02.html'><b>12-02</b> - ﻿मार्गणा का स्वामित्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संख्यानुगम">')
       $optgrp.append("<option value='13-01.html'><b>13-01</b> - ﻿मार्गणा में द्रव्य-प्रमाणानुगम</option>");
       $optgrp.append("<option value='13-02.html'><b>13-02</b> - ﻿वैमानिक देवों की संख्या</option>");
       $optgrp.append("<option value='13-03.html'><b>13-03</b> - ﻿नारकियों की संख्या</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿क्षेत्रानुगम">')
       $optgrp.append("<option value='14-01.html'><b>14-01</b> - ﻿मार्गणा में क्षेत्रानुगम</option>");
       $optgrp.append("<option value='14-02.html'><b>14-02</b> - ﻿जीवों का वर्तमान निवास-स्थान / अवस्था</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿स्पर्शानुगम">')
       $optgrp.append("<option value='15-01.html'><b>15-01</b> - ﻿गुणस्थानों में स्पर्श</option>");
       $optgrp.append("<option value='15-02.html'><b>15-02</b> - ﻿मार्गणा में स्पर्शानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कालानुगम">')
       $optgrp.append("<option value='16-01.html'><b>16-01</b> - ﻿गुणस्थानों में काल</option>");
       $optgrp.append("<option value='16-02.html'><b>16-02</b> - ﻿मार्गणा में कालानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿भावानुगम">')
       $optgrp.append("<option value='17-01.html'><b>17-01</b> - ﻿मार्गणा में भावानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अन्तरानुगम">')
       $optgrp.append("<option value='18-01.html'><b>18-01</b> - ﻿गुणस्थानों में अंतर</option>");
       $optgrp.append("<option value='18-02.html'><b>18-02</b> - ﻿मार्गणा में अन्तरानुगम</option>");
       $optgrp.append("<option value='18-03.html'><b>18-03</b> - ﻿एक जीव की अपेक्षा प्रकृतिबंध अंतरानुगम</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोहनीय-विभक्ति">')
       $optgrp.append("<option value='27-01.html'><b>27-01</b> - ﻿मोहनीय प्रकृति-स्थान विभक्ति -- स्थान आदि</option>");
       $optgrp.append("<option value='27-02.html'><b>27-02</b> - ﻿मोहनीय विभक्ति-स्थान में अल्प-बहुत्व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿विविध विषय">')
       $optgrp.append("<option value='28-01.html'><b>28-01</b> - ﻿मूल संघ पट्टावली</option>");
       $optgrp.append("<option value='28-02.html'><b>28-02</b> - ﻿पुराण-पुरुष</option>");
       $optgrp.append("<option value='28-03.html'><b>28-03</b> - ﻿जीव-समास (98 भेद)</option>");
       $optgrp.append("<option value='28-04.html'><b>28-04</b> - ﻿नरक संबंधी जानकारी</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अलौकिक गणित">')
       $optgrp.append("<option value='29-01.html'><b>29-01</b> - ﻿क्षेत्र प्रमाण</option>");
       $optgrp.append("<option value='29-02.html'><b>29-02</b> - ﻿संख्या प्रमाण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿न्याय-वाक्य">')
       $optgrp.append("<option value='30-01.html'><b>30-01</b> - ﻿न्याय-वाक्य</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
