const Leer = requiere("prompt-sync")()
const Escribir = console

class ejercicios{

// 1. Entidades Primitivas / Operaci�n aritm�tica.
// Entrada: a,b,c,resultado(leer).
// Proceso: resultado <- (-b + rc(b^2 - 4*a*c))/(2*a)
// Salida: resultado
    principal1() {
    var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
    
	document.write("Digite el valor de A: ");
	a = Number(prompt());
	document.write("Digite el valor de B: ");
	b = Number(prompt());
	document.write("Digite el valor de c")
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	document.write("El resultado es: ",resultado);
}

// 2. Entidades Primitivas / Operaciones.
// Ejercicio 2: Determinar la soluci�n l�gica de la siguiente operaci�n:
// Entrada: a,b (leer),resultado(leer).
// Proceso: resultado <- ((3+5*8)<3 y ((-6/3*4)+2<2)) o (a>b)
// Salida: resultado
    principal2() {
    var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
	document.write("Digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write("El resultado es: ",resultado,'<BR/>');
}

// 3. Entidades Primitivas / Intercambiar el valor.
// Ejercicio 3: Intercambiar el valor de 2 variables.
// Entrada: a,b,aux(leer).
// Proceso: aux <- a,a <- b,b <- aux
// Salida: a,b
    principal3() {
    var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("Digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("El nuevo valor de a es: ",a,'<BR/>');
	document.write("El nuevo valor de b es: ",b,'<BR/>');
}

// 4. Representaci�n de Algoritmos / (Diagrama de Flujo).
// Ejercicio 1: Este sera nuestro primer programa.
// Entrada: a,b,c,resultado(leer).
// Proceso: a <- 10,b <- 20,resultado <- a+b+c
// Salida: resultado
    programa1() {
    var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
	a = 10;
	b = 20;
	document.write("Digite un numero: ",'<BR/>');
	c = Number(prompt());
	resultado = a+b+c;
	document.write("El resultado es: ",resultado,'<BR/>');
}

// 5. Representaci�n de Algoritmos / (Diagrama Estructurado N-S).
// Ejercicio 2: Este sea nuestro primer programa.
// Entrada: a,b,reaultado(leer).
// Proceso: a <- 10,resultado <- a+b
// Salida: resultado
    programa2() {
    var resultado;
	var a = new Number();
	var b = new Number();
	var reaultado = new Number();
	a = 10;
	document.write("Digite un numero: ",'<BR/>');
	b = Number(prompt());
	resultado = a+b;
	document.write("El resultado e: ",resultado,'<BR/>');
}

// 6. Representaci�n de Algoritmos / Pseudoc�digos.
// Ejercicio 3: Sumamos a y b, y el resultado lo almacenamos.
// Entrada: a,b,reaultado(leer).
// Proceso:  a <- 10,resultado <- a+b
// Salida: resultado
    programa3() {
    var resultado;
	var a = new Number();
	var b = new Number();
	var reaultado = new Number();
	a = 10;
	document.write("Digite un numero: ",'<BR/>');
	b = Number(prompt());
	// Sumamos a y b, y el resultado lo almacenamos
	resultado = a+b;
	document.write("El resultado e: ",resultado,'<BR/>');
}

// 7. Secuenciales / Concepto de estructuras secuenciales.
// Ejercicio 1: calcular la cantidad de segundos que est�n incluidos en el
// n�mero de horas, minutos y segundos ingresados por el usuario.
// Entrada: horas,minutos,seg(leer),horas_seg, minutos_seg, total_seg (leer).
// Proceso: horas_seg <- horas * 3600, minutos_seg <- minutos * 60, total_seg <- horas_seg + minutos_seg + seg
// Salida: total_seg
    ejercicio1() {
    var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("Digite las horas: ",'<BR/>');
	horas = Number(prompt());
	document.write("Digite los minutos: ",'<BR/>');
	minutos = Number(prompt());
	document.write("Digite los segundos: ",'<BR/>');
	seg = Number(prompt());
	// calcular el equivalente en segundos
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("Los segundos equivalentes son: ",total_seg,'<BR/>');
}

// 8. Secuenciales / �rea y longitud de un c�rculo.(Diagrama de flujo).
// Ejercicio 2: Hacer un programa para ingrear el radio de un circulo y se reporte su area 
// y la longitud de la circunferencia.area=pi * radio^2,longitud=2 * pi * radio.
// Entrada: radio,area,lon(leer).
// Proceso: area <- pi * radio^2, lon <- 2 * pi * radio
// Salida: area,lon
    ejercicio2() {
    var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor del radio: ",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("El area de la circunferencia es: ",area,'<BR/>');
	document.write("La longitud es: ",lon,'<BR/>');
}

// 9. Secuenciales / Porcentaje de hombres y mujeres(Diagrama Estructurado N-S).
// Ejercicio 3: Un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujers hay en un grupo de estudiantes.
// Entrada: num_hombres, num_mujeres(leer),total_estudiantes(leer),  porcentajeH, porcentajeM(leer).
// Proceso: total_estudiantes <- num_hombres+num_mujeres, porcentajeH <- num_hombres / total_estudiantes * 100,
// porcentajeH <- num_mujeres / total_estudiantes *100
// Salida: porcentajeH,porcentajeM
    ejercicio3() {
    var num_hombres = new Number();
	var num_mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("Digite el numero de hombres: ",'<BR/>');
	num_hombres = Number(prompt());
	document.write("Digite el numero de mujeres: ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajeh = num_mujeres/total_estudiantes*100;
	document.write("El porcentaje de hombres es: ",porcentajeh,"%",'<BR/>');
	document.write("El porcentaje de mujeres es: ",porcentajem,"%",'<BR/>');
}

// 10. Secuenciales / Calcular tiempo en revisar ex�menes.
// Ejercicio 4: Un profesor prepara tres cuestionarios para una evaluacion final:
// A,B y C. Se sabe que se tardara 5 minutos en revisar el cuestionario A, 8 en revisar
// el cuestionario B y 6 en el C. La cantidad de ex�menes de cada tipo se entra por teclado.
// �Cu�ntas horas y cuantos minutos se tardar� en revisar todas la evaluaciones?
// Entrada: cantidadA,cantidadB,cantidadC(leer), tiempoA,tiempoB,tiempoC(leer), tiempo_total(leer), horas, minutos(leer).
// Proceso: tiempoA <- cantidadA * 5, tiempoB <- cantidadB * 8, tiempoC <- cantidadC * 6,
// tiempo_total <- tiempoA + tiempoB + tiempoC, tiempo_total <- trunc(tiempoA / 60), minutos <- tiempo_total mod 60
// Salida: horas,minutos
    ejercicio4() {
    var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestionario A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestionario B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestionario C: ",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los minutos que se tardara por c ada cuestionario
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// calculamos el tiempo total que le toma revisar todos los cuestionarios
	tiempo_total = tiempoa+tiempob+tiempoc;
	// calculamos el tiempo total que le toma revisar todos los cuestionarios
	tiempo_total = Math.trunc(tiempoa/60);
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas,"horas y ",minutos," minutos",'<BR/>');
}

// 11. Secuenciales / Descuento del 15% en una tienda(Diagrama de flujo).
// Ejercicio 5: Una tienda ofrece un descuento del 15% sobre el total de la compra
// y un cliente desea saber cu�nto deber� pagar finalmente por su compra.
// Entrada: precio,descuento,precio_final(leer).
// Proceso: descuento <- precio*0.15, precio_final <- precio - descuento
// Salida: precio_final
    ejercicio5() {
    var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite el precio a pagar: ",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("El precio a pagar es de: ",precio_final,'<BR/>');
}

// 12. Secuenciales /  Notas de un alumno(Diagrama EStructurado N-S).
// Ejercicio 6: un alumno desea saber cual ser� su califiaci�n final en la materia de Algoritmos.
// Dicha califiaci�n se compone de los siguientes porcentajes: 
// 55% del promedio de sus tres calificaciones parciales.
// 30% de la calificaion del examen final.
// 15% de la calificacion de un trabajo final.
// Entrada: parcial1,parcial2,parcial3,promedioP,notasParcial(leer), examen_final,notaExamen(leer), 
// notaTrabajo,notaFinalTrabajo(leer), notaFinal(leer).
// Proceso: promedioP <- (parcial1+parcial2+parcial3)/3, notasParcial <- promedioP*0.55, notaExamen <- examen_final*0.3 ,
// notaFinalTrabajo <- notaTrabajo * 0.15, notaFinal <- notasParcial+notaExamen+notaFinalTrabajo
// Salida: notaFinal
    ejercicio6() {
    var parcial1 = new Number();
	var parcial2 = new Number();
	var parcial3 = new Number();
	var promediop = new Number();
	var notasparcial = new Number();
	var examen_final = new Number();
	var notaexamen = new Number();
	var notatrabajo = new Number();
	var notafinaltrabajo = new Number();
	var notafinal = new Number();
	document.write("Digite las 3 notas de los parciales: ",'<BR/>');
	parcial1 = Number(prompt());
	parcial2 = Number(prompt());
	parcial3 = Number(prompt());
	promediop = (parcial1+parcial2+parcial3)/3;
	notasparcial = promediop*0.55;
	document.write("Digite la nota del examen final: ",'<BR/>');
	examen_final = Number(prompt());
	notaexamen = examen_final*0.3;
	document.write("Digite la nota del trabajo final: ",'<BR/>');
	notatrabajo = Number(prompt());
	notafinaltrabajo = notatrabajo*0.15;
	notafinal = notasparcial+notaexamen+notafinaltrabajo;
	document.write("La calificacion final es: ",notafinal,'<BR/>');
}

// 13. Condicionales / N�mero par o impar.(Pseucodigo)
// Ejercicio 1: Ingrese un n�mero entero y reportar si es par o impar.
// Entrada: num(leer).
// Proceso: num mod 2 = 0 
// Salir: num es par, num es impar
    actividad1() {
    var num = new Number();
	document.write("Digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("El numero ",num," es par",'<BR/>');
	} else {
		document.write("El numero ",num," es impar",'<BR/>');
	}
}

// 14. Condicionales / Alumno aprobado o desaprobado(Diagrama de flujo).
// Ejercicio 2:  Dterminar si un alumno aprueba o reprueba un curso, sabiendo que aprobar�
// si su promedio de tres calificaciones es mayor o igual a 70;reprueba caso contrario.
// Entrada: nota1,nota2,nota3(leer), promedio(leer).
// Proceso: promedio <- (nota1+nota2+nota3)/3, promedio>=70
// Salida: promedio esta aprobado,promedio esta desaprobado
    actividad2() {
    var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("Digite las 3 calificaiones: ",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=70) {
		document.write("El alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write("El alumno esta desaprobado con: ",promedio,'<BR/>');
	}
}

// 15.  Condicionales / Descuento si la compra supera a $100(Diagrama Estructurado N-S).
// Ejercicio 3: En un almac�n se hace un 20 MOD de descuento a los clientes cuya compra
// supere los $100. �Cu�l ser� la cantidad que pagar� una persona por su compra?
// Entrada: compra(leer),  descuento,precio_final(leer).
// Proceso: compra>100, descuento <- compra * 0.2, descuento <- 0, precio_final <- compra - descuento
// Salida: precio_final
    actividad3() {
    var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite la cantidad a pagar: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("El precio a pagar es:",precio_final,'<BR/>');
}

// 16. Condicionales / Operaciones con 2 n�meros.(Pseucodigo)
// Ejercicio 4: Leer 2 n�meros; si son igaules que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.
// Entrada: num1,num2,resultado(leer).
// Proceso: num1=num2, resultado <- num1 * num2, num1>num2 , resultado <- num1 - num2, resultado <- num1 + num2
// Salida: resultado
    actividad4() {
    var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("Digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// Si son iguales multiplicamos
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			// Si el primer numero es mayor los restamos
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("El resultado es: ",resultado,'<BR/>');
}

// 17. Condicionales / Determinar el mayor de 3 n�meros(Diagrama de flujo).
// Ejercicio 5: Leer tres n�meros diferente e imprimir el n�mero mayor de los tres. 
// Entrada: num1,num2,num3(leer).
// Proceso: num1>num2 y num1>num3, Si num2>num1 y num2>num3
// Salida: num1, num2, num3
    actividad5() {
    var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	document.write("Digite tres numeros difirentes: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	if (num1>num2 && num1>num3) {
		document.write("El mayor es: ",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			document.write("El mayor es: ",num2,'<BR/>');
		} else {
			document.write("El mayor es: ",num3,'<BR/>');
		}
	}
}

// 18. Condicionales / Descuento seg�n kilos de manzanas(Diagrama Estructurado N-S).
// Ejercicio 6: Una fruteria ofrece las manzanas con descuento seg�n la siguiente tabla:
// N�mero de los kilos comprados                %Descuento
// 0-2                                      0%
// 2.01-5                                    10%
// 5.01-10                                   15%
// 10.01 en adelante                            20%
// Determinar cu�nto p�gara una persona que compre manzanas en esa fruter�a.
// Entrada: precioK,Kilos,precioI(leer), descuento,precio,final(leer).
// Proceso: precioI <- precioK * kilos, kilos>=0 y kilos<=2, descuento <- 0,
// descuento <- precioI*0.1, descuento <- precioI*0.15, descuento <- precioI*0.2,
// precio_final <- precioI - descuento
// Salida: precio_final
    actividad6() {
    var condicion, precio_final;
	var preciok = new Number();
	var kilos = new Number();
	var precioi = new Number();
	var descuento = new Number();
	var precio = new Number();
	var final = new Number();
	document.write("Cu�nto cuesta el kilo de manzanas? ",'<BR/>');
	preciok = Number(prompt());
	document.write("Cuantos Kilos de manzana a comprado? ",'<BR/>');
	kilos = Number(prompt());
	precioi = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (condicion) {
			descuento = precioi*0.1;
		} else {
			if (condicion) {
				descuento = precioi*0.15;
			} else {
				descuento = precioi*0.2;
			}
		}
	}
	precio_final = precioi-descuento;
	document.write("El precio a pagar es: $",precio_final,'<BR/>');
}

// 19. Condicionales / D�a de la semana seg�n un n�mero.
// Ejercicio 7: Elaborar un programa que me muestre los dias de las semanas 
// cuando ingrese los siete primeros n�meros.
// Entrada: num(leer).
// Proceso: 1, 2, 3, 4, 5, 6, 7   
// Salida: resultado
    actividad7() {
    var num = new Number();
	document.write("Digite un numero del dia de la semana(1-7): ",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("Lunes",'<BR/>');
		break;
	case 2:
		document.write("Martes",'<BR/>');
		break;
	case 3:
		document.write("Miercoles",'<BR/>');
		break;
	case 4:
		document.write("Jueves",'<BR/>');
		break;
	case 5:
		document.write("Viernes",'<BR/>');
		break;
	case 6:
		document.write("Sabado",'<BR/>');
		break;
	case 7:
		document.write("Domingo",'<BR/>');
		break;
	default:
		document.write("Error, no existe sia para ese numero",'<BR/>');
	}
}

// 20. Condicionales / Significado de aniversario(Diagrama de flujo).
// Ejercicio 8: Elaborar un programa que me muestre el significado de aniversario de cada d�cada hasta los 60.
// Entrada: decada(leer).
// Proceso: 10, 20, 30, 40, 50, 60
// Salida: decada
    actividad8() {
    var decada = new Number();
	document.write("DIgite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("Bodas de Hojalata",'<BR/>');
		break;
	case 20:
		document.write("Bodas de Porcelana",'<BR/>');
		break;
	case 30:
		document.write("Bodas de Perlas",'<BR/>');
		break;
	case 40:
		document.write("Bodas de Rubi",'<BR/>');
		break;
	case 50:
		document.write("Bodas de Oro",'<BR/>');
		break;
	case 60:
		document.write("Bodas de Diamante",'<BR/>');
		break;
	default:
		document.write("Decada no existente",'<BR/>');
	}
}

// 21. Condicionales / Men� de opciones(Diagrama Estructurado N-S).
// Ejercicio 9: Hacer un programa que tenga un men� con las siguientes opciones:
// Opcion 1: Elevar un numero a una potencia x
// Opcion 2: Sacar la raiz cuadrada de un numero
// Opcion 3: Salir
// Entrada: opcion(leer),  num,pot,resultado(leer), num,resultado(leer).
// Proceso: resultado <- num^pot, resultado <- rc(num).
// Salir: resultado
    actividad9() {
    var opcion = new Number();
	document.write("Menu",'<BR/>');
	document.write("1.Elevar un numero a una potencia X",'<BR/>');
	document.write("2.Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3.Salir",'<BR/>');
	document.write("Digite una opcion: ",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("Se equivoco de opcion de menu",'<BR/>');
	}
}

// 22. Ciclos / Ciclos con un n�mero determinado de iteraciones.
// Ejercicio 1:
// Entrada: i(leer).
// Proceso: i<-1, 10, 1
// Salida: resultado
    ciclos1() {
    var i = new Number();
	for (i=1;i<=10;i++) {
		document.write(i,'<BR/>');
	}
}

// 23. Ciclos / Ciclos con un n�mero indeterminado de iteraciones.
// Ejercicio 2:
// Entrada: i(leer).
// Proceso: i <- 1, i <= 10, i <- i + 1
// Salida: resultado
    ciclos2() {
    var i = new Number();
	i = 1;
	while (i<=10) {
		document.write(i,'<BR/>');
		i = i+1;
	}
}

// 24. Ciclos / Ciclos con un n�mero indeterminado de iteraciones.
// Ejemplo 3:
// Entrada: i(leer).
// Proceso: i <- 1, i <- i + 1, i>10
// Salida: resultado
    ciclos3() {
    var i = new Number();
	i = 1;
	do {
		document.write(i,'<BR/>');
		i = i+1;
	} while (i<=10);
}

// 25. Ciclos  / Suma de los N primeros n�meros.
// Ejemplo 1: Calcular la suma de los "N" primeros n�meros.
// Entrada: N,suma,i(leer).
// Proceso: suma <- 0, suma <- suma + i
// Salida: suma
    ciclos4() {
    var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("Digite la cantidad de numeros a sumarse; ",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("La suma es:",suma,'<BR/>');
}

// 26. Ciclos / Suma de pares e impares dentro de un rango(Diagrama de flujo).
// Ejercicio 2: se desea calcular independiente la suma de los numeros pares e impares comprendidos entre 1 y 50.
// Entrada: suma_pares,suma_impares,i(leer).
// Proceso: suma_pares <- 0, suma_impares <- 0, suma_pares <- suma_pares+i, suma_impares <- suma_impares+i
// Salida: suma_pares, suma_impares
    ciclos5() {
    var suma_pares = new Number();
	var suma_impares = new Number();
	var i = new Number();
	suma_pares = 0;
	suma_impares = 0;
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	document.write("La suma de pares es: ",suma_pares,'<BR/>');
	document.write("la suma es impares es: ",suma_impares,'<BR/>');
}

// 27. Ciclos / Conteo de positivos, negativos y neutros(Diagrama Estructurado N-S).
// Ejercicio 3:  Ejercicio: leer 10 numeros e imprimir cuantos son positivos
// cuantos negativos y cuantos neutros.
// Entrada: num,i(leer), conteo_positivos,conteo_negativos,conteo_neutros(leer).
// Proceso: conteo_positivos <- 0, conteo_negativos <- 0, conteo_neutros <- 0,
// conteo_neutros <- conteo_neutros+1, conteo_negativos <- conteo_negativos+1
// Salida: conteo_positivos,conteo_negativos,conteo_neutros
    ciclos6() {
    var num = new Number();
	var i = new Number();
	var conteo_positivos = new Number();
	var conteo_negativos = new Number();
	var conteo_neutros = new Number();
	conteo_positivos = 0;
	conteo_negativos = 0;
	conteo_neutros = 0;
	for (i=1;i<=10;i++) {
		document.write(i,"Digite un numero: ",'<BR/>');
		num = Number(prompt());
		if (num==0) {
			conteo_neutros = conteo_neutros+1;
		} else {
			if (num>0) {
				conteo_positivos = conteo_positivos+1;
			} else {
				conteo_negativos = conteo_negativos+1;
			}
		}
	}
	document.write("la cantidad de positivos es: ",conteo_positivos,'<BR/>');
	document.write("la cantidad de negativos es: ",conteo_negativos,'<BR/>');
	document.write("la cantidad de neutros es: ",conteo_neutros,'<BR/>');
}

// 28. Ciclos / Calificaci�n promedio y mas baja.
// Ejercicio 4: suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 alumnos.Realizar un algoritmo para calcular la calificacion promedio y
// la calificacion mas baja del grupo.
// Entrada: calificaciones_promedio(leer), calificacion,suma(leer).
// Proceso: suma <- 0, calificacion_baja <- 99999, suma <- suma + calificacion,
// calificacion_baja <- calificacion, calificacion_promedio <- suma/10
// Salida: calificacion_promedio,calificacion_baja
    ciclos7() {
    var calificaciones_baja, calificacion_baja, calificacion_promedio;
	var calificaciones_promedio = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,".Digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		// suma iterativa de las calificaciones
		suma = suma+calificacion;
		// calculamos la menor calificacion
		if (calificacion<calificaciones_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("la calificacion promedio es: ",calificacion_promedio,'<BR/>');
	document.write("la calificacion mas baja es: ",calificacion_baja,'<BR/>');
}

// 29.  Ciclos / Ejercicio 5 - Factorial de un n�mero(Diagrama de flujo).
// Ejercicio 5: calcular el factorial de un numero mayor o igual a 0.
// Entrada: num(leer), i,factorial(leer).
// Proceso: i <- 1, factorial <- 1, factorial <- factorial * i, i <- i + 1
// Salida: factorial
    ciclos8() {
    var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	// N! = 1 * 2 * 3 * ... * N
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("El factorial es: ",factorial,'<BR/>');
}

// 30. Ciclos / Ejercicio 6 - Suma iterativa de cuadrados(Diagrama Estructurado N-S).
// Ejercicio 6: calcular la siguiente sumatoria de los "N" elemento:
// s = 1 + 4 + 9 + ...
// Entrada: n_elementos(leer), i, suma(leer).
// Proceso: i <- 1, suma <- 0, i<=n_elementos, suma <- suma + i*i, i <- i + 1
// SAlida: suma
    ciclos9() {
    var n_elementos = new Number();
	var i = new Number();
	var suma = new Number();
	document.write("Digite la cantidad de elementos a sumarse: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma = 0;
	while (i<=n_elementos) {
		suma = suma+i*i;
		i = i+1;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

// 31. Ciclos / Sumas iterativas y conteos.
// Ejercicio 7: ingresar "N" enteros, visualizar la sumade los numeros pares
// de la lista,cuantos numeros pares existen y cual es el promedio de los 
// numeros impares.
// Entrada: n_elementos,i,num(leer), suma_pares(leer),conteo_pares suma_impares(leer),conteo_impares(leer), promedio_impares(leer).
// Proceso: i <-1, suma_pares <- 0, conteo_pares <- 0, suma_impares <- 0, conteo_impares <- 0, num mod 2=0, suma_pares <- suma_pares + num, conteo_pares <- conteo_pares + 1, suma_impares <- suma_impares + num, 
// conteo_impares <- conteo_impares + 1, i <- i + 1, promedio_impares <- suma_impares/conteo_impares
// Salida: suma_pares, conteo_pares, promedio_impares
    ciclos10() {
    var n_elementos = new Number();
	var i = new Number();
	var num = new Number();
	var suma_pares = new Number();
	var conteo_pares = new Number();
	var suma_impares = new Number();
	var conteo_impares = new Number();
	var promedio_impares = new Number();
	document.write("Digite la cantidad a elementos a ingresar: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	suma_impares = 0;
	conteo_impares = 0;
	while (i<=n_elementos) {
		document.write(i,"Digite un numero: ",'<BR/>');
		num = Number(prompt());
		if (num%2==0) {
			// el num es par
			// suma iterativa de pares
			suma_pares = suma_pares+num;
			// conteo de pares
			conteo_pares = conteo_pares+1;
		} else {
			// el num es par
			// suma iterativa de impares
			suma_impares = suma_impares+num;
			// conteo de impares
			conteo_impares = conteo_impares+1;
		}
		i = i+1;
	}
	if (conteo_pares==0) {
		document.write("No sean digitado numeros pares",'<BR/>');
	} else {
		document.write("La suma de los numeros pares es",suma_pares,'<BR/>');
		document.write("El conteo de los numeros pares es",conteo_pares,'<BR/>');
	}
	if (conteo_impares==0) {
		document.write("No sean digitado numeros impares",'<BR/>');
	} else {
		promedio_impares = suma_impares/conteo_impares;
		document.write("El promedio de impares es: ",promedio_impares,'<BR/>');
	}
}

// 32. Ciclos  / Ciclos Mientras-Hacer(Diagrama de Flujo).
// Ejercicio 8: Dada las horas trabajadas de 5 personas y la tarifa de pago calcular el salario,
// y la sumatoria de todos los salario.
// Entrada: i(leer),salario_cada,horas,tarifa,sumatoria_salario,numero_trabajadores(leer).
// Proceso: i <- 1,sumatoria_salario <- 0,i<=numero_trabajadores,salario_cada <- horas*tarifa,
// i <- i+1,sumatoria_salario <- sumatoria_salario+salario_cada
// Salida: salario_cada,sumatoria_salario.
    ciclos11() {
    var i = new Number();
	var salario_cada = new Number();
	var horas = new Number();
	var tarifa = new Number();
	var sumatoria_salario = new Number();
	var numero_trabajadores = new Number();
	i = 1;
	sumatoria_salario = 0;
	document.write("Digite el numero de trabajadores: ",'<BR/>');
	numero_trabajadores = Number(prompt());
	document.write("Digite tarifa: ",'<BR/>');
	tarifa = Number(prompt());
	while (i<=numero_trabajadores) {
		document.write(i,"Digite el valor de horas trabajadaspor este trabajador: ",'<BR/>');
		horas = Number(prompt());
		salario_cada = horas*tarifa;
		document.write("el valor a pagar de este trabajador es: ",salario_cada,'<BR/>');
		i = i+1;
		sumatoria_salario = sumatoria_salario+salario_cada;
	}
	document.write("El valor total de salarios a pagar es de: ",sumatoria_salario,'<BR/>');
  }
}
let ejercicios = new Ejercicios () 
	ejercicios.principal1();
	ejercicios.principal2();
	ejercicios.principal3();
	ejercicios.programa1();
	ejercicios.programa2();
	ejercicios.programa3();
	ejercicios.ejercicio1();
	ejercicios.ejercicio2();
	ejercicios.ejercicio3();
	ejercicios.ejercicio4();
	ejercicios.ejercicio5();
	ejercicios.ejercicio6();
	ejercicios.actividad1();
	ejercicios.actividad2();
	ejercicios.actividad3();
	ejercicios.actividad4();
	ejercicios.actividad5();
	ejercicios.actividad6();
	ejercicios.actividad7();
	ejercicios.actividad8();
	ejercicios.actividad9();
	ejercicios.ciclos1();
	ejercicios.ciclos2();
	ejercicios.ciclos3();
	ejercicios.ciclos4();
	ejercicios.ciclos5();
	ejercicios.ciclos6();
	ejercicios.ciclos7();
	ejercicios.ciclos8();
	ejercicios.ciclos9();
	ejercicios.ciclos10();
	ejercicios.ciclos11();


