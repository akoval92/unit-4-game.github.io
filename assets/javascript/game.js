$(document).ready(function() {

    var goal = Math.floor(Math.random() * 99) + 1
    $("#goalSpan").text(goal);
                         
    var darkCrystal = Math.floor(Math.random() * 20) + 1;
    var icyCrystal = Math.floor(Math.random() * 20) + 1;
    var purpleCrystal = Math.floor(Math.random() * 20) + 1;
    var blueCrystal = Math.floor(Math.random() * 20) + 1;
    var wins = 0;
    var losses = 0;
    var total = 0;
    
    $("#winSpan").text(wins);
    $("#loseSpan").text(losses);
    
    
    
    $("#button-1").attr("value", darkCrystal);
    $("#button-2").attr("value", icyCrystal);
    $("#button-3").attr("value", purpleCrystal);
    $("#button-4").attr("value", blueCrystal);
    
    $(".pic").on("click", function(){
            console.log("crystal value: ", $(this).attr("value"));
            total = total + parseInt($(this).attr("value"))
            console.log("total value: ", total)
            $("#totalSpan").text(total);
    
                    if (total === goal) {
                    wins++;
                    $("#winSpan").text(wins);
                    alert("YOU WIN!!! HOORAY!!!")
                    reset()
            }
                    else if (total > goal) {
                    losses++;
                    $("#loseSpan").text(losses);
                    alert("YOU LOSE!!! WA Wa waaaaaa!!!")
                    reset()
            } 
    })
    function reset() {
            darkCrystal = Math.floor(Math.random() * 12) + 1;
            icyCrystal = Math.floor(Math.random() * 12) + 1;
            purpleCrystal = Math.floor(Math.random() * 12) + 1;
            blueCrystal = Math.floor(Math.random() * 12) + 1;
    
            $("#button-1").attr("value", darkCrystal);
            $("#button-2").attr("value", icyCrystal);
            $("#button-3").attr("value", purpleCrystal);
            $("#button-4").attr("value", blueCrystal);
    
            total = 0
            goal = Math.floor(Math.random() * 150) + 20
    
            $("#totalSpan").text(total);
            $("#goalSpan").text(goal);
            
    }
    
    });