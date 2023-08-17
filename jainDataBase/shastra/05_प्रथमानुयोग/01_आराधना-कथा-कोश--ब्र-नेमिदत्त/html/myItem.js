
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿पात्रकेसरी की कथा</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿भट्टाकलंकदेव की कथा</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿सनत्कुमार चक्रवर्त्ती की कथा</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿समन्‍त भद्राचार्य की कथा</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿संजयन्त मुनि की कथा</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿अंजन चोर की कथा</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿अनन्‍तमतीकी कथा</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿उद्दायन राजा की कथा</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿रेवती रानी की कथा</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿जिनेन्द्रभक्त की कथा</option>");
  mySel.append("<option value='011.html'><b>011</b> - ﻿वारिषेण मुनि की कथा</option>");
  mySel.append("<option value='012.html'><b>012</b> - ﻿विष्णुकुमार मुनि की कथा</option>");
  mySel.append("<option value='013.html'><b>013</b> - ﻿वज्रकुमार की कथा</option>");
  mySel.append("<option value='014.html'><b>014</b> - ﻿नागदत्त मुनि की कथा</option>");
  mySel.append("<option value='015.html'><b>015</b> - ﻿शिवभूति पुरोहित की कथा</option>");
  mySel.append("<option value='016.html'><b>016</b> - ﻿पवित्र हृदय वाले एक बालक की कथा</option>");
  mySel.append("<option value='017.html'><b>017</b> - ﻿धनदत्त राजा की कथा</option>");
  mySel.append("<option value='018.html'><b>018</b> - ﻿ब्रह्मदत्त की कथा</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿श्रेणिक राजा की कथा</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿पद्मरथ राजा की कथा</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿पंच नमस्कारमंत्र-माहात्म्य कथा</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿यम मुनि की कथा</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿दृढ़सूर्य की कथा</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿यमपाल चांडाल की कथा</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿मृगसेन धीवर की कथा</option>");
  mySel.append("<option value='026.html'><b>026</b> - ﻿वसुराजा की कथा
</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿श्रीभूति - पुरोहित की कथा</option>");
  mySel.append("<option value='028.html'><b>028</b> - ﻿नीली की कथा</option>");
  mySel.append("<option value='029.html'><b>029</b> - ﻿कडारपिंग की कथा</option>");
  mySel.append("<option value='030.html'><b>030</b> - ﻿देवरति राजा की कथा</option>");
  mySel.append("<option value='031.html'><b>031</b> - ﻿गोपवती की कथा</option>");
  mySel.append("<option value='032.html'><b>032</b> - ﻿वीरवती की कथा</option>");
  mySel.append("<option value='033.html'><b>033</b> - ﻿सुरतराजा की कथा</option>");
  mySel.append("<option value='034.html'><b>034</b> - ﻿विषयों में फँसे हुए संसारी जीव की कथा</option>");
  mySel.append("<option value='035.html'><b>035</b> - ﻿चारूदत्त सेठ की कथा</option>");
  mySel.append("<option value='036.html'><b>036</b> - ﻿पाराशर मुनि की कथा</option>");
  mySel.append("<option value='037.html'><b>037</b> - ﻿सात्‍यकि और रूद्र की कथा</option>");
  mySel.append("<option value='038.html'><b>038</b> - ﻿लौकिक ब्रह्मा की कथा</option>");
  mySel.append("<option value='039.html'><b>039</b> - ﻿परिग्रह से डरे हुए दो भाइयों की कथा</option>");
  mySel.append("<option value='040.html'><b>040</b> - ﻿धन से डरे हुए सागरदत्त की कथा</option>");
  mySel.append("<option value='041.html'><b>041</b> - ﻿धन के लोभ से भ्रम में पड़े कुबेरदत्त की कथा</option>");
  mySel.append("<option value='042.html'><b>042</b> - ﻿पिण्‍याकगन्‍ध की कथा</option>");
  mySel.append("<option value='043.html'><b>043</b> - ﻿लुब्‍धक सेठ की कथा</option>");
  mySel.append("<option value='044.html'><b>044</b> - ﻿वशिष्‍ठ तापसी की कथा</option>");
  mySel.append("<option value='045.html'><b>045</b> - ﻿लक्ष्‍मीमती की कथा</option>");
  mySel.append("<option value='046.html'><b>046</b> - ﻿पुष्‍पदत्ता की कथा</option>");
  mySel.append("<option value='047.html'><b>047</b> - ﻿मरीचि की कथा</option>");
  mySel.append("<option value='048.html'><b>048</b> - ﻿गन्‍धमित्र की कथा</option>");
  mySel.append("<option value='049.html'><b>049</b> - ﻿गन्‍धर्वसेना की कथा</option>");
  mySel.append("<option value='050.html'><b>050</b> - ﻿भीमराज की कथा</option>");
  mySel.append("<option value='051.html'><b>051</b> - ﻿नागदत्ता की कथा</option>");
  mySel.append("<option value='052.html'><b>052</b> - ﻿द्वीपायन मुनि की कथा</option>");
  mySel.append("<option value='053.html'><b>053</b> - ﻿शराब पीने वालों की कथा</option>");
  mySel.append("<option value='054.html'><b>054</b> - ﻿सगर चक्रवर्ती की कथा</option>");
  mySel.append("<option value='055.html'><b>055</b> - ﻿मृगध्वज की कथा</option>");
  mySel.append("<option value='056.html'><b>056</b> - ﻿परशुराम की कथा</option>");
  mySel.append("<option value='057.html'><b>057</b> - ﻿सुकुमाल मुनि की कथा</option>");
  mySel.append("<option value='058.html'><b>058</b> - ﻿सुकौशल मुनि की कथा</option>");
  mySel.append("<option value='059.html'><b>059</b> - ﻿गजकुमार मुनि की कथा</option>");
  mySel.append("<option value='060.html'><b>060</b> - ﻿पणिक मुनि की कथा</option>");
  mySel.append("<option value='061.html'><b>061</b> - ﻿भद्रबाहु मुनिराज की कथा</option>");
  mySel.append("<option value='062.html'><b>062</b> - ﻿बत्तीस सेठ पुत्रों की कथा</option>");
  mySel.append("<option value='063.html'><b>063</b> - ﻿धर्मघोष मुनि की कथा</option>");
  mySel.append("<option value='064.html'><b>064</b> - ﻿श्रीदत्त मुनि की कथा</option>");
  mySel.append("<option value='065.html'><b>065</b> - ﻿वृषभसेन की कथा</option>");
  mySel.append("<option value='066.html'><b>066</b> - ﻿कार्तिकेय मुनि की कथा</option>");
  mySel.append("<option value='067.html'><b>067</b> - ﻿अभयघोष मुनि की कथा</option>");
  mySel.append("<option value='068.html'><b>068</b> - ﻿विद्युच्चर मुनि की कथा</option>");
  mySel.append("<option value='069.html'><b>069</b> - ﻿गुरूदत्त मुनि की कथा</option>");
  mySel.append("<option value='070.html'><b>070</b> - ﻿चिलात-पुत्र की कथा</option>");
  mySel.append("<option value='071.html'><b>071</b> - ﻿धन्य मुनि की कथा</option>");
  mySel.append("<option value='072.html'><b>072</b> - ﻿पाँच सौ मुनियों की कथा</option>");
  mySel.append("<option value='073.html'><b>073</b> - ﻿चाणक्य की कथा</option>");
  mySel.append("<option value='074.html'><b>074</b> - ﻿वृषभसेन की कथा</option>");
  mySel.append("<option value='075.html'><b>075</b> - ﻿शालिसिक्थ मच्छ के भावों की कथा</option>");
  mySel.append("<option value='076.html'><b>076</b> - ﻿सुभौम चक्रवर्ती की कथा</option>");
  mySel.append("<option value='077.html'><b>077</b> - ﻿शुभ राजा की कथा</option>");
  mySel.append("<option value='078.html'><b>078</b> - ﻿सुदृष्टि सुनार की कथा</option>");
  mySel.append("<option value='079.html'><b>079</b> - ﻿धर्मसिंह मुनि की कथा</option>");
  mySel.append("<option value='080.html'><b>080</b> - ﻿वृषभसेन की कथा</option>");
  mySel.append("<option value='081.html'><b>081</b> - ﻿जयसेन राजा की कथा</option>");
  mySel.append("<option value='082.html'><b>082</b> - ﻿शकटाल मुनि की कथा</option>");
  mySel.append("<option value='083.html'><b>083</b> - ﻿श्रद्धायुक्त मनुष्य की कथा</option>");
  mySel.append("<option value='084.html'><b>084</b> - ﻿आत्मनिन्दा करने वाली की कथा</option>");
  mySel.append("<option value='085.html'><b>085</b> - ﻿आत्मनिन्दा की कथा</option>");
  mySel.append("<option value='086.html'><b>086</b> - ﻿सोमशर्म मुनि की कथा</option>");
  mySel.append("<option value='087.html'><b>087</b> - ﻿कालाध्ययन की कथा</option>");
  mySel.append("<option value='088.html'><b>088</b> - ﻿अकाल में शास्त्राभ्यास करनेवाले की कथा</option>");
  mySel.append("<option value='089.html'><b>089</b> - ﻿विनयी पुरूष की कथा</option>");
  mySel.append("<option value='090.html'><b>090</b> - ﻿अवग्रह-नियम लेनेवाले की कथा</option>");
  mySel.append("<option value='091.html'><b>091</b> - ﻿अभिमान करने वाली की कथा</option>");
  mySel.append("<option value='092.html'><b>092</b> - ﻿निह्नव-असल बात को छुपाने वाले की कथा</option>");
  mySel.append("<option value='093.html'><b>093</b> - ﻿अक्षरहीन अर्थ की कथा</option>");
  mySel.append("<option value='094.html'><b>094</b> - ﻿अर्थहीन वाक्य की कथा</option>");
  mySel.append("<option value='095.html'><b>095</b> - ﻿व्यंजनहीन अर्थ की कथा</option>");
  mySel.append("<option value='096.html'><b>096</b> - ﻿सुव्रत मुनिराज की कथा</option>");
  mySel.append("<option value='097.html'><b>097</b> - ﻿हरिषेण चक्रवर्ती की कथा</option>");
  mySel.append("<option value='098.html'><b>098</b> - ﻿हरिषेण चक्रवर्ती की कथा</option>");
  mySel.append("<option value='099.html'><b>099</b> - ﻿दूसरों के गुण ग्रहण करने की कथा</option>");
  mySel.append("<option value='100.html'><b>100</b> - ﻿जिनाभिषेक से प्रेम करने वाले की कथा</option>");
  mySel.append("<option value='101.html'><b>101</b> - ﻿भावानुराग-कथा</option>");
  mySel.append("<option value='102.html'><b>102</b> - ﻿प्रेमानुराग-कथा</option>");
  mySel.append("<option value='103.html'><b>103</b> - ﻿दूसरों के गुण ग्रहण करने की कथा</option>");
  mySel.append("<option value='104.html'><b>104</b> - ﻿धर्मानुराग-कथा</option>");
  mySel.append("<option value='105.html'><b>105</b> - ﻿दूसरों के गुण ग्रहण करने की कथा</option>");
  mySel.append("<option value='106.html'><b>106</b> - ﻿सम्यक्त्व को न छोड़ने वाले की कथा</option>");
  mySel.append("<option value='107.html'><b>107</b> - ﻿सम्‍यग्‍दर्शन के प्रभाव की कथा</option>");
  mySel.append("<option value='108.html'><b>108</b> - ﻿रात्रिभोजन-त्‍याग-कथा</option>");
  mySel.append("<option value='109.html'><b>109</b> - ﻿दान करने वालों की कथा</option>");
  mySel.append("<option value='110.html'><b>110</b> - ﻿औषधिदान की कथा</option>");
  mySel.append("<option value='111.html'><b>111</b> - ﻿शास्त्र-दान की कथा</option>");
  mySel.append("<option value='112.html'><b>112</b> - ﻿अभयदान की कथा</option>");
  mySel.append("<option value='113.html'><b>113</b> - ﻿करकण्डु राजा की कथा</option>");
  mySel.append("<option value='114.html'><b>114</b> - ﻿जिनपूजन-प्रभाव-कथा</option>");
  mySel.append("<option value='115.html'><b>115</b> - ﻿कुंकुम-व्रत कथा</option>");
  mySel.append("<option value='116.html'><b>116</b> - ﻿जम्बूस्वामी की विनती</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
