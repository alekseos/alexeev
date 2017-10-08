/**
 * Created by andrey on 07.03.17.
 */

//Hello, every one! This script consists from three buttons and three screens, which open by click.

function menuButtons(){
    $('#aboutButton').on('click',function(){
        //blocks in the right side
        $('.rightSide').fadeIn('slow');
        $('.rightAbout').fadeIn('slow');
        $('.rightWorks').hide();
        $('.rightFeedback').hide();


        //buttons in the middle (names) side
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();

        //buttons in the left side
        $('.about').removeClass('menu-works--passive');
        $('.about').addClass('menu-works--active');
        $('.works').addClass('menu-works--passive');
        $('.feedback').addClass('menu-feedback--passive');


        //arrows in the left side
        $('.leftSideAbout .fa').fadeIn('slow');
        $('.leftSideWorks .fa').hide();
        $('.leftSideFeedback .fa').hide();

        //styles
        if($(window).width() < 1140){
            $('.leftSide').css('height','20%');
            console.log('Hi1!');
        }
    });

    $('#worksButton').on('click',function(){
        //blocks in the right side
        $('.rightSide').fadeIn('slow');
        $('.rightWorks').fadeIn('slow');
        $('.rightAbout').hide();
        $('.rightFeedback').hide();
        $('.rightWorksBox-Tofa').fadeIn('slow');


        //buttons in the middle (names) side
        $('.projectNames-Tofalaria').fadeIn('slow');
        setTimeout(function (){
            $('.rightWorks').fadeIn('slow');
        },400);


        //buttons in the left side
        $('.works').removeClass('menu-works--passive');
        $('.about').addClass('menu-works--passive');
        $('.works').addClass('menu-works--active');
        $('.feedback').addClass('menu-feedback--passive');


        //arrows in the left side
        $('.leftSideAbout .fa').hide();
        $('.leftSideWorks .fa').fadeIn('slow');
        $('.leftSideFeedback .fa').hide();

        //styles
        if($(window).width() < 1140){
            $('.leftSide').css('height',900);
            console.log('Hi1!');
        }
    });

    $('#feedbackButton').on('click',function(){
        //blocks in the right side
        $('.rightSide').fadeIn('slow');
        $('.rightFeedback').fadeIn('slow');
        $('.rightWorks').hide();
        $('.rightAbout').hide();


        //buttons in the middle (names) side
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();


        //buttons in the left side
        $('.feedback').removeClass('menu-feedback--passive');
        $('.about').addClass('menu-works--passive');
        $('.works').addClass('menu-works--passive');
        $('.feedback').addClass('menu-feedback--active');


        //arrows in the left side
        $('.leftSideAbout .fa').hide();
        $('.leftSideWorks .fa').hide();
        $('.leftSideFeedback .fa').fadeIn('slow');

        //resize event
        var heightWindow = $(window).height();
        var heightRight = $('.rightFeedback').height();
        var difference = (heightWindow - heightRight)/2;

        $('#rightResize').css('paddingTop',difference);

        //styles
        if($(window).width() < 1140){
            $('.leftSide').css('height','20%');
            console.log('Hi1!');
        }
    });
}