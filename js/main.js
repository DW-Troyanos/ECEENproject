//Función Slider
$(document).ready(function () {

  // Noticias - preview
  if (window.location.href.indexOf("index") > -1) {
    var previews = [
      {
        title: "ECEEN’s First Step in South Africa | Solar Charger Bag Show",
        date:
          "Date: 06/12/2020",
        content:
          "Tulum es una de las joyas más deseadas del Caribe mexicano, quizá por estar delineado por 10 kilómetros de arena blanca y aguas turquesas que le valieron para ser nombrado Pueblo Mágico. <br><br> Aquí, la naturaleza se muestra en todo su esplendor a través de lagunas, cenotes y una zona arqueológica maya a la orilla del mar, que fue utilizada como centro ceremonial astrológico y comercial. No faltan los paseos en bicicleta que te internan por la selva para llevarte a conocer estas maravillas. Tulum Bike Tours complementa la experiencia con la visita a comunidades mayas, donde te enseñan medicina tradicional y elaboración de joyería con semillas. <br><br> Tulum, a diferencia de Cancún, no es un destino de grandes resorts todo incluido, más bien, sus alojamientos son pequeños hoteles que se mimetizan con la selva y pueden ser tan lujosos o rústicos como quieras. Si vas en pareja te recomendamos Azulik, con seis suites construidas en madera, columpios y camas colgantes, que se han hecho famosas en Instagram. ¿Te imaginas beber una copa de vino sobre la copa de los árboles? Con espacios que emulan nidos gigantes.",
        img:
          "img/art1.jpg",
      },
    ];

    previews.forEach((item) => {
      var preview = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="${item.link}" class="button-more">Artículo completo</a>
                    <a href="cotizacion.html"><button class="button-cotizar">Cotizar mi viaje</button></a>
                    <br>
                    <br>
                    <img src="${item.img}" class="img-articulo">
                    <hr class="hr">
                </article>`;
      $("#previews").append(previews);
    });
  }

  // Noticias - nota
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "ECEEN’s First Step in South Africa | Solar Charger Bag Show",
        date:
          "06/12/2020",
        content:
          "The business show was on last Jun.2019, it’s around 1 year now, the time runs so fast, but that trip give me a deep impression for South Africa, the social, cultural, city & country…. so that I still want to write something and share to ECEEN favors.",
        img:
          "img/postpre1.jpg",
      },
      {
        title: "ECEEN Waterproof Backpack 20L Dry Bag With Padded Shoulder Straps, Phone Pocket & Bottle & Hiking Stick Holder Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishing",
        date:
          "04/24/2018",
        content:
          "ECEEN Waterproof Backpack 20L Dry Bag With Padded Shoulder Straps, Phone Pocket & Bottle & Hiking Stick Holder Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishing",
        img:
          "img/postpre2.jpg",
      },
      {
        title: "Be charming like Morning Sun",
        date:
          "02/09/2017",
        content:
          "I am very happy and satisfied today for a trifle of progress in my duty even though only a trifle. I imaged many working conditions, work smoothly, tired, hard. But everything goes well here, tired but with great passion and confidence.",
        img:
          "img/postpre3.jpg",
      },
    ];

    previews.forEach((item) => {
      var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="${item.link}" class="button-more">Artículo completo</a>
                    <a href="cotizacion.html"><button class="button-cotizar">Cotizar mi viaje</button></a>
                    <br>
                    <br>
                    <img src="${item.img}" class="img-articulo">
                    <hr class="hr">
                </article>`;
      $("#posts").append(posts);
    });
  }

  //Login LocalStorage

  $("#login form").submit(function () {
    let form_name = $("#form_name").val();
    //alert(form_name);
    // console.log(form_name);
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "unfined") {
    let about_parrafo = $("#about p");
    $("#about p").html("<b>Bienvenido " + form_name + "</b>");
    about_parrafo.append("<br><a href = '#' id = 'logout'>Cerrar Sesión</a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Activar Jquerty validator
  if (window.location.href.indexOf("contacto") > -1) {
    $.validate({
      lang: "es",

      //
    });
  }
});


