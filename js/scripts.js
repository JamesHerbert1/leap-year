$(document).ready(function() {
    $("form#leap-year").submit(function(event) {
        event.preventDefault();
        var year = $("input#year").val();
        console.log(year);
        
        var intYear = parseInt(year)
        var result = leapYear(intYear);
        $("#result").text(result);

    });
});

var leapYear = function(year){
    return false;
};