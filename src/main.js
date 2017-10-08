/**
 * Created by viking_f on 24.02.2017.
 */

//#1 function of switching buttons
$(window).ready(function(){
    $('.projectNames-Tofalaria').hide();
    $('.projectNames-Rha').hide();
    $('.projectNames-Smartbody').hide();
    $('.projectNames-Peppertix').hide();
    rightSideResize();
});

menuButtons();

$(window).resize(function(){
    rightSideResize();
});
