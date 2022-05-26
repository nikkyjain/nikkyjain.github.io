
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿आलापपद्धति का अर्थ</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿द्रव्यों के नाम</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿सत् का लक्षण</option>");
    $optgrp=$('<optgroup label="﻿गुणाधिकार">')
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿द्रव्‍यों के लक्षण कौन-कौन से हैं ? </option>");
       $optgrp.append("<option value='009.html'><b>009</b> - ﻿सामान्‍य गुणों के नाम</option>");
       $optgrp.append("<option value='010.html'><b>010</b> - ﻿प्रत्येक द्रव्य के सामान्य गुण</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿द्रव्यों के विशेष गुण</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿जीव और पुद्गल के विशेष गुण</option>");
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿धर्मादिक चार द्रव्‍यों के विशेष गुण</option>");
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿कुछ गुण सामान्य भी और विशेष भी, कैसे?</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पर्याय अधिकार">')
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿पर्याय और उसके भेद</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿अर्थ-पर्याय के भेद</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿स्वभाव अर्थ-पर्याय</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿जीव की विभाव अर्थ-पर्याय</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿जीव की विभाव द्रव्य व्यंजन पर्याय</option>");
       $optgrp.append("<option value='020.html'><b>020</b> - ﻿जीव की विभाव गुण व्यंजन पर्याय</option>");
       $optgrp.append("<option value='021.html'><b>021</b> - ﻿जीव की स्‍वभाव-द्रव्‍य-व्‍यंजनपर्याय</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿जीव की स्‍वभाव-गुण-व्‍यंजन-पर्याय</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿पुद्गल की विभाव-द्रव्‍य-व्‍यंजन-पर्याय</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿पुद्गल की विभाव-गुण-व्‍यंजनपर्याय</option>");
       $optgrp.append("<option value='025.html'><b>025</b> - ﻿पुद्गल की स्‍वभाव-द्रव्‍य-व्यंजन-पर्याय </option>");
       $optgrp.append("<option value='026.html'><b>026</b> - ﻿पुद्गल की स्‍वभाव-गुण-व्यंजन-पर्याय </option>");
       $optgrp.append("<option value='027.html'><b>027</b> - ﻿प्रकारान्‍तर से द्रव्‍य, गुण व पर्याय का लक्षण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿स्वभाव अधिकार">')
       $optgrp.append("<option value='028.html'><b>028</b> - ﻿द्रव्‍यों के सामान्‍य व विशेष स्‍वभावों का कथन</option>");
       $optgrp.append("<option value='029.html'><b>029</b> - ﻿जीव और पुद्गल के भावों की संख्‍या </option>");
       $optgrp.append("<option value='030.html'><b>030</b> - ﻿धर्मादि तीन द्रव्‍यों में स्‍वभावों की संख्‍या </option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿काल-द्रव्‍य में स्‍वभावों की संख्‍या</option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿प्रश्न</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿प्रमाण अधिकार">')
       $optgrp.append("<option value='033.html'><b>033</b> - ﻿उत्तर</option>");
       $optgrp.append("<option value='034.html'><b>034</b> - ﻿प्रमाण का लक्षण</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿प्रमाण के भेद</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿एकदेश प्रत्‍यक्ष कितने</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿सकल-प्रत्‍यक्ष कितने</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿परोक्ष कितने</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नय अधिकार">')
       $optgrp.append("<option value='039.html'><b>039</b> - ﻿नय की परिभाषा</option>");
       $optgrp.append("<option value='040.html'><b>040</b> - ﻿नय के भेद</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿नय के भेद</option>");
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿उपनयों का कथन</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿उपनय</option>");
       $optgrp.append("<option value='044.html'><b>044</b> - ﻿उपनय के भेद</option>");
       $optgrp.append("<option value='045.html'><b>045</b> - ﻿नयों और उपनयों के भेद</option>");
       $optgrp.append("<option value='046.html'><b>046</b> - ﻿द्रव्‍यार्थिक-नय के भेद</option>");
       $optgrp.append("<option value='047.html'><b>047</b> - ﻿कर्मोपाधिनिरपेक्ष शुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='048.html'><b>048</b> - ﻿(उत्‍पाद-व्‍यय गौण) सत्ताग्राहक शुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿भेद-कल्‍पना-निरपेक्ष शुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿कर्मोपाधि-सापेक्ष अशुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿उत्‍पादव्‍यय-सापेक्ष अशुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='052.html'><b>052</b> - ﻿भेदकल्‍पना-सापेक्ष अशुद्ध-द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='053.html'><b>053</b> - ﻿अन्‍वय-सापेक्ष द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿स्‍वद्रव्‍यादिग्राहक दव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='055.html'><b>055</b> - ﻿परद्रव्‍यादिग्राहक द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='056.html'><b>056</b> - ﻿परमभावग्राहक द्रव्‍यार्थिकनय</option>");
       $optgrp.append("<option value='057.html'><b>057</b> - ﻿पर्यायार्थिक नय के छ: भेद</option>");
       $optgrp.append("<option value='058.html'><b>058</b> - ﻿अनादि-नित्‍य पर्यायार्थिकनय</option>");
       $optgrp.append("<option value='059.html'><b>059</b> - ﻿सादि नित्‍यपर्यायार्थिकनय</option>");
       $optgrp.append("<option value='060.html'><b>060</b> - ﻿अनित्‍यशुद्ध पर्यायार्थिकनय</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿नित्‍य-अशुद्ध पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿नित्‍य-शुद्ध पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='063.html'><b>063</b> - ﻿अनित्‍य-अशुद्ध पर्यायार्थिकनय</option>");
       $optgrp.append("<option value='064.html'><b>064</b> - ﻿नैगमनय के प्रकार</option>");
       $optgrp.append("<option value='065.html'><b>065</b> - ﻿भूत नैगम-नय</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿भावि नैगम-नय</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿वर्तमान नैगम-नय</option>");
       $optgrp.append("<option value='068.html'><b>068</b> - ﻿संग्रह-नय के प्रकार</option>");
       $optgrp.append("<option value='069.html'><b>069</b> - ﻿सामान्‍य संग्रहनय</option>");
       $optgrp.append("<option value='070.html'><b>070</b> - ﻿विशेष संग्रहनय</option>");
       $optgrp.append("<option value='071.html'><b>071</b> - ﻿व्‍यवहारनय के प्रकार</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿विशेष-संग्रहभेदक व्‍यवहारनय</option>");
       $optgrp.append("<option value='072A.html'><b>072A</b> - ﻿सामान्‍य-संग्रहभेदक व्‍यवहार-नय</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿ऋजुसूत्रनय के प्रकार</option>");
       $optgrp.append("<option value='074.html'><b>074</b> - ﻿सूक्ष्‍म ऋजुसूत्रनय</option>");
       $optgrp.append("<option value='075.html'><b>075</b> - ﻿स्‍थूल ऋजुसूत्रनय</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿शब्‍द, समभिरूढ और एवंभूत नय</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿शब्‍द नय</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿समभिरूढ नय</option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿एवंभूत-नय</option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿उपनय के भेद</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿सद्भूत व्‍यवहारनय के प्रकार</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿शुद्ध-सद्भूत व्‍यवहारनय</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿अशुद्ध-सद्भूत-व्‍यवहारनय</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿असद्भूत-व्‍यवहारनय के प्रकार</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿स्‍वजाति-असद्भूत-व्‍यवहार-उपनय</option>");
       $optgrp.append("<option value='086.html'><b>086</b> - ﻿विजाति-असद्भूत-व्‍यवहार उपनय</option>");
       $optgrp.append("<option value='087.html'><b>087</b> - ﻿स्‍वजाति-विजाति-असद्भूत-व्‍यवहार उपनय</option>");
       $optgrp.append("<option value='088.html'><b>088</b> - ﻿उपचरित असद्भूत व्‍यवहारनय के प्रकार</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿स्‍वजात्‍युपचरितासद्भूत-व्‍यहार-उपनय</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿विजात्‍युपचरित-असद्भूत-व्‍यवहार उपनय</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿स्‍वजातिविजात्‍युपचरित-असद्भूतव्‍यवहार उपनय</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿गुण-व्युत्पत्ति अधिकार">')
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿गुण-पर्याय में अंतर</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿गुण</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿अस्तित्‍व गुण</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿वस्‍तुत्‍व गुण</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿द्रव्‍यत्‍व गुण</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿सत्</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿प्रमेयत्‍व गुण</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿अगुरूलघु गुण</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿प्रदेशत्‍व गुण</option>");
       $optgrp.append("<option value='101.html'><b>101</b> - ﻿चेतेनत्‍व</option>");
       $optgrp.append("<option value='102.html'><b>102</b> - ﻿अचेतनत्‍व</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿जीव स्यात् रूपी अरूपी</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿अमूर्तत्‍व</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पर्याय-व्युत्पत्ति अधिकार">')
       $optgrp.append("<option value='105.html'><b>105</b> - ﻿पर्याय</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿स्वभाव-व्युत्पत्ति अधिकार">')
       $optgrp.append("<option value='106.html'><b>106</b> - ﻿अस्ति-स्‍वभाव</option>");
       $optgrp.append("<option value='107.html'><b>107</b> - ﻿नास्ति-स्‍वभाव</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿नित्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿अनित्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿एक-स्‍वभाव</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿अनेक-स्‍वभाव</option>");
       $optgrp.append("<option value='112.html'><b>112</b> - ﻿भेद-स्‍वभाव</option>");
       $optgrp.append("<option value='113.html'><b>113</b> - ﻿अभेद-स्‍वभाव</option>");
       $optgrp.append("<option value='114.html'><b>114</b> - ﻿भव्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='115.html'><b>115</b> - ﻿अभव्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='116.html'><b>116</b> - ﻿परम-स्‍वभाव</option>");
       $optgrp.append("<option value='118.html'><b>118</b> - ﻿स्‍वभाव गुण नहीं</option>");
       $optgrp.append("<option value='119.html'><b>119</b> - ﻿गुण स्‍वभाव हैं</option>");
       $optgrp.append("<option value='120.html'><b>120</b> - ﻿गुण द्रव्‍य हैं</option>");
       $optgrp.append("<option value='121.html'><b>121</b> - ﻿विभाव</option>");
       $optgrp.append("<option value='122.html'><b>122</b> - ﻿शुद्ध-अशुद्ध स्‍वभाव</option>");
       $optgrp.append("<option value='123.html'><b>123</b> - ﻿उपचरित-स्‍वभाव</option>");
       $optgrp.append("<option value='124.html'><b>124</b> - ﻿उपचरित-स्‍वभाव के भेद</option>");
       $optgrp.append("<option value='125.html'><b>125</b> - ﻿अन्‍य द्रव्‍यों में भी उपचरित-स्‍वभाव</option>");
       $optgrp.append("<option value='126.html'><b>126</b> - ﻿प्रश्न</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿एकान्त-पक्ष दोष">')
       $optgrp.append("<option value='127.html'><b>127</b> - ﻿उत्तर</option>");
       $optgrp.append("<option value='128.html'><b>128</b> - ﻿सर्वथा असद्रूप मानने में दोष</option>");
       $optgrp.append("<option value='129.html'><b>129</b> - ﻿सर्वथा नित्‍य मानने में दोष</option>");
       $optgrp.append("<option value='130.html'><b>130</b> - ﻿सर्वथा अनित्‍य मानने में दोष</option>");
       $optgrp.append("<option value='131.html'><b>131</b> - ﻿सर्वथा एक में दोष</option>");
       $optgrp.append("<option value='132.html'><b>132</b> - ﻿सर्वथा अनेक में दोष</option>");
       $optgrp.append("<option value='133.html'><b>133</b> - ﻿सर्वथा भेद में दोष</option>");
       $optgrp.append("<option value='134.html'><b>134</b> - ﻿सर्वथा अभेद में दोष</option>");
       $optgrp.append("<option value='135.html'><b>135</b> - ﻿सर्वथा भव्‍य में दोष</option>");
       $optgrp.append("<option value='136.html'><b>136</b> - ﻿सर्वथा अभव्‍य में दोष</option>");
       $optgrp.append("<option value='137.html'><b>137</b> - ﻿सर्वथा स्‍वभाव में दोष</option>");
       $optgrp.append("<option value='138.html'><b>138</b> - ﻿सर्वथा विभाव में दोष</option>");
       $optgrp.append("<option value='139.html'><b>139</b> - ﻿सर्वथा चैतन्‍य में दोष</option>");
       $optgrp.append("<option value='140.html'><b>140</b> - ﻿सर्वथा में नियामकता दोषपूर्ण</option>");
       $optgrp.append("<option value='142.html'><b>142</b> - ﻿सर्वथा मूर्त में दोष</option>");
       $optgrp.append("<option value='143.html'><b>143</b> - ﻿सर्वथा अमूर्तिक में दोष</option>");
       $optgrp.append("<option value='144.html'><b>144</b> - ﻿सर्वथा एकप्रदेश में दोष</option>");
       $optgrp.append("<option value='145.html'><b>145</b> - ﻿सर्वथा अनेक प्रदेशत्‍व में दोष</option>");
       $optgrp.append("<option value='146.html'><b>146</b> - ﻿सर्वथा शुद्धस्‍वभाव में दोष</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿सर्वथा उपचरित-स्‍वभाव में दोष</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿सर्वथा अनुपचरित में दोष</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नय योजना">')
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿अस्तिस्‍वभाव</option>");
       $optgrp.append("<option value='151.html'><b>151</b> - ﻿नास्ति-स्‍वभाव</option>");
       $optgrp.append("<option value='152.html'><b>152</b> - ﻿नित्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='153.html'><b>153</b> - ﻿अनित्‍य-स्‍वभाव</option>");
       $optgrp.append("<option value='154.html'><b>154</b> - ﻿एक-स्‍वभाव</option>");
       $optgrp.append("<option value='155.html'><b>155</b> - ﻿अनेक-स्‍वभाव</option>");
       $optgrp.append("<option value='156.html'><b>156</b> - ﻿भेद-स्‍वभाव</option>");
       $optgrp.append("<option value='157.html'><b>157</b> - ﻿अभेद-स्‍वभाव</option>");
       $optgrp.append("<option value='158.html'><b>158</b> - ﻿पारिणामिक</option>");
       $optgrp.append("<option value='159.html'><b>159</b> - ﻿जीव का चेतन-स्‍वभाव</option>");
       $optgrp.append("<option value='160.html'><b>160</b> - ﻿पुद्गल का चेतन-स्‍वभाव</option>");
       $optgrp.append("<option value='161.html'><b>161</b> - ﻿पुद्गल का अचेतन-स्‍वभाव</option>");
       $optgrp.append("<option value='162.html'><b>162</b> - ﻿जीव में अचेतन-स्‍वभाव</option>");
       $optgrp.append("<option value='163.html'><b>163</b> - ﻿पुद्गल में मूर्त-स्‍वभाव</option>");
       $optgrp.append("<option value='164.html'><b>164</b> - ﻿जीव का मूर्त-स्‍वभाव</option>");
       $optgrp.append("<option value='165.html'><b>165</b> - ﻿द्रव्यों का अमूर्त-स्‍वभाव</option>");
       $optgrp.append("<option value='166.html'><b>166</b> - ﻿पुद्गल का अमूर्त-स्‍वभाव</option>");
       $optgrp.append("<option value='167.html'><b>167</b> - ﻿द्रव्यों का एकप्रदेश-स्‍वभाव</option>");
       $optgrp.append("<option value='168.html'><b>168</b> - ﻿द्रव्यों का एकप्रदेश-स्‍वभाव</option>");
       $optgrp.append("<option value='169.html'><b>169</b> - ﻿द्रव्यों का नानाप्रदेश-स्‍वभाव</option>");
       $optgrp.append("<option value='170.html'><b>170</b> - ﻿कालाणु के नानाप्रदेश-स्‍वभाव नहीं</option>");
       $optgrp.append("<option value='171.html'><b>171</b> - ﻿कालाणु के उपचरित-स्‍वभाव नहीं</option>");
       $optgrp.append("<option value='172.html'><b>172</b> - ﻿पुद्गल का अमूर्त-स्‍वभाव</option>");
       $optgrp.append("<option value='173.html'><b>173</b> - ﻿स्‍वभाव विभाव</option>");
       $optgrp.append("<option value='174.html'><b>174</b> - ﻿शुद्ध-स्‍वभाव</option>");
       $optgrp.append("<option value='175.html'><b>175</b> - ﻿अशुद्ध-स्‍वभाव</option>");
       $optgrp.append("<option value='176.html'><b>176</b> - ﻿उपचरित-स्‍वभाव</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿प्रमाण लक्षण">')
       $optgrp.append("<option value='177.html'><b>177</b> - ﻿प्रमाण</option>");
       $optgrp.append("<option value='178.html'><b>178</b> - ﻿प्रमाण के प्रकार</option>");
       $optgrp.append("<option value='179.html'><b>179</b> - ﻿सविकल्‍प ज्ञान और उसके प्रकार</option>");
       $optgrp.append("<option value='180.html'><b>180</b> - ﻿निर्विकल्‍प-ज्ञान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नय का स्वरूप और भेद">')
       $optgrp.append("<option value='181.html'><b>181</b> - ﻿नय की परिभाषा</option>");
       $optgrp.append("<option value='182.html'><b>182</b> - ﻿नय के प्रकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निक्षेप की व्युत्पत्ति">')
       $optgrp.append("<option value='183.html'><b>183</b> - ﻿निक्षेप और उसके प्रकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नय भेद व्युत्पत्ति">')
       $optgrp.append("<option value='184.html'><b>184</b> - ﻿द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='185.html'><b>185</b> - ﻿शुद्ध-द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='186.html'><b>186</b> - ﻿अशुद्ध-द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='187.html'><b>187</b> - ﻿अन्‍वय-द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='188.html'><b>188</b> - ﻿स्‍वद्रव्‍यादिग्राहक द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='189.html'><b>189</b> - ﻿परद्रव्‍यादिग्राहक द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='190.html'><b>190</b> - ﻿परमभाव-ग्राहक द्रव्‍यार्थिक-नय</option>");
       $optgrp.append("<option value='191.html'><b>191</b> - ﻿पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='192.html'><b>192</b> - ﻿अनादि-नित्‍य पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='193.html'><b>193</b> - ﻿सादि-नित्‍य पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='194.html'><b>194</b> - ﻿शुद्ध पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='195.html'><b>195</b> - ﻿अशुद्ध पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='196.html'><b>196</b> - ﻿नैगम-नय</option>");
       $optgrp.append("<option value='197.html'><b>197</b> - ﻿संग्रह-नय</option>");
       $optgrp.append("<option value='198.html'><b>198</b> - ﻿व्‍यवहार-नय</option>");
       $optgrp.append("<option value='199.html'><b>199</b> - ﻿ऋजुसूत्र-नय</option>");
       $optgrp.append("<option value='200.html'><b>200</b> - ﻿शब्‍द-नय</option>");
       $optgrp.append("<option value='201.html'><b>201</b> - ﻿समभिरूढ-नय</option>");
       $optgrp.append("<option value='202.html'><b>202</b> - ﻿एवंभूत-नय</option>");
       $optgrp.append("<option value='204.html'><b>204</b> - ﻿निश्‍चय-नय</option>");
       $optgrp.append("<option value='205.html'><b>205</b> - ﻿व्‍यवहार-नय</option>");
       $optgrp.append("<option value='206.html'><b>206</b> - ﻿सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='207.html'><b>207</b> - ﻿असद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='208.html'><b>208</b> - ﻿उपचरित-असद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='209.html'><b>209</b> - ﻿सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='210.html'><b>210</b> - ﻿असद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='211.html'><b>211</b> - ﻿उपचार पृथक् नय नहीं</option>");
       $optgrp.append("<option value='212.html'><b>212</b> - ﻿उपचार कब ?</option>");
       $optgrp.append("<option value='213.html'><b>213</b> - ﻿सम्‍बन्‍ध के प्रकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अध्यात्म-नय">')
       $optgrp.append("<option value='216.html'><b>216</b> - ﻿विषय</option>");
       $optgrp.append("<option value='217.html'><b>217</b> - ﻿निश्‍चय-नय के प्रकार</option>");
       $optgrp.append("<option value='218.html'><b>218</b> - ﻿शुद्धनिश्‍चय-नय</option>");
       $optgrp.append("<option value='219.html'><b>219</b> - ﻿अशुद्ध निश्‍चय-नय</option>");
       $optgrp.append("<option value='220.html'><b>220</b> - ﻿व्‍यवहारनय के प्रकार</option>");
       $optgrp.append("<option value='221.html'><b>221</b> - ﻿सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='222.html'><b>222</b> - ﻿असद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='223.html'><b>223</b> - ﻿सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='224.html'><b>224</b> - ﻿उपचरित सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='225.html'><b>225</b> - ﻿अनुपचरित सद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='226.html'><b>226</b> - ﻿असद्भूत व्‍यवहार-नय के प्रकार</option>");
       $optgrp.append("<option value='227.html'><b>227</b> - ﻿उपचरितासद्भूत व्‍यवहार-नय</option>");
       $optgrp.append("<option value='228.html'><b>228</b> - ﻿अनुपचरितासद्भूत व्‍यवहार-नय</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
