/*

Obtiene un numero aleatorio con semilla fija y lo muestra en monitor serie
*/
 
//Variable donde almacenaremos el numero aleatorio
long randomNumber;
 
//Función de inicialización
void setup() {
  
  //Inicializamos la comunicación serial
  Serial.begin(9600);
  
  //Escribimos por el puerto serie mensaje de inicio
  //Serial.println("Inicio de sketch - secuencia de numeros aleatorios");
      
  //Establecemos la semilla fija
  randomSeed(39);         
}
 
//Bucle principal
void loop() {

  //Genera un numero aleatorio entre 1 y 100
  randomNumber = random(1,100);
  
  //Escribimos el numero aleatorio por el puerto serie
  
  Serial.print(randomNumber);
  Serial.print("_");
  Serial.print(randomNumber);
  Serial.print("_"); 
  Serial.print(randomNumber);
  Serial.print("_");
  Serial.print(randomNumber);
  Serial.println("");

  //Esperamos 1 segundo para repetir
  delay(1000);
}
