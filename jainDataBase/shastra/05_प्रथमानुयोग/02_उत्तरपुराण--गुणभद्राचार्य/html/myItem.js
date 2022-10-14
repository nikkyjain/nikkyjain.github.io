
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
  mySel.append("<option value='48.html'><b>48</b> - ﻿भगवान अजितनाथ, सगर चक्रवर्ती चरित</option>");
  mySel.append("<option value='49.html'><b>49</b> - ﻿भगवान सम्भवनाथ चरित</option>");
  mySel.append("<option value='50.html'><b>50</b> - ﻿भगवान अभिनन्दननाथ चरित</option>");
  mySel.append("<option value='51.html'><b>51</b> - ﻿भगवान सुमतिनाथ चरित</option>");
  mySel.append("<option value='52.html'><b>52</b> - ﻿भगवान पद्मप्रभनाथ चरित</option>");
  mySel.append("<option value='53.html'><b>53</b> - ﻿भगवान सुपार्श्‍वनाथ चरित</option>");
  mySel.append("<option value='54.html'><b>54</b> - ﻿भगवान चन्‍द्रप्रभ चरित</option>");
  mySel.append("<option value='55.html'><b>55</b> - ﻿भगवान सुविधिनाथ चरित</option>");
  mySel.append("<option value='56.html'><b>56</b> - ﻿भगवान शीतलनाथ चरित</option>");
  mySel.append("<option value='57.html'><b>57</b> - ﻿भगवान श्रेयांसनाथ, विजय बलभद्र, त्रिपृष्ठ नारायण और अश्वग्रीव प्रतिनारायण चरित</option>");
  mySel.append("<option value='58.html'><b>58</b> - ﻿भगवान वासुपूज्‍य, त्रिपृष्ठ नारायण, अचल बलभद्र और तारक प्रतिनारायण चरित</option>");
  mySel.append("<option value='59.html'><b>59</b> - ﻿भगवान विमलनाथ, धर्म बलभद्र, स्वयंभू नारायण और मधु प्रतिनारायण चरित</option>");
  mySel.append("<option value='60.html'><b>60</b> - ﻿भगवान अनन्‍तनाथ, सुप्रभ बलभद्र, पुरुषोत्तम नारायण, मधुसूदन प्रतिनारायण चरित</option>");
  mySel.append("<option value='61.html'><b>61</b> - ﻿भगवान धर्मनाथ, मघवा चक्रवर्ती, सनत्कुमार चक्रवर्ती चरित</option>");
  mySel.append("<option value='62.html'><b>62</b> - ﻿अपराजित बलभद्र तथा अनन्तवीर्य नारायण चरित</option>");
  mySel.append("<option value='63.html'><b>63</b> - ﻿शान्तिनाथ तीर्थंकर और चक्रवर्ती चरित</option>");
  mySel.append("<option value='64.html'><b>64</b> - ﻿कुन्‍थुनाथ तीर्थंकर और चक्रवर्ती चरित</option>");
  mySel.append("<option value='65.html'><b>65</b> - ﻿भगवान अरनाथ, सुभौम चक्रवर्ती, नंदीषेण बलभद्र, पुण्डरीक नारायण और निशुम्भ प्रतिनारायण चरित्र</option>");
  mySel.append("<option value='66.html'><b>66</b> - ﻿भगवान मल्लिनाथ, पद्म चक्रवर्ती, नंदिमित्र बलभद्र, दत्त नारायण बलीन्द्र प्रतिनारायण चरित</option>");
  mySel.append("<option value='67.html'><b>67</b> - ﻿भगवान मुनिसुव्रत, हरिषेण चक्रवर्ती, राम बलभद्र, रावण प्रतिनारायण, राजा सागर, सुलासा, मधुपिंगल, राजा वसु, क्षीरकदम्बक, पर्वत, नारद चरित</option>");
  mySel.append("<option value='68.html'><b>68</b> - ﻿राम, लक्षमण, रावण और अणुमान चरित</option>");
  mySel.append("<option value='69.html'><b>69</b> - ﻿भगवान नमिनाथ, जयसेन चक्रवर्ती चरित</option>");
  mySel.append("<option value='70.html'><b>70</b> - ﻿भगवान नमिनाथ, श्रीकृष्ण चरित</option>");
  mySel.append("<option value='71.html'><b>71</b> - ﻿श्रीकृष्ण, बनदेव, श्रीकृष्ण की पट्टरानियां</option>");
  mySel.append("<option value='72.html'><b>72</b> - ﻿नमिनाथ भगवान, प्रद्युम्नकुमार, पद्म बलभद्र, कृष्ण, जरासन्ध, ब्रह्मदत्त चक्रवर्ती चरित</option>");
  mySel.append("<option value='73.html'><b>73</b> - ﻿भगवान पार्श्वनाथ चरित</option>");
  mySel.append("<option value='74.html'><b>74</b> - ﻿भगवान महावीर, सती चंदना, राजा श्रेणिक, अभयकुमार, राजा चेटक, चेलना, जीवन्धर चरित</option>");
  mySel.append("<option value='75.html'><b>75</b> - ﻿राजा चेटक, चेलना, जीवन्धर चरित</option>");
  mySel.append("<option value='76.html'><b>76</b> - ﻿राजा श्वेतवाहन, जम्बू-स्वामी, प्रीतिंकर मुनि, कल्कि-पुत्र अजितंजय, प्रलय-काल, आगामी तीर्थंकर</option>");
  mySel.append("<option value='77.html'><b>77</b> - पर्व - 77</option>");
  mySel.selectmenu();
  mySel.selectmenu('refresh', true);
})
