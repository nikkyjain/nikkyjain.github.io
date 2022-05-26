var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));


if(!('teeka' in qs) && !('padhya'in qs) && !('arth' in qs) && !('title' in qs) && !('nomenu' in qs)) {
document.write("  <div class=menu align=center>");
document.write("      <div class=rrItem>");
document.write("          <a class='link icon_home' href="+relativePath+homePage+" title='Go Home'></a>");
document.write("          <div class=item_content>");
document.write("              <h2>Start From Here</h2>");
document.write("              <p>");
document.write("                  <a href=index.html>home</a>");
document.write("                  <a href=pooja.html>पूजा-पाठ</a>");
document.write("                  <a href=path.html>पाठ (स-अर्थ)</a>");
document.write("                  <a href=24Thana.html>24 ठाणा </a>");
document.write("              </p>");
document.write("          </div>");
document.write("      </div>");
document.write("      <div class=rrItem>");
document.write("          <a class='link icon_incrsz' href=# onclick='incrFontSz();return false' title='Increase Font Sz'></a>");
document.write("          <div class=item_content>");
document.write("              <h2>");
document.write("                <a href=# onclick='incrFontSz();return false'>Increase Font Size</a>");
document.write("              </h2>");
document.write("          </div>");
document.write("      </div>");
document.write("      <div class=rrItem>");
document.write("          <a class='link icon_decrsz' href=# onclick='decrFontSz();return false' title='Decrease Font Sz'></a>");
document.write("          <div class=item_content>");
document.write("              <h2>");
document.write("              <a href=# onclick='decrFontSz();return false'>Decrease Font Size</a>");
document.write("              </h2>");
document.write("          </div>");
document.write("      </div>");
document.write("      <div class=rrItem>");
document.write("          <a class='link icon_mail' title='Mail : nikkyjain@gmail.com' href=#></a>");
document.write("          <div class=item_content>");
document.write("              <h2>Corrections</h2>");
document.write("              <p>");
document.write("                  <a href='https://docs.google.com/forms/d/1896j4GUu8XLmmi2k4clU88pPlbl6G6kWvGJ4oJ-a7rU/viewform'");
document.write("                    target=_tab>Click to submit tkt</a>");
document.write("              </p>");
document.write("          </div>");
document.write("      </div>");
document.write("      <div class='myMenu'>");
document.write("      </div>");
document.write("  </div>");

$('.rrItem').hover(
    function(){
        var $this = $(this);
        expand($this);
    },
    function(){
        var $this = $(this);
        collapse($this);
    }
);
function expand($elem){
    var angle = 0;
    var t = setInterval(function () {
        if(angle == 1440){
            clearInterval(t);
            return;
        }
        angle += 40;
        $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
    },10);
//    $elem.stop().animate({width:'268px'}, 1000)
//    .find('.item_content').fadeIn(400,function(){
//        $(this).find('p').stop(true,true).fadeIn(600);
//    });
}
function collapse($elem){
//    var angle = 1440;
//    var t = setInterval(function () {
//        if(angle == 0){
//            clearInterval(t);
//            return;
//        }
//        angle -= 40;
//        $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
//    },10);
//    $elem.stop().animate({width:'52px'}, 1000)
//    .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
}

if (typeof showHideMenu !== 'undefined') {
$('.menu').css({
  'position' 	:'fixed',
  'top'		:'0px'
});
setInterval(function(){
   if(interval == 3){
       $('.menu').hide(); 
       interval = 1; 
   }
   interval = interval+1;
    console.log(interval);
},1000);

$(document).bind('mousemove keypress touchmove', function() {
    $('.menu').show();
    interval = 1; 
});
}
}

jQuery(document).ready(function(){
  if (qs['teeka']==0) {
    $('.teeka').toggle();
  }
  if (qs['padhya']==0) {
    $('.padhyaContainer').toggle();
  }
  if (qs['arth']==0) {
    $('.arthContainer').toggle();
  }
  if (qs['title']==0) {
    $('.titleContainer').toggle();
  }
});


