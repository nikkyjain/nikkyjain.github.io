
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
        $('#teeka2').toggle();
        $('.teeka2').css('color', 'red')
    })
$( document ).ready(function() {
  mySel=$('select#select-native-0')
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿सिद्धों को नमस्कार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पीठिका">')
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿स्वसमय और परसमय का लक्षण </option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿'समय' की सुन्दरता</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿एकत्व की दुर्लभता</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आचार्य की प्रतिज्ञा</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿शुद्धात्मा का स्वरूप</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿ज्ञानी आत्मा शुद्ध ज्ञायक है</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿व्यवहार की आवश्यकता</option>");
       $optgrp.append("<option value='009-010.html'><b>009-010</b> - ﻿श्रुतकेवली</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नव-पदार्थ अधिकार">')
       $optgrp.append("<option value='013.html'><b>011</b> - ﻿निश्चयनय भूतार्थ है और व्यवहार नय अभूतार्थ है</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीव अधिकार">')
       $optgrp.append("<option value='014.html'><b>012</b> - ﻿व्यवहार नय भी प्रयोजनवान है</option>");
       $optgrp.append("<option value='015.html'><b>013</b> - ﻿शुद्धनय से जानना सम्यक्त्व है</option>");
       $optgrp.append("<option value='016.html'><b>014</b> - ﻿शुद्धनय का लक्षण</option>");
       $optgrp.append("<option value='017.html'><b>015</b> - ﻿जो आत्मा को देखता है वही जिनशासन को जानता है</option>");
       $optgrp.append("<option value='019.html'><b>016</b> - ﻿रत्नत्रय ही आत्मा है</option>");
       $optgrp.append("<option value='020-021.html'><b>017-018</b> - ﻿रत्नत्रय के सेवन का क्रम</option>");
       $optgrp.append("<option value='022.html'><b>019</b> - ﻿आत्मा कब तक अज्ञानी रहता है?</option>");
       $optgrp.append("<option value='025-026-027.html'><b>020-021-022</b> - ﻿अप्रतिबुद्ध - पर पदार्थ में अहंकार / ममकार</option>");
       $optgrp.append("<option value='028-029-030.html'><b>023-024-025</b> - ﻿पर पदार्थ को जीव का कहना ठीक नहीं - तर्क</option>");
       $optgrp.append("<option value='031.html'><b>026</b> - ﻿प्रश्न - आत्मा-शरीर एक नहीं तो शरीराश्रित स्तुति कैसे ? </option>");
       $optgrp.append("<option value='032.html'><b>027</b> - ﻿व्यवहार से जीव और शरीर एक, निश्चय से नहीं </option>");
       $optgrp.append("<option value='033-034.html'><b>028-029</b> - ﻿व्यवहार स्तुति निश्चय स्तुति नहीं</option>");
       $optgrp.append("<option value='035.html'><b>030</b> - ﻿दृष्टांत - नगर का वर्णन राजा का वर्णन नहीं</option>");
       $optgrp.append("<option value='036.html'><b>031</b> - ﻿निश्चय स्तुति - जितेन्द्रिय</option>");
       $optgrp.append("<option value='037.html'><b>032</b> - ﻿निश्चय स्तुति - जितमोह</option>");
       $optgrp.append("<option value='038.html'><b>033</b> - ﻿निश्चय स्तुति - क्षीणमोह</option>");
       $optgrp.append("<option value='039-040.html'><b>034-035</b> - ﻿प्रतिबुद्ध द्वारा परभावों का त्याग - प्रत्याख्यान</option>");
       $optgrp.append("<option value='041.html'><b>036</b> - ﻿मोह से निर्मम</option>");
       $optgrp.append("<option value='042.html'><b>037</b> - ﻿धर्मादि ज्ञेय पदार्थ से निर्मम</option>");
       $optgrp.append("<option value='043.html'><b>038</b> - ﻿मैं एक शुद्ध दर्शन-ज्ञानमयी</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव अधिकार">')
       $optgrp.append("<option value='044-048.html'><b>039-043</b> - ﻿जीव-अजीव में एकता - मिथ्या-मत</option>");
       $optgrp.append("<option value='049.html'><b>044</b> - ﻿जीव-अजीव में भिन्नता - मिथ्या-मत खण्डन</option>");
       $optgrp.append("<option value='050.html'><b>045</b> - ﻿आठों कर्मों का फल -- अध्यवसान</option>");
       $optgrp.append("<option value='051.html'><b>046</b> - ﻿अध्यवसान-भाव जीव है - व्यवहार  </option>");
       $optgrp.append("<option value='052-053.html'><b>047-048</b> - ﻿इस व्यवहार को दृष्टांत द्वारा समझाते हैं</option>");
       $optgrp.append("<option value='054.html'><b>049</b> - ﻿शुद्ध जीव कैसा होता है?</option>");
       $optgrp.append("<option value='055-060.html'><b>050-055</b> - ﻿शुद्ध जीव कैसा नहीं होता है?</option>");
       $optgrp.append("<option value='061.html'><b>056</b> - ﻿व्यवहार से वर्णादि भाव जीव के, निश्चय से नहीं</option>");
       $optgrp.append("<option value='062.html'><b>057</b> - ﻿जीव का वर्णादि के साथ संयोग सम्बन्ध</option>");
       $optgrp.append("<option value='063-064-065.html'><b>058-059-060</b> - ﻿दृष्टांत द्वारा सम्बन्ध को बतलाते हैं</option>");
       $optgrp.append("<option value='066.html'><b>061</b> - ﻿वर्णादि भाव के साथ जीव का तादात्म्य नहीं</option>");
       $optgrp.append("<option value='067.html'><b>062</b> - ﻿जीव का वर्णादि से तादात्म्य में दोष</option>");
       $optgrp.append("<option value='068-069.html'><b>063-064</b> - ﻿संसार अवस्था में जीव के वर्णादि से तादात्म्य में दोष</option>");
       $optgrp.append("<option value='070-071.html'><b>065-066</b> - ﻿अत: नाम-कर्म का उदय जीव नहीं है</option>");
       $optgrp.append("<option value='072.html'><b>067</b> - ﻿देह को जीव कहना व्यवहार</option>");
       $optgrp.append("<option value='073.html'><b>068</b> - ﻿अन्तरंग गुणस्थानादि भी जीव नहीं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कर्त्ता-कर्म अधिकार">')
       $optgrp.append("<option value='074-075.html'><b>069-070</b> - ﻿आस्रव और जीव का भेद ना जानना - अप्रतिबुद्ध / अज्ञानी</option>");
       $optgrp.append("<option value='076.html'><b>071</b> - ﻿अब कर्त्ता-कर्म रूप प्रवृत्ति की निवृत्ति किस प्रकार होती है उसे कहते हैं --</option>");
       $optgrp.append("<option value='077.html'><b>072</b> - ﻿ज्ञानी निर्बंध कैसे होता है ?</option>");
       $optgrp.append("<option value='078.html'><b>073</b> - ﻿आस्रवों से निवृत्ति का उपाय  </option>");
       $optgrp.append("<option value='079.html'><b>074</b> - ﻿ज्ञान और आस्रवों से निवृत्ति का एक काल  </option>");
       $optgrp.append("<option value='080.html'><b>075</b> - ﻿ज्ञानी की पहचान</option>");
       $optgrp.append("<option value='082.html'><b>076</b> - ﻿कर्मों को जानते हुए इस जीव का पुद्गल के साथ अतादात्म्य</option>");
       $optgrp.append("<option value='083.html'><b>077</b> - ﻿कर्मोदय के साथ अतादात्म्य</option>");
       $optgrp.append("<option value='084.html'><b>078</b> - ﻿ज्ञानी के कर्म-फल में कर्ता-कर्म भाव नहीं</option>");
       $optgrp.append("<option value='085.html'><b>079</b> - ﻿पुद्गल का भी जीव के साथ कर्ता-कर्मभाव नहीं</option>");
       $optgrp.append("<option value='086-088.html'><b>080-082</b> - ﻿जीव-पुद्गल के निमित्त-नैमित्तिक संबंध होने पर भी कर्ता-कर्म का अभाव</option>");
       $optgrp.append("<option value='089.html'><b>083</b> - ﻿जीव का कर्तृत्व और भोक्तृत्व अपने परिणामों के साथ ही</option>");
       $optgrp.append("<option value='090.html'><b>084</b> - ﻿लोक-व्यवहार ऐसा होता है</option>");
       $optgrp.append("<option value='091.html'><b>085</b> - ﻿द्विक्रियावादियों की मान्यता दूषित</option>");
       $optgrp.append("<option value='092.html'><b>086</b> - ﻿द्विक्रियावादी मिथ्यादृष्टि क्यों ?</option>");
       $optgrp.append("<option value='094.html'><b>087</b> - ﻿शुद्ध-चैतन्य स्वभावी जीव में मिथ्या-दर्शनादि विकारी भाव कैसे ?</option>");
       $optgrp.append("<option value='095.html'><b>088</b> - ﻿मिथ्यात्वादिक जीव अजीव कहे हैं वे कौन हैं ?</option>");
       $optgrp.append("<option value='096.html'><b>089</b> - ﻿आत्म-भावों का कर्त्ता आत्मा और द्रव्य-कर्मादिमय पर-भावों का कर्ता पुद्गल</option>");
       $optgrp.append("<option value='097.html'><b>090</b> - ﻿आत्मा के तीन-विकारी परिणामों का कर्त्तापना है</option>");
       $optgrp.append("<option value='098.html'><b>091</b> - ﻿कर्म-वर्गणा योग्य पुद्गल-द्रव्य अपने उपादान से कर्म-रूप में परिणत होता है</option>");
       $optgrp.append("<option value='099.html'><b>092</b> - ﻿वीतराग-स्वसंवेदन-ज्ञान के नहीं होने से नूतन कर्म बंध</option>");
       $optgrp.append("<option value='100.html'><b>093</b> - ﻿ज्ञान से कर्मों का बंध नहीं होता</option>");
       $optgrp.append("<option value='101-102.html'><b>094-095</b> - ﻿अज्ञान से ही नूतन कर्मों का बंध क्यों ?</option>");
       $optgrp.append("<option value='103.html'><b>096</b> - ﻿कर्तृत्व का मूल कारण अज्ञान</option>");
       $optgrp.append("<option value='104.html'><b>097</b> - ﻿सम्यग्ज्ञान होने पर कर्ता-कर्म भाव नष्ट</option>");
       $optgrp.append("<option value='105-107.html'><b>098-100</b> - ﻿पर-भावों को भी आत्मा करता है -- व्यवहारियों का मोह</option>");
       $optgrp.append("<option value='108.html'><b>101</b> - ﻿ज्ञानी परभाव का अकर्ता, ज्ञान का ही कर्ता</option>");
       $optgrp.append("<option value='109.html'><b>102</b> - ﻿अज्ञानी भी पर-द्रव्य के भाव का अकर्ता</option>");
       $optgrp.append("<option value='110.html'><b>103</b> - ﻿किसी के द्वारा परभाव किया जाना अशक्य</option>");
       $optgrp.append("<option value='111.html'><b>104</b> - ﻿आत्मा पुद्गल-कर्मों का अकर्ता क्यों ?</option>");
       $optgrp.append("<option value='112-113.html'><b>105-106</b> - ﻿'आत्मा द्रव्य-कर्मों का कर्त्ता है' यह उपचार मात्र है</option>");
       $optgrp.append("<option value='114-115.html'><b>107-108</b> - ﻿आत्मा पुद्गल कर्म का कर्त्ता-भोक्ता -- व्यवहार </option>");
       $optgrp.append("<option value='116-119.html'><b>109-112</b> - ﻿पुद्गल के कथंचित परिणामी स्वभाव-पना</option>");
       $optgrp.append("<option value='120-122.html'><b>113-115</b> - ﻿जीव और क्रोधादि प्रत्ययों का एकत्व नहीं</option>");
       $optgrp.append("<option value='123-125.html'><b>116-120</b> - ﻿पुद्गल के कथंचित परिणामी स्वभावपना</option>");
       $optgrp.append("<option value='126-130.html'><b>121-125</b> - ﻿जीव-द्रव्य में कथंचित परिणामित्व</option>");
       $optgrp.append("<option value='134.html'><b>126</b> - ﻿ज्ञानी और अज्ञानी के कर्तापन</option>");
       $optgrp.append("<option value='135.html'><b>127</b> - ﻿ज्ञानमय या अज्ञानमय भाव से क्या होता है?</option>");
       $optgrp.append("<option value='136-137.html'><b>128-129</b> - ﻿ज्ञानी के ज्ञानमय और अज्ञानी के अज्ञानमय ही भाव कैसे ?</option>");
       $optgrp.append("<option value='138-139.html'><b>130-131</b> - ﻿दृष्टांत</option>");
       $optgrp.append("<option value='140-144.html'><b>132-136</b> - ﻿अज्ञानी अज्ञान-मय भावों द्वारा आगामी भाव-कर्म को प्राप्त होता है</option>");
       $optgrp.append("<option value='145-147.html'><b>137-140</b> - ﻿जीव का परिणाम पुद्गल-द्रव्य से पृथक् ही है</option>");
       $optgrp.append("<option value='148.html'><b>141</b> - ﻿आत्मा में कर्म बद्धस्पृष्ट है कि अबद्धस्पृष्ट ?</option>");
       $optgrp.append("<option value='149.html'><b>142</b> - ﻿नयविभाग जानने से क्या होता है ?</option>");
       $optgrp.append("<option value='150.html'><b>143</b> - ﻿पक्षातिक्रान्त ज्ञानी का क्या स्वरूप है ?</option>");
       $optgrp.append("<option value='151.html'><b>144</b> - ﻿पक्ष से दूरवर्ती ही समयसार है</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुण्य-पाप अधिकार">')
       $optgrp.append("<option value='152.html'><b>145</b> - ﻿शुभाशुभ कर्म के स्वभाव का वर्णन</option>");
       $optgrp.append("<option value='153.html'><b>146</b> - ﻿शुभ-अशुभ दोनों अविशेषता से बंध के कारण</option>");
       $optgrp.append("<option value='154.html'><b>147</b> - ﻿शुभ-अशुभ दोनों ही कर्मों का निषेध</option>");
       $optgrp.append("<option value='155-156.html'><b>148-149</b> - ﻿दोनों कर्मों के निषेध का दृष्टान्त</option>");
       $optgrp.append("<option value='157.html'><b>150</b> - ﻿दोनों ही प्रकार के कर्म बंध के कारण होने से निषेध्य</option>");
       $optgrp.append("<option value='158.html'><b>151</b> - ﻿अब ज्ञान को मोक्षका कारण सिद्ध करते हैं --</option>");
       $optgrp.append("<option value='159-160.html'><b>152-153</b> - ﻿उस ज्ञान की विधि</option>");
       $optgrp.append("<option value='161.html'><b>154</b> - ﻿पुण्यकर्म के पक्षपाती को प्रतिबोधन</option>");
       $optgrp.append("<option value='162.html'><b>155</b> - ﻿परमार्थस्वरूप मोक्ष का कारण दिखलाते हैं</option>");
       $optgrp.append("<option value='163.html'><b>156</b> - ﻿परमार्थरूप मोक्ष के कारण से भिन्न कर्म का निषेध</option>");
       $optgrp.append("<option value='164-166.html'><b>157-159</b> - ﻿मोक्ष के कारणभूत दर्शन, ज्ञान और चारित्र का आच्छादक कर्म</option>");
       $optgrp.append("<option value='167.html'><b>160</b> - ﻿कर्म स्वयमेव बंध है</option>");
       $optgrp.append("<option value='168-170.html'><b>161-163</b> - ﻿कर्म का मोक्ष-हेतु-तिरोधायीपना</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आस्रव अधिकार">')
       $optgrp.append("<option value='171-172.html'><b>164-165</b> - ﻿आस्रव का स्वरूप</option>");
       $optgrp.append("<option value='173.html'><b>166</b> - ﻿ज्ञानी के उन आस्रवों का अभाव</option>");
       $optgrp.append("<option value='174.html'><b>167</b> - ﻿राग, द्वेष, मोह भावों के ही आस्रवपना</option>");
       $optgrp.append("<option value='175.html'><b>168</b> - ﻿रागादिक से न मिले ज्ञानमय भाव संभव</option>");
       $optgrp.append("<option value='176.html'><b>169</b> - ﻿ज्ञानी के द्रव्यास्रव का अभाव</option>");
       $optgrp.append("<option value='177-178.html'><b>170-171</b> - ﻿ज्ञानी निरास्रव किस तरह ? उत्तर</option>");
       $optgrp.append("<option value='179.html'><b>172</b> - ﻿ज्ञान-गुण के जघन्य-भाव परिणमन के रहते ज्ञानी निरास्रव कैसे</option>");
       $optgrp.append("<option value='180-183.html'><b>173-176</b> - ﻿सभी द्रव्यास्रव की संतति के रहने पर भी ज्ञानी नित्य ही निरास्रव कैसे</option>");
       $optgrp.append("<option value='184-185.html'><b>177-178</b> - ﻿ज्ञानी के राग-द्वेष-मोह नहीं अत: नवीन कर्मों का बंध नहीं</option>");
       $optgrp.append("<option value='186-187.html'><b>179-180</b> - ﻿इसी का समर्थन दृष्टांत पूर्वक</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर अधिकार">')
       $optgrp.append("<option value='188-190.html'><b>181-183</b> - ﻿भेद-विज्ञान की अभिवन्दना</option>");
       $optgrp.append("<option value='191-192.html'><b>184-185</b> - ﻿भेद-विज्ञान से ही शुद्धात्मा की प्राप्ति</option>");
       $optgrp.append("<option value='193.html'><b>186</b> - ﻿शुद्ध आत्मा की प्राप्ति से ही संवर</option>");
       $optgrp.append("<option value='194-196.html'><b>187-189</b> - ﻿संवर इस तरह से होता है</option>");
       $optgrp.append("<option value='199-201.html'><b>190-192</b> - ﻿संवर के क्रम का व्याख्यान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा अधिकार">')
       $optgrp.append("<option value='202.html'><b>193</b> - ﻿द्रव्य-निर्जरा का स्वरूप</option>");
       $optgrp.append("<option value='203.html'><b>194</b> - ﻿भाव-निर्जरा का भी स्वरूप</option>");
       $optgrp.append("<option value='204-205.html'><b>195-196</b> - ﻿ज्ञान-शक्ति का वर्णन</option>");
       $optgrp.append("<option value='206.html'><b>197</b> - ﻿दृष्टांत</option>");
       $optgrp.append("<option value='207.html'><b>199</b> - ﻿अब कहते हैं कि सम्यग्दृष्टि अपने को और पर को विशेषरूप से इस प्रकार जानता है --</option>");
       $optgrp.append("<option value='209.html'><b>200</b> - ﻿औपाधिक भावों की परभावता जानने का फल</option>");
       $optgrp.append("<option value='210.html'><b>198</b> - ﻿सम्यग्दृष्टि अपने और पर के स्वभाव का ज्ञाता होता है</option>");
       $optgrp.append("<option value='211-212.html'><b>201-202</b> - ﻿सम्यग्दृष्टि रागी कैसे नहीं होता? यदि ऐसा पूछें तो सुनिये --</option>");
       $optgrp.append("<option value='213.html'><b>216</b> - ﻿ज्ञानी अनागत कर्मोदय के उपभोग की वांछा क्यों नहीं करता ?</option>");
       $optgrp.append("<option value='214.html'><b>217</b> - ﻿इसका विस्तार करते हैं --</option>");
       $optgrp.append("<option value='215.html'><b>208</b> - ﻿मिथ्यात्वादि अपध्यान मेरा परिग्रह नहीं</option>");
       $optgrp.append("<option value='216.html'><b>203</b> - ﻿वह परमात्म-पद क्या है ? इसका समाधान आचार्य करते हैं --</option>");
       $optgrp.append("<option value='217.html'><b>207</b> - ﻿अब पूछते हैं कि ज्ञानी पर-द्रव्य को क्यों नहीं ग्रहण करता ? उत्तर --</option>");
       $optgrp.append("<option value='219.html'><b>206</b> - ﻿और क्या ?</option>");
       $optgrp.append("<option value='220.html'><b>204</b> - ﻿मत्यादि ज्ञान विशेष एक ज्ञान सामान्य के ही रूप</option>");
       $optgrp.append("<option value='222-227.html'><b>210-214</b> - ﻿इच्छा ही परिग्रह, जिसको इच्छा नहीं उसको परिग्रह नहीं</option>");
       $optgrp.append("<option value='228.html'><b>215</b> - ﻿ज्ञानी के भोग का उदय वियोग बुद्धि पूर्वक, आगे भोगों की इच्छा नहीं   </option>");
       $optgrp.append("<option value='229-230.html'><b>218-219</b> - ﻿ज्ञानी के अलिप्तता के कारण कर्म-बन्ध नहीं, और अज्ञानी के लिप्तता के कारण कर्म बन्ध</option>");
       $optgrp.append("<option value='234-238.html'><b>220-223</b> - ﻿अब ज्ञानी के कर्म-बंध नहीं होता, उसे शंख के दृष्टांत से बतलाते हैं -- </option>");
       $optgrp.append("<option value='239-242.html'><b>224-227</b> - ﻿सराग-वीतराग परिणाम से बंध-मोक्ष</option>");
       $optgrp.append("<option value='243.html'><b>228</b> - ﻿सम्यक्त्वी भय-रहित होता है </option>");
       $optgrp.append("<option value='244.html'><b>229</b> - ﻿नि:शंकित अंग का स्वरूप</option>");
       $optgrp.append("<option value='245.html'><b>230</b> - ﻿नि:कांक्षित अंग का स्वरूप</option>");
       $optgrp.append("<option value='246-247.html'><b>231-232</b> - ﻿निर्वचिकित्सा व अमूढदृष्टि अंग का स्वरूप</option>");
       $optgrp.append("<option value='248-249.html'><b>233-234</b> - ﻿उपगूहन और स्थितिकरण अंग का स्वरूप</option>");
       $optgrp.append("<option value='250-251.html'><b>235-236</b> - ﻿वात्सल्य और प्रभावना अंग का धारी सम्यग्दृष्टि का वर्णन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध अधिकार">')
       $optgrp.append("<option value='252-256.html'><b>237-241</b> - ﻿मिथ्या-ज्ञान श्रंगार-सहित प्रवेश कर रहा है</option>");
       $optgrp.append("<option value='257-261.html'><b>242-246</b> - ﻿आगे वीतराग सम्यग्दृष्टि जीव के कर्म-बंध नहीं होता है, ऐसा पांच गाथाओं से बतलाते हैं --</option>");
       $optgrp.append("<option value='262-264.html'><b>247-252</b> - ﻿हिंस्य-हिंसकभाव रूप परिणमन अज्ञानी का लक्षण ज्ञानी का नहीं</option>");
       $optgrp.append("<option value='265-268.html'><b>253-256</b> - ﻿सुख और दु:ख भी निश्चय से अपने ही कर्मों के उदय से होते हैं</option>");
       $optgrp.append("<option value='269-270.html'><b>257-258</b> - ﻿दूसरे को जिला, मार, सुखी कर सकना ऐसी मान्यता बहिरात्मपना</option>");
       $optgrp.append("<option value='271-273.html'><b>259-261</b> - ﻿पूर्व के दो सूत्र में कहा हुआ मिथ्याज्ञानरूपी भाव मिथ्यादृष्टि के बंध का कारण होता है</option>");
       $optgrp.append("<option value='274.html'><b>262</b> - ﻿अध्यवसान से ही बंध प्राणियों को मारने अथवा न मारने से नहीं</option>");
       $optgrp.append("<option value='275-276.html'><b>263-264</b> - ﻿अध्यवसाय ही पाप-पुण्य के बन्ध का कारण हैं, ऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='277.html'><b>265</b> - ﻿रागादिक-रूप परिणाम बंध का कारण होते हैं, बाह्य वस्तु नहीं</option>");
       $optgrp.append("<option value='278-279.html'><b>266-267</b> - ﻿'मैं जीवों को सुखी-दुखी, बांधता-मुक्त करता हूँ', यह मानना मूढ़ता है</option>");
       $optgrp.append("<option value='285-286.html'><b>268-269</b> - ﻿अध्यवसान से मोहित ही पर-द्रव्य से एकत्व करता है </option>");
       $optgrp.append("<option value='287.html'><b>270</b> - ﻿तपोधन मोह भाव रहित </option>");
       $optgrp.append("<option value='289.html'><b>271</b> - ﻿अध्यवसान के पर्यायवाची </option>");
       $optgrp.append("<option value='290.html'><b>272</b> - ﻿निश्चयनय के द्वारा व्यवहार विकल्पों का निषेध</option>");
       $optgrp.append("<option value='291-293.html'><b>273-275</b> - ﻿अभव्य जीव के अपने मिथ्या अभिप्राय के कारण सिद्धि नहीं </option>");
       $optgrp.append("<option value='294-295.html'><b>276-277</b> - ﻿व्यवहार-नय व निश्चय-नय का स्वरूप</option>");
       $optgrp.append("<option value='296-297.html'><b>286-287</b> - ﻿ज्ञानी के आहारकृत बन्ध नहीं</option>");
       $optgrp.append("<option value='300-301.html'><b>278-279</b> - ﻿रागादि विकारी भाव कैसे बनते है ?</option>");
       $optgrp.append("<option value='302.html'><b>280</b> - ﻿ज्ञानी जीव आस्रव का कर्त्ता नहीं होता</option>");
       $optgrp.append("<option value='303-304.html'><b>281-282</b> - ﻿ज्ञानी के कर्म के उदय से राग द्वेष</option>");
       $optgrp.append("<option value='305-307.html'><b>283-285</b> - ﻿ज्ञानी रागादि का अकर्ता कैसे ?</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष अधिकार">')
       $optgrp.append("<option value='308-310.html'><b>288-290</b> - ﻿विशिष्ट भेद-ज्ञान के बल से बन्ध और आत्मा को पृथक् करना मोक्ष</option>");
       $optgrp.append("<option value='311-315.html'><b>291-293</b> - ﻿इसी को और स्पष्ट करते हैं</option>");
       $optgrp.append("<option value='316.html'><b>294</b> - ﻿आत्मा और बन्ध को भिन्न कैसे किया जाए ?</option>");
       $optgrp.append("<option value='317-319.html'><b>295-297</b> - ﻿आत्मा और बन्ध के प्रथक्-करण कब होता है ?</option>");
       $optgrp.append("<option value='320-322.html'><b>298-299</b> - ﻿भेद-भावना -- मैं बस जानने देखने देखने वाला </option>");
       $optgrp.append("<option value='323.html'><b>300</b> - ﻿शुद्धात्मा मात्र ज्ञाता, पर भाव मेरे नहीं </option>");
       $optgrp.append("<option value='324-326.html'><b>301-303</b> - ﻿पर भावों को अपना मानने से बन्ध और वीतरागता से मुक्ति</option>");
       $optgrp.append("<option value='327.html'><b>304-305</b> - ﻿अपराध शब्द का अर्थ</option>");
       $optgrp.append("<option value='328-329.html'><b>306-307</b> - ﻿परमार्थ से प्रतिक्रमण विष-कुम्भ, अप्रतिक्रमण अमृत-कुम्भ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सर्व-विशुद्ध अधिकार">')
       $optgrp.append("<option value='330-333.html'><b>308-311</b> - ﻿अब यहाँ कहते हैं कि निश्चय से यह जीव कर्मों का कर्त्ता नहीं है --</option>");
       $optgrp.append("<option value='334-335.html'><b>312-313</b> - ﻿ज्ञानावरणादि कर्म-प्रकृतियों का आत्मा के साथ जो बंध है, वह अज्ञान का ही महात्म्य है, ऐसा बताते हैं --</option>");
       $optgrp.append("<option value='336-337.html'><b>314-315</b> - ﻿जब तक कर्मोदय से होने वाले रागादि-भाव को नहीं छोडे तब तक अज्ञानी अन्यथा ज्ञानी</option>");
       $optgrp.append("<option value='338.html'><b>316</b> - ﻿कर्म-फल को भोगते रहना जीव का स्वभाव नहीं, अज्ञान भाव</option>");
       $optgrp.append("<option value='340-341.html'><b>317-318</b> - ﻿अब यहाँ बताते हैं कि अज्ञानी जीव नियम से कर्मों का वेदक ही होता है --</option>");
       $optgrp.append("<option value='342-343.html'><b>319-320</b> - ﻿अब इसी कर्तृत्व व भोक्तृत्व के अभाव का दृष्टांत पूर्वक समर्थन करते हैं --</option>");
       $optgrp.append("<option value='344-346.html'><b>321-323</b> - ﻿अब यहाँ बताते हैं कि जो एकान्त से आत्मा को कर्ता मानते हैं उनके भी अज्ञानी लोगों के समान मोक्ष नहीं है ऐसा उपदेश करते हैं --</option>");
       $optgrp.append("<option value='347-350.html'><b>324-327</b> - ﻿अब पूर्व-पक्ष के उत्तर में कथन करते हैं कि निश्चय से आत्मा का पुदगलद्रव्य के साथ में कर्त्ता-कर्म सम्बन्ध नहीं है, तब आत्मा कैसे कर्त्ता बनता है ?</option>");
       $optgrp.append("<option value='351-354.html'><b>345-348</b> - ﻿जो करता है वही भोगता है -- द्रव्यार्थिक-नय और अन्य ही कर्ता है और अन्य ही भोगता -- पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='355-359.html'><b>328-331</b> - ﻿भाव-कर्म का कर्त्ता जीव ही है</option>");
       $optgrp.append("<option value='360-372.html'><b>332-344</b> - ﻿आत्मा सर्वथा अकर्ता नहीं है, कथंचित् कर्त्ता भी है</option>");
       $optgrp.append("<option value='373-378.html'><b>366-371</b> - ﻿सम्यग्दृष्टियों को विषयों के प्रति राग क्यों नहीं होता</option>");
       $optgrp.append("<option value='379.html'><b>372</b> - ﻿शब्दादि अचेतन होने से रागादिक की उत्पत्ति में नियामक कारण नहीं</option>");
       $optgrp.append("<option value='380-386.html'><b>349-355</b> - ﻿व्यवहार से कर्त्ता और कर्म भिन्न, निश्चय से अभिन्न</option>");
       $optgrp.append("<option value='387-396.html'><b>356-365</b> - ﻿इस निश्चय-व्यवहार कथन का दृष्टांत</option>");
       $optgrp.append("<option value='397-400.html'><b>383-386</b> - ﻿निश्चय-प्रतिक्रमण-प्रत्याख्यान-आलोचना ही अभेद-नय से निश्चय-चारित्र</option>");
       $optgrp.append("<option value='401-410.html'><b>373-382</b> - ﻿इन्द्रियों और मन के विषयों में रमणता -- मिथ्याज्ञान </option>");
       $optgrp.append("<option value='411-413.html'><b>387-389</b> - ﻿अज्ञान-चेतना बंध का कारण</option>");
       $optgrp.append("<option value='414-428.html'><b>390-404</b> - ﻿अब इसी अर्थ की गाथा कहते हैं --</option>");
       $optgrp.append("<option value='429-431.html'><b>405-407</b> - ﻿ज्ञान आहारक क्यों नहीं?</option>");
       $optgrp.append("<option value='432-435.html'><b>408-411</b> - ﻿द्रव्य-लिंग भी निश्चय से मुक्ति का कारण नहीं</option>");
       $optgrp.append("<option value='436.html'><b>412</b> - ﻿आत्म-रमणता की प्रेरणा</option>");
       $optgrp.append("<option value='437.html'><b>413</b> - ﻿भाव-लिंग के बिना द्रव्य-लिंग द्वारा समयसार का ग्रहण नहीं</option>");
       $optgrp.append("<option value='438.html'><b>414</b> - ﻿परमार्थ से लिंग मोक्षमार्ग नहीं</option>");
       $optgrp.append("<option value='439.html'><b>415</b> - ﻿ग्रन्थ समाप्ति और इसके पढ़ने का फल</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿परिशिष्ट">')
       $optgrp.append("<option value='440-parishisht.html'><b>440-parishisht</b> - ﻿परिशिष्ट</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿सिद्धों को नमस्कार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पीठिका">')
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿स्वसमय और परसमय का लक्षण </option>");
       $optgrp.append("<option value='003.html'><b>003</b> - ﻿'समय' की सुन्दरता</option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿एकत्व की दुर्लभता</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आचार्य की प्रतिज्ञा</option>");
       $optgrp.append("<option value='006.html'><b>006</b> - ﻿शुद्धात्मा का स्वरूप</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿ज्ञानी आत्मा शुद्ध ज्ञायक है</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿व्यवहार की आवश्यकता</option>");
       $optgrp.append("<option value='009-010.html'><b>009-010</b> - ﻿श्रुतकेवली</option>");
       $optgrp.append("<option value='011.html'><b>011</b> - ﻿आत्म-भावना की प्रेरणा</option>");
       $optgrp.append("<option value='012.html'><b>012</b> - ﻿आत्म-भावना से शीघ्र मुक्ति</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नव-पदार्थ अधिकार">')
       $optgrp.append("<option value='013.html'><b>013</b> - ﻿निश्चयनय भूतार्थ है और व्यवहार नय अभूतार्थ है</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿जीव अधिकार">')
       $optgrp.append("<option value='014.html'><b>014</b> - ﻿व्यवहार नय भी प्रयोजनवान है</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿शुद्धनय से जानना सम्यक्त्व है</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿शुद्धनय का लक्षण</option>");
       $optgrp.append("<option value='017.html'><b>017</b> - ﻿जो आत्मा को देखता है वही जिनशासन को जानता है</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿ध्यान में केवल आत्मा</option>");
       $optgrp.append("<option value='019.html'><b>019</b> - ﻿रत्नत्रय ही आत्मा है</option>");
       $optgrp.append("<option value='020-021.html'><b>020-021</b> - ﻿रत्नत्रय के सेवन का क्रम</option>");
       $optgrp.append("<option value='022.html'><b>022</b> - ﻿आत्मा कब तक अज्ञानी रहता है?</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿आत्मा के बंध मोक्ष का कारण</option>");
       $optgrp.append("<option value='024.html'><b>024</b> - ﻿निश्चय और व्यवहार से जीव का कर्तापना </option>");
       $optgrp.append("<option value='025-026-027.html'><b>025-026-027</b> - ﻿अप्रतिबुद्ध - पर पदार्थ में अहंकार / ममकार</option>");
       $optgrp.append("<option value='028-029-030.html'><b>028-029-030</b> - ﻿पर पदार्थ को जीव का कहना ठीक नहीं - तर्क</option>");
       $optgrp.append("<option value='031.html'><b>031</b> - ﻿प्रश्न - आत्मा-शरीर एक नहीं तो शरीराश्रित स्तुति कैसे ? </option>");
       $optgrp.append("<option value='032.html'><b>032</b> - ﻿व्यवहार से जीव और शरीर एक, निश्चय से नहीं </option>");
       $optgrp.append("<option value='033-034.html'><b>033-034</b> - ﻿व्यवहार स्तुति निश्चय स्तुति नहीं</option>");
       $optgrp.append("<option value='035.html'><b>035</b> - ﻿दृष्टांत - नगर का वर्णन राजा का वर्णन नहीं</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿निश्चय स्तुति - जितेन्द्रिय</option>");
       $optgrp.append("<option value='037.html'><b>037</b> - ﻿निश्चय स्तुति - जितमोह</option>");
       $optgrp.append("<option value='038.html'><b>038</b> - ﻿निश्चय स्तुति - क्षीणमोह</option>");
       $optgrp.append("<option value='039-040.html'><b>039-040</b> - ﻿प्रतिबुद्ध द्वारा परभावों का त्याग - प्रत्याख्यान</option>");
       $optgrp.append("<option value='041.html'><b>041</b> - ﻿मोह से निर्मम</option>");
       $optgrp.append("<option value='042.html'><b>042</b> - ﻿धर्मादि ज्ञेय पदार्थ से निर्मम</option>");
       $optgrp.append("<option value='043.html'><b>043</b> - ﻿मैं एक शुद्ध दर्शन-ज्ञानमयी</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अजीव अधिकार">')
       $optgrp.append("<option value='044-048.html'><b>044-048</b> - ﻿जीव-अजीव में एकता - मिथ्या-मत</option>");
       $optgrp.append("<option value='049.html'><b>049</b> - ﻿जीव-अजीव में भिन्नता - मिथ्या-मत खण्डन</option>");
       $optgrp.append("<option value='050.html'><b>050</b> - ﻿आठों कर्मों का फल -- अध्यवसान</option>");
       $optgrp.append("<option value='051.html'><b>051</b> - ﻿अध्यवसान-भाव जीव है - व्यवहार  </option>");
       $optgrp.append("<option value='052-053.html'><b>052-053</b> - ﻿इस व्यवहार को दृष्टांत द्वारा समझाते हैं</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿शुद्ध जीव कैसा होता है?</option>");
       $optgrp.append("<option value='055-060.html'><b>055-060</b> - ﻿शुद्ध जीव कैसा नहीं होता है?</option>");
       $optgrp.append("<option value='061.html'><b>061</b> - ﻿व्यवहार से वर्णादि भाव जीव के, निश्चय से नहीं</option>");
       $optgrp.append("<option value='062.html'><b>062</b> - ﻿जीव का वर्णादि के साथ संयोग सम्बन्ध</option>");
       $optgrp.append("<option value='063-064-065.html'><b>063-064-065</b> - ﻿दृष्टांत द्वारा सम्बन्ध को बतलाते हैं</option>");
       $optgrp.append("<option value='066.html'><b>066</b> - ﻿वर्णादि भाव के साथ जीव का तादात्म्य नहीं</option>");
       $optgrp.append("<option value='067.html'><b>067</b> - ﻿जीव का वर्णादि से तादात्म्य में दोष</option>");
       $optgrp.append("<option value='068-069.html'><b>068-069</b> - ﻿संसार अवस्था में जीव के वर्णादि से तादात्म्य में दोष</option>");
       $optgrp.append("<option value='070-071.html'><b>070-071</b> - ﻿अत: नाम-कर्म का उदय जीव नहीं है</option>");
       $optgrp.append("<option value='072.html'><b>072</b> - ﻿देह को जीव कहना व्यवहार</option>");
       $optgrp.append("<option value='073.html'><b>073</b> - ﻿अन्तरंग गुणस्थानादि भी जीव नहीं</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿कर्त्ता-कर्म अधिकार">')
       $optgrp.append("<option value='074-075.html'><b>074-075</b> - ﻿आस्रव और जीव का भेद ना जानना - अप्रतिबुद्ध / अज्ञानी</option>");
       $optgrp.append("<option value='076.html'><b>076</b> - ﻿अब कर्त्ता-कर्म रूप प्रवृत्ति की निवृत्ति किस प्रकार होती है उसे कहते हैं --</option>");
       $optgrp.append("<option value='077.html'><b>077</b> - ﻿ज्ञानी निर्बंध कैसे होता है ?</option>");
       $optgrp.append("<option value='078.html'><b>078</b> - ﻿आस्रवों से निवृत्ति का उपाय  </option>");
       $optgrp.append("<option value='079.html'><b>079</b> - ﻿ज्ञान और आस्रवों से निवृत्ति का एक काल  </option>");
       $optgrp.append("<option value='080.html'><b>080</b> - ﻿ज्ञानी की पहचान</option>");
       $optgrp.append("<option value='081.html'><b>081</b> - ﻿आत्मा पुण्य-पापादि परिणामों का कर्त्ता -- व्यवहार</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿कर्मों को जानते हुए इस जीव का पुद्गल के साथ अतादात्म्य</option>");
       $optgrp.append("<option value='083.html'><b>083</b> - ﻿कर्मोदय के साथ अतादात्म्य</option>");
       $optgrp.append("<option value='084.html'><b>084</b> - ﻿ज्ञानी के कर्म-फल में कर्ता-कर्म भाव नहीं</option>");
       $optgrp.append("<option value='085.html'><b>085</b> - ﻿पुद्गल का भी जीव के साथ कर्ता-कर्मभाव नहीं</option>");
       $optgrp.append("<option value='086-088.html'><b>086-088</b> - ﻿जीव-पुद्गल के निमित्त-नैमित्तिक संबंध होने पर भी कर्ता-कर्म का अभाव</option>");
       $optgrp.append("<option value='089.html'><b>089</b> - ﻿जीव का कर्तृत्व और भोक्तृत्व अपने परिणामों के साथ ही</option>");
       $optgrp.append("<option value='090.html'><b>090</b> - ﻿लोक-व्यवहार ऐसा होता है</option>");
       $optgrp.append("<option value='091.html'><b>091</b> - ﻿द्विक्रियावादियों की मान्यता दूषित</option>");
       $optgrp.append("<option value='092.html'><b>092</b> - ﻿द्विक्रियावादी मिथ्यादृष्टि क्यों ?</option>");
       $optgrp.append("<option value='093.html'><b>093</b> - ﻿द्विक्रियावादी का विशेष व्याख्यान</option>");
       $optgrp.append("<option value='094.html'><b>094</b> - ﻿शुद्ध-चैतन्य स्वभावी जीव में मिथ्या-दर्शनादि विकारी भाव कैसे ?</option>");
       $optgrp.append("<option value='095.html'><b>095</b> - ﻿मिथ्यात्वादिक जीव अजीव कहे हैं वे कौन हैं ?</option>");
       $optgrp.append("<option value='096.html'><b>096</b> - ﻿आत्म-भावों का कर्त्ता आत्मा और द्रव्य-कर्मादिमय पर-भावों का कर्ता पुद्गल</option>");
       $optgrp.append("<option value='097.html'><b>097</b> - ﻿आत्मा के तीन-विकारी परिणामों का कर्त्तापना है</option>");
       $optgrp.append("<option value='098.html'><b>098</b> - ﻿कर्म-वर्गणा योग्य पुद्गल-द्रव्य अपने उपादान से कर्म-रूप में परिणत होता है</option>");
       $optgrp.append("<option value='099.html'><b>099</b> - ﻿वीतराग-स्वसंवेदन-ज्ञान के नहीं होने से नूतन कर्म बंध</option>");
       $optgrp.append("<option value='100.html'><b>100</b> - ﻿ज्ञान से कर्मों का बंध नहीं होता</option>");
       $optgrp.append("<option value='101-102.html'><b>101-102</b> - ﻿अज्ञान से ही नूतन कर्मों का बंध क्यों ?</option>");
       $optgrp.append("<option value='103.html'><b>103</b> - ﻿कर्तृत्व का मूल कारण अज्ञान</option>");
       $optgrp.append("<option value='104.html'><b>104</b> - ﻿सम्यग्ज्ञान होने पर कर्ता-कर्म भाव नष्ट</option>");
       $optgrp.append("<option value='105-107.html'><b>105-107</b> - ﻿पर-भावों को भी आत्मा करता है -- व्यवहारियों का मोह</option>");
       $optgrp.append("<option value='108.html'><b>108</b> - ﻿ज्ञानी परभाव का अकर्ता, ज्ञान का ही कर्ता</option>");
       $optgrp.append("<option value='109.html'><b>109</b> - ﻿अज्ञानी भी पर-द्रव्य के भाव का अकर्ता</option>");
       $optgrp.append("<option value='110.html'><b>110</b> - ﻿किसी के द्वारा परभाव किया जाना अशक्य</option>");
       $optgrp.append("<option value='111.html'><b>111</b> - ﻿आत्मा पुद्गल-कर्मों का अकर्ता क्यों ?</option>");
       $optgrp.append("<option value='112-113.html'><b>112-113</b> - ﻿'आत्मा द्रव्य-कर्मों का कर्त्ता है' यह उपचार मात्र है</option>");
       $optgrp.append("<option value='114-115.html'><b>114-115</b> - ﻿आत्मा पुद्गल कर्म का कर्त्ता-भोक्ता -- व्यवहार </option>");
       $optgrp.append("<option value='116-119.html'><b>116-119</b> - ﻿पुद्गल के कथंचित परिणामी स्वभाव-पना</option>");
       $optgrp.append("<option value='120-122.html'><b>120-122</b> - ﻿जीव और क्रोधादि प्रत्ययों का एकत्व नहीं</option>");
       $optgrp.append("<option value='123-125.html'><b>123-125</b> - ﻿पुद्गल के कथंचित परिणामी स्वभावपना</option>");
       $optgrp.append("<option value='126-130.html'><b>126-130</b> - ﻿जीव-द्रव्य में कथंचित परिणामित्व</option>");
       $optgrp.append("<option value='131-133.html'><b>131-133</b> - ﻿ज्ञानी-जीव ज्ञानभाव का कर्ता</option>");
       $optgrp.append("<option value='134.html'><b>134</b> - ﻿ज्ञानी और अज्ञानी के कर्तापन</option>");
       $optgrp.append("<option value='135.html'><b>135</b> - ﻿ज्ञानमय या अज्ञानमय भाव से क्या होता है?</option>");
       $optgrp.append("<option value='136-137.html'><b>136-137</b> - ﻿ज्ञानी के ज्ञानमय और अज्ञानी के अज्ञानमय ही भाव कैसे ?</option>");
       $optgrp.append("<option value='138-139.html'><b>138-139</b> - ﻿दृष्टांत</option>");
       $optgrp.append("<option value='140-144.html'><b>140-144</b> - ﻿अज्ञानी अज्ञान-मय भावों द्वारा आगामी भाव-कर्म को प्राप्त होता है</option>");
       $optgrp.append("<option value='145-147.html'><b>145-147</b> - ﻿जीव का परिणाम पुद्गल-द्रव्य से पृथक् ही है</option>");
       $optgrp.append("<option value='148.html'><b>148</b> - ﻿आत्मा में कर्म बद्धस्पृष्ट है कि अबद्धस्पृष्ट ?</option>");
       $optgrp.append("<option value='149.html'><b>149</b> - ﻿नयविभाग जानने से क्या होता है ?</option>");
       $optgrp.append("<option value='150.html'><b>150</b> - ﻿पक्षातिक्रान्त ज्ञानी का क्या स्वरूप है ?</option>");
       $optgrp.append("<option value='151.html'><b>151</b> - ﻿पक्ष से दूरवर्ती ही समयसार है</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुण्य-पाप अधिकार">')
       $optgrp.append("<option value='152.html'><b>152</b> - ﻿शुभाशुभ कर्म के स्वभाव का वर्णन</option>");
       $optgrp.append("<option value='153.html'><b>153</b> - ﻿शुभ-अशुभ दोनों अविशेषता से बंध के कारण</option>");
       $optgrp.append("<option value='154.html'><b>154</b> - ﻿शुभ-अशुभ दोनों ही कर्मों का निषेध</option>");
       $optgrp.append("<option value='155-156.html'><b>155-156</b> - ﻿दोनों कर्मों के निषेध का दृष्टान्त</option>");
       $optgrp.append("<option value='157.html'><b>157</b> - ﻿दोनों ही प्रकार के कर्म बंध के कारण होने से निषेध्य</option>");
       $optgrp.append("<option value='158.html'><b>158</b> - ﻿अब ज्ञान को मोक्षका कारण सिद्ध करते हैं --</option>");
       $optgrp.append("<option value='159-160.html'><b>159-160</b> - ﻿उस ज्ञान की विधि</option>");
       $optgrp.append("<option value='161.html'><b>161</b> - ﻿पुण्यकर्म के पक्षपाती को प्रतिबोधन</option>");
       $optgrp.append("<option value='162.html'><b>162</b> - ﻿परमार्थस्वरूप मोक्ष का कारण दिखलाते हैं</option>");
       $optgrp.append("<option value='163.html'><b>163</b> - ﻿परमार्थरूप मोक्ष के कारण से भिन्न कर्म का निषेध</option>");
       $optgrp.append("<option value='164-166.html'><b>164-166</b> - ﻿मोक्ष के कारणभूत दर्शन, ज्ञान और चारित्र का आच्छादक कर्म</option>");
       $optgrp.append("<option value='167.html'><b>167</b> - ﻿कर्म स्वयमेव बंध है</option>");
       $optgrp.append("<option value='168-170.html'><b>168-170</b> - ﻿कर्म का मोक्ष-हेतु-तिरोधायीपना</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आस्रव अधिकार">')
       $optgrp.append("<option value='171-172.html'><b>171-172</b> - ﻿आस्रव का स्वरूप</option>");
       $optgrp.append("<option value='173.html'><b>173</b> - ﻿ज्ञानी के उन आस्रवों का अभाव</option>");
       $optgrp.append("<option value='174.html'><b>174</b> - ﻿राग, द्वेष, मोह भावों के ही आस्रवपना</option>");
       $optgrp.append("<option value='175.html'><b>175</b> - ﻿रागादिक से न मिले ज्ञानमय भाव संभव</option>");
       $optgrp.append("<option value='176.html'><b>176</b> - ﻿ज्ञानी के द्रव्यास्रव का अभाव</option>");
       $optgrp.append("<option value='177-178.html'><b>177-178</b> - ﻿ज्ञानी निरास्रव किस तरह ? उत्तर</option>");
       $optgrp.append("<option value='179.html'><b>179</b> - ﻿ज्ञान-गुण के जघन्य-भाव परिणमन के रहते ज्ञानी निरास्रव कैसे</option>");
       $optgrp.append("<option value='180-183.html'><b>180-183</b> - ﻿सभी द्रव्यास्रव की संतति के रहने पर भी ज्ञानी नित्य ही निरास्रव कैसे</option>");
       $optgrp.append("<option value='184-185.html'><b>184-185</b> - ﻿ज्ञानी के राग-द्वेष-मोह नहीं अत: नवीन कर्मों का बंध नहीं</option>");
       $optgrp.append("<option value='186-187.html'><b>186-187</b> - ﻿इसी का समर्थन दृष्टांत पूर्वक</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿संवर अधिकार">')
       $optgrp.append("<option value='188-190.html'><b>188-190</b> - ﻿भेद-विज्ञान की अभिवन्दना</option>");
       $optgrp.append("<option value='191-192.html'><b>191-192</b> - ﻿भेद-विज्ञान से ही शुद्धात्मा की प्राप्ति</option>");
       $optgrp.append("<option value='193.html'><b>193</b> - ﻿शुद्ध आत्मा की प्राप्ति से ही संवर</option>");
       $optgrp.append("<option value='194-196.html'><b>194-196</b> - ﻿संवर इस तरह से होता है</option>");
       $optgrp.append("<option value='197.html'><b>197</b> - ﻿आत्मा परोक्ष है, फिर उसका ध्यान कैसे</option>");
       $optgrp.append("<option value='199-201.html'><b>199-201</b> - ﻿संवर के क्रम का व्याख्यान</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿निर्जरा अधिकार">')
       $optgrp.append("<option value='202.html'><b>202</b> - ﻿द्रव्य-निर्जरा का स्वरूप</option>");
       $optgrp.append("<option value='203.html'><b>203</b> - ﻿भाव-निर्जरा का भी स्वरूप</option>");
       $optgrp.append("<option value='204-205.html'><b>204-205</b> - ﻿ज्ञान-शक्ति का वर्णन</option>");
       $optgrp.append("<option value='206.html'><b>206</b> - ﻿दृष्टांत</option>");
       $optgrp.append("<option value='207.html'><b>207</b> - ﻿अब कहते हैं कि सम्यग्दृष्टि अपने को और पर को विशेषरूप से इस प्रकार जानता है --</option>");
       $optgrp.append("<option value='208.html'><b>208</b> - ﻿औपाधिक-भाव आत्म-स्वभाव क्यों नहीं ?</option>");
       $optgrp.append("<option value='209.html'><b>209</b> - ﻿औपाधिक भावों की परभावता जानने का फल</option>");
       $optgrp.append("<option value='210.html'><b>210</b> - ﻿सम्यग्दृष्टि अपने और पर के स्वभाव का ज्ञाता होता है</option>");
       $optgrp.append("<option value='211-212.html'><b>211-212</b> - ﻿सम्यग्दृष्टि रागी कैसे नहीं होता? यदि ऐसा पूछें तो सुनिये --</option>");
       $optgrp.append("<option value='213.html'><b>213</b> - ﻿ज्ञानी अनागत कर्मोदय के उपभोग की वांछा क्यों नहीं करता ?</option>");
       $optgrp.append("<option value='214.html'><b>214</b> - ﻿इसका विस्तार करते हैं --</option>");
       $optgrp.append("<option value='215.html'><b>215</b> - ﻿मिथ्यात्वादि अपध्यान मेरा परिग्रह नहीं</option>");
       $optgrp.append("<option value='216.html'><b>216</b> - ﻿वह परमात्म-पद क्या है ? इसका समाधान आचार्य करते हैं --</option>");
       $optgrp.append("<option value='217.html'><b>217</b> - ﻿अब पूछते हैं कि ज्ञानी पर-द्रव्य को क्यों नहीं ग्रहण करता ? उत्तर --</option>");
       $optgrp.append("<option value='219.html'><b>219</b> - ﻿और क्या ?</option>");
       $optgrp.append("<option value='220.html'><b>220</b> - ﻿मत्यादि ज्ञान विशेष एक ज्ञान सामान्य के ही रूप</option>");
       $optgrp.append("<option value='222-227.html'><b>222-227</b> - ﻿इच्छा ही परिग्रह, जिसको इच्छा नहीं उसको परिग्रह नहीं</option>");
       $optgrp.append("<option value='228.html'><b>228</b> - ﻿ज्ञानी के भोग का उदय वियोग बुद्धि पूर्वक, आगे भोगों की इच्छा नहीं   </option>");
       $optgrp.append("<option value='229-230.html'><b>229-230</b> - ﻿ज्ञानी के अलिप्तता के कारण कर्म-बन्ध नहीं, और अज्ञानी के लिप्तता के कारण कर्म बन्ध</option>");
       $optgrp.append("<option value='231-233.html'><b>231-233</b> - ﻿अब पूर्व-बद्ध कर्मों की निर्जरा न होकर, किस प्रकार मोक्ष होगा ? इस प्रश्न का उत्तर देते हैं --</option>");
       $optgrp.append("<option value='234-238.html'><b>234-238</b> - ﻿अब ज्ञानी के कर्म-बंध नहीं होता, उसे शंख के दृष्टांत से बतलाते हैं -- </option>");
       $optgrp.append("<option value='239-242.html'><b>239-242</b> - ﻿सराग-वीतराग परिणाम से बंध-मोक्ष</option>");
       $optgrp.append("<option value='243.html'><b>243</b> - ﻿सम्यक्त्वी भय-रहित होता है </option>");
       $optgrp.append("<option value='244.html'><b>244</b> - ﻿नि:शंकित अंग का स्वरूप</option>");
       $optgrp.append("<option value='245.html'><b>245</b> - ﻿नि:कांक्षित अंग का स्वरूप</option>");
       $optgrp.append("<option value='246-247.html'><b>246-247</b> - ﻿निर्वचिकित्सा व अमूढदृष्टि अंग का स्वरूप</option>");
       $optgrp.append("<option value='248-249.html'><b>248-249</b> - ﻿उपगूहन और स्थितिकरण अंग का स्वरूप</option>");
       $optgrp.append("<option value='250-251.html'><b>250-251</b> - ﻿वात्सल्य और प्रभावना अंग का धारी सम्यग्दृष्टि का वर्णन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बंध अधिकार">')
       $optgrp.append("<option value='252-256.html'><b>252-256</b> - ﻿मिथ्या-ज्ञान श्रंगार-सहित प्रवेश कर रहा है</option>");
       $optgrp.append("<option value='257-261.html'><b>257-261</b> - ﻿आगे वीतराग सम्यग्दृष्टि जीव के कर्म-बंध नहीं होता है, ऐसा पांच गाथाओं से बतलाते हैं --</option>");
       $optgrp.append("<option value='262-264.html'><b>262-264</b> - ﻿हिंस्य-हिंसकभाव रूप परिणमन अज्ञानी का लक्षण ज्ञानी का नहीं</option>");
       $optgrp.append("<option value='265-268.html'><b>265-268</b> - ﻿सुख और दु:ख भी निश्चय से अपने ही कर्मों के उदय से होते हैं</option>");
       $optgrp.append("<option value='269-270.html'><b>269-270</b> - ﻿दूसरे को जिला, मार, सुखी कर सकना ऐसी मान्यता बहिरात्मपना</option>");
       $optgrp.append("<option value='271-273.html'><b>271-273</b> - ﻿पूर्व के दो सूत्र में कहा हुआ मिथ्याज्ञानरूपी भाव मिथ्यादृष्टि के बंध का कारण होता है</option>");
       $optgrp.append("<option value='274.html'><b>274</b> - ﻿अध्यवसान से ही बंध प्राणियों को मारने अथवा न मारने से नहीं</option>");
       $optgrp.append("<option value='275-276.html'><b>275-276</b> - ﻿अध्यवसाय ही पाप-पुण्य के बन्ध का कारण हैं, ऐसा दिखाते हैं</option>");
       $optgrp.append("<option value='277.html'><b>277</b> - ﻿रागादिक-रूप परिणाम बंध का कारण होते हैं, बाह्य वस्तु नहीं</option>");
       $optgrp.append("<option value='278-279.html'><b>278-279</b> - ﻿'मैं जीवों को सुखी-दुखी, बांधता-मुक्त करता हूँ', यह मानना मूढ़ता है</option>");
       $optgrp.append("<option value='280-284.html'><b>280-284</b> - ﻿इस प्रकार जो जीव दुखी होते है वे अपने पाप-कर्म के उदय से होते है, तुम्हारे विचारानुसार नहीं यह बतलाते हैं --</option>");
       $optgrp.append("<option value='285-286.html'><b>285-286</b> - ﻿अध्यवसान से मोहित ही पर-द्रव्य से एकत्व करता है </option>");
       $optgrp.append("<option value='287.html'><b>287</b> - ﻿तपोधन मोह भाव रहित </option>");
       $optgrp.append("<option value='288.html'><b>288</b> - ﻿बाह्य वस्तुओं में संकल्प विकल्प कर्म का कारण </option>");
       $optgrp.append("<option value='289.html'><b>289</b> - ﻿अध्यवसान के पर्यायवाची </option>");
       $optgrp.append("<option value='290.html'><b>290</b> - ﻿निश्चयनय के द्वारा व्यवहार विकल्पों का निषेध</option>");
       $optgrp.append("<option value='291-293.html'><b>291-293</b> - ﻿अभव्य जीव के अपने मिथ्या अभिप्राय के कारण सिद्धि नहीं </option>");
       $optgrp.append("<option value='294-295.html'><b>294-295</b> - ﻿व्यवहार-नय व निश्चय-नय का स्वरूप</option>");
       $optgrp.append("<option value='296-297.html'><b>296-297</b> - ﻿ज्ञानी के आहारकृत बन्ध नहीं</option>");
       $optgrp.append("<option value='300-301.html'><b>300-301</b> - ﻿रागादि विकारी भाव कैसे बनते है ?</option>");
       $optgrp.append("<option value='302.html'><b>302</b> - ﻿ज्ञानी जीव आस्रव का कर्त्ता नहीं होता</option>");
       $optgrp.append("<option value='303-304.html'><b>303-304</b> - ﻿ज्ञानी के कर्म के उदय से राग द्वेष</option>");
       $optgrp.append("<option value='305-307.html'><b>305-307</b> - ﻿ज्ञानी रागादि का अकर्ता कैसे ?</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष अधिकार">')
       $optgrp.append("<option value='308-310.html'><b>308-310</b> - ﻿विशिष्ट भेद-ज्ञान के बल से बन्ध और आत्मा को पृथक् करना मोक्ष</option>");
       $optgrp.append("<option value='311-315.html'><b>311-315</b> - ﻿इसी को और स्पष्ट करते हैं</option>");
       $optgrp.append("<option value='316.html'><b>316</b> - ﻿आत्मा और बन्ध को भिन्न कैसे किया जाए ?</option>");
       $optgrp.append("<option value='317-319.html'><b>317-319</b> - ﻿आत्मा और बन्ध के प्रथक्-करण कब होता है ?</option>");
       $optgrp.append("<option value='320-322.html'><b>320-322</b> - ﻿भेद-भावना -- मैं बस जानने देखने देखने वाला </option>");
       $optgrp.append("<option value='323.html'><b>323</b> - ﻿शुद्धात्मा मात्र ज्ञाता, पर भाव मेरे नहीं </option>");
       $optgrp.append("<option value='324-326.html'><b>324-326</b> - ﻿पर भावों को अपना मानने से बन्ध और वीतरागता से मुक्ति</option>");
       $optgrp.append("<option value='327.html'><b>327</b> - ﻿अपराध शब्द का अर्थ</option>");
       $optgrp.append("<option value='328-329.html'><b>328-329</b> - ﻿परमार्थ से प्रतिक्रमण विष-कुम्भ, अप्रतिक्रमण अमृत-कुम्भ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सर्व-विशुद्ध अधिकार">')
       $optgrp.append("<option value='330-333.html'><b>330-333</b> - ﻿अब यहाँ कहते हैं कि निश्चय से यह जीव कर्मों का कर्त्ता नहीं है --</option>");
       $optgrp.append("<option value='334-335.html'><b>334-335</b> - ﻿ज्ञानावरणादि कर्म-प्रकृतियों का आत्मा के साथ जो बंध है, वह अज्ञान का ही महात्म्य है, ऐसा बताते हैं --</option>");
       $optgrp.append("<option value='336-337.html'><b>336-337</b> - ﻿जब तक कर्मोदय से होने वाले रागादि-भाव को नहीं छोडे तब तक अज्ञानी अन्यथा ज्ञानी</option>");
       $optgrp.append("<option value='338.html'><b>338</b> - ﻿कर्म-फल को भोगते रहना जीव का स्वभाव नहीं, अज्ञान भाव</option>");
       $optgrp.append("<option value='339.html'><b>339</b> - ﻿ज्ञानी नि:श्शंक होता हुआ कर्म-फल जानता हुआ आराधना में तत्पर रहता है</option>");
       $optgrp.append("<option value='340-341.html'><b>340-341</b> - ﻿अब यहाँ बताते हैं कि अज्ञानी जीव नियम से कर्मों का वेदक ही होता है --</option>");
       $optgrp.append("<option value='342-343.html'><b>342-343</b> - ﻿अब इसी कर्तृत्व व भोक्तृत्व के अभाव का दृष्टांत पूर्वक समर्थन करते हैं --</option>");
       $optgrp.append("<option value='344-346.html'><b>344-346</b> - ﻿अब यहाँ बताते हैं कि जो एकान्त से आत्मा को कर्ता मानते हैं उनके भी अज्ञानी लोगों के समान मोक्ष नहीं है ऐसा उपदेश करते हैं --</option>");
       $optgrp.append("<option value='347-350.html'><b>347-350</b> - ﻿अब पूर्व-पक्ष के उत्तर में कथन करते हैं कि निश्चय से आत्मा का पुदगलद्रव्य के साथ में कर्त्ता-कर्म सम्बन्ध नहीं है, तब आत्मा कैसे कर्त्ता बनता है ?</option>");
       $optgrp.append("<option value='351-354.html'><b>351-354</b> - ﻿जो करता है वही भोगता है -- द्रव्यार्थिक-नय और अन्य ही कर्ता है और अन्य ही भोगता -- पर्यायार्थिक-नय</option>");
       $optgrp.append("<option value='355-359.html'><b>355-359</b> - ﻿भाव-कर्म का कर्त्ता जीव ही है</option>");
       $optgrp.append("<option value='360-372.html'><b>360-372</b> - ﻿आत्मा सर्वथा अकर्ता नहीं है, कथंचित् कर्त्ता भी है</option>");
       $optgrp.append("<option value='373-378.html'><b>373-378</b> - ﻿सम्यग्दृष्टियों को विषयों के प्रति राग क्यों नहीं होता</option>");
       $optgrp.append("<option value='379.html'><b>379</b> - ﻿शब्दादि अचेतन होने से रागादिक की उत्पत्ति में नियामक कारण नहीं</option>");
       $optgrp.append("<option value='380-386.html'><b>380-386</b> - ﻿व्यवहार से कर्त्ता और कर्म भिन्न, निश्चय से अभिन्न</option>");
       $optgrp.append("<option value='387-396.html'><b>387-396</b> - ﻿इस निश्चय-व्यवहार कथन का दृष्टांत</option>");
       $optgrp.append("<option value='397-400.html'><b>397-400</b> - ﻿निश्चय-प्रतिक्रमण-प्रत्याख्यान-आलोचना ही अभेद-नय से निश्चय-चारित्र</option>");
       $optgrp.append("<option value='401-410.html'><b>401-410</b> - ﻿इन्द्रियों और मन के विषयों में रमणता -- मिथ्याज्ञान </option>");
       $optgrp.append("<option value='411-413.html'><b>411-413</b> - ﻿अज्ञान-चेतना बंध का कारण</option>");
       $optgrp.append("<option value='414-428.html'><b>414-428</b> - ﻿अब इसी अर्थ की गाथा कहते हैं --</option>");
       $optgrp.append("<option value='429-431.html'><b>429-431</b> - ﻿ज्ञान आहारक क्यों नहीं?</option>");
       $optgrp.append("<option value='432-435.html'><b>432-435</b> - ﻿द्रव्य-लिंग भी निश्चय से मुक्ति का कारण नहीं</option>");
       $optgrp.append("<option value='436.html'><b>436</b> - ﻿आत्म-रमणता की प्रेरणा</option>");
       $optgrp.append("<option value='437.html'><b>437</b> - ﻿भाव-लिंग के बिना द्रव्य-लिंग द्वारा समयसार का ग्रहण नहीं</option>");
       $optgrp.append("<option value='438.html'><b>438</b> - ﻿परमार्थ से लिंग मोक्षमार्ग नहीं</option>");
       $optgrp.append("<option value='439.html'><b>439</b> - ﻿ग्रन्थ समाप्ति और इसके पढ़ने का फल</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-2')
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='001.html'><b>001</b> - ﻿सिद्धों को नमस्कार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पीठिका">')
       $optgrp.append("<option value='002.html'><b>002</b> - ﻿स्वसमय और परसमय का लक्षण </option>");
       $optgrp.append("<option value='004.html'><b>004</b> - ﻿एकत्व की दुर्लभता</option>");
       $optgrp.append("<option value='005.html'><b>005</b> - ﻿आचार्य की प्रतिज्ञा</option>");
       $optgrp.append("<option value='007.html'><b>007</b> - ﻿ज्ञानी आत्मा शुद्ध ज्ञायक है</option>");
       $optgrp.append("<option value='008.html'><b>008</b> - ﻿व्यवहार की आवश्यकता</option>");
       $optgrp.append("<option value='009-010.html'><b>009-010</b> - ﻿श्रुतकेवली</option>");
       $optgrp.append("<option value='015.html'><b>015</b> - ﻿शुद्धनय से जानना सम्यक्त्व है</option>");
       $optgrp.append("<option value='016.html'><b>016</b> - ﻿शुद्धनय का लक्षण</option>");
       $optgrp.append("<option value='018.html'><b>018</b> - ﻿ध्यान में केवल आत्मा</option>");
       $optgrp.append("<option value='023.html'><b>023</b> - ﻿आत्मा के बंध मोक्ष का कारण</option>");
       $optgrp.append("<option value='036.html'><b>036</b> - ﻿निश्चय स्तुति - जितेन्द्रिय</option>");
       $optgrp.append("<option value='039-040.html'><b>039-040</b> - ﻿प्रतिबुद्ध द्वारा परभावों का त्याग - प्रत्याख्यान</option>");
       $optgrp.append("<option value='054.html'><b>054</b> - ﻿शुद्ध जीव कैसा होता है?</option>");
       $optgrp.append("<option value='082.html'><b>082</b> - ﻿कर्मों को जानते हुए इस जीव का पुद्गल के साथ अतादात्म्य</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पुण्य-पाप अधिकार">')
       $optgrp.append("<option value='152.html'><b>152</b> - ﻿शुभाशुभ कर्म के स्वभाव का वर्णन</option>");
       $optgrp.append("<option value='161.html'><b>161</b> - ﻿पुण्यकर्म के पक्षपाती को प्रतिबोधन</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
