$(function() {

		var d1 = [];
		for (var i = 0; i <= 10; i += 1) {
			d1.push([i, parseInt(Math.random() * 30)]);
		}
		d1 = {data: d1, stack: 1};

		var d2 = [];
		for (i = 0; i <= 10; i += 1) {
			d2.push([i, parseInt(Math.random() * 30)]);
		}
		d2 = {data: d2, stack: 1};

		var d3 = [];
		for (i = 0; i <= 10; i += 1) {
			d3.push([i, parseInt(Math.random() * 30)]);
		}
		d3 = {data: d3, stack: 1};
		
		var d4 = [];
		for (i = 0; i <= 10; i += 1) {
			d4.push([i+.5, parseInt(Math.random() * 30)]);
		}
		d4 = {data: d4, stack: 2};
		
		
		var d5 = [];
		for (i = 0; i <= 10; i += 1) {
			d5.push([i+.5, parseInt(Math.random() * 30)]);
		}
		d5 = {data: d5, stack: 2};

	var stack = 0,
		bars = true,
		lines = false,
		steps = false;

		$.plot("#placeholder", [ d1, d2, d3, d4, d5 ], {
			series: {
				stack: stack,
				lines: {
					show: lines,
					fill: true,
					steps: steps
				},
				bars: {
					show: bars,
					barWidth: 0.4
				}
			}
		});

});

