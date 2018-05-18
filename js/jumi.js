var datos = 1;
var automatico=false;
/*
var auto=false;
*/
$(function(){

    $('#boton').click(function() { /*revisar EL BOTON HA DE ESTAR OPERATIVO SOLO SI EL AUTOSCROLL ESTA DESACTIVADO???*/
		if (datos < 6) {
			$.getJSON('https://rawgit.com/HighYitan/Noticias/master/data/jumi' + datos + '.json', function(jsonObject) {
				añadir(jsonObject);
			});
			datos++;
		}
		else {
			$('#boton').text('No hay más noticias, jalabolas');
		}
	});
	$('#automatico').click(function(){
		if (automatico) {
			automatico=false;
			$('#automatico').text('Cargar noticias automáticamente');
		} else {
			automatico=true;
			$('#automatico').text('No cargar noticias automáticamente');
		}
	});
$(window).scroll(function() {
		
		jQuery.extend({
    		percentage: function(a, b) {
        		return Math.round((a / b) * 100);
    		}
		});

		if (automatico) {
			if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) { /*-------REVISAR offset*/
				if (datos < 6) {
					/*Mostrar ventana de carga*/
	//				$('#loading').show();
					/*Cargar noticias*/
					$.getJSON('https://rawgit.com/HighYitan/Noticias/master/data/jumi' + datos + '.json', function(jsonObject) {
						añadir(jsonObject);
						/*Ocultar ventana de carga*/
	//					$('#loading').hide();
					});
					datos++;
				} else {
					$('#boton').text('NO HAY MÁS NOTICIAS');
				}			
			}
		}

	});	
	
});	

function añadir(jsonObject) {
	$('#contenedor').append('<div class="contenedor">'); 
	$.each(jsonObject, function(i, item) {
		$('.contenedor:last').append(
				
				'<a href="http://www.google.es"><h2 class="titulo">' + item.titulo + '</h2></a>' +
				'<h3 class="fecha">' + item.fecha + '</h3>' +
				'<h4 class="presentacion">' + item.presentacion + '<div class="leer"><a href="http://www.google.es">Leer más...</a></div></h4>' +
				'<div class="container_caratula center-block"><a href="http://www.google.es"><img class="img-responsive caratula" src="' + item.imagen + '" alt="' + item.alter + '"></a></div>' 
				
/*
			'<div class="col-sm-12 col-md-6">'
				+ '<div class="thumbnail shortNew">'
					+ '<a href="#">'
						+ '<h2 class="text-center">' + item.titulo + '</h2>'
						+ '<p class="text-right fecha">' + item.fecha + '</p>'
						+ '<p class="text-justify">' + item.texto + '</p>'				
					+ '</a>'
					+ '<picture>'
						+ '<source srcset="' + item.imagenXs + '" media="(max-width: 400px)">'
						+ '<source srcset="' + item.imagen + '" media="(min-width: 401px)">'
						+ '<img src="' + item.imagen + '" class="img-responsive center-block" alt="' + item.alt + '">'
					+ '</picture>'
				+ '</div>'
			+ '</div>'
			*/
		);
	});
	$('#contenedor').append('</div>');
}










/*
var counter = 0;
var timer = setInterval(contar,1000);

function contar(){

	$("h1").html(counter);
	if (counter==3){
		counter=0;
	}
	else{
		counter++
	}
}

show();
$GetJson(..., function(json)){
	Cosas(json),
	hide(),
};
*/