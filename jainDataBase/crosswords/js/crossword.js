
var  _cwo =  { };

(function( $ ){
  $.fn.crossword = function( options )
  {

	/*=================================================================================== 
	use global _cwo CrossWord Object to store the puzzle, the clues a few commonly used 
	items,	and some parameters that can be easily changed  
	===================================================================================*/ 
	
	$.extend( _cwo, options );
	
	// don't change these 
	
	_cwo.nSize   			= _cwo.puzzle.row.length;   
	_cwo.NA 				= "_NA_";
	_cwo.BLACKCELL 			= "_";
	
	// adjust these as desired to control starting position and direction, and current cell color 
	
	_cwo.currentCellColor	= "lightgreen";
	_cwo.currCell 			= "#C0302";
	_cwo.currRow			= "3";
	_cwo.currCol			= "2";
	_cwo.direction 			= "across";

 
	/*=================================================================================== 
	   Build the puzzle inside a standard HTML table.  Each <td> in the table is assigned
	   a unique id attribute.  After the table is constructed, replace the HTML of the 
	   target container with the table, then adjust the height and width of each cell in 
	   the table so that the puzzle fits in its container. 
	===================================================================================*/ 
	    
	_tableRows   = "<caption>" + _cwo.title + "</caption>";
	_number = 1;
	cellSize =    ( Math.floor( $(_cwo.puzzleContainer).width() /  _cwo.nSize ) ) - 2;
	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
		tr  = "";
		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			c = _cwo.puzzle.row[rowIndex].substring( cIndex, cIndex + 1 )
			id = cellID( rowIndex,  cIndex );
 			div  = makeElement( "div", ( c == _cwo.BLACKCELL ? "cwBlackCell" : "cwCell"), id, " "  );
 			numDiv =  makeElement( "div", "cwNumber", "N" + id,  "" )		
  			tr = tr + makeElement( "td", "", "", numDiv + div)
		}
		_tableRows = _tableRows + makeElement( "tr", "cwRow", "", tr );
	 }

	$(_cwo.puzzleContainer ).html( makeElement( "table", "cwTable", "", _tableRows ) );	

	$(".cwCell,.cwBlackCell").width( cellSize  );
	$(".cwCell,.cwBlackCell").height( cellSize );
	
	/*=================================================================================== 
	  Use the JQuery Data feature to associate the following pieces of information with
	  each table cell:  the correct answer, the current value entered by the user, the cell
	  clue number ( or zero ), and row /column data 
	===================================================================================*/ 
	
	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
 		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			var c = _cwo.puzzle.row[rowIndex].substring( cIndex, cIndex + 1 )
			var id = "#" + cellID( rowIndex,  cIndex );
            var numberCell = false;
			if ( c != _cwo.BLACKCELL )
			{				
				if ( ( rowIndex == 0 ) || ( cIndex == 0 ) ) numberCell = true;
				if ( ( cIndex > 0 )&& ( _cwo.BLACKCELL  == _cwo.puzzle.row[rowIndex].substring( cIndex-1, cIndex  )) ) numberCell = true;
				if ( ( rowIndex > 0 )&& ( _cwo.BLACKCELL == _cwo.puzzle.row[rowIndex-1].substring( cIndex, cIndex+1  )) ) numberCell = true;
			}
			
			$(id).data("answer", c );
			$(id).data("player", " "  );
			$(id).data("number",  ( numberCell ? _number++ : 0  ) );  
			$(id).data( "row", rowIndex);
			$(id).data( "col", cIndex);
			
			paintCell ( id, 'player');
		}	 
	}

	//Set up clue displays and bind a few events
	
	setUpClues( _cwo.acrossContainer, _cwo.clues.across, "A" );
	setUpClues( _cwo.downContainer, _cwo.clues.down, "D" );

	$('.cwCell').click( function( event ){ cellClick( event )} );
 	$('#Aselector').change( function( event ) { clueClick( event )}  );
 	$('#Dselector').change( function( event ) { clueClick( event )}  );
 	
	$('*').bind('keyup',function( event ){ keyUp( event ) } );

	// Attach functionality to buttons..

	$(_cwo.revealButton ).bind('click',function( event, ui ){ paintPuzzle( 'answer') } );
	$(_cwo.hideButton ).bind('click',function( event, ui ){ paintPuzzle( 'player' ) } );
	$(_cwo.saveButton ).bind('click',function( event, ui ){ savePuzzle() } );
	$(_cwo.loadButton ).bind('click',function( event, ui ){ loadPuzzle() } );

  };
})( jQuery );


	/*=================================================================================== 
	  Support functions  
	===================================================================================*/ 


function cellID ( row, col )  {  return "C" + (row*1000  + col) };
function answer( row, col ) { return $("#" + cellID( row,col ) ).data("answer") }; 

function keyUp( event )
{
	if ( event.currentTarget.tagName  !=  "HTML" )  return;
	
	if ( event.which   == 37 ) goAcross( true );
	if ( event.which == 38 ) goDown( true );
	if ( event.which == 39 ) goAcross( false );
	if ( event.which == 40 ) goDown( false);
	if ( 
		( 32 ==  event.which  ) ||
		( ( 64 < event.which  ) && ( event.which < 91 ) )  ||
		( ( 96 < event.which  ) && ( event.which < 123 ) ) 
		)
	{
		_char = codeToChar( event.which );
		if ( _char == _cwo.NA ) return;
		$( _cwo.currCell).data( 'player', _char );
		paintCell( _cwo.currCell, 'player');
		if ( _cwo.direction == 'across') { goAcross( false ) } else goDown()
	}
	$("#" + cellID( _cwo.currRow, _cwo.currCol )).click();

};


function cellClick( event )
{
	moveToCell( "#" + event.currentTarget.id );
	alignClue(  "A", _cwo.clues["across"]  );  
	alignClue(  "D", _cwo.clues["down"]  );  
};

function clueClick( event )
{
	$("#Aselector").blur();
	$("#Dselector").blur();

	clueIndex = event.target.selectedIndex;
	clueNumber =  _cwo.clues["across"][clueIndex].no;
	
	
	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
 		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			var id = "#" + cellID( rowIndex,  cIndex );
 			if ( $(id).data('number') == clueNumber )
 			{
 				$(id).click();
 				break;
 			}
		}
	} 	

};

function makeElement( nodeName, nodeClass, nodeID, content )
{ 
	id = ( nodeID    == "" ? nodeID : " id='" + nodeID +"' " );
	cl = ( nodeClass == "" ? nodeClass : " class='" + nodeClass +"'");
	return "<" + nodeName + id + cl  + ">" + content + "</" + nodeName + ">";
};
	

function paintCell( id, selector ) // display either the answer or the player's current value in the cell 
{
	numID = "#N" + id.substring(1);
	value = $(id).data(selector);
	if ( _cwo.BLACKCELL  ==  $(id).data('answer' ) ) return;
 	if ( ( selector == 'player') && ( value == ' ' ) && (  0 <  $(id).data("number" ) ) )
	{
		$(numID).text( $(id).data("number") )
	}
 	$(id).text( value );			
};

function moveToCell( id )  // put the cursor in the given cell 
{
 	$( _cwo.currCell).css( 'background-color', 'white');
 	$( id).css( 'background-color', _cwo.currentCellColor );
 	_cwo.currRow = $(id).data('row');
 	_cwo.currCol = $(id).data('col');
 	_cwo.currCell = "#"  + cellID( _cwo.currRow, _cwo.currCol );
 	$(_cwo.currCell).focus();
}; 	


function alignClue ( direction, clues )
{
	selectorID =  "#" + direction + "selector";
	clueNo = 1;
	
	if ( direction == "A" ) 
	{
	    for ( cIndex = _cwo.currCol; cIndex > -1; cIndex--)
 		{   
 			if ( ( cIndex == 0 ) || ( cIndex > 0 && ( answer( _cwo.currRow, cIndex-1 ) == _cwo.BLACKCELL )) )
 			{
				clueNo = $("#"  + cellID( _cwo.currRow, cIndex )).data("number")
				break;
			}			
		}
	}
	else 
	{
	    for ( rIndex = _cwo.currRow; rIndex > -1; rIndex--)
 		{   
 			if ( ( rIndex == 0 ) || ( rIndex > 0 && ( answer( rIndex-1, _cwo.currCol ) == _cwo.BLACKCELL )) )
 			{
				clueNo = $("#"  + cellID( rIndex, _cwo.currCol )).data("number")
				break;
			}			
		}
	}
	
	
	targetIndex = 1;
	for ( index = 0; index < clues.length; index++ )
		if ( clues[index].no == clueNo )
		targetIndex  = index;
	
	preIndex =  ( targetIndex < 5 ) ? 1 : ( targetIndex - 5 );	
	
	$(selectorID)[0].selectedIndex = preIndex;
	$(selectorID)[0].selectedIndex = targetIndex;
			
	
};


function goAcross( bLeft )
{
	var currVal = _cwo.currCol;
	_cwo.direction = 'across'
 	while( 0 < 1 )
	{	
		if ( bLeft ) { _cwo.currCol--  } else _cwo.currCol++;
		if ( ( _cwo.currCol < 0  ) || ( _cwo.currCol == _cwo.puzzle.row.length  ) ) { _cwo.currCol = currVal; return; }
	    if ( answer( _cwo.currRow, _cwo.currCol ) != _cwo.BLACKCELL ) return;
	}
};

function goDown( bUp )
{
	var currVal = _cwo.currRow;
	_cwo.direction = 'down'
 	while( 0 < 1 )
	{	
		if ( bUp ) { _cwo.currRow--  } else _cwo.currRow++;
		if ( ( _cwo.currRow < 0  ) || ( _cwo.currRow == _cwo.puzzle.row.length   ) ) { _cwo.currRow = currVal; return; }
	    if ( answer( _cwo.currRow, _cwo.currCol ) != _cwo.BLACKCELL ) return;
	}
};


function codeToChar( code )
{
	  _CAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	 if ( code == 32 ) return " ";
	 if ( ( code < 65 ) || ( code > 122 ) ) return _cwo.NA;
	 if ( ( code > 90 ) && ( code < 97  ) ) return _cwo.NA;
	 index =  ( code > 96 ) ? code - 32 : code;
	 index = index - 65;
	 return _CAPS.substring( index, index+1);
};


 
function setUpClues( outerDiv, clueArray, idTic)
{
	_clueList  = ""
	selectID =  idTic + "selector";   
	for ( index = 0; index < clueArray.length; index++ )
	{		
		var itemID = idTic + clueArray[index].no;
		var itemText = clueArray[index].no  + ". " + clueArray[index].text
		var item = makeElement( "option", "liClue", itemID, itemText );
	    _clueList = _clueList + item;
	}
	
	$(outerDiv).html(  
		"<select size='" + clueArray.length + "' class='clueDiv' id='" + selectID + "'>" + _clueList + "</select>"
		);

};
 
 
function paintPuzzle( key )
{
	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
 		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			var id = "#" + cellID( rowIndex,  cIndex );
			paintCell ( id, key );
		}	 
	}
	 
};	 

function savePuzzle()
{
	cookieValue = "";

	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
 		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			var id = "#" + cellID( rowIndex,  cIndex );
			cookieValue = cookieValue + $(id).data("player");
		}	 

	}

	exdate=new Date();
	exdate.setDate(exdate.getDate() + 10);
	c_value=escape(cookieValue) + "; expires="+exdate.toUTCString()  +  ";path=/";
	document.cookie= escape( _cwo.title ) + "=" + c_value;


}
 
function loadPuzzle()
{

	cookieValue= "";
	var cookies = document.cookie.split('; ');
    for( index=0; index < cookies.length; index++ ) 
    {
    	c = cookies[index]
    	name = c.split('=')[0];
    	v  = c.split('=')[1];
    	if ( _cwo.title == unescape(name)  )
    		cookieValue = unescape( v );	
	}    	

	if ( cookieValue.length < 1 ) return;

	charIndex = 0;
	for ( rowIndex  = 0; rowIndex < _cwo.nSize; rowIndex++ )
	{
 		for ( cIndex = 0; cIndex < _cwo.nSize; cIndex++ )
		{
			var id = "#" + cellID( rowIndex,  cIndex );
			$(id).data("player", cookieValue.slice(  charIndex, charIndex+1 ) );
			charIndex++;
			paintCell( id, "player");
		}	 

	}

}
