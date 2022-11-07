
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
  mySel.append("<option value='01.html'><b>01</b> - मंगलाचरण</option>");
  mySel.append("<option value='02.html'><b>02</b> - प्रथम दिन की कथा</option>");
  mySel.append("<option value='03.html'><b>03</b> - द्वितीय दिन कथा</option>");
  mySel.append("<option value='04.html'><b>04</b> - तृतीय दिन कथा</option>");
  mySel.append("<option value='05.html'><b>05</b> - चतुर्थ दिन की कथा</option>");
  mySel.append("<option value='06.html'><b>06</b> - पञ्चम दिन की कथा</option>");
  mySel.append("<option value='07.html'><b>07</b> - षठ दिन की कथा</option>");
  mySel.append("<option value='08.html'><b>08</b> - सप्तमदिन की कथा</option>");
  mySel.append("<option value='09.html'><b>09</b> - अष्टम दिन वार्ता</option>");
  mySel.append("<option value='10.html'><b>10</b> - सम्यक्त्व को प्राप्त कराने वाली मित्रश्री की कथा</option>");
  mySel.append("<option value='11.html'><b>11</b> - सम्यक्त्व को प्राप्त कराने वाली चन्दनश्री की कथा</option>");
  mySel.append("<option value='12.html'><b>12</b> - सम्यक्त्व प्राप्त विष्णुश्री की कथा</option>");
  mySel.append("<option value='13.html'><b>13</b> - सम्यक्त्व को प्राप्त कराने वाली नागश्री की कथा</option>");
  mySel.append("<option value='14.html'><b>14</b> - सम्यक्त्व को प्राप्त कराने वाली पद्मलता की कथा</option>");
  mySel.append("<option value='15.html'><b>15</b> - सम्यक्त्व को प्राप्त कराने वाली कनकलता की कथा</option>");
  mySel.append("<option value='16.html'><b>16</b> - सम्यक्त्व को प्राप्त कराने वाली विद्युल्लता की कथा</option>");
  mySel.append("<option value='17.html'><b>17</b> - उपसंहार</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
