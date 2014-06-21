$(function(){
	// alert("galeria");
	//Obtener todas las cajas a manipular
	var imagenPreview = $("#contenedor-preview");
	var imagenPrincipal = $("#contenedor-imagen img");
	var descripcion = $("#descripcion-imagen");
	var contenedor = $("#contenedor-imagen");
	var cajitaClickeada;
	var rutaPrincipal;
	var descripcionImagen;
	
	imagenPreview.click(function(event){
		//alert("click");
		
		// obtiene información de imagen y descripcion
		var cajitaClickeada = $(event.target);
		rutaPrincipal = cajitaClickeada.data("ruta-principal");
		//alert(rutaPrincipal);
		descripcionImagen = cajitaClickeada.data("descripcion");
		
		//ocultar el contenedor
		contenedor.fadeOut("slow",function(){
			//hacer los cambios
		imagenPrincipal.attr("src", rutaPrincipal);
		descripcion.html(descripcionImagen);
		contenedor.fadeIn("slow");
		});
		
		
	});
	
});
