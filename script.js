// moment.js    - https://momentjs.com/
// adds current time to the page 
let m = moment();
// console.log(m.format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(moment().format('LLLL'));

// $(document).ready( function() {
//     colorChange ();
//     renderText();
// });

