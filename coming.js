$(document).ready(function () {
    var confettiElement = document.getElementById("my-canvas");
    var confettiSettings = { target: confettiElement };
    var confetti = new ConfettiGenerator(confettiSettings);
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
       

        const myTimeoutConfetti = setTimeout(awaitConfetti, 3500);
        function awaitConfetti() {
            confetti.render().fadeIn();
        }
});