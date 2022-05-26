
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
  mySel.append("<option value='3-74.html'><b>3-74</b> - अविरुद्धानुपलब्धि के भेद</option>");
  mySel.append("<option value='3-75.html'><b>3-75</b> - अविरुद्धस्वभावानुपलब्धि का उदाहरण</option>");
  mySel.append("<option value='3-76.html'><b>3-76</b> - अविरुद्धव्यापकानुपलब्धि हेतु</option>");
  mySel.append("<option value='3-77.html'><b>3-77</b> - अविरुद्ध कार्यानुपलब्धि हेतु</option>");
  mySel.append("<option value='3-78.html'><b>3-78</b> - अविरुद्ध कारणानुपलब्धि हेतु</option>");
  mySel.append("<option value='3-79.html'><b>3-79</b> - अविरुद्धपूर्वचरानुपलब्धि हेतु</option>");
  mySel.append("<option value='3-80.html'><b>3-80</b> - अविरुद्ध उत्तरचर अनुपलब्धि हेतु</option>");
  mySel.append("<option value='3-81.html'><b>3-81</b> - अविरुद्धसहचरोपलब्धि</option>");
  mySel.append("<option value='3-83.html'><b>3-83</b> - विरुद्धकार्यानुपलब्धि हेतु का उदाहरण</option>");
  mySel.append("<option value='3-84.html'><b>3-84</b> - विरुद्धकारणानुपलब्धि हेतु</option>");
  mySel.append("<option value='3-85.html'><b>3-85</b> - विरुद्धस्वभावानुपलब्धि रूप हेतु का उदाहरण</option>");
  mySel.append("<option value='3-87.html'><b>3-87</b> - पूर्वानुक्त हेतु का प्रथमोदाहरण</option>");
  mySel.append("<option value='3-88.html'><b>3-88</b> - उक्त हेतु की क्या संज्ञा है?</option>");
  mySel.append("<option value='3-89.html'><b>3-89</b> - परम्परा हेतु का दूसरा दृष्टान्त</option>");
  mySel.append("<option value='3-90.html'><b>3-90</b> - व्युत्पन्नपुरुषों के प्रति अनुमान के अवयवों के प्रयोग का नियम</option>");
  mySel.append("<option value='3-91.html'><b>3-91</b> - व्युत्पन्न प्रयोग की उदाहरण द्वारा पुष्टि</option>");
  mySel.append("<option value='3-92.html'><b>3-92</b> - उदाहरणादि के बिना व्याप्ति के नि}चयाभाव की आशंका का निराकरण</option>");
  mySel.append("<option value='3-93.html'><b>3-93</b> - दृष्टान्तादिक साध्य की सिद्धि के लिए फलवान नहीं</option>");
  mySel.append("<option value='3-94.html'><b>3-94</b> - पक्ष का प्रयोग सफल है</option>");
  mySel.append("<option value='3-95.html'><b>3-95</b> - आगम का स्वरूप</option>");
  mySel.append("<option value='3-96.html'><b>3-96</b> - शब्द से वास्तविक अर्थबोध होने का कारण</option>");
  mySel.append("<option value='3-97.html'><b>3-97</b> - शब्दार्थ से अर्थ अवबोध होने का दृष्टान्त</option>");
    $optgrp=$('<optgroup label="परिच्छेद-4">')
       $optgrp.append("<option value='4-01.html'><b>4-01</b> - प्रमाण का विषय</option>");
       $optgrp.append("<option value='4-02.html'><b>4-02</b> - अनेकान्तात्मक वस्तु के समर्थन के लिए दो हेतु</option>");
       $optgrp.append("<option value='4-04.html'><b>4-04</b> - तिर्यक् सामान्य</option>");
       $optgrp.append("<option value='4-05.html'><b>4-05</b> - ऊर्ध्वता सामान्य</option>");
       $optgrp.append("<option value='4-08.html'><b>4-08</b> - पर्याय विशेष</option>");
       $optgrp.append("<option value='4-09.html'><b>4-09</b> - विशेष का दूसरा भेद</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="परिच्छेद-5">')
       $optgrp.append("<option value='5-01.html'><b>5-01</b> - प्रमाण का फल</option>");
       $optgrp.append("<option value='5-03.html'><b>5-03</b> - कथञ्चित् अभेद का समर्थन</option>");
  mySel.append($optgrp);
    $optgrp=$('<optgroup label="परिच्छेद-6">')
       $optgrp.append("<option value='6-01.html'><b>6-01</b> - प्रमाणाभास</option>");
       $optgrp.append("<option value='6-02.html'><b>6-02</b> - स्वरूपाभास</option>");
       $optgrp.append("<option value='6-04.html'><b>6-04</b> - दृष्टान्त</option>");
       $optgrp.append("<option value='6-05.html'><b>6-05</b> - सन्निकर्षवादी के प्रति दूसरा दृष्टान्त</option>");
       $optgrp.append("<option value='6-06.html'><b>6-06</b> - प्रत्यक्षाभास</option>");
       $optgrp.append("<option value='6-07.html'><b>6-07</b> - परोक्षाभास</option>");
       $optgrp.append("<option value='6-08.html'><b>6-08</b> - स्मरणाभास</option>");
       $optgrp.append("<option value='6-09.html'><b>6-09</b> - प्रत्यभिज्ञानाभास</option>");
       $optgrp.append("<option value='6-10.html'><b>6-10</b> - तर्काभास</option>");
       $optgrp.append("<option value='6-11.html'><b>6-11</b> - अनुमानाभास</option>");
       $optgrp.append("<option value='6-13.html'><b>6-13</b> - अनिष्टपक्षाभास</option>");
       $optgrp.append("<option value='6-14.html'><b>6-14</b> - सिद्धपक्षाभास</option>");
       $optgrp.append("<option value='6-16.html'><b>6-16</b> - प्रत्यक्षबाधित</option>");
       $optgrp.append("<option value='6-17.html'><b>6-17</b> - अनुमानबाधितपक्षाभास</option>");
       $optgrp.append("<option value='6-18.html'><b>6-18</b> - आगमबाधितपक्षाभास</option>");
       $optgrp.append("<option value='6-19.html'><b>6-19</b> - लोकबाधितपक्षाभास</option>");
       $optgrp.append("<option value='6-20.html'><b>6-20</b> - स्ववचनबाधितपक्षाभास</option>");
       $optgrp.append("<option value='6-22.html'><b>6-22</b> - असिद्ध हेत्वाभास</option>");
       $optgrp.append("<option value='6-23.html'><b>6-23</b> - स्वरूपासिद्ध हेत्वाभास</option>");
       $optgrp.append("<option value='6-24.html'><b>6-24</b> - इस हेतु के असिद्धपना कैसा?</option>");
       $optgrp.append("<option value='6-25.html'><b>6-25</b> - असिद्ध हेत्वाभास का दूसरा भेद</option>");
       $optgrp.append("<option value='6-26.html'><b>6-26</b> - इस हेतु की भी असिद्धता कैसे ?</option>");
       $optgrp.append("<option value='6-27.html'><b>6-27</b> - असिद्धहेत्वाभास का और भी दृष्टान्त</option>");
       $optgrp.append("<option value='6-28.html'><b>6-28</b> - इस हेतु की असिद्धता में कारण</option>");
       $optgrp.append("<option value='6-29.html'><b>6-29</b> - विरुद्ध हेत्वाभास</option>");
       $optgrp.append("<option value='6-30.html'><b>6-30</b> - अनैकान्तिक हेत्वाभास</option>");
       $optgrp.append("<option value='6-31.html'><b>6-31</b> - निश्चित विपक्षवृत्ति का उदाहरण</option>");
       $optgrp.append("<option value='6-32.html'><b>6-32</b> - प्रमेयत्व हेतु की भी विपक्ष में वृत्ति कैसे निश्चित है?</option>");
       $optgrp.append("<option value='6-33.html'><b>6-33</b> - शंकित विपक्षवृत्ति अनैकान्तिक हेत्वाभास</option>");
       $optgrp.append("<option value='6-34.html'><b>6-34</b> - इस वक्तत्व हेतु का भी विपक्ष में रहना कैसे शंकित है?</option>");
       $optgrp.append("<option value='6-35.html'><b>6-35</b> - अकिञ्चित्कर हेत्वाभास</option>");
       $optgrp.append("<option value='6-36.html'><b>6-36</b> - सिद्धसाध्य अकिञ्चित्कर हेत्वाभास</option>");
       $optgrp.append("<option value='6-37.html'><b>6-37</b> - शब्दत्व हेतु के अकिञ्चित्करता कैसे</option>");
       $optgrp.append("<option value='6-38.html'><b>6-38</b> - शब्दत्वहेतु के अकिञ्चित्करत्व की पुष्टि</option>");
       $optgrp.append("<option value='6-39.html'><b>6-39</b> - अकिञ्चित्कर हेत्वाभास के प्रयोग की उपयोगिता</option>");
       $optgrp.append("<option value='6-41.html'><b>6-41</b> - अन्वयदृष्टान्ताभास के भेद</option>");
       $optgrp.append("<option value='6-42.html'><b>6-42</b> - अन्वय दृष्टान्ताभास का उदाहरणान्तर</option>");
       $optgrp.append("<option value='6-43.html'><b>6-43</b> - अन्वय दृष्टान्ताभास की पुष्टि</option>");
       $optgrp.append("<option value='6-44.html'><b>6-44</b> - व्यतिरेक उदाहरणाभास</option>");
       $optgrp.append("<option value='6-45.html'><b>6-45</b> - व्यतिरेक दृष्टान्ताभास का उदाहरणान्तर</option>");
       $optgrp.append("<option value='6-46.html'><b>6-46</b> - बालप्रयोगाभास</option>");
       $optgrp.append("<option value='6-47.html'><b>6-47</b> - बालप्रयोगाभास का उदाहरण</option>");
       $optgrp.append("<option value='6-48.html'><b>6-48</b> - चार अवयवों के प्रयोग करने पर तदाभासता</option>");
       $optgrp.append("<option value='6-49.html'><b>6-49</b> - अवयवों के विपरीत प्रयोग करने पर भी प्रयोगाभास</option>");
       $optgrp.append("<option value='6-50.html'><b>6-50</b> - अवयवों के विपरीत प्रयोग करने पर प्रयोगाभास कैसे?</option>");
       $optgrp.append("<option value='6-51.html'><b>6-51</b> - आगमाभास</option>");
       $optgrp.append("<option value='6-52.html'><b>6-52</b> - आगमाभास का उदाहरण </option>");
       $optgrp.append("<option value='6-53.html'><b>6-53</b> - आगमाभास का दूसरा उदाहरण</option>");
       $optgrp.append("<option value='6-54.html'><b>6-54</b> - दोनों वाक्यों में आगमाभासपना कैसे?</option>");
       $optgrp.append("<option value='6-55.html'><b>6-55</b> - संख्याभास</option>");
       $optgrp.append("<option value='6-56.html'><b>6-56</b> - यह संख्याभास कैसे?</option>");
       $optgrp.append("<option value='6-57.html'><b>6-57</b> - बौद्धादि के मत में भी संख्याभासपना</option>");
       $optgrp.append("<option value='6-58.html'><b>6-58</b> - अन्य अनुमानादिक से प्रमाण हो जायेगा?</option>");
       $optgrp.append("<option value='6-59.html'><b>6-59</b> - इसी विषय में उदाहरण</option>");
       $optgrp.append("<option value='6-61.html'><b>6-61</b> - विषयाभास</option>");
       $optgrp.append("<option value='6-62.html'><b>6-62</b> - सांख्यादिकों की मान्यताएँ विषयाभास</option>");
       $optgrp.append("<option value='6-66.html'><b>6-66</b> - फलाभास</option>");
       $optgrp.append("<option value='6-67.html'><b>6-67</b> - सर्वथा अभिन्न पक्ष में फलाभास</option>");
       $optgrp.append("<option value='6-68.html'><b>6-68</b> - कल्पना से प्रमाण और फल का व्यवहार करने में आपत्ति</option>");
       $optgrp.append("<option value='6-69.html'><b>6-69</b> - अभेद पक्ष में दृष्टान्त</option>");
       $optgrp.append("<option value='6-70.html'><b>6-70</b> - उपसंहार</option>");
       $optgrp.append("<option value='6-71.html'><b>6-71</b> - सर्वथा भेदपक्ष में दूषण</option>");
       $optgrp.append("<option value='6-72.html'><b>6-72</b> - प्रमाण और फल को समवाय सम्बन्ध मानने में दोष</option>");
       $optgrp.append("<option value='6-73.html'><b>6-73</b> - अपने पक्ष के साधन और परपक्ष के दूषण व्यवस्था</option>");
       $optgrp.append("<option value='6-74.html'><b>6-74</b> - संभवदन्यद्विचारणीयम् ॥74॥</option>");
    mySel.append($optgrp);
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
