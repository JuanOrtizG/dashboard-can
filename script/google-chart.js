google.charts.load('current', { 'packages': ['gauge'] });

    google.charts.setOnLoadCallback(drawChart);

//############################################                 PRIMERA CONSULTA 
    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['throttle', 0],
        ['fuellevel', 0]


      ]);

      var options = {
        width: 250, height: 250,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
      };






      var chart = new google.visualization.Gauge(document.getElementById('Medidores'));

      chart.draw(data, options);

      setInterval(function () {
        var JSON = $.ajax({
          url: "consulta.php?q=1",
          dataType: 'json',
          async: false
        }).responseText;
        var Respuesta = jQuery.parseJSON(JSON);
        console.log(Respuesta);

        data.setValue(0, 1, Respuesta[0].throttle);
        data.setValue(1, 1, Respuesta[0].fuellevel);



        chart.draw(data, options);
      }, 2000);

    }
    //########################### FIN PRIMERA CONSULTA

    //###########################                             SEGUNDA CONSULTA 
    google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {

      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['speed', 0]

      ]);

      var options = {
        width: 200, height: 200,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5,
        max: 5000
      };

      var chart = new google.visualization.Gauge(document.getElementById('Medidores2'));

      chart.draw(data, options);

      setInterval(function () {
        var JSON = $.ajax({
          url: "consulta.php?q=1",
          dataType: 'json',
          async: false
        }).responseText;
        var Respuesta = jQuery.parseJSON(JSON);
        console.log(Respuesta);

        data.setValue(0, 1, Respuesta[0].speed);
        chart.draw(data, options);
      }, 2000);

    }
//###########################  FIN SEGUNDA CONSULTA