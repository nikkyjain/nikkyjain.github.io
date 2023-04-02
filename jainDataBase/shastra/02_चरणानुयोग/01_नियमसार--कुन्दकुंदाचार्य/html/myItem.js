
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
    $optgrp=$('<optgroup label="﻿जीव-अधिकार">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿मार्ग और मार्ग-फल</option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿स्वभाव रत्नत्रय</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿रत्नत्रय के भेद और लक्षण</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿व्यवहार सम्यक्त्व</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿१८ दोषों का स्वरूप</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿तीर्थंकर का स्वरूप</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿आगम का स्वरूप</option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿द्रव्यों के नाम</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿उपयोग लक्षण</option>");
       $optgrp.append("<option value='011-012.html'><b>011-012</b> - ﻿ज्ञान के भेद</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿दर्शनोपयोग </option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿दर्शनोपयोग के भेद</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿स्वभाव-विभाव पर्याय</option>");
       $optgrp.append("<option value='016-017.html'><b>016-017</b> - ﻿चार-गति का स्वरूप</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿आत्मा का कर्तत्व-भोक्तृत्व</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿दोनों नयों की उपयोगिता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव-अधिकार">')
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿पुद्गल-द्रव्य के भेद</option>");
       $optgrp.append("<option value='021-024.html'><b>021-024</b> - ﻿पुद्गल के भेद</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿कारण और कार्य-परमाणु द्रव्य</option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿परमाणु का विशेष कथन</option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿स्वभाव-पुद्गल</option>");
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿पुद्गल-पर्याय</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿पुद्गल-द्रव्य - उपसंहार</option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿धर्म-अधर्म-आकाश</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿व्यवहारकाल और उसके भेद</option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿मुख्य काल का स्वरूप</option>");
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿अमूर्त अचेतन द्रव्यों की पर्याय</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿पंचास्तिकाय</option>");
       $optgrp.append("<option value='035-036.html'><b>035-036</b> - ﻿द्रव्यों के प्रदेश</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्ध-भाव-अधिकार">')
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿हेय और उपादेय तत्त्व</option>");
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿निर्विकल्प तत्त्व</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿बन्ध-उदय स्थान जीव नहीं</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿चार विभाव-स्वभावों और पंचम-भाव</option>");
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿शुद्ध-जीव को विकार नहीं</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿शुद्ध-आत्मा को विभाव का अभाव</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿शुद्ध जीव का स्वरूप</option>");
       $optgrp.append("<option value='045-046.html'><b>045-046</b> - ﻿कारण-परमात्मा का स्वरूप</option>");
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿संसारी और मुक्त जीवों में अन्तर नहीं</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿कार्य तथा कारण-समयसार में अन्तर नहीं</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿निश्चय और व्यवहारनय की उपादेयता</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿हेय-उपादेय का स्वरूप</option>");
       $optgrp.append("<option value='051-055.html'><b>051-055</b> - ﻿रत्नत्रय का स्वरूप</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿व्यवहार-चारित्र">')
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿अहिंसाव्रत</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿सत्यव्रत</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿अचौर्य-व्रत</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿ब्रह्मचर्य-व्रत</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿परिग्रह-त्याग व्रत</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿ईर्या-समिति</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿भाषा-समिति</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿एषणा-समिति</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿आदाननिक्षेपण समिति</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿प्रतिष्ठापन समिति</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿व्यवहार मनोगुप्ति</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿वचन-गुप्ति</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿काय-गुप्ति</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿निश्चय मनोगुप्ति और वचनगुप्ति</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿निश्चय काय-गुप्ति</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿अर्हत् परमेश्वर</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿सिद्ध-परमेष्ठि</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿आचार्य</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿उपाध्याय</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿साधुओं का स्वरूप</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿व्यवहार-चारित्र-अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परमार्थ प्रतिक्रमण">')
       $optgrp.append("<option value='077-081.html'><b>077-081</b> - ﻿पंचरत्न का स्वरूप</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿भेदविज्ञान द्वारा निश्चय-चारित्र</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿वचनगुप्त रागादि-रहित ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿विराधना-रहित आत्माराधक ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿अनाचरण-रहित आचारी ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿उन्मार्ग-त्यागी जिनमार्गी ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿निःशल्यभाव ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿त्रिगुप्तिगुप्त ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿धर्म-शुक्ल ध्यानी ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿अनासन्न-भव्य जीव के पूर्वापर परिणाम</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿निश्चय-रत्नत्रय धारक ही प्रतिक्रमण</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿निश्चय-उत्तमार्थ प्रतिक्रमण</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿ध्यान एक उपादेय</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿व्यवहार प्रतिक्रमण की सफलता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निश्चय प्रत्याख्यान">')
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿निश्चय प्रत्याख्यान का स्वरूप</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿अनंतचतुष्टयात्मक निज-आत्मा के ध्यान का उपदेश</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿ज्ञानी को शिक्षा</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿बन्ध-रहित आत्मा को भाना चाहिये</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿सकल विभाव के त्याग की विधि</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿सर्वत्र आत्मा उपादेय है</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿संसारावस्था में और मुक्ति में जीव निःसहाय है</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿एकत्व भावनारूप से परिणमित सम्यग्ज्ञानी के लक्षण</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿आत्मगत दोषों से मुक्त होने के उपाय</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿अंतर्मुख परम-तपोधन की भाव-शुद्धि</option>");
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿निश्चय-प्रत्याख्यान के योग्य जीव का स्वरूप</option>");
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿निश्चय-प्रत्याख्यान अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम आलोचना">')
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿निश्चय-आलोचना का स्वरूप</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿आलोचना के स्वरूप के भेद</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿आलोचन</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿आलुंछन</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿अविकृतिकरण</option>");
       $optgrp.append("<option value='112.html'><b>112</b> - ﻿भावशुद्धि </option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्धनिश्चय-प्रायश्चित्त">')
       $optgrp.append("<option value='113-114.html'><b>113-114</b> - ﻿निश्चय-प्रायश्चित्त का स्वरूप</option>");
       $optgrp.append("<option value='115.html'><b>115</b> - ﻿चार कषायों पर विजय प्राप्त करने का उपाय</option>");
       $optgrp.append("<option value='116.html'><b>116</b> - ﻿शुद्ध ज्ञान के स्वीकारवाले को प्रायश्चित्त है</option>");
       $optgrp.append("<option value='117.html'><b>117</b> - ﻿परम तपश्चरण में लीन परम जिनयोगीश्वरों को निश्चय-प्रायश्चित्त</option>");
       $optgrp.append("<option value='118.html'><b>118</b> - ﻿कारण परमात्म तत्त्व में सदा अन्तर्मुख रहकर जो प्रतपन वह तप प्रायश्चित्त</option>");
       $optgrp.append("<option value='119.html'><b>119</b> - ﻿निश्चय धर्मध्यान ही सर्व भावों का अभाव करने में समर्थ</option>");
       $optgrp.append("<option value='120.html'><b>120</b> - ﻿शुद्धनिश्चय-नियम का स्वरूप</option>");
       $optgrp.append("<option value='121.html'><b>121</b> - ﻿निश्चय-कायोत्सर्ग का स्वरूप</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम-समाधि">')
       $optgrp.append("<option value='122.html'><b>122</b> - ﻿परम समाधि का स्वरूप</option>");
       $optgrp.append("<option value='123.html'><b>123</b> - ﻿समाधि का लक्षण</option>");
       $optgrp.append("<option value='124.html'><b>124</b> - ﻿समता-रहित श्रमण को कुछ भी कार्यकारी नहीं</option>");
       $optgrp.append("<option value='125.html'><b>125</b> - ﻿किस मुनि को सामायिक व्रत स्थायी है?</option>");
       $optgrp.append("<option value='126.html'><b>126</b> - ﻿परम मुमुक्षु का स्वरूप</option>");
       $optgrp.append("<option value='127.html'><b>127</b> - ﻿आत्मा ही उपादेय है</option>");
       $optgrp.append("<option value='128.html'><b>128</b> - ﻿रागद्वेष के अभाव से अपरिस्पंदरूपता</option>");
       $optgrp.append("<option value='129.html'><b>129</b> - ﻿आर्त और रौद्र ध्यान के परित्याग द्वारा सामायिक-व्रत</option>");
       $optgrp.append("<option value='130.html'><b>130</b> - ﻿सुकृत-दुष्कृतरूप कर्म के संन्यास की विधि</option>");
       $optgrp.append("<option value='131-132.html'><b>131-132</b> - ﻿नौ नोकषाय की विजय</option>");
       $optgrp.append("<option value='133.html'><b>133</b> - ﻿परम-समाधि अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परम-भक्ति">')
       $optgrp.append("<option value='134.html'><b>134</b> - ﻿रत्नत्रय का स्वरूप</option>");
       $optgrp.append("<option value='135.html'><b>135</b> - ﻿सिद्ध-भक्ति का स्वरूप</option>");
       $optgrp.append("<option value='136.html'><b>136</b> - ﻿निज-परमात्मा की भक्ति</option>");
       $optgrp.append("<option value='137.html'><b>137</b> - ﻿निश्चय-योग-भक्ति</option>");
       $optgrp.append("<option value='138.html'><b>138</b> - ﻿निश्चय - योग भक्ति का स्वरूप</option>");
       $optgrp.append("<option value='139.html'><b>139</b> - ﻿विपरीत अभिनिवेश रहित आत्मभाव ही निश्चय - परमयोग</option>");
       $optgrp.append("<option value='140.html'><b>140</b> - ﻿भक्ति अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निश्चय परमावश्यक">')
       $optgrp.append("<option value='141.html'><b>141</b> - ﻿निरन्तर स्ववश को निश्चय - आवश्यक - कर्म</option>");
       $optgrp.append("<option value='142.html'><b>142</b> - ﻿अवश परम जिनयोगीश्वर को परम आवश्यक कर्म अवश्य</option>");
       $optgrp.append("<option value='143.html'><b>143</b> - ﻿भेदोपचार - रत्नत्रय परिणतिवाले जीव को अवशपना नहीं</option>");
       $optgrp.append("<option value='144.html'><b>144</b> - ﻿अन्यवश ऐसे अशुद्ध अन्तरात्म जीव का लक्षण</option>");
       $optgrp.append("<option value='145.html'><b>145</b> - ﻿अन्यवश का स्वरूप</option>");
       $optgrp.append("<option value='146.html'><b>146</b> - ﻿साक्षात् स्ववश परमजिनयोगीश्वर का स्वरूप</option>");
       $optgrp.append("<option value='147.html'><b>147</b> - ﻿शुद्धनिश्चय - आवश्यक की प्राप्ति का जो उपाय</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿शुद्धोपयोग सम्मुख जीव को शिक्षा</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿आवश्यक कर्म के अभाव में तपोधन बहिरात्मा</option>");
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿बाह्य तथा अन्तर जल्प का खण्डन</option>");
       $optgrp.append("<option value='151.html'><b>151</b> - ﻿स्वात्माश्रित धर्मध्यान और शुक्लध्यान ही उपादेय</option>");
       $optgrp.append("<option value='152.html'><b>152</b> - ﻿परम वीतराग चारित्र में स्थित परम तपोधन</option>");
       $optgrp.append("<option value='153.html'><b>153</b> - ﻿समस्त वचन सम्बन्धी व्यापार का खण्डन</option>");
       $optgrp.append("<option value='154.html'><b>154</b> - ﻿शुद्ध निश्चय धर्मध्यानस्वरूप प्रतिक्रमणादि ही करने योग्य</option>");
       $optgrp.append("<option value='155.html'><b>155</b> - ﻿साक्षात् अन्तर्मुख परम जिनयोगी को शिक्षा</option>");
       $optgrp.append("<option value='156.html'><b>156</b> - ﻿वचन-सम्बन्धी व्यापार की निवृत्ति के हेतु का कथन</option>");
       $optgrp.append("<option value='157.html'><b>157</b> - ﻿दृष्टान्त द्वारा सहजतत्त्व की आराधना की विधि</option>");
       $optgrp.append("<option value='158.html'><b>158</b> - ﻿परमावश्यक अधिकार का उपसंहार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿शुद्धोपयोग अधिकार">')
       $optgrp.append("<option value='159.html'><b>159</b> - ﻿समस्त कर्म के प्रलय के हेतुभूत शुद्धोपयोग का अधिकार</option>");
       $optgrp.append("<option value='160.html'><b>160</b> - ﻿दृष्टान्त द्वारा केवलज्ञान और केवलदर्शन का युगपद् वर्तना</option>");
       $optgrp.append("<option value='161.html'><b>161</b> - ﻿आत्मा के स्व-पर प्रकाशकपने सम्बन्धी विरोध-कथन</option>");
       $optgrp.append("<option value='162.html'><b>162</b> - ﻿पूर्वपक्ष के सिद्धान्त सम्बन्धी कथन</option>");
       $optgrp.append("<option value='163.html'><b>163</b> - ﻿एकान्त से आत्मा को पर-प्रकाशकपना का खण्डन</option>");
       $optgrp.append("<option value='164.html'><b>164</b> - ﻿व्यवहारनय की सफलता</option>");
       $optgrp.append("<option value='165.html'><b>165</b> - ﻿निश्चयनय से स्वरूप का कथन</option>");
       $optgrp.append("<option value='166.html'><b>166</b> - ﻿शुद्धनिश्चयनय से पर-दर्शन का खण्डन</option>");
       $optgrp.append("<option value='167.html'><b>167</b> - ﻿केवलज्ञान का स्वरूप</option>");
       $optgrp.append("<option value='168.html'><b>168</b> - ﻿केवलदर्शन के अभाव में सर्वज्ञपना नहीं</option>");
       $optgrp.append("<option value='169.html'><b>169</b> - ﻿व्यवहारनय की प्रगटता</option>");
       $optgrp.append("<option value='170.html'><b>170</b> - ﻿'जीव ज्ञान-स्वरूप है' ऐसा वितर्क से कथन</option>");
       $optgrp.append("<option value='171.html'><b>171</b> - ﻿गुण-गुणी में भेद का अभाव होनेरूप स्वरूप का कथन</option>");
       $optgrp.append("<option value='172.html'><b>172</b> - ﻿सर्वज्ञ वीतराग को वांछा का अभाव</option>");
       $optgrp.append("<option value='173-174.html'><b>173-174</b> - ﻿वास्तव में ज्ञानी को बन्ध के अभाव</option>");
       $optgrp.append("<option value='175.html'><b>175</b> - ﻿केवली को मन-रहितपना</option>");
       $optgrp.append("<option value='176.html'><b>176</b> - ﻿शुद्ध जीव को स्वभावगति की प्राप्ति होने का उपाय</option>");
       $optgrp.append("<option value='177.html'><b>177</b> - ﻿कारण-परमतत्त्व का स्वरूप</option>");
       $optgrp.append("<option value='178.html'><b>178</b> - ﻿परमात्म तत्त्व निरुपाधि स्वरूप</option>");
       $optgrp.append("<option value='179.html'><b>179</b> - ﻿परमतत्त्व में सांसारिक विकारसमूह का अभाव</option>");
       $optgrp.append("<option value='180.html'><b>180</b> - ﻿परमतत्त्व का स्वरूप</option>");
       $optgrp.append("<option value='181.html'><b>181</b> - ﻿कर्म-रहित तथा विकल्प रहित परमतत्त्व</option>");
       $optgrp.append("<option value='182.html'><b>182</b> - ﻿सिद्ध के स्वभावगुण</option>");
       $optgrp.append("<option value='183.html'><b>183</b> - ﻿सिद्धि और सिद्ध के एकत्व का प्रतिपादन</option>");
       $optgrp.append("<option value='184.html'><b>184</b> - ﻿सिद्धक्षेत्र से ऊपर जीव-पुद्गलों के गमन का निषेध</option>");
       $optgrp.append("<option value='185.html'><b>185</b> - ﻿नियम शब्द का तथा उसके फल का उपसंहार</option>");
       $optgrp.append("<option value='186.html'><b>186</b> - ﻿भव्य को शिक्षा</option>");
       $optgrp.append("<option value='187.html'><b>187</b> - ﻿उपसंहार</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
