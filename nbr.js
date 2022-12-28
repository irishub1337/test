$(function(){
    $(window).on("load", function () {
        $('#preloader').delay(350).fadeOut('slow', function () {
            $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
        });
    });



         $('.social-media [data-toggle="tooltip"]').tooltip({
            placement: 'bottom'
        });
         $('footer .social_media_footer [data-toggle="tooltip"]').tooltip({
            placement: 'top'
        });

         var button = document.getElementById( 'menu-toggle' );
         button.onclick = function() {
            if ( -1 !== button.className.indexOf( 'opened' ) ) {
                button.className = button.className.replace( ' opened', '' );
                button.setAttribute( 'aria-expanded', 'false' );
            } else {
             button.className += ' opened';
             button.setAttribute( 'aria-expanded', 'true' );
         }
     };
         var button_tog = $('.menu-toggle');
         button_tog.on("click", function () {
            if ($('.menu-toggle').hasClass('opened')) {
                $('.holder').addClass('active');
            } else {
                $('.holder').removeClass('active');
            }
        });

         $('#home nav a').on("click", function() {
            $('.holder').removeClass('active');
            $('button.menu-toggle').removeClass('opened')
         });

          $('.items_portfolio').mixItUp();


         $('nav a[href*="#"]:not([href="#"]),.scroll_mouse a[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


         var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,

                    duration: 300, 
                    easing: 'ease-in-out', 

                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        magnifPopup();




         $('.project_controls button').on("click", function () {
            $('.project_controls button').removeClass('active');
            $(this).addClass('active');
        });


         $(".testimonial_items").owlCarousel({
            singleItem:true,
            pagination : true
        });


         if ($(window).width() < 691) {
            $('#home nav a').on("click", function () {
                $('.holder').removeClass('active');
                $('button.menu-toggle').removeClass('opened');
            })
        }


         $('.counter-num').counterUp({
            delay: 10,
            time: 1000
        });

         
         new WOW().init();


         $("form").on("submit", function(e) {
            e.preventDefault();
            var form = $(this);
            var button = form.children("button[type='submit']");
            var msg = form.serialize();
            var submitButton = form.children("button[type='submit']").html();
            if (submitButton == undefined) {
                var idForm = form.attr("id");
                var button = $("#" + idForm + " button");
                var submitButton = $("#" + idForm + " button").html();
            }
            $.ajax({
                success: function(data) {
                    if (data != "") {
                        $("input, textarea").val("");
                        button.html(data).addClass("");
                        setTimeout(function() {
                            button.html(submitButton).removeClass("");
                        }, 5000);
                        $('.sent_message').fadeIn();
                        $('.sent_message').fadeOut(5000);
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        });
});


function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //По надобности условие ниже повторить с minutes и hours
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);