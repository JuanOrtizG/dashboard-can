
function ingresar(){
    let lectura =  document.getElementById("input-data").value;
          
    google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);

      //AJAX PARA LAS PETICIONES A LA BASE DE DATOS
      var JSON=$.ajax({ url:"consultatable.php?q=1", dataType: 'json', async: false}).responseText;
      var Respuesta=jQuery.parseJSON(JSON);
      console.log(Respuesta)  ; //PARA VER BUG

      //CAMBIAMOS EL TIPO DE ESTRUCTURA DE DATOS DE JSON A 
      console.log(Respuesta.length)
      let datos=[]
      for (var i = 0; i< parseInt(lectura); i++)
      {
          datos.push([Respuesta[i].throttle,Respuesta[i].fuellevel,Respuesta[i].fueltemp])
      }

      console.log(datos)
      
      //const datos = [Respuesta[0].throttle,Respuesta[0].fuellevel,Respuesta[0].fueltemp];     
      //console.log(datos)

      //CARGA DE DATOS DE LA TABLA
    function drawTable() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Throttle');
      data.addColumn('string', 'fuellevel');
      data.addColumn('string', 'fueltemp');
     
      data.addRows(  datos  );

      //SELECCIONAMOS EL ELEMENTO CONTENEDOR PARA RENDERIZAR
      var table = new google.visualization.Table(document.getElementById('table_div'));

      //RENDERIZAMOS LA TABLA EN EL ELMENTO CONTENEDORS
      table.draw(data, {showRowNumber: true, width: '50%', height: '100%'});
    }
  }
