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

contador = 0
while contador<100:
        contador = contador +1
        print(com.readline())

