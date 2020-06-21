$(document).ready(function() {
    var hour = 0;
    setTime()
    
      //gets date time from moment JS and keeps it refreshing on page to stay current
      function setTime() {
        var secondsLeft = 3600;
        var timerInterval = setInterval(function() {
        secondsLeft--;  
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        setTime();
        }
         var timer = timeManagement();
         colorCoding()
         console.log(timer);

      }, 1000);
      
    }
    function timeManagement() {
        var day = $("#currentDay"); 
        var date = moment().format('lllls').toString();
        day.text(date);
        console.log(date);
        var ampm = date.split(" ");
        console.log(ampm);
        hour = parseInt(moment().format('LT').toString());
        console.log(ampm[5])
        if (ampm[5] === "pm") {
            hour = hour + 12;
            return hour;
        }
        return hour;
    }
    function colorCoding() {
        for (var i = 8; i < 18; i++){
            if (hour < i){
                console.log("#" + i)
               $("#" + i).attr("style", "background-color: skyblue;")
            }
            if (hour = i){
                console.log("#" + i)
               $("#" + i).attr("style", "background-color: white;")
            }
            if (hour > i){
                console.log("#" + i)
               $("#" + i).attr("style", "background-color: pink;")
            }

        }
    }

});