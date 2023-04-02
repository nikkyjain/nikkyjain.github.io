
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
  mySel.append("<option value='002.html'><b>002</b> - ﻿आचार्य की प्रतिज्ञा</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿धर्म का लक्षण</option>");
    $optgrp=$('<optgroup label="﻿सम्यग्दर्शन-अधिकार">')
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿सम्यग्दर्शन</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आप्त का लक्षण</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿वीतराग का लक्षण</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿आगम का लक्षण</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿शास्त्र का लक्षण</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿गुरु का लक्षण</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿नि:शंकित अंग</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿नि:कांक्षित अंग</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿निर्विचिकित्सा अंग</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿अमूढ़दृष्टि अंग</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿उपगूहन अंग</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿स्थितिकरण अंग</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿वात्सल्य अंग</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿प्रभावना अंग</option>");
       $optgrp.append("<option value='019-020.html'><b>019-020</b> - ﻿आठ अंगधारी के नाम</option>");
       $optgrp.append("<option value='021.html'><b>021</b> - ﻿अंगहीन सम्यक्त्व व्यर्थ है</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿लोक मूढ़ता</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿देव मूढ़ता</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿गुरु मूढ़ता</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿आठमद के नाम</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿मद करने से हानि</option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿पाप त्याग का उपदेश</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿सम्यग्दर्शन की महिमा</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿धर्म और अधर्म का फल</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿सम्यग्दृष्टि कुदेवादिक को नमन ना करे</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿सम्यग्दर्शन की श्रेष्ठता</option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿सम्यग्दर्शन के बिना ज्ञान चारित्र की असम्भवता</option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿मोही मुनि की अपेक्षा निर्मोही गृहस्थ श्रेष्ठ</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿श्रेय और अश्रेय का कथन</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿सम्यग्दृष्टि के अनुत्पत्ति के स्थान</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿सम्यग्दृष्टि जीव श्रेष्ठ मनुष्य होते हैं </option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿सम्यग्दृष्टि जीव इंद्र पद पाते हैं</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿सम्यग्दृष्टि ही चक्रवर्ती होते हैं</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿सम्यग्दृष्टि ही तीर्थंकर होते हैं</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿सम्यग्दृष्टि ही मोक्ष-पद प्राप्त करते हैं</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सम्यग्ज्ञान-अधिकार">')
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿सम्यग्ज्ञान का लक्षण</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿प्रथमानुयोग</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿करणानुयोग</option>");
       $optgrp.append("<option value='045.html'><b>045</b> - ﻿चरणानुयोग</option>");
       $optgrp.append("<option value='046.html'><b>046</b> - ﻿द्रव्यानुयोग</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सम्यक-चारित्र-अधिकार">')
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿चारित्र की आवश्यकता</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿चारित्र कब होता है?</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿चारित्र का लक्षण</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿चारित्र के भेद और उपासक</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿विकल चारित्र के भेद</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अणुव्रत-अधिकार">')
       $optgrp.append("<option value='052.html'><b>052</b> - ﻿अणुव्रत का लक्षण</option>");
       $optgrp.append("<option value='053.html'><b>053</b> - ﻿अहिंसा अणुव्रत</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿अहिंसा अणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='055.html'><b>055</b> - ﻿सत्याणुव्रत</option>");
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿सत्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿अचौर्याणुव्रत</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿अचौर्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿ब्रह्मचर्य अणुव्रत</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿ब्रह्मचर्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿परिग्रह परिमाण अणुव्रत</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿परिग्रह परिमाण अणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿पंचाणु व्रत का फल</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿पंचाणुव्रत में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿पांच पाप में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿श्रावक के आठ मूलगुण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणव्रत-अधिकार">')
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿गुणव्रतों के नाम</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿दिग्व्रत का लक्षण</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿मर्यादा की विधि</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿दिग्व्रती के महाव्रतपना</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿सो कैसे ? उसका समाधान</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿महाव्रत का लक्षण</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿दिग्व्रत के अतिचार</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿अनर्थदण्ड व्रत</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿अनर्थदण्ड के भेद</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿पापोपदेश का लक्षण</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿हिंसादान अनर्थदण्ड</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿अपध्यान अनर्थदण्ड</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿दु:श्रुति अनर्थदण्ड</option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿प्रमादचर्या अनर्थदण्ड</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿अनर्थदण्डव्रत के अतिचार</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿भोगोपभोग परिमाण गुणव्रत</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿भोग-उपभोग के लक्षण</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿सर्वथा त्याज्य पदार्थ</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿अन्य त्याज्य पदार्थ</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿व्रत का स्वरूप</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿यम और नियम</option>");
       $optgrp.append("<option value='088-89.html'><b>088-89</b> - ﻿भोगोपभोग सामग्री</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿भोगोपभोग परिमाण व्रत के अतिचार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शिक्षाव्रत-अधिकार">')
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿शिक्षाव्रत</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿देशावकाशिक शिक्षाव्रत</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿देशव्रत में मर्यादा की विधि</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿देशव्रत में काल मर्यादा</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿यह व्रत भी उपचार से महाव्रत है</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿देशावकाशिक व्रत के अतिचार</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿सामायिक शिक्षाव्रत</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿समय शब्द की व्युत्पत्ति</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿सामायिक योग्य स्थान</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿व्रत के दिन सामायिक का उपदेश</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿प्रातिदिन सामायिक का उपदेश</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿सामायिक के समय मुनितुल्यता</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿परीषह / उपसर्ग सहन का उपदेश</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿सामायिक के समय चिंतन</option>");
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿सामायिक के अतिचार</option>");
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿प्रोषधोपवास शिक्षाव्रत</option>");
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿उपवास के दिन वर्जित कार्य</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿उपवास के दिन कर्तव्य</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿प्रोषध और उपवास का लक्षण</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿प्रोषधोपवासव्रत के अतिचार</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿वैयावृत्य का लक्षण</option>");
       $optgrp.append("<option value='112.html'><b>112</b> - ﻿वैयावृत्य का दूसरा लक्षण</option>");
       $optgrp.append("<option value='113.html'><b>113</b> - ﻿दान का लक्षण</option>");
       $optgrp.append("<option value='114.html'><b>114</b> - ﻿दान का फल</option>");
       $optgrp.append("<option value='115.html'><b>115</b> - ﻿नवधा भक्ति का फल</option>");
       $optgrp.append("<option value='116.html'><b>116</b> - ﻿अल्पदान से महाफल</option>");
       $optgrp.append("<option value='117.html'><b>117</b> - ﻿दान के भेद</option>");
       $optgrp.append("<option value='118.html'><b>118</b> - ﻿दानों में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='119.html'><b>119</b> - ﻿वैयावृत्य में अर्हंत पूजा</option>");
       $optgrp.append("<option value='120.html'><b>120</b> - ﻿पूजा का माहात्म्य</option>");
       $optgrp.append("<option value='121.html'><b>121</b> - ﻿वैयावृत्य के अतिचार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सल्लेखना-अधिकार">')
       $optgrp.append("<option value='122.html'><b>122</b> - ﻿सल्लेखना का लक्षण</option>");
       $optgrp.append("<option value='123.html'><b>123</b> - ﻿सल्लेखना की आवश्यकता</option>");
       $optgrp.append("<option value='124-125.html'><b>124-125</b> - ﻿सल्लेखना की विधि और महाव्रत धारण का उपदेश</option>");
       $optgrp.append("<option value='126.html'><b>126</b> - ﻿स्वाध्याय का उपदेश</option>");
       $optgrp.append("<option value='127.html'><b>127</b> - ﻿भोजन के त्याग का क्रम</option>");
       $optgrp.append("<option value='128.html'><b>128</b> - ﻿सल्लेखना में शेष आहार त्याग का क्रम</option>");
       $optgrp.append("<option value='129.html'><b>129</b> - ﻿सल्लेखना के पांच अतिचार</option>");
       $optgrp.append("<option value='130.html'><b>130</b> - ﻿सल्लेखना का फल</option>");
       $optgrp.append("<option value='131.html'><b>131</b> - ﻿मोक्ष का लक्षण</option>");
       $optgrp.append("<option value='132.html'><b>132</b> - ﻿मुक्तजीवों का लक्षण</option>");
       $optgrp.append("<option value='133.html'><b>133</b> - ﻿विकार का अभाव</option>");
       $optgrp.append("<option value='134.html'><b>134</b> - ﻿मुक्तजीव कहाँ रहते हैं ?</option>");
       $optgrp.append("<option value='135.html'><b>135</b> - ﻿सद्धर्म का फल</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿श्रावकपद-अधिकार">')
       $optgrp.append("<option value='136.html'><b>136</b> - ﻿ग्यारह प्रतिमा</option>");
       $optgrp.append("<option value='137.html'><b>137</b> - ﻿दर्शन प्रतिमा</option>");
       $optgrp.append("<option value='138.html'><b>138</b> - ﻿व्रत प्रतिमा</option>");
       $optgrp.append("<option value='139.html'><b>139</b> - ﻿सामायिक प्रतिमा</option>");
       $optgrp.append("<option value='140.html'><b>140</b> - ﻿प्रोषध प्रतिमा</option>");
       $optgrp.append("<option value='141.html'><b>141</b> - ﻿सचित्त त्याग प्रतिमा</option>");
       $optgrp.append("<option value='142.html'><b>142</b> - ﻿रात्रि भुक्ति त्याग प्रतिमा</option>");
       $optgrp.append("<option value='143.html'><b>143</b> - ﻿ब्रह्मचर्य प्रतिमा</option>");
       $optgrp.append("<option value='144.html'><b>144</b> - ﻿आरम्भ त्याग प्रतिमा</option>");
       $optgrp.append("<option value='145.html'><b>145</b> - ﻿परिग्रह त्याग प्रतिमा</option>");
       $optgrp.append("<option value='146.html'><b>146</b> - ﻿अनुमति त्याग प्रतिमा</option>");
       $optgrp.append("<option value='147.html'><b>147</b> - ﻿उद्दिष्ट त्याग प्रतिमा</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿श्रेष्ठ ज्ञाता कौन है ?</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿रत्नत्रय का फल</option>");
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿इष्ट प्रार्थना</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿आचार्य की प्रतिज्ञा</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿धर्म का लक्षण</option>");
    $optgrp=$('<optgroup label="﻿सम्यग्दर्शन-अधिकार">')
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿सम्यग्दर्शन</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आप्त का लक्षण</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿वीतराग का लक्षण</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿आगम का लक्षण</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿शास्त्र का लक्षण</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿गुरु का लक्षण</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿नि:शंकित अंग</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿नि:कांक्षित अंग</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿निर्विचिकित्सा अंग</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿अमूढ़दृष्टि अंग</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿उपगूहन अंग</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿स्थितिकरण अंग</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿वात्सल्य अंग</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿प्रभावना अंग</option>");
       $optgrp.append("<option value='019-020.html'><b>019-020</b> - ﻿आठ अंगधारी के नाम</option>");
       $optgrp.append("<option value='021.html'><b>021</b> - ﻿अंगहीन सम्यक्त्व व्यर्थ है</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿लोक मूढ़ता</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿देव मूढ़ता</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿गुरु मूढ़ता</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿आठमद के नाम</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿मद करने से हानि</option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿पाप त्याग का उपदेश</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿सम्यग्दर्शन की महिमा</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿धर्म और अधर्म का फल</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿सम्यग्दृष्टि कुदेवादिक को नमन ना करे</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿सम्यग्दर्शन की श्रेष्ठता</option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿सम्यग्दर्शन के बिना ज्ञान चारित्र की असम्भवता</option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿मोही मुनि की अपेक्षा निर्मोही गृहस्थ श्रेष्ठ</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿श्रेय और अश्रेय का कथन</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿सम्यग्दृष्टि के अनुत्पत्ति के स्थान</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿सम्यग्दृष्टि जीव श्रेष्ठ मनुष्य होते हैं </option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿सम्यग्दृष्टि जीव इंद्र पद पाते हैं</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿सम्यग्दृष्टि ही चक्रवर्ती होते हैं</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿सम्यग्दृष्टि ही तीर्थंकर होते हैं</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿सम्यग्दृष्टि ही मोक्ष-पद प्राप्त करते हैं</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सम्यग्ज्ञान-अधिकार">')
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿सम्यग्ज्ञान का लक्षण</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿प्रथमानुयोग</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿करणानुयोग</option>");
       $optgrp.append("<option value='045.html'><b>045</b> - ﻿चरणानुयोग</option>");
       $optgrp.append("<option value='046.html'><b>046</b> - ﻿द्रव्यानुयोग</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सम्यक-चारित्र-अधिकार">')
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿चारित्र की आवश्यकता</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿चारित्र कब होता है?</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿चारित्र का लक्षण</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿चारित्र के भेद और उपासक</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿विकल चारित्र के भेद</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अणुव्रत-अधिकार">')
       $optgrp.append("<option value='052.html'><b>052</b> - ﻿अणुव्रत का लक्षण</option>");
       $optgrp.append("<option value='053.html'><b>053</b> - ﻿अहिंसा अणुव्रत</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿अहिंसा अणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='055.html'><b>055</b> - ﻿सत्याणुव्रत</option>");
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿सत्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿अचौर्याणुव्रत</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿अचौर्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿ब्रह्मचर्य अणुव्रत</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿ब्रह्मचर्याणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿परिग्रह परिमाण अणुव्रत</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿परिग्रह परिमाण अणुव्रत के अतिचार</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿पंचाणु व्रत का फल</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿पंचाणुव्रत में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿पांच पाप में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿श्रावक के आठ मूलगुण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुणव्रत-अधिकार">')
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿गुणव्रतों के नाम</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿दिग्व्रत का लक्षण</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿मर्यादा की विधि</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿दिग्व्रती के महाव्रतपना</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿सो कैसे ? उसका समाधान</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿महाव्रत का लक्षण</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿दिग्व्रत के अतिचार</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿अनर्थदण्ड व्रत</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿अनर्थदण्ड के भेद</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿पापोपदेश का लक्षण</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿हिंसादान अनर्थदण्ड</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿अपध्यान अनर्थदण्ड</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿दु:श्रुति अनर्थदण्ड</option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿प्रमादचर्या अनर्थदण्ड</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿अनर्थदण्डव्रत के अतिचार</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿भोगोपभोग परिमाण गुणव्रत</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿भोग-उपभोग के लक्षण</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿सर्वथा त्याज्य पदार्थ</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿अन्य त्याज्य पदार्थ</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿व्रत का स्वरूप</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿यम और नियम</option>");
       $optgrp.append("<option value='088-89.html'><b>088-89</b> - ﻿भोगोपभोग सामग्री</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿भोगोपभोग परिमाण व्रत के अतिचार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शिक्षाव्रत-अधिकार">')
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿शिक्षाव्रत</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿देशावकाशिक शिक्षाव्रत</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿देशव्रत में मर्यादा की विधि</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿देशव्रत में काल मर्यादा</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿यह व्रत भी उपचार से महाव्रत है</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿देशावकाशिक व्रत के अतिचार</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿सामायिक शिक्षाव्रत</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿समय शब्द की व्युत्पत्ति</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿सामायिक योग्य स्थान</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿व्रत के दिन सामायिक का उपदेश</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿प्रातिदिन सामायिक का उपदेश</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿सामायिक के समय मुनितुल्यता</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿परीषह / उपसर्ग सहन का उपदेश</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿सामायिक के समय चिंतन</option>");
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿सामायिक के अतिचार</option>");
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿प्रोषधोपवास शिक्षाव्रत</option>");
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿उपवास के दिन वर्जित कार्य</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿उपवास के दिन कर्तव्य</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿प्रोषध और उपवास का लक्षण</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿प्रोषधोपवासव्रत के अतिचार</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿वैयावृत्य का लक्षण</option>");
       $optgrp.append("<option value='112.html'><b>112</b> - ﻿वैयावृत्य का दूसरा लक्षण</option>");
       $optgrp.append("<option value='113.html'><b>113</b> - ﻿दान का लक्षण</option>");
       $optgrp.append("<option value='114.html'><b>114</b> - ﻿दान का फल</option>");
       $optgrp.append("<option value='115.html'><b>115</b> - ﻿नवधा भक्ति का फल</option>");
       $optgrp.append("<option value='116.html'><b>116</b> - ﻿अल्पदान से महाफल</option>");
       $optgrp.append("<option value='117.html'><b>117</b> - ﻿दान के भेद</option>");
       $optgrp.append("<option value='118.html'><b>118</b> - ﻿दानों में प्रसिद्ध नाम</option>");
       $optgrp.append("<option value='119.html'><b>119</b> - ﻿वैयावृत्य में अर्हंत पूजा</option>");
       $optgrp.append("<option value='120.html'><b>120</b> - ﻿पूजा का माहात्म्य</option>");
       $optgrp.append("<option value='121.html'><b>121</b> - ﻿वैयावृत्य के अतिचार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सल्लेखना-अधिकार">')
       $optgrp.append("<option value='122.html'><b>122</b> - ﻿सल्लेखना का लक्षण</option>");
       $optgrp.append("<option value='123.html'><b>123</b> - ﻿सल्लेखना की आवश्यकता</option>");
       $optgrp.append("<option value='124-125.html'><b>124-125</b> - ﻿सल्लेखना की विधि और महाव्रत धारण का उपदेश</option>");
       $optgrp.append("<option value='126.html'><b>126</b> - ﻿स्वाध्याय का उपदेश</option>");
       $optgrp.append("<option value='127.html'><b>127</b> - ﻿भोजन के त्याग का क्रम</option>");
       $optgrp.append("<option value='128.html'><b>128</b> - ﻿सल्लेखना में शेष आहार त्याग का क्रम</option>");
       $optgrp.append("<option value='129.html'><b>129</b> - ﻿सल्लेखना के पांच अतिचार</option>");
       $optgrp.append("<option value='130.html'><b>130</b> - ﻿सल्लेखना का फल</option>");
       $optgrp.append("<option value='131.html'><b>131</b> - ﻿मोक्ष का लक्षण</option>");
       $optgrp.append("<option value='132.html'><b>132</b> - ﻿मुक्तजीवों का लक्षण</option>");
       $optgrp.append("<option value='133.html'><b>133</b> - ﻿विकार का अभाव</option>");
       $optgrp.append("<option value='134.html'><b>134</b> - ﻿मुक्तजीव कहाँ रहते हैं ?</option>");
       $optgrp.append("<option value='135.html'><b>135</b> - ﻿सद्धर्म का फल</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿श्रावकपद-अधिकार">')
       $optgrp.append("<option value='136.html'><b>136</b> - ﻿ग्यारह प्रतिमा</option>");
       $optgrp.append("<option value='137.html'><b>137</b> - ﻿दर्शन प्रतिमा</option>");
       $optgrp.append("<option value='138.html'><b>138</b> - ﻿व्रत प्रतिमा</option>");
       $optgrp.append("<option value='139.html'><b>139</b> - ﻿सामायिक प्रतिमा</option>");
       $optgrp.append("<option value='140.html'><b>140</b> - ﻿प्रोषध प्रतिमा</option>");
       $optgrp.append("<option value='141.html'><b>141</b> - ﻿सचित्त त्याग प्रतिमा</option>");
       $optgrp.append("<option value='142.html'><b>142</b> - ﻿रात्रि भुक्ति त्याग प्रतिमा</option>");
       $optgrp.append("<option value='143.html'><b>143</b> - ﻿ब्रह्मचर्य प्रतिमा</option>");
       $optgrp.append("<option value='144.html'><b>144</b> - ﻿आरम्भ त्याग प्रतिमा</option>");
       $optgrp.append("<option value='145.html'><b>145</b> - ﻿परिग्रह त्याग प्रतिमा</option>");
       $optgrp.append("<option value='146.html'><b>146</b> - ﻿अनुमति त्याग प्रतिमा</option>");
       $optgrp.append("<option value='147.html'><b>147</b> - ﻿उद्दिष्ट त्याग प्रतिमा</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿श्रेष्ठ ज्ञाता कौन है ?</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿रत्नत्रय का फल</option>");
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿इष्ट प्रार्थना</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-2')
  mySel.append("<option value='002.html'><b>002</b> - ﻿आचार्य की प्रतिज्ञा</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿धर्म का लक्षण</option>");
    $optgrp=$('<optgroup label="﻿सम्यग्दर्शन-अधिकार">')
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿सम्यग्दर्शन</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आप्त का लक्षण</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿हितोपदेशी का लक्षण</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿गुरु का लक्षण</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
