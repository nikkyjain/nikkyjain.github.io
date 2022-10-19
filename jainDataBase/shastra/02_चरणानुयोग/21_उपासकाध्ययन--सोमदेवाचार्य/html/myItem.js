
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
  mySel.append("<option value='017-019.html'><b>017-019</b> - वैशेषिक मत का निराकरण</option>");
  mySel.append("<option value='026.html'><b>026</b> - नैरात्म्य भावना से मुक्ति का खण्डन</option>");
  mySel.append("<option value='029.html'><b>029</b> - चार्वाक मत का खण्डन</option>");
  mySel.append("<option value='031.html'><b>031</b> - शून्यवादी बौद्ध मत का खण्डन</option>");
  mySel.append("<option value='048.html'><b>048</b> - सम्यक्त्व का माहात्म्य</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
