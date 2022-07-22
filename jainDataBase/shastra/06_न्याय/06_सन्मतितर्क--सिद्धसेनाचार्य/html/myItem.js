
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
  mySel.append("<option value='2-10-14.html'><b>2-10-14</b> - ﻿सर्वज्ञ सामान्य-विशेष रूप पदार्थों का ज्ञाता</option>");
  mySel.append("<option value='2-15.html'><b>2-15</b> - ﻿क्रमोपयोगवादी का कथन</option>");
  mySel.append("<option value='2-16-17.html'><b>2-16-17</b> - ﻿ज्ञान का विषय पदार्थ </option>");
  mySel.append("<option value='2-18.html'><b>2-18</b> - ﻿सामर्थ्य के अनुसार सूत्रों की व्याख्या</option>");
  mySel.append("<option value='2-19.html'><b>2-19</b> - ﻿मन:पर्यय ज्ञान ही है दर्शन नहीं</option>");
  mySel.append("<option value='2-20.html'><b>2-20</b> - ﻿केवलदर्शन, केवलज्ञान कहने का तात्पर्य</option>");
  mySel.append("<option value='2-21-22.html'><b>2-21-22</b> - ﻿केवलदर्शन और केवलज्ञान में अन्तर क्‍या ?</option>");
  mySel.append("<option value='2-23-24.html'><b>2-23-24</b> - ﻿मतिज्ञान ही दर्शन</option>");
  mySel.append("<option value='2-25.html'><b>2-25</b> - ﻿आगम में चक्षुदर्शन, अचक्षुदर्शन क्यों?</option>");
  mySel.append("<option value='2-26.html'><b>2-26</b> - ﻿मन:पर्यय ज्ञान में मन:पर्यय दर्शन का प्रसंग नहीं </option>");
  mySel.append("<option value='2-27.html'><b>2-27</b> - ﻿अल्पज्ञ का पदार्थ-ज्ञान दर्शनपूर्वक</option>");
  mySel.append("<option value='2-28.html'><b>2-28</b> - ﻿श्रुतज्ञान में दर्शन शब्द लागू नहीं</option>");
  mySel.append("<option value='2-29.html'><b>2-29</b> - ﻿अवधिज्ञान में दर्शन शब्द का प्रयोग उपयुक्त</option>");
  mySel.append("<option value='2-30.html'><b>2-30</b> - ﻿केवली के भेदविहीन ज्ञान, दर्शन</option>");
  mySel.append("<option value='2-43.html'><b>2-43</b> - ﻿केवलज्ञान : असंख्यात और अनन्त भी</option>");
  mySel.append("<option value='3-07.html'><b>3-07</b> - ﻿एक ही पुरुष में भेदाभेद</option>");
  mySel.append("<option value='3-08.html'><b>3-08</b> - ﻿क्‍या द्रव्य और गुण में भेद है?</option>");
  mySel.append("<option value='3-20.html'><b>3-20</b> - ﻿अभेदवादी का कथन</option>");
  mySel.append("<option value='3-21.html'><b>3-21</b> - ﻿सिद्धान्ती का तर्क</option>");
  mySel.append("<option value='3-22.html'><b>3-22</b> - ﻿प्रश्नोत्तर</option>");
  mySel.append("<option value='3-23-24.html'><b>3-23-24</b> - ﻿उत्पाद-व्यय-ध्रौव्य लक्षण-विचार</option>");
  mySel.append("<option value='3-25-26.html'><b>3-25-26</b> - ﻿प्रस्तुत वार्ता का प्रयोजन</option>");
  mySel.append("<option value='3-35-37.html'><b>3-35-37</b> - ﻿उत्पाद, व्यय और ध्रौव्य भिन्‍न तथा अभिन्‍न भी</option>");
  mySel.append("<option value='3-43-45.html'><b>3-43-45</b> - ﻿धर्मवाद</option>");
  mySel.append("<option value='3-50-52.html'><b>3-50-52</b> - ﻿वे सभी सदोष</option>");
  mySel.append("<option value='3-53.html'><b>3-53</b> - ﻿कार्य की उत्पत्ति स्व-कारण से</option>");
  mySel.append("<option value='3-54-55.html'><b>3-54-55</b> - ﻿अनात्मवादी और आत्मवादी </option>");
  mySel.append("<option value='3-56-59.html'><b>3-56-59</b> - ﻿अनेकान्त-दृष्टि के अभाव में</option>");
  mySel.append("<option value='3-60.html'><b>3-60</b> - ﻿पदार्थ के प्रतिपादन का क्रम</option>");
  mySel.append("<option value='3-61-62.html'><b>3-61-62</b> - ﻿अनेकान्ती ही भावस्पर्शी</option>");
  mySel.append("<option value='3-63.html'><b>3-63</b> - ﻿भक्ति या जानकारी मात्र से ज्ञानी नहीं</option>");
  mySel.append("<option value='3-64-65.html'><b>3-64-65</b> - ﻿अर्थ-ज्ञान दुर्लभ है</option>");
  mySel.append("<option value='3-66-67.html'><b>3-66-67</b> - ﻿ज्ञान-विहीन पर-समय</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
