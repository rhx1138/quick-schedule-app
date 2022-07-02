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

// when save button is clicked, the text in the text area is saved to local storage and the page is refreshed to reflect the changes made
let eventText;
let eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".block").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

// render and display text from local storage to the page when the page is refreshed or loaded

function renderText () {   
    let saveText8 = JSON.parse(localStorage.getItem("8:00"));
    $("#8").val("");
    $("#8").val(saveText8);

    let saveText9 = JSON.parse(localStorage.getItem("9:00"));
    $("#9").val("");
    $("#9").val(saveText9);
    
    let saveText10 = JSON.parse(localStorage.getItem("10:00"));
    $("#10").val("");
    $("#10").val(saveText10);
    
    let saveText11 = JSON.parse(localStorage.getItem("11:00"));
    $("#11").val("");
    $("#11").val(saveText11);
    
    let saveText12 = JSON.parse(localStorage.getItem("12:00"));
    $("#12").val("");
    $("#12").val(saveText12);
    
    let saveText1 = JSON.parse(localStorage.getItem("13:00"));
    $("#13").val("");
    $("#13").val(saveText1);

    let saveText2 = JSON.parse(localStorage.getItem("14:00"));
    $("#14").val("");
    $("#14").val(saveText2);

    let saveText3 = JSON.parse(localStorage.getItem("15:00"));
    $("#15").val("");
    $("#15").val(saveText3);

    let saveText4 = JSON.parse(localStorage.getItem("16:00"));
    $("#16").val("");
    $("#16").val(saveText4);

    let saveText5 = JSON.parse(localStorage.getItem("17:00"));
    $("#17").val("");
    $("#17").val(saveText5);

    let saveText6 = JSON.parse(localStorage.getItem("18:00"));
    $("#18").val("");
    $("#18").val(saveText6);

    let saveText7 = JSON.parse(localStorage.getItem("19:00"));
    $("#19").val("");
    $("#19").val(saveText7);

    let saveText8P = JSON.parse(localStorage.getItem("20:00"));
    $("#20").val("");
    $("#20").val(saveText8P);

};




