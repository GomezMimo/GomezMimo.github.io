/*Constantes*/
var A = 0.281; // A es igual a C(0)
var B = 5; // B es igual a C(ent)
var a = 38;
var b = 0.721;
var d = 0.92;
var e = 2.71828182;

/*Variables*/
var ct1, ct2, m, b, t3, ct3, b2, t1;

/*Variables html*/
var html = "";

var contenedor = document.getElementById("contenedor");



/*Botones*/
document.getElementById("inicio").addEventListener("click", function(){
	return contenedor.innerHTML = "<h2>PROBLEMA:</h2><p>La siguiente ecuación permite calcular la concentración de un químico en un reactor donde se tiene una mezcla completa:</p><img src='images/background.png'/ height='70' /> <p>Si la concentración inicial es C0 =A y la concentración de entrada es Cent = B. Calcule:</p><p id='listas'>	<p>1. El tiempo que le toma a la concentración llegar a la condición -> C(t)= 0.5 * Cent </p><p>2. El tiempo que le toma a la concentración llegar a la condición -> C(t) = d * Cent </p></p><table id='table-data'><tr><td>a = 38</td><td>b = b</td><td>d = 0.92</td><tr><tr><td>A = 0.281</td><td>B = 5</td><td>Grupo No = 88</td><tr></table>"
	
});

document.getElementById("secante_1").addEventListener("click", function(){
	html = "<table> <tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>m</th><th>b2</th><th>t3</th><th>c(t3)</th></tr>";
	secante(0, 2, 0.45);
	
});

document.getElementById("secante_2").addEventListener("click", function(){	
	html = "<table> <tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>m</th><th>b2</th><th>t3</th><th>c(t3)</th></tr>";
	secante(0, 1, 0.92);
	
});

document.getElementById("biseccion_1").addEventListener("click", function(){	
	html = "<table><tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>t3</th><th>c(t3)</th></tr>";
	biseccion(0, 2, 0.45);
});

document.getElementById("biseccion_2").addEventListener("click", function(){	
	html = "<table><tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>t3</th><th>c(t3)</th></tr>";
	biseccion(0, 1, 0.92);
});

document.getElementById("newton_1").addEventListener("click", function(){
	html = "<table><tr><th>n</th><th>t0</th><th>c(t0)</th><th>c'(t0)</th><th>x1</th></tr>";
	newton(0, 0.45);
})

document.getElementById("newton_2").addEventListener("click", function(){
	html = "<table><tr><th>n</th><th>t0</th><th>c(t0)</th><th>c'(t0)</th><th>t1</th></tr>";
	newton(0, 0.92);
})

document.getElementById("resultados").addEventListener("click", function(){
	return contenedor.innerHTML = "<h2>Resultados</h2><p id='resultado_items'>1. No importa el método que se use, el resultado siempre va a dar igual, la única variente es el número de pasos que gasta cada uno de estos.</p><p id='resultado_items'>2. El metodo de bisección fue el que gastó mas pasos en el ejercicio (1).</p><p id='resultado_items'>3. El metodo de la secante fue el que gastó mas pasos en el ejercicio (2).</p><p id='resultado_items'>4. EL metodo de Newton fue el que gastó menos pasos en ambos ejercicios.</p><p id='resultado_items'>5. El método de Newton aunque resulta un poco mas dificil al tener que derivar la función original, los resultados se obtienen mas rápido.</p><p>*** En este <a href='https://docs.google.com/spreadsheets/d/1Xo3nnEZejvyDSwjTu5QNcqothH9ZXxeMYr5eLm5e6Dw/edit?usp=sharing'> LINK </a>podrás ver los mismos resultados tabulados en Excel con su respectiva grafica.***</p> ";
});

/*Función de Secante*/
function secante(t1, t2, cx){	
	var contador = 1;		
	ct1 = 1;
	ct2 = 1;			
	while(ct1 != 0 || ct2 != 0){				
		ct1 = ( B * ( 1 - Math.pow(e, -a * t1)) + A * Math.pow(e,-b*t1) - cx * B);
		ct2 = ( B * ( 1 - Math.pow(e, -a * t2)) + A * Math.pow(e,-b*t2) - cx * B);
		m = ((ct2 - ct1) / (t2 - t1));		
		b2 = (-m*t1) + ct1;		
		t3 = (-b2 / m);
		html += "<tr><td>"+ (contador) +"</td><td>"+ t1 +"</td><td>" + ct1.toFixed(4) +"</td><td>"+ t2.toFixed(4) +"</td><td>"+ ct2.toFixed(16) +"</td><td>"+ m.toFixed(4) +"</td><td>" + b2.toFixed(4) + "</td><td>"+ t3.toFixed(4) +"</td>";
		contador++;
		ct3 = (( B * ( 1 - Math.pow(e, -a * t3)) + A * Math.pow(e,-b*t3) - cx * B));			
			if(ct1 * ct3 < 0){					
				ct1 = ct1;
			}else{				
				ct1 = ct3;
			}		
			if(ct2 * ct3 < 0){				
				ct1 = ct1;
			}else{				
				t2 = t3;				
			}	
		html+= "<td>"+ ct3.toFixed(16) +"</td></tr>";
		
		
	}	
	return contenedor.innerHTML = html + "</table>";
}

/*Función de bisección*/

function biseccion(t1, t2, cx){	
	var contador = 1;		
	ct1 = 1;
	ct2 = 1;			
	while(ct2 != 0){				
		ct1 = ( B * ( 1 - Math.pow(e, -a * t1)) + A * Math.pow(e,-b*t1) - cx * B);
		ct2 = ( B * ( 1 - Math.pow(e, -a * t2)) + A * Math.pow(e,-b*t2) - cx * B);			
		t3 = (t1+t2)/2;
		html += "<tr><td>"+ (contador) +"</td><td>"+ t1.toFixed(4) +"</td><td>" + ct1 +"</td><td>"+ t2.toFixed(4) +"</td><td>"+ ct2.toFixed(16) +"</td><td>"+ t3.toFixed(10) +"</td>";
		contador++;
		ct3 = (( B * ( 1 - Math.pow(e, -a * t3)) + A * Math.pow(e,-b*t3) - cx * B));			
			if(ct3 < 0) {
				t1 = t3;
			}else{
				t2 = t3;
			}	
		html+= "<td>"+ ct3.toFixed(16) +"</td></tr>";		
		
	}	
	return contenedor.innerHTML = html + "</table>";
}

/*Función de Newton Rapshon*/

function newton(t1, cx){
	var contador = 1;
	ct1 = 1;
	ct2 = 1;
	while(ct1 != 0){
		ct1 = ( B * ( 1 - Math.pow(e, -a * t1)) + A * Math.pow(e,-b*t1) - cx * B);
		ct2 = a * B * Math.pow(e, -a*t1) - b * Math.pow(e, -b*t1) * 0 * Math.pow(e, -b*t1);		
		t2 = t1 - (ct1 / ct2);
		html += "<tr><td>"+ (contador) +"</td><td>"+ t1.toFixed(4) +"</td><td>" + ct1 +"</td><td>"+ ct2.toFixed(16) +"</td><td>"+ t2.toFixed(4);	
		t1 = t2;							
		contador++;
	}	
	return contenedor.innerHTML = html + "</table>";
}

//







