// // Import main SCSS for webpack compilation
// import './styles/main.scss'

// // Import all JS lib for webpack compilation
// import './scripts/lib'

// Import the app dependencies from npm repo
//import jquery from 'jquery'
//import bootstrap from 'bootstrap'

// Export for declarative use in your application
//export {jquery, bootstrap}


$('.carousel').carousel({
    interval: 2000
  })

$('#myCarousel').on('slide.bs.carousel', function () {
// do something…
})


function sendMail() {
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('textarea').val();
    window.location.href = 'mailto:ayotomiwasalau@gmail.com?subject=The subject - ' + name + ' (' + subject + ')' + '&body=' + message;
};