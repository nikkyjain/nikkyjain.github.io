
document.write("  <div class=menu align=center>");
document.write("      <div class=rrItem>");
document.write("          <a class='link icon_home' href="+relativePath+homePage+" title='Go Home'></a>");
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
document.write("          <a class='link icon_mail' title='Mail : vishalj@cadence.com' href=#></a>");
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
