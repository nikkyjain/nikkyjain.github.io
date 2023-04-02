
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
  mySel.append("<option value='01.html'><b>01</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='02.html'><b>02</b> - ﻿आत्‍मा को स्‍वयं ही स्‍वरूप की उपलब्धि कैसे?</option>");
  mySel.append("<option value='03.html'><b>03</b> - ﻿अव्रत से व्रत धारण श्रेष्ठ</option>");
  mySel.append("<option value='04.html'><b>04</b> - ﻿व्रत से स्वर्ग-मोक्ष की प्राप्ति</option>");
  mySel.append("<option value='05.html'><b>05</b> - ﻿स्वर्ग सुख का वर्णन</option>");
  mySel.append("<option value='06.html'><b>06</b> - ﻿इन्द्रिय सुख-दुःख कल्पना जन्य</option>");
  mySel.append("<option value='07.html'><b>07</b> - ﻿मोह ही अज्ञान</option>");
  mySel.append("<option value='08.html'><b>08</b> - ﻿मोही जीव की पहचान</option>");
  mySel.append("<option value='09.html'><b>09</b> - ﻿संसार का स्वरूप</option>");
  mySel.append("<option value='10.html'><b>10</b> - ﻿दूसरों को दुखी करने से स्वयं दुःख की प्राप्ति</option>");
  mySel.append("<option value='11.html'><b>11</b> - ﻿अज्ञान से राग-द्वेष द्वारा संसार परिभ्रमण</option>");
  mySel.append("<option value='12.html'><b>12</b> - ﻿संसार में दुःख</option>");
  mySel.append("<option value='13.html'><b>13</b> - ﻿संसार में सुख की कल्पना व्यर्थ</option>");
  mySel.append("<option value='14.html'><b>14</b> - ﻿मोही जीव आने वाली विपत्तियों को भी नहीं देखता</option>");
  mySel.append("<option value='15.html'><b>15</b> - ﻿मोही धन को काल (प्राण) से भी अधिक चाहता है </option>");
  mySel.append("<option value='16.html'><b>16</b> - ﻿धन-कमाने की इच्छा - मोह</option>");
  mySel.append("<option value='17.html'><b>17</b> - ﻿भोग-उपभोग दुःख के कारण</option>");
  mySel.append("<option value='18.html'><b>18</b> - ﻿शरीर दुःख का कारण</option>");
  mySel.append("<option value='19.html'><b>19</b> - ﻿शरीर के उपकार में आत्मा का अपकार</option>");
  mySel.append("<option value='20.html'><b>20</b> - ﻿ध्यान से सभी इष्ट की प्राप्ति</option>");
  mySel.append("<option value='21.html'><b>21</b> - ﻿आत्मा का स्वरूप</option>");
  mySel.append("<option value='22.html'><b>22</b> - ﻿मन और इन्द्रियों को वश में कर ध्यान करें</option>");
  mySel.append("<option value='23.html'><b>23</b> - ﻿वैयावृत्ति की प्रेरणा</option>");
  mySel.append("<option value='24.html'><b>24</b> - ﻿ध्यान द्वारा कर्मों की निर्जरा</option>");
  mySel.append("<option value='25.html'><b>25</b> - ﻿आत्मा में आत्मा द्वारा आत्मा का ध्यान</option>");
  mySel.append("<option value='26.html'><b>26</b> - ﻿ममत्व भाव बंध का करण, अत: हेय</option>");
  mySel.append("<option value='27.html'><b>27</b> - ﻿भेद-ज्ञान की प्रेरणा</option>");
  mySel.append("<option value='28.html'><b>28</b> - ﻿देह के सम्बन्ध को दुःख का करण जानकर छोडो </option>");
  mySel.append("<option value='29.html'><b>29</b> - ﻿देह से भिन्नता</option>");
  mySel.append("<option value='30.html'><b>30</b> - ﻿भोगों की इच्छा व्यर्थ</option>");
  mySel.append("<option value='31.html'><b>31</b> - ﻿जीव मोह को आसानी से क्यों नहीं छोड़ता</option>");
  mySel.append("<option value='32.html'><b>32</b> - ﻿अपनी भलाई में लगाने की प्रेरणा</option>");
  mySel.append("<option value='33.html'><b>33</b> - ﻿स्व-पर के भेद को जानना - मोक्ष का कारण</option>");
  mySel.append("<option value='34.html'><b>34</b> - ﻿अपना गुरु आप ही है</option>");
  mySel.append("<option value='35.html'><b>35</b> - ﻿पर ज्ञान का कारण नहीं, निमित्त-मात्र होता है</option>");
  mySel.append("<option value='36.html'><b>36</b> - ﻿एकान्त में क्षोभ-रहित होकर आत्मा में स्थित रहने का उपदेश</option>");
  mySel.append("<option value='37.html'><b>37</b> - ﻿आत्मानुभवी के लक्षण</option>");
  mySel.append("<option value='38.html'><b>38</b> - ﻿आत्मा में रत रहने वाले को विषय भोग अरुचिकर</option>");
  mySel.append("<option value='39.html'><b>39</b> - ﻿योगी के लिए समस्त संसार एक इंद्रजाल</option>");
  mySel.append("<option value='40.html'><b>40</b> - ﻿योगी एकान्त-प्रिय होता है</option>");
  mySel.append("<option value='41.html'><b>41</b> - ﻿आत्म-स्वरूप में स्थिर के सभी व्यवहार गौण</option>");
  mySel.append("<option value='42.html'><b>42</b> - ﻿योगी विकल्पातीत होता है</option>");
  mySel.append("<option value='43.html'><b>43</b> - ﻿पर के संस्कार के त्याग का उपदेश</option>");
  mySel.append("<option value='44.html'><b>44</b> - ﻿पर पदार्थों से अस्संग ध्यान से निर्जरा</option>");
  mySel.append("<option value='45.html'><b>45</b> - ﻿अपने आपके लिए ही उद्यम का उपदेश</option>");
  mySel.append("<option value='46.html'><b>46</b> - ﻿अज्ञानी को कर्म नहीं छोड़ते</option>");
  mySel.append("<option value='47.html'><b>47</b> - ﻿आत्म-ध्यान से सुख की प्राप्ति</option>");
  mySel.append("<option value='48.html'><b>48</b> - ﻿ध्यान का फल</option>");
  mySel.append("<option value='49.html'><b>49</b> - ﻿मुमुक्षुओं को सम्यग्ज्ञान की भावना का उपदेश</option>");
  mySel.append("<option value='50.html'><b>50</b> - ﻿जीव-पुद्गल भिन्नता ही सारभूत</option>");
  mySel.append("<option value='51.html'><b>51</b> - ﻿उपसंहार और टीकाकार द्वारा प्रशस्ति</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
