$(function() {
	//obtener las cajas a manipular
	var imagenMono = $("#contenedor-mono img");
	
	// escuchar el evento hover sobre la imagen del mono
	// imagenMono.hover(function(){
	// alert("sobre la imagen");
	// }, function(){
	// alert("afuera de la imagen");
	// });

imagenMono.hover(function(){
	//mouse sobre imagen coloco otro mono
	imagenMono.attr("src","../imagenes/videojuegos.png");
}, function(){
	//mouse afuera de la imagen original mono original
	imagenMono.attr("src","../imagenes/mono.jpg");	
});

});
