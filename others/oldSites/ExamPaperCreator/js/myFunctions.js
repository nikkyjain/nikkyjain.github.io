var relativePath="./";
var homePage="index.html";

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

jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();

var myArrays={};
var colGrp={};
// This will hold key for every column (th)
var colKey={};

function getDateOfWeek(w, y) {
  var d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
  var val="";
  var m_names = new Array("Jan", "Feb", "Mar", 
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec");
  var od=new Date(y, 0, d);
  var myDate = od.getDate().toString();
  var myMnth = od.getMonth().toString();
  var myYear = od.getFullYear().toString();
  var nd=(new Date(y, 0, d+4));
  var mynDate = nd.getDate().toString();
  var mynMnth = nd.getMonth().toString();
  var mynYear = nd.getFullYear().toString();
  val=myDate+m_names[myMnth]+myYear+" - "+mynDate+m_names[mynMnth]+mynYear;
  return(val);
}

function createTh (obj, hideCol) {
    var result="";
    $.each(obj, function(key, value) {
          if(key=='attr') {
              result+='<th>id</th>';
          } else {
              if($.inArray(key, hideCol)==-1) {
                  result+='<th>'+key+'</th>';
              }
          }
    });
    return(result);
}

function createTd (obj, hideCol, hasChildRows=1) {
    var result="";
    var numCol=0;
    $.each(obj, function(key, value) {
          if(key=='attr') {
              result+='<td>'+value['id']+"<span class='rowDel' class='tooltip' onclick='delRow(\""+value['id']+"\")'>&#9988;"+ "<span class='ttxt'>Delete ID "+value['id']+"</span></span></td>";
          } else {
              if($.inArray(key, hideCol)==-1) {
                   result+='<td>'+value['value']+'</td>';
              }
          }
          numCol++;
    });
    return(result);
}

// Function to Create Table using users array
function tableFromUsersArray(data,hideCol) {
    var rowData;
    var rowHTML;
    var tableHTML = "<font size=5px><table id='mainTable' cellpadding=9>";
    var tableHTML = "<table class='tablesorter' id='myTable' cellpadding=9><thead>";


    if(data.constructor === Array) {
        for(var i=0; i<data.length; i++) {
          obj=data[i];
          tableHTML+='<tr>';
          if(i==0) {
              tableHTML+=createTh(obj, hideCol);
              tableHTML+='</thead><tfoot>';
              tableHTML+=createTh(obj, hideCol);
              tableHTML+='</tfoot>';
          }
          tableHTML+=createTd(obj, hideCol);
        }
    } else {
        obj=data;
        tableHTML+=createTh(obj, hideCol);
        tableHTML+='</thead><tfoot>';
        tableHTML+=createTh(obj, hideCol);
        tableHTML+='</tfoot>';
        tableHTML+=createTd(obj, hideCol);
    }
    tableHTML+="</table>";
    //console.log("Table HTML = "+tableHTML);
    return(tableHTML);
}

// Function to Create Table using array
function tableFromArray(data, hasChildRows=false, del=true, dir, editable=[], selUsers=[], selXml=[], selStatus=[], selDate=[], grpCol=[]) {
    var rowData;
    var rowHTML;
    var tableHTML = "<table class='tablesorter' id='myTable' cellpadding=9><thead>";
    tableHTML+="<tr class='tablesorter-ignoreRow'>\
      <td class='pager' colspan='"+data.length+"'>\
        <img src='images/pager/first.png' class='first'/>\
        <img src='images/pager/prev.png' class='prev'/>\
        <!--span class='pagedisplay'></span--> <!-- this can be any element, including an input -->\
        <span class=searchSpan><input class='search' type='search' data-column='all' placeholder='search..'></span>\
        <img src='images/pager/next.png' class='next'/>\
        <img src='images/pager/last.png' class='last'/>\
        <select class='pagesize'>\
          <option value='10'>10</option>\
          <option value='20'>20</option>\
          <option value='40'>40</option>\
          <option value='60'>60</option>\
        </select>\
      </td>\
    </tr>";

    for (var i = 0; i < data[0]['row'].length; i++) {
      tableHTML+='<tr>';
      for (var j = 0; j < data.length; j++) {
          var cellVal="";
          if (data[j]['row'][i]['value']!==undefined) {
            cellVal=data[j]['row'][i]['value'];
          }
          if(i==0) {
            tableHTML+="<th>"+cellVal+"</th>";
          } else if(data[j]['type']['value']=='uid') {
            tableHTML+="<td class=toggle>"+cellVal+"</td>";
          } else if(data[j]['type']['value']=='editable') {
            tableHTML+="<td ondblclick='$(this).editable("+j+","+i+")'>"+cellVal+"</td>";
          } else if(data[j]['type']['value']=='status') {
            bgCol=getStatusColor(cellVal);
            tableHTML+="<td style='background-color:"+bgCol+"' ondblclick='$(this).setType("+j+","+i+", \"status\")'>"+cellVal+"</td>";
          } else if(data[j]['type']['value']=='date') {
            tableHTML+="<td ondblclick='$(this).setType("+j+","+i+", \"date\")'>"+cellVal+"</td>";
          } else if(data[j]['type']['value']=='yesno') {
            bgCol=getYesNoColor(cellVal);
            tableHTML+="<td style='background-color:"+bgCol+"' ondblclick='$(this).setType("+j+","+i+", \"yesno\")'>"+cellVal+"</td>";
          } else if(data[j]['type']['value']=='user') {
            tableHTML+="<td ondblclick='$(this).setType("+j+","+i+", \"user\")'>"+cellVal+"</td>";
          }
      }
      if(i==0) {
          tableHTML+='</thead><tfoot>';
          for (var j = 0; j < data.length; j++) {
              var cellVal="";
              if (data[j]['row'][0]['value']!==undefined) {
                cellVal=data[j]['row'][0]['value'];
              }
              if(j==0) {
                if(data[0]['type']['value']=='uid') {
                    tableHTML+="<th ondblclick='$(this).editable("+j+", 0)'>"+cellVal+
                      "<br><span class='colAdd' class='tooltip' onclick='addCol("+j+")'>&nbsp;&#9758;&nbsp;"+
                        "<span class='ttxt'>Add Column To Right</span></span>"+
                      "<span class='rowAdd' class='tooltip' onclick='addRow()'>&nbsp;&#9759;&nbsp;"+
                        "<span class='ttxt'>Add Row At The End</span></span>"+"</th>";
                } else {
                    tableHTML+="<th ondblclick='$(this).editable("+j+", 0)'>"+cellVal+
                      "<br><span class='colDel' class='tooltip' onclick='delCol("+j+ ")'>&nbsp;&#9988;&nbsp;"+
                        "<span class='ttxt'>Delete Col-"+j+"</span></span>"+
                      "<span class='colAdd' class='tooltip' onclick='addCol("+j+")'>&nbsp;&#9758;&nbsp;"+
                        "<span class='ttxt'>Add Column To Right</span></span>"+
                      "<span class='colLft' class='tooltip' onclick='addColL()'>&nbsp;&#8695;&nbsp;"+
                        "<span class='ttxt'>Add Column To Left</span></span>"+
                      "<span class='rowAdd' class='tooltip' onclick='addRow()'>&nbsp;&#9759;&nbsp;"+
                        "<span class='ttxt'>Add Row At The End</span></span>"+
                      "<span class='typSel' class='tooltip' onclick='$(this).typeSel(0,"+j+")'>&nbsp;&#128296;&nbsp;"+
                        "<span class='ttxt'>Set Type For Column "+j+"</span></span></th>";
                }
              } else {
                tableHTML+="<th ondblclick='$(this).editable("+j+", 0)'>"+cellVal+
                  "<br><span class='colDel' class='tooltip' onclick='delCol("+j+ ")'>&nbsp;&#9988;&nbsp;"+
                    "<span class='ttxt'>Delete Col-"+j+"</span></span>"+
                  "<span class='colAdd' class='tooltip' onclick='addCol("+j+")'>&nbsp;&#9758;&nbsp;"+
                    "<span class='ttxt'>Add Column To Right</span></span>"+
                  "<span class='typSel' class='tooltip' onclick='$(this).typeSel(0,"+j+")'>&nbsp;&#128296;&nbsp;"+
                    "<span class='ttxt'>Set Type For Column "+j+"</span></span></th>";
              }
          }
          tableHTML+='</tfoot>';
      } else {
          if(hasChildRows) {
              var numCol=data[0]['row'].length;
              var cellVal=data[0]['row'][i]['value'];
              tableHTML +="<tr class='tablesorter-childRow'><td>";
              tableHTML+="<span class='rowDel' class='tooltip' onclick='delRow("+i+",\""+cellVal+"\")'>&#9988;"+
                "<span class='ttxt'>Delete ID "+cellVal+"</span></span>";
              tableHTML+="<td colspan="+(numCol-1)+"><div class='bold'>Details</div><div class='details_"+data[0]['row'][i]['value']+"'>Nothing</div></td></tr>";
          }
      }
    }
    tableHTML+="</table>";
    //console.log("Table HTML = "+tableHTML);
    return(tableHTML);
}

// Function to Create Table using array
function createTable(data, hasChildRows=false, del=true, dir, editable=[], selUsers=[], selXml=[], selStatus=[], selDate=[], grpCol=[]) {
    var rowData;
    var rowHTML;
    var tableHTML = "<font size=5px><table id='mainTable' cellpadding=9>";
    var tableHTML = "<table class='tablesorter' id='myTable' cellpadding=9><thead>";

    for (var i = 0; i < data.length; i++) {
        rowData = data[i];
        rowHTML = "<tr>";
        for (var k = 0; k < rowData.length; k++) {
            if(i==0) {
                rowHTML += "<th>" + rowData[k] + "</th>";
            }else{
                if(del && (dir=='left' && (k==0))) { 
                    //rowHTML += '<td ondblclick="$(this).delId()">' + rowData[k] + '</td>';
                    rowHTML='<td class="toggle">' + rowData[k] + '</td>';
                    if($.inArray(k+1, grpCol)!=-1) {
                      addColGrp(data[0][k], rowData[k]);
                    }
//                } else if (del && (dir!='left' && k==rowData.length-1)) {
//                    rowHTML += "<td>" + rowData[k] + "<span><font color=red>&nbsp;x</font></span></td>";
                } else {
                    if($.inArray(k, editable)!=-1) { 
                        myTd='<td ondblclick="$(this).editable()">';
                    } else if ($.inArray(k, selXml)!=-1) { 
                        myTd='<td ondblclick="$(this).selectXml()">';
                    } else if ($.inArray(k, selUsers)!=-1) { 
                        myTd='<td ondblclick="$(this).selectUser()">';
                    } else if ($.inArray(k, selStatus)!=-1) { 
                        myTd='<td ondblclick="$(this).selectStatus()">';
                    } else if ($.inArray(k, selDate)!=-1) { 
                        myTd='<td ondblclick="$(this).selectDate()">';
                    } else {
                        myTd='<td>';
                    }
                    if (rowData[k]==null) {
                      myRowData= '';
                    }else{
                      myRowData= rowData[k];
                      if($.inArray(k+1, grpCol)!=-1) {
                          addColGrp(data[0][k], rowData[k]);
                      }
                    }
                    rowHTML += myTd + myRowData + '</td>';
                }
            }
        }
        rowHTML += "</tr>";
        if(i==0) {
            rowHTML += "</thead><tfoot><tr>";
            rowData = data[0];
            for (var l = 0; l < rowData.length; l++) {
                if($.inArray(l+1, grpCol)!=-1) {
                    rowHTML += '<th class="grp_'+rowData[l]+'">' + rowData[l] + '</th>';
                    colGrp[rowData[l]]=new Array();
                    colKey[rowData[l]]=l;
                }else{
                    rowHTML += '<th>' + rowData[l] + '</th>';
                    colKey[rowData[l]]=l;
                }
            }
            rowHTML += "</tr></tfoot><tbody>";
        } else {
            if(hasChildRows) {
                rowHTML +="<tr class='tablesorter-childRow'><td><td colspan=9><div class='bold'>Details</div><div class='details_"+rowData[0]+"'>Nothing</div></td></tr>";
            }
        }
        tableHTML += rowHTML;
    }
    tableHTML += "</tbody></table>";
    return tableHTML;
}

function addColGrp (arr, data) {
  if($.inArray(data, colGrp[arr])==-1) {
    colGrp[arr].push(data);
  }
}
// Function to Create Drop-Down using one-dim array
function createSelectList(data, defStr="Project") {
    var selectHTML = "<select data-placeholder='Choose...' name='mainSelect' class='chosen-select' tabindex='2'>";

        selectHTML += "<option value=''></option>";
    for (var i = 0; i < data.length; i++) {
        selectHTML += "<option value='"+data[i]+"'>" + data[i] + "</option>";
    }
    selectHTML += "</select>";
    console.log(selectHTML);
    return selectHTML;
}

// Function to Create Drop-Down using table data and specific row
function createSelect(data,col, defStr="Project") {
    var rowData;
    var rowHTML;
    var selectHTML = "<select name='mainSelect'>";

    for (var i = 0; i < data.length; i++) {
        rowData = data[i];
        rowHTML = "";
        for (var k = 0; k < rowData.length; k++) {
            if(i===0) {
                if(k==col) {
                    rowHTML += "<option selected value='null'>Select "+defStr+"</option>";
                }
            } else {
                if(k==col) {
                    rowHTML += "<option value='"+rowData[k]+"'>" + rowData[k] + "</option>";
                }
            }
        }
        selectHTML += rowHTML;
    }
    selectHTML += "</select>";
    return selectHTML;
}

function getAllArrays (proj) {
    myGetAllUsersSel(proj, function(data) {
        myArrays['users']=data;
    });
    myReadXmlCol(proj, 'ai_category', 'tableSel', 'xmlSel', function(data) {
        myArrays['category']=data;
    });
    myReadXmlCol1(proj, 'ai_columns', 'hideClass', function(data) {
        myArrays['aiCol']=data;
    });
//    myReadInitAiHide(proj, localStorage['rfUserName'], function(data) {
//        myArrays['aiHide']=data;
//    });
    myReadAiStatus(proj, 'ai_status_opt', function(data) {
        myArrays['aiStatus']=data;
    });
}

function myGetAllUsersSel (proj, fn) {
    myVar='';
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/rflogin.php",
        data: {
          cmd:'gpusr',
          pname:proj
        },
        success : function(data){
          console.log(data);
          myArray=data.msg['uname'];
          var allNames=new Array();
          var allNamesSorted=new Array();
          myVar="<select name=usrSel data-placeholder='Choose User...' class='chosen-select'><option disabled selected value></option>";
          if(myArray.constructor === Array) {
             for (var i = 0; i < myArray.length; i++) {
               allNames.push(myArray[i]['attr']['id']);
             }
          } else {
             allNames.push(myArray['attr']['id']);
          }
          console.log(allNames);
          allNamesSorted=allNames.sort();
          console.log(allNamesSorted);
          for (i = 0; i < allNames.length; i++) {
            myVar+="  <option value='"+allNamesSorted[i]+"' style='background-color:white'>"+allNamesSorted[i]+"</option>";
          }
          myVar+="</select>";
          //console.log(myVar);
          fn(myVar);
        }
    });
}

function myReadXmlCol (proj, xml, tClass, sName, fn) {
    myVar='';
    $.ajax({
        type: "POST",
        url: "../php/readXmlCol.php",
        data: { proj:proj, xml:xml },
        success : function(data){
          myArray=JSON.parse(data);
          myVar="<select name="+sName+" class="+tClass+"><optgroup><option disabled selected value></option>";
          for (var i = 0; i < myArray.length; i++) {
            myVar+="  <option value='"+myArray[i]['attr']['name']+
              "' style='background-color:white'>"+myArray[i]['attr']['name']+"</option>";
          }
          myVar+="</optgroup></select>";
          fn(myVar);
        }
    });
}

function myReadXmlCol1 (proj, xml, tClass, fn) {
    myVar='';
    $.ajax({    //create an ajax request to php
      type: "POST",
      url: "php/readXmlCol.php",
      data: { 
        proj:  proj, 
        xml: xml
      },
      success : function(data){
        myArray=JSON.parse(data);
        myVar="<select class="+tClass+" multiple='multiple'>";
        for (var i = 0; i < myArray.length; i++) {
          myVar+="  <option>"+myArray[i]['attr']['name']+"</option>";
        }
        myVar+="</select>";
        fn(myVar);
      }
    });
}

function myReadInitAiHide (proj, uname, fn) {
    myVar='';
    $.ajax({    //create an ajax request to php
      type: "POST",
      url: "php/aiColHide.php",
      data: { 
        proj:  proj, 
        uname:  uname, 
        table:  'ai'
      },
      success : function(data){
        var myArray=JSON.parse(data);
        fn(data);
      }
    });
}
 
function getYesNoColor (s) {
  if(s=='yes') {
    return('greenyellow');
  } else if(s=='no') {
    return('LightSalmon');
  } else {
    return('lightgray');
  }
}

function getStatusColor (s) {
  var myArray=myArrays['aiStatus'];
  for(var i=0; i<myArray.length; i++) {
    if(myArray[i]['attr']['status']==s) {
      //console.log("getStatusColor: "+myArray[i]['value']);
      return(myArray[i]['value']);
    }
  }
  return('white');
}

function myReadAiStatus (proj, xml, fn) {
    myVar='';
    $.ajax({    //create an ajax request to php
      type: "POST",
      url: "php/readXmlCol.php",
      data: { 
        xml: xml,
        proj:  proj
      }, success : function(data) {
        myArray=JSON.parse(data);
        myVar="<select name=statusSel class=statusClass><optgroup><option disabled selected value></option>";
        for (var i = 0; i < myArray.length; i++) {
          myVar+="  <option value='"+myArray[i]['attr']['status']+"' style='background-color:"+myArray[i]['value']+"'>"+myArray[i]['attr']['status']+"</option>";
        }
        myVar+="</optgroup></select>";
        myArrays['aiStatusSel']=myVar;
        fn(myArray);
      }
    });
}

function displayProj (proj) {
  $(".pName").html("<a href='#'>Project "+proj+"</a>");
  $(".pName").click(function () {
    var changeProj=confirm("Do you really want to change project?");
    if(changeProj){
      localStorage.removeItem("rfProjName");
      window.location="./index.html";
    }
  });
}

function displayUname (uname) {
   $(".uName").html("<a href='#'>Logout "+uname+"</a>");
   $(".uName").click(function () {
     var reallyLogout=confirm("Do you really want to log out?");
     if(reallyLogout){
       localStorage.removeItem("rfUserName");
       window.location="./login.html";
     }
   });
}

