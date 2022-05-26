window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};
var randomColorGenerator = function () { 
    col='#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    console.log("Col = "+col);
    return col;
};

function returnColor(i) {
  var color = Chart.helpers.color;
  var col=(i==0)? 'red' : (i==1)? 'blue' : (i==2) ? 'green' : (i==3) ? 'purple' : (i==4) ? 'yellow' : 'orange';
  return(color(col).alpha(0.5).rgbString());
}

// Depends on Chart.js amd palette.js
function create2DPieChart(id,myData,myLabel) {
    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: myData,
                backgroundColor: palette('tol', myData.length).map(function(hex) {
                    return '#' + hex;
                }),
                label: 'Dataset 1'
            }],
            labels: myLabel
        },
        options: {
            responsive: true
        }
    };
    var ctx = document.getElementById(id).getContext('2d');
    window.myPie = new Chart(ctx, config);
}


function create2DBarChart(id,myLabels,myData) {
var myChart = new Chart(id, {
  type: 'bar',
  data: {
    labels: myLabels,
    datasets: []
  },
	  options: {
	    responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					},
      plugins: {
            zoom: {
                // Container for pan options
                pan: {
                    // Boolean to enable panning
                    //enabled: true,

                    // Panning directions. Remove the appropriate direction to disable 
                    // Eg. 'y' would only allow panning in the y direction
                    mode: 'y'
                },

                // Container for zoom options
                zoom: {
                    // Boolean to enable zooming
                    enabled: true,

                    // Zooming directions. Remove the appropriate direction to disable 
                    // Eg. 'y' would only allow zooming in the y direction
                    mode: 'xy',
                }
            }
      }
    }
});
for(var i=0; i<myData.length; i++) {
  myChart.data.datasets.push({
    label: myData[i]['label'],
    stack: myData[i]['stack'],
    backgroundColor: returnColor(i),
    data: myData[i]['data']
  });
}
myChart.update();
}


var myFloatChart;

// This is specifically for charting job execution timeline.
function createFloatChart(id,myLabels,myData) {
// Adjust height according to data-size
var ctx = document.getElementById(id).getContext("2d");
//if(!Array.isArray(myData[0])) {
//    ctx.canvas.height = ((myLabels.length)<10) ? 300 : (myLabels.length)*20;
//} else {
//    ctx.canvas.height = ((myLabels.length)<10) ? 300 : (myLabels.length)*30;
//}
    //ctx.canvas.height = 600;
    
var config = {
  type: 'horizontalBar',
  data: {
    labels: myLabels,
    datasets: []
  },
	  options: {
	    responsive: true,
      //maintainAspectRatio: false,
		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true
			}]
		},
				plugins: {
					zoom: {
						zoom: {
							enabled: true,
							drag: {
                animationDuration: 1000
              },
							mode: 'y',
							speed: 0.05
						}
					}
				},
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Job Execution Chart'
      }
    }
};
console.log("Show Datasets", myData);
if(!Array.isArray(myData[0])) {
    for(var i=0; i<myData.length; i++) {
        config.data.datasets.push({
          label: myData[i]['label'],
          stack: myData[i]['stack'],
          backgroundColor: (!i) ? 'lightgray' : randomColorGenerator(),
          data: myData[i]['data']
        });
    }
} else {
    for(var i=0; i<myData.length; i++) {
        for(var j=0; j<myData[i].length; j++) {
            config.data.datasets.push({
              label: myData[i][j]['label'],
              stack: myData[i][j]['stack'],
              //backgroundColor: (!j) ? 'lightgray' : returnColor(i*3+j),
              backgroundColor: (!j) ? 'lightgray' : randomColorGenerator(),
              data: myData[i][j]['data']
            });

        }
    }
}
myFloatChart = new Chart(id, config);
}

var mySimpleBarChart;
function simpleBar(id,mySimpleBarLabels,mySimpleBarData) {
var config = {
  type: 'bar',
  data: {
            datasets: [{
                data: mySimpleBarData,
                backgroundColor: palette('tol', myData.length).map(function(hex) {
                    return '#' + hex;
                }),
                label: 'Dataset 1'
            }],
            labels: mySimpleBarLabels
        },
	  options: {
	    responsive: true,
 					scales: {
						xAxes: [{
							stacked: true
						}],
						yAxes: [{
							stacked: true
						}]
					}, 
      plugins: {
					zoom: {
						zoom: {
							enabled: true,
							//drag: {
              //  animationDuration: 1000
              //},
							mode: 'x',
							speed: 100
						}
					}
				}
    }
};
mySimpleBarChart = new Chart(id, config);
}
function resetZoom() {
  myFloatChart.resetZoom();
  mySimpleBarChart.resetZoom();
}