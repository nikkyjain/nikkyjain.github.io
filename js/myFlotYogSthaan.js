 function drawFlotStackBar (id, data, numSeries=1/*, labels*/) {
    var flotChart = $('#'+id);
    
    var options = {
			series: {
        stack:true,
        bars: {
          show: true,
          barWidth: .9/numSeries,
          align: "center",
          //order: 1,
        }
			},
      axisLabels: {
        show: true
      },
      xaxis: {
          show: true,
          //autoScale: "exact",
          axisLabel: 'जीव-समास',
          mode: "categories",
          //tickLength: 0, // hide gridlines
          //ticks: labels
      },
      yaxis: {
          //autoScale:"exact",
          axisLabel: 'योग-स्थान'
      },
      legend: {
        show: true,
        noColumns: 4,
        /*container: document.getElementById("legendContainer")*/
      },
			selection: {
				mode: "x"
			},
      grid: {
        show: true,
        hoverable: true,
        clickable: true
      },
      /*tooltip: {
        show:true
      },*/
		};
    

		flotChart.bind("plotselected", function (event, ranges) {
				$.each(plot.getXAxes(), function(_, axis) {
					var opts = axis.options;
					opts.min = ranges.xaxis.from;
					opts.max = ranges.xaxis.to;
				});
				plot.setupGrid();
				plot.draw();
				plot.clearSelection();
		});

		var plot = $.plot(flotChart, data, options);
    
    // Reset Zoom Logic
    $("#resetZoom").click(function () {
      plot = $.plot(flotChart, data, options);
    });


  // Tooltip logic
  flotChart.bind("plothover", function(event, pos, item) {
  
    
    $("#tooltip").remove();
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if (item) {
      var plotData = plot.getData();
	  var valueString = "<strong>"+(item.series.data[item.dataIndex][0])+"</strong><br>";
      for (var i = plotData.length-1; i > -1; --i) {
        var series = plotData[i];
        for (var j = 0; j < series.data.length; ++j) {
          if (j === item.dataIndex) {
            valueString += series.label + ":" + series.data[j][1] + "<br>";
          }
        }
      }
      var cssParams = {
        position: 'absolute',
        display: 'none',
        border: '1px solid #888888',
        padding: '2px',
        //'background-color': '#eeeeee',
        'background-color': "#fee",
        opacity: 0.8
      };
      if (pos.pageX < 0.8 * windowWidth) {
        cssParams.left = pos.pageX + 3;
      } else {
          cssParams.right = windowWidth - pos.pageX + 6;
      }
      if (pos.pageY < 0.8 * windowHeight) {
        if (pos.pageY < 0.8 * windowHeight) {
          cssParams.top = pos.pageY + 3;
        } else {
          cssParams.bottom = windowHeight - pos.pageY + 6;
        }
      }
      $('<div id="tooltip">' + valueString + '</div>').css(cssParams).appendTo('body').fadeIn(100);

      /*$("<div id='tooltip'>" + valueString + "</div>").css({
        position: "absolute",
        display: "none",
        top: pos.pageY + 5,
        left: pos.pageX + 5,
        border: "1px solid #fdd",
        padding: "2px",
        //"background-color": "#fee",
        "background-color": "#eeeeee",
        opacity: 0.80
      }).appendTo("body").fadeIn(200);*/

    }
  });
  }
  
  function mySimpleFlot (id, data, numSeries=1/*, labels*/) {
    var flotChart = $('#'+id);
    
    var options = {
			series: {
        //stack:true,
        bars: {
          show: true,
          barWidth: .9/numSeries,
          align: "center",
          //order: 1,
        }
			},
      axisLabels: {
        show: true
      },
      xaxis: {
          show: true,
          //autoScale: "exact",
          axisLabel: 'testcases',
          //mode: "categories",
          //tickLength: 0, // hide gridlines
          //ticks: labels
      },
      yaxis: {
          //autoScale:"exact",
          axisLabel: 'timelines'
      },
      legend: {
        show: true,
        noColumns: 4,
        /*container: document.getElementById("legendContainer")*/
      },
			selection: {
				mode: "x"
			},
      grid: {
        show: true,
        hoverable: true,
        clickable: true
      },
      /*tooltip: {
        show:true
      },*/
		};
    

		flotChart.bind("plotselected", function (event, ranges) {
				$.each(plot.getXAxes(), function(_, axis) {
					var opts = axis.options;
					opts.min = ranges.xaxis.from;
					opts.max = ranges.xaxis.to;
				});
				plot.setupGrid();
				plot.draw();
				plot.clearSelection();
		});

		var plot = $.plot(flotChart, data, options);
    
    // Reset Zoom Logic
    $("#resetZoom").click(function () {
      plot = $.plot(flotChart, data, options);
    });


  // Tooltip logic
  flotChart.bind("plothover", function(event, pos, item) {
  
    
    $("#tooltip").remove();
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if (item) {
      var plotData = plot.getData();
      var valueString = "<strong>Data : "+(item.dataIndex+1)+"</strong><br>";

      for (var i = 0; i < plotData.length; ++i) {
        var series = plotData[i];
        for (var j = 0; j < series.data.length; ++j) {
          if (series.data[j][0] === item.datapoint[0]) {
            valueString += series.label + ":" + series.data[j][1] + "<br>";
          }
        }
      }
      var cssParams = {
        position: 'absolute',
        display: 'none',
        border: '1px solid #888888',
        padding: '2px',
        //'background-color': '#eeeeee',
        'background-color': "#fee",
        opacity: 0.8
      };
      if (pos.pageX < 0.8 * windowWidth) {
        cssParams.left = pos.pageX + 3;
      } else {
          cssParams.right = windowWidth - pos.pageX + 6;
      }
      if (pos.pageY < 0.8 * windowHeight) {
        if (pos.pageY < 0.8 * windowHeight) {
          cssParams.top = pos.pageY + 3;
        } else {
          cssParams.bottom = windowHeight - pos.pageY + 6;
        }
      }
      $('<div id="tooltip">' + valueString + '</div>').css(cssParams).appendTo('body').fadeIn(100);

      /*$("<div id='tooltip'>" + valueString + "</div>").css({
        position: "absolute",
        display: "none",
        top: pos.pageY + 5,
        left: pos.pageX + 5,
        border: "1px solid #fdd",
        padding: "2px",
        //"background-color": "#fee",
        "background-color": "#eeeeee",
        opacity: 0.80
      }).appendTo("body").fadeIn(200);*/

    }
  });
  }