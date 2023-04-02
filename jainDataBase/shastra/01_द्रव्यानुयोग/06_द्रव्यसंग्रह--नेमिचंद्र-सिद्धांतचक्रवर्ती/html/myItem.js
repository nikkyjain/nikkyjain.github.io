
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
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='01.html'><b>01</b> - ﻿मंगलाचरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿छह-द्रव्य अधिकार">')
       $optgrp.append("<option value='02.html'><b>02</b> - ﻿जीव द्रव्य के नव अधिकार</option>");
       $optgrp.append("<option value='03.html'><b>03</b> - ﻿जीवत्व का लक्षण</option>");
       $optgrp.append("<option value='04.html'><b>04</b> - ﻿उपयोग का वर्णन</option>");
       $optgrp.append("<option value='05.html'><b>05</b> - ﻿ज्ञानोपयोग के भेद</option>");
       $optgrp.append("<option value='06.html'><b>06</b> - ﻿उभयनय से उपयोग का लक्षण</option>");
       $optgrp.append("<option value='07.html'><b>07</b> - ﻿जीव अमूर्तिक है</option>");
       $optgrp.append("<option value='08.html'><b>08</b> - ﻿जीव कर्ता है</option>");
       $optgrp.append("<option value='09.html'><b>09</b> - ﻿जीव भोक्ता है</option>");
       $optgrp.append("<option value='10.html'><b>10</b> - ﻿जीव स्वदेह बराबर है</option>");
       $optgrp.append("<option value='11.html'><b>11</b> - ﻿जीव संसारी है</option>");
       $optgrp.append("<option value='12.html'><b>12</b> - ﻿चौदह जीव समास</option>");
       $optgrp.append("<option value='13.html'><b>13</b> - ﻿उभयनय से संसारी जीव का स्वरूप</option>");
       $optgrp.append("<option value='14.html'><b>14</b> - ﻿सिद्ध और ऊर्ध्वगमन का स्वरूप</option>");
       $optgrp.append("<option value='15.html'><b>15</b> - ﻿अजीव द्रव्य और उनमें मूर्तिक-अमूर्तिक द्रव्य</option>");
       $optgrp.append("<option value='16.html'><b>16</b> - ﻿पुद्गल द्रव्य की विभाव व्यंजन पर्यायें</option>");
       $optgrp.append("<option value='17.html'><b>17</b> - ﻿धर्म द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='18.html'><b>18</b> - ﻿अधर्म द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='19.html'><b>19</b> - ﻿आकाश द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='20.html'><b>20</b> - ﻿लोकाकाश-अलोकाकाश का स्वरूप</option>");
       $optgrp.append("<option value='21.html'><b>21</b> - ﻿कालद्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='22.html'><b>22</b> - ﻿काल द्रव्य की संख्या</option>");
       $optgrp.append("<option value='23.html'><b>23</b> - ﻿द्रव्य और अस्तिकाय के भेद</option>");
       $optgrp.append("<option value='24.html'><b>24</b> - ﻿अस्तिकाय का स्वरूप और नाम की सार्थकता</option>");
       $optgrp.append("<option value='25.html'><b>25</b> - ﻿द्रव्यों की प्रदेश संख्या</option>");
       $optgrp.append("<option value='26.html'><b>26</b> - ﻿पुद्गल का परमाणु अस्तिकाय है</option>");
       $optgrp.append("<option value='27.html'><b>27</b> - ﻿प्रदेश का लक्षण और उसकी योग्यता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सात-तत्त्व अधिकार">')
       $optgrp.append("<option value='28.html'><b>28</b> - ﻿सात तत्त्व</option>");
       $optgrp.append("<option value='29.html'><b>29</b> - ﻿भावास्रव और द्रव्यास्रव</option>");
       $optgrp.append("<option value='30.html'><b>30</b> - ﻿भावास्रव के भेद</option>");
       $optgrp.append("<option value='31.html'><b>31</b> - ﻿द्रव्यास्रव का स्वरूप और भेद</option>");
       $optgrp.append("<option value='32.html'><b>32</b> - ﻿भावबंध और द्रव्यबंध</option>");
       $optgrp.append("<option value='33.html'><b>33</b> - ﻿बन्ध के भेद और कारण</option>");
       $optgrp.append("<option value='34.html'><b>34</b> - ﻿भावसंवर और द्रव्यसंवर का स्वरूप</option>");
       $optgrp.append("<option value='35.html'><b>35</b> - ﻿भावसंवर के भेद</option>");
       $optgrp.append("<option value='36.html'><b>36</b> - ﻿निर्जरा का स्वरूप</option>");
       $optgrp.append("<option value='37.html'><b>37</b> - ﻿मोक्ष का स्वरूप और उसके भेद</option>");
       $optgrp.append("<option value='38.html'><b>38</b> - ﻿पुण्य और पाप पदार्थ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-अधिकार">')
       $optgrp.append("<option value='39.html'><b>39</b> - ﻿व्यवहार और निश्चय मोक्ष मार्ग</option>");
       $optgrp.append("<option value='40.html'><b>40</b> - ﻿आत्मा ही निश्चयनय से मोक्ष मार्ग है</option>");
       $optgrp.append("<option value='41.html'><b>41</b> - ﻿व्यवहार सम्यग्दर्शन</option>");
       $optgrp.append("<option value='42.html'><b>42</b> - ﻿सम्यग्ज्ञान का स्वरूप</option>");
       $optgrp.append("<option value='43.html'><b>43</b> - ﻿दर्शनोपयोग का स्वरूप</option>");
       $optgrp.append("<option value='44.html'><b>44</b> - ﻿दर्शन और ज्ञान का क्रम</option>");
       $optgrp.append("<option value='45.html'><b>45</b> - ﻿व्यवहार सम्यक्चारित्र और उसके भेद</option>");
       $optgrp.append("<option value='46.html'><b>46</b> - ﻿निश्चयचारित्र का लक्षण</option>");
       $optgrp.append("<option value='47.html'><b>47</b> - ﻿ध्यानाभ्यास की प्ररेणा</option>");
       $optgrp.append("<option value='48.html'><b>48</b> - ﻿ध्यान का उपाय</option>");
       $optgrp.append("<option value='49.html'><b>49</b> - ﻿ध्यान के योग्य मंत्र</option>");
       $optgrp.append("<option value='50.html'><b>50</b> - ﻿अरिहंत परमेष्ठी का लक्षण</option>");
       $optgrp.append("<option value='51.html'><b>51</b> - ﻿सिद्ध परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='52.html'><b>52</b> - ﻿आचार्य परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='53.html'><b>53</b> - ﻿उपाध्याय परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='54.html'><b>54</b> - ﻿साधु परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='55.html'><b>55</b> - ﻿निश्चयध्यान का लक्षण</option>");
       $optgrp.append("<option value='56.html'><b>56</b> - ﻿परमध्यान का लक्षण</option>");
       $optgrp.append("<option value='57.html'><b>57</b> - ﻿ध्यान का कारण</option>");
       $optgrp.append("<option value='58.html'><b>58</b> - ﻿ग्रन्थकर्ता का लघुता प्रकाशन</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
$( document ).ready(function() {
  mySel=$('select#select-native-1')
    $optgrp=$('<optgroup label="﻿मंगलाचरण">')
       $optgrp.append("<option value='01.html'><b>01</b> - ﻿मंगलाचरण</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿छह-द्रव्य अधिकार">')
       $optgrp.append("<option value='02.html'><b>02</b> - ﻿जीव द्रव्य के नव अधिकार</option>");
       $optgrp.append("<option value='03.html'><b>03</b> - ﻿जीवत्व का लक्षण</option>");
       $optgrp.append("<option value='04.html'><b>04</b> - ﻿उपयोग का वर्णन</option>");
       $optgrp.append("<option value='05.html'><b>05</b> - ﻿ज्ञानोपयोग के भेद</option>");
       $optgrp.append("<option value='06.html'><b>06</b> - ﻿उभयनय से उपयोग का लक्षण</option>");
       $optgrp.append("<option value='07.html'><b>07</b> - ﻿जीव अमूर्तिक है</option>");
       $optgrp.append("<option value='08.html'><b>08</b> - ﻿जीव कर्ता है</option>");
       $optgrp.append("<option value='09.html'><b>09</b> - ﻿जीव भोक्ता है</option>");
       $optgrp.append("<option value='10.html'><b>10</b> - ﻿जीव स्वदेह बराबर है</option>");
       $optgrp.append("<option value='11.html'><b>11</b> - ﻿जीव संसारी है</option>");
       $optgrp.append("<option value='12.html'><b>12</b> - ﻿चौदह जीव समास</option>");
       $optgrp.append("<option value='13.html'><b>13</b> - ﻿उभयनय से संसारी जीव का स्वरूप</option>");
       $optgrp.append("<option value='14.html'><b>14</b> - ﻿सिद्ध और ऊर्ध्वगमन का स्वरूप</option>");
       $optgrp.append("<option value='15.html'><b>15</b> - ﻿अजीव द्रव्य और उनमें मूर्तिक-अमूर्तिक द्रव्य</option>");
       $optgrp.append("<option value='16.html'><b>16</b> - ﻿पुद्गल द्रव्य की विभाव व्यंजन पर्यायें</option>");
       $optgrp.append("<option value='17.html'><b>17</b> - ﻿धर्म द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='18.html'><b>18</b> - ﻿अधर्म द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='19.html'><b>19</b> - ﻿आकाश द्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='20.html'><b>20</b> - ﻿लोकाकाश-अलोकाकाश का स्वरूप</option>");
       $optgrp.append("<option value='21.html'><b>21</b> - ﻿कालद्रव्य का स्वरूप</option>");
       $optgrp.append("<option value='22.html'><b>22</b> - ﻿काल द्रव्य की संख्या</option>");
       $optgrp.append("<option value='23.html'><b>23</b> - ﻿द्रव्य और अस्तिकाय के भेद</option>");
       $optgrp.append("<option value='24.html'><b>24</b> - ﻿अस्तिकाय का स्वरूप और नाम की सार्थकता</option>");
       $optgrp.append("<option value='25.html'><b>25</b> - ﻿द्रव्यों की प्रदेश संख्या</option>");
       $optgrp.append("<option value='26.html'><b>26</b> - ﻿पुद्गल का परमाणु अस्तिकाय है</option>");
       $optgrp.append("<option value='27.html'><b>27</b> - ﻿प्रदेश का लक्षण और उसकी योग्यता</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿सात-तत्त्व अधिकार">')
       $optgrp.append("<option value='28.html'><b>28</b> - ﻿सात तत्त्व</option>");
       $optgrp.append("<option value='29.html'><b>29</b> - ﻿भावास्रव और द्रव्यास्रव</option>");
       $optgrp.append("<option value='30.html'><b>30</b> - ﻿भावास्रव के भेद</option>");
       $optgrp.append("<option value='31.html'><b>31</b> - ﻿द्रव्यास्रव का स्वरूप और भेद</option>");
       $optgrp.append("<option value='32.html'><b>32</b> - ﻿भावबंध और द्रव्यबंध</option>");
       $optgrp.append("<option value='33.html'><b>33</b> - ﻿बन्ध के भेद और कारण</option>");
       $optgrp.append("<option value='34.html'><b>34</b> - ﻿भावसंवर और द्रव्यसंवर का स्वरूप</option>");
       $optgrp.append("<option value='35.html'><b>35</b> - ﻿भावसंवर के भेद</option>");
       $optgrp.append("<option value='36.html'><b>36</b> - ﻿निर्जरा का स्वरूप</option>");
       $optgrp.append("<option value='37.html'><b>37</b> - ﻿मोक्ष का स्वरूप और उसके भेद</option>");
       $optgrp.append("<option value='38.html'><b>38</b> - ﻿पुण्य और पाप पदार्थ</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="﻿मोक्ष-अधिकार">')
       $optgrp.append("<option value='39.html'><b>39</b> - ﻿व्यवहार और निश्चय मोक्ष मार्ग</option>");
       $optgrp.append("<option value='40.html'><b>40</b> - ﻿आत्मा ही निश्चयनय से मोक्ष मार्ग है</option>");
       $optgrp.append("<option value='41.html'><b>41</b> - ﻿व्यवहार सम्यग्दर्शन</option>");
       $optgrp.append("<option value='42.html'><b>42</b> - ﻿सम्यग्ज्ञान का स्वरूप</option>");
       $optgrp.append("<option value='43.html'><b>43</b> - ﻿दर्शनोपयोग का स्वरूप</option>");
       $optgrp.append("<option value='44.html'><b>44</b> - ﻿दर्शन और ज्ञान का क्रम</option>");
       $optgrp.append("<option value='45.html'><b>45</b> - ﻿व्यवहार सम्यक्चारित्र और उसके भेद</option>");
       $optgrp.append("<option value='46.html'><b>46</b> - ﻿निश्चयचारित्र का लक्षण</option>");
       $optgrp.append("<option value='47.html'><b>47</b> - ﻿ध्यानाभ्यास की प्ररेणा</option>");
       $optgrp.append("<option value='48.html'><b>48</b> - ﻿ध्यान का उपाय</option>");
       $optgrp.append("<option value='49.html'><b>49</b> - ﻿ध्यान के योग्य मंत्र</option>");
       $optgrp.append("<option value='50.html'><b>50</b> - ﻿अरिहंत परमेष्ठी का लक्षण</option>");
       $optgrp.append("<option value='51.html'><b>51</b> - ﻿सिद्ध परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='52.html'><b>52</b> - ﻿आचार्य परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='53.html'><b>53</b> - ﻿उपाध्याय परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='54.html'><b>54</b> - ﻿साधु परमेष्ठी का स्वरूप</option>");
       $optgrp.append("<option value='55.html'><b>55</b> - ﻿निश्चयध्यान का लक्षण</option>");
       $optgrp.append("<option value='56.html'><b>56</b> - ﻿परमध्यान का लक्षण</option>");
       $optgrp.append("<option value='57.html'><b>57</b> - ﻿ध्यान का कारण</option>");
       $optgrp.append("<option value='58.html'><b>58</b> - ﻿ग्रन्थकर्ता का लघुता प्रकाशन</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
