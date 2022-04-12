var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function(){
$("a").on('click', function(event) {
if (this.hash !== "") {
event.preventDefault();
var hash = this.hash;
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){
window.location.hash = hash;
});
}
});
});

$("h5").click(function(){
    $(this).css({
    "color": "red",
    });enviarCorreo
    });

$(document).ready(function(){
    $("#enviarCorreo").on('click', function(){
        alert("El correo fue enviado correctamente...");
    });
});