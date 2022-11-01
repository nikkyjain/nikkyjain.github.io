
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
  mySel.append("<option value='001.html'><b>001</b> - समस्त मतों के सिद्धान्तों का ज्ञान</option>");
  mySel.append("<option value='002.html'><b>002</b> - आप्त स्वरूप की मीमांसा</option>");
  mySel.append("<option value='003.html'><b>003</b> - आगम और तत्त्व की मीमांसा </option>");
  mySel.append("<option value='004.html'><b>004</b> - मूढ़ता का निषेध</option>");
  mySel.append("<option value='005.html'><b>005</b> - सम्यग्दर्शन के दोष</option>");
  mySel.append("<option value='006.html'><b>006</b> - जिनदत्त और राजा पद्मरथ के प्रतिज्ञा निर्वाह का साहस</option>");
  mySel.append("<option value='007.html'><b>007</b> - निःशंकित तत्त्व</option>");
  mySel.append("<option value='008.html'><b>008</b> - निःकांक्षित तत्त्व</option>");
  mySel.append("<option value='009.html'><b>009</b> - निर्विचिकित्सा अङ्ग </option>");
  mySel.append("<option value='010.html'><b>010</b> - भव्यसेन मुनि की दुश्चेष्टा</option>");
  mySel.append("<option value='011.html'><b>011</b> - अमूढ़ता अंग</option>");
  mySel.append("<option value='013.html'><b>013</b> - वारिषेणकुमार का प्रव्रज्याव्रजन</option>");
  mySel.append("<option value='014.html'><b>014</b> - स्थितिकरण</option>");
  mySel.append("<option value='015.html'><b>015</b> - वज्रकुमार का विद्याधर से समागम</option>");
  mySel.append("<option value='016.html'><b>016</b> - वज्रकुमार द्वारा तप ग्रहण</option>");
  mySel.append("<option value='017.html'><b>017</b> - बुद्धदासी द्वारा पूतिकवाहन का वरण</option>");
  mySel.append("<option value='018.html'><b>018</b> - प्रभावना अंग</option>");
  mySel.append("<option value='019.html'><b>019</b> - बलि को देशनिर्वासन</option>");
  mySel.append("<option value='020.html'><b>020</b> - वात्सल्य अंग</option>");
  mySel.append("<option value='021.html'><b>021</b> - रत्नत्रय का स्वरूप</option>");
  mySel.append("<option value='022.html'><b>022</b> - मद्य के दोष</option>");
  mySel.append("<option value='023.html'><b>023</b> - मद्यत्याग के गुण</option>");
  mySel.append("<option value='024.html'><b>024</b> - मांस की इच्छा मात्र करने का फल</option>");
  mySel.append("<option value='025.html'><b>025</b> - मांस त्याग का फल</option>");
  mySel.append("<option value='026.html'><b>026</b> - अहिंसा का फल</option>");
  mySel.append("<option value='027.html'><b>027</b> - चोरी का फल</option>");
  mySel.append("<option value='028.html'><b>028</b> - सुलसा का सगर के साथ संगम</option>");
  mySel.append("<option value='029.html'><b>029</b> - वसु की रसातल-प्राप्ति</option>");
  mySel.append("<option value='030.html'><b>030</b> - असत्य का फल</option>");
  mySel.append("<option value='031.html'><b>031</b> - दुराचार का फल</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
