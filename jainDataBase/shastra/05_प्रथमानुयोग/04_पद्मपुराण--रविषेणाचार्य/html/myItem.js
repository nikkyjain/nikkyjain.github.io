
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿प्रथमं पर्व</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿द्वितीयं पर्व</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿तृतीय पर्व</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿चतुर्थ पर्व</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿पंचम पर्व</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿षष्टम पर्व</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿सप्तमं पर्व</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿अष्टमं पर्व</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿नवम पर्व</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿दसम पर्व</option>");
  mySel.append("<option value='011.html'><b>011</b> - एकादस पर्व</option>");
  mySel.append("<option value='012.html'><b>012</b> - द्वादश पर्व</option>");
  mySel.append("<option value='013.html'><b>013</b> - त्रयोदश पर्व</option>");
  mySel.append("<option value='014.html'><b>014</b> - चौदहवाँ पर्व</option>");
  mySel.append("<option value='015.html'><b>015</b> - पन्द्रहवाँ पर्व</option>");
  mySel.append("<option value='016.html'><b>016</b> - सोलहवाँ पर्व</option>");
  mySel.append("<option value='017.html'><b>017</b> - सत्रहवाँ पर्व</option>");
  mySel.append("<option value='018.html'><b>018</b> - अठारहवाँ पर्व</option>");
  mySel.append("<option value='019.html'><b>019</b> - उन्नीसवाँ पर्व</option>");
  mySel.append("<option value='020.html'><b>020</b> - बीसवाँ पर्व</option>");
  mySel.append("<option value='021.html'><b>021</b> - इक्कीसवाँ पर्व</option>");
  mySel.append("<option value='022.html'><b>022</b> - बाईसवाँ पर्व</option>");
  mySel.append("<option value='023.html'><b>023</b> - तेईसवाँ पर्व</option>");
  mySel.append("<option value='024.html'><b>024</b> - चौबीसवाँ पर्व</option>");
  mySel.append("<option value='025.html'><b>025</b> - पच्चीसवाँ पर्व</option>");
  mySel.append("<option value='026.html'><b>026</b> - छब्बीसवाँ पर्व</option>");
  mySel.append("<option value='027.html'><b>027</b> - सत्ताईसवाँ पर्व</option>");
  mySel.append("<option value='028.html'><b>028</b> - अट्ठाईसवाँ पर्व</option>");
  mySel.append("<option value='029.html'><b>029</b> - उन्तीसवाँ पर्व</option>");
  mySel.append("<option value='030.html'><b>030</b> - तीसवाँ पर्व</option>");
  mySel.append("<option value='031.html'><b>031</b> - इकतीसवाँ पर्व</option>");
  mySel.append("<option value='032.html'><b>032</b> - बत्तीसवाँ पर्व</option>");
  mySel.append("<option value='033.html'><b>033</b> - तैंतीसवाँ पर्व</option>");
  mySel.append("<option value='034.html'><b>034</b> - चौंतीसवाँ पर्व</option>");
  mySel.append("<option value='035.html'><b>035</b> - पैंतीसवाँ पर्व</option>");
  mySel.append("<option value='036.html'><b>036</b> - छत्तीसवाँ पर्व</option>");
  mySel.append("<option value='037.html'><b>037</b> - सैंतीसवाँ पर्व</option>");
  mySel.append("<option value='038.html'><b>038</b> - अड़तीसवाँ पर्व</option>");
  mySel.append("<option value='039.html'><b>039</b> - उनतालीसवां पर्व</option>");
  mySel.append("<option value='040.html'><b>040</b> - चालीसवाँ पर्व</option>");
  mySel.append("<option value='041.html'><b>041</b> - इकतालीसवाँ पर्व</option>");
  mySel.append("<option value='042.html'><b>042</b> - बयालीसवाँ पर्व</option>");
  mySel.append("<option value='043.html'><b>043</b> - तैंतालीसवाँ पर्व</option>");
  mySel.append("<option value='044.html'><b>044</b> - चौवालीसवाँ पर्व</option>");
  mySel.append("<option value='045.html'><b>045</b> - पैतालीसवां पर्व</option>");
  mySel.append("<option value='046.html'><b>046</b> - छियालीसवाँ पर्व</option>");
  mySel.append("<option value='047.html'><b>047</b> - सैंतालीसवाँ पर्व</option>");
  mySel.append("<option value='048.html'><b>048</b> - अड़तालीसवाँ पर्व</option>");
  mySel.append("<option value='049.html'><b>049</b> - उनचासवां पर्व</option>");
  mySel.append("<option value='050.html'><b>050</b> - पचासवाँ पर्व</option>");
  mySel.append("<option value='051.html'><b>051</b> - इक्यावनवां पर्व</option>");
  mySel.append("<option value='052.html'><b>052</b> - बावनवां पर्व</option>");
  mySel.append("<option value='053.html'><b>053</b> - तिरेपनवां पर्व</option>");
  mySel.append("<option value='054.html'><b>054</b> - चौवनवां पर्व</option>");
  mySel.append("<option value='055.html'><b>055</b> - पचपनवां पर्व</option>");
  mySel.append("<option value='056.html'><b>056</b> - छप्पनवाँ पर्व</option>");
  mySel.append("<option value='057.html'><b>057</b> - सत्तावनवां पर्व</option>");
  mySel.append("<option value='058.html'><b>058</b> - अट्ठावनवाँ पर्व</option>");
  mySel.append("<option value='059.html'><b>059</b> - उनसठवां पर्व</option>");
  mySel.append("<option value='060.html'><b>060</b> - साठवां पर्व</option>");
  mySel.append("<option value='061.html'><b>061</b> - इकसठवां पर्व</option>");
  mySel.append("<option value='062.html'><b>062</b> - बासठवां पर्व</option>");
  mySel.append("<option value='063.html'><b>063</b> - तिरेसठवाँ पर्व</option>");
  mySel.append("<option value='064.html'><b>064</b> - चौसठवां पर्व</option>");
  mySel.append("<option value='065.html'><b>065</b> - पैसठवां पर्व</option>");
  mySel.append("<option value='066.html'><b>066</b> - छयासठवाँ पर्व</option>");
  mySel.append("<option value='067.html'><b>067</b> - सड़सठवां पर्व</option>");
  mySel.append("<option value='068.html'><b>068</b> - अड़सठवाँ पर्व</option>");
  mySel.append("<option value='069.html'><b>069</b> - उनहत्तरवाँ पर्व</option>");
  mySel.append("<option value='070.html'><b>070</b> - सत्तरहवां पर्व</option>");
  mySel.append("<option value='071.html'><b>071</b> - इकहत्तरवाँ पर्व</option>");
  mySel.append("<option value='072.html'><b>072</b> - बहत्तरवां पर्व</option>");
  mySel.append("<option value='073.html'><b>073</b> - तेहत्तरवां पर्व</option>");
  mySel.append("<option value='074.html'><b>074</b> - चौहत्तरवाँ पर्व</option>");
  mySel.append("<option value='075.html'><b>075</b> - पचहत्तरवां पर्व</option>");
  mySel.append("<option value='076.html'><b>076</b> - छिहत्तरवां पर्व</option>");
  mySel.append("<option value='077.html'><b>077</b> - सतहत्तरवाँ पर्व</option>");
  mySel.append("<option value='078.html'><b>078</b> - अठहत्तरवाँ पर्व</option>");
  mySel.append("<option value='079.html'><b>079</b> - उन्यासीवां पर्व</option>");
  mySel.append("<option value='080.html'><b>080</b> - अस्सीवाँ पर्व</option>");
  mySel.append("<option value='081.html'><b>081</b> - इक्यासीवां पर्व</option>");
  mySel.append("<option value='082.html'><b>082</b> - बयासीवां पर्व</option>");
  mySel.append("<option value='083.html'><b>083</b> - तेरासीवाँ पर्व</option>");
  mySel.append("<option value='084.html'><b>084</b> - चौरासीवाँ पर्व</option>");
  mySel.append("<option value='085.html'><b>085</b> - पिच्यासीवां पर्व</option>");
  mySel.append("<option value='086.html'><b>086</b> - छियासीवाँ पर्व</option>");
  mySel.append("<option value='087.html'><b>087</b> - सतासीवां पर्व</option>");
  mySel.append("<option value='088.html'><b>088</b> - अठासीवाँ पर्व</option>");
  mySel.append("<option value='089.html'><b>089</b> - नवासीवां पर्व</option>");
  mySel.append("<option value='090.html'><b>090</b> - नब्बेवाँ पर्व</option>");
  mySel.append("<option value='091.html'><b>091</b> - एकानवेवां पर्व</option>");
  mySel.append("<option value='092.html'><b>092</b> - बानवेवां पर्व</option>");
  mySel.append("<option value='093.html'><b>093</b> - तेरानवेवां पर्व</option>");
  mySel.append("<option value='094.html'><b>094</b> - चौरानवेवां पर्व</option>");
  mySel.append("<option value='095.html'><b>095</b> - पंचानवेवां पर्व</option>");
  mySel.append("<option value='096.html'><b>096</b> - छियानवेवाँ पर्व</option>");
  mySel.append("<option value='097.html'><b>097</b> - सतानवेवां पर्व</option>");
  mySel.append("<option value='098.html'><b>098</b> - अठानवेवाँ पर्व</option>");
  mySel.append("<option value='099.html'><b>099</b> - निन्यानवेवां पर्व</option>");
  mySel.append("<option value='100.html'><b>100</b> - सौवां पर्व</option>");
  mySel.append("<option value='101.html'><b>101</b> - एक सौ एकवां पर्व</option>");
  mySel.append("<option value='102.html'><b>102</b> - एक सौ दूसरा पर्व</option>");
  mySel.append("<option value='103.html'><b>103</b> - एक सौ तीसरा पर्व</option>");
  mySel.append("<option value='104.html'><b>104</b> - एक सौ चौथा पर्व</option>");
  mySel.append("<option value='105.html'><b>105</b> - एक सौ पाँचवाँ </option>");
  mySel.append("<option value='106.html'><b>106</b> - एक सौ छठवां पर्व</option>");
  mySel.append("<option value='107.html'><b>107</b> - एक सौ सातवाँ पर्व</option>");
  mySel.append("<option value='108.html'><b>108</b> - एक सौ आठवां पर्व</option>");
  mySel.append("<option value='109.html'><b>109</b> - एक सौ नौवाँ पर्व</option>");
  mySel.append("<option value='110.html'><b>110</b> - एक सौ दसवां पर्व</option>");
  mySel.append("<option value='111.html'><b>111</b> - एक सौ ग्यारहवाँ पर्व</option>");
  mySel.append("<option value='112.html'><b>112</b> - एक सौ बारहवाँ</option>");
  mySel.append("<option value='113.html'><b>113</b> - एक सौ तेरहवाँ पर्व</option>");
  mySel.append("<option value='114.html'><b>114</b> - एक सौ चौदहवाँ पर्व</option>");
  mySel.append("<option value='115.html'><b>115</b> - एक सौ पंद्रहवाँ पर्व</option>");
  mySel.append("<option value='116.html'><b>116</b> - एक सौ सोलहवां पर्व</option>");
  mySel.append("<option value='117.html'><b>117</b> - एक सौ सत्रहवाँ पर्व</option>");
  mySel.append("<option value='118.html'><b>118</b> - एक सौ अठारहवां पर्व</option>");
  mySel.append("<option value='119.html'><b>119</b> - एक सौ उन्नीसवाँ पर्व</option>");
  mySel.append("<option value='120.html'><b>120</b> - एक सौ बीसवां पर्व</option>");
  mySel.append("<option value='121.html'><b>121</b> - एक सौ इक्कीसवाँ पर्व</option>");
  mySel.append("<option value='122.html'><b>122</b> - एक सौ बाईसवां पर्व</option>");
  mySel.append("<option value='123.html'><b>123</b> - एक सौ तेईसवाँ पर्व</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
