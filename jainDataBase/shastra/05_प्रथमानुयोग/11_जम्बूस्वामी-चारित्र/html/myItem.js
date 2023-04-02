
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
       $optgrp.append("<option value='01.html'><b>01</b> - ﻿भूमिका</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿दूसरा-अधिकार">')
       $optgrp.append("<option value='02.html'><b>02</b> - ﻿भरतक्षेत्र का मगधदेश</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿तीसरा-अधिकार">')
       $optgrp.append("<option value='03.html'><b>03</b> - ﻿धर्मनगरी राजगृही</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चौथा-अधिकार">')
       $optgrp.append("<option value='04.html'><b>04</b> - ﻿धर्मपरायण महाराज श्रेणिक</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿विपुलाचल पर वीर प्रभो">')
       $optgrp.append("<option value='05.html'><b>05</b> - ﻿पाँचवाँ-अधिकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿छठा-अधिकार">')
       $optgrp.append("<option value='06.html'><b>06</b> - ﻿ऐरावत हाथी</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सातवाँ-अधिकार">')
       $optgrp.append("<option value='07.html'><b>07</b> - ﻿जिनेन्द्र का समवशरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿आठवाँ-अधिकार">')
       $optgrp.append("<option value='08.html'><b>08</b> - ﻿समवशरण की रचना</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿नवां-अधिकार">')
       $optgrp.append("<option value='09.html'><b>09</b> - ﻿श्रेणिक को समवशरण के समाचार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿दसवां-अधिकार">')
       $optgrp.append("<option value='10.html'><b>10</b> - ﻿भावदेव-भवदेव ब्राह्मण की कथा</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿ग्यारहवाँ-अधिकार">')
       $optgrp.append("<option value='11.html'><b>11</b> - ﻿श्री सौधर्माचार्यजी का धर्मोपदेश</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿बारहवाँ-अधिकार">')
       $optgrp.append("<option value='12.html'><b>12</b> - ﻿संसार से विरक्त भावदेव की मुनिदीक्षा</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿तेरहवाँ-अधिकार">')
       $optgrp.append("<option value='13.html'><b>13</b> - ﻿भावदेव मुनिवर द्वारा वैरागी धर्मवर्षा</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿चौदहवाँ-अधिकार">')
       $optgrp.append("<option value='14.html'><b>14</b> - ﻿भवदेव द्वारा मुनिदीक्षा अंगीकार</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿पंद्रहवाँ-अधिकार">')
       $optgrp.append("<option value='15.html'><b>15</b> - ﻿नागवसु द्वारा आर्यिका व्रत धारण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सोलहवां-अधिकार">')
       $optgrp.append("<option value='16.html'><b>16</b> - ﻿आर्यिका नागवसु द्वारा भवदेव का स्थितिकरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सत्रहवाँ-अधिकार">')
       $optgrp.append("<option value='17.html'><b>17</b> - ﻿मोक्षसाधिका नागवसु आर्यिका द्वारा भवदेव मुनि को संबोधन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿अठारहवाँ-अधिकार">')
       $optgrp.append("<option value='18.html'><b>18</b> - ﻿भवदेव मुनि द्वारा उत्कृष्ट मुनिचर्या का पालन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿उन्नीसवाँ-अधिकार">')
       $optgrp.append("<option value='19.html'><b>19</b> - ﻿उन्नीसवाँ-अधिकार</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
