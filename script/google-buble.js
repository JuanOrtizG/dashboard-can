//PAQUETE DE GOOGLE CHARTS
google.charts.load("current", {packages:["corechart"]});

//EJECUTA CADA CIERTO TIEMPO LA FUNCION PRINCIPAL
setInterval( function(){
    google.charts.setOnLoadCallback(drawChart)}
    ,300);
  
// FUNCION PRINCIPAL
    
function drawChart() {

        //AJAX PARA LAS PETICIONES A LA BASE DE DATOS
        var JSON=$.ajax({ url:"consulta.php?q=1", dataType: 'json', async: false}).responseText;
        var Respuesta=jQuery.parseJSON(JSON);
        console.log(Respuesta)  ; //PARA VER BUG
        const datos = ['', Respuesta[0].throttle,Respuesta[0].fuellevel,Respuesta[0].fueltemp];     
        
        //CARGA DE LA TABLA DE GOOGLE CHART
        var data = google.visualization.arrayToDataTable([
            ['ID', 'throttle', 'fuellevel', 'Temperature'],
            ['',   0,  0,      0],
            ['',   0,  0,      150],
            datos,//ESTE DATO VINO DESDE AJAX
            ]);

        var options = {
            colorAxis: {colors: ['yellow', 'red']}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
        chart.draw(data, options);

}//FIN DE LA FUNCION PRINCIPAL