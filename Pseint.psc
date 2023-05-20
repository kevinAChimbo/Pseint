// 1. Entidades Primitivas|Operación aritmética.
// Entrada: a,b,c,(leer),resultado(calcular).
// Proceso: resultado <-(-b + rc(b*b - 4*a*c))/(2*a)
// Salida: resultado.
Funcion principal1()
	Definir a,b,c,resultado Como Real;
	Escribir 'Digite el valor de A: ';
	Leer a;
	Escribir 'Digite el valor de B: ';
	Leer b;
	Escribir 'Digite el valor de C: ';
	Leer c;
	resultado <- (-b+rc(b*b-4*a*c))/(2*a);
	Escribir 'el resultado es: ',resultado;
FinFuncion

// 2. Entidades Primitivas|Operaciones.
// Entrada: a,b(leer),resultado(calcular).
// Proceso: resultado <- ((3+5*8)<3 y ((-6/3*4)+2<2)) o (a<b)
// Salida: resultado.
Funcion principal2()
	Definir a,b Como Real;
	Definir resultado Como Logico;
	Escribir 'Digite el valor de a: ';
	Leer a;
	Escribir 'Digite el valor de b: ';
	Leer b;
	resultado <- ((3+5*8)<3 Y ((-6/3*4)+2<2)) O (a>b);
	Escribir 'El resultado es: ',resultado;
FinFuncion

// 3. Entidades Primitivas|Intercambiar el valor de 2 variables.
// Entrada: a,b,aux(Leer).
// Proceso: aux<-a, a<-b, b<-aux
// Salida: a,b.
Funcion principal3()
	Definir a,b,aux Como Entero;
	Escribir 'Digite el valor de a: ';
	Leer a;
	Escribir 'Digite el valoe de b: ';
	Leer b;
	aux <- a;
	a <- b;
	b <- aux;
	Escribir 'Digite el valor de a: ',a;
	Escribir 'Digite el valor de b: ',b;
FinFuncion

// 4. Representacion de Algoritmos|Diagrama de flujo.
// Entrada: a,b,c(leer),a<-10,b<-20(declarando).
// Proceso: c(leer)resultado <- a+b+c(calcular)
// Salida: resultado.
Funcion principal4()
	// Este sera nuestro primer programa
	Definir a,b,c Como Entero;
	a <- 10;
	b <- 20;
	Escribir 'Digite un numero: ';
	Leer c;
	resultado <- a+b+c;
	Escribir 'El resultado es: ',resultado;
FinFuncion

// 5. Representacion de Algoritmos|Diagrama Estructurado N-S.
// Entrada: a,b,resultado(leer).
// Proceso: resultado <- a+b(calcular)
// Salida: resultado.
Funcion programa1()
	// Este sera nuestro primer programa
	Definir a,b,resultados Como Entero;
	a <- 10;
	Escribir 'Digite un numero: ';
	Leer b;
	resultado <- a+b;
	Escribir 'El resultado es: ',resultado;
FinFuncion

// 6. Representacion de Algoritmos|Pseudocódigos.
// Entrada: a,b,resultado(leer).
// Proceso: resultado <- a+b
// Salida: resultad.
Funcion programa2()
	Definir a,b,resultados Como Entero;
	a <- 10;
	Escribir 'Digite un numero: ';
	Leer b;
	// Sumamos a y b, y el reultado lo almacenamos
	resultado <- a+b;
	Escribir 'El resultado es: ',resultado;
FinFuncion

// 7. Secuenciales|Concepto de estructuras secuenciales.
// Ejercicio 1:Calcular la cantidad de segundos que estan incluidos en el 
// numero de horas,min,seg ingresados por el usuario.
// Entrada: horas,minutos,seg(leer),horas_seg,minutos_seg,total_seg(leer).
// Proceso: horas_seg <- horas * 3600
//          minutos_seg <- minutos * 60
//		    total_seg <- horas_seg + minutos_seg + seg
// Salida: total_seg.
Funcion Ejercicio1()
	Definir horas,minutos,seg Como Entero;
	Definir horas_seg,minutos_seg,total_seg Como Entero;
	Escribir 'Digite las horas';
	Leer horas;
	Escribir 'Digite los minutos';
	Leer minutos;
	Escribir 'Digite los segundos';
	Leer seg;
	// calcular el equivalente en segundos.
	horas_seg <- horas*3600;
	minutos_seg <- minutos*60;
	total_seg <- horas_seg+minutos_seg+seg;
	Escribir 'los segundos equivalentes son:',total_seg;
FinFuncion

// 8. Secuenciales|Área y longitud de un círculo(Diagrama de flujo).
// Ejercicio 2: hacer un programa para ingresar el radio de un circulo y se 
// reporte su area y la lungitud de la circunferencia.
// Entrada: radio,area,lon(leer).
// Proceso: area = pi * radio²
// longitud = 2 * pi * radio
// Salida: lon
Funcion Ejercicio2()
	Definir radio,area,lon Como Real;
	Escribir 'Digite el valor del radio';
	Leer radio;
	area <- pi*radio*radio;
	lon <- 2*pi*radio;
	Escribir 'El area de la circunferencia es:',area;
	Escribir 'la longitud es:',lon;
FinFuncion

// 9. Secuenciales|Porcentaje de hombres y mujeres(Diagrama Estructurado N-S).
// Ejercicio 3: Un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay en un grupo de estudiantes.
// Entrada: num_hombres,num_mujeres(leer),total_estudiantes(leer),porcentajeH,porcentajeM(leer).
// Proceso: total_estudiantes <- num_hombres+num_mujeres
//          porcentajeH <- num_hombres / total_estudiantes * 100
//          porcentajeM <- num_mujeres / total_estudiantes * 100
// Salida: porcentajeH,"%",porcentajeM,"%"
Funcion Ejercicio3()
	Definir num_hombres,num_mujeres como enteros;
	Definir total_estudiantes como entero;
	Definir porcentajeH,porcentajeM como reales;
	Escribir "Digite el numero de hombres:";
	Leer num_hombres;
	Escribir "Digite el numero de mujeres:";
	Leer num_mujeres;
	total_estudiantes <- num_hombres+num_mujeres;
	porcentajeH <- num_hombres / total_estudiantes * 100;
	porcentajeM <- num_mujeres / total_estudiantes * 100;
	Escribir "El porcentaje de hombres es:", porcentajeH, "%";
	Escribir "El porcentaje de mujeres es:", porcentajeM, "%" ;
FinFuncion

// 10. Secuenciales|Calcular tiempo en revisar exámenes.
// Ejercicio 4: Un profesor prepara tres cuestionarios para una evaluacion final:
// A,ByC . Se sabe que tarda 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C. La cantidad de examenes de cada
// tipo se entra por teclado.¿Cuantas horas y cuantos minutos se tardara en revisar todas la evaluaciones?
// Entrada: cantidadA,cantidadB,cantidadC(leer),tiempoA,tiempoB,tiempoC(leer),tiempo_total(leer),horas, minutos(leer).
// Proceso: tiempoA <- cantidadA * 5
//          tiempoB <- cantidadB * 8
//          tiempoC <- cantidadC * 6
//          tiempo_total <- tiempoA + tiempoB + tiempoC
//          horas <- trunc (tiempo_total/60)
//          minutos <- tiempo_total mod 60
// Salida: horas,minutos. 
Funcion Ejercicio4()
	Definir cantidadA,cantidadB,cantidadC como enteros;
	Definir tiempoA,tiempoB,tiempoC como enteros;
	Definir tiempo_total como entero;
	Definir horas, minutos como enteros;
	Escribir "Digite la cantidad de cuestionarios A:";
	leer cantidadA;
	Escribir "Digite la cantidad de cuestionarios B:";
	leer cantidadB;
	Escribir "Digite la cantidad de cuestionarios C:";
	leer cantidadC;
	//calcular los minutos que se tradara por cada cuestionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	//calculamos el tiempo total
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	//calculamos las horas y minutos
	horas <- trunc (tiempo_total/60);
	minutos <- tiempo_total mod 60;
	Escribir "se tardara",horas, "horas y",minutos, "minutos:";
FinFuncion

// 11. Secuenciales|Descuento del 15% en una tienda(Diagrama de flujo).
// Ejercicio 5: Una tienda el descuento del 15 MOD  sobre el total de la 
// compra y un cliente desea saber cuando pagar finalmente por su compra.
// Entrada: precio,descuento,precio_final(leer).
// Proceso: descuento <- precio*0.15, precio_final <- precio - descuento
// Salida: precio_final.
Funcion Ejercicio5()
	Definir precio,descuento,precio_final como real;
	Escribir "Digite el precio a pagar:";
	Leer precio;
	descuento <- precio*0.15;
	precio_final <- precio - descuento;
	Escribir "El precio a pagar es de:",precio_final;
FinFuncion

// 12. Secuenciales|Notas de un alumno(Diagrama Estructurado N-S).
// Ejercicio 6: un alumno desea saber cual sera su calificacion final en la materia algoritmos. 
// Dicha calificacion se compone de los siguientes porcentajes:
//          55% del promedio de sus tres calificaciones parciales.
//          30% de la calificacion del examen final.
//          15% de la calificacion de un trabajo final.
// Entrada: parcial1,parcial2,parcial3,promedioP,notasparcial(leer),examen_final,notaexamen(leer),
//         notatrabajo,notafinaltrabajo(leer),notafinal(leer).
// Proceso: PromedioP <- (parcial1+parcial2+parcial3)/3
//          notasParcial <- PromedioP*0.55
//          notaexamen <- examen_final*0.3
//          notafinaltrabajo <- notatrabajo*0.15
//          notafinal <- notasparcial+notaexamen+notafinaltrabajo
// Salida: notafinal.
Funcion Ejercicio6()
	Definir parcial1,parcial2,parcial3,promedioP,notasparcial como reales;
	Definir examen_final,notaexamen como reales;
	Definir notatrabajo,notafinaltrabajo como reales;
	Definir notafinal como real;
	Escribir "Digite las 3notas de los parciales:";
	Leer parcial1,parcial2,parcial3;
	PromedioP <- (parcial1+parcial2+parcial3)/3;
	notasParcial <- PromedioP*0.55;
	Escribir "Digite la nota de examne final:";
	Leer examen_final;
	notaexamen <- examen_final*0.3;
	Escribir "Digite la nota del trabajo final:";
	Leer notatrabajo;
	notafinaltrabajo <- notatrabajo*0.15;
	notafinal <- notasparcial+notaexamen+notafinaltrabajo;
	Escribir "la calficacion final es:",notafinal;
FinFuncion

// 13. Condicionales|Número par o impar.
// Ejercicio 1: Ingrese un numero entero y reportar si es par o impar.
// Entrada: num(leer).
// Proceso: num mod 2 = 0 
// Salida: es par o es impar.
Funcion actividad1()
	Definir num Como Entero;
	Escribir "Digite un numero:";
	leer num;
	Si num mod 2 = 0 Entonces
		Escribir "El numero",num, "es par";
	Sino 
		Escribir "El numero",num, "es impar";
		
	FinSi
FinFuncion

// 14. Condicionales | Alumno aprobado o desaprobado(Diagrama de flujo).
// Ejercicio 2: Determinar si un alumno aprueba o reprueba un curso sabiendo que 
// aprobara si su promedio de tres calificaciones es mayor 
// o igual a 70;reprueba caso contrario .
// Entrada: nota1,nota2,nota3(leer),promedio (leer).
// Proceso: promedio <- (nota1+nota2+nota3)/3,promedio=70
// Salida: promedio.
Funcion actividad2()
	Definir nota1,nota2,nota3 como reales;
	Definir promedio como real;
	Escribir "Digite las tres calificaciones:";
	Leer nota1,nota2,nota3;
	promedio <- (nota1+nota2+nota3)/3;
	Si promedio=70 Entonces
		Escribir "El alumno esta aprobado con:",promedio;
	SiNo
		Escribir "El alumno esta desaprobado con:",promedio;
	FinSi
FinFuncion

// 15. Condicionales | Descuento si la compra supera a $100(Diagrama Estructurado N-S).
// Ejercicio 3: En un almacen se hace un 20 mod de descuento a los clientes 
// cuya compra supere los $100 , ¿cual sera la cantidad que pagara una
// persona por su compra? 
// Entrada: compra(leer),descuento,precio_final(leer).
// Proceso: compra>100,descuento <- compra * 0.2,descuento <- 0,precio_final <- compra - descuento
// Salida: precio_final.
Funcion actividad3()
	Definir compra como real;
	Definir descuento,precio_final como real;
	Escribir "digitela cantidad de pagar:";
	Leer compra;
	Si compra>100 Entonces
		descuento <- compra * 0.2;
	SiNo
		descuento <- 0;
	FinSi
	precio_final <- compra - descuento;
	Escribir "el precio a pagar es:",precio_final;
FinFuncion

// 16. Condicionales | Operaciones con 2 números.
// Ejercicio : leer 2 numeros; si son iguales que los multipleque, si el
// primero es mayor que el sugundo que los restey si no que los sume.
// Entrada: num1,num2,resultado(leer).
// Proceso: num1=num2
//          num1>num2
//          resultado <- num1 * num2
//          resultado <- num1 - num2 
//          resultado <- num1 + num2
// Salida: resultado.
Funcion actividad4()
	Definir num1,num2,resultado como reales;
	Escribir "Digite dos numeros:";
	leer num1,num2;
	Si num1=num2 Entonces
		//si son iguales multiplicamos
		resultado <- num1 * num2;
	Sino
		Si num1>num2 Entonces
			//Si el primer numero es mayor los restamos
			resultado <- num1 - num2;
		Sino
			resultado <- num1 + num2;
		FinSi
	FinSi
	Escribir "El resultado es: ",resultado;
FinFuncion

// 17. Condicionales | Determinar el mayor de 3 números(Diagrama de flujo).
// Ejercicio 5: leer tres tres numeros diferentes e imprimir el numero mayor de los tres.
// Entrada: num1,num2,num3(leer).
// Proceso: num1>num2 y num1>num3
//          num1>num2 y num1>num3
// Salida: num1
//         num2
//         num3.
Funcion actividad5()
	Definir num1,num2,num3 como reales;
	Escribir "Digite tres numeros:";
	Leer num1,num2,num3;
	Si num1>num2 y num1>num3 Entonces
		Escribir "El mayor es:",num1;
	SiNo
		Si num1>num2 y num1>num3 Entonces
			Escribir "El mayor es:",num2;
		SiNo
			Escribir "El mayor es:",num3;
		FinSi
	FinSi
FinFuncion

// 18. Condicionales | Descuento según kilos de manzanas(Diagrama Estructurado N-S).
// Una fruteria ofrece las manzanas con descuento segun la siguiente tabla:
// numero de kilos comprados           %Descuento
//        0-2                             0%
//      2.01-5                            10%
//      5.01-10                           15%
//    10.01 en adelante                   20%
// Determinar cuanto pagara una persona que compre manzanas en esa fruteria.
// Entrada: preciok,kilos,precioI(leer),descuento,precio_final(leer).
// Proceso: precioI <- preciok * kilos
//          kilos>=0 y kilos<=2
//          kilos>=2.01 y kilos<=5
//          kilos>=5.01 y kilos<=10
//          descuento <- 0
//          descuento <- precioI * 0.1
//          descuento <- precioI*0.15
//          descuento <- precioI*0.2
//          precio_final <- precioI-descuento
// Salida: precio_final.
Funcion actividad6()
	Definir preciok,kilos,precioI Como Real;
	Definir descuento,precio_final Como Real;
	Escribir 'Cuanto cuesta el kilo de manzanas?';
	Leer preciok;
	Escribir 'Cuantos kilos de manzano a comprado?';
	Leer kilos;
	precioI <- preciok * kilos;
	Si kilos>=0 y kilos<=2 Entonces
		descuento <- 0;
	SiNo
		Si kilos>=2.01 y kilos<=5 Entonces
			descuento <- precioI * 0.1;
		SiNo
			Si kilos>=5.01 y kilos<=10 Entonces
				descuento <- precioI*0.15;
			SiNo
				descuento <- precioI*0.2;
			FinSi
		FinSi
	FinSi
	precio_final <- precioI-descuento;
	Escribir "El precio a paga es:",precio_final;
FinFuncion

// 19. Condicionales | Día de la semana según un número.
// Ejercicio : elaborar un programa que me muestrelos dias de las semanas
// cuando ingrese los siete preimeros numeros.
// Entrada: num(leer).
// Proceso: poner un numero del dia de la semana
// Salida:  Lunes
//          Martes
//          Miercoles
//          Jueves
//          Viernes
//          Sabados
//          Domingo
//          Error; no existe dia para ese numero.
Funcion actividad7()
	Definir num como entero;
	Escribir "Digite un numero del dia de la semana(1-7): ";
	leer num;
	Segun num hacer
		1: Escribir "Lunes";
		2: Escribir "Martes";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabados";
		7: Escribir "Domingo";
			
		De otro modo:
			Escribir "Error; no existe dia para ese numero";
	FinSegun
FinFuncion

// 20. Condicionales | Significado de aniversario(Diagrama de flujo).
// Ejercicio 8: elaborar un programa que me muestre 
// el significado de aniversario de cada decada hasta los 60.
// Entrada: decada(leer).
// Proceso: poner una decada
// Salida: 10 Bodas de hojalata
//         20 Bodas de porcelana
//         30 Bodas de perlas
//         40 Bodas de rubi
//         50 Bodas de oro
//         60 Bodas de Diamante
//         Decada no existente.
Funcion actividad8()
	Definir decada como entero;
	Escribir "Digite una decada";
	Leer decada;
	Segun decada Hacer
		10:
			Escribir "Bodas de hojalata";
		20:
			Escribir "Bodas de porcelana";
		30:
			Escribir "Bodas de perlas";
		40:
			Escribir "Bodas de rubi";
		50:
			Escribir "Bodas de oro";
		60:
			Escribir "Bodas de Diamante";
		De Otro Modo:
			Escribir "Decada no existente";
	FinSegun
FinFuncion

// 21. Condicionales | Menú de opciones(Diagrama Estructurado N-S).
// Ejercicio: Hacer un programa que tenga un menu con las siguientes opciones:
//             Opcion 1: Elevar un numero a una potencia X
//            Opcion 2: Sacar la raiz cuadrada de un numero
//                        Opcion 3: Salir
// Entrada: opcion(leer),num,pot,resultado(leer),num,resultado(leer).
// Proceso: resultado <- num*pot*pot
//          resultado <- rc(num)
// Salida: resultado
//         Se equivoco de opcion de menu.
Funcion actividad9()
	Definir opcion como entero;
	Escribir "Menu";
	Escribir "1.Elevar un numero a una potencia X";
	Escribir "2.Sacar la raiz cuadrada de un numero";
	Escribir "3.Salir";
	Escribir "Digite una opcion: ";
	Leer opcion;
	Segun opcion Hacer
		1:
			Definir num,pot,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			Escribir "Digite la potencia";
			Leer pot;
			resultado <- num*pot*pot;
			Escribir "El resultado es: ",resultado;
		2:
			Definir num,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			resultado <- rc(num);
			Escribir "El resultado es: ",resultado;
		3:
		De Otro Modo:
			Escribir "Se equivoco de opcion de menu";
	FinSegun
FinFuncion

// 22. Ciclos | Ciclos con un número determinado de iteraciones.
// Entrada: i(leer).
// Proceso: i<- 1,10,1
// Salida: i.
Funcion ciclos1()
	Definir i Como Entero;
	Para i<- 1 Hasta 10 Con Paso 1 Hacer
		Escribir i;
	FinPara
FinFuncion

// 23. Ciclos | Ciclos con un número indeterminado de iteraciones.
// Entrada: i(leer).
// Proceso: i <- 1,i <- 10
// Salida: i <- i + 1
Funcion ciclos2()
	Definir i como entero;
	i <- 1;
	Mientras i <= 10 Hacer
		Escribir i;
		i <- i + 1;
	FinMientras
FinFuncion

// 24. Ciclos | Ciclos con un número indeterminado de iteraciones.
// Entrada: i(leer).
// Proceso: i <- i + 1
// Salida: i>10
Funcion ciclos3()
	Definir i como entero;
	i <- 1;
	Repetir
		Escribir i;
		i <- i + 1;
	Hasta Que i>10;
FinFuncion

// 25. Ciclos | Suma de los N primeros números.
// Ejercicio 1: calcular la suma de los "N" primeros numeros.
// Entrada: N,suma,i(leer).
// Proceso: suma <- 0,i<-1,N,1,suma <- suma + i
// Salida: suma.
Funcion ejemplo1()
	Definir N,suma,i Como Entero;
	Escribir "Digite la cantidad de numeros a sumarse; ";
	leer N;
	suma <- 0;
	Para i<-1 Hasta N Con Paso 1 Hacer
		suma <- suma + i;
	FinPara
	Escribir "La suma es:",suma;
FinFuncion

// 26. Ciclos |  Suma de pares e impares dentro de un rango(Diagrama de flujo).
// Ejercicio 2: se desea calcular independiente la suma de los numeros pares e impares comprendidos entre 1 y 50.
// Entrada: suma_pares,suma_impares,i(leer).
// Proceso: suma_pares <- 0,suma_impares <- 0,
// i<-2,49,i,2 = 0,suma_pares <- suma_pares+i,suma_impares <- suma_impares+i
// Salida: suma_pares,suma_impares.
Funcion 	ejemplo2()
	Definir suma_pares,suma_impares,i como enteros;
	suma_pares <- 0;
	suma_impares <- 0;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2 = 0 Entonces
			suma_pares <- suma_pares+i;
		SiNo
			suma_impares <- suma_impares+i;
		FinSi
	FinPara
	Escribir "La suma de pares es: ",suma_pares;
	Escribir "la suma es impares es: ",suma_impares;
FinFuncion

// 27. Ciclos | Conteo de positivos, negativos y neutros(Diagrama Estructurado N-S).
// Ejercicio 3: leer 10 numeros e imprimir cuantos son positivos
// cuantos negativos y cuantos neutros.
// Entrada: num,i,conteo_positivos,conteo_negativos,conteo_neutros(leer).
// Proceso: conteo_positivos <- 0,conteo_negativos <- 0,conteo_neutros <- 0
// i<-1,10,num=0,conteo_neutros <- conteo_neutros+1, num>0,conteo_positivos <- conteo_positivos+1,
// conteo_negativos <- conteo_negativos+1
// Salida: conteo_positivos,conteo_negativos,conteo_neutros.
Funcion 	ejemplo3()
	Definir num,i como entero;
	Definir conteo_positivos,conteo_negativos,conteo_neutros como enteros;
	conteo_positivos <- 0;
	conteo_negativos <- 0;
	conteo_neutros <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i,"Digite un numero: ";
		Leer num;
		Si num=0 Entonces
			conteo_neutros <- conteo_neutros+1;
		SiNo
			Si num>0 Entonces
				conteo_positivos <- conteo_positivos+1;
			SiNo
				conteo_negativos <- conteo_negativos+1;
			FinSi
		FinSi
	FinPara
	Escribir "la cantidad de positivos es: ",conteo_positivos;
	Escribir "la cantidad de negativos es: ",conteo_negativos;
	Escribir "la cantidad de neutros es: ",conteo_neutros;
FinFuncion

// 28. Ciclos  | Calificación promedio y mas baja(Diagrama de flujo).
// Ejercicio 4: suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos.Realizar un algoritmo para calcular la calificacion promedio y
// la calificacion mas baja del grupo.
// Entrada: calificaciones_promedio(leer),calificacion,suma(leer),i(leer).
// Proceso: suma <- 0,i <- 1,10,1,suma <- suma + calificacion, calificacion < calificaciones_baja,
// calificacion_baja <- calificacion
// Salida: calificacion_promedio,calificacion_baja.
Funcion 	ejemplo4()
	Definir calificaciones_promedio como real;
	Definir calificacion,suma como real;
	Definir i como entero;
	suma <- 0;
	Para i <- 1 hasta 10 con paso 1 hacer
		Escribir i, ".Digite una calificacion: ";
		leer calificacion;
		//suma iterativa de las calificaciones
		suma <- suma + calificacion;
		//calculamos la menor calificacion
		Si calificacion < calificaciones_baja entonces
			calificacion_baja <- calificacion;
		FinSi
	FinPara
	Escribir "la calificacion promedio es: ",calificacion_promedio;
	Escribir "la calificacion mas baja es: ",calificacion_baja;
FinFuncion

// 29. Ciclos | Factorial de un número(Diagrama de flujo).
// Ejercicio: calcular el factorial de un numero mayor o igual a 0.
// Entrada: num(leer),i,factorial(leer).
// Proceso: num>=0,i <- 1,factorial <- 1, i<=num,
// factorial <- factorial * i,i <- i + 1
// Salida: factorial.
Funcion	 ejemplo5()
	Definir num como entero;
	Definir i,factorial como enteros;
	Repetir
		Escribir "Digite un numero: ";
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	// N! = 1 * 2 * 3 * ... * N
	Mientras i<=num Hacer
		factorial <- factorial * i;
		i <- i + 1;
	FinMientras
	Escribir "El factorial es: ",factorial;
FinFuncion

// 30. Ciclos | Suma iterativa de cuadrados
// Ejercicio 6: calcular la siguiente sumatoria de los "N" elemento:
// s = 1 + 4 + 9 + ...
// Entrada: n_elementos(leer),i, suma(leer).
// Proceso: i <- 1,suma <- 0,i<=n_elementos,suma <- suma + i*i,i <- i + 1
// Salida: suma.
Funcion 	ejemplo6()
	Definir n_elementos como entero;
	Definir i, suma como enteros;
	Escribir "Digite la cantidad de elementos a sumarse: ";
	Leer n_elementos;
	i <- 1;
	suma <- 0;
	Mientras i<=n_elementos Hacer
		suma <- suma + i*i;
		i <- i + 1;
	FinMientras
	Escribir "La suma es: ",suma;
FinFuncion

// 31.  Ciclos | Sumas iterativas y conteos.
//Ejercicio : ingresar "N" enteros, visualizar la sumade los numeros pares
//de la lista,cuantos numeros pares existen y cual es el promedio de los 
// numeros impares.
// Entrada: n_elementos,i,num(leer),suma_pares,conteo_pares(leer),suma_impares,conteo_impares(leer).
// Proceso: i <-1,suma_pares <- 0,conteo_pares <- 0,i<= n_elementos , num,2=0,
// suma_pares <- suma_pares + num,conteo_impares <- conteo_impares + 1,i <- i + 1,
// conteo_pares = 0,promedio_impares <- suma_impares/conteo_impares
// Salida: No sean digitado numeros pares,suma_pares,conteo_pares,
// No sean digitado numeros impares,promedio_impares.
Funcion ejemplo7()
	Definir n_elementos,i,num como enteros;
	Definir suma_pares,conteo_pares como enteros;
	Definir suma_impares,conteo_impares como enteros;
	Definir promedio_impares como real;
	Escribir "Digite la cantidad a elementos a ingresar: ";
	leer n_elementos;
	i <-1;
	suma_pares <- 0;
	conteo_pares <- 0;
	Mientras i<= n_elementos Hacer
		Escribir i,"Digite un numero: ";
		leer num;
		si num mod 2=0 Entonces
			//el num es par
			
			// suma iterativa de pares
			suma_pares <- suma_pares + num;
			
			//conteo de pares
			conteo_pares <- conteo_pares + 1;
		Sino
			//el num es par
			
			//suma iterativa de impares
			suma_impares <- suma_impares + num;
			
			//conteo de impares
			conteo_impares <- conteo_impares + 1;
		FinSi
		i <- i + 1;
	FinMientras
	Si conteo_pares = 0 Entonces
		Escribir "No sean digitado numeros pares";
	Sino
		Escribir "La suma de los numeros pares es",suma_pares;
		Escribir "El conteo de los numeros pares es",conteo_pares;
	FinSi
	Si conteo_impares = 0 Entonces
		Escribir "No sean digitado numeros impares";
	SiNo
		promedio_impares <- suma_impares/conteo_impares;
		Escribir "El promedio de impares es: ",promedio_impares;
	FinSi
FinFuncion

// 32. Ciclos | Ciclos Mientras-Hacer(Diagrama de Flujo).
// Ejercicio 8: Dada las horas trabajadas de 5 personas y la tarifa de pago calcular el salario,
// y la sumatoria de todos los salario.
// Entrada: i(leer),salario_cada,horas,tarifa,sumatoria_salario,numero_trabajadores(leer).
// Proceso: i <- 1,sumatoria_salario <- 0,i<=numero_trabajadores,salario_cada <- horas*tarifa,
// i <- i+1,sumatoria_salario <- sumatoria_salario+salario_cada
// Salida: salario_cada,sumatoria_salario.
Funcion ejemplo8()
	Definir i Como Entero;
	Definir salario_cada,horas,tarifa,sumatoria_salario,numero_trabajadores Como Entero;
	i <- 1;
	sumatoria_salario <- 0;
	Escribir 'Digite el numero de trabajadores: ';
	Leer numero_trabajadores;
	Escribir 'Digite tarifa: ';
	Leer tarifa;
	Mientras i<=numero_trabajadores Hacer
		Escribir i,'Digite el valor de horas trabajadaspor este trabajador: ';
		Leer horas;
		salario_cada <- horas*tarifa;
		Escribir 'el valor a pagar de este trabajador es: ',salario_cada;
		i <- i+1;
		sumatoria_salario <- sumatoria_salario+salario_cada;
	FinMientras
	Escribir 'El valor total de salarios a pagar es de: ',sumatoria_salario;
FinFuncion

Algoritmo  Ejercicios
	principal1();
	principal2();
	principal3();
	principal4();
	programa1();
	programa2();
	Ejercicio1();
	Ejercicio2();
	Ejercicio3();
	Ejercicio4();
	Ejercicio5();
	Ejercicio6();
	actividad1();
	actividad2();
	actividad3();
	actividad4();
	actividad5();
	actividad6();
	actividad7();
	actividad8();
	actividad9();
	ciclos1();
	ciclos2();
	ciclos3();
	ejemplo1();
	ejemplo2();
	ejemplo3();
	ejemplo4();
	ejemplo5();
	ejemplo6();
	ejemplo7();
	ejemplo8();
FinAlgoritmo


