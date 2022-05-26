var globalSessionKeys = [];


$(document).ready(function(){
    // Reset Cookie
    document.cookie = "reviewName=;";
    $.ajax({
        url: 'http://'+window.location.hostname+':8001/post', // url where to submit the request
        type : "POST", // type of action POST || GET
        data : 'postType=result&examType=margnaUday', // post data || get data
        success : function(result) {
            // you can see the result from the console
            // tab of the developer tools
            console.log(result);
            myResult=JSON.parse(result['msg']);
            $.each(myResult.xml.users, function(i,j) {
                console.log(j);
            });
            if(result['status']=='true') {
                //$.notify(result['msg'], 'success');
                // you can see the result from the console
                // tab of the developer tools
                //console.log(result);
                if(result['status']) {
                    if(globalSessionKeys.length==0) {
                        globalSessionKeys.push({data:'Index', title:'Index', defaultContent: ''});
                        if (myResult.xml.users.uname instanceof Array) {
                            for(var k in myResult.xml.users.uname[0])  {
                                globalSessionKeys.push({data: k, title: k});
                                console.log("Arr Pushing : ",k);
                            }
                        } else {
                            for(var k in myResult.xml.users.uname)  {
                                globalSessionKeys.push({data: k, title: k});
                                console.log("Pushing : ",k);
                            }
                        }
                    }
                    var tableHeaders="<th></th>";
                    var tableFooter="<th></th>";
                    $.each(globalSessionKeys, function (i,j) {
                            if(j['title']!='Index') {
                            tableHeaders += "<th>" + j['title'] + "</th>";
                            tableFooter +="<th><input type=text placeholder='Search "+j['title']+"' /></th>";
                            }
                    });
                    $("#resultTable").append('<table id=regTopTable class="display compact cell-border hover" cellspacing=0 width="100%"><thead><tr>' + tableHeaders + '</tr></thead><tfoot><tr>'+tableFooter+'</tr></tfoot></table>');
                    console.log("html : ",$('#resultTable').html());
                    var resultTable = $('#regTopTable').DataTable({
                                    scrollX: true,
                                    data: (myResult.xml.users.uname instanceof Array) ?  myResult.xml.users.uname : [myResult.xml.users.uname],
                                    aoColumns: globalSessionKeys,
                                    // Adding Index column
                                    columnDefs: [
                                    { searchable: false, renderable: true, targets: 0 }
                                    //{ targets: [10,11,12,13], visible: false }
                                    ],
                                    order: [[ 3, "asc" ]],
                                    responsive: true,
                                    scrollY:        "400px",
                                    scrollCollapse: true,
                                    paging:         false
                                    // Save as CSV, PDF, Excel etc
                                    //dom: 'Bfrtip',
                                    //buttons: ['colvis', 'copy', 'csv', 'excel', 'pdf', 'print']
                                    });
                         // Adding Index column
                         resultTable.on('order.dt search.dt', function () {
                                         resultTable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                                                 cell.innerHTML = i+1;
                                                 });
                                         }).draw();
                         // Apply the search
                         resultTable.columns().every( function () {
                                         var that = this;

                                         $( 'input', this.footer() ).on( 'keyup change clear', function () {
                                                 if ( that.search() !== this.value ) {
                                                 that
                                                 .search( this.value )
                                                 .draw();
                                                 }
                                                 });
                                         });
                         // Click on any session to select it
                         $('#resultTable tbody').on( 'click', 'tr', function () {
                                         $(this).toggleClass('selected');
                                         if(resultTable.rows('.selected').data().length>0) {
                                             $('.delResult').show();
                                         } else {
                                             $('.delResult').hide();
                                         }
                         });

                         // When Delete button is pressed, delete results of all selected users
                         $('.delResult').on( 'click', function () {
                                         $(this).toggleClass('selected');
                                         $.each(resultTable.rows('.selected').data(), function (i, j) {
                                             console.log("Remove Result Of "+j['ID']);
                                             $.ajax({
                                                 url: 'http://'+window.location.hostname+':8001/post', // url where to submit the request
                                                 type : "POST", // type of action POST || GET
                                                 data : 'postType=delResult&examType=margnaUday&uName='+j['ID'], // post data || get data
                                                 success : function(result) {
                                                   //window.location.href="/showResults.html";
                                                   alertify.alert(result.msg);
                                                   resultTable.row('.selected').remove().draw( false );
                                                 },
                                                 error: function(xhr, resp, text) {
                                                     console.log(xhr, resp, text);
                                                 }
                                             })
                                         })
                         });

                         // Double Click On Any Session Should Create Run Table For That Session
                         resultTable.on('dblclick', 'tbody tr', function() {
                                         console.log('Get data for session : ', resultTable.row(this).data()['ID']);
//                                         createUsrResultTable(
//                                             regressionTop.row(this).data()['ID'], 
//                                             );
                                           document.cookie = "reviewName="+ resultTable.row(this).data()['ID']+";";
                                           window.location.href="/margnaUday.html";
                                         })
                }
            } else {
                alertify.alert(result['msg']);
            }
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    })
})
