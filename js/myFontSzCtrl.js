var curGathaSz=2.4;
var curGadyaSz=2;
var curArthSz=2;
var curTableSz=1.4;
var curTeekaSz=2;
var curTableTitle=2;
var curTableNotes=1;
var curOrgChartSz=1;
$(function() {
    $('.head1').css('background-color', '#00FF00');
    $('.head2').css('background-color', '#b3ffff');
    $('.head3').css('background-color', '#e6ccff');
    $('.head4').css('background-color', '#b3d9ff');
    $(".tableTitle").css("font-size", curTableTitle+"vw");
    $(".orgchart").css("font-size", curOrgChartSz+"vw");
    $('.incFontSz').click(function() {
        curGathaSz+=0.2;
        curArthSz+=0.2;
        curGadyaSz+=0.2;
        curTeekaSz+=0.2;
        curTableSz+=0.2;
        curTableTitle+=0.2;
        curTableNotes+=0.2;
        curOrgChartSz+=0.2;
        $(".gatha").css("font-size", curGathaSz+"vw");
        $(".arth").css("font-size", curArthSz+"vw");
        $(".gadya").css("font-size", curGadyaSz+"vw");
        $(".teeka").css("font-size", curTeekaSz+"vw");
        $(".myTable td").css("font-size", curTableSz+"vw");
        $(".myTable th").css("font-size", curTableSz+"vw");
        $(".myAltTable td").css("font-size", curTableSz+"vw");
        $(".myAltTable th").css("font-size", curTableSz+"vw");
        $(".myAltColTable td").css("font-size", curTableSz+"vw");
        $(".myAltColTable th").css("font-size", curTableSz+"vw");
        $(".tableNotes").css("font-size", curTableNotes+"vw");
        $(".tableTitle").css("font-size", curTableTitle+"vw");
        $(".orgchart").css("font-size", curOrgChartSz+"vw");
    });
    $('.decFontSz').click(function() {
        curGathaSz-=0.2;
        curArthSz-=0.2;
        curGadyaSz-=0.2;
        curTeekaSz-=0.2;
        curTableSz-=0.2;
        curTableTitle-=0.2;
        curTableNotes-=0.2;
        curOrgChartSz-=0.2;
        $(".gatha").css("font-size", curGathaSz+"vw");
        $(".arth").css("font-size", curArthSz+"vw");
        $(".gadya").css("font-size", curGadyaSz+"vw");
        $(".teeka").css("font-size", curTeekaSz+"vw");
        $(".myTable td").css("font-size", curTableSz+"vw");
        $(".myTable th").css("font-size", curTableSz+"vw");
        $(".myAltTable td").css("font-size", curTableSz+"vw");
        $(".myAltTable th").css("font-size", curTableSz+"vw");
        $(".myAltColTable td").css("font-size", curTableSz+"vw");
        $(".myAltColTable th").css("font-size", curTableSz+"vw");
        $(".tableTitle").css("font-size", curTableTitle+"vw");
        $(".tableNotes").css("font-size", curTableNotes+"vw");
        $(".orgchart").css("font-size", curOrgChartSz+"vw");
    });

    /*$('.myAltTable td, table th').hover(function () {
      $('table td:nth-child(' + ($(this).index() + 1) + ')').addClass('tableHover');
      },function () {
      $('table td:nth-child(' + ($(this).index() + 1) + ')').removeClass('tableHover');
      });*/
    $(".myAltTable td").hover(function () {
        $el = $(this);
        var $row = $(this).closest("tr");
        //$row.find('td').each (function(i,td) {
        $row.find('td').each(function() {
            $(this).addClass("tableHover");
        }); 
        //$row.addClass("tableHover");
        //$el.parent().addClass("tableHover");
        var tdIndex = $('tr').index($el.parent());
        //console.log("VV:"+tdIndex+":"+$el.parent().has('td[rowspan]').length);
        //if ($el.parent().has('td[rowspan]').length == 0) {
            // This seems like a bug
            //$el.parent().prevAll('tr:has(td[rowspan]):first')
            $el.parent().prevAll('tr:has(td[rowspan])')
                                                      .find('td[rowspan]').filter(function () {
                                                          return checkRowSpan(this, tdIndex);
                                                      }).addClass("tableHover");
        //}
    }, function () {
        $el.parent()
        .removeClass("tableHover")
        // This seems like a bug
        //.prevAll('tr:has(td[rowspan]):first') 
        .prevAll('tr:has(td[rowspan])')
                                      .find('td[rowspan]')
                                      .removeClass("tableHover");
        $el.parent().find("td").each(function() {
           $(this).removeClass("tableHover");
        });
    });
	$(".myAltColTable td").hover(function () {
        $el = $(this);
        var $row = $(this).closest("tr");
        //$row.find('td').each (function(i,td) {
        $row.find('td').each(function() {
            $(this).addClass("tableHover");
        }); 
        //$row.addClass("tableHover");
        //$el.parent().addClass("tableHover");
        var tdIndex = $('tr').index($el.parent());
        //console.log("VV:"+tdIndex+":"+$el.parent().has('td[rowspan]').length);
        //if ($el.parent().has('td[rowspan]').length == 0) {
            // This seems like a bug
            //$el.parent().prevAll('tr:has(td[rowspan]):first')
            $el.parent().prevAll('tr:has(td[rowspan])')
                                                      .find('td[rowspan]').filter(function () {
                                                          return checkRowSpan(this, tdIndex);
                                                      }).addClass("tableHover");
        //}
    }, function () {
        $el.parent()
        .removeClass("tableHover")
        // This seems like a bug
        //.prevAll('tr:has(td[rowspan]):first') 
        .prevAll('tr:has(td[rowspan])')
                                      .find('td[rowspan]')
                                      .removeClass("tableHover");
        $el.parent().find("td").each(function() {
           $(this).removeClass("tableHover");
        });
    });
});

function checkRowSpan(element, pIndex) {
            var rowSpan = parseInt($(element).attr('rowspan'));
            var cIndex = $('tr').index($(element).parent());
            //console.log("VDBG : "+rowSpan+" : "+cIndex+" : "+pIndex+" : "+(rowSpan >= pIndex + 1 || (cIndex + rowSpan) > pIndex));
            return rowSpan >= pIndex + 1 || (cIndex + rowSpan) > pIndex;
        }

// Collapsible related
$(function() {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].style.background=returnColor(i%7);
}
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
})
