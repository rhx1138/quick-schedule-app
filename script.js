// moment.js    - https://momentjs.com/
// adds current time to the page 
let m = moment();
// console.log(m.format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(moment().format('LLLL'));

$(document).ready(function () {
    colorChange();
    renderText();
});

// function to change color of the text area depending on time of day
function colorChange() {

    let currentTime = moment().hours();
    $(".block").each(function () {
        let scheduledTime = parseInt($(this).attr("id"));
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}