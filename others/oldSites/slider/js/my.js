
  function init(f, d) {
    var myUrl=f;
	var myData;
    myData=$.ajax({
      url: myUrl,
      async: false
    }).responseText;
    var photoes=myData.split("\n");
    var str="";
    photoes.pop();
    document.write("<div id=sliderFrame>");
    document.write("<div id=slider>");
    for(i=0; i<photoes.length; i++) {
      var curPhoto=photoes[i];
      //curPhoto=curPhoto.substring(0, str.length - 1);
	  curName=curPhoto.replace('.jpg', '');
      str+="<img src='images/"+curPhoto+"' alt="+curName+" />";
    };
    document.write(str);
    document.write("</div></div>");
  }
