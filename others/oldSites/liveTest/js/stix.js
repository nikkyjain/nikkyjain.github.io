/*
Copyrights reserver Neculaesei Andrei 2013
http://andrewscode.com
You may use this/parts of this plugin only for non-commercial purposes.

Documentation:
https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla#Executing_Commands
*/
$.fn.stix = function(){
	//let's run some vars here
	var _bkp="";
	var _rand="stx_"+Math.floor((Math.random()*1000)+1);
	var _htmlon=false;
	//store target and id
	var _this=this;
	//create operation buttons
	var editbtn=$("<button class=\"stix operationbtn editbtn\">Edit</button>");
	var savebtn=$("<button class=\"stix operationbtn hidden savebtn\">Save</button>");
	var cancelbtn=$("<button class=\"stix operationbtn hidden cancelbtn\">Cancel</button>");
	//create operation menu
	var operationmenu=$("<div class=\"stix operationmenu\"></div>");
	//add buttons to operation menu
	$(editbtn).appendTo(operationmenu);
	$(cancelbtn).appendTo(operationmenu);
	$(savebtn).appendTo(operationmenu);
	//create fancy editor buttons
	var htmlbtn=$("<button class='stix editorbtn htmlbtn'>&lt;/&gt;</button>");
	//create fancy events
	$(htmlbtn).click(function(){
		var editor=null;
		if(!_htmlon){
			_htmlon=true;
			_bkp=$(_this).html();
			$(_this).html("");
			editor=$("<textarea class=\"stix htmleditor\">"+_bkp+"</textarea>").appendTo($(_this));
		} else {
			_htmlon=false;
			_bkp=$(_this).find(".htmleditor").first().val();
			console.log(_bkp);
			$(_this).html(_bkp);
		}
	});
	//create editor buttons
	var boldbtn=$("<button data-tag=\"bold\" class=\"stix editorbtn boldbtn\"><i class='fa fa-bold'></i></button>");
	var italicbtn=$("<button data-tag=\"italic\" class=\"stix editorbtn italicbtn\"><i class='fa fa-italic'></i></button>");
	var underlinebtn=$("<button data-tag=\"underline\" class=\"stix editorbtn underlinebtn\"><i class='fa fa-underline'></i></button>");
	var strikebtn=$("<button data-tag=\"strikeThrough\" class=\"stix editorbtn strikebtn\"><i class='fa fa-strikethrough'></i></button>");
	var unorderedlistbtn=$("<button data-tag=\"insertunorderedlist\" class=\"stix editorbtn unorderedlistbtn\"><i class='fa fa-list-ul'></i></button>");
	var orderedlistbtn=$("<button data-tag=\"insertorderedlist\" class=\"stix editorbtn orderedlistbtn\"><i class='fa fa-list-ol'></i></button>");
	var indentbtn=$("<button data-tag=\"indent\" class=\"stix editorbtn indentbtn\"><i class='fa fa-indent'></i></button>");
	var outdentbtn=$("<button data-tag=\"outdent\" class=\"stix editorbtn outdentbtn\"><i class='fa fa-outdent'></i></button>");
	var justifyleftbtn=$("<button data-tag=\"justifyLeft\" class=\"stix editorbtn justifyleftbtn\"><i class='fa fa-align-left'></i></button>");
	var justifyrightbtn=$("<button data-tag=\"justifyRight\" class=\"stix editorbtn justifyrightbtn\"><i class='fa fa-align-right'></i></button>");
	var justifycenterbtn=$("<button data-tag=\"justifyCenter\" class=\"stix editorbtn justifycenterbtn\"><i class='fa fa-align-center'></i></button>");
	var justifyfullbtn=$("<button data-tag=\"justifyFull\" class=\"stix editorbtn justifyfullbtn\"><i class='fa fa-align-justify'></i></button>");
	var hrbtn=$("<button data-tag=\"insertHorizontalRule\" class=\"stix editorbtn hrbtn\"><i class='fa fa-ellipsis-h'></i></button>");
	var subscriptbtn=$("<button data-tag=\"subscript\" class=\"stix editorbtn subscriptbtn\"><i class='fa fa-subscript'></i></button>");
	var superscriptbtn=$("<button data-tag=\"superscript\" class=\"stix editorbtn superscriptbtn\"><i class='fa fa-superscript'></i></button>");
	//create editor menu
	var editormenu=$("<div class=\"stix editormenu\"></div>");
	$(editormenu).addClass("hidden");
	//add buttons to editor menu
	$(htmlbtn).appendTo(editormenu);
	$(boldbtn).appendTo(editormenu);
	$(italicbtn).appendTo(editormenu);
	$(underlinebtn).appendTo(editormenu);
	$(strikebtn).appendTo(editormenu);
	$(unorderedlistbtn).appendTo(editormenu);
	$(orderedlistbtn).appendTo(editormenu);
	$(indentbtn).appendTo(editormenu);
	$(outdentbtn).appendTo(editormenu);
	$(justifyleftbtn).appendTo(editormenu);
	$(justifyrightbtn).appendTo(editormenu);
	$(justifycenterbtn).appendTo(editormenu);
	$(justifyfullbtn).appendTo(editormenu);
	$(hrbtn).appendTo(editormenu);
	$(subscriptbtn).appendTo(editormenu);
	$(superscriptbtn).appendTo(editormenu);
	//collect buttons
	var editorbuttons=boldbtn;
	editorbuttons=editorbuttons.add(italicbtn);
	editorbuttons=editorbuttons.add(underlinebtn);
	editorbuttons=editorbuttons.add(strikebtn);
	editorbuttons=editorbuttons.add(unorderedlistbtn);
	editorbuttons=editorbuttons.add(orderedlistbtn);
	editorbuttons=editorbuttons.add(indentbtn);
	editorbuttons=editorbuttons.add(outdentbtn);
	editorbuttons=editorbuttons.add(justifyleftbtn);
	editorbuttons=editorbuttons.add(justifyrightbtn);
	editorbuttons=editorbuttons.add(justifycenterbtn);
	editorbuttons=editorbuttons.add(justifyfullbtn);
	editorbuttons=editorbuttons.add(hrbtn);
	editorbuttons=editorbuttons.add(subscriptbtn);
	editorbuttons=editorbuttons.add(superscriptbtn);
	//create menu
	var menu=$("<div class=\"stix menu\"></div>");
	//populate menu
	$(editormenu).appendTo(menu);
	$(operationmenu).appendTo(menu);
	//fix target's parent float clear
	$(this).parent().addClass("stix fixfloat");
	//prepare target
	$(this).attr("spellcheck", false);
	$(this).addClass("stix target");
	$(this).wrap("<div class=\"stix wrap\"/>");
	//add menu to target
	$(menu).prependTo($(this).parent());
	//create events for operationbuttons: editbtn
	$(editbtn).click(function(){
		$(editbtn).addClass("hidden");
		$(savebtn).removeClass("hidden");
		$(cancelbtn).removeClass("hidden");
		$(editormenu).removeClass("hidden");
		//prepare target
		$(_this).attr("spellcheck", true);
		$(_this).addClass("editable");
		document.execCommand("styleWithCSS", null, true);
		//do whatchu gotta do
		_bkp=$(_this).html();
		$(_this).attr("contenteditable", true);
	});
	//create events for operationbuttons: savebtn
	$(savebtn).click(function(){
		//don't be silly
		if(_htmlon){
			_htmlon=false;
			_bkp=$(_this).find(".htmleditor").first().val();
			console.log(_bkp);
			$(_this).html(_bkp);
			}
		$(editbtn).removeClass("hidden");
		$(savebtn).addClass("hidden");
		$(cancelbtn).addClass("hidden");
		$(editormenu).addClass("hidden");
		//prepare target
		$(_this).attr("spellcheck", false);
		$(_this).attr("contenteditable", false);
		$(_this).removeClass("editable");
		document.execCommand("styleWithCSS", false, false);
		//do whatchu gotta do
		$(_this).html($(_this).html()); //spellcheck hack
    closestId=$(_this).closest("div").attr('id');
    console.log("Update "+closestId+" = "+$(_this).html());
    update_weekly(closestId, $(_this).html());
	});
	//create events for operationbuttons: cancelbtn
	$(cancelbtn).click(function(){
		$(editbtn).removeClass("hidden");
		$(savebtn).addClass("hidden");
		$(cancelbtn).addClass("hidden");
		$(editormenu).addClass("hidden");
		//prepare target
		$(_this).attr("spellcheck", false);
		$(_this).attr("contenteditable", false);
		$(_this).removeClass("editable");
		document.execCommand("styleWithCSS", false, false);
		//do whatchu gotta do
		$(_this).html(_bkp);
	});
	//create events for editorbtn
	$(editorbuttons).click(function(){
		console.log("Editor button clicked.");
		//apply tag
		applytag($(this).data("tag"));
	});
	//apply tag magic
	function applytag(tag, arg){
		document.execCommand(tag,false,arg);
	}
};
