
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
  mySel.append("<option value='001.html'><b>001</b> - ﻿मंगलाचरण</option>");
  mySel.append("<option value='002.html'><b>002</b> - ﻿जीव में प्रथमोपशम सम्यग्दर्शन को प्राप्त करने की योग्यता बताते है</option>");
  mySel.append("<option value='003.html'><b>003</b> - ﻿जीव के सम्यक्त्वोत्पत्ति से पूर्व मिथ्यात्व गुणस्थान में होने वाली पांच लब्धियां</option>");
  mySel.append("<option value='004.html'><b>004</b> - ﻿क्षयोपशम लब्धि का स्वरुप</option>");
  mySel.append("<option value='005.html'><b>005</b> - ﻿विशुद्धि लब्धि का स्वरूप</option>");
  mySel.append("<option value='006.html'><b>006</b> - ﻿देशना लब्धि का स्वरुप</option>");
  mySel.append("<option value='007.html'><b>007</b> - ﻿प्रायोग्य लब्धि का स्वरुप</option>");
  mySel.append("<option value='008.html'><b>008</b> - ﻿प्रथमोपशम सम्यक्त्व  ग्रहण करने की योग्यता का प्रतिपादन</option>");
  mySel.append("<option value='009.html'><b>009</b> - ﻿प्रथमोपशम सम्यक्त्व के अभिमुख हुए जीव के स्थिति बंध योग्य परिणाम निम्न सूत्र में  बताये गए है</option>");
  mySel.append("<option value='010.html'><b>010</b> - ﻿प्रायोग्य-लब्धि काल में प्रकृति-बंधापसरण</option>");
  mySel.append("<option value='011-015.html'><b>011-015</b> - ﻿चौतीस प्रकृति बन्धापसरणों (व्युच्छेद) का ५ गाथाओं में वर्णन</option>");
  mySel.append("<option value='016-017-018.html'><b>016-017-018</b> - ﻿नर, तिर्यंच और देवगति में, रत्नादि ६ पृथिवियों और सनत्कुमार आदि दश कल्पों में और आनतकल्प आदि में बंधपसरणों के निर्देश -</option>");
  mySel.append("<option value='019.html'><b>019</b> - ﻿सातवे नरकपृथिवी में बन्धापसरण</option>");
  mySel.append("<option value='020.html'><b>020</b> - ﻿मनुष्य और तिर्यंचगति में प्रथमोपशम सम्यक्त्व के अभिमुख मिथ्यादृष्टि जीव के द्वारा बध्यमान प्रकृतिया</option>");
  mySel.append("<option value='021.html'><b>021</b> - ﻿अप्रमत्त गुणस्थान में बंधने वाली २८ प्रकृतियाँ</option>");
  mySel.append("<option value='022.html'><b>022</b> - ﻿प्रथमोपशसम्यक्तव के अभिमुख देव और नारकी (छट्टी पृथिवी तक) द्वारा बढ़ी कर्म प्रकृतियाँ</option>");
  mySel.append("<option value='023.html'><b>023</b> - ﻿सातवी पृथ्वी के  नारकी द्वारा  बंध प्रकृतियाँ</option>");
  mySel.append("<option value='024.html'><b>024</b> - ﻿सम्यक्त्व के अभिमुख मिथिदृष्टि जीव के स्थिति-अनुभाग बंध के भेद</option>");
  mySel.append("<option value='025.html'><b>025</b> - ﻿सम्यक्त्व के अभिमुख मिथिदृष्टि जीव के प्रदेशबंध के विभाग</option>");
  mySel.append("<option value='027.html'><b>027</b> - ﻿उक्त तीन महादण्डकों में अपुनरुक्त प्रकृतियाँ</option>");
  mySel.append("<option value='028.html'><b>028</b> - ﻿प्रथमोपशम सम्यक्त्व के अभिमुख विशुद्ध मिथ्यादृष्टि के प्रकृति-स्थिति अनुभाग और प्रदेशों  का उदय</option>");
  mySel.append("<option value='029-030.html'><b>029-030</b> - ﻿प्रथमोपशम सम्यक्त्व के अभिमुख विशुद्ध मिथ्यादृष्टि के उदय प्रकृति संबंधी स्थिति, अनुभाग तथा प्रदेशों की उदय-उदीरणा का कथन</option>");
  mySel.append("<option value='31.html'><b>31</b> - ﻿प्रकृतियों के सत्त्व का कथन</option>");
  mySel.append("<option value='32.html'><b>32</b> - ﻿सत्त्व प्रकृतियों के स्थिति-अनुभाग और  प्रदेश बंध </option>");
  mySel.append("<option value='33.html'><b>33</b> - ﻿पंचम-करण लब्धि</option>");
  mySel.append("<option value='34.html'><b>34</b> - ﻿तीनों करणों का काल अल्पबहुत्व सहित</option>");
  mySel.append("<option value='35.html'><b>35</b> - ﻿प्रथम करण को अध:करण कहने का कारण</option>");
  mySel.append("<option value='36.html'><b>36</b> - ﻿अपूर्वकरण और अनिवृत्तिकरण के स्वरुप का निरूपण</option>");
  mySel.append("<option value='37.html'><b>37</b> - ﻿अध:प्रवृत्तकरण संबंधी विशेष (निम्न ५ गाथा) कथन</option>");
  mySel.append("<option value='42.html'><b>42</b> - ﻿अध: प्रवृत्त करण संबंधी अनुकृष्टि एवं अल्पबहुत्व अनुयोग-द्वार</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
