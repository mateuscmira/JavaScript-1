function startTimer(duration, display, startButton) {
    startButton.addEventListener('click', function () {
        var timer = duration;
        var minutes, seconds;

        var interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                timer = duration;
            }
        }, 1000);
    });
}