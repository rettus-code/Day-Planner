$(document).ready(function() {
    var hour = 0;
    refresh()
    setTime()
    


      //gets date time from moment JS and uses a repeating timer to keep items refreshing and stay current
      function setTime() {
        var secondsLeft = 3600;
        var timerInterval = setInterval(function() {
        secondsLeft--;  
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        setTime();
        }
         timeManagement();
         colorCoding()

      }, 1000);
      
    }
    //chooses the momentJS format to use and converts it to UTC for easier management of the color coding
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
    //Simple past present or future decision making for color coding
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
    //click any button doesn't matter but the typed in event will store to the proper time key
    $("button").on("click", function() {

        for (var i = 8; i < 18; i++){
            var text = $("#" + i);
            localStorage.setItem(("#" + i), text)
        }
        refresh()
    })
    //updates the page on load or after new submissions to keep it current
    function refresh(){
        for (var i = 8; i < 18; i++){
            var holder = localStorage.getItem("#" + i)
            if (holder.value !== ""){
                $("#" + i).val(holder);
            }
        }
    }
});