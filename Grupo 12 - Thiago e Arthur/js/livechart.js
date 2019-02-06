window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Temperatura"
        },
        axisY: {
            title: "Temperatura(°C)",
            suffix: " °C"
        },
        data: [{
            type: "column",	
            yValueFormatString: "#,### °C",
            indexLabel: "{y}",
            dataPoints: [
                { label: "Brasilia", y: 30 },
                { label: "Joao Pessoa", y: 28 },
                { label: "Sao Paulo", y: 22 },
                { label: "Rio de Janeiro", y: 32 },
                { label: "Manaus", y: 34 },
                { label: "Santa Catarina", y: 17 }
            ]
        }]
    });
    
    function updateChart() {
        var boilerColor, deltaY, yVal;
        var dps = chart.options.data[0].dataPoints;
        for (var i = 0; i < dps.length; i++) {
            deltaY = Math.round(2 + Math.random() *(-2-2));
            yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
            boilerColor = yVal > 30 ? "#FF2500" : yVal >= 28 ? "#FF6000" : yVal < 24 ? "#6B8E23 " : null;
            dps[i] = {label: chart.options.data[0].dataPoints[i].label, y: yVal, color: boilerColor};
        }
        
        chart.options.data[0].dataPoints = dps; 
        chart.render();
    };
    updateChart();
    
    setInterval(function() {updateChart()}, 5000);
    
    }