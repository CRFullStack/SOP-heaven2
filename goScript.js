// JavaScript source code
// This is for the Go source code


// TO-DO List
// to-do: find every picture in the file and loop through them
// to-do: Pre-load the top images ie. initial call, troubleshoot, callback. After one of the top images are clicked maybe preload the images for notes

$(document).ready(function () {

    $('.top-layer').on('click', function () {
        var $find_top = $(this).parents('div.top');
        var $container_class = $find_top.attr('class').split(/\s+/); // this finds all the classnames and puts them in a list.
        var $container = $container_class[0]; // first item in array
        var start_pic = senarios[$container]['top-layer-pic'];
        var $pic_row = $(this).closest('.' + $container).find('.pic-row');
        var $button_group = $(this).closest('.' + $container).find('.bl');
        var $image = $(this).closest('.' + $container).find('img')
        var $top_layer_btn = $(this).closest('.' + $container).find('.tl');
        

        if ($image.attr('src') != start_pic) {
            $image.attr('src', start_pic);
        }

        if ($find_top.hasClass('active')) {
            $find_top.removeClass('active');
            $pic_row.fadeOut('fast', function () {
                $pic_row.removeClass('display-it').addClass('start-hidden');
                $button_group.fadeOut('fast', function () {
                    $button_group.removeClass('display-it').addClass('start-hidden');
                    $top_layer_btn.removeClass('cfa-red').addClass('btn-primary').addClass('prime').text($container);
                });
            });
        }
        else {
            $find_top.addClass('active');
            $pic_row.fadeIn(1000, function () {
                $pic_row.removeClass('start-hidden').addClass('display-it');
                $button_group.fadeIn(1100, function () {
                    $button_group.removeClass('start-hidden').addClass('display-it');
                    $top_layer_btn.removeClass('prime').removeClass('btn-primary').addClass('cfa-red').html('Close the ' + $container + ' tab <span class="glyphicon glyphicon-remove" ></span>');
                });
                
            });
        }
    });

    // To-do: Make a function to show sub pics/notes after top layer pic is active
    $('.bottom-layer').on('click', function () {

        // this gets the id of the button that was clicked
        if ($(this).hasClass('start-pic')) { var buttonId = 'top-layer-pic'; }
        else { var buttonId = this.id; }

        var $container_class = $(this).parents('div.top').attr('class').split(/\s+/); // this finds all the classnames and puts them in a list.
        var $container = $container_class[0];
        var pic_to_show = senarios[$container][buttonId];
        var $found_img = $(this).closest('.' + $container).find('img');

        //find closest image tag and change the source
        $found_img.fadeOut('slow', function () {
            $found_img.attr('src', pic_to_show).fadeIn('fast');
        }) 
    });

    // To-do: Make a function that closes all open tabs
    $('.close-all').on('click', function () {
        console.log('The close all button was clicked!!!');
        var data = eval(senarios); // this will convert your json string to a javascript object
        for (var key in data) {
            if (data.hasOwnProperty(key)) { // this will check if key is owned by data object and not by any of it's ancestors
                var $container = $('.' + key); // find the class of the key
                var $top_layer_btn = $container.find('.tl'); // container top layer button
                var $pic_row = $container.find('.pic-row'); // container pic
                var $button_group = $container.find('.bl'); // container bottom layer button


                if ($container.hasClass('active')) { // if the container is active...Close it
                    $container.removeClass('active');
                    $top_layer_btn.removeClass('cfa-red').addClass('btn-primary').addClass('prime').text(key);
                    $pic_row.fadeOut('fast', function () {
                        $pic_row.removeClass('display-it').addClass('start-hidden');
                        $button_group.fadeOut('fast', function () {
                            $button_group.removeClass('display-it').addClass('start-hidden');
                        });
                    });
                }
            }
        }
    });
});