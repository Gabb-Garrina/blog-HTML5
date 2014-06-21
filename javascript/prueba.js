// function se ejecuta cuando el DOM está listo, que la página ya se cargó por completo

$(function() {
	//alert("DOM listo");

	//obtener la caja a manipular
	var titulo = $("#titulo h1");
	//mandar en alert el contenido
	//alert(titulo.html());

	titulo.html("nuevo titulo");

	//obtengo la caja
	var mono = $("#contenedor-mono img");
	//obtuve el valor del atributo src de la caja, la ruta
	var rutaMono = mono.attr("src");
	alert(rutaMono);

	//obtengo la caja
	var redes = $("#redes-imagenes");
	redes.addClass("fondo-blanco");

	//escuchar el evento click
	titulo.click(function() {
		titulo.html("click");
	});

});

