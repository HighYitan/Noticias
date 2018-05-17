var datos = 1;
/*
var auto=false;
*/
$(function(){

    $('#boton').click(function() { /*revisar EL BOTON HA DE ESTAR OPERATIVO SOLO SI EL AUTOSCROLL ESTA DESACTIVADO???*/
		if (datos < 3) {
			$.getJSON('https://rawgit.com/HighYitan/Noticias/master/data/jumi' + datos + '.json', function(jsonObject) {
				añadir(jsonObject);
			});
			datos++;
		}
		else {
			$('#boton').text('No hay más noticias, jalabolas');
		}
	});
/*
	$('#autoscroll').click(function(){
		if (auto) {
			auto=false;
			$('#autoscroll').text('Activar Autoscroll');
		} else {
			auto=true;
			$('#autoscroll').text('Desactivar AutoScroll');
		}
	});
*/
});	
				/*
				<div class="contenedor">
					<a href="http://www.google.es"><h2 class="titulo">Castlevania Judgement el juego de lucha de la saga es novedad entre sus fans</h2></a>
					<h3 class="fecha">18 de noviembre de 2008</h3>
					<h4 class="presentacion">Hoy celebramos la salida al mercado del nuevo reboot de la saga de vídeojuegos: Castlevania, hoy el 27 de agosto de 2013 ha sido lanzado en PC tras 3 años de exclusividad en consolas (XBOX 360 y PlayStation 3), este lanzamiento dará la oportunidad a jugadores de ordenador a probar este maravilloso juego de la mano de Konami y el estudio Español MercurySteam...<div class="leer"><a href="http://www.google.es">Leer más...</a></div></h4>
					<div class="container_caratula center-block"><a href="http://www.google.es"><img class="img-responsive caratula" src="img/lords.jpg"></a></div>
				</div>
*/
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