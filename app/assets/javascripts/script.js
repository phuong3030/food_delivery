(function ($) {
  $(document).load(function () {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {		
      $('.box_html.buttons-top a > div').css('background', '#ffffff');
    }
  });
});

/* SMOOTH SCROLLING
 ========================================================*/

(function ($) {
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	
  $(window).load(function () {
    if (isChrome || isSafari) {
          $.srSmoothscroll({
              step: 90,
              speed: 550
          });
    }
  });
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    $(document).ready(function () {
      $().UItoTop({easingType: 'easeOutQuart'});
    });
})(jQuery);

/*
 Stick up menus
 ========================================================*/

;
(function ($) {
	if ($('body').width() > 991 ) {
    var o = $('html');
    var menu = $('#stuck');
    $(window).load(function () {
        menu.scrollFix({
            style: false
        });
    });
	}
})(jQuery);



/* Unveil
 ========================================================*/
;
(function ($) {
    var o = $('.lazy img');

    if (o.length > 0) {
        $(document).ready(function () {
            $(o).unveil(0, function () {
                $(this).load(function () {
                    $(this).parent().addClass("lazy-loaded");
                })
            });
        });

        $(window).load(function () {
            $(window).trigger('lookup.unveil');
            if ($('.nav-tabs').length) {
                $('.nav-tabs').find('a[data-toggle="tab"]').click(function () {
                    setTimeout(function () {
                        $(window).trigger('lookup.unveil');
                    }, 400);
                })
            }
        });

    }
})(jQuery);

/* Magnificent
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    if (o.length > 0) {
        $(document).ready(function () {

            o.find('li:first-child a').addClass('active');

            $('#product-image').bind("click", function (e) {
                var imgArr = [];
                o.find('a').each(function () {
                    img_src = $(this).data("image");

                    //put the current image at the start
                    if (img_src == $('#product-image').find('img').attr('src')) {
                        imgArr.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    else {
                        imgArr.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                });
                $.fancybox(imgArr);
                return false;
            });


            o.find('[data-image]').click(function (e) {
                e.preventDefault();
                o.find('.active').removeClass('active');
                var img = $(this).data('image');
                $(this).addClass('active');
                $('#product-image').find('.inner img').each(function () {
                    $(this).attr('src', img);
                })
            })

        });

    }
})
(jQuery);


/* Toggle
 ========================================================*/

(function ($) {
    var o = $('.toggle');
    $(document).ready(function () {
        $(document).on("click",".toggle",function (e) {
            e.preventDefault();
            var tmp = $(this);
            o.each(function () {
                if ($(this).parent().hasClass('active') && !$(this).is(tmp)){
                    $(this).parent().find('.toggle_cont').slideToggle();
                    $(this).parent().removeClass('active');
                }
            });           
           
            $('.cart').removeClass('open');
			$(this).parent().toggleClass('active');
            $(this).parent().find('.toggle_cont').slideToggle();	
			
        });
		
		$(document).mouseup(function (e) {
			var container = $('.toggle-wrap');
			if (container.has(e.target).length === 0 && container.hasClass('active') && !$(this).is(container)){
				container.find('.toggle_cont').slideToggle();
				container.removeClass('active');
			}
		});
		
    });
})(jQuery);

/* Bx Slider
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    var o2 = $('#gallery');

    if (o.length) {
        $(document).ready(function () {
            $('#image-additional').bxSlider({
                mode: 'vertical',
                pager: false,
                controls: true,
                slideMargin: 13,
                minSlides: 5,
                maxSlides: 5,
                slideWidth: 99,
                nextText: '<i class="fa fa-chevron-down"></i>',
                prevText: '<i class="fa fa-chevron-up"></i>',
                infiniteLoop: false,
                adaptiveHeight: true,
                moveSlides: 1
            });
        });
    }

    if (o2.length) {
        $(document).ready(function () {
            $('#gallery').bxSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 1,
                infiniteLoop: false,
                moveSlides: 1
            });
        });
    }

})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.quickview');
    var o2 = $('#default_gallery');
    if (o.length > 0 || o2.length > 0) {
    }

    if (o.length) {
        $(document).ready(function () {
            o.fancybox({
                maxWidth: 800,
                maxHeight: 600,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        });
    }

})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.related-slider');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                // Most important owl features
                items: 4,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [991, 3],
                itemsTablet: [767, 2],
                itemsTabletSmall: false,
                itemsMobile: [480, 1],

                // Navigation
                pagination: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            });
        });
    }
})(jQuery);


/* Box Carousel
 ========================================================*/
;
(function ($) {
    var o = $('#content .box-carousel');
    if (o.length > 0) {
        $(document).ready(function () {
            $.each(o, function () {
                if ($(this).parents('aside').length == 0) {
                    o.owlCarousel({
                        // Most important owl features
                        items: 4,
                        itemsCustom: false,
                        itemsDesktop: [1199, 4],
                        itemsDesktopSmall: [991, 3],
                        itemsTablet: [767, 2],
                        itemsTabletSmall: false,
                        itemsMobile: [480, 1],

	// Navigation
    pagination: false,
	navigation : true,
	navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				}); }
        }); });
    }
})(jQuery);

/* GREEN SOCKS
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.find('body').hasClass('common-home')) {
		
        function listBlocksAnimate(block, element, row, offset, difEffect) {
		if ($(block).length) {
			var i = 0;
			var j = row;
			var k = 1;
			var effect = -1;

			$(element).each(function () {
				i++;

				if (i > j) {
					j += row;
					k = i;
					effect = effect * (-1);
				}

				if (effect == -1 && difEffect == true) {
					ef = TweenMax.from(element + ':nth-child(' + i + ')', .8, {
						alpha: 0,
						ease: Power1.easeOut
					})

				} else {
					ef = TweenMax.from(element + ':nth-child(' + i + ')', .8, {
						alpha: 0,
						ease: Power1.easeOut
					})
				}

				var scene_new = new ScrollScene({
					triggerElement: element + ':nth-child(' + k + ')',
					offset: offset,
				}).setTween(ef)
					.addTo(controller)
					.reverse(false);
			});
		}}

        function listTabsAnimate(element) {
            if ($(element).length) {
                TweenMax.staggerFromTo(element, 0.3, {alpha: 0, rotationY: -90, ease: Power1.easeOut}, {
                    alpha: 1,
                    rotationY: 0,
                    ease: Power1.easeOut
                }, 0.1);
            }
        }

        $(document).ready(function () {
            controller = new ScrollMagic();
        });
		
		
		$(window).load(function () {	
		
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		
		if (width > 767) {	   
			listBlocksAnimate('.common-home .featured', '.common-home .featured .product-layout > div', 6, -100, true);			
		}	
		
		if ($(".block-banners-home").length) {
			var welcome = new TimelineMax();            
			welcome.from(".block-banners-home > .row > div:nth-child(1)", .5, {marginLeft: -200, autoAlpha: 0})
			.from(".block-banners-home > .row > div:nth-child(2)", .5, {marginTop: 200, autoAlpha: 0})
			.from(".block-banners-home .row .col-sm-6 .row > div:nth-child(1)", .5, {marginTop: 100, autoAlpha: 0})
			.from(".block-banners-home .row .col-sm-6 .row > div:nth-child(2)", .5, {marginTop: 100, autoAlpha: 0})
			;
			var scene_welcome = new ScrollScene({
				triggerElement: ".block-banners-home",
				offset: -200
			}).setTween(welcome).addTo(controller).reverse(false);
		}
		
        });
       
    }
})(jQuery);



/* Swipe Menu
 ========================================================*/
;
(function ($) {
    $(document).ready(function () {
        $('#page').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                return false
            }
        })

        $('.swipe-control').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                $(this).removeClass('active');
                return false
            }
            else {
                $(this).parents('body').addClass('ind');
                $(this).addClass('active');
                return false
            }
        })
    });

})(jQuery);

$(document).ready(function () {
    /***********CATEGORY DROP DOWN****************/
	 
    $(".menu-icon").on("click", function () {
        $(".menu-gadget .menu").slideToggle();
        $(this).toggleClass("active");
    });
    $('.menu-gadget .menu').find('li > ul').before('<i class="fa fa-chevron-down"></i>').parent('li').addClass('parent');
    $('.menu-gadget .menu li i').on("click", function () {
        if ($(this).hasClass('fa-chevron-up')) {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down').parent('li').find('> ul').slideToggle();
        }
        else {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up').parent('li').find('> ul').slideToggle();
        }
    });
	
	$(document).mouseup(function (e) {
			var container = $('.menu-gadget');
			if (container.has(e.target).length === 0 && container.find('.menu-icon').hasClass('active') && !$(this).is(container)){
				container.find('.menu').slideToggle();
				container.find('.menu-icon').removeClass('active');
			}
		});
	
	$('#cart .total tbody tr').last().addClass('last');
	
    if ($('.breadcrumb').length) {
		$('.breadcrumb li').last().addClass('last');
        var o = $('.breadcrumb li:last-child');
        var str = o.find('a').html();
        o.find('a').css('display', 'none');
        o.append('<span>' + str + '</span>');
    };
	
		
});


$(document).ready(function () {
    $(".menu-top > span").on("click", function () {
        $(".menu-top #tm_menu").slideToggle();
        $(this).toggleClass("active");		
    });   
});

$(window).load(function () {
	 
	 if ($('.social-list').length) {
		$('.social-block').append($('.social-list'));
	 };
	 
});

var flag = true;

function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if ($('aside').length) {
        var leftColumn = $('aside');
    } else {
        return false;
    };
			
    if (width > 767) {
        if (!flag) {
            flag = true;
            leftColumn.insertBefore('#content');
            $('.col-sm-3 .box-heading').unbind("click");

            $('.col-sm-3 .box-content').each(function () {
                if ($(this).is(":hidden")) {
                    $(this).slideToggle();
                }
            })
        }
		
    } else {
        if (flag) {
            flag = false;
            leftColumn.insertAfter('#content');

            $('.col-sm-3 .box-content').each(function () {
                if (!$(this).is(":hidden")) {
                    $(this).parent().find('.box-heading');
                }
            });

            $('.col-sm-3 .box-heading').bind("click", function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().find('.box-content').slideToggle();
                }
                else {
                    $(this).addClass('active');
                    $(this).parent().find('.box-content').slideToggle();
                }
            })
        }
    }
}

$(window).load(respResize);
$(window).resize(function () {
    clearTimeout(this.id);
    this.id = setTimeout(respResize, 500);
});
;

