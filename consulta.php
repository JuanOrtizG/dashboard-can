<?php
header('Content-Type: application/json');
$pdo=new PDO("mysql:dbname=mibase;host=localhost","root","");
switch($_GET['q']){
		// Buscar Último Dato
		case 1:
		    $statement=$pdo->prepare("SELECT speed,rpm,throttle,fueltemp,fuellevel,tiempo FROM bdcanj1939 ORDER BY id DESC LIMIT 0,1");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$json=json_encode($results);
			echo $json;
		break; 
		// Buscar Todos los datos
		default:
			
			$statement=$pdo->prepare("SELECT speed,rpm,throttle,fueltemp,fuellevel,tiempo FROM bdcanj1939 ORDER BY id ASC");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$json=json_encode($results);
			echo $json;
		break;

}
?>
