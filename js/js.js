//Variables paralos distintos juegos:

//Variables de estado
var pantallaActualQuiz = false;       //Estamos en el quiz.
var pantallaActualTabu = false;       //Estamos en el tabú.
var pantallaActualDibujo = false;     //Estamos en el dibujo.
var pantallaActualMimica = false;     //Estamos en la mimica.
var pantallaActualParty = false;      //Estamos en el party.
var pantallaActualEP = false;         //Estamos en el EP.

//Variables de los juegos
var numEquipos = 0;
var duracionJuego = 10;
var copiaduracionJuego = 10; 
var puntuacionEquipos = [0,0,0,0,0,0,0,0,0,0];
var MayorPuntuacion = 1;  //Divisor, para que no sea 0 y pete.
var turnoEquipo = 0;
var playTime = false;
var puntosProvisionales = 0;
var TotMinSec = [0,0,0];    //Contador de tiempo global para el EP.
var flg1 = true; 

//Variables del party
var posicionEquiposParty = [0,0,0,0,0,0];
var duracionJuegosParty = [0,0,0,0];
var RondaEquipo = 1; //Hasta 3, las rondas que ha hecho cada equipo en el party.

/*Codigo que queremos que se analice cada 1 segundo.*/
setInterval(function(){
          //Barra del quiz
          if(duracionJuego <1 && playTime && pantallaActualQuiz)
          {
              duracionJuego = 0;
              $("#textoTimeUp").css("visibility", "visible");
              playTime = false;
          }
          else if(playTime && pantallaActualQuiz)
          {
              duracionJuego--;
              $("#tiempoContador").text(duracionJuego);
              $("#barraProgreso").css("width", Math.round((duracionJuego/copiaduracionJuego)*100, -1)+1 + "%");

              //Ancho de la barra y color.
              if(Math.round((duracionJuego/copiaduracionJuego)*100 > 75))
                  $("#barraProgreso").css("background-color", "#86e01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 50))
                  $("#barraProgreso").css("background-color", "#f2d31b"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 25))
                  $("#barraProgreso").css("background-color", "#f2b01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 10))
                  $("#barraProgreso").css("background-color", "#f27011"); 
              else
                  $("#barraProgreso").css("background-color", "#f34213"); 
          }
          //Barra del tabu
          else if(duracionJuego <1 && playTime && pantallaActualTabu)
          {
              duracionJuego = 0;
              $("#textoTimeUpTabu").css("visibility", "visible");
              playTime = false;
          }
          
          else if(playTime && pantallaActualTabu)
          {
              duracionJuego--;
              $("#tiempoContadorTabu").text(duracionJuego);
              $("#barraProgresoTabu").css("width", Math.round((duracionJuego/copiaduracionJuego)*100, -1)+1 + "%");

              //Ancho de la barra y color.
              if(Math.round((duracionJuego/copiaduracionJuego)*100 > 75))
                  $("#barraProgresoTabu").css("background-color", "#86e01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 50))
                  $("#barraProgresoTabu").css("background-color", "#f2d31b"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 25))
                  $("#barraProgresoTabu").css("background-color", "#f2b01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 10))
                  $("#barraProgresoTabu").css("background-color", "#f27011"); 
              else
                  $("#barraProgresoTabu").css("background-color", "#f34213"); 
          }
          //Barra de la mimica
          else if(duracionJuego <1 && playTime && pantallaActualMimica)
          {
              duracionJuego = 0;
              $("#textoTimeUpMimica").css("visibility", "visible");
              playTime = false;
          }
          else if(playTime && pantallaActualMimica)
          {
              duracionJuego--;
              $("#tiempoContadorMimica").text(duracionJuego);
              $("#barraProgresoMimica").css("width", Math.round((duracionJuego/copiaduracionJuego)*100, -1)+1 + "%");

              //Ancho de la barra y color.
              if(Math.round((duracionJuego/copiaduracionJuego)*100 > 75))
                  $("#barraProgresoMimica").css("background-color", "#86e01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 50))
                  $("#barraProgresoMimica").css("background-color", "#f2d31b"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 25))
                  $("#barraProgresoMimica").css("background-color", "#f2b01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 10))
                  $("#barraProgresoMimica").css("background-color", "#f27011"); 
              else
                  $("#barraProgresoMimica").css("background-color", "#f34213"); 
          }
          //Barra del dibujo
          else if(duracionJuego <1 && playTime && pantallaActualDibujo)
          {
              duracionJuego = 0;
              $("#textoTimeUpDibujo").css("visibility", "visible");
              playTime = false;
          }
          else if(playTime && pantallaActualDibujo)
          {
              duracionJuego--;
              $("#tiempoContadorDibujo").text(duracionJuego);
              $("#barraProgresoDibujo").css("width", Math.round((duracionJuego/copiaduracionJuego)*100, -1)+1 + "%");

              //Ancho de la barra y color.
              if(Math.round((duracionJuego/copiaduracionJuego)*100 > 75))
                  $("#barraProgresoDibujo").css("background-color", "#86e01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 50))
                  $("#barraProgresoDibujo").css("background-color", "#f2d31b"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 25))
                  $("#barraProgresoDibujo").css("background-color", "#f2b01e"); 
              else if(Math.round((duracionJuego/copiaduracionJuego)*100 > 10))
                  $("#barraProgresoDibujo").css("background-color", "#f27011"); 
              else
                  $("#barraProgresoDibujo").css("background-color", "#f34213"); 
          }
          else if(playTime && pantallaActualEP && TotMinSec[0]<1) 
          {   //En el EP, el contador es totminsec y el tiempo total es duracionjuego.
              $("#contadorMinEP").text("0");
              $("#contadorSecEP").text("00");
              $("#textoTimeUpEP").css("visibility","visible");
              $("#BotonFinalizarEP").css("display","block");
              playTime = false;
          }
          else if(playTime && pantallaActualEP)
          {
              TotMinSec[0]--;
              TotMinSec[1] = Math.trunc(TotMinSec[0]/60);
              TotMinSec[2] = TotMinSec[0]%60;              
              $("#contadorMinEP").text(TotMinSec[1]);
                if(TotMinSec[2] < 10)
                   $("#contadorSecEP").text("0"+TotMinSec[2]);
                else
                  $("#contadorSecEP").text(TotMinSec[2]);

              //Mover ascensor.
              if(TotMinSec[0]>=1)
                $("#imagenAscensor").animate({top: '-='+(57/duracionJuego)+'%'},{duration: 995, easing: "linear"}); //En total un 57% para arriba.

              //Mover flecha y cambiar letras de piso.
              if(TotMinSec[0]/duracionJuego < 0.18 && flg1==true)
              {
                  flg1=false;
                  //$("#FichaEquipo" + (turnoEquipo+1)).animate({top: '-=8.1vw'}); //Animar flecha de movimiento.
                  $("#adelanteImagenEP").animate({top: '-=10%'});
                  $("#letraPiso5").removeClass("importantGrowANDColor");
                  $("#letraPiso6").addClass("importantGrowANDColor");
              }
              else if(TotMinSec[0]/duracionJuego >= 0.18 && TotMinSec[0]/duracionJuego < 0.36 && flg1==false)
              {
                  flg1=true;
                  $("#adelanteImagenEP").animate({top: '-=10%'});
                  $("#letraPiso4").removeClass("importantGrowANDColor");
                  $("#letraPiso5").addClass("importantGrowANDColor");
              }
              else if(TotMinSec[0]/duracionJuego >= 0.36 && TotMinSec[0]/duracionJuego < 0.54 && flg1==true)
              {
                  flg1=false;
                  $("#adelanteImagenEP").animate({top: '-=10%'});
                  $("#letraPiso3").removeClass("importantGrowANDColor");
                  $("#letraPiso4").addClass("importantGrowANDColor");
              }
              else if(TotMinSec[0]/duracionJuego >= 0.54 && TotMinSec[0]/duracionJuego < 0.72 && flg1==false)
              {
                  flg1=true;
                  $("#adelanteImagenEP").animate({top: '-=10%'});
                  $("#letraPiso2").removeClass("importantGrowANDColor");
                  $("#letraPiso3").addClass("importantGrowANDColor");
              }
              else if(TotMinSec[0]/duracionJuego >= 0.72 && TotMinSec[0]/duracionJuego < 0.91 && flg1==true)
              {
                  flg1=false;
                  $("#adelanteImagenEP").animate({top: '-=10%'});
                  $("#letraPiso1").removeClass("importantGrowANDColor");
                  $("#letraPiso2").addClass("importantGrowANDColor");
              }
          }
      }, 1000);
/*Fin del Código que se analiza cada segundo.*/

//Jquery cuando ya se ha cargado el documento.
$(document).ready(function()
{
  /*Menu Principal, aparición d ela descripción en hover.*/
  $("#botonQuizMP").hover(function(){
      $("#DescQuizMP").css("display", "block");
    },
    function(){
      $("#DescQuizMP").css("display", "none");
    });

  $("#botonTabuMP").hover(function(){
      $("#DescTabuMP").css("display", "block");
    },
    function(){
      $("#DescTabuMP").css("display", "none");
    });

  $("#botonMimicaMP").hover(function(){
      $("#DescMimicaMP").css("display", "block");
    },
    function(){
      $("#DescMimicaMP").css("display", "none");
    });

  $("#botonDibujoMP").hover(function(){
      $("#DescDibujoMP").css("display", "block");
    },
    function(){
      $("#DescDibujoMP").css("display", "none");
    });

  $("#botonPartyMP").hover(function(){
      $("#DescPartyMP").css("display", "block");
    },
    function(){
      $("#DescPartyMP").css("display", "none");
    });

  $("#botonEPMP").hover(function(){
      $("#DescEPMP").css("display", "block");
    },
    function(){
      $("#DescEPMP").css("display", "none");
    });
  /*Fin de descripciones MP*/
});

//Funciones principales de las pantallas.
//Funciones QUIZ
function Quiz()  //Ejecutar Quiz.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaQuizSettings").css("display", "block");

    resetearVariables();
    pantallaActualQuiz=true;
}

function PrePreguntaQuiz()
{
    duracionJuego = parseInt($("#TiempoQuizMin :selected").text())*60 + parseInt($("#TiempoQuizSec :selected").text());
    numEquipos = $("#numEquiposQuiz :selected").text();

    if(duracionJuego == 0)
    {
      duracionJuego = 10;
      alert("La duración mínima se ha establecido a 10 segundos");
    }

    copiaduracionJuego = duracionJuego;

    PreguntaQuiz();
}

function PreguntaQuiz()
{
    //Pequeño reseteo de variables que necesitan ser reseteadas cada turno.
    playTime = false;
    duracionJuego = copiaduracionJuego;
    
    //Visualizamos el juego.
    ocultarTodo();
    $("#PantallaQuiz").css("display", "block");

    //Pantalla prePartida y ajustes.
    $("#pantallaNegroQuiz").css("display", "block");
    $("#textoTurnoEquipoPNegraQuiz").text("Turno: Equipo " + (turnoEquipo + 1));
    $("#textoTimeUp").css("visibility", "hidden");
    $("#tiempoContador").text(duracionJuego);
    $("#textoTurnoEquipo").text("Equipo " + (turnoEquipo + 1));
    $("#barraProgreso").css("width", "100%");
    $("#barraProgreso").css("background-color", "#86e01e");
    $("#botonContinuar").addClass("fondoGris2");
    $("#botonContinuar").removeClass("fondoVerde3 grow cursorPointer"); 
    $("#textoPuntuarRespuesta").text("¡Puntúa la respuesta!");
    $("#botonContinuar").attr('onClick', null);
    $("#imagenPausaPlayQuiz").attr('src',"./media/pause.png"); 
    $("#imagenPausaPlayQuiz").attr('onClick', "togglePlayPause('Quiz');");

    //Visualizamos todos los botones, por si acaso (AÑADIDO NUEVO).
    $("#ImagenDCPQAcierto").parent().css("display","block");
    $("#ImagenDCPQCasi").parent().css("display","block");
    $("#ImagenDCPQFallo").parent().css("display","block");
    $("#BotonFinalizarQuiz").css("display","block");
    //Devolvemos sus eventos onclick (El de acierto y fallo).
    $("#ImagenDCPQAcierto").attr('onClick', 'respuestaQuiz(20)');
    $("#ImagenDCPQFallo").attr('onClick', 'respuestaQuiz(0)');

    //Restablecer las clases de los marcadores de puntos.
    if($("#ImagenDCPQFallo").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQFallo").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQFallo").addClass("grow");
      $("#placeholder1").remove();
      $("#placeholder2").remove();
      $("#ImagenDCPQAcierto").parent().css("display","block");
      $("#ImagenDCPQCasi").parent().css("display","block");
      $("#ImagenDCPQFallo").attr('onClick', 'respuestaQuiz(0);');
    }
    if($("#ImagenDCPQCasi").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQCasi").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQCasi").addClass("grow");
      $("#placeholder1").remove();
      $("#placeholder2").remove();
      $("#ImagenDCPQFallo").parent().css("display","block");
      $("#ImagenDCPQAcierto").parent().css("display","block");
      $("#ImagenDCPQCasi").attr('onClick', 'respuestaQuiz(10);');

    }
    if($("#ImagenDCPQAcierto").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQAcierto").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQAcierto").addClass("grow");
      $("#placeholder1").remove();
      $("#placeholder2").remove();
      $("#ImagenDCPQFallo").parent().css("display","block");
      $("#ImagenDCPQCasi").parent().css("display","block");
      $("#ImagenDCPQAcierto").attr('onClick', 'respuestaQuiz(20);');
    }
      //En caso de que haya placeholders del party, se eliminan, no estan con Ifs, espero que no den rpoblemas.
      $("#placeholder3Quiz").remove();
      $("#placeholder4Quiz").remove();

    if(pantallaActualParty)
    {
      //Ocultamos el casi y cambiamos los eventos de los botones.
        $("#ImagenDCPQFallo").parent().before('<div class="col-1" id="placeholder3Quiz"></div>');//Se borrará despues?
        $("#ImagenDCPQCasi").parent().css("display","none");
        $("#ImagenDCPQAcierto").attr('onClick', 'respuestaQuiz("PartyWin");');
        $("#ImagenDCPQFallo").attr('onClick', 'respuestaQuiz("PartyLose");');
        $("#BotonFinalizarQuiz").css("display","none");
    }
}

function hidePantallaNegroQuiz()
{
  $("#pantallaNegroQuiz").css("display", "none");
  playTime = true;
}

function respuestaQuiz(puntos)
{
  //activar boton continuar
  $("#botonContinuar").removeClass("fondoGris2");
  $("#botonContinuar").addClass("fondoVerde3 grow cursorPointer");
  $("#botonContinuar").attr('onClick', 'ContinuarQuiz();');
  playTime = false; //Parar el tiempo.
  togglePlayPauseOnclick("Quiz");

  $("#textoPuntuarRespuesta").text("Haz click en continuar");
  //Poner estilo de grow al seleccionado de forma permanente y eliminar los de al lado.
  switch(puntos)
  {
      case 0: 
        $("#ImagenDCPQFallo").addClass("aumentarTamanyo1")
        $("#ImagenDCPQFallo").removeClass("grow");
        $("#ImagenDCPQFallo").attr('onClick', null);

        $("#ImagenDCPQFallo").parent().before('<div class="col-2" id="placeholder1"></div>');
        $("#ImagenDCPQCasi").parent().css("display","none");
        $("#ImagenDCPQFallo").parent().after('<div class="col-2" id="placeholder2"></div>');
        $("#ImagenDCPQAcierto").parent().css("display","none");

        puntosProvisionales = 0;
        break;
      case 10:
        $("#ImagenDCPQCasi").addClass("aumentarTamanyo1")
        $("#ImagenDCPQCasi").removeClass("grow");
        $("#ImagenDCPQCasi").attr('onClick', null);

        $("#ImagenDCPQCasi").parent().before('<div class="col-2" id="placeholder1"></div>');
        $("#ImagenDCPQFallo").parent().css("display","none");
        $("#ImagenDCPQCasi").parent().after('<div class="col-2" id="placeholder2"></div>');
        $("#ImagenDCPQAcierto").parent().css("display","none");

        puntosProvisionales = 10;
        break;
      case 20:
        $("#ImagenDCPQAcierto").addClass("aumentarTamanyo1")
        $("#ImagenDCPQAcierto").removeClass("grow");
        $("#ImagenDCPQAcierto").attr('onClick', null);

        $("#ImagenDCPQAcierto").parent().before('<div class="col-2" id="placeholder1"></div>');
        $("#ImagenDCPQCasi").parent().css("display","none");
        $("#ImagenDCPQAcierto").parent().after('<div class="col-2" id="placeholder2"></div>');
        $("#ImagenDCPQFallo").parent().css("display","none");

        puntosProvisionales = 20;
        break;
      case "PartyWin": //Aqui entra cuando el party vale
        //Ponemos aqui la opcion del party, y que cambie el evento de onclickdel continue. (Y a la llamada de esta opción se le pasa otro valor distinto a 0 (null, nan,etc),10 o 20 como parametro.).
          $("#ImagenDCPQAcierto").addClass("aumentarTamanyo1")
          $("#ImagenDCPQAcierto").removeClass("grow");
          $("#ImagenDCPQAcierto").attr('onClick', null);
          $("#ImagenDCPQFallo").parent().css("display","none");
          $("#ImagenDCPQAcierto").parent().before('<div class="col-1" id="placeholder4Quiz"></div>');
          $("#botonContinuar").attr('onClick', 'ContinuarParty("PartyWin");');
          break;
      case "PartyLose": //Aqui entra cuando el party vale
        //Derrota en el party
          $("#ImagenDCPQFallo").addClass("aumentarTamanyo1")
          $("#ImagenDCPQFallo").removeClass("grow");
          $("#ImagenDCPQFallo").attr('onClick', null);
          $("#ImagenDCPQAcierto").parent().css("display","none");
          $("#ImagenDCPQFallo").parent().before('<div class="col-1" id="placeholder4Quiz"></div>');
          $("#botonContinuar").attr('onClick', 'ContinuarParty("PartyLose");');
          break;
      default:
        console.log("Que ha pasadooo");
        break;
  }
}

function ContinuarQuiz()
{
  ocultarTodo();
  $("#PantallaPuntuaciones").css("display", "block");

  //Aparecer equipos existentes. (Ajustar tamaño en función de los equipos existentes). Ya se centra
  for(var i=10; i>(numEquipos); i--)
  {
    $("#verEquipo"+i).css("display","none");
    //Por cada vez que se elimine, incrementar el tamaño de las barras (vh).
  }

  //Animaciones con la suma de los puntos y ajuste de barra.
  for(var i=0; i<10; i++)       //Ponemos todos los valores a su debida puntuación.
     $("#valorPuntuacionE"+(turnoEquipo+1)).text(puntuacionEquipos[turnoEquipo]);

  puntuacionEquipos[turnoEquipo] = puntuacionEquipos[turnoEquipo] + puntosProvisionales;  //Sumamos los puntos al registro de puntuaciones.
  //Vemos cual es el valor mayor.
  for(var i=0; i<10; i++){
    if(MayorPuntuacion<puntuacionEquipos[i])
      MayorPuntuacion = puntuacionEquipos[i];
  }
  //Se anima. Es una queue. 
  setTimeout(function () {
    for(var j=0; j<numEquipos; j++)
      {   
          $("#valorPuntuacionE"+(j+1)).text(puntuacionEquipos[j]);
          $("#barraPuntuacionE"+(j+1)).css("width", Math.round((puntuacionEquipos[j]/MayorPuntuacion)*99,-1)+1+"%");
      }
  }, 600);
  //Recolocación de equipos, proximamente.
}

function RepetirQuiz()
{
  ocultarTodo();
  PreguntaQuiz();
}

function PasarTurno()
{
  turnoEquipo++;
  if(turnoEquipo>=numEquipos)
    turnoEquipo = 0;
  ocultarTodo();
  PreguntaQuiz();
}
//FIN de las funciones QUIZ.

//FUNCIONES DEL TABU
function Tabu()  //Ejecutar Tabu.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaTabuSettings").css("display", "block");

    resetearVariables();
    pantallaActualTabu = true;
}

function PrePreguntaTabu()
{
    duracionJuego = parseInt($("#TiempoQuizMinTabu :selected").text())*60 + parseInt($("#TiempoQuizSecTabu :selected").text());
    numEquipos = $("#numEquiposTabu :selected").text();

    if(duracionJuego == 0)
    {
      duracionJuego = 10;
      alert("La duración mínima se ha establecido a 10 segundos");
    }

    copiaduracionJuego = duracionJuego;

    PreguntaTabu();
}

function PreguntaTabu()
{
    //Pequeño reseteo de variables que necesitan ser reseteadas cada turno.
    playTime = false;
    duracionJuego = copiaduracionJuego;
    
    //Visualizamos el juego.
    ocultarTodo();
    $("#PantallaTabu").css("display", "block");

    //Pantalla prePartida y ajustes.
    //Pantalla prePartida
    $("#pantallaNegroTabu").css("display", "block");
    $("#textoTurnoEquipoPNegraTabu").text("Turno: Equipo " + (turnoEquipo + 1));
    $("#textoTimeUpTabu").css("visibility", "hidden");
    $("#tiempoContadorTabu").text(duracionJuego);
    $("#textoTurnoEquipoTabu").text("Equipo " + (turnoEquipo + 1));
    $("#barraProgresoTabu").css("width", "100%");
    $("#barraProgresoTabu").css("background-color", "#86e01e");
    $("#botonContinuarTabu").addClass("fondoGris2");
    $("#botonContinuarTabu").removeClass("fondoVerde3 grow cursorPointer"); 
    $("#textoPuntuarRespuestaTabu").text("¡Puntúa la respuesta!");
    $("#botonContinuarTabu").attr('onClick', null);
    $("#imagenPausaPlayTabu").attr('src',"./media/pause.png"); 
    $("#imagenPausaPlayTabu").attr('onClick', 'togglePlayPause("Tabu")');

    //Visualizamos todos los botones, por si acaso (AÑADIDO NUEVO).
    $("#ImagenDCPQAciertoTabu").parent().css("display","block");
    $("#ImagenDCPQCasiTabu").parent().css("display","block");
    $("#ImagenDCPQFalloTabu").parent().css("display","block");
    $("#BotonFinalizarTabu").css("display","block");
    //Devolvemos sus eventos onclick (El de acierto y fallo).
    $("#ImagenDCPQAciertoTabu").attr('onClick', 'respuestaTabu(20)');
    $("#ImagenDCPQFalloTabu").attr('onClick', 'respuestaTabu(0)');

    //Restablecer las clases de los marcadores de puntos.
    if($("#ImagenDCPQFalloTabu").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQFalloTabu").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQFalloTabu").addClass("grow");
      $("#placeholder1Tabu").remove();
      $("#placeholder2Tabu").remove();
      $("#ImagenDCPQAciertoTabu").parent().css("display","block");
      $("#ImagenDCPQCasiTabu").parent().css("display","block");
      $("#ImagenDCPQFalloTabu").attr('onClick', 'respuestaTabu(0);');
    }
    if($("#ImagenDCPQCasiTabu").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQCasiTabu").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQCasiTabu").addClass("grow");
      $("#placeholder1Tabu").remove();
      $("#placeholder2Tabu").remove();
      $("#ImagenDCPQFalloTabu").parent().css("display","block");
      $("#ImagenDCPQAciertoTabu").parent().css("display","block");
      $("#ImagenDCPQCasiTabu").attr('onClick', 'respuestaTabu(10);');
    }
    if($("#ImagenDCPQAciertoTabu").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQAciertoTabu").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQAciertoTabu").addClass("grow");
      $("#placeholder1Tabu").remove();
      $("#placeholder2Tabu").remove();
      $("#ImagenDCPQFalloTabu").parent().css("display","block");
      $("#ImagenDCPQCasiTabu").parent().css("display","block");
      $("#ImagenDCPQAciertoTabu").attr('onClick', 'respuestaTabu(20);');
    }
      //En caso de que haya placeholders del party, se eliminan, no estan con Ifs, espero que no den rpoblemas.
      $("#placeholder3Tabu").remove();
      $("#placeholder4Tabu").remove();
    if(pantallaActualParty)
    {
      //Ocultamos el casi y cambiamos los eventos de los botones.
        $("#ImagenDCPQFalloTabu").parent().before('<div class="col-1" id="placeholder3Tabu"></div>');//Se borrará despues?
        $("#ImagenDCPQCasiTabu").parent().css("display","none");
        $("#ImagenDCPQAciertoTabu").attr('onClick', 'respuestaTabu("PartyWin");');
        $("#ImagenDCPQFalloTabu").attr('onClick', 'respuestaTabu("PartyLose");');
        $("#BotonFinalizarTabu").css("display","none");
    }
}

function hidePantallaNegroTabu()
{
  $("#pantallaNegroTabu").css("display", "none");
  playTime = true;
}

function respuestaTabu(puntos)
{
  //activar boton continuar
  $("#botonContinuarTabu").removeClass("fondoGris2");
  $("#botonContinuarTabu").addClass("fondoVerde3 grow cursorPointer");
  $("#botonContinuarTabu").attr('onClick', 'ContinuarTabu();');
  playTime = false; //Parar el tiempo.
  togglePlayPauseOnclick("Tabu");

  $("#textoPuntuarRespuestaTabu").text("Haz click en continuar");
  //Poner estilo de grow al seleccionado de forma permanente y eliminar los de al lado.
  switch(puntos)
  {
      case 0: 
        $("#ImagenDCPQFalloTabu").addClass("aumentarTamanyo1")
        $("#ImagenDCPQFalloTabu").removeClass("grow");
        $("#ImagenDCPQFalloTabu").attr('onClick', null);

        $("#ImagenDCPQFalloTabu").parent().before('<div class="col-2" id="placeholder1Tabu"></div>');
        $("#ImagenDCPQCasiTabu").parent().css("display","none");
        $("#ImagenDCPQFalloTabu").parent().after('<div class="col-2" id="placeholder2Tabu"></div>');
        $("#ImagenDCPQAciertoTabu").parent().css("display","none");

        puntosProvisionales = 0;
        break;
      case 10:
        $("#ImagenDCPQCasiTabu").addClass("aumentarTamanyo1")
        $("#ImagenDCPQCasiTabu").removeClass("grow");
        $("#ImagenDCPQCasiTabu").attr('onClick', null);

        $("#ImagenDCPQCasiTabu").parent().before('<div class="col-2" id="placeholder1Tabu"></div>');
        $("#ImagenDCPQFalloTabu").parent().css("display","none");
        $("#ImagenDCPQCasiTabu").parent().after('<div class="col-2" id="placeholder2Tabu"></div>');
        $("#ImagenDCPQAciertoTabu").parent().css("display","none");

        puntosProvisionales = 10;
        break;
      case 20:
        $("#ImagenDCPQAciertoTabu").addClass("aumentarTamanyo1")
        $("#ImagenDCPQAciertoTabu").removeClass("grow");
        $("#ImagenDCPQAciertoTabu").attr('onClick', null);

        $("#ImagenDCPQAciertoTabu").parent().before('<div class="col-2" id="placeholder1Tabu"></div>');
        $("#ImagenDCPQCasiTabu").parent().css("display","none");
        $("#ImagenDCPQAciertoTabu").parent().after('<div class="col-2" id="placeholder2Tabu"></div>');
        $("#ImagenDCPQFalloTabu").parent().css("display","none");

        puntosProvisionales = 20;
        break;
      case "PartyWin": //Aqui entra cuando el party vale
        //Ponemos aqui la opcion del party, y que cambie el evento de onclickdel continue. (Y a la llamada de esta opción se le pasa otro valor distinto a 0 (null, nan,etc),10 o 20 como parametro.).
          $("#ImagenDCPQAciertoTabu").addClass("aumentarTamanyo1")
          $("#ImagenDCPQAciertoTabu").removeClass("grow");
          $("#ImagenDCPQAciertoTabu").attr('onClick', null);
          $("#ImagenDCPQFalloTabu").parent().css("display","none");
          $("#ImagenDCPQAciertoTabu").parent().before('<div class="col-1" id="placeholder4Tabu"></div>');
          $("#botonContinuarTabu").attr('onClick', 'ContinuarParty("PartyWin");');
          break;
      case "PartyLose": //Aqui entra cuando el party vale
        //Derrota en el party
          $("#ImagenDCPQFalloTabu").addClass("aumentarTamanyo1")
          $("#ImagenDCPQFalloTabu").removeClass("grow");
          $("#ImagenDCPQFalloTabu").attr('onClick', null);
          $("#ImagenDCPQAciertoTabu").parent().css("display","none");
          $("#ImagenDCPQFalloTabu").parent().before('<div class="col-1" id="placeholder4Tabu"></div>');
          $("#botonContinuarTabu").attr('onClick', 'ContinuarParty("PartyLose");');
          break;
      default:
        console.log("Que ha pasadooo");
        break;
  }
  //Sumar los puntos sin sumarlos (?)
}

function ContinuarTabu()
{
  ocultarTodo();
  $("#PantallaPuntuacionesTabu").css("display", "block");

  //Aparecer equipos existentes. (Ajustar tamaño en función de los equipos existentes). Ya se centra
  for(var i=10; i>(numEquipos); i--)
  {
    $("#verEquipoTabu"+i).css("display","none");
    //Por cada vez que se elimine, incrementar el tamaño de las barras (vh).
  }

  //Animaciones con la suma de los puntos y ajuste de barra.
  for(var i=0; i<10; i++)       //Ponemos todos los valores a su debida puntuación.
     $("#valorPuntuacionETabu"+(turnoEquipo+1)).text(puntuacionEquipos[turnoEquipo]);

  puntuacionEquipos[turnoEquipo] = puntuacionEquipos[turnoEquipo] + puntosProvisionales;  //Sumamos los puntos al registro de puntuaciones.
  //Vemos cual es el valor mayor.
  for(var i=0; i<10; i++){
    if(MayorPuntuacion<puntuacionEquipos[i])
      MayorPuntuacion = puntuacionEquipos[i];
  }
  //Se anima. Es una queue. 
  setTimeout(function () {
    for(var j=0; j<numEquipos; j++)
      {   
          $("#valorPuntuacionETabu"+(j+1)).text(puntuacionEquipos[j]);
          $("#barraPuntuacionETabu"+(j+1)).css("width", Math.round((puntuacionEquipos[j]/MayorPuntuacion)*99,-1)+1+"%");
      }
  }, 600);

  //Recolocación de equipos, proximamente.
}

function RepetirTabu()
{
  ocultarTodo();
  PreguntaTabu();
}

function PasarTurnoTabu()
{
  turnoEquipo++;
  if(turnoEquipo>=numEquipos)
    turnoEquipo = 0;
  ocultarTodo();
  PreguntaTabu();
}

//FIN DE LAS FUNCIONES DEL TABÚ
//FUNCIONES DE LA MÍMICA
function Mimica()  //Ejecutar Quiz.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaMimicaSettings").css("display", "block");
    resetearVariables();
    pantallaActualMimica=true;
}

function PrePreguntaMimica()
{
    duracionJuego = parseInt($("#TiempoQuizMinMimica :selected").text())*60 + parseInt($("#TiempoQuizSecMimica :selected").text());
    numEquipos = $("#numEquiposMimica :selected").text();

    if(duracionJuego == 0)
    {
      duracionJuego = 10;
      alert("La duración mínima se ha establecido a 10 segundos");
    }

    copiaduracionJuego = duracionJuego;

    PreguntaMimica();
}

function PreguntaMimica()
{
    //Pequeño reseteo de variables que necesitan ser reseteadas cada turno.
    playTime = false;
    duracionJuego = copiaduracionJuego;
    
    //Visualizamos el juego.
    ocultarTodo();
    $("#PantallaMimica").css("display", "block");

    //Pantalla prePartida y ajustes.
    $("#pantallaNegroMimica").css("display", "block");
    $("#textoTurnoEquipoPNegraMimica").text("Turno: Equipo " + (turnoEquipo + 1));
    $("#textoTimeUpMimica").css("visibility", "hidden");
    $("#tiempoContadorMimica").text(duracionJuego);
    $("#textoTurnoEquipoMimica").text("Equipo " + (turnoEquipo + 1));
    $("#barraProgresoMimica").css("width", "100%");
    $("#barraProgresoMimica").css("background-color", "#86e01e");
    $("#botonContinuarMimica").addClass("fondoGris2");
    $("#botonContinuarMimica").removeClass("fondoVerde3 grow cursorPointer"); 
    $("#textoPuntuarRespuestaMimica").text("¡Puntúa la respuesta!");
    $("#botonContinuarMimica").attr('onClick', null);
    $("#imagenPausaPlayMimica").attr('src',"./media/pause.png"); 
    $("#imagenPausaPlayMimica").attr('onClick', 'togglePlayPause("Mimica")');

    //Visualizamos todos los botones, por si acaso (AÑADIDO NUEVO).
    $("#ImagenDCPQAciertoMimica").parent().css("display","block");
    $("#ImagenDCPQCasiMimica").parent().css("display","block");
    $("#ImagenDCPQFalloMimica").parent().css("display","block");
    $("#BotonFinalizarMimica").css("display","block");
    //Devolvemos sus eventos onclick (El de acierto y fallo).
    $("#ImagenDCPQAciertoMimica").attr('onClick', 'respuestaMimica(20)');
    $("#ImagenDCPQFalloMimica").attr('onClick', 'respuestaMimica(0)');

    //Restablecer las clases de los marcadores de puntos.
    if($("#ImagenDCPQFalloMimica").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQFalloMimica").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQFalloMimica").addClass("grow");
      $("#placeholder1Mimica").remove();
      $("#placeholder2Mimica").remove();
      $("#ImagenDCPQAciertoMimica").parent().css("display","block");
      $("#ImagenDCPQCasiMimica").parent().css("display","block");
      $("#ImagenDCPQFalloMimica").attr('onClick', 'respuestaMimica(0);');
    }
    if($("#ImagenDCPQCasiMimica").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQCasiMimica").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQCasiMimica").addClass("grow");
      $("#placeholder1Mimica").remove();
      $("#placeholder2Mimica").remove();
      $("#ImagenDCPQFalloMimica").parent().css("display","block");
      $("#ImagenDCPQAciertoMimica").parent().css("display","block");
      $("#ImagenDCPQCasiMimica").attr('onClick', 'respuestaMimica(10);');

    }
    if($("#ImagenDCPQAciertoMimica").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQAciertoMimica").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQAciertoMimica").addClass("grow");
      $("#placeholder1Mimica").remove();  //Quitará todos?
      $("#placeholder2Mimica").remove();
      $("#ImagenDCPQFalloMimica").parent().css("display","block");
      $("#ImagenDCPQCasiMimica").parent().css("display","block");
      $("#ImagenDCPQAciertoMimica").attr('onClick', 'respuestaMimica(20);');
    }
      
    //En caso de que haya placeholders del party, se eliminan, no estan con Ifs, espero que no den rpoblemas.
      $("#placeholder3Mimica").remove();
      $("#placeholder4Mimica").remove();
    //Añadir if si viene del party. Ocultar el casi y cambiar el boton de continue. 
    //Cambiar evento de botones de acierto, respuestaMimica();
    if(pantallaActualParty)
    {
      //Ocultamos el casi y cambiamos los eventos de los botones.
        $("#ImagenDCPQFalloMimica").parent().before('<div class="col-1" id="placeholder3Mimica"></div>');//Se borrará despues?
        $("#ImagenDCPQCasiMimica").parent().css("display","none");
        $("#ImagenDCPQAciertoMimica").attr('onClick', 'respuestaMimica("PartyWin");');
        $("#ImagenDCPQFalloMimica").attr('onClick', 'respuestaMimica("PartyLose");');
        $("#BotonFinalizarMimica").css("display","none");
    }
}

function hidePantallaNegroMimica()
{
  $("#pantallaNegroMimica").css("display", "none");
  playTime = true;
}

function respuestaMimica(puntos)
{
  //activar boton continuar
  $("#botonContinuarMimica").removeClass("fondoGris2");
  $("#botonContinuarMimica").addClass("fondoVerde3 grow cursorPointer");
  $("#botonContinuarMimica").attr('onClick', 'ContinuarMimica();');
  playTime = false; //Parar el tiempo.
  togglePlayPauseOnclick("Mimica");

  $("#textoPuntuarRespuestaMimica").text("Haz click en continuar");
  //Poner estilo de grow al seleccionado de forma permanente y eliminar los de al lado.
  switch(puntos)
  {
      case 0: 
        $("#ImagenDCPQFalloMimica").addClass("aumentarTamanyo1")
        $("#ImagenDCPQFalloMimica").removeClass("grow");
        $("#ImagenDCPQFalloMimica").attr('onClick', null);

        $("#ImagenDCPQFalloMimica").parent().before('<div class="col-2" id="placeholder1Mimica"></div>');
        $("#ImagenDCPQCasiMimica").parent().css("display","none");
        $("#ImagenDCPQFalloMimica").parent().after('<div class="col-2" id="placeholder2Mimica"></div>');
        $("#ImagenDCPQAciertoMimica").parent().css("display","none");

        puntosProvisionales = 0;
        break;
      case 10:
        $("#ImagenDCPQCasiMimica").addClass("aumentarTamanyo1")
        $("#ImagenDCPQCasiMimica").removeClass("grow");
        $("#ImagenDCPQCasiMimica").attr('onClick', null);

        $("#ImagenDCPQCasiMimica").parent().before('<div class="col-2" id="placeholder1Mimica"></div>');
        $("#ImagenDCPQFalloMimica").parent().css("display","none");
        $("#ImagenDCPQCasiMimica").parent().after('<div class="col-2" id="placeholder2Mimica"></div>');
        $("#ImagenDCPQAciertoMimica").parent().css("display","none");

        puntosProvisionales = 10;
        break;
      case 20:
        $("#ImagenDCPQAciertoMimica").addClass("aumentarTamanyo1")
        $("#ImagenDCPQAciertoMimica").removeClass("grow");
        $("#ImagenDCPQAciertoMimica").attr('onClick', null);

        $("#ImagenDCPQAciertoMimica").parent().before('<div class="col-2" id="placeholder1Mimica"></div>');
        $("#ImagenDCPQCasiMimica").parent().css("display","none");
        $("#ImagenDCPQAciertoMimica").parent().after('<div class="col-2" id="placeholder2Mimica"></div>');
        $("#ImagenDCPQFalloMimica").parent().css("display","none");

        puntosProvisionales = 20;
        break;
      case "PartyWin": //Aqui entra cuando el party vale
        //Ponemos aqui la opcion del party, y que cambie el evento de onclickdel continue. (Y a la llamada de esta opción se le pasa otro valor distinto a 0 (null, nan,etc),10 o 20 como parametro.).
          $("#ImagenDCPQAciertoMimica").addClass("aumentarTamanyo1")
          $("#ImagenDCPQAciertoMimica").removeClass("grow");
          $("#ImagenDCPQAciertoMimica").attr('onClick', null);
          $("#ImagenDCPQFalloMimica").parent().css("display","none");
          $("#ImagenDCPQAciertoMimica").parent().before('<div class="col-1" id="placeholder4Mimica"></div>');
          $("#botonContinuarMimica").attr('onClick', 'ContinuarParty("PartyWin");');
          break;
      case "PartyLose": //Aqui entra cuando el party vale
        //Derrota en el party
          $("#ImagenDCPQFalloMimica").addClass("aumentarTamanyo1")
          $("#ImagenDCPQFalloMimica").removeClass("grow");
          $("#ImagenDCPQFalloMimica").attr('onClick', null);
          $("#ImagenDCPQAciertoMimica").parent().css("display","none");
          $("#ImagenDCPQFalloMimica").parent().before('<div class="col-1" id="placeholder4Mimica"></div>');
          $("#botonContinuarMimica").attr('onClick', 'ContinuarParty("PartyLose");');
        break;
      default:  
        console.log("Que ha pasadooo");
        break;
  }
  //Sumar los puntos sin sumarlos (?)
}

function ContinuarMimica()
{
  ocultarTodo();
  $("#PantallaPuntuacionesMimica").css("display", "block");

  //Aparecer equipos existentes. (Ajustar tamaño en función de los equipos existentes). Ya se centra
  for(var i=10; i>(numEquipos); i--)
  {
    $("#verEquipoMimica"+i).css("display","none");
    //Por cada vez que se elimine, incrementar el tamaño de las barras (vh).
  }

  //Animaciones con la suma de los puntos y ajuste de barra.
  for(var i=0; i<10; i++)       //Ponemos todos los valores a su debida puntuación.
     $("#valorPuntuacionEMimica"+(turnoEquipo+1)).text(puntuacionEquipos[turnoEquipo]);

  puntuacionEquipos[turnoEquipo] = puntuacionEquipos[turnoEquipo] + puntosProvisionales;  //Sumamos los puntos al registro de puntuaciones.
  //Vemos cual es el valor mayor.
  for(var i=0; i<10; i++){
    if(MayorPuntuacion<puntuacionEquipos[i])
      MayorPuntuacion = puntuacionEquipos[i];
  }
  //Se anima. Es una queue. 
  setTimeout(function () {
    for(var j=0; j<numEquipos; j++)
      {   
          $("#valorPuntuacionEMimica"+(j+1)).text(puntuacionEquipos[j]);
          $("#barraPuntuacionEMimica"+(j+1)).css("width", Math.round((puntuacionEquipos[j]/MayorPuntuacion)*99,-1)+1+"%");
      }
  }, 600);

  //Recolocación de equipos, proximamente.
}

function RepetirMimica()
{
  ocultarTodo();
  PreguntaMimica();
}

function PasarTurnoMimica()
{
  turnoEquipo++;
  if(turnoEquipo>=numEquipos)
    turnoEquipo = 0;
  ocultarTodo();
  PreguntaMimica();
}
//FIN DE LAS FUNCIONES DE LA MÍMICA

//Funciones DIBUJO

function Dibujo()  //Ejecutar Quiz.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaDibujoSettings").css("display", "block");
    resetearVariables();
    pantallaActualDibujo=true;
}

function PrePreguntaDibujo()
{
    duracionJuego = parseInt($("#TiempoQuizMinDibujo :selected").text())*60 + parseInt($("#TiempoQuizSecDibujo :selected").text());
    numEquipos = $("#numEquiposDibujo :selected").text();

    if(duracionJuego == 0)
    {
      duracionJuego = 10;
      alert("La duración mínima se ha establecido a 10 segundos");
    }

    copiaduracionJuego = duracionJuego;

    PreguntaDibujo();
}

function PreguntaDibujo()
{
    //Pequeño reseteo de variables que necesitan ser reseteadas cada turno.
    playTime = false;
    duracionJuego = copiaduracionJuego;
    
    //Visualizamos el juego.
    ocultarTodo();
    $("#PantallaDibujo").css("display", "block");

    //Pantalla prePartida y ajustes.
    $("#pantallaNegroDibujo").css("display", "block");
    $("#textoTurnoEquipoPNegraDibujo").text("Turno: Equipo " + (turnoEquipo + 1));
    $("#textoTimeUpDibujo").css("visibility", "hidden");
    $("#tiempoContadorDibujo").text(duracionJuego);
    $("#textoTurnoEquipoDibujo").text("Equipo " + (turnoEquipo + 1));
    $("#barraProgresoDibujo").css("width", "100%");
    $("#barraProgresoDibujo").css("background-color", "#86e01e");
    $("#botonContinuarDibujo").addClass("fondoGris2");
    $("#botonContinuarDibujo").removeClass("fondoVerde3 grow cursorPointer"); 
    $("#textoPuntuarRespuestaDibujo").text("¡Puntúa la respuesta!");
    $("#botonContinuarDibujo").attr('onClick', null);
    $("#imagenPausaPlayDibujo").attr('src',"./media/pause.png"); 
    $("#imagenPausaPlayDibujo").attr('onClick', 'togglePlayPause("Dibujo")');

    //Visualizamos todos los botones, por si acaso (AÑADIDO NUEVO).
    $("#ImagenDCPQAciertoDibujo").parent().css("display","block");
    $("#ImagenDCPQCasiDibujo").parent().css("display","block");
    $("#ImagenDCPQFalloDibujo").parent().css("display","block");
    $("#BotonFinalizarDibujo").css("display","block");

    //Devolvemos sus eventos onclick (El de acierto y fallo).
    $("#ImagenDCPQAciertoDibujo").attr('onClick', 'respuestaDibujo(20)');
    $("#ImagenDCPQFalloDibujo").attr('onClick', 'respuestaDibujo(0)');

    //Restablecer las clases de los marcadores de puntos.
    if($("#ImagenDCPQFalloDibujo").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQFalloDibujo").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQFalloDibujo").addClass("grow");
      $("#placeholder1Dibujo").remove();
      $("#placeholder2Dibujo").remove();
      $("#ImagenDCPQAciertoDibujo").parent().css("display","block");
      $("#ImagenDCPQCasiDibujo").parent().css("display","block");
      $("#ImagenDCPQFalloDibujo").attr('onClick', 'respuestaDibujo(0);');
    }
    if($("#ImagenDCPQCasiDibujo").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQCasiDibujo").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQCasiDibujo").addClass("grow");
      $("#placeholder1Dibujo").remove();
      $("#placeholder2Dibujo").remove();
      $("#ImagenDCPQFalloDibujo").parent().css("display","block");
      $("#ImagenDCPQAciertoDibujo").parent().css("display","block");
      $("#ImagenDCPQCasiDibujo").attr('onClick', 'respuestaDibujo(10);');

    }
    if($("#ImagenDCPQAciertoDibujo").hasClass("aumentarTamanyo1"))
    {
      $("#ImagenDCPQAciertoDibujo").removeClass("aumentarTamanyo1")
      $("#ImagenDCPQAciertoDibujo").addClass("grow");
      $("#placeholder1Dibujo").remove();
      $("#placeholder2Dibujo").remove();
      $("#ImagenDCPQFalloDibujo").parent().css("display","block");
      $("#ImagenDCPQCasiDibujo").parent().css("display","block");
      $("#ImagenDCPQAciertoDibujo").attr('onClick', 'respuestaDibujo(20);');
    }
    //En caso de que haya placeholders del party, se eliminan, no estan con Ifs, espero que no den rpoblemas.
      $("#placeholder3Dibujo").remove();
      $("#placeholder4Dibujo").remove();

    if(pantallaActualParty)
    {
      //Ocultamos el casi y cambiamos los eventos de los botones.
        $("#ImagenDCPQFalloDibujo").parent().before('<div class="col-1" id="placeholder3Dibujo"></div>');//Se borrará despues?
        $("#ImagenDCPQCasiDibujo").parent().css("display","none");
        $("#ImagenDCPQAciertoDibujo").attr('onClick', 'respuestaDibujo("PartyWin");');
        $("#ImagenDCPQFalloDibujo").attr('onClick', 'respuestaDibujo("PartyLose");');
        $("#BotonFinalizarDibujo").css("display","none");
    }
}

function hidePantallaNegroDibujo()
{
  $("#pantallaNegroDibujo").css("display", "none");
  playTime = true;
}

function respuestaDibujo(puntos)
{
  //activar boton continuar
  $("#botonContinuarDibujo").removeClass("fondoGris2");
  $("#botonContinuarDibujo").addClass("fondoVerde3 grow cursorPointer");
  $("#botonContinuarDibujo").attr('onClick', 'ContinuarDibujo();');
  playTime = false; //Parar el tiempo.
  togglePlayPauseOnclick("Dibujo");

  $("#textoPuntuarRespuestaDibujo").text("Haz click en continuar");
  //Poner estilo de grow al seleccionado de forma permanente y eliminar los de al lado.
  switch(puntos)
  {
      case 0: 
        $("#ImagenDCPQFalloDibujo").addClass("aumentarTamanyo1")
        $("#ImagenDCPQFalloDibujo").removeClass("grow");
        $("#ImagenDCPQFalloDibujo").attr('onClick', null);

        $("#ImagenDCPQFalloDibujo").parent().before('<div class="col-2" id="placeholder1Dibujo"></div>');
        $("#ImagenDCPQCasiDibujo").parent().css("display","none");
        $("#ImagenDCPQFalloDibujo").parent().after('<div class="col-2" id="placeholder2Dibujo"></div>');
        $("#ImagenDCPQAciertoDibujo").parent().css("display","none");

        puntosProvisionales = 0;
        break;
      case 10:
        $("#ImagenDCPQCasiDibujo").addClass("aumentarTamanyo1")
        $("#ImagenDCPQCasiDibujo").removeClass("grow");
        $("#ImagenDCPQCasiDibujo").attr('onClick', null);

        $("#ImagenDCPQCasiDibujo").parent().before('<div class="col-2" id="placeholder1Dibujo"></div>');
        $("#ImagenDCPQFalloDibujo").parent().css("display","none");
        $("#ImagenDCPQCasiDibujo").parent().after('<div class="col-2" id="placeholder2Dibujo"></div>');
        $("#ImagenDCPQAciertoDibujo").parent().css("display","none");

        puntosProvisionales = 10;
        break;
      case 20:
        $("#ImagenDCPQAciertoDibujo").addClass("aumentarTamanyo1")
        $("#ImagenDCPQAciertoDibujo").removeClass("grow");
        $("#ImagenDCPQAciertoDibujo").attr('onClick', null);

        $("#ImagenDCPQAciertoDibujo").parent().before('<div class="col-2" id="placeholder1Dibujo"></div>');
        $("#ImagenDCPQCasiDibujo").parent().css("display","none");
        $("#ImagenDCPQAciertoDibujo").parent().after('<div class="col-2" id="placeholder2Dibujo"></div>');
        $("#ImagenDCPQFalloDibujo").parent().css("display","none");

        puntosProvisionales = 20;
        break;
      case "PartyWin": //Aqui entra cuando el party vale
        //Ponemos aqui la opcion del party, y que cambie el evento de onclickdel continue. (Y a la llamada de esta opción se le pasa otro valor distinto a 0 (null, nan,etc),10 o 20 como parametro.).
          $("#ImagenDCPQAciertoDibujo").addClass("aumentarTamanyo1")
          $("#ImagenDCPQAciertoDibujo").removeClass("grow");
          $("#ImagenDCPQAciertoDibujo").attr('onClick', null);
          $("#ImagenDCPQFalloDibujo").parent().css("display","none");
          $("#ImagenDCPQAciertoDibujo").parent().before('<div class="col-1" id="placeholder4Dibujo"></div>');
          $("#botonContinuarDibujo").attr('onClick', 'ContinuarParty("PartyWin");');
          break;
      case "PartyLose": //Aqui entra cuando el party vale
        //Derrota en el party
          $("#ImagenDCPQFalloDibujo").addClass("aumentarTamanyo1")
          $("#ImagenDCPQFalloDibujo").removeClass("grow");
          $("#ImagenDCPQFalloDibujo").attr('onClick', null);
          $("#ImagenDCPQAciertoDibujo").parent().css("display","none");
          $("#ImagenDCPQFalloDibujo").parent().before('<div class="col-1" id="placeholder4Dibujo"></div>');
          $("#botonContinuarDibujo").attr('onClick', 'ContinuarParty("PartyLose");');
          break;
      default:
        console.log("Que ha pasadooo");
        break;
  }
}

function ContinuarDibujo()
{
  ocultarTodo();
  $("#PantallaPuntuacionesDibujo").css("display", "block");

  //Aparecer equipos existentes. (Ajustar tamaño en función de los equipos existentes). Ya se centra
  for(var i=10; i>(numEquipos); i--)
  {
    $("#verEquipoDibujo"+i).css("display","none");
    //Por cada vez que se elimine, incrementar el tamaño de las barras (vh).
  }

  //Animaciones con la suma de los puntos y ajuste de barra.
  for(var i=0; i<10; i++)       //Ponemos todos los valores a su debida puntuación.
     $("#valorPuntuacionEDibujo"+(turnoEquipo+1)).text(puntuacionEquipos[turnoEquipo]);

  puntuacionEquipos[turnoEquipo] = puntuacionEquipos[turnoEquipo] + puntosProvisionales;  //Sumamos los puntos al registro de puntuaciones.
  //Vemos cual es el valor mayor.
  for(var i=0; i<10; i++){
    if(MayorPuntuacion<puntuacionEquipos[i])
      MayorPuntuacion = puntuacionEquipos[i];
  }
  //Se anima. Es una queue. 
  setTimeout(function () {
    for(var j=0; j<numEquipos; j++)
      {   
          $("#valorPuntuacionEDibujo"+(j+1)).text(puntuacionEquipos[j]);
          $("#barraPuntuacionEDibujo"+(j+1)).css("width", Math.round((puntuacionEquipos[j]/MayorPuntuacion)*99,-1)+1+"%");
      }
  }, 600);

  //Recolocación de equipos, proximamente.
}

function RepetirDibujo()
{
  ocultarTodo();
  PreguntaDibujo();
}

function PasarTurnoDibujo()
{
  turnoEquipo++;
  if(turnoEquipo>=numEquipos)
    turnoEquipo = 0;
  ocultarTodo();
  PreguntaDibujo();
}
//FIN de las funciones DIBUJO.

//FUNCIONES DEL PARTY

function Party()  //Ejecutar Quiz.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaPartySettings").css("display", "block");

    resetearVariables();
    pantallaActualParty = true;
}

function toggleBackgroundStatus(idprovisional)
{
    if($(idprovisional).hasClass("fondoGris1"))
    {      
      $(idprovisional).removeClass("fondoGris1");
      //Restablecer el disabled.
      $(idprovisional + " select").attr('disabled', false);
    }
    else
    {
      $(idprovisional).addClass("fondoGris1");
      $(idprovisional + " select").attr('disabled', true);
    }
}

function PrePartyGame()
{  
  var prioridadTotal = 0;
  var prioridadQuiz = 0, prioridadTabu = 0, prioridadMimica = 0, prioridadDibujo = 0;
  var casillasdeQuiz = 0, casillasdeTabu = 0, casillasdeMimica = 0, casillasdeDibujo = 0, casillasTotales = 0;
  var errorTiempo = false;

  posicionEquiposParty = [0,0,0,0,0,0];
  //Poner las fichas de vuelta a su sitio.
  $("#FichaEquipo1").css("top", "74%");
  $("#FichaEquipo1").css("left", "7.5%");
  $("#FichaEquipo5").css("top", "74%");
  $("#FichaEquipo5").css("left", "15%");
  $("#FichaEquipo2").css("top", "74%");
  $("#FichaEquipo2").css("left", "22.5%");
  $("#FichaEquipo3").css("top", "88%");
  $("#FichaEquipo3").css("left", "7.5%");
  $("#FichaEquipo6").css("top", "88%");
  $("#FichaEquipo6").css("left", "15%");
  $("#FichaEquipo4").css("top", "88%");
  $("#FichaEquipo4").css("left", "22.5%");

  //Limpiar los colores del tablero
  for(var i=1; i<=18; i++)
  {
      if($("#Casilla"+i).hasClass("fondoPartyCasillaQuiz"))
          $("#Casilla"+i).removeClass("fondoPartyCasillaQuiz");

      else if($("#Casilla"+i).hasClass("fondoPartyCasillaTabu"))
          $("#Casilla"+i).removeClass("fondoPartyCasillaTabu");

      else if($("#Casilla"+i).hasClass("fondoPartyCasillaMimica"))
          $("#Casilla"+i).removeClass("fondoPartyCasillaMimica");

      else if($("#Casilla"+i).hasClass("fondoPartyCasillaDibujo"))
          $("#Casilla"+i).removeClass("fondoPartyCasillaDibujo");
  }

  //Establecer Los equipos y las variables! Visualizar y esconder.
  numEquipos = $("#numEquiposParty :selected").text();

  duracionJuegosParty =   [   parseInt($("#TiempoPartyQuizMin :selected").text())*60 + parseInt($("#TiempoPartyQuizSec :selected").text()),
                              parseInt($("#TiempoPartyTabuMin :selected").text())*60 + parseInt($("#TiempoPartyTabuSec :selected").text()),
                              parseInt($("#TiempoPartyMimicaMin :selected").text())*60 + parseInt($("#TiempoPartyMimicaSec :selected").text()),
                              parseInt($("#TiempoPartyDibujoMin :selected").text())*60 + parseInt($("#TiempoPartyDibujoSec :selected").text()),
                          ];

  for(var i=1; i<=6; i++)
  {
      if(i<=numEquipos)
      {
          $("#LeyendaFicha"+i).css("display","flex");
          $("#FichaEquipo"+i).css("display","block");
      }
      else
      {
          $("#LeyendaFicha"+i).css("display","none");
          $("#FichaEquipo"+i).css("display","none");
      }
  }
     
  //Control de errores de tiempo
  for(var i=0; i<duracionJuegosParty.length; i++)
  {
      if(duracionJuegosParty[i] == 0 && !errorTiempo)
      {
        errorTiempo = true;
        duracionJuegosParty[i] = 10;
        alert("La duración mínima se ha establecido a 10 segundos");
      }
  }
  //Establecer color del tablero (Casillas).
  //1º) Ver la prioridad marcada. y guardarla en variables.
  if($("#PartyQuizSelect select").attr('disabled') != 'disabled')
  {
      switch($("#prioridadPartyQuiz :selected").text())
      {
          case "Alta": 
              prioridadQuiz = 4;
              break;
          case "Normal": 
              prioridadQuiz = 2;
              break;
          case "Baja": 
              prioridadQuiz = 1;
              break;
          default:
              console.log("Hola xD");
      }
  }
  if($("#PartyTabuSelect select").attr('disabled') != 'disabled')
  {
      switch($("#prioridadPartyTabu :selected").text())
      {
          case "Alta": 
              prioridadTabu = 4;
              break;
          case "Normal": 
              prioridadTabu = 2;
              break;
          case "Baja": 
              prioridadTabu = 1;
              break;
          default:
              console.log("Hola xD");
      }
  }
  if($("#PartyMimicaSelect select").attr('disabled') != 'disabled')
  {
      switch($("#prioridadPartyMimica :selected").text())
      {
          case "Alta": 
              prioridadMimica = 4;
              break;
          case "Normal": 
              prioridadMimica = 2;
              break;
          case "Baja": 
              prioridadMimica = 1;
              break;
          default:
              console.log("Hola xD");
      }
  }
  if($("#PartyDibujoSelect select").attr('disabled') != 'disabled')
  {
      switch($("#prioridadPartyDibujo :selected").text())
      {
          case "Alta": 
              prioridadDibujo = 4;
              break;
          case "Normal": 
              prioridadDibujo = 2;
              break;
          case "Baja": 
              prioridadDibujo = 1;
              break;
          default:
              console.log("Hola xD");
      }
  }
  //2º) Calcular la prioridad total.
  prioridadTotal = prioridadDibujo + prioridadMimica + prioridadTabu + prioridadQuiz;

  //3º) Calcular en relacion a prioridad/prioridadtotal la cantidad de casillas que le corresponden. (Sin decimales, no vamos a rayarnos xD)
  casillasdeQuiz = (Math.trunc(prioridadQuiz/prioridadTotal*12));
  casillasdeTabu = (Math.trunc(prioridadTabu/prioridadTotal*12));
  casillasdeMimica = (Math.trunc(prioridadMimica/prioridadTotal*12));
  casillasdeDibujo = (Math.trunc(prioridadDibujo/prioridadTotal*12));
  casillasTotales = 12;

  //4º) Ajustamos para que haya un total de 18 casillas, si se cambia el tablero HABRIA QUE MODIFICAR ESTOS VALORES (y creo que tambien en otros sitios, debería haber cogido una variable global, pero meh).
  while((casillasdeQuiz + casillasdeTabu + casillasdeMimica + casillasdeDibujo)<12)
  {   //incrementar hasta ser 18.
      var Alea2 = random(prioridadTotal)+1;

      if(Alea2>0 && Alea2<=prioridadQuiz)
      {
          $("#Casilla"+j).addClass("fondoPartyCasillaQuiz");
          casillasdeQuiz++;
      }
      else if(Alea2>prioridadQuiz && Alea2<=(prioridadTabu+prioridadQuiz))
      {
          $("#Casilla"+j).addClass("fondoPartyCasillaTabu");
          casillasdeTabu++;
      }
      else if(Alea2>(prioridadTabu+prioridadQuiz) && Alea2<=(prioridadTabu+prioridadQuiz+prioridadMimica))
      {
          $("#Casilla"+j).addClass("fondoPartyCasillaMimica");
          casillasdeMimica++;
      }
      else if(Alea2>(prioridadTabu+prioridadQuiz+prioridadMimica) && Alea2<=(prioridadTabu+prioridadQuiz+prioridadMimica+prioridadDibujo))
      {
          $("#Casilla"+j).addClass("fondoPartyCasillaDibujo");
          casillasdeDibujo++;
      }
      else
          console.log("Que ha pasado x222222");
  }  
  //5º) Ponemos de forma aleatoria las casillas guardadas, escogemos de forma aleatoria cada casilla y vamos reduciendo la posibilidad de que toque de esa casilla determinada.
  //De esta forma tendremos todas las casillas rellenas con los colores.
  for(var j=1; j<=14; j++)
  {
    //Numero al azar entre 0 y casillasTotales. Ejemplo ::: casillasdeQuiz =4, casillasdeTabu=0, casillasdeMimica=2, casillasdeDibujo=4;
    var Alea1 = random(casillasTotales)+1;

    if( j== 6 || j==13)
    {
      $("#Casilla"+j).addClass("fondoPartyCasillaNegra");
      continue;
    }

    if(Alea1>0 && Alea1<=casillasdeQuiz)
    {
        $("#Casilla"+j).addClass("fondoPartyCasillaQuiz");
        casillasdeQuiz--;
        casillasTotales--;
    }
    else if(Alea1>casillasdeQuiz && Alea1<=(casillasdeTabu+casillasdeQuiz))
    {
        $("#Casilla"+j).addClass("fondoPartyCasillaTabu");
        casillasdeTabu--;
        casillasTotales--;
    }
    else if(Alea1>(casillasdeTabu+casillasdeQuiz) && Alea1<=(casillasdeTabu+casillasdeQuiz+casillasdeMimica))
    {
        $("#Casilla"+j).addClass("fondoPartyCasillaMimica");
        casillasdeMimica--;
        casillasTotales--;
    }
    else if(Alea1>(casillasdeTabu+casillasdeQuiz+casillasdeMimica) && Alea1<=(casillasdeTabu+casillasdeQuiz+casillasdeMimica+casillasdeDibujo))
    {
        $("#Casilla"+j).addClass("fondoPartyCasillaDibujo");
        casillasdeDibujo--;
        casillasTotales--;
    }
    else
        console.log("Que ha pasado x2");
  }
  PartyGame();
}

function PartyGame()
{
  //Código principal del party
  ocultarTodo();
  $("#PantallaParty").css("display", "block");

  //Objetos que han de restablecerse en cada ronda.
  $("#HazClickDado").css("display","block");
  $("#tiraeldado").text("¡Tira el dado!");
  $("#ImagenClickDado").attr('onClick', "TurnoParty();");
  $("#mensajeexplicativotexto").text("");
  
  //Variables que han de ser reseteadas.
  pantallaActualQuiz = false;
  pantallaActualTabu = false;
  pantallaActualMimica = false;
  pantallaActualDibujo = false;


  //Resaltar Equipo y poner al anterior normal.
  $("#titulotextoPartyEquipo1").removeClass("aumentarTamanyo5 underline");
  $("#titulotextoPartyEquipo2").removeClass("aumentarTamanyo5 underline");
  $("#titulotextoPartyEquipo3").removeClass("aumentarTamanyo5 underline");
  $("#titulotextoPartyEquipo4").removeClass("aumentarTamanyo5 underline");
  $("#titulotextoPartyEquipo5").removeClass("aumentarTamanyo5 underline");
  $("#titulotextoPartyEquipo6").removeClass("aumentarTamanyo5 underline");
  
    // if(turnoEquipo==0)
  $("#titulotextoPartyEquipo"+(turnoEquipo+1)).addClass("aumentarTamanyo5 underline");
    // else
    // $("#titulotextoPartyEquipo"+(turnoEquipo+1)).addClass("aumentarTamanyo1 underline");
  
  //Quitamos los subrayados del equipo y de la prueba.
  $("#titulotextoPartyQuiz").removeClass("aumentarTamanyo1 underline");
  $("#titulotextoPartyTabu").removeClass("aumentarTamanyo1 underline");
  $("#titulotextoPartyMimica").removeClass("aumentarTamanyo1 underline");
  $("#titulotextoPartyDibujo").removeClass("aumentarTamanyo1 underline");

  if(posicionEquiposParty[turnoEquipo]>14){
      //No deberia entrar aqui nunca.
      console.log("Está eentrando en un erroooor.");
      turnoEquipo++;
      if(turnoEquipo==numEquipos)
          turnoEquipo=0;
      PartyGame();
  }
  //Ajustamos el texto al turno.
  $("#TurnoEquipoParty").text("Equipo "+(turnoEquipo+1)+" ~ ("+(RondaEquipo)+"/3)");  
}

function TurnoParty()
{
  var numDadoSacado = 0;
  var contador = 0;
  var posLeft = 0;
  var posTop = 0;

  //Deshabilitar click
  $("#ImagenClickDado").attr('onClick', null);
 
  //Mover dado y que salga num al azar 1-6.
  numDadoSacado = random(6)+1;
  contador = numDadoSacado;

  $("#HazClickDado").css("display","none");
  //Animacion dedados cambiando!!!!
  animarDado(numDadoSacado); //TIENE UNA DURACION DE 2.6 SEGUNDOS.
  //Mover ficha correspondiente.  
  //No se me ha ocurrido otra forma mejor de hacerlo, establezco varios setTimeOuts (el num del dado). Para que sea lineal el movimiento cada segundo.
  //Miro en cada set time out la posicion en la que se encuentra la ficha (posicionEquiposParty[turnoEquipo]) y valoro si ha de moverse arriba abajo derecha izquierda. 
  //El uso de snakes y escaleras se hará aparte.
  //Le he puesto un SetTimeOut para que se ajuste a la funcion animardado(). Lo he puesto fuera del for, porque no me apetecia cambiar todo el interior.
  setTimeout(function(){
    for(i=0; i<numDadoSacado; i++)
    {
        setTimeout( function(){
            posicionEquiposParty[turnoEquipo]++;

            if(posicionEquiposParty[turnoEquipo]>15)
                return false;

            posLeft = $("#FichaEquipo" + (turnoEquipo+1)).css('left');
            posTop = $("#FichaEquipo" + (turnoEquipo+1)).css('top');
            //valorar que posicion ir(); 
            if((posicionEquiposParty[turnoEquipo]>0 && posicionEquiposParty[turnoEquipo]<4) || (posicionEquiposParty[turnoEquipo]>8 && posicionEquiposParty[turnoEquipo]<12))
            {
                $("#FichaEquipo" + (turnoEquipo+1)).animate({left: '+=11.42vw'});
                //$("#FichaEquipo" + (turnoEquipo+1)).css("left", "calc(" + posLeft + " + 18%)"); //Cuando va pa la derecha
            }
            else if((posicionEquiposParty[turnoEquipo]>4 && posicionEquiposParty[turnoEquipo]<8) || (posicionEquiposParty[turnoEquipo]>12 && posicionEquiposParty[turnoEquipo]<15))
            {
                $("#FichaEquipo" + (turnoEquipo+1)).animate({left: '-=11.42vw'});
                //$("#FichaEquipo" + (turnoEquipo+1)).css("left","calc(" + posLeft + " - 18%)"); //Cuando va pa la izquierda
            }
            else if(posicionEquiposParty[turnoEquipo]==4 || posicionEquiposParty[turnoEquipo]==8 || posicionEquiposParty[turnoEquipo]==12)
            {
                $("#FichaEquipo" + (turnoEquipo+1)).animate({top: '-=8.1vw'});
                //$("#FichaEquipo" + (turnoEquipo+1)).css("top","calc(" + posTop + " - 22.5%)"); //Cuando sube pa arriba
            }
            else if(posicionEquiposParty[turnoEquipo]>14)
            {
                $("#FichaEquipo" + (turnoEquipo+1)).animate({left: '-=11.42vw'});
                setTimeout( function(){FinalizarJuego("Party");},1500);
                return false;
            }
        },i*1000+500);
        if(i==(numDadoSacado-1)) //Para que solo se ejecute una vez.
        {
            setTimeout( function(){
                partyElegirPrueba();
                //Llamar funcion para Escoger prueba, que lleve a la prueba, se ejecute y muestre la venta de continuar o perder turno.
                //Volver al juego con siguiente turno
            },i*1000+500);
        }
    }
  },2800);
}

function partyElegirPrueba()
{
  //Comprobar casilla y prueba escogida.
  //Ejecutar Prueba correspondiente -> Pantalla negro con nombre -> Pantalla de PrePrueba. -> Prueba -> Correcto o falso. -> Volver al Party.
    if($("#Casilla"+posicionEquiposParty[turnoEquipo]).hasClass("fondoPartyCasillaQuiz"))
        PruebaPartyQuiz();
    else if($("#Casilla"+posicionEquiposParty[turnoEquipo]).hasClass("fondoPartyCasillaTabu"))
        PruebaPartyTabu();
    else if($("#Casilla"+posicionEquiposParty[turnoEquipo]).hasClass("fondoPartyCasillaMimica"))
        PruebaPartyMimica();
    else if($("#Casilla"+posicionEquiposParty[turnoEquipo]).hasClass("fondoPartyCasillaDibujo"))
        PruebaPartyDibujo();
    else if($("#Casilla"+posicionEquiposParty[turnoEquipo]).hasClass("fondoPartyCasillaNegra"))
        BajarSnake();
    else 
        console.log("ERROOOOOOOOOOR HAJAJHAJS");
}

function PruebaPartyQuiz()
{   //Contar 5 segundos poner en mensaje de abajo.
    //Mandar a la prueba (prepantalla).
  var TiempoSegundos = 5;

  setTimeout(function(){$("#titulotextoPartyQuiz").addClass("aumentarTamanyo1 underline");},500);

  for(var i=0; i<5; i++)
  {
      setTimeout(function(){
          $("#mensajeexplicativotexto").text("¡Ha tocado Quiz! Empezando en "+TiempoSegundos);
          TiempoSegundos--;
      }, i*1000+1000);
      if(i==4)
      {
          setTimeout(function(){
            //Llamar a la prueba.
              pantallaActualQuiz = true;
              copiaduracionJuego = duracionJuegosParty[0];
              PreguntaQuiz();
          }, 6000);
      }
    }
}
function PruebaPartyTabu()
{   //Contar 5 segundos poner en mensaje de abajo.
    //Mandar a la prueba (prepantalla).
  var TiempoSegundos = 5;

  setTimeout(function(){$("#titulotextoPartyTabu").addClass("aumentarTamanyo1 underline");},500);

  for(var i=0; i<5; i++)
  {
      setTimeout(function(){
          $("#mensajeexplicativotexto").text("¡Ha tocado Tabú! Empezando en "+TiempoSegundos);
          TiempoSegundos--;
      }, i*1000+1000);
      if(i==4)
      {
          setTimeout(function(){
            //Llamar a la prueba.
              pantallaActualTabu = true;
              copiaduracionJuego = duracionJuegosParty[1];
              PreguntaTabu();
          }, 6000);
      }
  }
}
function PruebaPartyMimica()
{   //Contar 5 segundos poner en mensaje de abajo.
    //Mandar a la prueba (prepantalla).
  var TiempoSegundos = 5;

  setTimeout(function(){$("#titulotextoPartyMimica").addClass("aumentarTamanyo1 underline");},500);

  for(var i=0; i<5; i++)
  {
      setTimeout(function(){
          $("#mensajeexplicativotexto").text("¡Ha tocado Mímica! Empezando en "+TiempoSegundos);
          TiempoSegundos--;
      }, i*1000+1000);
      if(i==4)
      {   
          setTimeout(function(){
            //Llamar a la prueba.
              pantallaActualMimica = true;
              copiaduracionJuego = duracionJuegosParty[2];
              PreguntaMimica();
          }, 6000);
      }
  }
}
function PruebaPartyDibujo()
{   //Contar 5 segundos poner en mensaje de abajo.
    //Mandar a la prueba (prepantalla).
  var TiempoSegundos = 5;

  setTimeout(function(){$("#titulotextoPartyDibujo").addClass("aumentarTamanyo1 underline");},500);

  for(var i=0; i<5; i++)
  {
      setTimeout(function(){
          $("#mensajeexplicativotexto").text("¡Ha tocado Dibujo! Empezando en "+TiempoSegundos);
          TiempoSegundos--;
      }, i*1000+1000);
      if(i==4)
      {
          setTimeout(function(){
              //Llamar a la prueba.
              pantallaActualDibujo = true;
              copiaduracionJuego = duracionJuegosParty[3];
              PreguntaDibujo();
          }, 6000);
      }
  }
}
function ContinuarParty(resultado)
{
    //Ver mensaje de continuar juego repetir ronda etc. has perdido ganado xd
    ocultarTodo();
    $("#PantallaParty").css("display", "block");
    if((posicionEquiposParty[turnoEquipo] == 7 || posicionEquiposParty[turnoEquipo]==10) && resultado == "PartyWin")
    {
      subirEscalera();
      setTimeout(function(){$("#pantallaNotificacionesParty").css("display", "block");},3500);
    }
    else
      $("#pantallaNotificacionesParty").css("display", "block");
    

    if(resultado == "PartyWin" && RondaEquipo<=2)
    {
      //Display block a todo
      $("#BotonperderTurno").css("display", "block");
      $("#textoNotificacionParty3").css("display", "block");
      $("#BotonContinuarNotifParty").attr('onClick','SiguienteRonda();');
      //Cambiar los mensajes de texto.
      $("#textoNotificacionParty1").text("¡Has acertado la prueba!");
      $("#textoNotificacionParty2").text("Puedes volver a tirar (Turno Actual: "+RondaEquipo+"/3)");
      $("#textoContinuarNotifParty").text("Continuar al Turno " + (RondaEquipo+1));

      textoContinuarNotifParty
      //Poner lo estandar.
    }
    else if(resultado == "PartyWin" && RondaEquipo==3)
    {
      //Acierto pero ya no hay mas turnos. Ocultar boton rojo.
      $("#BotonperderTurno").css("display", "none");
      $("#textoNotificacionParty3").css("display", "none");
      $("#BotonContinuarNotifParty").attr('onClick','SiguienteEquipo();');
      //Modificar el texto.
      $("#textoNotificacionParty1").text("¡Has acertado la prueba!");
      $("#textoNotificacionParty2").text("Ya no te quedan más turnos. (Turno Actual: "+RondaEquipo+"/3)");
      $("#textoContinuarNotifParty").text("Continuar al Equipo " + (turnoEquipo+2));
    }
    else if(resultado=="PartyLose")
    {
      //Pasar al siguiente equipo. Ocultar boton rojo.
      $("#BotonperderTurno").css("display", "none");
      $("#textoNotificacionParty3").css("display", "none");
      $("#BotonContinuarNotifParty").attr('onClick','SiguienteEquipo();');
      //Modificar el texto.
      $("#textoNotificacionParty1").text("No has pasado la prueba...");
      $("#textoNotificacionParty2").text("¡Le toca al siguiente Equipo!");
      if((turnoEquipo+1) == numEquipos)
          $("#textoContinuarNotifParty").text("Continuar al Equipo 1");
      else
          $("#textoContinuarNotifParty").text("Continuar al Equipo " + (turnoEquipo+2));
    }    
}
function SiguienteRonda()
{
  $("#pantallaNotificacionesParty").css("display", "none");
  RondaEquipo++;
  PartyGame();
}
function SiguienteEquipo()
{
  $("#pantallaNotificacionesParty").css("display", "none");
  RondaEquipo=1;
  turnoEquipo++;
  if(turnoEquipo==numEquipos)
      turnoEquipo=0;
  PartyGame();
}
function BajarSnake()
{
  if(posicionEquiposParty[turnoEquipo]==6)
  {
    //Mover al 2.
    $("#FichaEquipo" + (turnoEquipo+1)).animate({top: '+=8.1vw', left: '+=11.42vw'});
    posicionEquiposParty[turnoEquipo] = 2;
    setTimeout( function(){ partyElegirPrueba();},1200);
  }
  else if(posicionEquiposParty[turnoEquipo]==13)
  {
    //Mover al 9.
    $("#FichaEquipo" + (turnoEquipo+1)).animate({top: '+=8.1vw', left: '-=11.42vw'});
    posicionEquiposParty[turnoEquipo] = 9;
    setTimeout( function(){ partyElegirPrueba();},1200);
  }
  //console.log("Subiendo y bajaaando");
}
function subirEscalera()
{
  if(posicionEquiposParty[turnoEquipo]==7)
  {
    //Mover al 9.
    setTimeout(function(){
      $("#FichaEquipo" + (turnoEquipo+1)).animate({top: '-=8.1vw', left: '+=11.42vw'});
      posicionEquiposParty[turnoEquipo] = 9;
    },1300);
  }
  else if(posicionEquiposParty[turnoEquipo]==10)
  {
    //Mover al 12.
    setTimeout(function(){
      $("#FichaEquipo" + (turnoEquipo+1)).animate({top: '-=8.1vw', left: '+=11.42vw'});
      posicionEquiposParty[turnoEquipo] = 12;
    },1300);
  }
}

function animarDado(numDadoSacado)
{
  var ultimoNum=0;    //Control para que no se repita la imagen.
  var Alea3 = 0;      //Numero aleatorio entre 1-6

  for(var k=1; k<=8; k++)
  {
    if(k!=8){
      setTimeout(function(){
        //Cambiar imagen al azar
        Alea3 = random(6)+1;
        while(Alea3 == ultimoNum)
        {
          Alea3 = random(6)+1;
        }
        $("#ImagenClickDado").attr('src',"./media/dadocara"+Alea3+".png");
        ultimoNum = Alea3;
      },300*k);
    }
    else
    {
      setTimeout(function(){
        //Ponemos la imagen del dado que ha tocado.
        $("#ImagenClickDado").attr('src',"./media/dadocara"+numDadoSacado+".png");
      },300*k);
      setTimeout(function(){
        $("#tiraeldado").text("¡" + numDadoSacado + "!");  
      },300*k +200);
    } 
  }
}
//FIN DE LAS FUNCIONES DEL PARTY.

//FUNCIONES DEL ELEVATOR PICTH
function EP()  //Ejecutar Quiz.
{
    $("#MenuPrincipal").css("display", "none");
    $("#AyudaMP").css("display", "none");
    $("#PantallaEPSettings").css("display", "block");
}
function PrePreEP()
{
  //Miramos si ha bugeado el sistema D_: xD
  TotMinSec[0]=parseInt($("#TiempoQuizMinEP :selected").text())*60 + parseInt($("#TiempoQuizSecEP :selected").text());

  if(TotMinSec[0]==0)     //Control de tiempo.
    alert("La duración mínima se ha establecido a 10 segundos");

  PreElevatorPitch();
}

function PreElevatorPitch()
{
  var textoProvisional = "¡Solo tienes ";

  ocultarTodo();
  $("#textoTimeUpEP").css("visibility","hidden");
  $("#letraPiso6").removeClass("importantGrowANDColor");  
  $("#letraPiso5").removeClass("importantGrowANDColor");  
  $("#letraPiso4").removeClass("importantGrowANDColor");  
  $("#letraPiso3").removeClass("importantGrowANDColor");  
  $("#letraPiso2").removeClass("importantGrowANDColor");  
  $("#letraPiso1").addClass("importantGrowANDColor");
  $("#adelanteImagenEP").css("top","82.8%");
  $("#imagenAscensor").css("top","85%");
  $("#BotonFinalizarEP").css("display","none");
  pantallaActualEP = true;

  //Guardamos los tiempos.
  TotMinSec[0]=parseInt($("#TiempoQuizMinEP :selected").text())*60 + parseInt($("#TiempoQuizSecEP :selected").text());
  TotMinSec[1]=parseInt($("#TiempoQuizMinEP :selected").text())*60;
  TotMinSec[2]=parseInt($("#TiempoQuizSecEP :selected").text());

  if(TotMinSec[0]==0)     //Control de tiempo.
  {
    TotMinSec[0] = 10;
    TotMinSec[2] = 10;
  } 

  //Texto para la pantalla de preparación (una evz puesto el tiempo).
  if(TotMinSec[0]>=60 && TotMinSec[0]<120)
    textoProvisional = textoProvisional + "1 minuto";
  else if(TotMinSec[0]>=120)
    textoProvisional = textoProvisional + (Math.trunc(TotMinSec[1]/60)) + " minutos";
  if(TotMinSec[0]%60!=0 && TotMinSec[0]>60)
    textoProvisional = textoProvisional + " y " + TotMinSec[2] + " segundos";
  else if(TotMinSec[0]%60!=0 && TotMinSec[0]<60)
    textoProvisional = textoProvisional + TotMinSec[2] + " segundos";
  //Terminamos el texto y lo ponemos por pantalla.
  textoProvisional = textoProvisional + "!";
  $("#textoTiempoSolo").text(textoProvisional);

  //Otros ajustes
  duracionJuego = TotMinSec[0];
  $("#contadorMinEP").text(Math.trunc(TotMinSec[0]/60));
  if(TotMinSec[2] == 0)
     $("#contadorSecEP").text("00");
  else
    $("#contadorSecEP").text(TotMinSec[2]);
  TotMinSec[0]++; 

  $("#PantallaEP").css("display", "block");
  $("#pantallaNegroEP").css("display", "block");
}
//Tiempo
function hidePantallaNegroEP()
{
  $("#pantallaNegroEP").css("display", "none");
  playTime = true;
}
function PreguntaEP()
{
  $("#pantallaPreguntaEP").css("display","block");
}
//FIN DE LAS FUNCIONES DEL ELEVATOR PITCH.

//Otras funciones útiles.
function mostrarAyudaMP()
{
    if( $("#ImagenAyudaMP").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaMP").attr('src',"./media/exit.png");
      $("#AyudaMP").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaMP").attr('src',"./media/AyudaMenu.png");
      $("#AyudaMP").css("display", "none");
    }
}
function mostrarAyudaQuiz()
{
    if( $("#ImagenAyudaQuiz").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaQuiz").attr('src',"./media/exit.png");
      $("#AyudaQuiz").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaQuiz").attr('src',"./media/AyudaMenu.png");
      $("#AyudaQuiz").css("display", "none");
    }
}
function mostrarAyudaTabu()
{
    if( $("#ImagenAyudaTabu").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaTabu").attr('src',"./media/exit.png");
      $("#AyudaTabu").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaTabu").attr('src',"./media/AyudaMenu.png");
      $("#AyudaTabu").css("display", "none");
    }
}
function mostrarAyudaMimica()
{
    if( $("#ImagenAyudaMimica").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaMimica").attr('src',"./media/exit.png");
      $("#AyudaMimica").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaMimica").attr('src',"./media/AyudaMenu.png");
      $("#AyudaMimica").css("display", "none");
    }
}
function mostrarAyudaDibujo()
{
    if( $("#ImagenAyudaDibujo").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaDibujo").attr('src',"./media/exit.png");
      $("#AyudaDibujo").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaDibujo").attr('src',"./media/AyudaMenu.png");
      $("#AyudaDibujo").css("display", "none");
    }
}
function mostrarAyudaParty()
{
    if($("#ImagenAyudaParty").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaParty").attr('src',"./media/exit.png");
      $("#AyudaParty").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaParty").attr('src',"./media/AyudaMenu.png");
      $("#AyudaParty").css("display", "none");
    }
}
function mostrarAyudaEP()
{
    if( $("#ImagenAyudaEP").attr('src').split('/').pop() == "AyudaMenu.png")
    {
      $("#ImagenAyudaEP").attr('src',"./media/exit.png");
      $("#AyudaEP").css("display", "block"); 
    }
    else
    {
      $("#ImagenAyudaEP").attr('src',"./media/AyudaMenu.png");
      $("#AyudaEP").css("display", "none");
    }
}

function volverMP()
{
  ocultarTodo();
  resetearVariables();
  $("#MenuPrincipal").css("display", "block");
}
function togglePlayPause(Prueba)
{
  playTime = !playTime;
  if( $("#imagenPausaPlay"+Prueba).attr('src').split('/').pop() == "pause.png")
      $("#imagenPausaPlay"+Prueba).attr('src',"./media/play.png");
  else
    $("#imagenPausaPlay"+Prueba).attr('src',"./media/pause.png");  
}
function togglePlayPauseOnclick(Prueba)
{
  if($("#imagenPausaPlay"+Prueba).attr('onClick') == null)
    $("#imagenPausaPlay"+Prueba).attr('onClick', 'togglePlayPause('+Prueba+')');
  else
    $("#imagenPausaPlay"+Prueba).attr('onClick', null);
}
function FinalizarJuego(Prueba)
{
  //Pantalla de victoria.
  //En caso de que sea victoria del party
  if(Prueba == "Party")
  {
    for(var i=1; i<=5; i++)
      $("#PVEquipo"+i).css("display","none");

    $("#TextoVictoriaPrincipal").text("La Victoria es para...");
    //Visualizamos tood.
    $("#PartyVitoria").css("display","block");
    $("#textoequipovictoriaParty").text("!El Equipo " + (turnoEquipo+1) + "!");
    $("#imagenVictoriaParty").attr('src',"./media/ficha"+(turnoEquipo+1)+".png");

  }
  else  //Viene de Quiz, Tabu, Mimica o Dibujo.
  {
    $("#PartyVitoria").css("display","none");
    for(var i=1; i<=5; i++)
    {
      $("#PVEquipo"+i).removeClass("background1","background2","background3","background4","background5","background6","background7","background8","background9","background10",)
      if(i<=numEquipos)
        $("#PVEquipo"+i).css("display","flex");
      else
        $("#PVEquipo"+i).css("display","none");

      $("#barraPuntuacionesVictoria"+i).css("width", "1%");
    }

    var EquipoGanador = 10;
    var puntuacionMaxima = 0;
    //Ordenamos a los equipo, les ponemos la puntuacion y el tamaño de las barras.
    for(var i=1; i<=numEquipos; i++)
    {
      EquipoGanador = 10;  //Guardamos la posicion de la puntuacion del mejor equipo. (Empezamos en la posición 10, que no existe y se inicializa a 0 por defecto.).
      puntuacionEquipos[EquipoGanador]= -1;
      
      for(var j=1; j<=numEquipos; j++)
        if(puntuacionEquipos[j-1]>puntuacionEquipos[EquipoGanador])
          EquipoGanador=j-1;

      $("#nombreEquipoVictoria"+i).text("Equipo "+(EquipoGanador+1));
      $("#puntosVictoria"+i).text(puntuacionEquipos[EquipoGanador]);
      if(i==1)
      {
        puntuacionMaxima=puntuacionEquipos[EquipoGanador];
        $("#TextoVictoriaPrincipal").text("Victoria para el equipo "+(EquipoGanador+1));
      }
      if(i!=1 && (puntuacionEquipos[EquipoGanador]==puntuacionMaxima || puntuacionMaxima ==1))
        $("#TextoVictoriaPrincipal").text("Pero habéis empatado...");

      if(puntuacionMaxima==0)
        puntuacionMaxima=1;
      //Establecemos el tamaño de la barra
      if(i==1 && puntuacionMaxima!=1)
        $("#barraPuntuacionesVictoria"+i).css("width", Math.round((puntuacionEquipos[EquipoGanador]/puntuacionMaxima)*100, -1)+"%");
      else
        $("#barraPuntuacionesVictoria"+i).css("width", Math.round((puntuacionEquipos[EquipoGanador]/puntuacionMaxima)*100, -1)+1+"%");
      //Establecemos el color
      $("#barraPuntuacionesVictoria"+i).addClass("background"+(EquipoGanador+1));
      puntuacionEquipos[EquipoGanador] = -5;
    }
  }

  ocultarTodo();
  $("#PantallaVictoria").css("display","block");
  //Si hay empate, mostrar solo la palabra empate.
  //Mostrar a los 5 mejores.
}
function random(max){
  return Math.floor(Math.random() * max);
}

function ocultarTodo()
{
  //Elementos del MP.
  $("#MenuPrincipal").css("display", "none");
  $("#AyudaMP").css("display", "none");
  //Elementos del quiz
  $("#PantallaQuiz").css("display", "none");
  $("#AyudaQuiz").css("display", "none");
  $("#PantallaQuizSettings").css("display", "none");
  $("#PantallaPuntuaciones").css("display", "none");
  //Elementos del Tabú.
  $("#PantallaTabu").css("display", "none");
  $("#AyudaTabu").css("display", "none");
  $("#PantallaTabuSettings").css("display", "none");
  $("#PantallaPuntuacionesTabu").css("display", "none");
  //Elementos de la mímica.
  $("#PantallaMimica").css("display", "none");
  $("#AyudaMimica").css("display", "none");
  $("#PantallaMimicaSettings").css("display", "none");
  $("#PantallaPuntuacionesMimica").css("display", "none");
  //Elementos del dibujo.
  $("#PantallaDibujo").css("display", "none");
  $("#AyudaDibujo").css("display", "none");
  $("#PantallaDibujoSettings").css("display", "none");
  $("#PantallaPuntuacionesDibujo").css("display", "none");
  //Elementos del Party
  $("#PantallaParty").css("display", "none");
  $("#AyudaParty").css("display", "none");
  $("#PantallaPartySettings").css("display", "none");
  //Elementos del EP.
  $("#PantallaEPSettings").css("display", "none");
  $("#PantallaEP").css("display", "none");
  $("#pantallaNegroEP").css("display", "none");
  $("#pantallaPreguntaEP").css("display", "none");
  $("#AyudaEP").css("display", "none");
  //Pantalla de victoria.
  $("#PantallaVictoria").css("display","none");
}

function resetearVariables()
{
  //Reseteamos las imagenes de ayuda.
  $("#ImagenAyudaMP").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaQuiz").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaTabu").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaMimica").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaDibujo").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaParty").attr('src',"./media/AyudaMenu.png");
  $("#ImagenAyudaEP").attr('src',"./media/AyudaMenu.png");

  //Fin de reseteo de imagenes de ayuda.
  for(var i=1; i<11; i++){
    $("#verEquipo"+i).css("display","flex");
    $("#valorPuntuacionE"+i).text(0);
    $("#barraPuntuacionE"+i).css("width", "1%");
  }
  for(var i=1; i<11; i++){
    $("#verEquipoTabu"+i).css("display","flex");
    $("#valorPuntuacionETabu"+i).text(0);
    $("#barraPuntuacionETabu"+i).css("width", "1%");
  }
  for(var i=1; i<11; i++){
    $("#verEquipoMimica"+i).css("display","flex");
    $("#valorPuntuacionEMimica"+i).text(0);
    $("#barraPuntuacionEMimica"+i).css("width", "1%");
  }
  for(var i=1; i<11; i++){
    $("#verEquipoDibujo"+i).css("display","flex");
    $("#valorPuntuacionEDibujo"+i).text(0);
    $("#barraPuntuacionEDibujo"+i).css("width", "1%");
  }
  turnoEquipo = 0;
  MayorPuntuacion = 1;
  puntuacionEquipos = [0,0,0,0,0,0,0,0,0,0];
  posicionEquiposParty = [0,0,0,0,0,0];
  duracionJuego = 10;
  copiaduracionJuego = 10;
  numEquipos = 0;
  playTime = false;
  puntosProvisionales = 0;
  duracionJuegosParty = [0,0,0,0];
  RondaEquipo = 1;
  flg1 = true;
  
  pantallaActualQuiz = false;
  pantallaActualTabu = false;
  pantallaActualDibujo = false;
  pantallaActualMimica = false; 
  pantallaActualParty = false;
  pantallaActualEP = false;
}