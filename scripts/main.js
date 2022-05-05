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