$('#t1').click(function(e) {
    e.preventDefault();    
    change('Gato!!!', 'img/nyancat.gif');
});

$('#t2').click(function(e) {
    e.preventDefault();    
    change('Homer!!!', 'img/homer_s.jpg');
});

$('#t3').click(function(e) {
    e.preventDefault();    
    change('Homer se mueve!!!', 'img/homer.gif');
});

$('#t4').click(function(e) {
    e.preventDefault();    
    change('Yo!!!', 'img/yo.png');
});

$('#t5').click(function(e) {
    e.preventDefault();    
    change('El Albert!!!', 'img/albert.png');
});

$('#t6').click(function(e) {
    e.preventDefault();    
    change('El bueno de Bill!!!', 'http://fillmurray.com/200/200');
});

$('#chosenPlayer button').click(function() {
    $('#choosePlayer').removeClass('noDisplay');
    $('#chosenPlayer').addClass('noDisplay');
});

function change (text, image) {    
    $('#choosePlayer').addClass('noDisplay');
    $('#chosenPlayer').removeClass('noDisplay');
    $('#chosenPlayer h2').html(text);
    $('#chosenPlayer .image').html('');
    $('#chosenPlayer .image').append('<img id="imagen" src="' + image + '">');
}