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

function create2DBarChart(myLabel,id,myBData,myBLabels) {
var myChart = new Chart(id, {
  type: 'bar',
  data: {
    labels: myBLabels,
    datasets: [{
      label: myLabel,
      data: myBData,
      backgroundColor: (myBData.length%2) ? 'rgb(255, 99, 132)' : '#4dc9f6',
      borderColor: (myBData.length%2) ? 'rgb(54, 162, 235)' : 'rgb(255, 99, 132)',
      borderWidth: 2
    }]
  },
	  options: {
	    responsive: true
	  }
});
}

function create2DBar2Chart(id,myLabels,
myLabel,myData,myLabel1,myData1) {
var myChart = new Chart(id, {
  type: 'line',
  data: {
    labels: myLabels,
    datasets: [{
      label: myLabel,
      data: myData,
      backgroundColor: (myData.length%2) ? 'rgb(255, 99, 132)' : '#4dc9f6',
      borderColor: (myData.length%2) ? 'rgb(54, 162, 235)' : 'rgb(255, 99, 132)',
      borderWidth: 2,
			fill: true,
			cubicInterpolationMode: 'monotone'
    },
    {
      label: myLabel1,
      data: myData1,
      backgroundColor: (myData.length%2) ? '#4dc9f6' : 'rgb(255, 99, 132)',
      borderColor: (myData.length%2) ? 'rgb(255, 99, 132)' : 'rgb(54, 162, 235)',
      borderWidth: 2,
      
					fill: true,
					lineTension: 0
    }]
  },
	  options: {
	    responsive: true
	  }
});
}