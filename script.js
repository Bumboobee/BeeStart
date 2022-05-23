$(document).ready(function () {
  let menu = document.querySelector("#mobile-menu");
  let menuLinks = document.querySelector(".navbarr__menu");
  menu.addEventListener("click", function () {
    if (menu.classList.toggle("is-active")) {
      $("section").addClass("main-blur");
      $(".main").click(function () {
        //Hide the menus if visible
        console.log("Entrei");
        $(".navbarr__menu").removeClass("active");
        // $(".navbarr__menu").hide();
        $("section").removeClass("main-blur");
        $("#mobile-menu").removeClass("is-active");
      }),
        $(".main").click(function (event) {
          event.stopPropagation();
          console.log("Sai");
        });
    } else {
      $("section").removeClass("main-blur");
    }
    menuLinks.classList.toggle("active");
  });

  // var confettiElement = document.getElementById("my-canvas");
  // var confettiSettings = { target: confettiElement };
  // var confetti = new ConfettiGenerator(confettiSettings);

  $("#resumeID").on("click", function (e) {
    // startConfetti();
    // confetti.render();
    Swal.fire({
      html:
        '<p style = "color: #64FED9; margin-bottom: 15px;">My <span><b>resume</b></span> <p>' +
        '<embed src="images/Resume.pdf" type="application/pdf" width="100%" height="600px" />',
      showCloseButton: true,
      showCancelButton: false,
      background: "#01161E",
      confirmButtonColor: "#112240",
      cancelButtonColor: "#8892B0",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      focusConfirm: true,
      width: "800px",
    });
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
});
