$(window).scroll(function(){
    if ($(this).scrollTop() > 240) {
       $('#header').addClass('fade-in');
       $('#header').removeClass('fade-out');
       console.log('dddd')

    } else {
       $('#header').removeClass('fade-in');
       $('#header').addClass('fade-out');

    }
});