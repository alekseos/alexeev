/**
 * Created by viking_f on 06.04.2017.
 */

var sliderRight = function(){
    if ( $('.projectNames-Tofalaria').css('display') == 'block'){
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').fadeIn('slow');
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').fadeIn('slow');
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').hide();

    }else if($('.projectNames-Rha').css('display') == 'block'){
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').fadeIn('slow');
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').fadeIn('slow');
        $('.rightWorksBox-Pepper').hide();

    }else if($('.projectNames-Smartbody').css('display') == 'block'){
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').fadeIn('slow');

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').fadeIn('slow');
    }else{
        //names
        $('.projectNames-Tofalaria').fadeIn('slow');
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').fadeIn('slow');
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').hide();
    }
};


var sliderLeft = function(){
    if ( $('.projectNames-Tofalaria').css('display') == 'block'){
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').fadeIn('slow');

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').fadeIn('slow');

    }else if($('.projectNames-Rha').css('display') == 'block'){
        //names
        $('.projectNames-Tofalaria').fadeIn('slow');
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').fadeIn('slow');
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').hide();

    }else if($('.projectNames-Smartbody').css('display') == 'block') {
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').fadeIn('slow');
        $('.projectNames-Smartbody').hide();
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').fadeIn('slow');
        $('.rightWorksBox-Smart').hide();
        $('.rightWorksBox-Pepper').hide();
    }else{
        //names
        $('.projectNames-Tofalaria').hide();
        $('.projectNames-Rha').hide();
        $('.projectNames-Smartbody').fadeIn('slow');
        $('.projectNames-Peppertix').hide();

        //png
        $('.rightWorksBox-Tofa').hide();
        $('.rightWorksBox-Rha').hide();
        $('.rightWorksBox-Smart').fadeIn('slow');
        $('.rightWorksBox-Pepper').hide();
    }
};
