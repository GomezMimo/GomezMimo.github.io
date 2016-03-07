/*Variables*/
var A = 0.281; // A es igual a C(0)
var B = 5; // B es igual a C(ent)
var a = 38;
var b = 0.721;
var d = 0.92;
var e = 2.71828182;
var t1, t2, ct1, ct2, m, b, t3, ct3, b2;

/*Variables html*/
var html = "";

var contenedor = document.getElementById("contenedor");



/*Botones*/
document.getElementById("secante_1").addEventListener("click", function(){
	html = "<table> <tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>m</th><th>b2</th><th>t3</th><th>c(t3)</th></tr>";
	biseccion(0, 2, 0.45);
	
});

document.getElementById("secante_2").addEventListener("click", function(){
	html = "<table> <tr><th>n</th><th>t1</th><th>c(t1)</th><th>t2</th><th>c(t2)</th><th>m</th><th>b2</th><th>t3</th><th>c(t3)</th></tr>";
	biseccion(0, 1, 0.92);
	
});


function biseccion(t1, t2, cx){
	var contador = 1;		
	ct1 = 1;
	ct2 = 1;		
	alert(ct1 +" "+ ct2);
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