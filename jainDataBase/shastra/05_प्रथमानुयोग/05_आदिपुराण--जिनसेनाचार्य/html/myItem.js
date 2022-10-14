
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
  mySel.append("<option value='01.html'><b>01</b> - ﻿पर्व-01 -- कथामुखवर्णन</option>");
  mySel.append("<option value='02.html'><b>02</b> - ﻿पर्व-02 -- कथामुखवर्णन</option>");
  mySel.append("<option value='03.html'><b>03</b> - ﻿पर्व-03 -- पीठिकावर्णन</option>");
  mySel.append("<option value='04.html'><b>04</b> - ﻿पर्व-04 -- श्रीमहाबलाभ्‍युदयवर्णन</option>");
  mySel.append("<option value='05.html'><b>05</b> - ﻿पर्व-05 -- ललिताङ्ग स्वर्गभोग वर्णन</option>");
  mySel.append("<option value='06.html'><b>06</b> - ﻿पर्व-06 -- ललितांगदेव स्वर्ग से च्युत</option>");
  mySel.append("<option value='07.html'><b>07</b> - ﻿पर्व-07 -- श्रीमती और वज्रजंघ का समागम</option>");
  mySel.append("<option value='08.html'><b>08</b> - ﻿पर्व-08 -- श्रीमती और वज्रजंघ द्वारा पात्रदान</option>");
  mySel.append("<option value='09.html'><b>09</b> - ﻿पर्व-09 -- श्रीमती और वज्रजंघ को सम्यग्दर्शन की उत्पत्ति</option>");
  mySel.append("<option value='10.html'><b>10</b> - ﻿पर्व-10 -- अच्युतेन्द्र का ऐश्‍वर्य</option>");
  mySel.append("<option value='11.html'><b>11</b> - ﻿पर्व-11 -- वज्रनाभि के सर्वार्थसिद्धिगमन</option>");
  mySel.append("<option value='12.html'><b>12</b> - ﻿पर्व-12 -- भगवान का स्वर्गावतरण</option>");
  mySel.append("<option value='13.html'><b>13</b> - ﻿पर्व-13 -- भगवान का जन्माभिषेक</option>");
  mySel.append("<option value='14.html'><b>14</b> - ﻿पर्व-14 -- भगवज्‍जातकर्मोत्सव</option>");
  mySel.append("<option value='15.html'><b>15</b> - ﻿पर्व-15 -- भगवान का कुमारकाल, यशस्वती-सुनन्दा का विवाह, भरत की उत्पत्ति</option>");
  mySel.append("<option value='16.html'><b>16</b> - ﻿पर्व-16 -- भगवान्‌ के साम्राज्‍य का वर्णन</option>");
  mySel.append("<option value='17.html'><b>17</b> - ﻿पर्व-17 -- भगवान्‌ का तप-कल्याणक</option>");
  mySel.append("<option value='18.html'><b>18</b> - ﻿पर्व-18 -- धरणेन्‍द्र का विजयार्ध पर्वत पर जाना</option>");
  mySel.append("<option value='19.html'><b>19</b> - ﻿पर्व-19 -- नमि-विनमि को राज्यप्राप्ति</option>");
  mySel.append("<option value='20.html'><b>20</b> - ﻿पर्व-20 -- भगवान को कैवल्‍योत्‍पत्ति</option>");
  mySel.append("<option value='21.html'><b>21</b> - ﻿पर्व-21 -- ध्यानतत्त्व</option>");
  mySel.append("<option value='22.html'><b>22</b> - ﻿पर्व-22 -- समवसरण</option>");
  mySel.append("<option value='23.html'><b>23</b> - ﻿पर्व-23 -- समवसरणविभूति</option>");
  mySel.append("<option value='24.html'><b>24</b> - ﻿पर्व-24 -- भगवत्‍कृत धर्मोपदेश</option>");
  mySel.append("<option value='25.html'><b>25</b> - ﻿पर्व-25 -- भगवान का विहार</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
