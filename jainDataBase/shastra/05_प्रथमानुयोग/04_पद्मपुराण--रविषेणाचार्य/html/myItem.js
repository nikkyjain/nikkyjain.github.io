
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿पद्म-चरित में वर्णनीय विषयों का संक्षेप में निरूपण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿महाराज श्रेणिक की चिन्ता</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿विद्याधर लोक का वर्णन</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿ऋषभदेव का महात्म्य</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿राक्षसवंश</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿वानरवंश</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿दशानन</option>");
  mySel.append("<option value='008.html'><b>008</b> - अष्टमं पर्व</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿बालि निर्वाण</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿राजा सहस्ररश्मि और अनरण्य की दीक्षा</option>");
  mySel.append("<option value='011.html'><b>011</b> - राजा मरुत्व के यज्ञ का विध्वंस</option>");
  mySel.append("<option value='012.html'><b>012</b> - इन्द्र विद्याधर की हार</option>");
  mySel.append("<option value='013.html'><b>013</b> - इन्द्र को निर्वाण</option>");
  mySel.append("<option value='014.html'><b>014</b> - अनन्तबल केवली के द्वारा धर्मोपदेश</option>");
  mySel.append("<option value='015.html'><b>015</b> - अञ्जनासुन्दरी का विवाह</option>");
  mySel.append("<option value='016.html'><b>016</b> - पवनंजय और अंजना का समागम</option>");
  mySel.append("<option value='017.html'><b>017</b> - हनूमान् का जन्म</option>");
  mySel.append("<option value='018.html'><b>018</b> - पवनंजय और अंजना का पुन: समागम</option>");
  mySel.append("<option value='019.html'><b>019</b> - रावण का साम्राज्य</option>");
  mySel.append("<option value='020.html'><b>020</b> - तीर्थकरादि के भव</option>");
  mySel.append("<option value='021.html'><b>021</b> - भगवान् मुनिसुव्रतनाथ, वज्रबाहु तथा राजा कीर्तिधर का माहात्म्य</option>");
  mySel.append("<option value='022.html'><b>022</b> - राजा दशरथ की उत्पत्ति</option>");
  mySel.append("<option value='023.html'><b>023</b> - विभीषण का व्यसन</option>");
  mySel.append("<option value='024.html'><b>024</b> - केकया को वरदान</option>");
  mySel.append("<option value='025.html'><b>025</b> - राम आदि चार भाइयों की उत्पत्ति</option>");
  mySel.append("<option value='026.html'><b>026</b> - सीता और भामंडल की उत्पत्ति</option>");
  mySel.append("<option value='027.html'><b>027</b> - म्लेच्छों की पराजय</option>");
  mySel.append("<option value='028.html'><b>028</b> - राम-लक्ष्मण को स्वयंवर में रत्नमाला की प्राप्ति</option>");
  mySel.append("<option value='029.html'><b>029</b> - राजा दशरथ को वैराग्य</option>");
  mySel.append("<option value='030.html'><b>030</b> - भामंडल का समागम</option>");
  mySel.append("<option value='031.html'><b>031</b> - राजा दशरथ को वैराग्य</option>");
  mySel.append("<option value='032.html'><b>032</b> - दशरथ की दीक्षा, राम का वनगमन, भरत का राज्याभिषेक</option>");
  mySel.append("<option value='033.html'><b>033</b> - वज्रकर्ण</option>");
  mySel.append("<option value='034.html'><b>034</b> - बालिखिल्य</option>");
  mySel.append("<option value='035.html'><b>035</b> - कपिल</option>");
  mySel.append("<option value='036.html'><b>036</b> - वनमाला</option>");
  mySel.append("<option value='037.html'><b>037</b> - राजा अतिवीर्य की दीक्षा</option>");
  mySel.append("<option value='038.html'><b>038</b> - जितपद्मा</option>");
  mySel.append("<option value='039.html'><b>039</b> - देशभूषण, कुलभूषण केवली</option>");
  mySel.append("<option value='040.html'><b>040</b> - रामगिरि</option>");
  mySel.append("<option value='041.html'><b>041</b> - जटायु</option>");
  mySel.append("<option value='042.html'><b>042</b> - दंडक वन में निवास</option>");
  mySel.append("<option value='043.html'><b>043</b> - शंबूक वध</option>");
  mySel.append("<option value='044.html'><b>044</b> - सीताहरण और रामविलाप</option>");
  mySel.append("<option value='045.html'><b>045</b> - सीता के वियोग जन्यदाह</option>");
  mySel.append("<option value='046.html'><b>046</b> - रावण के माया के विविध रूप</option>");
  mySel.append("<option value='047.html'><b>047</b> - साहसगति का वध</option>");
  mySel.append("<option value='048.html'><b>048</b> - लक्ष्मण द्वारा कोटिशिला उठाना</option>");
  mySel.append("<option value='049.html'><b>049</b> - हनुमान का प्रस्थान</option>");
  mySel.append("<option value='050.html'><b>050</b> - महेंद्र का पुत्री के साथ समागम</option>");
  mySel.append("<option value='051.html'><b>051</b> - राम को गंधर्व कन्याओं की प्राप्ति</option>");
  mySel.append("<option value='052.html'><b>052</b> - हनुमान् को लंकासुंदरी कन्या की प्राप्ति</option>");
  mySel.append("<option value='053.html'><b>053</b> - हनुमान का लौटना</option>");
  mySel.append("<option value='054.html'><b>054</b> - लंका के लिए प्रस्थान</option>");
  mySel.append("<option value='055.html'><b>055</b> - विभीषण का समागम</option>");
  mySel.append("<option value='056.html'><b>056</b> - राम और रावण की सेनाओं का प्रयाण</option>");
  mySel.append("<option value='057.html'><b>057</b> - रावण की सेना लंका से बाहर निकली</option>");
  mySel.append("<option value='058.html'><b>058</b> - हस्त-प्रहस्त का वध</option>");
  mySel.append("<option value='059.html'><b>059</b> - हस्त-प्रहस्त और नल-नील के पूर्वभव</option>");
  mySel.append("<option value='060.html'><b>060</b> - राम-लक्ष्मण को विद्याओं की प्राप्ति</option>");
  mySel.append("<option value='061.html'><b>061</b> - सुग्रीव और भामंडल का नागपाश दूर होना</option>");
  mySel.append("<option value='062.html'><b>062</b> - लक्ष्मण को शक्ति लगना</option>");
  mySel.append("<option value='063.html'><b>063</b> - शक्तिभेद एवं रामविलाप</option>");
  mySel.append("<option value='064.html'><b>064</b> - विशल्या का पूर्वभव</option>");
  mySel.append("<option value='065.html'><b>065</b> - विशल्या का समागम</option>");
  mySel.append("<option value='066.html'><b>066</b> - रावण के दूत का राम के पास जाना</option>");
  mySel.append("<option value='067.html'><b>067</b> - शांतिजिनालय</option>");
  mySel.append("<option value='068.html'><b>068</b> - फाल्गुन मास की अष्टाह्निकाओं की महिमा</option>");
  mySel.append("<option value='069.html'><b>069</b> - लोगों द्वारा नियम लेना</option>");
  mySel.append("<option value='070.html'><b>070</b> - सम्यग्दृष्टि देवों का प्रातिहार्यपना</option>");
  mySel.append("<option value='071.html'><b>071</b> - रावण को बहुरूपिणी विद्या की सिद्धि</option>");
  mySel.append("<option value='072.html'><b>072</b> - रावण का युद्ध संबंधी निश्चय</option>");
  mySel.append("<option value='073.html'><b>073</b> - युद्ध का उद्योग</option>");
  mySel.append("<option value='074.html'><b>074</b> - रावण और लक्ष्मण का युद्ध</option>");
  mySel.append("<option value='075.html'><b>075</b> - लक्ष्मण को चक्ररत्न की उत्पत्ति</option>");
  mySel.append("<option value='076.html'><b>076</b> - रावण का वध</option>");
  mySel.append("<option value='077.html'><b>077</b> - प्रीतिंकर</option>");
  mySel.append("<option value='078.html'><b>078</b> - इंद्रजित् आदि की दीक्षा</option>");
  mySel.append("<option value='079.html'><b>079</b> - सीता का समागम</option>");
  mySel.append("<option value='080.html'><b>080</b> - मय मुनिराज</option>");
  mySel.append("<option value='081.html'><b>081</b> - अयोध्या का वर्णन</option>");
  mySel.append("<option value='082.html'><b>082</b> - राम-लक्ष्मण का समागम</option>");
  mySel.append("<option value='083.html'><b>083</b> - त्रिलोकमंडन हाथी का क्षुभित होना</option>");
  mySel.append("<option value='084.html'><b>084</b> - त्रिलोकमंडन हाथी का शांत होना</option>");
  mySel.append("<option value='085.html'><b>085</b> - त्रिलोकमंडन हाथी का पूर्वभव</option>");
  mySel.append("<option value='086.html'><b>086</b> - भरत और केकया की दीक्षा</option>");
  mySel.append("<option value='087.html'><b>087</b> - भरत को निर्वाण</option>");
  mySel.append("<option value='088.html'><b>088</b> - राज्याभिषेक</option>");
  mySel.append("<option value='089.html'><b>089</b> - मधुसुंदर का वध</option>");
  mySel.append("<option value='090.html'><b>090</b> - मथुरा पर उपसर्ग</option>");
  mySel.append("<option value='091.html'><b>091</b> - शत्रुघ्न के भव</option>");
  mySel.append("<option value='092.html'><b>092</b> - सप्तर्षियों द्वारा उपसर्ग नाश</option>");
  mySel.append("<option value='093.html'><b>093</b> - मनोरमा की प्राप्ति</option>");
  mySel.append("<option value='094.html'><b>094</b> - राम-लक्ष्मण की विभूति</option>");
  mySel.append("<option value='095.html'><b>095</b> - सीता को जिनेंद्र पूजारूप दोहला</option>");
  mySel.append("<option value='096.html'><b>096</b> - राम द्वारा लोकनिंदा की चिंता</option>");
  mySel.append("<option value='097.html'><b>097</b> - सीता का निर्वासन, विलाप</option>");
  mySel.append("<option value='098.html'><b>098</b> - सीता को सांत्वना </option>");
  mySel.append("<option value='099.html'><b>099</b> - राम को शोक</option>");
  mySel.append("<option value='100.html'><b>100</b> - लवणांकुश की उत्पत्ति</option>");
  mySel.append("<option value='101.html'><b>101</b> - लवणांकुश की दिग्विजय</option>");
  mySel.append("<option value='102.html'><b>102</b> - लवणांकुश द्वारा युद्ध</option>");
  mySel.append("<option value='103.html'><b>103</b> - राम तथा लवणांकुश के समागम</option>");
  mySel.append("<option value='104.html'><b>104</b> - सकलभूषण का केवलज्ञानोत्सव</option>");
  mySel.append("<option value='105.html'><b>105</b> - राम द्वारा धर्म श्रवण</option>");
  mySel.append("<option value='106.html'><b>106</b> - रामआदि के पूर्वभव</option>");
  mySel.append("<option value='107.html'><b>107</b> - सीता द्वारा दीक्षा धारण</option>");
  mySel.append("<option value='108.html'><b>108</b> - लवणांकुश के पूर्वभव</option>");
  mySel.append("<option value='109.html'><b>109</b> - राजा मधु</option>");
  mySel.append("<option value='110.html'><b>110</b> - आठ कुमारों की दीक्षा</option>");
  mySel.append("<option value='111.html'><b>111</b> - भामंडल का परलोकगमन </option>");
  mySel.append("<option value='112.html'><b>112</b> - हनूमान् को वैराग्य</option>");
  mySel.append("<option value='113.html'><b>113</b> - हनूमान् को निर्वाण</option>");
  mySel.append("<option value='114.html'><b>114</b> - इंद्र और देवों के बीच हुई कथा</option>");
  mySel.append("<option value='115.html'><b>115</b> - लक्ष्मण का मरण</option>");
  mySel.append("<option value='116.html'><b>116</b> - श्रीरामदेव के विप्रलाप</option>");
  mySel.append("<option value='117.html'><b>117</b> - विभीषण द्वारा सम्बोधन</option>");
  mySel.append("<option value='118.html'><b>118</b> - लक्ष्मण का संस्कार</option>");
  mySel.append("<option value='119.html'><b>119</b> - राम की दीक्षा </option>");
  mySel.append("<option value='120.html'><b>120</b> - नगर में क्षोभ</option>");
  mySel.append("<option value='121.html'><b>121</b> - श्रीराम को आहार दान </option>");
  mySel.append("<option value='122.html'><b>122</b> - श्रीराममुनि को केवलज्ञान</option>");
  mySel.append("<option value='123.html'><b>123</b> - बलदेव की सिद्धि-प्राप्ति</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
