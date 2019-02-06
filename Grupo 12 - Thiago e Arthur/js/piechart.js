    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Faço', 'Horas por dia'],
    ['Trabalho', 8],
    ['Comer', 2],
    ['TV', 4],
    ['Malhar', 1],
    ['Dormir', 8],
    ['Outros', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Rotina dos Alunos', 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
    }

    // Load google charts
    google.charts.setOnLoadCallback(drawGrad);

    // Draw the chart and set the chart values
    function drawGrad() {
    var data = google.visualization.arrayToDataTable([
    ['Graduacao', 'Alunos'],
    ['Medicina',2229],
    ['Direito',3122],
    ['Engenharia Civil',1233],
    ['Outros',1231]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('alunosGrad'));
    chart.draw(data, options);
    }


      // Load google charts
      google.charts.setOnLoadCallback(drawDescChart);
  
      // Draw the chart and set the chart values
      function drawDescChart() {
      var data = google.visualization.arrayToDataTable([
      ['Alunos', 'Descontos'],
      ['5%',28229],
      ['10%',312],
      ['15%',1233],
      ['25%',1231],
      ['50%',1232],
      ['100%',430]
      ]);
  
      // Optional; add a title and set the width and height of the chart
      var options = {'width':550, 'height':400};
  
      // Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.PieChart(document.getElementById('alunosDesc'));
      chart.draw(data, options);
      }

        // Load google charts
        google.charts.setOnLoadCallback(drawPosChart);
  
        // Draw the chart and set the chart values
        function drawPosChart() {
        var data = google.visualization.arrayToDataTable([
        ['Pos-Graduacao', 'Alunos'],
        ['Arquitetura',289],
        ['Computacao e TI',312],
        ['Direito',1233],
        ['Engenharia',1231],
        ['Educacao Fisica',562],
        ['Outros',430]
        ]);
    
        // Optional; add a title and set the width and height of the chart
        var options = {'width':550, 'height':400};
    
        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('alunosPos'));
        chart.draw(data, options);
        }