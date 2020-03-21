function setCountdown(span, date, completion_message) {
    var countDownDate = new Date(date);
    var x = setInterval(function () {
        
        if (isNaN(countDownDate.getTime())) return document.querySelector(span).innerHTML = 'Invalid Date! Please use the following format: <br>Month Day, Year HH:MM:SS (all fields optional)<br>Example: Jan 5, 2021 15:37:25';
        
        var now = new Date();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector(span).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s";

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(span).innerHTML = completion_message;
        }

    }, 1000);
    return x;
}