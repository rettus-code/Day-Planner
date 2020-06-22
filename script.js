$(document).ready(function() {
    var hour = 0;
    refresh()
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

      }, 1000);
      
    }
    function timeManagement() {
        var day = $("#currentDay"); 
        var date = moment().format('llll').toString();
        day.text(date);
        var ampm = date.split(" ");
        hour = parseInt(moment().format('LT').toString());
        if (ampm[5] === "PM") {
            hour = hour + 12;
            return hour;
        }
        return hour;
    }
    function colorCoding() {
        for (var i = 8; i < 18; i++){
            if (hour < i){
               $("." + i).attr("style", "background-color: skyblue;")
            }
            if (hour === i){
               $("." + i).attr("style", "background-color: white;")
            }
            if (hour > i){
               $("." + i).attr("style", "background-color: pink;")
            }

        }
    }
    $("button").on("click", function() {

        for (var i = 8; i < 18; i++){
            var text = $("#" + i).val();
            localStorage.setItem(("#" + i), text)
        }
        refresh()
    })
    function refresh(){
        for (var i = 8; i < 18; i++){
            var holder = localStorage.getItem("#" + i)
            if (holder.value !== ""){
                $("#" + i).val(holder);
            }
        }
    }
});