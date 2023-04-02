
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
    $optgrp=$('<optgroup label="﻿प्रथम-अधिकार">')
       $optgrp.append("<option value='01.html'><b>01</b> - ﻿प्रथम-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿दूसरा-अधिकार">')
       $optgrp.append("<option value='02.html'><b>02</b> - ﻿दूसरा-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿तीसरा-अधिकार">')
       $optgrp.append("<option value='03.html'><b>03</b> - ﻿तीसरा-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चौथा-अधिकार">')
       $optgrp.append("<option value='04.html'><b>04</b> - ﻿चौथा-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पाँचवाँ-अधिकार">')
       $optgrp.append("<option value='05.html'><b>05</b> - ﻿पाँचवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿छठा-अधिकार">')
       $optgrp.append("<option value='06.html'><b>06</b> - ﻿छठा-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सातवाँ-अधिकार">')
       $optgrp.append("<option value='07.html'><b>07</b> - ﻿सातवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आठवाँ-अधिकार">')
       $optgrp.append("<option value='08.html'><b>08</b> - ﻿आठवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नवां-अधिकार">')
       $optgrp.append("<option value='09.html'><b>09</b> - ﻿नवां-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿दसवां-अधिकार">')
       $optgrp.append("<option value='10.html'><b>10</b> - ﻿दसवां-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿ग्यारहवाँ-अधिकार">')
       $optgrp.append("<option value='11.html'><b>11</b> - ﻿ग्यारहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बारहवाँ-अधिकार">')
       $optgrp.append("<option value='12.html'><b>12</b> - ﻿बारहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿तेरहवाँ-अधिकार">')
       $optgrp.append("<option value='13.html'><b>13</b> - ﻿तेरहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चौदहवाँ-अधिकार">')
       $optgrp.append("<option value='14.html'><b>14</b> - ﻿चौदहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पंद्रहवाँ-अधिकार">')
       $optgrp.append("<option value='15.html'><b>15</b> - ﻿पंद्रहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सोलहवां-अधिकार">')
       $optgrp.append("<option value='16.html'><b>16</b> - ﻿सोलहवां-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सत्रहवाँ-अधिकार">')
       $optgrp.append("<option value='17.html'><b>17</b> - ﻿सत्रहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अठारहवाँ-अधिकार">')
       $optgrp.append("<option value='18.html'><b>18</b> - ﻿अठारहवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿उन्नीसवाँ-अधिकार">')
       $optgrp.append("<option value='19.html'><b>19</b> - ﻿उन्नीसवाँ-अधिकार</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
