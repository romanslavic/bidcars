// Start header search
const nextYear = new Date().getFullYear() + 1;

$(document).ready(function() {
        
//        Counter start
//    
//      function initializeCounter() {
//        let initialValue = $('.numbers').data('value').toString().padStart($('.numbers .digit').length, '0');
//        let $digitSpans = $('.numbers .digit');
//
//        $digitSpans.each(function(index) {
//          $(this).text(initialValue[index]);
//        });
//      }
//
//      function updateCounter() {
//        let $digitSpans = $('.numbers .digit');
//        let $nextSpans = $('.numbers .next');
//        let currentValue = '';
//
//        $digitSpans.each(function() {
//          currentValue += $(this).text();
//        });
//
//        let nextValue = parseInt(currentValue) + 1;
//        let nextValueString = nextValue.toString().padStart($digitSpans.length, '0');
//
//        $nextSpans.each(function(index) {
//          $(this).text(nextValueString[index]);
//          if ($digitSpans.eq(index).text() !== nextValueString[index]) {
//            $(this).parent().addClass('animate');
//          }
//        });
//
//        setTimeout(function() {
//          $digitSpans.each(function(index) {
//            let $digit = $(this);
//            let $next = $digit.next('.next');
//
//            if ($digit.text() !== $next.text()) {
//              $digit.text($next.text());
//            }
//            $next.parent().removeClass('animate');
//          });
//        }, 500);
//      }
//
//      initializeCounter();
//
//      setInterval(updateCounter, 1000);
    
//    Counter end
    
    function preloadHeaderSearchPage(url) {
        $.ajax({
          url: url,
          method: 'GET',
          success: function(response) {
            console.log('Page preloaded successfully: ' + url);
          },
          error: function() {
            console.log('Error preloading the page: ' + url);
          }
        });
    }

    var $crossSearch = $('.cross_search');
    if($crossSearch.length) {
        window.CrossCarsMode = 'current';
        window.CrossCars = null;
        window.CrossCarsArchived = null;
             
        $.when( $.ajax('https://bid.cars/app/search/tips') ).done(function ( value ) {
            window.CrossCars = JSON.parse(value);
        });

        $.when( $.ajax('https://bid.cars/app/search/archived/tips') ).done(function ( value ) {
            window.CrossCarsArchived = JSON.parse(value);
        });

        var $sRes = $crossSearch.find('.search-results ul');

        // Update results
        $crossSearch.find('input[type=text]').on('input', function (e) { // .on('keyup', function (e) {
            if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Control") {
                var val = $(this).val(),
                    resCount = 0,
                    preloadType,
                    preloadMake,
                    preLoadModel;

                console.log('Wykonaj bo ' + e.key);
                if (isValidSearchQuery(val)) {
                    let requestUrl = '';
                    
                    if (window.CrossCarsMode === 'archived') {
                        requestUrl = `https://bid.cars/app/search/${language}/vin-lot/${val.trim()}/true`;
                    } else {
                        requestUrl = `https://bid.cars/app/search/${language}/vin-lot/${val.trim()}/false`;
                    }
                    
                    $.get(requestUrl, (data) => {
                        const { results, url = '' } = JSON.parse(data);
                    
                        if (results == 1 || results == 2) {
                            preloadPage(url);
                        
                            setTimeout(function() {
                                window.open(url, '_self');
                            }, 500);
                            return;
                        }
                    });
                }

                if(val.length >= 3) {
                    $sRes.html('');

                    var carsArray = window.CrossCarsMode === 'archived' ? window.CrossCarsArchived : window.CrossCars;
                    $.each(carsArray, function (index, value) {
                        if (value.name.toLowerCase().indexOf(val.toLowerCase()) >= 0) {
                            var typeFixed = value.type.split(' ').join('+');
                            var makeFixed = value.make.split(' ').join('+');
                            var modelFixed = value.model.split(' ').join('+');

                            $sRes.append('<li class="autocomplete-item"><a href="#" data-type="'+ typeFixed +'" data-make="'+ makeFixed +'" data-model="'+ modelFixed +'">'+ value.make + '<span class="model">' + value.model + '</span>' + '<span class="count">' + value.count + '</span></a></li>');
                            preloadType = typeFixed;
                            preloadMake = makeFixed;
                            preLoadModel = modelFixed;
                            resCount++;
                        }
                    });

                    $sRes.parent().css({ 
                        'opacity': 1,
                        'visible': 'visible'
                    });
                } else {
                    $sRes.html('');

                    $sRes.parent().css({
                        'opacity': 0,
                        'visible': 'hidden'
                    });

                }
                $crossSearch.find('.cont_search').html(resCount);
                if (resCount == 0) {
                    $('.search-results').hide();
                    //$('.cover-bg').removeClass('visible');
                    $("header.header_top .search .input_wrapper span.cont_search").css({
                    opacity:0,
                    visibility:'hidden'
                    });
                } else {
                    $('.search-results').show();
                    //$('.cover-bg').addClass('visible');
                    $("header.header_top .search .input_wrapper span.cont_search").css({
                    opacity:1,
                    visibility:'visible'
                    });
                }

                if (resCount == 1) {
                    if(window.CrossCarsMode == 'archived') {
                        preloadHeaderSearchPage(baseLangUrl + "search/archived/results?search-type=filters&type=" + preloadType + "&make=" + preloadMake + '&model=' + preLoadModel + '&year-from=1900&year-to=' + nextYear + '&auction-type=All');
                        preloadHeaderSearchPage(baseUrl + "app/search/archived/request?search-type=filters&type=" + preloadType + "&make=" + preloadMake + '&model=' + preLoadModel + '&year-from=1900&year-to=' + nextYear + '&auction-type=All');
                    } else {
                        preloadHeaderSearchPage(baseLangUrl + "search/results?search-type=filters&status=All&type=" + preloadType + "&make=" + preloadMake + '&model=' + preLoadModel + '&year-from=1900&year-to=' + nextYear + '&auction-type=All');
                        preloadHeaderSearchPage(baseUrl + "app/search/request?search-type=filters&status=All&type=" + preloadType + "&make=" + preloadMake + '&model=' + preLoadModel + '&year-from=1900&year-to=' + nextYear + '&auction-type=All');
                    }
                }
            }
        });
    
        $crossSearch.find('input[type=text]').on('input', function (e) { // .on('keyup', function (e) {
            if (e.key !== "Escape" && e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "Enter") {
                console.log('Keyup event triggered');
                $('.cover-bg').addClass('visible');
                $("header.header_top .search-results, header.header_top .search .input_wrapper span.cont_search").css({
                    opacity: 1,
                    visibility: 'visible'
                });
            }
        });

        // Search by clicking dropdown item
        $crossSearch.on('click', '.search-results a', function (e) {
            e.preventDefault();
            var type = $(this).attr('data-type').split(' ').join('+');
            var make = $(this).attr('data-make').split(' ').join('+');
            var model = $(this).attr('data-model').split(' ').join('+');

            if(window.CrossCarsMode == 'archived')
                location.href = baseLangUrl + "search/archived/results?search-type=filters&type=" + type + "&make=" + make + '&model=' + model + '&year-from=1900&year-to=' + nextYear + '&auction-type=All';
            else
                location.href = baseLangUrl + "search/results?search-type=filters&status=All&type=" + type + "&make=" + make + '&model=' + model + '&year-from=1900&year-to=' + nextYear + '&auction-type=All';
        });

        // Search by enter key
        $('#search_field').on('keypress', function(e) {
            if (e.which == 13) { // Enter key
                performSearch();
            }
        });

        // Search by search icon
        $('#submit_search').on('click', function() {
            performSearch();
        });

        // Close dropdown by clicking background
        $(document).on('click', '.cover-bg.visible', function() {
            $(this).removeClass('visible');
            $("header.header_top .search-results").css({
                opacity: 0,
                visibility: 'hidden'
            });
            $("header.header_top .search .input_wrapper span.cont_search").css({
                opacity: 0,
                visibility: 'hidden'
            });
            $('input.search_top').val('');
        });

        // Close dropdown by clicking ESC
        $(document).keydown(function(e) {
            if (e.key == "Escape") {
                $('.cover-bg').removeClass('visible');
                $("header.header_top .search-results").css({
                    opacity: 0,
                    visibility: 'hidden'
                });
                $("header.header_top .search .input_wrapper span.cont_search").css({
                    opacity: 0,
                    visibility: 'hidden'
                });
                $('input.search_top').val('');
            }
        });

        // Current / Archived button
        $('.type_selector').on('click', '.current, .archive', function(e) {
            e.preventDefault(); // Prevent default anchor action
            var $clickedButton = $(this); // The clicked button
            var targetClass = $clickedButton.data('target'); // Gets the target class from data attribute

            if(window.CrossCarsMode == 'current')
                window.CrossCarsMode = 'archived';
            else
                window.CrossCarsMode = 'current';

            $sRes.html('');
            $crossSearch.find('.cont_search').html(0);
            $crossSearch.find('#search_field').val('');

            toggleButton($clickedButton, targetClass);
        });
    }
});

// Up / Down key handling
$(document).ready(function() {
    let currentIndex = -1;
    let currentHighlightedPosition = 0;
    let scrollCalculation = 0;
    const $searchField = $("header.header_top #search_field");
    const $searchResults = $("header.header_top .search-results");

    $searchField.on('keydown', function(e) {
        var dropdownItems = $searchResults.find(".autocomplete-item a");

        if (e.key === "ArrowDown") {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % dropdownItems.length;
            highlightItem(dropdownItems, currentIndex);

            if(currentHighlightedPosition >= 5)
                currentHighlightedPosition = 5;
            else
                currentHighlightedPosition++;
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + dropdownItems.length) % dropdownItems.length;
            highlightItem(dropdownItems, currentIndex);

            if(currentHighlightedPosition == 0)
                currentHighlightedPosition = 5;
            else
                currentHighlightedPosition--;
        }

        console.log('currentHighlightedPosition: ' + currentHighlightedPosition);

        scrollCalculation = (currentIndex*41) - (currentHighlightedPosition*41);
        $searchResults.scrollTop(scrollCalculation);
    });

    function highlightItem(dropdownItems, index) {
        dropdownItems.removeClass('highlighted');
        dropdownItems.eq(index).addClass('highlighted');
        const selectedItem = dropdownItems.eq(index);
        //$searchField.val(selectedItem.data('make') + ' ' + selectedItem.data('model'));

        var makeString = typeof selectedItem.data('make') === 'string' ? selectedItem.data('make').replace(/\+/g, ' ') : '';
        var modelString = typeof selectedItem.data('model') === 'string' ? selectedItem.data('model').replace(/\+/g, ' ') : '';

        $searchField.val(makeString + ' ' + modelString);
    }
});

function toggleButton($button, targetClass) {
    // Hide clicked button and show target
    $button.hide().removeClass('active');
    $('.type_selector .' + targetClass).show().addClass('active');
}

function performSearch() {
    if (!$('#search_field').val().length) {
        if(window.CrossCarsMode == 'archived')
            location.href = `${baseLangUrl}search/archived/results?search-type=filters&status=All&type=Automobile&make=All&model=All&year-from=1900&year-to=${nextYear}&auction-type=All`;
        else
            location.href = `${baseLangUrl}search/results?search-type=filters&status=All&type=Automobile&make=All&model=All&year-from=1900&year-to=${nextYear}&auction-type=All`;

        return;
    }

    var searchType = 'typing';
    var searchFieldValue = $('#search_field').val().toLowerCase();

    $('.search-results .autocomplete-item').each(function() {
        var $link = $(this).find('a');
        var type = $link.data('type');
        var make = $link.data('make');
        var model = $link.data('model');

        //var combinedValue = (make + ' ' + model).toLowerCase();
        var makeString = typeof make === 'string' ? make.replace(/\+/g, ' ') : '';
        var modelString = typeof model === 'string' ? model.replace(/\+/g, ' ') : '';
        
        var combinedValue = (makeString + ' ' + modelString).toLowerCase();

        /*console.log('combinedValue' + combinedValue);
        console.log('searchFieldValue' + searchFieldValue);*/

        if (searchFieldValue === combinedValue) {
            searchType = 'filters';

            if(window.CrossCarsMode == 'archived')
                location.href = `${baseLangUrl}search/archived/results?search-type=filters&type=${type}&make=${make}&model=${model}&year-from=1900&year-to=${nextYear}&auction-type=All`;
            else
                location.href = `${baseLangUrl}search/results?search-type=filters&status=All&type=${type}&make=${make}&model=${model}&year-from=1900&year-to=${nextYear}&auction-type=All`;
            
            return false; // Break out of each loop
        } else if (searchFieldValue === make.toLowerCase()) {
            searchType = 'filters';

            if(window.CrossCarsMode == 'archived')
                location.href = `${baseLangUrl}search/archived/results?search-type=filters&type=${type}&make=${make}&year-from=1900&year-to=${nextYear}&auction-type=All`;
            else
                location.href = `${baseLangUrl}search/results?search-type=filters&status=All&type=${type}&make=${make}&year-from=1900&year-to=${nextYear}&auction-type=All`;
            return false; // Break out of each loop
        }
    });

    if (searchType === 'typing') {
        var searchFieldQuery = searchFieldValue.split(' ').join('+');

        if(window.CrossCarsMode == 'archived')
            location.href = `${baseLangUrl}search/archived/results?search-type=typing&query=${searchFieldQuery}`;
        else
            location.href = `${baseLangUrl}search/results?search-type=typing&query=${searchFieldQuery}&status=All`;
    }
}

function isValidSearchQuery(query = '') {
    query = query.trim();
    
    if (query.length === 17) {
      const alphanumeric = new RegExp(/^[a-z0-9]+$/i);
  
      return alphanumeric.test(query);
    }
  
    if ((query.length === 8 || query.length === 9) && /^\d+$/.test(query)) {
      return true;
    }
  
    if (query.length === 10 || query.length === 11) {
      return query[1] === '-' && (query[0] === '1' || query[0] === '0');
    }
  
    return false;
}
  
function preloadPage(url) {
    $.ajax({
      url: url,
      method: 'GET',
      success: function(response) {
        console.log('Page preloaded successfully');
      },
      error: function() {
        console.log('Error preloading the page');
      }
    });
}
// End header search

// Start menu
$(document).ready(function() {
    if($(window).width() <= 1024) {
        $('li.child.devided.mega-menu > a').on('click', function(e) {
            console.log('Search & Bid');
            e.stopPropagation();
            e.preventDefault();

             $(this).parent().find('.dropdown > ul').toggle();
        });

        $('li.child.devided.mega-menu > div.dropdown > ul > li > a').on('click', function(e) {
            console.log('Search & Bid -> Next');
            e.stopPropagation();
            e.preventDefault();

             $(this).find('.dropdown > ul').toggle();
        });


        $('li.child:not(.mega-menu) > a').on('click', function(e) {
            console.log('Proces zakupu');
            e.stopPropagation();
            e.preventDefault();

             $(this).parent().children('ul').toggle();
        });
        
//        $('header.header_top .mobile_menu li.dropdown_user a.user-buttons.user-menu').on('click', function(e) {
//            console.log('User menu');
//            e.stopPropagation();
//            e.preventDefault();
//
//           var header = 'Main menu';
//
//            $('#ul-user-menu-1').show();
//            $('#ul-user-menu-2').show();
//            $('#ul-user-menu-2').find('h3').show();
//        });

        $('li.devided.mega-menu .dropdown > ul > li a[href="#"], li.devided.mega-menu .dropdown > ul > li h3').on('click', function(e) {
            console.log('Found');

            e.stopPropagation();
            e.preventDefault();


            if ($(this).parent().find('.side-panel').length > 0) {
                console.log('Side panel');

                if ($('.side-panel').find('h3').css('display') != 'none') {
                    $(this).parent().find('.side-panel').find('h3').hide();
                    $(this).parent().find('.side-panel').hide();
                    $(this).parent().find('.side-panel').find('ul').hide();
                } else {
                    $(this).parent().find('.side-panel').find('h3').show();
                    $(this).parent().find('.side-panel').show();
                    $(this).parent().find('.side-panel').find('ul').show();
                }
            } else {
                if ($(this).parent().find('ul').find('h3').css('display') != 'none') {
                    console.log('Hide normal');

                    $('#ul-user-menu-1').hide();
                    $('#ul-user-menu-2').hide();
                    $('header.header_top .mobile_menu li.dropdown_user a.user-buttons.user-menu').removeAttr('style');
                    $(this).parent().find('h3').hide();
                    $(this).parent().hide();
                } else {
                    console.log('Open normal');
                    
                    $(this).parent().find('ul').find('h3').show();
                    $(this).parent().find('ul').show();
                }

            }
        });
    }
    
    $('#hamburger').on('click', function(e) {
        $('header.header_top .links_line').toggleClass('active');
        $('body').toggleClass('overflow');
        if ($(this).hasClass('active')) {
            $('.links_line').find('.dropdown').find('ul').find('ul').hide();
            $('.links_line').find('li').find('.child').hide();
            $('.links_line').find('.dropdown').find('ul').hide();
            $('.links_line').find('.side-panel').hide();
        }
        $(this).toggleClass('active');
    });
});

$(document).ready(function() {
    $('.dropdown_user').hover(
        function() {
            // Mouse enters the element, add border-radius
            $(this).find('.header_btn').css('background', '#202730');
            $(this).find('.header_btn').css('border-radius', '20px 20px 0 0');
        },
        function() {
            // Mouse leaves the element, remove border-radius
            // If you want to keep the original border-radius after hover, comment out or remove the line below.
            $(this).find('.header_btn').css('background', '#2B3541');
            $(this).find('.header_btn').css('border-radius', '');
        }
    );
});
// End menu

// Footer map
$(document).ready(function() {
    $('.orange a').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $('.links a').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
    
    $('.orange a').hover(
        function() {
            $('.map img').removeClass('active');
            $('.map .default').addClass('active');
            var target = $(this).data('target');
            $('.map img[data-name="' + target + '"]').addClass('active');
        }, 
        function() { 
             $('.map img').removeClass('active');
        }
    );
    
    $('.links a').hover(
        function() {
            var target = $(this).data('target');
            $('.map img[data-name="' + target + '"]').addClass('active');
            $('.map').addClass('active');
        }, 
        function() { 
             $('.map img').removeClass('active');
            $('.map').removeClass('active');
        }
    );
});
// End footer map

// Countdown
$(document).ready(function() {
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('%-Ih %-Mm %Ss'));
        });
      });

      $('[data-countdown-bn]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown-bn');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('%-Dd %-Hh %-Mm %Ss'));
        });
      });
});
// End countdown

// Preload urls
$(document).ready(function() {
    $('a[preload="yes"]').on('mouseenter touchstart', function() {
            var url = $(this).attr('href');
            var secPreloadUrl = $(this).data('sec-preload');

            preloadPage(url);

            if (secPreloadUrl !== undefined)
                preloadPage(secPreloadUrl);
    });
  
    function preloadPage(url) {
      $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
          console.log('Page preloaded successfully: ' + url);
        },
        error: function() {
          console.log('Error preloading the page: ' + url);
        }
      });
    }
});

/*$(document).ready(function() {
    var excludePatterns = ["logout", "login", "signup", "forgot-password", "/user/bids/current", "/user/bids/won", "/user/bids/lost", "/user/bids/shipping", "/user/bids/personal-information", "/user/bids/password", "history-report/check", "history-report/fox", "setLang="]; // Tablica z ciągami znaków do wykluczenia
  
    $('a[href^="https://bid.cars"]').on('mouseenter touchstart', function() {
        if ($(this).attr('preload') !== 'no') {
            var url = $(this).attr('href');
            
            var pattern = /^https:\/\/bid\.cars\/(pl|en|ru|ua)/;
            var shouldExclude = excludePatterns.some(function(excludePattern) {
                return url.includes(excludePattern);
            });
        
            if (pattern.test(url) && !shouldExclude) {
                preloadPage(url);
            }
        }
    });
  
    function preloadPage(url) {
      $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
          console.log('Page preloaded successfully: ' + url);
        },
        error: function() {
          console.log('Error preloading the page: ' + url);
        }
      });
    }
});*/