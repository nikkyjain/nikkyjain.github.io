# -*- coding: utf-8 -*-
import random
import sys
import os
import re
from datetime import datetime
import glob

def mkdirs (str):
    if not os.path.exists(str):
        os.makedirs(str)
    return

def createBhajan (html, relPath, createSearch,dbDir):
    if(createSearch==""):
        html.write("""  <div data-history=false data-role=popup id=popupBhajan data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>\n""")
    for category in sorted(glob.glob(dbDir+"/others/collaborate/bhajans/*/")):
        myCategory=os.path.basename(os.path.dirname(category))
        myCategory=myCategory.replace('-', ' ')
        myCategory=re.sub(r'.*_', '', myCategory)
        if(createSearch==""):
            html.write("""
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>"""+myCategory+"""</h2>
        <ul data-role=listview>\n""")
        myCntrL=1
        for item in sorted(glob.glob(category+'/main/*')):
            myItem=os.path.basename(item).replace(".txt", "")
            myItem=myItem.replace("--", "=")
            myItem=myItem.replace("-", " ")
            myItem=myItem.replace("=", "--")
            if(os.path.islink(item)):
                myCategory=os.path.basename(os.path.dirname(os.path.dirname(os.readlink(item))))
                #continue
            else:
                myCategory=os.path.basename(os.path.dirname(os.path.dirname(item)))
            myWebName=myItem.replace(' ', '-')
            html.write("          <li data-theme=b><a data-ajax=false href="+relPath+"jainDataBase/bhajans/"+myCategory+"/html/"+myWebName+".html>"+str(myCntrL)+") "+myItem+"</a></li>\n")
            myCntrL+=1
        if(createSearch==""):
            html.write("""        </ul>
      </div>""")
            print("\r Category Done - "+myCategory, end='')
        else:
            print("\r Search Done - "+myCategory, end='')
    if(createSearch==""):
        html.write("""
    </div>
  </div>\n""")

def createPooja (html, relPath, createSearch, dbDir):
    if(createSearch==""):
        html.write("""  <div data-history=false data-role=popup id=popupPooja data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>\n""")
    for category in sorted(glob.glob(dbDir+"/others/collaborate/poojas/*/")):
        myCategory=os.path.basename(os.path.dirname(category)).replace('-', ' ')
        myCategory=re.sub(r'.*_', '', myCategory)
        if(createSearch==""):
            html.write("""      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>"""+myCategory+"""</h2>
        <ul data-role=listview>\n""")
        myCntrL=1
        for item in sorted(glob.glob(category+"/*/")):
            myItem=re.sub(r'.*_', '', os.path.basename(os.path.dirname(item)))
            html.write("          <li data-theme=b><a data-ajax=false href="+relPath+"jainDataBase/poojas/"+os.path.basename(os.path.dirname(category))+"/"+os.path.basename(os.path.dirname(item))+"/html/index.html>"+str(myCntrL)+") "+myItem+"</a></li>\n")
            myCntrL+=1
        if(createSearch==""):
            html.write("""        </ul>
      </div>\n""")
            print("\r Category Done - "+myCategory, end='')
        else:
            print("\r Search Done - "+myCategory, end='')
    if(createSearch==""):
        html.write("""
    </div>
  </div>""")

def createGranth (html, relPath, myType, createSearch, dbDir):
    myTypeCap=myType.title()
    if(createSearch==""):
        html.write("""
  <div data-history=false data-role=popup id=popup"""+myTypeCap+""" data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>\n""")
    for category in sorted(glob.glob(dbDir+"/others/collaborate/shastra/*/")):
        myCategory=os.path.basename(os.path.dirname(category)).replace('-', ' ')
        myCategory=re.sub(r'.*_', '', myCategory)
        if(createSearch==""):
            html.write("""
      <div data-role=collapsible data-inset=false data-theme=a>
        <h2>"""+myCategory+"""</h2>
        <ul data-role=listview>\n""")
        myCntrL=1
        for item in sorted(glob.glob(category+"/*/")):
            myItem=re.sub(r'.*_', '', os.path.basename(os.path.dirname(item)))
            if (myType=='egranth' and not os.path.isdir(item+'/arthE')) :
                continue
            html.write("          <li data-theme=b><a data-ajax=false href="+relPath+"jainDataBase/"+myType+"/"+os.path.basename(os.path.dirname(category))+"/"+os.path.basename(os.path.dirname(item))+"/html/index.html>"+str(myCntrL)+") "+myItem+"</a></li>\n")
            myCntrL+=1
        if(createSearch==""):
            html.write("""        </ul>
      </div>""")
            print("\r Category Done - "+myCategory, end='')
        else:
            print("\r Search Done - "+myCategory, end='')
    if(createSearch==""):
        html.write("""
    </div>
  </div>""")

def createMiscList (html, myRelPath, dbDir):
    html.write("""
  <div data-history=false data-role=popup id=popupMisc data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Youtube -- शास्त्र गाथा</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/samaysaar.html>समयसार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/rks.html>रत्नकरंड श्रावकाचार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/tsutra-1.html>तत्त्वार्थ-सूत्र - पूर्णमति माताजी</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/ishtopadesh.html>इष्टोपदेश</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/swaroopsambodhan.html>स्वरूप संबोधन</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/samadhitantra.html>समाधितंत्र</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/gandharValay.html>गणधर-वलय स्तोत्र</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/bhaktamar.html>भक्तामर</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/svayambhu.html>स्वयंभू-स्तोत्र</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/mahavirashtak.html>महावीराष्टक-स्तोत्र</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/vishapahaar.html>विषापहार-स्तोत्र</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/yogibhakti.html>योगी-भक्ति</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/vvinshati.html>विद्यमान-विंशति</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube/ekibhav.html>एकीभाव-स्तोत्र</a></li> 
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Youtube -- Animations</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Neminath.html>भगवान नमिनाथ</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Baahubali.html>भगवान बाहुबली</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Sukumal.html>सुकुमाल मुनि</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Kundkund.html>कुन्दकुन्द आचार्य</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Rakshabandhan.html>रक्षाबंधन की कथा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Samavsaran.html>समवसरण</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/ChaarGati.html>चार-गति</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/ShrutPanchami.html>श्रुत-पंचमी</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/AkshayTritiya.html>अक्षय-तृतीया</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Uddayan.html>उद्दायन राजा</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/ShrenikFrog.html>राजा श्रेणिक और मेंढक</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/AnjanChor.html>अंजन-चोर की कथा</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/FiveSins.html>पांच-पाप</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/JeevDayaa.html>जीव-दया</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/GarbhaKalyaanak.html>गर्भ-कल्याणक</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/JanmKalyaanak.html>जन्म-कल्याणक</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/TapKalyaanak.html>तप-कल्याणक</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Namokaar.html>णमोकार-मंत्र</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Kulaachaar.html>कुलाचार</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Sthaavar.html>स्थावर-जीव</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/Teerthankar.html>तीर्थंकर</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/JeevAjeev.html>जीव-अजीव</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/ChaturvidhSangh.html>चतुर्विध-संघ</a></li>
	          <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/youtube-animation/MorningPrayer.html>प्रात:कालीन वन्दना</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>गुणस्थान</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/GunsthanTable.html>गुणस्थान-विभाजन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/GunsthanKarmUdayTable.html>गुणस्थान में उदय</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/GunsthanToAndFrom.html>गुणस्थान-गमनागमन</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/GunsthanKaalTable.html>गुणस्थान-काल-संख्या</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>कर्म</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/karmUdayTable.html>कर्म-उदय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/karmBandhTable.html>कर्म-बन्ध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/karmSattaTable.html>कर्म-सत्ता</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/nishekRachna.html>निषेक-रचना</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>बंध</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/prakratiBandhPrarupana.html>प्रकृति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/stithiSaarani.html>स्थिति-बंध</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/anubhagBandhPrarupana.html>अनुभाग-बंध</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>प्रमाण</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/kshetraPramaan.html>क्षेत्र-प्रमाण</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/sankhyaPramaan.html>संख्याप्रमाण</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Other</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/alpBahutva.html>अल्प बहुत्व</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/GatiAgati.html>गति-आगति</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/nyaay.html>न्याय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/misc/moolSanghPattavali.html>मूल संघ पट्टावली</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Download</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/JainBhajan.pdf>जैन भजन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/JainPooja.pdf>जैन पूजा-पाठ</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/JeevSamas.pdf>जीव समास</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/BookMark.pdf>BookMark</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/Cal-2019.pdf>Calendar-2019</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/calendar-2019.pdf>Jaipur Calendar-2019</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>PDF शास्त्र</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/GomatsarJeevkand_InChartsTables.pdf>गोम्मटसार-जीवकांड</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/Tatvarthsutra_in_Charts_&_Table.pdf>तत्त्वार्थसूत्र-चार्ट</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/TattvarthaSutra-English.pdf>तत्त्वार्थसूत्र-English</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/RamSinghMuni-PahudDoha.pdf>पाहुड-दोहा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/Nagsen-TatvanuShasan.pdf>तत्त्वानुशासन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/AmrutChandraAacharya--LaghuTattvaSfot.pdf>लघुतत्त्व-स्फोट</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/AmrutChandraAacharya-ParamAadhyatmTarngini-Subhchandraacharya.pdf>परम-अध्यात्म-तरंगिनी</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/ShubChandrAacharya--Gyaanarnav.pdf>ज्ञानार्णव</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/ShivaAcharya--BhagwatiAaradhana--PtSadasukhDasJi.pdf>भगवती-आराधना</a></li>
	    <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/आराधनासार--Gatha.pdf>आराधानासार</a></li>
	    <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/Jain_Siddhant_Praveshika.pdf>जैन-सिद्धांत-प्रवेशिका</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/समयसार.pdf>समयसार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/योगसार--Gatha.pdf>योगसार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/प्रवचनसार.pdf>प्रवचनसार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/पन्चास्तिकाय.pdf>पन्चास्तिकाय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/द्रव्यसंग्रह.pdf>द्रव्यसंग्रह</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/दर्शनसार--Gatha.pdf>दर्शनसार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/तत्त्वार्थसूत्र.pdf>तत्त्वार्थसूत्र</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/आलापपद्धति--Gatha.pdf>आलापपद्धति</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/इष्टोपदेश--Gatha.pdf>इष्टोपदेश</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/परमात्मप्रकाश--Gatha.pdf>परमात्मप्रकाश</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/पुरुषार्थसिद्ध्युपाय--Gatha.pdf>पुरुषार्थसिद्ध्युपाय</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/बारसणुपेक्_खा--Gatha.pdf>बारसणुपेक्_खा</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/रत्नकरण्ड-श्रावकाचार.pdf>रत्नकरण्ड-श्रावकाचार</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/श्रीअष्टपाहुड.pdf>श्रीअष्टपाहुड</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/समाधितन्त्र.pdf>समाधितन्त्र</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/स्वरूप-संबोधन--Gatha.pdf>स्वरूप-संबोधन</a></li>
	    <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/उत्तरपुराण.pdf>उत्तर-पुराण</a></li>
	    <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/आदिपुराण.pdf>आदि-पुराण</a></li>
	    <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/downloads/आराधना-कथा-कोश--Gatha.pdf>आराधना-कथा-कोश</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Jain Comics</h2>
          <ul data-role=listview>\n""")
    # Jain Comics
    for myPdfPath in sorted(glob.glob(dbDir+"/jainDataBase/jainComics/*.pdf")):
        myPdfFile=os.path.basename(myPdfPath)
        myPdfName=myPdfFile.replace('.pdf', '')
        html.write("            <li data-theme=b><a data-rel=dialog data-ajax=false href="+myRelPath+"jainDataBase/jainComics/"+myPdfFile+">"+myPdfName+"</a></li>\n")
    html.write("""
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Print Granth</h2>
          <ul data-role=listview>\n""")
    # genBooks
    for myPdfPath in sorted(glob.glob(dbDir+"/jainDataBase/genBooks/*.html")):
        myPdfFile=os.path.basename(myPdfPath)
        myPdfName=myPdfFile.replace('.html', '')
        html.write("            <li data-theme=b><a data-rel=dialog data-ajax=false href="+myRelPath+"jainDataBase/genBooks/"+myPdfFile+">"+myPdfFile+"</a></li>\n")
#    for myPdfPath in sorted(glob.glob(dbDir+"/jainDataBase/genBooks/*.pdf")):
#        myPdfFile=os.path.basename(myPdfPath)
#        myPdfName=myPdfFile.replace('.pdf', '')
#        html.write("<li data-theme=b><a data-rel=dialog data-ajax=false href="+myRelPath+"jainDataBase/genBooks/"+myPdfFile+">"+myPdfName+"</a></li>\n")
#    html.write("""
#          </ul>
#        </div>
#        <div data-role=collapsible data-inset=false data-theme=a>
#          <h2>Print Granth With Teeka</h2>
#          <ul data-role=listview>\n""")
#    for myPdfPath in sorted(glob.glob(dbDir+"/jainDataBase/genBooksWithTeeka/*.pdf")):
#        myPdfFile=os.path.basename(myPdfPath)
#        myPdfName=myPdfFile.replace('.pdf', '')
#        html.write("<li data-theme=b><a data-rel=dialog data-ajax=false href="+myRelPath+"jainDataBase/genBooksWithTeeka/"+myPdfFile+">"+myPdfName+"</a></li>\n")
    html.write("""          </ul>
        </div>""")
    html.write("""
    </div>
  </div>

  <div data-history=false data-role=popup id=popupGames data-theme=none>
    <div data-role=collapsibleset data-theme=b data-content-theme=a data-collapsed-icon=arrow-r data-expanded-icon=arrow-d style='margin:0; width:250px;'>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Kids Games</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""kidsGames1.html>Arrange Names</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Crossword Puzzle</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/crosswords/crossword1.html>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/crosswords/crossword2.html>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/crosswords/crossword3.html>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Word Search</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/wordSearch/WordSearch-1.pdf>Puzzle-1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/wordSearch/WordSearch-2.pdf>Puzzle-2</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/wordSearch/WordSearch-3.pdf>Puzzle-3</a></li>
          </ul>
        </div>
        <div data-role=collapsible data-inset=false data-theme=a>
          <h2>Exam</h2>
          <ul data-role=listview>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/GunsthanVivechan.html>गुणस्थान विवेचन</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/TattvarthSutra-1.html>तत्वार्थ मंजुषा - अध्याय 1</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/TattvarthSutra-3.html>तत्वार्थ मंजुषा - अध्याय 3</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/jeevSamas.html>JeevSamas</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/karmUdayBandh.html>Karm Uday Bandh</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/karmUdayBandhSatta.html>Karm Uday Bandh Satta</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/karmAll.html>Karm All</a></li> 
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/margnaBandh.html>Margna Me Bandh</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/margnaUday.html>Margna me Uday</a></li>
            <li data-theme=b><a data-rel=dialog data-ajax=false href="""+myRelPath+"""jainDataBase/jainExam/paryushan.html>Paryushan</a></li>
          </ul>
        </div>
    </div>
  </div>\n""")

def createTitle (html, pageTitle='Jai Jinendra'):
    html.write("""<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>"""+pageTitle+"""</title>""")

def createHeader (html, myRelPath, dbDir):
    html.write("""
  <link rel="icon" type="image/png" href='"""+myRelPath+"""images/default/jainFlag-short.jpg'/>
  <link rel="stylesheet" href='"""+myRelPath+"""css/myJqueryMobile.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""css/orgchart.css'>
  <link rel="stylesheet" href='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/css/themes/default/jquery.mobile.css'>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/jquery-mobile/1.5-alpha/jquery.mobile.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/Chart.min.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/palette.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myChart.js'></script>
  <script type="text/javascript" src='"""+myRelPath+"""js/sticky-table-headers.js'></script>
  <script>
    relPath='"""+myRelPath+"""';
$(document).on( "pagecontainershow", function(){
  $("#my_audio").on("error", function (e) {
    $("#myAudio").hide();
  });
  $.getScript('"""+myRelPath+"""js/allAudioFiles.js', function() {
    console.log("Added Audio Files");
  });
})
  </script>
  <script type="text/javascript" src='"""+myRelPath+"""js/myMobile.js'></script>
</head>
<body>
<div data-role=page id=demo-page>
  <div data-role=panel id=leftPanel>
    <div data-role=navbar data-maxbutton=1 class=ui-body-a>
        <ul id=myPanelUl>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupBhajan'>भजन</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupPooja'>पूजा-पाठ</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupGatha'>Full Granth Only Gatha</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupEgranth'>English Granth</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupTeeka'>Full Granth With Teeka</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupShastra'>Granth Gaatha-By-Gatha</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupGames'>Play / Test</a></li>
            <li><a data-rel=popup data-icon=ui-icon-star data-transition=pop href='#popupMisc'>Misc</a></li>
        </ul>
    </div>
    <a href="#jainRadio" data-rel="popup" class="ui-button ui-corner-all ui-shadow ui-button-inline">Jain Radio</a>
    <div data-role="popup" id=jainRadio class="ui-content" style="max-width:480px">
      <a href="#" data-rel=back data-ajax=false class="ui-button ui-corner-all ui-shadow ui-button-a ui-button-icon-only ui-toolbar-header-button-right">Close <span class="ui-icon ui-icon-delete"></span></a>
      <br><p> Play Jain Bhajan / Pooja / Path</p>
      <a href='#' data-role=button data-inline=true data-icon=ui-icon-audio id=myRadioId>Radio</a>
      <a href="#" data-role=button data-inline=true data-icon=ui-icon-arrow-r id=myRadioNextId data-show-label=false>Next Audio</a>
      <div id=myRadio></div>
    </div>
    <div>
      <form>
        <input data-type='search' id='searchTitleIn' placeholder='Search in Hindi..'>
      </form>
      <ul id=searchTitle data-role="listview" data-filter="true" data-input="#searchTitleIn" data-filter-reveal="true" data-filter-placeholder="Search Bhajan / Pooja / Shastra">\n""")
    createBhajan(html,myRelPath,1,dbDir)
    createPooja(html,myRelPath,1,dbDir)
    createGranth(html,myRelPath,'teeka',1, dbDir)
    html.write("""
      </ul>
    </div>
  </div> <!-- Panel -->
  <div align=right><font size=1><a href="mailto:nikkyjain@gmail.com">nikkyjain@gmail.com</a></font></div><br>
  <div id="stage" style="width: 120px; height: 120px; float:right;">
    <div class="spinner">
      <div class="face1">&#x0950;</div>
      <div class="face2">&#128591;</div>
      <div class="face3"><img src='"""+myRelPath+"""images/ahimsa.png'</img></div>
      <div class="face4">&#43261;</div>
      <div class="face5">श्री</div>
      <div class="face6">&#21328;</div>
    </div>
  </div>
  <div data-role="header" data-position="fixed">
      <!--h1 align=center>Jai Jinendra</h1-->
      <figure align=center>
        <a href="#leftPanel" class="ui-button ui-shadow ui-corner-all ui-button-inline">
          <img id=enPanel src='"""+myRelPath+"""images/jain-saint.jpg' height=80 width=90></img>
          <figcaption>Click Here</figcaption>
        </a>
      </figure>
  </div> <!-- Header -->
    """)
    ## ---- Bhajan Div -----
    createBhajan(html,myRelPath,"",dbDir)
    ## ---- Pooja Div -----
    createPooja(html,myRelPath,"",dbDir)
    ## ---- Granth Div -----
    createGranth(html,myRelPath,'gatha',"",dbDir)
    ## ---- Granth Div -----
    createGranth(html,myRelPath,'egranth',"",dbDir)
    ## ---- Granth Div -----
    createGranth(html,myRelPath,'teeka',"",dbDir)
    ## ---- Shastra Div -----
    createGranth(html,myRelPath,'shastra',"",dbDir)
    ## ---- Misc Div ----
    createMiscList(html,myRelPath,dbDir)
