const urls = [
    "https://www.codecademy.com",
    "https://learn.jquery.com/about-jquery/how-jquery-works/",
    "https://www.flaticon.com/",
    "https://www.thebestdesigns.com/"
];

let escCounter = 0;
let switchHTML;
$.get(urls[Math.floor(Math.random() * urls.length)], function(data) {
  switchHTML = data;
});
document.body.onkeydown = function(event) {
    if (event.keyCode === 27) {
        escCounter += 1;
        if (escCounter >= 2) {
          document.write(switchHTML);
        } else {
            setTimeout(function() { escCounter = 0; }, 500)
        }
    }
}
