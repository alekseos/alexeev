/**
 * Created by viking_f on 06.04.2017.
 */

var rightSideResize = function(){
    var heightWindow = $(window).height();
    var heightRight = $('.rightFeedback').height();
    var difference = (heightWindow - heightRight)/2;

    $('#rightResize').css('paddingTop',difference);
};