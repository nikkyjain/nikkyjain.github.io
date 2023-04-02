
var allItems=[];
var myTimer;
var gameStarted=0;
var totalSeconds=0;
var totalLi=0;
var myStr="";
var relativePath="./";
var homePage="index.html";

function clock(){
  $('body').prepend('<div id=clock><label id="minutes">00</label>:<label id="seconds">00</label></div>');
  myTimer=setInterval(setTime, 1000);
  function setTime() {
    ++totalSeconds;
    $('#clock > #seconds').html(pad(totalSeconds%60));
    $('#clock > #minutes').html(pad(parseInt(totalSeconds/60)));
  }
  function pad(val) {
    var valString = val + "";
    if(valString.length < 2) {
      return "0" + valString;
    }else{
      return valString;
    }
  }
}

jQuery(function($){
  $('button.item').click(function(){
    totalLi=0;
    myStr="<ul id=sortable>";
    createGrid();
    myStr+="</ul>";
	document.getElementById('puzzle').innerHTML=myStr;
    $('ul').shuffle();  
    document.getElementById('result').innerHTML="<H3>Start Playing!!</H3>";
    document.getElementById('puzzle').style.display='block';
    document.getElementById('startGame').style.display='none';
    gameStarted=1;
    clearInterval(myTimer);
    totalSeconds=0;
    clock();
  $( "#sortable" ).disableSelection();
  $( '#sortable' ).sortable({
    stop: function () {
      var listItems = document.getElementById('sortable').getElementsByTagName('li');
      var solved=1;
      for(var i=0; i<totalLi; i++) {
        exp="li"+i;
        if(exp!=listItems[i].id) {
          solved=0;
          document.getElementById('result').innerHTML="<H3 font color=red>Keep Trying !!</H3>";
          listItems[i].style.color='red';
        }else{
          listItems[i].style.color='green';
		}
      }
      if(solved) {
        document.getElementById('result').innerHTML="<H3 font color=darkgreen>Congratulation. Puzzle Solved !!</H3><audio id=audio src='audio/cheering.mp3'></audio>";
        document.getElementById('audio').play();
        clearInterval(myTimer);
        document.getElementById('puzzle').style.display='none';
        document.getElementById('startGame').style.display='block';
      }
    }
  });
  });
});
(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children().clone(true);
      return (items.length) ? $(this).html($.shuffle(items)) : this;
    });
  }
  $.shuffle = function(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  }
})(jQuery);
function createGrid() {
  for(var i=0; i<allItems.length; i++) {
    createLi(allItems[i]);
  }
}
function createLi(name) {
  var e = document.getElementById("choseNum");
  var b = e.options[e.selectedIndex].value;
  if(totalLi<b) {
    myStr+=" <li class=ui-state-default id='li"+totalLi+"'>"+name+"</li>";
    totalLi++;
  }
}
