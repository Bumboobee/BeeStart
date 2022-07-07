$(document).ready(function () {
  $(window).on('load', function () {
    $('.loading').hide();
  });

  let menu = document.querySelector("#mobile-menu");
  let menuLinks = document.querySelector(".navbarr__menu");
  menu.addEventListener("click", function () {
    if (menu.classList.toggle("is-active")) {
      $("section").addClass("main-blur");
      $(".main, .navbarr__links").click(function () {
        //Hide the menus if visible
        $(".navbarr__menu").removeClass("active");
        // $(".navbarr__menu").hide();
        $("section").removeClass("main-blur");
        $("#mobile-menu").removeClass("is-active");
      }),
        $(".main").click(function (event) {
          event.stopPropagation();
        });
    } else {
      $("section").removeClass("main-blur");
    }
    menuLinks.classList.toggle("active");
  });

  $("#resumeID").on("click", function (e) {
    Swal.fire({
      html:
        '<p style = "color: #64FED9; margin-bottom: 15px;">My <span><b>resume</b></span> <p>' +
        '<embed src="images/JoseResume.pdf" type="application/pdf" width="100%" height="600px" />',
      showCloseButton: true,
      showCancelButton: false,
      background: "#01161E",
      confirmButtonColor: "#112240",
      cancelButtonColor: "#8892B0",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      focusConfirm: true,
      width: "800px",
    });

    var userLang = navigator.language || navigator.userLanguage; 
    if(userLang == 'pt-BR') {
      $("embed").attr("src", "images/JoseCurriculo.pdf");

    } else {
      $("embed").attr("src", "images/JoseResume.pdf");
    }
  }),
    (finaltext = "José \xa0Aparecido \xa0[Zé].");
  const characters =
    "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  iterations = finaltext.length + 20;
  function randomstr() {
    n = Math.random();
    n = n * characters.length;
    n = Math.floor(n);
    out = characters[n];
    return out;
  }

  var text = [];
  for (i = 0; i < finaltext.length; i++) {
    t = [];
    text.push(t);
  }

  for (i = 0; i < finaltext.length; i++) {
    t = text[i];
    for (j = 0; j < iterations - 20 * Math.random(); j++) {
      t.push(randomstr());
    }
    t.push(finaltext[i]);
  }

  counter = 0;

  const elemout = document.getElementById("animationoutput");

  for (i = 0; i < finaltext.length; i++) {
    const outputpart = document.createElement("div");
    outputpart.classList.add("letters");
    elemout.appendChild(outputpart);
    outputlist = document.getElementsByClassName("letters");
  }

  function change() {
    for (i = 0; i < finaltext.length; i++) {
      ft = text[i];
      if (counter < ft.length) {
        outputlist[i].innerHTML = ft[counter];
      } else {
        outputlist[i].innerHTML = ft[ft.length - 1];
      }
    }

    counter++;
  }

  const inst = setInterval(change, 150); //delay da animação

  const cursor = $(".cursor");
  document.addEventListener("mousemove", (e) => {
    $(".cursor").attr(
      "style",
      "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 16) + "px;"
    );
    $(".cursor-inside").attr(
      "style",
      "top: " + (e.pageY - 7.5) + "px; left: " + (e.pageX - 8.5) + "px;"
    );
  });

  document.addEventListener("click", () => {
    $(".cursor").addClass("expand");

    setTimeout(() => {
      $(".cursor").removeClass("expand");
    }, 500);
  });

  $("a").mouseover(() => {
    $(".cursor").addClass("expand-link");
    $(".inside-circle").removeClass("cursor-inside");
  });
  $("a").mouseout(() => {
    $(".cursor").removeClass("expand-link");
    $(".inside-circle").addClass("cursor-inside");
  });

  ScrollReveal({ distance: '60px' }); 
  ScrollReveal().reveal(".navbarr", { delay: 1200, origin: "top" });
  ScrollReveal().reveal(".based, .childhood-info, .contact-info", { delay: 900, origin: "top" });

  ScrollReveal().reveal(".my-projects", { delay: 900, origin: "bottom" });
  ScrollReveal().reveal("h2", { delay: 900, origin: "bottom" });
  ScrollReveal().reveal(".hold-img", { delay: 1200, origin: "bottom" });

  ScrollReveal().reveal(".social__icons", { delay: 500, origin: "left" });
  ScrollReveal().reveal(".effect-title, .sneak-peak", { delay: 700, origin: "right" });

  $(".overlay").hide();

  $(".projects-img, this").hover(function() {
    $(this).siblings(".overlay").show();
  }, function() {
    $(".overlay").hide();
  });

  $("#current-year").html(new Date().getFullYear());

  $(".childhood-img").hide();

  $(".childhood-info").mouseover(() => {
    $(".childhood-img").eq(0).show(500).delay(700);
    $(".childhood-img").eq(1).show(300).delay(2400);
    $(".childhood-img").eq(2).show(1000).delay(4000);
    $(".childhood-img").eq(3).show(1300).delay(5400);
  });

  $(".childhood-info").mouseout(() => {
    $(".childhood-img").hide(3000).fadeOut(100);
  });
});