import mysql.connector
import serial

#FUNCIONES GENERALES
def configPuertoCom(velocidad,puerto):
	ser = serial.Serial()
	ser.baudrate = velocidad
	ser.port = puerto
	ser.open()
	return ser
	
#CONFIGURACION DEL PUERTO SERIAL
com = configPuertoCom(9600,"COM3")


#CONFIGURACION DE LA BASE DE DATOS
mydb = mysql.connector.connect(
	host="localhost",
	user="root",
	password="",
	database="mibase"
)


mycursor = mydb.cursor()

#PROGRAMA PRINCIPAL


contador = 0
temporizador=0
entrada=""
while contador<100:
	entrada = com.readline()

        #tratamiento de datos

	#Ajuste:
	a = entrada
	
	#cadena = "b'123\r\n'"
	cadena = str(a)
	buscar = "b'"
	reemplarzar_por = ""
	salida = cadena.replace(buscar,reemplarzar_por)

	buscar2 = "\\r\\n'"
	reemplazar_por2 = ""
	salida2 = salida.replace(buscar2,reemplazar_por2)
		
	#pasamos a una lista
	datos = salida2.split("_")
	
	#PERSISTENCIA DE DATOS
	
	
	print(datos)
	
	sql="INSERT INTO bdcanj1939 (fueltemp,fuellevel,throttle,speed) VALUES (%s,%s,%s,%s)"
	val=(datos[0],datos[1],datos[2],datos[3])
	mycursor.execute(sql,val)
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	
	
	
	#REINICIO Y ACTUALIZACION
	contador = contador +1
	entrada = ""
	temporizador = temporizador +1
	
