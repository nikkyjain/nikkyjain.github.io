window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

function returnColor(i) {
  var color = Chart.helpers.color;
  var col=(i==0)? 'red' : (i==1)? 'blue' : (i==2) ? 'green' : (i==3) ? 'purple' : 'yellow';
  //console.log("Dbg: i="+i+" Col= "+col);
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
	  responsive: true
	}
});
for(var i=0; i<myData.length; i++) {
  myChart.data.datasets.push({
    label: myData[i]['label'],
    backgroundColor: returnColor(i),
    data: myData[i]['data']
  });
}
myChart.update();
}
