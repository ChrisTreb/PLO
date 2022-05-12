// Loader
$(window).on('load', function() {
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    setTimeout(() => {
        $('#loader').fadeOut(500);
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }, 1000);
})

// Menu
jQuery('.burger-button').click(function() {
    jQuery("#menu").slideToggle();
    jQuery(this).toggleClass('open');
});
// Cards
jQuery(document).ready(function() {
    jQuery('.card-content').click(function() {
        jQuery(this).children('.card-hidden-content').slideToggle();
    });
});