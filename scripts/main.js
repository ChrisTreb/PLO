jQuery('.burger-button').click(function() {
    jQuery("#menu").slideToggle();
});

jQuery(document).ready(function() {
    jQuery('.card-content').click(function() {
        jQuery(this).children('.card-hidden-content').slideToggle();
    });
});