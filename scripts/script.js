var a = 0.291;
var b = 0.906;
var c = 0.184;
var d = 0.72;
var m = 0.697;
var k = 0.024;

var html = "";

var contenedor = document.getElementById("contenedor");



/* Montecarlo */

document.getElementById("montecarlo").addEventListener("click", function(){
	html = "<table><tr><th>x1</th><th>x2</th><th>F(x0)</th><th>F(x1)</th></tr>";
	//riemann(0, 10, 20, 1);	
	montecarlo();	
	//secante(0, 2, 0.45);
	
});

document.getElementById("montecarlo2").addEventListener("click", function(){
	html = "<table> <tr><th>x1</th><th>x2</th><th>F(x0)</th><th>F(x1)</th></tr>";	
	montecarlo();
	//secante(0, 2, 0.45);	
});

document.getElementById("montecarlo3").addEventListener("click", function(){
	html = "<table> <tr><th>x1</th><th>x2</th><th>F(x0)</th><th>F(x1)</th></tr>";
	montecarlo();
	//secante(0, 2, 0.45);
	
});

document.getElementById("montecarl4").addEventListener("click", function(){
	html = "<table> <tr><th>x1</th><th>x2</th><th>F(x0)</th><th>F(x1)</th></tr>";
	montecarlo();	
});

document.getElementById("montecarl4").addEventListener("click", function(){
	html = "<table> <tr><th>x1</th><th>x2</th><th>F(x0)</th><th>F(x1)</th></tr>";
	montecarlo(0, 1, 10, 5);	
});



/*Euler*/

document.getElementById("euler").addEventListener("click", function(){
	html = "<table> <tr><th>x0</th><th>x1</th><th>Punto medio</th><th>F(puntual)</th><th>f(p.m)</th></tr>";	
	//secante(0, 2, 0.45);	
	euler(0, 10, 20, 1);
});

document.getElementById("euler2").addEventListener("click", function(){
	html = "<table> <tr><th>x0</th><th>x1</th><th>Punto medio</th><th>F(puntual)</th><th>f(p.m)</th></tr>";	
	//secante(0, 2, 0.45);	
	euler(-2.633, 2.633, 10 , 2);	
});

document.getElementById("euler3").addEventListener("click", function(){
	html = "<table> <tr><th>x0</th><th>x1</th><th>Punto medio</th><th>F(puntual)</th><th>f(p.m)</th></tr>";	
	
	euler(-1000, 0, 10, 3);
});

document.getElementById("euler4").addEventListener("click", function(){
	html = "<table> <tr><th>x0</th><th>x1</th><th>Punto medio</th><th>F(puntual)</th><th>f(p.m)</th></tr>";
	euler(0, 1, 10, 4);	
});

document.getElementById("euler5").addEventListener("click", function(){
	html = "<table> <tr><th>x0</th><th>x1</th><th>Punto medio</th><th>F(puntual)</th><th>f(p.m)</th></tr>";
	euler(0, 1, 10, 4);	
});



/*Función de Secante*/
function montecarlo(t1, t2, cx){	
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

function euler(t1, t2, cx){	
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




