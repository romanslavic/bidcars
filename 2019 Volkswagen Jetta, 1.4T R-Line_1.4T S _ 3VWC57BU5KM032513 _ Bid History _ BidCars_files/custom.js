//new WOW().init();
//$('.run-svg').svg();

$(function () {
    function updateLanguageLinks() {
        let currentUrl = new URL(window.location.href);

        // Funkcja do generowania URL z odpowiednim językiem
        function getLangUrl(lang) {
            let path = currentUrl.pathname.replace(/^\/(en|pl|ru|ua)/, `/${lang}`);
            if (!/^\/(en|pl|ru|ua)/.test(currentUrl.pathname)) {
                path = `/${lang}${currentUrl.pathname}`;
            }
            return `${currentUrl.origin}${path}${currentUrl.search ? currentUrl.search + '&' : '?'}setLang=${lang}`;
        }

        // Aktualizuj istniejące linki
        $('a[language-link][dynamic-link]').each(function () {
            let lang = $(this).attr('language-link');
            if (lang) {
                $(this).attr('href', getLangUrl(lang));
            }
        });

        // Dodaj dropdown z linkami językowymi
        $('ul.links-footer > li:nth-child(3)').append(`
            <div class="dropdown-psa" id="lang-dropdown">
                <a href="${getLangUrl('en')}">English</a>
                <a href="${getLangUrl('pl')}">Polish</a>
                <a href="${getLangUrl('ru')}">Russian</a>
                <a href="${getLangUrl('ua')}">Ukrainian</a>
            </div>
        `);
    }
    
    var isSorted = false;
    
    $('.dropdown.sort-dropdown a.dropdown-item').on('click', function(){isSorted = true});
    
    $('[data-toggle="tooltip"]').tooltip();
    $('a[data-toggle="tooltip"]').on('click', function(){
        event.preventDefault();
    });
    
    var header = $('nav.navbar.navbar-expand-lg.navbar-dark');
    if (header.length) {
        var stickyTop = header.offset();
        var sticky = stickyTop.top;
        if (sticky > 10) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }

    var yearTo = null;
    var yearFrom = null
    
    $('.links-footer li:first-child a').on('click', function() {
        event.preventDefault();
        
        if ($(this).hasClass('hiden')) {
            $(this).html(languageExpand + ' <img src="https://bid.cars/img/arr-down.svg" class="run-svg hasSVG">');
            $(this).find($('img')).removeClass('rotate');
            $('.container-fluid.footer-big').slideToggle("slow");
            $(this).removeClass('hiden');
            
        } else {
            $(this).html(languageHide + ' <img src="https://bid.cars/img/arr-down.svg" class="run-svg hasSVG">');
            $(this).find($('img')).addClass('rotate');
            $('.container-fluid.footer-big').slideToggle("slow");
            $(this).addClass('hiden');
        }
        
    });

    
    $('ul.links-footer > li:nth-child(2)').append('<div class="dropdown-psa" id="time-dropdown" rel="nofollow"><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Midway" rel="nofollow">(UTC-11:00) Midway Island</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Samoa" rel="nofollow">(UTC-11:00) Samoa</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Honolulu" rel="nofollow">(UTC-10:00) Hawaii</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/Alaska" rel="nofollow">(UTC-09:00) Alaska</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Los_Angeles" rel="nofollow">(UTC-08:00) Pacific Time (US &amp; Canada)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Tijuana" rel="nofollow">(UTC-08:00) Tijuana</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/Arizona" rel="nofollow">(UTC-07:00) Arizona</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Chihuahua" rel="nofollow">(UTC-07:00) Chihuahua</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Chihuahua" rel="nofollow">(UTC-07:00) La Paz</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Mazatlan" rel="nofollow">(UTC-07:00) Mazatlan</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/Mountain" rel="nofollow">(UTC-07:00) Mountain Time (US &amp; Canada)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Managua" rel="nofollow">(UTC-06:00) Central America</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/Central" rel="nofollow">(UTC-06:00) Central Time (US &amp; Canada)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Mexico_City" rel="nofollow">(UTC-06:00) Guadalajara</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Mexico_City" rel="nofollow">(UTC-06:00) Mexico City</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Monterrey" rel="nofollow">(UTC-06:00) Monterrey</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Canada/Saskatchewan" rel="nofollow">(UTC-06:00) Saskatchewan</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Bogota" rel="nofollow">(UTC-05:00) Bogota</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/Eastern" rel="nofollow">(UTC-05:00) Eastern Time (US &amp; Canada)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=US/East-Indiana" rel="nofollow">(UTC-05:00) Indiana (East)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Lima" rel="nofollow">(UTC-05:00) Lima</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Bogota" rel="nofollow">(UTC-05:00) Quito</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Canada/Atlantic" rel="nofollow">(UTC-04:00) Atlantic Time (Canada)</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Caracas" rel="nofollow">(UTC-04:30) Caracas</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/La_Paz" rel="nofollow">(UTC-04:00) La Paz</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Santiago" rel="nofollow">(UTC-04:00) Santiago</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Canada/Newfoundland" rel="nofollow">(UTC-03:30) Newfoundland</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Sao_Paulo" rel="nofollow">(UTC-03:00) Brasilia</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Argentina/Buenos_Aires" rel="nofollow">(UTC-03:00) Buenos Aires</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Argentina/Buenos_Aires" rel="nofollow">(UTC-03:00) Georgetown</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Godthab" rel="nofollow">(UTC-03:00) Greenland</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=America/Noronha" rel="nofollow">(UTC-02:00) Mid-Atlantic</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Atlantic/Azores" rel="nofollow">(UTC-01:00) Azores</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Atlantic/Cape_Verde" rel="nofollow">(UTC-01:00) Cape Verde Is.</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Casablanca" rel="nofollow">(UTC+00:00) Casablanca</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/London" rel="nofollow">(UTC+00:00) Edinburgh</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Etc/Greenwich" rel="nofollow">(UTC+00:00) Greenwich Mean Time : Dublin</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Lisbon" rel="nofollow">(UTC+00:00) Lisbon</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/London" rel="nofollow">(UTC+00:00) London</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Monrovia" rel="nofollow">(UTC+00:00) Monrovia</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=UTC" rel="nofollow">(UTC+00:00) UTC</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Amsterdam" rel="nofollow">(UTC+01:00) Amsterdam</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Belgrade" rel="nofollow">(UTC+01:00) Belgrade</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Berlin" rel="nofollow">(UTC+01:00) Berlin</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Berlin" rel="nofollow">(UTC+01:00) Bern</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Bratislava" rel="nofollow">(UTC+01:00) Bratislava</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Brussels" rel="nofollow">(UTC+01:00) Brussels</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Budapest" rel="nofollow">(UTC+01:00) Budapest</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Copenhagen" rel="nofollow">(UTC+01:00) Copenhagen</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Ljubljana" rel="nofollow">(UTC+01:00) Ljubljana</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Madrid" rel="nofollow">(UTC+01:00) Madrid</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Paris" rel="nofollow">(UTC+01:00) Paris</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Prague" rel="nofollow">(UTC+01:00) Prague</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Rome" rel="nofollow">(UTC+01:00) Rome</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Sarajevo" rel="nofollow">(UTC+01:00) Sarajevo</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Skopje" rel="nofollow">(UTC+01:00) Skopje</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Stockholm" rel="nofollow">(UTC+01:00) Stockholm</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Vienna" rel="nofollow">(UTC+01:00) Vienna</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Warsaw" rel="nofollow">(UTC+01:00) Warsaw</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Lagos" rel="nofollow">(UTC+01:00) West Central Africa</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Zagreb" rel="nofollow">(UTC+01:00) Zagreb</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Athens" rel="nofollow">(UTC+02:00) Athens</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Bucharest" rel="nofollow">(UTC+02:00) Bucharest</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Cairo" rel="nofollow">(UTC+02:00) Cairo</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Harare" rel="nofollow">(UTC+02:00) Harare</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Helsinki" rel="nofollow">(UTC+02:00) Helsinki</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Istanbul" rel="nofollow">(UTC+02:00) Istanbul</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Jerusalem" rel="nofollow">(UTC+02:00) Jerusalem</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Helsinki" rel="nofollow">(UTC+02:00) Kyiv</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Johannesburg" rel="nofollow">(UTC+02:00) Pretoria</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Riga" rel="nofollow">(UTC+02:00) Riga</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Sofia" rel="nofollow">(UTC+02:00) Sofia</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Tallinn" rel="nofollow">(UTC+02:00) Tallinn</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Vilnius" rel="nofollow">(UTC+02:00) Vilnius</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Baghdad" rel="nofollow">(UTC+03:00) Baghdad</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Kuwait" rel="nofollow">(UTC+03:00) Kuwait</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Minsk" rel="nofollow">(UTC+03:00) Minsk</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Africa/Nairobi" rel="nofollow">(UTC+03:00) Nairobi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Riyadh" rel="nofollow">(UTC+03:00) Riyadh</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Volgograd" rel="nofollow">(UTC+03:00) Volgograd</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tehran" rel="nofollow">(UTC+03:30) Tehran</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Muscat" rel="nofollow">(UTC+04:00) Abu Dhabi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Baku" rel="nofollow">(UTC+04:00) Baku</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Moscow" rel="nofollow">(UTC+04:00) Moscow</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Muscat" rel="nofollow">(UTC+04:00) Muscat</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Europe/Moscow" rel="nofollow">(UTC+04:00) St. Petersburg</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tbilisi" rel="nofollow">(UTC+04:00) Tbilisi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Yerevan" rel="nofollow">(UTC+04:00) Yerevan</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Kabul" rel="nofollow">(UTC+04:30) Kabul</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Karachi" rel="nofollow">(UTC+05:00) Islamabad</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Karachi" rel="nofollow">(UTC+05:00) Karachi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tashkent" rel="nofollow">(UTC+05:00) Tashkent</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Calcutta" rel="nofollow">(UTC+05:30) Chennai</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Kolkata" rel="nofollow">(UTC+05:30) Kolkata</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Calcutta" rel="nofollow">(UTC+05:30) Mumbai</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Calcutta" rel="nofollow">(UTC+05:30) New Delhi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Calcutta" rel="nofollow">(UTC+05:30) Sri Jayawardenepura</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Katmandu" rel="nofollow">(UTC+05:45) Kathmandu</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Almaty" rel="nofollow">(UTC+06:00) Almaty</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Dhaka" rel="nofollow">(UTC+06:00) Astana</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Dhaka" rel="nofollow">(UTC+06:00) Dhaka</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Yekaterinburg" rel="nofollow">(UTC+06:00) Ekaterinburg</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Rangoon" rel="nofollow">(UTC+06:30) Rangoon</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Bangkok" rel="nofollow">(UTC+07:00) Bangkok</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Bangkok" rel="nofollow">(UTC+07:00) Hanoi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Jakarta" rel="nofollow">(UTC+07:00) Jakarta</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Novosibirsk" rel="nofollow">(UTC+07:00) Novosibirsk</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Hong_Kong" rel="nofollow">(UTC+08:00) Beijing</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Chongqing" rel="nofollow">(UTC+08:00) Chongqing</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Hong_Kong" rel="nofollow">(UTC+08:00) Hong Kong</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Krasnoyarsk" rel="nofollow">(UTC+08:00) Krasnoyarsk</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Kuala_Lumpur" rel="nofollow">(UTC+08:00) Kuala Lumpur</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Perth" rel="nofollow">(UTC+08:00) Perth</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Singapore" rel="nofollow">(UTC+08:00) Singapore</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Taipei" rel="nofollow">(UTC+08:00) Taipei</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Ulan_Bator" rel="nofollow">(UTC+08:00) Ulaan Bataar</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Urumqi" rel="nofollow">(UTC+08:00) Urumqi</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Irkutsk" rel="nofollow">(UTC+09:00) Irkutsk</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tokyo" rel="nofollow">(UTC+09:00) Osaka</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tokyo" rel="nofollow">(UTC+09:00) Sapporo</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Seoul" rel="nofollow">(UTC+09:00) Seoul</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Tokyo" rel="nofollow">(UTC+09:00) Tokyo</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Adelaide" rel="nofollow">(UTC+09:30) Adelaide</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Darwin" rel="nofollow">(UTC+09:30) Darwin</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Brisbane" rel="nofollow">(UTC+10:00) Brisbane</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Canberra" rel="nofollow">(UTC+10:00) Canberra</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Guam" rel="nofollow">(UTC+10:00) Guam</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Hobart" rel="nofollow">(UTC+10:00) Hobart</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Melbourne" rel="nofollow">(UTC+10:00) Melbourne</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Port_Moresby" rel="nofollow">(UTC+10:00) Port Moresby</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Australia/Sydney" rel="nofollow">(UTC+10:00) Sydney</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Yakutsk" rel="nofollow">(UTC+10:00) Yakutsk</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Vladivostok" rel="nofollow">(UTC+11:00) Vladivostok</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Auckland" rel="nofollow">(UTC+12:00) Auckland</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Fiji" rel="nofollow">(UTC+12:00) Fiji</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Kwajalein" rel="nofollow">(UTC+12:00) International Date Line West</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Kamchatka" rel="nofollow">(UTC+12:00) Kamchatka</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Magadan" rel="nofollow">(UTC+12:00) Magadan</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Fiji" rel="nofollow">(UTC+12:00) Marshall Is.</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Magadan" rel="nofollow">(UTC+12:00) New Caledonia</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Asia/Magadan" rel="nofollow">(UTC+12:00) Solomon Is.</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Auckland" rel="nofollow">(UTC+12:00) Wellington</a><a href="https://bid.cars/app/set-timezone?url=' + url + '&timezone=Pacific/Tongatapu" rel="nofollow">(UTC+13:00) Nuku&#039;alofa</a></div>');
    //$('ul.links-footer > li:nth-child(3)').append('<div class="dropdown-psa" id="lang-dropdown"><a href="https://bid.cars/en' + urlWithoutLanguage +'?setLang=en">English</a><a href="https://bid.cars/pl' + urlWithoutLanguage +'?setLang=pl">Polish</a><a href="https://bid.cars/ru' + urlWithoutLanguage +'?setLang=ru">Russian</a><a href="https://bid.cars/ua' + urlWithoutLanguage +'?setLang=ua">Ukrainian</a></div>');
    
    updateLanguageLinks();
        
    $('ul.links-footer > li:nth-child(2)').on('click', function(e) {
        e.stopPropagation();
        $(this).find('.dropdown-psa').slideToggle("300");
        $(this).toggleClass('active');
        $(this).next().find('.dropdown-psa').slideUp("300");
        if ($(this).next().hasClass('active')) {
            $(this).next().removeClass('active');
        }
    });
    $('ul.links-footer > li:nth-child(3)').on('click', function(e) {
        e.stopPropagation();
        $(this).find('.dropdown-psa').slideToggle("300");
        $(this).toggleClass('active');
        $(this).prev().find('.dropdown-psa').slideUp("300");
        if ($(this).prev().hasClass('active')) {
            $(this).prev().removeClass('active');
        }
    });
    
    $('li.langChange').on('click', function(e) {
        e.stopPropagation();
        $(this).find('.dropdown-psa').toggleClass("anim");
        $(this).toggleClass('active');
    });


    
   $('.blog-links a.show-blog').on('click', function(e) {
        e.preventDefault();
        $('.blog-links .hidden').slideToggle("300");
    });    
    
   $('.lang-mobile-psa > a').on('click', function(e) {
        e.preventDefault();
        $('.lang-mobile-psa .hidden').slideToggle("300");
    });
    
    $(document.body).on('click', function(){
         $('ul.links-footer > li.active').find('.dropdown-psa').slideToggle("300");
         $('li.langChange').find('.dropdown-psa').removeClass("anim");
    })
    

    /**
     * DropDown select
     */
    var $dropDown = $('.dropdown_select');
    if($dropDown.length) {
        $dropDown.on('click', '.dropdown-menu a', function (e) {
            e.preventDefault();

            if($(this).hasClass('active')) return false;
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.dropdown_select').find('>button').html($(this).html());

            var htmlValue = $(this).html();
            if(htmlValue==allMakesTrans || htmlValue==allModelsTrans)
                $(this).closest('.dropdown_select').find('input[type=hidden]').val('All');
            else if(htmlValue==otherTrans)
                $(this).closest('.dropdown_select').find('input[type=hidden]').val('Other');
            else
                $(this).closest('.dropdown_select').find('input[type=hidden]').val($(this).html());
        })
    }
    

    /**
     * First search panel
     */
    var filtersActive = true;

    var $makeFilter = $('.search_make_filter');

    if($makeFilter.length) {
        var $urlF = $makeFilter.attr('data-url');

        function fetchData(url) {
            $.ajax(url).done(function(value) {
                try {
                    var jsonData = JSON.parse(value);
        
                    if (jsonData && typeof jsonData === 'object') {
                        buildSearch(jsonData);
                    } else {
                        console.log('Download error #1 -> getting toolbar without /archived');

                        var newUrl = url.replace('/archived', '');
                        fetchData(newUrl);
                    }
                } catch (e) {
                    console.log('Download error #2 -> getting toolbar without /archived');
                    
                    var newUrl = url.replace('/archived', '');
                    fetchData(newUrl);
                }
            }).fail(function() {
                console.log('Download error #3 -> getting toolbar without /archived');

                var newUrl = url.replace('/archived', '');
                fetchData(newUrl);
            });
        }
        
        fetchData($urlF);

    }
    
    function buildSearch(data) {
        var gType = '',
            gTypeTranslated = '',
            gMake = [],
            gModel = [],
            gYear = [],
            dataFilters = [];

        $.each(data, function (index, value) {
            if(gType === '' || gType === value.type) {
                gType = value.type;
                gTypeTranslated = value.type_translated;
                if(gMake.indexOf(value.make) === -1) {
                    gMake.push(value.make);
                }
                if(gModel.indexOf(value.model) === -1) {
                    gModel.push({make: value.make, model: value.model});
                }
                if(gYear.indexOf(value.year) === -1) {
                    gYear.push(value.year);
                }
            } else if(gType !== value.type) {

                //Sorting for year 0 > 1
                gYear.sort(function(a, b) {
                    return a - b;
                });

                var d = {
                    name: gType,
                    nameTranslated: gTypeTranslated,
                    gMake: gMake,
                    gModel: gModel,
                    gYear: gYear
                };
                dataFilters.push(d);

                //Set new
                gMake = [];
                gModel = [];
                gYear = [];
                gType = value.type;
                gTypeTranslated = value.type_translated;
                gMake.push(value.make);
                gModel.push(value.model);
                gYear.push(value.year);

            }
        });

        //Set title
        var $nameTransport = $('.search_make_transport'),
            $nameTransportToolbar = $('.search_make_transport_toolbar'),
            $sortingDropdown = $('.sort-dropdown'),
            searchParams = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results==null){
                   return null;
                }
                else{
                   return decodeURI(results[1]) || 0;
                }
            }

        $nameTransport.find('.dropdown-menu a').remove();
        $nameTransportToolbar.find('.dropdown-menu a').remove();
        $.each(dataFilters, function (index, value) {
            $nameTransport.find('.dropdown-menu').append('<a class="dropdown-item" data-lang="'+ value.name +'" href="#">'+ value.nameTranslated +'</a>');
            var catName = value.name.replace(/ /g,'-').toLowerCase();
//            $('#categories .'+ catName +'').append('<a href="#">desc</a>');

            $nameTransportToolbar.find('.dropdown-menu').append('<a class="dropdown-item" data-lang="'+ value.name +'" href="#">'+ value.nameTranslated +'</a>');      
                // filter recognation here
                setTimeout(function(){
                     if(searchParams('type') === value.name) {
                        $('.search_make_transport_toolbar .dropdown-menu a.dropdown-item[data-lang="'+ searchParams('type') +'"]').trigger('click');
                     }
                     if (searchParams('make')) {
                         $('.search_make_manufacturer_toolbar .dropdown-menu a.dropdown-item[data-attr="'+ searchParams('make') +'"]').trigger('click');
                     }
                     if (searchParams('model')) {
                         $('.search_make_models_toolbar .dropdown-menu a.dropdown-item[data-attr="'+ searchParams('model') +'"]').trigger('click');
                     }
                     if (searchParams('year-from')) {
                         $('.search_make_year.from .dropdown-menu a.dropdown-item[data-attr="'+ searchParams('year-from') +'"]').trigger('click');
                         $('#filters-side-options > div.search-group-double > div.dropdown.dropdown_select.search_make_year.from > input[type=hidden]').val(searchParams('year-from'));
                     }
                     if (searchParams('year-to')) {
                         $('.search_make_year.to .dropdown-menu a.dropdown-item[data-attr="'+ searchParams('year-to') +'"]').trigger('click');
                         $('#filters-side-options > div.search-group-double > div.dropdown.dropdown_select.search_make_year.to > input[type=hidden]').val(searchParams('year-to'));
                     }

                },100);            
        });

        //Get Years|Makes|Models after change type transport
        $nameTransport.on('click', '.dropdown-menu a', function () {
            setValue($(this).attr('data-lang'), dataFilters);
            $nameTransport.find('#dropdownType').html($(this).html());
            $('.dropdownYearFromToolbar').removeAttr('disabled');
            $('.dropdownYearToToolbar').removeAttr('disabled');
            $('#dropdownCountry').removeAttr('disabled');
            $('#dropdownModel').removeAttr('disabled');

            $('#dropdownCountry').text(allMakesTrans);
            $('#dropdownModel').text(allModelsTrans);
            $('input[name=make]').val('All');
            $('input[name=model]').val('All');

            console.log('nameTransport');
        });

        $nameTransportToolbar.on('click', '.dropdown-menu a', function () {
            setValueToolbar($(this).attr('data-lang'), dataFilters);
            $nameTransportToolbar.find('#dropdownType').html($(this).html());
            $('.second').find('.disabled').removeClass('disabled');
            $('.dropdownYearFromToolbar').removeAttr('disabled');
            $('.dropdownYearToToolbar').removeAttr('disabled');
            $('#dropdownCountry').removeAttr('disabled');
            $('#dropdownModel').removeAttr('disabled');

            $('#dropdownCountry').text(allMakesTrans);
            $('#dropdownModel').text(allModelsTrans);
            $('input[name=make]').val('All');
            $('input[name=model]').val('All');
            
            console.log('nameTransportToolbar');
        });

        var $makeTransport = $('.search_make_manufacturer'),
        $makeTransportToolbar = $('.search_make_manufacturer_toolbar')

        $makeTransport.on('click', '.dropdown-menu a', function () {
            $('#dropdownModel').text(allModelsTrans);
            $('input[name=model]').val('All');
        });

        $makeTransportToolbar.on('click', '.dropdown-menu a', function () {
            $('#dropdownModel').text(allModelsTrans);
            $('input[name=model]').val('All');
        });
        $sortingDropdown.on('click', '.dropdown-menu a', function(e) {
            e.preventDefault();

            if($(this).hasClass('active')) return false;
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.sort-dropdown').find('>button').html($(this).html());
            $(this).closest('.sort-dropdown').find('input[type=hidden]').val($(this).attr('data-value'));
            searchAction(true);
        });


        $('.search_make_manufacturer_toolbar').on('click', '.dropdown-menu a', function () {
            let transportName = $('.search_make_transport_toolbar').find('input[name="type_transport"]').val();
            let makeName = $('.search_make_manufacturer_toolbar').find('input[name="make"]').val();
            let gModel= dataFilters.find(function(i) { return i.name === transportName; }).gModel;
            let models = [];
            gModel.forEach(function(i) {
                if (i.make === makeName && !models.find( function(el) {return el.model === i.model; })) {
                    models.push(i);
                } 
            });
            $models = $('.search_make_models_toolbar');
            $models.find('.dropdown-menu a').remove();
            var hasOther = 0;
            $.each(models, function (index, value) {
                if(index === 0) {
                    $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allModelsTrans + '</a>');
                }
                var activeClass = '';
                if(searchParams('model')) {
                    if(searchParams('model') === value.model && searchParams('model') != 'Other') {
                        $models.find('button').html(value.model);
                        //$fSearch.find('input[name=model]').val(value.model);
                        $('.search_make_models_toolbar').find('input[name=model]').val(value.model);
                        activeClass = 'active';
                    }
                }

                if(value.model.length > 0 && value.model != 'Other') {
                    var modelAttr = value.model.split(' ').join('+');
                    $models.find('.dropdown-menu').append('<a data-attr="' + modelAttr + '" class="dropdown-item '+ activeClass +'" href="#">'+ value.model +'</a>');
                } else if(value.model == 'Other') {
                    hasOther = 1;
                }
            });

            if(hasOther == 1) {
                $models.find('.dropdown-menu').append('<a data-attr="Other" class="dropdown-item" href="#">' + otherTrans + '</a>');
            }
        });

        $('.search_make_manufacturer').on('click', '.dropdown-menu a', function () {
            let transportName = $('.search_make_transport').find('input[name="type_transport"]').val();
            let makeName = $('.search_make_manufacturer').find('input[name="make"]').val();
            let gModel= dataFilters.find(function(i) {return i.name === transportName; }).gModel;
            let models = [];
            gModel.forEach(function(i) {
                if (i.make === makeName && !models.find( function(el) {return el.model === i.model; })) {
                    models.push(i);
                } 
            });
            $models = $('.search_make_models');
            $models.find('.dropdown-menu a').remove();
            var hasOther = 0;
            $.each(models, function (index, value) {
                if(index === 0) {
                    $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allModelsTrans + '</a>');
                }
                var activeClass = '';
                if(searchParams('model')) {
                    if(searchParams('model') === value.model) {
                        $models.find('button').html(value.model);
                        //$fSearch.find('input[name=model]').val(value.model);
                        $('.search_make_models').find('input[name=model]').val(value.model);
                        activeClass = 'active';
                    }
                }
                if(value.model.length > 0 && value.model != 'Other') {
                    $models.find('.dropdown-menu').append('<a class="dropdown-item '+ activeClass +'" href="#">'+ value.model +'</a>');
                } else if(value.model == 'Other') {
                    hasOther = 1;
                }
            });

            if(hasOther == 1) {
                $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + otherTrans + '</a>');
            }

            if (!gModel.length) {
                $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allModelsTrans + '</a>');
            }
        });

        setValue($nameTransport.find('.dropdown-menu a.active').html(), dataFilters);
        if($('.filters_area').length) {
            searchAction();
            setValue($('.search_make_transport input[name=type_transport]').val(), dataFilters, true);
        }

        var $yearFilterFrom = $('.search_make_year.from'),
          $yearFilterTo = $('.search_make_year.to'),
          gYear = dataFilters.find(function(i) {return i.name === 'Automobile'; }).gYear.reverse();

        if (gYear) {
            yearFrom = gYear[gYear.length - 1]
        }

        if (gYear) {
            yearTo = gYear[0]
        }
    }


    function setValueToolbar(name, dataFilters) {
        var $fSearch = $('.search-toolbar');

        var $yearFilterFrom = $('.search_make_year.from'),
            $yearFilterTo = $('.search_make_year.to'),
            $manufacture = $('.search_make_manufacturer_toolbar'),
            $models = $('.search_make_models_toolbar'),
            searchParams = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results==null){
                   return null;
                }
                else{
                   return decodeURI(results[1]) || 0;
                }
            },
            nameChange = name,
            gMake = null,
            gModel = null,
            gYear = null;

        $fSearch.each(function(){
            $(this).find('input[name=type_transport]').each( function () {
                $(this).val(name)
            })
        })

        $.each(dataFilters, function (index, value) {
            if(value.name === nameChange) {
                gMake = value.gMake;
                gModel = value.gModel;
                gYear = value.gYear.reverse();
            }
        });
        $manufacture.each(function () {
            $(this).find('.dropdown-menu a').remove();
        })
        $.each(gMake, function (index, value) {
            if(index === 0) {
                $manufacture.each(function() {
                    $(this).find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allMakesTrans + '</a>');
                })
            }
            var activeClass = '';
            if(searchParams('make')) {
            }
            $manufacture.each(function () {
                var make = value.split(' ').join('+');
                if(value == 'Other')
                    $(this).find('.dropdown-menu').append('<a data-attr="' + make + '" class="dropdown-item '+ activeClass +'" href="#">'+ otherTrans +'</a>');
                else
                    $(this).find('.dropdown-menu').append('<a data-attr="' + make + '" class="dropdown-item '+ activeClass +'" href="#">'+ value +'</a>');
            })
        });


        $models.find('.dropdown-menu a').remove();
        $.each(gModel, function (index, value) {
            if(index === 0) {
                $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allModelsTrans + '</a>');
            }
            var activeClass = '';
            // some error here
            //$models.find('.dropdown-menu').append('<a class="dropdown-item '+ activeClass +'" href="#">'+ value +'</a>');
        });
        
    }

    function setValue(name, dataFilters, force) {
        var $fSearch = $('.search_make_filter');

        var $yearFilterFrom = $('.search_make_year.from'),
            $yearFilterTo = $('.search_make_year.to'),
            $manufacture = $('.search_make_manufacturer'),
            $models = $('.search_make_models'),
            searchParams = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results==null){
                   return null;
                }
                else{
                   return decodeURI(results[1]) || 0;
                }
            },
            nameChange = name,
            gMake = null,
            gModel = null,
            gYear = null;

        var tempName = force ? searchParams('type_transport') || searchParams('type') || name : name;
        $fSearch.each(function(){
            $(this).find('input[name=type_transport]').val(tempName)
        })
        $('.search_make_transport').find('button').html(tempName);

        if (tempName) {
            $('.main').find('.disabled').removeClass('disabled');
        }


        $.each(dataFilters, function (index, value) {
            if(value.name === nameChange) {
                gMake = value.gMake;
                gModel = value.gModel;
                gYear = value.gYear[0] === '2019' ? value.gYear : value.gYear.reverse();
            }
        });


        if (gYear) {
            yearFrom = gYear[gYear.length - 1]
        }

        if (gYear) {
            yearTo = gYear[0]
        }

        $manufacture.each(function () {
            $(this).find('.dropdown-menu a').remove();
        })
        $.each(gMake, function (index, value) {
            if(index === 0) {
                $manufacture.each(function() {
                    $(this).find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allMakesTrans + '</a>');
                })
            }
            var activeClass = '';
            if(searchParams('make')) {
                if(searchParams('make') === value) {
                    $manufacture.each(function () {
                        $(this).find('button').html(value);
                    })
                    $fSearch.each(function () {
                        $(this).find('input[name=make]').each(function () {
                            $(this).val(value);
                        })
                    })
                    activeClass = 'active';
                }
            }
            $manufacture.each(function () {
                if(value == 'Other')
                    $(this).find('.dropdown-menu').append('<a class="dropdown-item '+ activeClass +'" href="#">'+ otherTrans +'</a>');
                else
                    $(this).find('.dropdown-menu').append('<a class="dropdown-item '+ activeClass +'" href="#">'+ value +'</a>');
            })
        });

        $models.find('.dropdown-menu a').remove();
        $.each(gModel, function (index, value) {
            if(index === 0) {
                $models.find('.dropdown-menu').append('<a class="dropdown-item" href="#">' + allModelsTrans + '</a>');
            }
            var activeClass = '';
            if(searchParams('model')) {
                if(searchParams('model') === value) {
                    $models.find('button').html(value);
                    $fSearch.find('input[name=model]').val(value);
                    activeClass = 'active';
                }
            }
            // some error here
            // $models.find('.dropdown-menu').append('<a class="dropdown-item '+ activeClass +'" href="#">'+ value +'</a>');
        });
        
        //        
        //1. search-type
        //2. status
        if (searchParams('status')) {
            const target = searchParams('status').split(';')
            $('.form-check[data-name="status"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                    $('ul.tabs li').removeClass('active');
                    $('ul.tabs a[data-value="'+ value +'"]').parents('li').addClass('active');
                }
            })
        }
        
        //3. type
        //4. make
        //5. model
        //6. year-from 
        //7. year-to 
        //8. auction-type
        if (searchParams('auction-type')) {
            const target = searchParams('auction-type').split(';')
            $('.form-check[data-name="auction-type"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    } else {
                        $(this).find('.form-check-input[value="All"]').prop("checked", true);
                        $(this).find('.form-check-input[value="All"]').parent().addClass('active');
                    }
                }
            })
        }

        //9. odometer-from 
        //10. odometer-to 
        if (searchParams('odometer-from')) {
            $('.psa-devider-group input[name=odometer-from]').val(searchParams('odometer-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if (searchParams('odometer-to')) {
            $('.psa-devider-group input[name=odometer-to]').val(searchParams('odometer-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if ($("#odometer").length){
            $("#odometer").slider('refresh');
            $("#odometer").slider('setValue', [
                searchParams('odometer-from') ? +searchParams('odometer-from') : 0,
                searchParams('odometer-to') ? +searchParams('odometer-to') : 250000], true);
        }
         
        //14. loss-type 
        if (searchParams('loss-type')) {
            const target = searchParams('loss-type').split(';')
            $('.form-check[data-name="loss-type"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }
        
        //9. start-code
     if (searchParams('start-code')) {
            const target = searchParams('start-code').split(';')
            $('.form-check[data-name="start-code"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }

        //10. drive-type
        if (searchParams('drive-type')) {
            const target = searchParams('drive-type').split(';')
            $('.form-check[data-name="drive-type"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }

        //11. transmission
        if (searchParams('transmission')) {
            const target = searchParams('transmission').split(';')
            $('.form-check[data-name="transmission"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }
        
        //12. body-style
        if (searchParams('body-style')) {
            const target = searchParams('body-style').split(';')
            $('.form-check[data-name="body-style"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().toggleClass('active');
                    }
                }
            })
        }

        //13. fuel-type
        if (searchParams('fuel-type')) {
            const target = searchParams('fuel-type').split(';')
            $('.form-check[data-name="fuel-type"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }

        //15. exterior-color 
        if (searchParams('exterior-color')) {
            const target = searchParams('exterior-color').split(';')
            $('.form-check[data-name="exterior-color"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }


        //16. engine-size-from
        //17. engine-size-to
        //18. engine-hp-from
        //19. engine-hp-to
        if (searchParams('engine-size-from')) {
            $('.psa-devider-group input[name=engine-size-from]').val(searchParams('engine-size-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if (searchParams('engine-size-to')) {
            $('.psa-devider-group input[name=engine-size-to]').val(searchParams('engine-size-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if ($("#engine-size").length){
            $("#engine-size").slider('refresh');
            $("#engine-size").slider('setValue', [
                searchParams('engine-size-from') ? +searchParams('engine-size-from') : 0,
                searchParams('engine-size-to') ? +searchParams('engine-size-to') : 10], true);
        }

        if (searchParams('engine-hp-from')) {
            $('.psa-devider-group input[name=engine-hp-from]').val(searchParams('engine-hp-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if (searchParams('engine-hp-to')) {
            $('.psa-devider-group input[name=engine-hp-to]').val(searchParams('engine-hp-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if ($("#engine-hp").length){
            $("#engine-hp").slider('refresh');
            $("#engine-hp").slider('setValue', [
                searchParams('engine-hp-from') ? +searchParams('engine-hp-from') : 0,
                searchParams('engine-hp-to') ? +searchParams('engine-hp-to') : 1000], true);
        }
        
        //20. engine-type
        if (searchParams('engine-type')) {
            const target = searchParams('engine-type').split(';')
            $('.form-check[data-name="engine-type"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }
        
        if (searchParams('estimated-min')) {
            $('.psa-devider-group input[name=estimated-min]').val(searchParams('estimated-min').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if (searchParams('estimated-max')) {
            $('.psa-devider-group input[name=estimated-max]').val(searchParams('estimated-max').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if ($("#estimated").length){
            $("#estimated").slider('refresh');
            $("#estimated").slider('setValue', [
                searchParams('estimated-min') ? +searchParams('estimated-min') : 0,
                searchParams('estimated-max') ? +searchParams('estimated-max') : 100000], true);
        }

        if (searchParams('final-bid-from')) {
            $('.psa-devider-group input[name=final-bid-from]').val(searchParams('final-bid-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if (searchParams('final-bid-to')) {
            $('.psa-devider-group input[name=final-bid-to]').val(searchParams('final-bid-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
        if ($("#final-bid").length){
            $("#final-bid").slider('refresh');
            $("#final-bid").slider('setValue', [
                searchParams('final-bid-from') ? +searchParams('final-bid-from') : 0,
                searchParams('final-bid-to') ? +searchParams('final-bid-to') : 100000], true);
        }

        if (searchParams('buy-now')) {
            $('.form-check[data-name="buy-now"]').find('input[type=checkbox]').prop("checked", true);
        }

        if (searchParams('hide-finished')) {
            $('.form-check[data-name="hide-finished"]').find('input[type=checkbox]').prop("checked", true);
        }

        if (searchParams('hide-finished-preliminary')) {
            $('.form-check[data-name="hide-finished-preliminary"]').find('input[type=checkbox]').prop("checked", true);
        }

        if (searchParams('query')) {
            $('#query_field').val(searchParams('query').replace(/[+]/g,' '));
        }

        if (searchParams('airbags')) {
            const target = searchParams('airbags').split(';')
            $('.form-check[data-name="airbags"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=radio]').val();
                if (target.find(function(i) {return i === value;})) {
                    $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                }
            })
        }
        
        if (searchParams('cylinders')) {
            const target = searchParams('cylinders').split(';')
            $('.form-check[data-name="cylinders"] .form-check-obj ').each(function () {
                const value = $(this).find('input[type=checkbox]').val();
                if (target.find(function(i) {return i === value;})) {
                    if (value != 'All') {
                        $(this).find('.form-check-input[value="'+ value +'"]').prop("checked", true);
                        $(this).find('.form-check-input[value="'+ value +'"]').parent().addClass('active');
                    }
                }
            })
        }

        if (searchParams('order-by')) {
            $('.sort-dropdown').find('.active').removeClass('active');
            $('.sort-dropdown').find('input[type=hidden]').val(searchParams('order-by'));
            var target = $('.sort-dropdown').find('[data-value='+ searchParams('order-by') +']');
            $('.sort-dropdown').find('>button').html(target.html());
            target.addClass('active')
        }

        // generateExtraTags();
        generateTags();
    }

    let lastSearchActionTime = 0;
    
    function searchAction(action, type, deleteSaleDate, deleteBranch, extraValue, extraValue2) {
        const currentTime = Date.now();
        if (currentTime - lastSearchActionTime < 100) {
            console.log('searchAction blocked');
            return;
        }
        lastSearchActionTime = currentTime;

        var searchUrl = 'https://bid.cars/app/search/request?';
        var currentUrl = window.location.href;
        var searchParams = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
               return null;
            }
            else{
               return decodeURI(results[1]) || 0;
            }
        };
        var searchType = searchParams('search-type') === 'typing' ? 'typing' : 'filters';
        //Set filter after load page
        
        // run archived search
        if (currentUrl.indexOf("archived")>0) {
            searchUrl = 'https://bid.cars/app/search/archived/request?';
        }
        
        if(!action) {
            console.log('No action');

            //1. search-type
            searchUrl += "search-type=" + searchType;
            if(searchParams('search-type') === 'typing') {
                searchUrl += "&query=" + searchParams('query');
            }
            
            //2. status
            if (searchParams('status')) {
                searchUrl += '&status=' + searchParams('status');
            } else {
                searchUrl += '&status=All';
            }

            //3. type
            if(searchParams('type')) {
                searchUrl += '&type=' + searchParams('type');
                setValue(searchParams('type'));
                setTimeout(function() {
                $('.dropdownYearFromToolbar').removeAttr('disabled');
                $('.dropdownYearToToolbar').removeAttr('disabled');
                $('#dropdownCountry').removeAttr('disabled');
                $('#dropdownModel').removeAttr('disabled');
                }, 1000);
                console.log('Toolbar fill');
                // $('#dropdownType').html(searchParams('type'));
            }
            if(searchParams('type_transport')) {
                searchUrl += '&type=' + searchParams('type_transport');
                setValue(searchParams('type_transport'));
            }
            
            //4. make
            if(searchParams('make')) {
                searchUrl += '&make=' + searchParams('make');
            } else {
                searchUrl += '&make=All';
            }
            
            //5. model
            if(searchParams('model')) {
                searchUrl += '&model=' + searchParams('model');
            } else {
                searchUrl += '&model=All';
            }
            
            //6. year-from 
            //7. year-to 
            if(searchParams('year_from') || searchParams('year-from')) {
                searchUrl += '&year-from=' + (searchParams('year_from') || searchParams('year-from'));
                // $('#dropdownYearFrom').html(searchParams('year_from') || searchParams('year-from'));
            }
            else if (!searchParams('year_from') && searchUrl.indexOf("&year-from") < 0) {
                searchUrl += '&year-from=' + 1900;
            }

            if(searchParams('year_to') || searchParams('year-to')) {
                searchUrl += '&year-to=' + (searchParams('year_to') || searchParams('year-to'));
                // $('#dropdownYearTo').html(searchParams('year_to') || searchParams('year-to'));
            }
            else if (!searchParams('year_to') && searchUrl.indexOf("&year-to") < 0) {
                var nextYear = new Date().getFullYear()+1;
                searchUrl += '&year-to=' + nextYear;
            }

            //8. auction-type
            if (searchParams('auction-type')) {
                searchUrl += '&auction-type=' + searchParams('auction-type');
            } else {
                searchUrl += '&auction-type=All';
            } 
            
            //9. odometer-from 
            //10. odometer-to 
            if (searchParams('odometer-from')) {
                searchUrl += '&odometer-from=' + searchParams('odometer-from');
            }
            if (searchParams('odometer-to')) {
                searchUrl += '&odometer-to=' + searchParams('odometer-to');
            }
            
            //9. start-code
            if (searchParams('start-code')) {
                searchUrl += '&start-code=' + searchParams('start-code');
            }
            
            //10. drive-type
            if (searchParams('drive-type')) {
                searchUrl += '&drive-type=' + searchParams('drive-type');
            }
            
            //11. transmission
            if (searchParams('transmission')) {
                searchUrl += '&transmission=' + searchParams('transmission');
            }
            


            //12. body-style
            if (searchParams('body-style')) {
                searchUrl += '&body-style=' + searchParams('body-style');
            }   
            
            //13. fuel-type 
            if (searchParams('fuel-type')) {
                searchUrl += '&fuel-type=' + searchParams('fuel-type');
            }
            
            //14. loss-type 
            if (searchParams('loss-type')) {
                searchUrl += '&loss-type=' + searchParams('loss-type');
            }

            //15. exterior-color
            if (searchParams('exterior-color')) {
                searchUrl += '&exterior-color=' + searchParams('exterior-color');
            }
            
            //16. engine-size-from
            //17. engine-size-to
            //18. engine-hp-from
            //19. engine-hp-to
            if (searchParams('engine-size-from')) {
                searchUrl += '&engine-size-from=' + searchParams('engine-size-from');
            }

            if (searchParams('engine-size-to')) {
                searchUrl += '&engine-size-to=' + searchParams('engine-size-to');
            }

            if (searchParams('engine-hp-from')) {
                searchUrl += '&engine-hp-from=' + searchParams('engine-hp-from');
            }

            if (searchParams('engine-hp-to')) {
                searchUrl += '&engine-hp-to=' + searchParams('engine-hp-to');
            }

            //20. engine-type
            if (searchParams('engine-type')) {
                searchUrl += '&engine-type=' + searchParams('engine-type');
            }

            if (searchParams('airbags')) {
                searchUrl += '&airbags=' + searchParams('airbags');
            }

            if (!deleteBranch) {
                if (searchParams('branch')) {
                    searchUrl += '&branch=' + searchParams('branch');
                }
            }

            if (searchParams('cylinders')) {
                searchUrl += '&cylinders=' + searchParams('cylinders');
            }
            
            if (searchParams('estimated-min')) {
                searchUrl += '&estimated-min=' + searchParams('estimated-min');
            }

            if (searchParams('estimated-max')) {
                searchUrl += '&estimated-max=' + searchParams('estimated-max');
            }

            if (searchParams('order-by')) {
                searchUrl += '&order-by=' + searchParams('order-by');
            }

            if (searchParams('buy-now')) {
                searchUrl += '&buy-now=' + searchParams('buy-now');
            }

            if (searchParams('hide-finished')) {
                searchUrl += '&hide-finished=' + searchParams('hide-finished');
            }

            if (searchParams('hide-finished-preliminary')) {
                searchUrl += '&hide-finished-preliminary=' + searchParams('hide-finished-preliminary');
            }

            if (searchParams('final-bid-from')) {
                searchUrl += '&final-bid-from=' + searchParams('final-bid-from');
            }
            if (searchParams('final-bid-to')) {
                searchUrl += '&final-bid-to=' + searchParams('final-bid-to');
            }
            
            if (searchParams('hzavipah')) {
                searchUrl += '&hzavipah=' + searchParams('hzavipah');
            }

            if (searchParams('qzkioyvz')) {
                searchUrl += '&qzkioyvz=' + searchParams('qzkioyvz');
            }

            if (new URLSearchParams(window.location.search).has("d")) {
                searchUrl += '&d';
            }
            
                    console.log('helooooo')
                    console.log(searchUrl);

            filtersActive = false;
            setTimeout(function() {
                filtersActive = true;
            }, 500);
        } else {
            console.log('Action');
            
//            debugger;
            
            var $searchFilter = $('.search_make_filter');
            
//            1. search-type
//            2. status
//            3. type
//            4. make
//            5. model
            
            if($searchFilter.find('#query_field').val() !== ''){
                searchUrl += "search-type=typing&query=" + $searchFilter.find('#query_field').val().replace(/[ ]/g,'+');
            } else if (searchParams('search-type') === 'typing') {
                searchUrl += "search-type=typing&query=" + searchParams('query');
            } else {
                searchUrl += 'search-type=filters';
                
                if ($('div[data-name="status"]').find('input[type=radio]:checked').length) {
                    var params = '';
                    params += $('div[data-name="status"]').find('input[type=radio]:checked').val()
                    searchUrl += '&status='+params;
                }
                
                if(searchParams('type')) {
                    searchUrl += '&type=' + searchParams('type');
                }
            
                if(searchParams('type_transport')) {
                    searchUrl += '&type=' + searchParams('type_transport');
                }

                if(type == 'extra-menu-make') {
                    searchUrl += '&make=' + extraValue;
                } else if(searchParams('make') && type !== 'make') {
                    searchUrl += '&make=' + searchParams('make');
                } else {
                    searchUrl += '&make=All';
                }

                if(type == 'extra-menu-model') {
                    searchUrl += '&model=' + extraValue;
                } else if(searchParams('model') && type !=='model') {
                    searchUrl += '&model=' + searchParams('model');
                } else {
                    searchUrl += '&model=All';
                }
            }


//            6. year-from 
//            7. year-to 
            if(type == 'extra-menu-year') {
                searchUrl += '&year-from=' + extraValue;
                searchUrl += '&year-to=' + extraValue2;
            } else {
                if($searchFilter.find('input[name=year_from]').val() !== '') {
                    // Tu wstawiamy
                    searchUrl += '&year-from=' + $searchFilter.find('input[name=year_from]').val();
                    //if(searchParams('search-type') === 'filters')
                        $('.search_make_year.from .dropdown-menu a.dropdown-item[data-attr="'+ $searchFilter.find('input[name=year_from]').val() +'"]').trigger('click');
                }
                else if (!searchParams('year_from') && searchUrl.indexOf("&year-from") < 0) {
                    searchUrl += '&year-from=' + 1900;
                }

                if($searchFilter.find('input[name=year_to]').val() !== '') {
                    // Tu wstawiamy
                    searchUrl += '&year-to=' + $searchFilter.find('input[name=year_to]').val();
                    //if(searchParams('search-type') === 'filters')
                        $('.search_make_year.to .dropdown-menu a.dropdown-item[data-attr="'+ $searchFilter.find('input[name=year_to]').val() +'"]').trigger('click');
                }
                else if (!searchParams('year_to') && searchUrl.indexOf("&year-to") < 0) {
                    var nextYear = new Date().getFullYear()+1;
                    searchUrl += '&year-to=' + nextYear;
                }
            }

//            8. auction-type
            if ($('div[data-name="auction-type"]').find('input[type=radio]:checked').length) {
                var params = '';
                params += $('div[data-name="auction-type"]').find('input[type=radio]:checked').val()
                searchUrl += '&auction-type='+params;
            }

//            9. odometer-from 
//            10. odometer-to 
            //Get Odometer
            if (odometerChange){
                var oFrom = $('.psa-devider-group input[name=odometer-from]').val();
                var oTo = $('.psa-devider-group input[name=odometer-to]').val();

                
                if(oFrom && parseInt(oFrom) != 0) {
                    searchUrl += '&odometer-from=' + oFrom.replace(/ /g, '');
                }
                if(oTo && oTo != '250 000') {
                    searchUrl += '&odometer-to=' + oTo.replace(/ /g, '');
                }
            } else {
                if (searchParams('odometer-from')) {
                    searchUrl += '&odometer-from=' + searchParams('odometer-from');
                }
                if (searchParams('odometer-to')) {
                    searchUrl += '&odometer-to=' + searchParams('odometer-to');
                }
            }

//            9. start-code
            if ($('div[data-name="start-code"]').find('input[type=radio]:checked').length) {
                var params = '';
                params += $('div[data-name="start-code"]').find('input[type=radio]:checked').val()
                if (params != 'All') {
                    searchUrl += '&start-code='+params;
                }
            }

//            10. drive-type
            if ($('div[data-name="drive-type"]').find('input[type=radio]:checked').length) {
                var params = '';
                params += $('div[data-name="drive-type"]').find('input[type=radio]:checked').val()
                if (params != 'All') {
                    searchUrl += '&drive-type='+params;
                }
            }

//            11. transmission
            if ($('div[data-name="transmission"]').find('input[type=radio]:checked').length) {
                var params = '';
                params += $('div[data-name="transmission"]').find('input[type=radio]:checked').val()
                if (params != 'All') {
                    searchUrl += '&transmission='+params;
                }
            }
            
            



////            12. body-style
                if ($('div[data-name="body-style"]').find('input[type=checkbox]:checked').length > 0) {
                    var params = '';
                    var checkedValues = $('div[data-name="body-style"]').find('input[type=checkbox]:checked').map(function() {
                        return this.value;
                    }).get().join(';');
                    
                    params += checkedValues;
                    if (params != 'All') {
                        searchUrl += '&body-style=' + params;
                    }
                }

            
////            13. fuel-type 
                if ($('div[data-name="fuel-type"]').find('input[type=checkbox]:checked').length > 0) {

                    var params = '';
                    var checkedValues = $('div[data-name="fuel-type"]').find('input[type=checkbox]:checked').map(function() {
                        return this.value;
                    }).get().join(';');
                    
                    params += checkedValues;
                    if (params != 'All') {
                        searchUrl += '&fuel-type='+params;
                    }
                    
                }
            
////            14. loss-type 
                if ($('div[data-name="loss-type"]').find('input[type=checkbox]:checked').length > 0) {

                    var params = '';
                    var checkedValues = $('div[data-name="loss-type"]').find('input[type=checkbox]:checked').map(function() {
                        return this.value;
                    }).get().join(';');
                    
                    params += checkedValues;
                    if (params != 'All') {
                        searchUrl += '&loss-type='+params;
                    }
                    
                    
                }
            
//            15. exterior-color 
                if ($('div[data-name="exterior-color"]').find('input[type=checkbox]:checked').length > 0) {

                    var params = '';
                    var checkedValues = $('div[data-name="exterior-color"]').find('input[type=checkbox]:checked').map(function() {
                        return this.value;
                    }).get().join(';');
                    
                    params += checkedValues;
                    if (params != 'All') {
                        searchUrl += '&exterior-color='+params;
                    }
                    
                    
                }
            

//            16. engine-size-from
//            17. engine-size-to
            //Get Engine size
            if (engineSizeChange){
                var oFrom = $('.psa-devider-group input[name=engine-size-from]').val();
                var oTo = $('.psa-devider-group input[name=engine-size-to]').val();
                            
                if(oFrom && oFrom != 0) {
                    searchUrl += '&engine-size-from=' + oFrom.replace(/ /g, '');
                }
                if(oTo && oTo != 10) {
                    searchUrl += '&engine-size-to=' + oTo.replace(/ /g, '');
                }
            } else {
                
                if (searchParams('engine-size-from')) {
                    searchUrl += '&engine-size-from=' + searchParams('engine-size-from');
                }

                if (searchParams('engine-size-to')) {
                    searchUrl += '&engine-size-to=' + searchParams('engine-size-to');
                }
            }
            
//            18. engine-hp-from
//            19. engine-hp-to
            //Get Engine HP
            if (engineHpChange){
                var oFrom = $('.psa-devider-group input[name=engine-hp-from]').val();
                var oTo = $('.psa-devider-group input[name=engine-hp-to]').val();
                if(oFrom && oFrom != 0) {
                    searchUrl += '&engine-hp-from=' + oFrom.replace(/ /g, '');
                }
                if(oTo && oTo != '1 000') {
                    searchUrl += '&engine-hp-to=' + oTo.replace(/ /g, '');
                }
            } else {
                if (searchParams('engine-hp-from')) {
                    searchUrl += '&engine-hp-from=' + searchParams('engine-hp-from');
                }

                if (searchParams('engine-hp-to')) {
                    searchUrl += '&engine-hp-to=' + searchParams('engine-hp-to');
                }
            }

//            20. engine-type
            if ($('div[data-name="engine-type"]').find('input[type=checkbox]:checked').length > 0) {

                var params = '';
                var checkedValues = $('div[data-name="engine-type"]').find('input[type=checkbox]:checked').map(function() {
                    return this.value;
                }).get().join(';');

                params += checkedValues;
                
                if (params != 'All') {
                    searchUrl += '&engine-type='+params;
                }

            }       
            
//            21. cylinders
            if ($('div[data-name="cylinders"]').find('input[type=checkbox]:checked').length > 0) {

                var params = '';
                var checkedValues = $('div[data-name="cylinders"]').find('input[type=checkbox]:checked').map(function() {
                    return this.value;
                }).get().join(';');

                params += checkedValues;
                if (params != 'All') {
                    searchUrl += '&cylinders='+params;
                }

            }  
            
            if (estimatedChange){
                var oFrom = $('.psa-devider-group input[name=estimated-min]').val();
                var oTo = $('.psa-devider-group input[name=estimated-max]').val();
                            
                if(oFrom && oFrom != 0) {
                    searchUrl += '&estimated-min=' + oFrom.replace(/ /g, '');
                }
                if(oTo && oTo != '100 000') {
                    searchUrl += '&estimated-max=' + oTo.replace(/ /g, '');
                }
                
            } else {
                
                if (searchParams('estimated-min')) {
                    searchUrl += '&estimated-min=' + searchParams('estimated-min');
                }

                if (searchParams('estimated-max')) {
                    searchUrl += '&estimated-max=' + searchParams('estimated-max');
                }
            }
            
            //Get Final bid
            if (finalBidChange){
                var oFrom = $('.psa-devider-group input[name=final-bid-from]').val();
                var oTo = $('.psa-devider-group input[name=final-bid-to]').val();
                if(oFrom) {
                    searchUrl += '&final-bid-from=' + oFrom.replace(/ /g, '');
                }
                if(oTo) {
                    searchUrl += '&final-bid-to=' + oTo.replace(/ /g, '');
                }
            }
            //Get checkbox
//            $('.options-list .form-check').each(function () {
//                if($(this).find('input[type=checkbox]:checked').length) {
//                    var nameF = $(this).attr('data-name'),
//                        params = '';
//                    $(this).find('input[type=checkbox]:checked').each(function () {
//                        if(params === '') {
//                            params += $(this).val();
//                        } else {
//                            params += ';'+$(this).val();
//                        }
//                    });
//
//                    searchUrl += '&'+nameF+'='+params;
//                }  
//            });
            
            if ($('div[data-name="airbags"]').find('input[type=radio]:checked').length) {
                var params = '';
                params += $('div[data-name="airbags"]').find('input[type=radio]:checked').val()
                searchUrl += '&airbags='+params;
            }

            if (!deleteBranch) {
                if (searchParams('branch')) {
                    searchUrl += '&branch=' + searchParams('branch');
                }
            }
            
            if (isSorted) {
                searchUrl += "&order-by=" + $('.sort-dropdown input[name=order-by]').val();
            }
            
            
        }

        if (!deleteSaleDate) {
            if (searchParams('sale-date')) {
                searchUrl += '&sale-date=' + searchParams('sale-date');
            }
        }
        
        if (searchParams('number')) {
            searchUrl += '&number=' + searchParams('number');
        }

        console.log('searchAction pagegCreated');
        pagegCreated(searchUrl);
        //$('.second').find('button[type=submit]').addClass('disabled');
        
        // generateExtraTags();
        generateTags();
        updateLanguageLinks();
    }

    let lastExecutionTime = 0;

    function pagegCreated(searchUrl, append) {
        console.log('pagegCreated');

        if(!append) {
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
        }

        $('.loader').addClass('active');
        $('.nothing-found').addClass('hide');
        
        
        generateExtraTags();
        
        $.when( $.ajax( searchUrl ) ).done(function ( value ) {
            var iterator = 0,
                bigData = JSON.parse(value);

            var curr_page = bigData.current_page;
            var last_page = bigData.last_page;

            let watchlist = JSON.parse(localStorage.getItem('watchlistAuction')) || [];
            
            if (last_page) {
                // default items
                if(curr_page < last_page) {
                    $('.breadcrumbs.load-more').css('display', 'block');
                    if(bigData.current_page < bigData.last_page) {
                        bigData.next_page_url.replace();
                        $('.breadcrumbs.load-more a').attr('data-next-page', bigData.next_page_url);
                    } 
                } else if (curr_page == last_page){
                    $('.breadcrumbs.load-more').css('display', 'none');
                }
            } else {
                // archived items
                if(bigData.data.length >= 50) {
                    $('.breadcrumbs.load-more').css('display', 'block');
                    
                    
                    if ( bigData.next_page_url != null) {
                        bigData.next_page_url.replace();
                    } else {
                        $('.breadcrumbs.load-more').css('display', 'none');
                    }
                    
                    

                    $('.breadcrumbs.load-more a').attr('data-next-page', bigData.next_page_url);
                } else {
                    $('.breadcrumbs.load-more').css('display', 'none');
                }

            }
            
            
            $('.loader').removeClass('active');
            $('.nothing-found').removeClass('hide');
            
            console.log(bigData);
            
            var video_url;
            
            $.each(bigData.data, function (index, value) {

                var gallery = '',
                    galleryControll = '',
                    galleryIterator = 0,
                    galleryIteratorBig = 0;
                $.each(value.img, function (index_g, value_g) {
                    var active = '';
                    if(index_g === 'img_1') {
                        active = 'active';
                    }
                    gallery += '<div class="carousel-item '+ active +'" style="background-image: url('+ value_g +')" data-fancybox="gallery-' + bigData.current_page + '-'+ (index+1) +'" data-thumb-src="'+ value_g +'" data-src="'+ value.img_large[index_g] +'" role="option" aria-label="' + value.vin + ' photo no. ' + (galleryIterator + 1) + '"></div>';
                    galleryControll += '<li data-target="#carousel-car-'+ bigData.current_page +'-'+ iterator +'" class="'+ active +'" data-slide-to="'+ galleryIterator +'"></li>';
                    galleryIterator++;
                });
                
                $.each(value.img_large, function (index_g, value_g) {
                    if (galleryIteratorBig >= 5) {
                        gallery += '<div data-thumb-src="'+ value_g +'" data-fancybox="gallery-' + bigData.current_page + '-'+ (index+1) +'" data-src="'+ value.img_large[index_g] +'" role="option" aria-label="' + value.vin + ' photo no. ' + (galleryIteratorBig + 1) + '"></div>';
                    }
                    galleryIteratorBig++;
                    
                });
                
                if (value.view_360_url) {
                    gallery += '<a href="#" data-fancybox="gallery-' + bigData.current_page + '-'+ (index+1) +'" data-src="' + value.view_360_url + '" data-type="iframe" data-preload="false" data-width="1430" data-height="1073" class="open-spin" role="option" aria-label="' + value.vin + ' 360 view"><img src="https://bid.cars/img/spin.svg" alt="360 view"> ' + searchSpinTrans + '</a>';
                }
                
                if (value.video_url) {
                    video_url = value.video_url;
                    gallery += '<a href="#" data-fancybox="gallery-' + bigData.current_page + '-'+ (index+1) +'" data-src="' + value.video_url + '" data-type="html5video" data-width="1300" data-height="1000" class="open-vid" role="option" aria-label="' + value.vin + ' video"><img src="https://bid.cars/img/icon-video.svg" alt="View Video"> Video</a>';
                }

                if(value.loss_type == null || value.loss_type == '---' || value.loss_type==value.primary_damage)
                    var loss_type_primary_damage = (searchTranslations[value.primary_damage] || value.primary_damage);
                else
                    var loss_type_primary_damage = (searchTranslations[value.loss_type] || value.loss_type) + ' | ' + (searchTranslations[value.primary_damage] || value.primary_damage);
                
                // run archived items
                var archLink = '';
                var archivedItem;
                var has360 = '';
                var has_video = '';
                var specs = '';
                var sellerTrusted = '';
                var saleDocOk = '';

                if (currentUrl.indexOf("archived")>0) {
                    var archLink = '?archived=true';
                }
                var lot_type;
                if(value.lot.charAt(0) == "0") {
                    lot_type = "iaai";
                } else {
                    lot_type = "copart";
                }
                if(value.sold_before == 1) {
                    archivedItem = "show";
                }
            
                if (value.has_360_view) has360 = "<div class='has360'></div>";
                if (value.has_video) has_video = "<div class='has_video'></div>";

                if (value.seller_trusted == 1) sellerTrusted = '<img src="https://bid.cars/img/upd/ph_seal-check-fill.svg" class="arrw" width="19" height="19" alt="' + searchTrustedSellerTrans + '" data-toggle="tooltip" data-placement="bottom" title="' + searchTrustedSellerTrans + '">';
                if (value.sale_document_external_status == 1 && (!value.sale_document_external.includes('907') || (value.sale_document_external.includes('907') && value.title_has_lien == 9))) saleDocOk = '<img src="https://bid.cars/img/upd/ph_seal-check-fill.svg" class="arrw" width="19" height="19" alt="' + searchExportRegistrationPolandTrans + '" data-toggle="tooltip" data-placement="bottom" title="' + searchExportRegistrationPolandTrans + '">';

                if (value.specs.key_info == 'Present')
                    specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchKeyPresentTrans + '" data-original-title="' + searchKeyPresentTrans + '"><img src="https://bid.cars/img/upd/icons/key.svg" width="20" height="20" alt="' + searchKeyPresentTrans + '"></span>';
                else if (value.specs.key_info == 'Missing')
                    specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchKeyMissingTrans + '" data-original-title="' + searchKeyMissingTrans + '"><img src="https://bid.cars/img/upd/icons/nokey.svg" width="20" height="20" alt="' + searchKeyMissingTrans + '"></span>';

                if (value.specs.transmission !== null && value.specs.transmission == 0)
                    specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchAutomaticTrans + '" data-original-title="' + searchAutomaticTrans + '"><img src="https://bid.cars/img/upd/icons/automatics.svg" width="18" height="19" alt="' + searchAutomaticTrans + '"></span>';
                else if (value.specs.transmission !== null && value.specs.transmission == 1)
                    specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchManualTrans + '" data-original-title="' + searchManualTrans + '"><img src="https://bid.cars/img/upd/icons/manual.svg" width="18" height="19" alt="' + searchManualTrans + '"></span>';

                if (value.specs.hybrid == 1)
                    specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchHybridTrans + '" data-original-title="' + searchHybridTrans + '"><img src="https://bid.cars/img/upd/icons/hybrid.svg" width="15" height="18" alt="' + searchHybridTrans + '"></span>';
                else if(value.specs.fuel_type !== null) {
                    if (value.specs.fuel_type == 0)
                        specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchGasolineTrans + '" data-original-title="' + searchGasolineTrans + '"><img src="https://bid.cars/img/upd/icons/patrol.svg" width="15" height="18" alt="' + searchGasolineTrans + '"></span>';
                    else if (value.specs.fuel_type == 1)
                        specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchDieselTrans + '" data-original-title="' + searchDieselTrans + '"><img src="https://bid.cars/img/upd/icons/diesel.svg" width="15" height="18" alt="' + searchDieselTrans + '"></span>';
                    else if (value.specs.fuel_type == 2)
                        specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchElectricTrans + '" data-original-title="' + searchElectricTrans + '"><img src="https://bid.cars/img/upd/icons/electro.svg" width="15" height="18" alt="' + searchElectricTrans + '"></span>';
                }

                if (value.specs.drive_type !== null) {
                    if (value.specs.drive_type == 0)
                        specs += '<span class="drive-type" data-toggle="tooltip" data-placement="top" title="' + searchFwdTrans + '" data-original-title="' + searchFwdTrans + '"><img src="https://bid.cars/img/upd/icons/fwd.svg" width="15" height="18" alt="' + searchFwdTrans + '"></span>';
                    else if (value.specs.drive_type == 1)
                        specs += '<span class="drive-type" data-toggle="tooltip" data-placement="top" title="' + searchRwdTrans + '" data-original-title="' + searchRwdTrans + '"><img src="https://bid.cars/img/upd/icons/rwd.svg" width="15" height="18" alt="' + searchRwdTrans + '"></span>';
                    if (value.specs.drive_type == 2)
                        specs += '<span class="drive-type"  data-toggle="tooltip" data-placement="top" title="' + searchAwdTrans + '" data-original-title="' + searchAwdTrans + '"><img src="https://bid.cars/img/upd/icons/awd.svg" width="15" height="18" alt="' + searchAwdTrans + '"></span>';
                }

                var engineArray = value.specs.engine_rendered.split(',');
                
                if (engineArray.length > 1) {

                    engineArray.forEach(function(engineSingleElement) {
                        var trimmedElement = engineSingleElement.trim();
                        specs += '<span data-toggle="tooltip" data-placement="top" title="' + searchEngineDetailsTrans + '" data-original-title="' + searchEngineDetailsTrans + '">' + trimmedElement + '</span>';
                    });

                }
                
                var estimatedPrice = '';
                
                if (value.estimated_min > 0) {
                  estimatedPrice = '<div class="estimated_price" data-toggle="tooltip" data-placement="left" title="' + searchEstimatedCostTrans + '"><img src="https://bid.cars/img/trending-up2.svg" width="16" height="16" class="icon" alt="' + searchEstimatedCostTrans + '"> $'+ value.estimated_min.toLocaleString('en-US') + ' - $' + value.estimated_max.toLocaleString('en-US') +' </div>';
                }

                if(currentUrl.indexOf("archived")>0) {
                    var timeLeft = '';
                    var priceBox = '';
                    var auctionStatusIndicator = '';

                    if (value.search_status == 'active') {
                        timeLeft = '<div class="bid-status status-green" data-toggle="tooltip" data-placement="bottom" title="' + searchAuctionCloseTrans + '"><img src="https://bid.cars/images/timer.svg" width="20" height="20" class="icon" alt="Time left"> <span class="indicator"></span> '+ value.time_left_formatted +' <span class="search-results-time-left-info">'+ searchLeftTrans +'</span></div>'; 
                    } else if (value.search_status == 'live') {
                        timeLeft = '';
                    } else if (value.search_status == 'ended') {
                        timeLeft = '<div class="bid-status status-red" data-toggle="tooltip" data-placement="bottom" title="'+ searchAuctionFinishedInfoTrans +'"><img src="https://bid.cars/images/timer.svg" width="20" height="20" class="icon" alt="Auction finished"> <span class="indicator"></span> '+ searchAuctionFinishedTrans +'</div>';
                    }

                    if(value.final_bid != null) {
                        statusClass = 'red';
                        if(value.final_bid_formatted == '----')
                            priceBox = '<div class="price-box"> <span>' + searchFinalBidTrans + ':</span> ' + searchAuctionLogin + '</div>';
                        else
                            priceBox = '<div class="price-box"> <span>' + searchFinalBidTrans + ':</span> ' + value.final_bid_formatted + '</div>';
                    } else if (value.buy_now_price != null) {
                        statusClass = '';
                        priceBox = '<div class="price-box buy-now"><div><span>' + searchCurrentBidTrans + ':</span> ' + value.prebid_price + '</div><div><span>' + searchBuyNowTrans + ':</span> ' + value.buy_now_price + ' </div></div>';
                    } else {
                        statusClass = '';
                        priceBox = '<div class="price-box"><span>' + searchCurrentBidTrans + ':</span>' + value.prebid_price + '</div>';
                    }

                    if(Number(value.status) == 3) {
                        priceBox += '<div class="price-box"><span style="color: #ef2621">' + searchSoldByBuyNowTrans + '</div>';
                    }

                    if (value.search_status == 'active') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default open" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestAvailableTrans + '">'+ searchStatusActiveTrans +'</span></div></div>';
                    } else if (value.search_status == 'live') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default live" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '"><span class="indicator"></span> '+ searchStatusLiveTrans +'</span></div></div>';
                    } else if (value.search_status == 'ended') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default finished" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '">'+ searchStatusEndedTrans +'</span></div>';
                    } else if (value.search_status == 'archived') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default archived" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '">'+ searchAuctionArchivedTrans +'</span></div>';
                    }

                    var $item = '<div class="item-horizontal lots-search '+statusClass+'" id="'+ value.lot +'">' +
                    '<div class="gallery">' +
                    '<div id="carousel-car-'+ bigData.current_page +'-'+iterator +'" class="carousel slide carousel-product" data-ride="carousel">' +
                    '<ol class="carousel-indicators">'+ galleryControll +'</ol>' +
                    '<div class="carousel-inner" role="listbox" aria-label="Lot #' + value.lot + ' carousel">'+ gallery +'</div>' +
                    '<a class="carousel-control-prev" href="#carousel-car-'+ bigData.current_page +'-'+ iterator +'" role="button" data-slide="prev">' +
                    '<img src="https://bid.cars/img/arrow-left.svg" width="10" height="15" class="run-svg" alt="Previous image">' +
                    '</a>' +
                    '<a class="carousel-control-next" href="#carousel-car-'+ bigData.current_page +'-'+ iterator +'" role="button" data-slide="next">' +
                    '<img src="https://bid.cars/img/arrow-right.svg" width="10" height="15" class="run-svg" alt="Next image">' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="wrapper"><div class="item-header">'+
                    '<div class="item-title"><div><div class="name"><i class="fa fa-history run-svg hasSVG alert-history '+archivedItem+'" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="' + searchSoldOnOtherAuctionTrans + '" data-original-title="' + searchSoldOnOtherAuctionTrans + '"></i>' +
                    '<a href="' + baseLangUrl + 'lot/' + value.lot +'/'+ value.tag + archLink +'" class="item-title damage-info" target="_blank">'+ (value.name_long || value.make) +'</a></div> <span class="vin_title">'+ value.vin +'</span> <span class="vin_title">'+ value.lot +'</span></div>' +
                    //'<div class="spec-line"><div class="choose-item' + (value.watchlist ? " active" : "") + '">' +
                    //'<a href="#" data-lot="' + value.lot + '"><i class="fa ' + (value.watchlist ? "fa-heart" : "fa-heart-o") + '" aria-hidden="true"></i></a>' +
                    '<div class="spec-line"><div class="choose-item' + (watchlist.includes(value.lot) ? " active" : "") + '">' +
                    '<a href="#" data-lot="' + value.lot + '" aria-label="Add to favorites"><i class="fa ' + (watchlist.includes(value.lot) ? "fa-heart" : "fa-heart-o") + '" aria-hidden="true"></i></a>' +
                    '</div> <span class="item-seller"><span class="'+ lot_type +'">'+ lot_type +'</span></span> </div></div>' +
                    '</div><div class="item-column"><div class="item-info">' +
                    '<div class="item-specs">' +
                    '<div class="extra-information"><div class="specs">' +
                    specs + 
					'</div></div>' + 
                    '<ul>' +
                    '<li class="odo_desc no-wrap-text-ellipsis"><span>'+ searchMilageTrans +': </span>'+ value.odometer_substr +'k '+ searchMilesTrans +' ('+ value.odometer_km_substr +'k km)</li>' +
                    '<li class="seller_desc"><span>'+ searchSellerTrans +':</span>' + sellerTrusted + ' ' + (value.seller_long || '') +'</li>' +
                    '<li class="doc_desc damage-info"><span class="hide-res-dep">'+ searchDocumenTrans +': </span>' + saleDocOk + ' ' + value.sale_document_split +' </li>' +
                    '<li class="loc_desc no-wrap-text-ellipsis"><span>'+ searchLocationTrans +':</span> '+ value.location +'</li>' +
                    '<li class="damage-info"><span class="hide-res-dep">'+ searchDamageTrans +': </span>'+ loss_type_primary_damage +'</li>' +                     
                    '<li class="status_item '+ value.start_code_color +'"><span class="hide-res-dep">'+ searchStatusTrans +': </span><strong>'+ (searchTranslations[value.start_code] || value.start_code) +'</strong></li>' +
                    '</ul>' +
                    '</div>' + 
                    '</div>' +
                    '<div class="item-price">' +
                    '<div class="date no-wrap-text-ellipsis" data-toggle="tooltip" data-placement="left" title="' + searchAuctionDateTrans +'"><img src="https://bid.cars/images/cal.svg" width="20" height="20" class="icon" alt="' + searchAuctionDateTrans +'"> '+ value.prebid_close_time_lang[language] +'</div>' +
                    timeLeft +
                    priceBox +
                    auctionStatusIndicator +
                    '</div>' +
                    '</div>' +
                    '</div></div>';
                } else {
                    var timeLeft = '';
                    var priceBox = '';
                    var auctionStatusIndicator = '';

                    if (value.search_status == 'active') {
                        timeLeft = '<div class="bid-status status-green" data-toggle="tooltip" data-placement="bottom" title="' + searchAuctionCloseTrans + '"><img src="https://bid.cars/images/timer.svg" width="20" height="20" class="icon" alt="Time left"> <span class="indicator"></span> '+ value.time_left_formatted +' <span class="search-results-time-left-info">'+ searchLeftTrans +'</span></div>'; 
                    } else if (value.search_status == 'live') {
                        timeLeft = '';
                    } else if (value.search_status == 'ended') {
                        timeLeft = '<div class="bid-status status-red" data-toggle="tooltip" data-placement="bottom" title="'+ searchAuctionFinishedInfoTrans +'"><img src="https://bid.cars/images/timer.svg" width="20" height="20" class="icon" alt="Auction finished"> <span class="indicator"></span> '+ searchAuctionFinishedTrans +'</div>';
                    }

                    if(value.final_bid != null) {
                        statusClass = 'red';
                        if(value.final_bid_formatted == '----')
                            priceBox = '<div class="price-box"> <span>' + searchFinalBidTrans + ':</span> ' + searchAuctionLogin + '</div>';
                        else
                            priceBox = '<div class="price-box"> <span>' + searchFinalBidTrans + ':</span> ' + value.final_bid_formatted + '</div>';
                    } else if (value.buy_now_price != null) {
                        statusClass = '';
                        priceBox = '<div class="price-box buy-now"><div><span>' + searchCurrentBidTrans + ':</span> ' + value.prebid_price + '</div><div><span>' + searchBuyNowTrans + ':</span> ' + value.buy_now_price + ' </div></div>';
                    } else {
                        statusClass = '';
                        priceBox = '<div class="price-box"><span>' + searchCurrentBidTrans + ':</span>' + value.prebid_price + '</div>';
                    }

                    if (value.search_status == 'active') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default open" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestAvailableTrans + '">'+ searchStatusActiveTrans +'</span></div></div>';
                    } else if (value.search_status == 'live') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default live" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '"><span class="indicator"></span> '+ searchStatusLiveTrans +'</span></div></div>';
                    } else if (value.search_status == 'ended') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default finished" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '">'+ searchStatusEndedTrans +'</span></div>';
                    } else if (value.search_status == 'archived') {
                        auctionStatusIndicator = '<div class="spec-line"><span class="type default archived" data-toggle="tooltip" data-placement="bottom" title="' + searchBidRequestUnavailableTrans + '">'+ searchAuctionArchivedTrans +'</span></div>';
                    }

                    var $item = '<div class="item-horizontal lots-search '+statusClass+'" id="'+ value.lot +'">' +
                    '<div class="gallery">' +
                    '<div id="carousel-car-'+ bigData.current_page +'-'+iterator +'" class="carousel slide carousel-product" data-ride="carousel">' +
                    '<ol class="carousel-indicators">'+ galleryControll +'</ol>' +
                    '<div class="carousel-inner" role="listbox" aria-label="Lot #' + value.lot + ' carousel">'+ gallery +'</div>' +
                    '<a class="carousel-control-prev" href="#carousel-car-'+ bigData.current_page +'-'+ iterator +'" role="button" data-slide="prev">' +
                    '<img src="https://bid.cars/img/arrow-left.svg" width="10" height="15" class="run-svg" alt="Previous image">' +
                    '</a>' +
                    '<a class="carousel-control-next" href="#carousel-car-'+ bigData.current_page +'-'+ iterator +'" role="button" data-slide="next">' +
                    '<img src="https://bid.cars/img/arrow-right.svg" width="10" height="15" class="run-svg" alt="Next image">' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="wrapper"><div class="item-header">'+
                    '<div class="item-title"><div><div class="name"><i class="fa fa-history run-svg hasSVG alert-history '+archivedItem+'" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="' + searchSoldOnOtherAuctionTrans + '" data-original-title="' + searchSoldOnOtherAuctionTrans + '"></i>' +
                    '<a href="' + baseLangUrl + 'lot/' + value.lot +'/'+ value.tag + archLink +'" class="item-title damage-info" target="_blank">'+ (value.name_long || value.make) +'</a></div> <span class="vin_title">'+ value.vin +'</span> <span class="vin_title">'+ value.lot +'</span></div>' +
                    //'<div class="spec-line"><div class="choose-item' + (value.watchlist ? " active" : "") + '">' +
                    //'<a href="#" data-lot="' + value.lot + '"><i class="fa ' + (value.watchlist ? "fa-heart" : "fa-heart-o") + '" aria-hidden="true"></i></a>' +
                    '<div class="spec-line"><div class="choose-item' + (watchlist.includes(value.lot) ? " active" : "") + '">' +
                    '<a href="#" data-lot="' + value.lot + '" aria-label="Add to favorites"><i class="fa ' + (watchlist.includes(value.lot) ? "fa-heart" : "fa-heart-o") + '" aria-hidden="true"></i></a>' +
                    '</div> <span class="item-seller"><span class="'+ lot_type +'">'+ lot_type +'</span></span> </div></div>' +
                    '</div><div class="item-column"><div class="item-info">' +
                    '<div class="item-specs">' +
                    '<div class="extra-information"><div class="specs">' +
                    specs + 
					'</div></div>' + 
                    '<ul>' +
                    '<li class="odo_desc no-wrap-text-ellipsis"><span>'+ searchMilageTrans +': </span>'+ value.odometer_substr +'k '+ searchMilesTrans +' ('+ value.odometer_km_substr +'k km)</li>' +
                    '<li class="seller_desc"><span>'+ searchSellerTrans +':</span>' + sellerTrusted + ' ' + (value.seller_long || '') +'</li>' +
                    '<li class="doc_desc damage-info"><span class="hide-res-dep">'+ searchDocumenTrans +': </span>' + saleDocOk + ' ' + value.sale_document_split +' </li>' +
                    '<li class="loc_desc no-wrap-text-ellipsis"><span>'+ searchLocationTrans +':</span> '+ value.location +'</li>' +
                    '<li class="damage-info"><span class="hide-res-dep">'+ searchDamageTrans +': </span>'+ loss_type_primary_damage +'</li>' +                     
                    '<li class="status_item '+ value.start_code_color +'"><span class="hide-res-dep">'+ searchStatusTrans +': </span><strong>'+ (searchTranslations[value.start_code] || value.start_code) +'</strong></li>' +
                    '</ul>' +
                    '</div>' + 
                    '</div>' +
                    '<div class="item-price">' +
                    estimatedPrice +
                    '<div class="date no-wrap-text-ellipsis" data-toggle="tooltip" data-placement="left" title="' + searchLiveAuctionStartTimeTrans + '"><img src="https://bid.cars/images/cal.svg" width="20" height="20" class="icon" alt="' + searchLiveAuctionStartTimeTrans + '"> '+ value.prebid_close_time_lang[language] +'</div>' +
                    timeLeft +
                    priceBox +
                    auctionStatusIndicator +
                    '</div>' +
                    '</div>' +
                    '</div></div>';
                }

                $('#search_area').append($item);

                iterator++;
                $('[data-toggle="tooltip"]').tooltip();

                
            });
            
            var carousels = document.querySelectorAll('.carousel-inner');

            carousels.forEach(function(element) {
                // carousel init
                new Carousel(element, {
                        transition: 'slide',
                        preload: 0, // Smoother navigation with lazy loaded images
                        Dots: true,
                    on: {
                        init: function(){
                            $(element).css('opacity', 1);   
                        }
                    }
                });

                var videoTemplate = "<video class='fancybox__html5video' playsinline controls controlsList='nodownload'><source src='{{src}}' type='video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;'>Sorry, your browser doesn't support embedded videos.</video>";
                videoTemplateNew = videoTemplate.replace(/&quot;/g, '"'); 
                
                // popup init
                Fancybox.bind('[data-fancybox]', {
                    on: {
                         keydown: (fancybox, key) => {
                          let currentSlide = fancybox.getSlide();
                          let instance = Fancybox.getInstance();
                          switch (key) {
                            case 'ArrowUp':
                                  currentSlide.panzoom.zoomIn();
                                  throw '';
                                  break;
                            case 'ArrowDown':
                                  currentSlide.panzoom.zoomOut();
                                  throw '';
                                  break;
                          }
                         },
                    },
                    wheel: "zoom",
                    compact: false,
                    idle: false,
                    dragToClose: false,
                    contentClick: () =>
                        window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
                        ? 'false'
                        : 'toggleCover',
                    animated: false,
                    showClass: false,
                    hideClass: false,
                    Hash: false,
                    Thumbs: {
                         type: "classic",
                    },
                    Toolbar: {
                        display: {
                          left: ["infobar"],
                          middle: [
                            "toggle1to1",
                          ],
                          right: ["close"],
                        },
                      },
                    Carousel: {
                        transition: 'slide',
                        preload: 3,
                    },
                    Images: {
                        zoom: true,
                        Panzoom: {
                            maxScale: 10,
                            mouseMoveFactor: 1.1,
                        },
                    },
                    Html: {
                      videoTpl: videoTemplateNew
                    }
                });
            });
            
            // if result = 0
            if (iterator == 0) {
//                console.log('empty');
                $('.nothing-found').remove();
                $('section#content .container.container-transparent .col-9').append('<div class="nothing-found boxed-ver"><img src="https://bid.cars/img/upd/svg/no-search.svg" class="run-svg"><p>' + searchNotFound1 + '</p></div>');
            } else {
                $('.nothing-found').remove();
            }
            
            
            if (searchParams('number')) {
                console.log(searchParams('page'));
                $('html, body').animate({
                    scrollTop: $('#' + searchParams('number') + '').offset().top - 60
                }, 1000);
            }
            
            $(".carousel").each(function(){
               $(this).on('swiperight',function() {
                  $(this).carousel('prev');
                });
               $(this).on('swipeleft',function() {
                  $(this).carousel('next');
               });  
            }); 

        })

        var currentUrl = window.location.href;
        const searchUrlParams = new URLSearchParams(searchUrl);
        const page = searchUrlParams.get('page');

        if(currentUrl.indexOf("archived")==-1 && (!page || Number(page) === 1)) {
            setTimeout(function() {
                $.when( $.ajax( searchUrl + '&count=true' ) ).done(function ( value ) {
                    var iterator = 0,
                        bigData = JSON.parse(value);

                    const currentTime = Math.floor(Date.now() / 1000);

                    if(currentTime - lastExecutionTime > 60 || localStorage.getItem('previousTab') === null) {
                        if(bigData.count.all!==null)
                            $('.search-count').html('('+ bigData.count.all +')');
                        else
                            $('.search-count').html('');

                        if(bigData.count.all!==null)
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(1) > a .count').html('('+ bigData.count.all +')');
                        else
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(1) > a .count').html('');

                        if(bigData.count.active!==null)
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(2) > a .count').html('('+ bigData.count.active +')');
                        else
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(2) > a .count').html('');

                        if(bigData.count.live!==null)
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(3) > a .count').html('('+ bigData.count.live +')');
                        else
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(3) > a .count').html('');

                        if((bigData.count.live==null || bigData.count.live>0) && localStorage.getItem('liveAuctions') && localStorage.getItem('liveAuctions')>0)
                            $('#search-results-live-auction-indicator').show();
                        else
                            $('#search-results-live-auction-indicator').hide();

                        if(bigData.count.ended!==null)
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(4) > a .count').html('('+ bigData.count.ended +')');
                        else
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(4) > a .count').html('');
                        
                        if(bigData.count["fast-buy"]!==null)
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(5) > a .count').html('('+ bigData.count["fast-buy"] +')');
                        else
                            $('#main-content > div.header-content.tabs-version > ul > li:nth-child(5) > a .count').html('');

                        lastExecutionTime = currentTime; // Prevent changing counters based on cache version
                        console.log('Updating counters');
                    } else {
                        // Update counter of current tab only
                        if(localStorage.getItem('activeTab') == 'all') {
                            if(bigData.count.all!==null)
                                $('.search-count').html('('+ bigData.count.all +')');
                            else
                                $('.search-count').html('');

                            if(bigData.count.all!==null)
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(1) > a .count').html('('+ bigData.count.all +')');
                            else
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(1) > a .count').html('');
                        } else if(localStorage.getItem('activeTab') == 'active') {
                            if(bigData.count.active!==null)
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(2) > a .count').html('('+ bigData.count.active +')');
                            else
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(2) > a .count').html('');
                        } else if(localStorage.getItem('activeTab') == 'live') {
                            if(bigData.count.live!==null)
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(3) > a .count').html('('+ bigData.count.live +')');
                            else
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(3) > a .count').html('');
                        } else if(localStorage.getItem('activeTab') == 'ended') {
                            if(bigData.count.ended!==null)
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(4) > a .count').html('('+ bigData.count.ended +')');
                            else
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(4) > a .count').html('');
                        } else if(localStorage.getItem('activeTab') == 'fast-buy') {
                            if(bigData.count["fast-buy"]!==null)
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(5) > a .count').html('('+ bigData.count["fast-buy"] +')');
                            else
                                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(5) > a .count').html('');
                        }
                        console.log('Updating ' + localStorage.getItem('activeTab') + ' counter');
                    }

                    localStorage.removeItem('previousTab'); // Prevent changing counters based on cache version
                });
            }, 50);
        }

        let newHref = JSON.parse(JSON.stringify(searchUrl))
        let oldHref = location.href.slice(0, location.href.indexOf("results?") + 7);
        let fullHash;
        // run archived search
        if (currentUrl.indexOf("archived")>0) {
            fullHash = newHref.replace('https://bid.cars/app/search/archived/request', oldHref)
        } else {
            fullHash = newHref.replace('https://bid.cars/app/search/request', oldHref)
        }
        window.history.pushState('page2', 'Title', fullHash);
        
        var url = new URL(window.location.href);
        url.searchParams.delete('order-by');
        url.searchParams.delete('final-bid-from');
        url.searchParams.delete('final-bid-to');
        var currentUrlForButton = url.toString();

        var modifiedArchivedUrl = currentUrlForButton.replace("search/", "search/archived/");
        $("#searchArchivedUrl1").attr("href", modifiedArchivedUrl);
        $("#searchArchivedUrl2").attr("href", modifiedArchivedUrl);

        var modifiedCurrentUrl = currentUrlForButton.replace("search/archived/", "search/");
        $("#searchCurrentUrl1").attr("href", modifiedCurrentUrl);
        $("#searchCurrentUrl2").attr("href", modifiedCurrentUrl);
    }

    if ($('.filters_area').length) {

        $('.search_make_filter').each(function () {
            $(this).on('click', '.dropdown-menu a', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (filtersActive) {
                    $('a.apply-changes').addClass('visible');
                    searchAction(true);
                    console.log('Dropdown filters active');
                } else {
                    console.log('Dropdown filters not active');
                }
            });
        });
    
        $('.form-check').find('input[type=checkbox]').on('change', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $('a.apply-changes').addClass('visible');
            searchAction(true);
        });
    
        $('.form-check').find('input[type=radio]').on('change', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var elementName = $(this).attr('name');
            if(elementName != 'lot-status')
                $('a.apply-changes').addClass('visible');

            searchAction(true);
        });
    
        if (is_mobile == '1')
            timeoutLimit = 3000;
        else
            timeoutLimit = 500;
    
        var timer = '';
        $('#odometer').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            odometerChange = true;
            var arrChange = $(this).val().split(',');
            $('.psa-devider-group input[name=odometer-from]').val(arrChange[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.psa-devider-group input[name=odometer-to]').val(arrChange[1].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
            $('.loader').addClass('active');
    
            $('a.apply-changes').addClass('visible');
    
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, timeoutLimit);
        });
    
        $('#estimated').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            estimatedChange = true;
            var arrChange = $(this).val().split(',');
            $('.psa-devider-group input[name=estimated-min]').val(arrChange[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.psa-devider-group input[name=estimated-max]').val(arrChange[1].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
            $('.loader').addClass('active');
    
            $('a.apply-changes').addClass('visible');
    
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, timeoutLimit);
        });
    
        $('#engine-size').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            engineSizeChange = true;
            var arrChange = $(this).val().split(',');
            $('.psa-devider-group input[name=engine-size-from]').val(arrChange[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.psa-devider-group input[name=engine-size-to]').val(arrChange[1].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
            $('.loader').addClass('active');
    
            $('a.apply-changes').addClass('visible');
    
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, timeoutLimit);
        });
    
        $('#engine-hp').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            engineHpChange = true;
            var arrChange = $(this).val().split(',');
            $('.psa-devider-group input[name=engine-hp-from]').val(arrChange[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.psa-devider-group input[name=engine-hp-to]').val(arrChange[1].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
            $('.loader').addClass('active');
    
            $('a.apply-changes').addClass('visible');
    
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, timeoutLimit);
        });
    
        $('#final-bid').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            finalBidChange = true;
            var arrChange = $(this).val().split(',');
            $('.psa-devider-group input[name=final-bid-from]').val(arrChange[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.psa-devider-group input[name=final-bid-to]').val(arrChange[1].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    
            $('.breadcrumbs.load-more').css('display', 'none');
            $('#search_area').html('  ');
            $('.loader').addClass('active');
    
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, timeoutLimit);
        });
    
        $('#query_field').change(function (e) {
            e.preventDefault();
            e.stopPropagation();
            clearTimeout(timer);
            timer = setTimeout(function () {
                searchAction(true);
            }, 500);
        });
    
        $('input[name="odometer-to"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#odometer").slider('refresh');
            $("#odometer").slider('setValue', [
                +($('.psa-devider-group input[name=odometer-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=odometer-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            odometerChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="odometer-from"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#odometer").slider('refresh');
            $("#odometer").slider('setValue', [
                +($('.psa-devider-group input[name=odometer-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=odometer-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            odometerChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="estimated-min"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#estimated").slider('refresh');
            $("#estimated").slider('setValue', [
                +($('.psa-devider-group input[name=estimated-min]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=estimated-max]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            estimatedChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="estimated-max"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#estimated").slider('refresh');
            $("#estimated").slider('setValue', [
                +($('.psa-devider-group input[name=estimated-min]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=estimated-max]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            estimatedChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="engine-size-from"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Replace commas with dots and remove all non-numeric characters except dots
            let cleanedValue = $(this).val().replace(',', '.').replace(/[^0-9.]/g, '');
            $(this).val(cleanedValue);

            $("#engine-size").slider('refresh');
            $("#engine-size").slider('setValue', [
                +($('.psa-devider-group input[name=engine-size-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=engine-size-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            engineSizeChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="engine-size-to"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Replace commas with dots and remove all non-numeric characters except dots
            let cleanedValue = $(this).val().replace(',', '.').replace(/[^0-9.]/g, '');
            $(this).val(cleanedValue);

            $("#engine-size").slider('refresh');
            $("#engine-size").slider('setValue', [
                +($('.psa-devider-group input[name=engine-size-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=engine-size-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            engineSizeChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="engine-hp-from"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#engine-hp").slider('refresh');
            $("#engine-hp").slider('setValue', [
                +($('.psa-devider-group input[name=engine-hp-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=engine-hp-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            engineHpChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="engine-hp-to"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#engine-hp").slider('refresh');
            $("#engine-hp").slider('setValue', [
                +($('.psa-devider-group input[name=engine-hp-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=engine-hp-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            engineHpChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="final-bid-from"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#final-bid").slider('refresh');
            $("#final-bid").slider('setValue', [
                +($('.psa-devider-group input[name=final-bid-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=final-bid-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            finalBidChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        $('input[name="final-bid-to"]').keyup(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Remove all non-numeric characters
            let cleanedValue = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(cleanedValue);

            $("#final-bid").slider('refresh');
            $("#final-bid").slider('setValue', [
                +($('.psa-devider-group input[name=final-bid-from]').val().replace(/ /g, '')), 
                +($('.psa-devider-group input[name=final-bid-to]').val().replace(/ /g, ''))
            ], true);
            clearTimeout(timer);
            finalBidChange = true;
            timer = setTimeout(function(){
                searchAction(true);
            }, 1000);
        });
        
        // load more click
        $('.breadcrumbs.load-more a').on('click', function (e) {
            e.preventDefault();   
            e.stopPropagation();
            var searchUrl = $(this).attr('data-next-page');
            pagegCreated(searchUrl, true);
        
            if (typeof addObserverToItems === 'function') {
                setTimeout(() => addObserverToItems(), 2000);
            }
        
            if (typeof addObserverToLoadMore === 'function') {
                setTimeout(() => addObserverToLoadMore(), 2000);
            }
        });    
    }
    
    var odometerChange = false;
    var engineSizeChange = false;
    var estimatedChange = false;
    var engineHpChange = false;
    var finalBidChange = false;

    function generateExtraTags() {
        if (window.location.pathname.includes('/archived/'))
            var archivedPath = '/archived';
        else
            var archivedPath = '';

        let urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('type') && urlParams.get('type').toLowerCase() == 'automobile')
            var urlName = 'https://bid.cars/app/search' + archivedPath + '/toolbar-type/automobile';
        else if (urlParams.has('type') && urlParams.get('type').toLowerCase() == 'motorcycle')
            var urlName = 'https://bid.cars/app/search' + archivedPath + '/toolbar-type/motorcycle';
        else if (urlParams.has('type') && urlParams.get('type').toLowerCase() == 'atv')
            var urlName = 'https://bid.cars/app/search' + archivedPath + '/toolbar-type/atv';

        if (!urlName) {
            $('.tagBox').remove();
        }
        
        $.getJSON(urlName, function(data) {
            const itemsPerView = 9;
            let executeSecondCondition = true;

            // Pobierz parametry z bieżącego adresu URL
            let urlParams = new URLSearchParams(window.location.search);
            let ulElement = $('.tag-menu');
            ulElement.empty();

            let liHTML = `<li class="sub-item" data-id="0"><a href="#">Null</a></li>`;
            ulElement.append(liHTML);
    
            // Sprawdź obecność parametru 'make'
            if (urlParams.has('make') && urlParams.has('model') && urlParams.get('make') != 'All' && urlParams.get('model') != 'All') {
                let make = urlParams.get('make');
                let model = urlParams.get('model');

                $('.tag-menu-title').text(make + ' ' + model);

                // Filtruj dane na podstawie marki i modelu, a następnie wyświetl generacje
                let filteredCars = data.filter(car => car.make === make);
                filteredCars = filteredCars.filter(car => car.model === model);

                // Wyświetl generacje dla wybranego modelu
                filteredCars.forEach((car, index) => {
                    if (car.generations && car.generations.length > 1) {
                        executeSecondCondition = false;
                        car.generations.forEach(generation => {
                            if (generation) {
                                if(urlParams.has('year-from') && urlParams.has('year-to') && urlParams.get('year-from') == generation.min_year && urlParams.get('year-to') == generation.max_year)
                                    var isChecked = ' checked';
                                else
                                    var isChecked = '';

                                let liHTML = `<li class="extra-menu-tag sub-item${isChecked}" data-id="${index + 1}" data-tag-menu-year-from="${generation.min_year}" data-tag-menu-year-to="${generation.max_year}"><a href="#">${generation.name}</a></li>`;
                                ulElement.append(liHTML);
                            }
                        });
                    }
                });
            }
            if (urlParams.has('make') && urlParams.get('make') != 'All' && executeSecondCondition) {
                
                let make = urlParams.get('make');

                $('.tag-menu-title').text(make);
    
                // Filtruj dane na podstawie marki
                let filteredCars = data.filter(car => car.make === make);
                let checkedIndex = -1;
                    filteredCars.forEach((car, index) => {
                        let hidden = "";
                        if (index >= itemsPerView) hidden = " hide";

                        let isChecked = "";
                        if (urlParams.has('make') && urlParams.has('model') && urlParams.get('make') == car.make && urlParams.get('model') == car.model) {
                            isChecked = ' checked';
                            checkedIndex = index;
                        }

                        let liHTML = `<li class="extra-menu-tag sub-item${hidden}${isChecked}" data-id="${index + 1}" data-tag-menu-model="${car.model.replace(/[ ]/g,'+')}"><a href="#">${car.model}</a></li>`;
                        ulElement.append(liHTML);
                    });

                    if (checkedIndex > itemsPerView) {
                        ulElement.find('li').each(function(index) {
                            $(this).removeClass('hide');
                        });
                    }

                if (filteredCars.length > itemsPerView) {
                    ulElement.append('<li class="sub-item"><a class="see-more" href="#">' + seeMore + ' <span>(' + (filteredCars.length - itemsPerView) + ')</span></a></li>');
                }
            } else if (urlParams.has('type') && executeSecondCondition) {
                $('.tag-menu-title').text(searchTranslations[urlParams.get('type').replace(/[+-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase())] || urlParams.get('type'));
                
                // Wyświetl wszystkie dostępne marki
                let uniqueMakes = [...new Set(data.map(car => car.make))];
                uniqueMakes.forEach((make, index) => {
                    let hidden = "";
                    if (index >= itemsPerView) hidden = " hide";

                    let liHTML = `<li class="extra-menu-tag sub-item${hidden}" data-id="${index + 1}" data-tag-menu-make="${make.replace(/[ ]/g,'+')}"><a href="#">${make}</a></li>`;
                    ulElement.append(liHTML);
                });

                if (uniqueMakes.length > itemsPerView) {
                    ulElement.append('<li class="sub-item"><a class="see-more" href="#">' + seeMore + ' <span>(' + (uniqueMakes.length - itemsPerView) + ')</span></a></li>');
                }
            }
            
            ulElement.find('.see-more').on('click', function(e) {
                e.preventDefault();
                ulElement.find('li').removeClass('hide');
                $('.see-more').remove();
            });

            if (ulElement.children().length <= 1) {
                $('#tagBox').hide();
                $('#tagBoxMobile').hide();
            } else {
                $('#tagBox').show();
                $('#tagBoxMobile').show();
            }
        });
    }

    function generateTitle() {
        searchParams = function(name) {
        	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        	if (results == null) {
        		return null;
        	} else {
        		return decodeURI(results[1]) || 0;
        	}
        };

        var currentUrl = window.location.href;
        var newTitlePart = searchTitle;
        var typeBool = 1;

        if(searchParams('make') && searchParams('make') !== 'All') {
            newTitlePart = newTitlePart + " " + searchParams('make').replace(/\+/g, ' ');
            typeBool = 0;
        }

        if(searchParams('model') && searchParams('model') !== 'All') {
            newTitlePart = newTitlePart + " " + searchParams('model').replace(/\+/g, ' ');
            typeBool = 0;
        }

        if(typeBool == 1) {
            if(searchParams('type') && searchParams('type') !== 'All') {
                newTitlePart = newTitlePart + " " + searchTranslations[searchParams('type').replace(/[+-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase())] || searchParams('type').replace(/[+-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            }
        }

        if (currentUrl.indexOf("archived")>0) {
            newTitlePart = newTitlePart + " - " + archivedTitle;
        } else if(searchParams('status')) {
            newTitlePart = newTitlePart + " - " + searchTranslations[searchParams('status')] || searchParams('status');
        }

        var currentTitle = document.title;

        if (currentTitle.includes("|")) {
            var titleParts = currentTitle.split("|");
            document.title = newTitlePart + " | " + titleParts[1].trim();
        } else {
            document.title = newTitlePart + " | Bid.Cars";
        }
    }

    function generateTags() {
        generateTitle();

        $('.tags-manager').html('')
        searchParams = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
};
        const tags = [];

        if(searchParams('make') && searchParams('make') !== 'All') {
            tags.push({
                type: 'make',
                tag: 'search_make_manufacturer',
                text: searchParams('make'),
                canDelete: true
            })
        }

        if(searchParams('model') && searchParams('model') !== 'All') {
            tags.push({
                type: 'model',
                tag: 'search_make_models',
                text: searchParams('model'),
                canDelete: true
            })
        }

        if(searchParams('year-from') || searchParams('year_from') || searchParams('year-to') || searchParams('year_to')) {
            var yearMax = new Date().getFullYear()+1;
            if((searchParams('year-from') == 1900 || searchParams('year_from') == 1900) && (searchParams('year-to') == yearMax || searchParams('year_to') == yearMax))
                canDelete = false;
            else
                canDelete = true;

            tags.push({
                type: 'year',
                tag: 'search_make_year',
                text: (searchParams('year-from') || searchParams('year_from') || yearFrom) + " -  " + (searchParams('year-to') || searchParams('year_to') || yearTo),
                canDelete: canDelete
            })
        }
        
        if(searchParams('auction-type')) {
            if(searchParams('auction-type') == 'All') {
                auctionTypeTranslated = auctionAllTrans;
                canDelete = false;
            } else {
                auctionTypeTranslated = searchParams('auction-type');
                canDelete = true;
            }

            tags.push({
                type: 'auction-type',
                tag: 'form-check',
                text: auctionTypeTranslated,
                canDelete: canDelete
            })
        }

        if (searchParams('odometer-from') || searchParams('odometer-to')) {
            
            var from = searchParams('odometer-from') ? searchParams('odometer-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "0";
            var to = searchParams('odometer-to') ? searchParams('odometer-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "250000";
            
            tags.push({
                type: 'odometer',
                tag: 'psa-devider-group',
                text: from + " - " + to + " " + odometerMilesTrans,
                canDelete: true
            });
        }
        
        if(searchParams('estimated-min') || searchParams('estimated-max')) {
            
            var estimatedMin = searchParams('estimated-min') ? searchParams('estimated-min').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "0";
            var estimatedMax = searchParams('estimated-max') ? searchParams('estimated-max').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "100 000";
            
            tags.push({
                type: 'estimated',
                tag: 'psa-devider-group',
                text: '$' + estimatedMin + " - $" + estimatedMax + " USD ",
                canDelete: true
            })
        }
        
        if(searchParams('engine-size-from') || searchParams('engine-size-to')) {
            
            var engineSizeFrom = searchParams('engine-size-from') ? searchParams('engine-size-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "0";
            var engineSizeTo = searchParams('engine-size-to') ? searchParams('engine-size-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "10";
            
            tags.push({
                type: 'engine-size',
                tag: 'psa-devider-group',
                text: engineSizeFrom + " - " + engineSizeTo + " L ",
                canDelete: true
            })
        }

        if(searchParams('engine-hp-from') || searchParams('engine-hp-to')) {
            
            var engineHpFrom = searchParams('engine-hp-from') ? searchParams('engine-hp-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "0";
            var engineHpTo = searchParams('engine-hp-to') ? searchParams('engine-hp-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : "1000";
 
            
            tags.push({
                type: 'engine-hp',
                tag: 'psa-devider-group',
                text: engineHpFrom + " - " + engineHpTo + " HP ",
                canDelete: true
            })
        }

        if(searchParams('final-bid-from') || searchParams('final-bid-to')) {
            tags.push({
                type: 'final-bid',
                tag: 'psa-devider-group',
                text: '$' + searchParams('final-bid-from').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " - $" + searchParams('final-bid-to').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " USD ",
                canDelete: true
            })
        }

        if(searchParams('body-style')) {
            if (searchParams('body-style') != 'All') {
                tags.push({
                    type: 'body-style',
                    tag: 'form-check',
                    text: "" + searchParams('body-style').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('branch')) {
            tags.push({
                type: 'branch',
                tag: 'form-check',
                text: branchTrans + ": " + searchParams('branch'),
                canDelete: true
            })
        }

        if(searchParams('loss-type')) {
            if (searchParams('loss-type') != 'All') {
                tags.push({
                    type: 'loss-type',
                    tag: 'form-check',
                    text: "" + searchParams('loss-type').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('buy-now')) {
            tags.push({
                type: 'buy-now',
                tag: 'form-check',
                text: buyNowTrans,
                canDelete: true
            })
        }

        if(searchParams('hide-finished')) {
            tags.push({
                type: 'hide-finished',
                tag: 'form-check',
                text: hideFinishedTrans,
                canDelete: true
            })
        }

        if(searchParams('hide-finished-preliminary')) {
            tags.push({
                type: 'hide-finished-preliminary',
                tag: 'form-check',
                text: hideFinishedPreliminaryTrans,
                canDelete: true
            })
        }
        
        if (searchParams('query')) {
            tags.push({
                type: 'searched-query',
                tag: 'form-check',
                text: searchParams('query').replace(/[+]/g,' '),
                canDelete: true
            })
        }
         
        if(searchParams('status')) {
            if(searchParams('status') == 'All') {
                $('#main-content > div.header-content.tabs-version > ul > li:nth-child(1)').addClass('active');
                auctionTypeTranslated = auctionAllTrans;
                canDelete = false;
            } else {
                auctionTypeTranslated = searchParams('status');
                canDelete = true;
            }

//            tags.push({
//                type: 'set',
//                tag: 'form-check',
//                text: auctionTypeTranslated,
//                canDelete: canDelete
//            })
        }
        


        if(searchParams('start-code')) {
            if(searchParams('start-code') == 'All') {
                startCodeTranslated = startCodeAllTrans;
                canDelete = false;
            } else if(searchParams('start-code') == 'Stationary') {
                startCodeTranslated = 'Stationary';
                canDelete = true;
            } else if(searchParams('start-code') == 'Starts') {
                startCodeTranslated = startCodeStartsTrans;
                canDelete = true;
            } else if(searchParams('start-code') == 'Run+and+Drive') {
                startCodeTranslated = startCodeRunAndDriveTrans;
                canDelete = true;
            }

            tags.push({
                type: 'start-code',
                tag: 'form-check',
                text: startCodeTrans + ": " + startCodeTranslated,
                canDelete: canDelete
            })
        }

        if(searchParams('drive-type')) {
            if(searchParams('drive-type') == 'All') {
                driveTypeTranslated = 'All';
                canDelete = false;
            } else if(searchParams('drive-type') == 'FWD') {
                driveTypeTranslated = 'FWD';
                canDelete = true;
            } else if(searchParams('drive-type') == 'RWD') {
                driveTypeTranslated = 'RWD';
                canDelete = true;
            } else if(searchParams('drive-type') == 'AWD') {
                driveTypeTranslated = 'AWD';
                canDelete = true;
            }

            tags.push({
                type: 'drive-type',
                tag: 'form-check',
                text: "Drive type: " + driveTypeTranslated,
                canDelete: canDelete
            })
        }

        if(searchParams('transmission')) {
            if(searchParams('transmission') == 'All') {
                transmissionTranslated = 'All';
                canDelete = false;
            } else if(searchParams('transmission') == 'Automatic') {
                transmissionTranslated = 'Automatic';
                canDelete = true;
            } else if(searchParams('transmission') == 'Manual') {
                transmissionTranslated = 'Manual';
                canDelete = true;
            }

            tags.push({
                type: 'transmission',
                tag: 'form-check',
                text: "Transmission" + ": " + transmissionTranslated,
                canDelete: canDelete
            })
        }

        if(searchParams('airbags')) {
            tags.push({
                type: 'airbags',
                tag: 'form-check',
                text: "Airbags: " + searchParams('airbags'),
                canDelete: true
            })
        }

        if(searchParams('fuel-type')) {
            if (searchParams('fuel-type') != 'All') {
                tags.push({
                    type: 'fuel-type',
                    tag: 'form-check',
                    text: "" + searchParams('fuel-type').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('exterior-color')) {
            if (searchParams('exterior-color') != 'All') {
                tags.push({
                    type: 'exterior-color',
                    tag: 'form-check',
                    text: "" + searchParams('exterior-color').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('engine-type')) {
//            if(searchParams('engine-type') == 'All') {
//                canDelete = false;
//            } else {
//                canDelete = true;
//            }
            
            if (searchParams('engine-type') != 'All') {
                tags.push({
                    type: 'engine-type',
                    tag: 'form-check',
                    text: "Engine type: " + searchParams('engine-type').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('cylinders')) {
            if (searchParams('cylinders') != 'All') {
                tags.push({
                    type: 'cylinders',
                    tag: 'form-check',
                    text: "Cylinders: " + searchParams('cylinders').replace(/;/g, ', '),
                    canDelete: true
                });
            }
        }

        if(searchParams('sale-date')) {
            tags.push({
                type: 'sale-date',
                tag: '',
                text: "" + searchParams('sale-date'),
                canDelete: true
            })
        }

        tags.forEach(function(elem, index){
            if(elem.canDelete === true) {
                if(elem.text.replace(/[+]/g,' ')=='Other')
                    $('.tags-manager').append('<a href="#" style="color: #334150" class="close-tag" data-tag="'+ elem.tag +'" data-type="'+ elem.type +'"><span class="tag">'+ otherTrans +'<img src="https://bid.cars/img/close-tag.svg" width="12" height="12" class="run-svg" style="float: right; margin: 4px 0 0 5px;" alt="Remove filter"></span></a>');
                else
                    $('.tags-manager').append('<a href="#" style="color: #334150" class="close-tag" data-tag="'+ elem.tag +'" data-type="'+ elem.type +'"><span class="tag">'+ elem.text.replace(/[+]/g,' ') +'<img src="https://bid.cars/img/close-tag.svg" width="12" height="12" class="run-svg" style="float: right; margin: 4px 0 0 5px;" alt="Remove filter"></span></a>');
            }
            //else
            //    $('.tags-manager').append('<span class="tag">'+ elem.text.replace(/[+]/g,' ') +'</span>');
        })
    
    }

    $('body').on('click', '.extra-menu-tag', function(e) {
        e.preventDefault();

        if (e.currentTarget.dataset.tagMenuMake !== undefined) {
            searchAction(true, 'extra-menu-make', false, false, e.currentTarget.dataset.tagMenuMake);
        } else if(e.currentTarget.dataset.tagMenuModel !== undefined) {
            searchAction(true, 'extra-menu-model', false, false, e.currentTarget.dataset.tagMenuModel);
        } else if(e.currentTarget.dataset.tagMenuYearFrom !== undefined && e.currentTarget.dataset.tagMenuYearTo !== undefined) {
            const $fSearch = $('.search_make_filter');
            const $tSearch = $('.search-toolbar');

            $fSearch.find("input[name=year_from]").val(e.currentTarget.dataset.tagMenuYearFrom);
            $fSearch.find("input[name=year_to]").val(e.currentTarget.dataset.tagMenuYearTo);
            
            $tSearch.find("input[name=year_from]").val(e.currentTarget.dataset.tagMenuYearFrom);
            $tSearch.find("input[name=year_to]").val(e.currentTarget.dataset.tagMenuYearTo);

            $('.search_make_year').find('#dropdownYearFrom').html(e.currentTarget.dataset.tagMenuYearFrom);
            $('.search_make_year').find('#dropdownYearTo').html(e.currentTarget.dataset.tagMenuYearTo);

            searchAction(true, 'extra-menu-year', false, false, e.currentTarget.dataset.tagMenuYearFrom, e.currentTarget.dataset.tagMenuYearTo);
        }
    });

    $('body').on('click', '.close-tag', function(e) {
        e.preventDefault();
        const type = e.currentTarget.dataset.type;
        const tag = e.currentTarget.dataset.tag;
        const $fSearch = $('.search_make_filter');
        const $tSearch = $('.search-toolbar');
        const $AdvancedFilters = $('#advanced-filters');

        switch(type) {
          case 'year':  {
            var yearMin = 1900;
            var yearMax = new Date().getFullYear()+1;

            $fSearch.find("input[name=" + type + "_from]").val('');
            $fSearch.find("input[name=" + type + "_to]").val('');
            
            $tSearch.find("input[name=" + type + "_from]").val('');
            $tSearch.find("input[name=" + type + "_to]").val('');

            $('.' + tag).find('#dropdownYearFrom').html(yearMin);
            $('.' + tag).find('#dropdownYearTo').html(yearMax);
            break
          }
          case 'auction-type': {
              $('.form-check[data-name="auction-type"] .form-check-obj ').each(function () {
                 $(this).find('input[type=radio]').prop("checked", false);
            })
//            $('.form-check[data-name="auction-type"] .form-check-obj input[type=radio][value=All]').prop("checked", true);
            break
          }  
          case 'odometer':  {
            $("input[name=" + type + "-from]").val('0');
            $("input[name=" + type + "-to]").val('250 000');
            odometerChange = false
            if ($("#odometer").length){
            $("#odometer").slider('refresh');
            $("#odometer").slider('setValue', [0, 250000], true);}
            var event = $.Event('change');
            $('#odometer').trigger(event);
            break
          }
          case 'estimated':  {
            $("input[name=" + type + "-min]").val('0');
            $("input[name=" + type + "-max]").val('100000');
            estimatedChange = false;
            if ($("#estimated").length){
            $("#estimated").slider('refresh');
            $("#estimated").slider('setValue', [0, 100000], true);
            var event = $.Event('change');
            $('#estimated').trigger(event);
            }
            break
          }
            case 'engine-size':  {
            $("input[name=" + type + "-from]").val('0');
            $("input[name=" + type + "-to]").val('10');
            engineSizeChange = false
            if ($("#engine-size").length){
            $("#engine-size").slider('refresh');
            $("#engine-size").slider('setValue', [0, 10], true);}
            var event = $.Event('change');
            $('#engine-size').trigger(event);
            break
          }
          case 'engine-hp':  {
            $("input[name=" + type + "-from]").val('0');
            $("input[name=" + type + "-to]").val('1000');
            engineHpChange = false
            if ($("#engine-hp").length){
            $("#engine-hp").slider('refresh');
            $("#engine-hp").slider('setValue', [0, 1000], true);}
            var event = $.Event('change');
            $('#engine-hp').trigger(event);
            break
          }
          case 'final-bid':  {
            $("input[name=" + type + "-from]").val('0');
            $("input[name=" + type + "-to]").val('100 000');
            finalBidChange = false
            if ($("#final-bid").length){
            $("#final-bid").slider('refresh');
            $("#final-bid").slider('setValue', [0, 100000], true);}
            break
          }
          case 'body-style': {
            $('.form-check[data-name="body-style"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'loss-type': {
            $('.form-check[data-name="loss-type"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }
                
          case 'airbags': {
              $('.form-check[data-name="airbags"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'status': {
              $('.form-check[data-name="status"] .form-check-obj ').each(function () {
                 $(this).find('input[type=radio]').prop("checked", false);
            })
            $('.form-check[data-name="status"] .form-check-obj input[type=radio][value=All]').prop("checked", true);
            break
          } 
                


          case 'start-code': {
            $('.form-check[data-name="start-code"] .form-check-obj ').each(function () {
               $(this).find('input[type=radio]').prop("checked", false);
          })
          $('.form-check[data-name="start-code"] .form-check-obj input[type=radio][value=All]').prop("checked", true);
          break
        }

        case 'drive-type': {
            $('.form-check[data-name="drive-type"] .form-check-obj ').each(function () {
               $(this).find('input[type=radio]').prop("checked", false);
          })
          $('.form-check[data-name="drive-type"] .form-check-obj input[type=radio][value=All]').prop("checked", true);
          break
        }

        case 'transmission': {
            $('.form-check[data-name="transmission"] .form-check-obj ').each(function () {
               $(this).find('input[type=radio]').prop("checked", false);
          })
          $('.form-check[data-name="transmission"] .form-check-obj input[type=radio][value=All]').prop("checked", true);
          break
        }

          case 'fuel-type': {
            $('.form-check[data-name="fuel-type"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'exterior-color': {
            $('.form-check[data-name="exterior-color"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'engine-type': {
            $('.form-check[data-name="engine-type"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }
                
//          case 'engine-type': {
//            $('.form-check[data-name="engine-type"] .form-check-obj ').each(function () {
//                $(this).find('input[type="checkbox"]').prop("checked", false);
//            })
//            $('.form-check[data-name="engine-type"] .form-check-obj input[type=checkbox][value=All]').prop("checked", true);
//            break
//          }

          case 'cylinders': {
            $('.form-check[data-name="cylinders"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'buy-now': {
            $('.form-check[data-name="buy-now"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'hide-finished': {
            $('.form-check[data-name="hide-finished"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

          case 'hide-finished-preliminary': {
            $('.form-check[data-name="hide-finished-preliminary"] .form-check-obj ').each(function () {
                 $(this).find('input[type=checkbox]').prop("checked", false);
            })
            break
          }

            case 'sale-date': {
                searchAction(false, '', true);
                break
            }

            case 'branch': {
                searchAction(false, '', false, true);
                break
            }

          default: {
            $fSearch.find("input[name=" + type + "]").val('All');
            $('.' + tag).find('button').html('All');
            break
          }
           
        }
        $('.' + tag).find('.active').removeClass('active');
        searchAction(true, type)
    });

});

$(window).on('scroll', function(){
    var header = $('nav.navbar.navbar-expand-lg.navbar-dark');

    if (header.length) {
        var stickyTop = header.offset();
        var sticky = stickyTop.top;
        if (sticky > 10) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }
});


/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

$('li.menu-list-item.has-child.opened > a').each(function(){
   $(this).on('click', function() {
       event.preventDefault();
       if ($(this).parent().hasClass('opened')) {
           $(this).parent().removeClass('opened')
           $(this).find('span i').addClass('closed');
       }else {
            $(this).parent().addClass('opened');
            $(this).find('span i').removeClass('closed');
       }
   }) 
});

var isMobile = false; 

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}


var clearanceBox,
    mainContent,
    carDetails,
    condDetails,
    infoDestination,
    hrefSearch = $('li.nav-item.search a.nav-link').attr('href');

$(document).ready(function(){

    
   mainContent = $('#main-content'); 
   clearanceBox = $('#clearance-calculator'); 
   carDetails = $('#car-details'); 
   condDetails = $('#condition-details');
   infoDestination = $('#info-destination'); 
   
    
    var width = $(this).width();
        
    if (width < 470) {
        $('div#filters-side-options').hide();
        $('#filters-side > a.expand.minus').removeClass('minus').addClass('plus').find('img').attr('src', '/build/img/plus.svg');
//        $('#filters-side > a.expand img').attr('src', '/build/img/plus.svg');
    }
    if (width < 975) {
        carDetails.insertAfter(clearanceBox);
        carDetails.addClass('box-moved');

        infoDestination.insertAfter(carDetails);
        infoDestination.addClass('box-moved');

        $('li.nav-item.search a.nav-link').attr('href','#');
        $('div#clearance-calculator.box-new').insertBefore($('div#car-details.box-moved'));
        
        helpMenuClick();
    } else {
        carDetails.insertAfter(condDetails);
        carDetails.removeClass('box-moved');

        infoDestination.insertAfter(mainContent);
        infoDestination.addClass('box-moved');

        $('li.nav-item.search a.nav-link').attr('href', hrefSearch);
    }   
    
    var yearMax = new Date().getFullYear()+1,
        yearMin = 1900;

        for (var i = yearMax; i>=yearMin; i--){
            $('.search_make_year.from').find('.dropdown-menu').append('<a class="dropdown-item" data-attr="'+ i +'" href="#">'+ i +'</a>');
            $('.search_make_year.to').find('.dropdown-menu').append('<a class="dropdown-item" data-attr="'+ i +'" href="#">'+ i +'</a>');
        }
});

function helpMenuClick() {
//    $('li.nav-item.help-submenu').addClass('mobile');
//    $('li.nav-item.help-submenu.mobile a.nav-link').on('click', function(event){
//          $(this).next('ul').show().addClass('active');
//    });
}

$(window).on("resize", function(){
    
    var width = $(this).width();
    
    if (width < 975) {
        carDetails.insertAfter(clearanceBox);
        carDetails.addClass('box-moved');

        infoDestination.insertAfter(carDetails);
        infoDestination.addClass('box-moved');
//        $('li.nav-item.search a.nav-link').attr('href','#');
    } else {
        carDetails.insertAfter(condDetails);
        carDetails.removeClass('box-moved');

        infoDestination.insertAfter(mainContent);
        infoDestination.addClass('box-moved');
//        $('li.nav-item.search a.nav-link').attr('href', hrefSearch);
    }

});



$('.help-page-sidebar > .box > .box-title').each(function(){
   $(this).on('click', function(event) {
       event.preventDefault();
       if (!$(this).hasClass('active')) {
          $(this).next('ul').slideToggle(200);
       }
   }) 
}); 

if(is_mobile == 0) {
    $('#dropdownCountry').on("click", function(){
        setTimeout(function(){$('#makeFilter').trigger('click').focus();},200);
    });
    $('#dropdownModel').on("click", function(){
        setTimeout(function(){$('#modelFilter').trigger('click').focus();},200);
    });
}

function makeFilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("makeFilter");
  filter = input.value.toUpperCase();
  div = document.getElementById("search_make_manufacturer");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function modelFilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("modelFilter");
  filter = input.value.toUpperCase();
  div = document.getElementById("search_model_manufacturer");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$('.link-history').on("click", function(e){
    
    e.preventDefault();
    e.stopPropagation();
    var button = $(this);
    
    $('.loader').hide();
    $('.archived-offers-section .archieved-items-wrapper').show();

    if($(this).hasClass('archived-section')) {
        
        var link_lang = $(this).attr('data-link-lang');
        var lot_num = $(this).attr('data-lot-attr');
        var type = $(this).attr('data-type');
        
        const swiperArchieved = new Swiper('.swiperArchieved', {
              slidesPerView: 2,
              spaceBetween: 5,
              pagination: {
                el: ".swiperArchieved .swiper-pagination",
              }, 
        });
        
        $.when( $.ajax('https://bid.cars/app/lot/'+lot_num+''+type+'/similar') ).done(function ( value ) {
            
            $('.swiperArchieved .swiper-wrapper').html('');
            
            var iterator = 0,
                bigData = JSON.parse(value);
            $('.archived-offers-section .psa-row.mobile-hide div').remove();
            $('.psa-tabs-content').addClass('archievedOpened');
            $.each(bigData, function (index, value) {
                var link = link_lang + '' + value.lot_number + '/' + value.tag;
                var item = '<div class="box item-box" onclick="location.href=\''+link+'\'"><a href="'+link+'"><div class="gallery"><div id="carousel-car-10" class="carousel slide carousel-product" data-ride="carousel"><div class="carousel-inner" aria-label="auction-1" role="listbox"><div class="carousel-item carousel-archived active" style="background-image: url('+value.image+')"></div></div></div></div></a><div class="item-name"><a href="'+link+'">'+value.name+'</a></div><p class="item-seller no-wrap-text-ellipsis"><span>'+sellerTrans+'</span>'+value.seller.replace(/\*$/, '')+'</p><div class="item-seo-info"><p class="money"><span>'+finalBidTrans+'</span>'+value.final_price_formatted+'</p><p class="no-wrap-text-ellipsis"><span>'+dateTrans+'</span>'+value.date_lang?.[language] || value.date+'</p></div></div>';
                var item_mobile = '<div class="swiper-slide"><div class="box item-box" onclick="location.href=\''+link+'\'"><a href="'+link+'"><div class="gallery"><div id="carousel-car-10" class="carousel slide carousel-product" data-ride="carousel"><div class="carousel-inner" aria-label="auction-1" role="listbox"><div class="carousel-item carousel-archived active" style="background-image: url('+value.image+')"></div></div></div></div></a><div class="item-name"><a href="'+link+'">'+value.name+'</a></div><p class="item-seller no-wrap-text-ellipsis"><span>'+sellerTrans+'</span>'+value.seller.replace(/\*$/, '')+'</p><div class="item-seo-info"><p class="money"><span>'+finalBidTrans+'</span>'+value.final_price_formatted+'</p><p class="no-wrap-text-ellipsis"><span>'+dateTrans+'</span>'+value.date_lang?.[language] || value.date+'</p></div></div></div>';
                $('.archived-offers-section .psa-row.mobile-hide').append(item);
                $('.archived-offers-section .psa-row.desktop-hide .swiper-wrapper').append(item_mobile);
            });
                 
            swiperArchieved.init();
            
        }).fail(function(value){
            $('.archived-offers-section .psa-row .archieved-items-wrapper').html('<p class="info">' + tooManyRequestsTrans + '</p>');
            $('.loader').hide();
        });
        

        
        if($(this).hasClass('active')) {
            $('.archived-offers-section').addClass('hidden');
            $('.link-history.archived-section span.icon').addClass('rotate');
             
        } else {
            $('.archived-offers-section').removeClass('hidden');
            $('.link-history.archived-section span.icon').removeClass('rotate');

            $('.sales-history-table-wr').slideUp(0);
            $('.link-history span.icon').removeClass('rotate');
            $('.loader').show();
        }
        
    } else {
        
        $('.psa-tabs-content').removeClass('archievedOpened');
        
        if($(this).hasClass('active')) {
            $('.sales-history-table-wr').slideUp(0);
            $('table.table.sales-history-table').addClass('table-hidden');
            $('.link-history span.icon').addClass('rotate');
        } else {
            $('table.table.sales-history-table').removeClass('table-hidden');
            $('.sales-history-table-wr').slideDown(0);
            $('.link-history span.icon').removeClass('rotate');
            $('.archived-offers-section').addClass('hidden');
            $('.link-history.archived-section span.icon').removeClass('rotate');
        }
    }
    
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    
    
});

$('.psa-tabs-content .sales-history-table-wr .header a').on("click", function(e){
    $('.sales-history-table-wr').slideToggle(0);
});

$('.psa-tabs-content .archived-offers-section .header a').on("click", function(e){
    $('.archived-offers-section').addClass('hidden');
    $('a.button.link-history.archived-section').removeClass('active');
    
});

$('.search-main').on('submit', function(event){
    event.preventDefault();
    var value = $('.search-main input').val();
    var url = 'https://bid.cars/app/search/fast/'
    $.when( $.ajax(url + value) ).done(function ( data ) {
        var result = JSON.parse(data);
//        console.log(result);
        if (result.status == "error") {
            $('.search-main input').addClass('error');
        } else {
            $('.search-main input').removeClass('error');
            window.location = result.url;
        }
    });
    
    
})

$('.check-rules #close').on('click', function(){
    if($('.check-rules input:checked').length > 0) {
        $('.check-rules').hide();
        $.cookie('rules_apply_bids', '1', { expires: 999 });
    } else {
        $('.check-rules .error').show();
    }
 });
 
 if(!$.cookie('rules_apply_bids')){
     $('.check-rules').show();
 } else {
     $('.check-rules').hide();
 }

$('.copy-vin').on("click", function(){
    value = $('.vin-drop').text(); 

    var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();
    $('.alerts-corner').addClass('show');
    $('.alerts-corner .info').text(vinCopiedTrans);
    setTimeout(function(){
        $('.alerts-corner').removeClass('show');
    }, 2000);
});

$('.copy-lot').on("click", function(){
    value = $('.lot-drop').text(); 

    var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();
    $('.alerts-corner').addClass('show');
    $('.alerts-corner .info').text(lotCopiedTrans);
    setTimeout(function(){
        $('.alerts-corner').removeClass('show');
    }, 2000);
});

$('.copy-company-info').on("click", function(){
    value = $('.company-info-drop').text(); 

    var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();
    $('.alerts-corner').addClass('show');
    $('.alerts-corner .info').text(companyCopiedTrans);
    setTimeout(function(){
        $('.alerts-corner').removeClass('show');
    }, 2000);
});

$('.copy-bank-info').on("click", function(){
    value = $(this).find('.bank-info-drop').text();

    var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();
    $('.alerts-corner').addClass('show');
    $('.alerts-corner .info').text(bankCopiedTrans);
    setTimeout(function(){
        $('.alerts-corner').removeClass('show');
    }, 1000);
});

$(document).ready(function() {
    
    $('a[data-action="scroll"]').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top-68
        }, 800);
    });

    $('div#categories.container.links-filter li.item').each(function() {
      var item = $(this);
      var title = item.find('.title');
      var dropdown = item.find('ul.sub-menu');
          title.on('click', function(event) {
              //dropdown.slideToggle();
          });
    });


    $('.search-results-wrapper .tabs li:not(.archievedBids) a').click(function(e) {
        e.preventDefault(); 

        var value = $(this).data('value');

        // Set active class on the clicked tab
        $('.search-results-wrapper .tabs li').removeClass('active');
        $(this).parent().addClass('active');

        // Trigger the corresponding radio button
        $('input[name="lot-status"][value="' + value + '"]').trigger('click');

        // Save the clicked tab state to local storage
        localStorage.setItem('previousTab', localStorage.getItem('activeTab')); // Prevent changing counters based on cache version
        localStorage.setItem('activeTab', value);
    });
    
  });


$(document).ready(function(){

  // Search all columns
  $('#search_table').keyup(function(){
    // Search Text
    var search = $(this).val();

    // Hide all table tbody rows
    $('.table_data_row tbody tr').hide();

    // Count total search result
    var len = $('.table_data_row tbody tr:not(.notfound) td:contains("'+search+'")').length;

    if(len > 0){
      // Searching text in columns and show match row
      $('.table_data_row tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }

  });
    
    
    $('.menu-psa .profile-menu.mobile-v').on('click', function(){
        $(this).find('button.btn.btn-header-dropdown.dropdown-toggle').toggleClass('active');
        $('ul.navbar-nav.ml-auto.profile-settings.hidden-settings').toggleClass('show');
    });    
    
    $('li.nav-item.help-submenu').on('click', function(){
        $(this).toggleClass('active');
        $(this).find('ul.dropdown.search').toggleClass('show');

        var dropdown = document.querySelector('.navbar-nav li.nav-item ul.dropdown.account.show');

        if (dropdown) {
            var currentHeight = dropdown.offsetHeight;
    
            if (currentHeight === 250) {
                dropdown.style.setProperty('height', (currentHeight + 130) + 'px', 'important');
            } else if (currentHeight === 380) {
                dropdown.style.setProperty('height', (currentHeight - 130) + 'px', 'important');
            }
        }
    });
    
    $('.search-link').on('click', function(){
        $(this).find('button.btn.btn-header-dropdown.dropdown-toggle').toggleClass('active');
        $('.search-link ul.dropdown.search').toggleClass('show');
    });  

    $('.nav-link.account').on('click', function(){
        var dropdown = document.querySelector('.navbar-nav li.nav-item ul.dropdown.account.show');

        if (dropdown) {
            dropdown.style.removeProperty('height');
        }
        
        $('li.nav-item.help-submenu').removeClass('active');
        $('li.nav-item.help-submenu').find('ul.dropdown.search').removeClass('show');
        
        $(this).find('button.btn.btn-header-dropdown.dropdown-toggle').toggleClass('active');
        $('ul.dropdown.account').toggleClass('show');

        $('#mobile-main-menu').fadeToggle(300);
    });  

    $('.navbar-toggler').on('click', function(){
        $('.navbar-toggler-open').toggle();
        $('.navbar-toggler-close').toggle();
    });  
    
    /*setTimeout(function(){
        $('.dropdown.dropdown_select.search_make_transport a.dropdown-item[data-lang="Automobile"]').click();
    }, 1000);*/
    
    $('.tags-style input').each(function() {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        }
    });
    

    // click on filter labels
    $('.tags-style .form-check-obj label.form-check-label').on('click', function() {
        var label = $(this);
        var parentDiv = $(this).parents('.tags-style');
        var parent = $(this).parent();

        
        if (parentDiv.hasClass('multiple-choice')) {
            parent.toggleClass('active');
        } else {
            parentDiv.find('.form-check-obj').removeClass('active');
            parent.addClass('active');
        }
        
        $('a.apply-changes').addClass('visible');
    });
    
    $('a.show_filters').on('click', function(e) {
         e.preventDefault();
         $('.col-3.sidebar.filters_area').addClass('visible');
         $('body').addClass('overflow');

    });
    
    $('a.close-modal').on('click', function(e) {
         e.preventDefault();
         $('.col-3.sidebar.filters_area').removeClass('visible');
         $('a.apply-changes').removeClass('visible');
         $('body').removeClass('overflow');

    });
    
    $(document).on('click', 'a.apply-changes.visible', function(e) {
         e.preventDefault();
         $(this).removeClass('visible');
         $('.col-3.sidebar.filters_area').removeClass('visible');
         $('body').removeClass('overflow');
    });
    
    /*$(document).on('click', '#categories > ul > .item > ul li a', function(){
        $('a.apply-changes').addClass('visible');
    });*/
    
    $('.tags-style .see-more').on('click', function(e){
        e.preventDefault();
        $(this).parent().find('.form-check-obj').attr('style', '');
        $(this).remove();
    });
    
    
$(document).ready(function() {
    // Event listener for the "All" checkbox
    $('.multiple-choice .all-type .form-check-input').on('click', function() {
        var container = $(this).closest('.multiple-choice');
        if ($(this).is(':checked')) {
            container.find('.form-check-obj input[type="checkbox"]').not(this).prop('checked', false);
            container.find('.form-check-obj').not('.all-type').removeClass('active');
        }
    });

    // Event listener for other checkboxes
    $('.multiple-choice .form-check-obj input[type="checkbox"]').not('.all-type .form-check-input').on('click', function() {
        var container = $(this).closest('.multiple-choice');
        var allCheckbox = container.find('.all-type .form-check-input');
        if (allCheckbox.is(':checked')) {
            allCheckbox.prop('checked', false);
            container.find('.all-type').removeClass('active');
        }
        if ($(this).is(':checked')) {
            $(this).closest('.form-check-obj').addClass('active');
        } else {
            $(this).closest('.form-check-obj').removeClass('active');
        }
    });
});



$(document).ready(handleDropdownPlacement);
$(window).resize(handleDropdownPlacement);

function handleDropdownPlacement() {
    var $windowWidth = $(window).width();
    var $sortDropdown = $(".sort-dropdown");
    var $topBar = $(".container-expanded .top_bar");
    var $originalLocation = $(".mobile-buttons");

    if ($windowWidth <= 991) {
        $sortDropdown.appendTo($originalLocation);
    } else {

        $sortDropdown.appendTo($topBar);
        
    }
}

    
});

$('.lot-wrapper-new .box.live_auction .info_bar').on('click', function(e){
    e.preventDefault();

    if ($('.lot-wrapper-new .box.live_auction .content_box').is(':visible'))
        setCookie('live-auction-box', 'hide', 1);
    else
        setCookie('live-auction-box', 'show', 1);

    $('.lot-wrapper-new .box.live_auction').toggleClass('hidden');
    $('.lot-wrapper-new .box.live_auction .content_box').slideToggle();
})

//    $(document).ready(function() {
//      var heightShift = 160;
//      var animationTriggered = false;
//
//      function moveAlongPath(element, path, duration, delay) {
//        var length = path[0].getTotalLength();
//        function animatePath() {
//          // Set the initial position at the start of the path
//          var initialPoint = path[0].getPointAtLength(0);
//          $(element).css({ transform: `translate(${initialPoint.x}px, ${initialPoint.y - heightShift}px)`, opacity: 0 });
//          
//          // Animate scaling and opacity from 0 to 1 smoothly after delay
//          setTimeout(function() {
//            $(element).animate({ opacity: 1, transform: `translate(${initialPoint.x}px, ${initialPoint.y - heightShift}px) scale(1)` }, {
//              duration: 1000,
//              step: function(now, fx) {
//                if (fx.prop === 'opacity') {
//                  $(element).css('transform', `translate(${initialPoint.x}px, ${initialPoint.y - heightShift}px) scale(${now})`);
//                }
//              },
//              complete: function() {
//                // Move along the path
//                $({ len: 0 }).animate({ len: length }, {
//                  duration: duration,
//                  easing: 'linear',
//                  step: function(now) {
//                    var point = path[0].getPointAtLength(now);
//                    var nextPoint = path[0].getPointAtLength(Math.min(now + 1, length));
//                    var angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
//
//                    $(element).css({
//                      transform: `translate(${point.x}px, ${point.y - heightShift}px) rotate(${angle}deg) scale(1)`
//                    });
//                    
//                    // At 98% of the animation length, start fading and scaling out
//                    if (now >= length * 0.98) {
//                      var fadeScaleProgress = (now - length * 0.98) / (length * 0.02);
//                      $(element).css({
//                        opacity: 1 - fadeScaleProgress,
//                        transform: `translate(${point.x}px, ${point.y - heightShift}px) rotate(${angle}deg) scale(${1 - fadeScaleProgress})`
//                      });
//                    }
//                  },
//                  complete: function() {
//                    console.log('Path animation complete');
//                    // Ensure the element is fully hidden at the end
//                    $(element).css({
//                      opacity: 0,
//                      transform: 'scale(0)'
//                    });
//                    // Restart animation after completion
//                    setTimeout(animatePath, 500);
//                  }
//                });
//              }
//            });
//          }, delay);
//        }
//        animatePath();
//      }
//
//      function triggerAnimation() {
//        if (!animationTriggered) {
//          animationTriggered = true;
//          moveAlongPath('#movingDiv1', $('#anim_path1'), 11000, 0);
//          moveAlongPath('#movingDiv2', $('#anim_path2'), 15000, 3000);
//          moveAlongPath('#movingDiv3', $('#anim_path3'), 18000, 9000);
//          moveAlongPath('#movingDiv4', $('#anim_path4'), 17000, 5000);
//          moveAlongPath('#movingDiv5', $('#anim_path5'), 14000, 3000);
//        }
//      }
//
//      $(window).on('scroll', function() {
//        var footerMap = $('#footer-map');
//        if (footerMap.length) {
//          var footerMapTop = footerMap.offset().top;
//          var windowBottom = $(window).scrollTop() + $(window).height();
//          if (windowBottom >= footerMapTop) {
//            triggerAnimation();
//          }
//        }
//      });
//    });

//$(document).ready(function() {
//  const $mapContainer = $('.trucks-container');
//  const $trucks = $('.truck');
//
//  function getRandomLocation() {
//    const width = $mapContainer.width();
//    const height = $mapContainer.height();
//
//    const y = Math.random() * height;
//
//    let minX, maxX;
//    if (y < height * 0.5) {
//      // Top half (full width)
//      minX = 0;
//      maxX = width;
//    } else {
//  
//      const ratio = 1 - (y - height * 0.5) / (height * 0.5);
//      minX = (1 - ratio) * width * 0.18;
//      maxX = width * 0.84 + ratio * width * 0.16; 
//    }
//
//    const x = Math.random() * (maxX - minX) + minX;
//    return { x, y };
//  }
//
//  function updateTruckDirection($truck, prevX, prevY, newX, newY) {
//    if (newX > prevX) {
//      $truck.attr('src', 'https://bid.cars/img/upd/truck_right2.png');
//    } else if (newX < prevX) {
//      $truck.attr('src', 'https://bid.cars/img/upd/truck_left2.png');
//    } else if (newY > prevY) {
//      $truck.attr('src', 'https://bid.cars/img/upd/truck_down.png');
//    } else if (newY < prevY) {
//      $truck.attr('src', 'https://bid.cars/img/upd/truck_up.png');
//    }
//  }
//
//  function moveTruck($truck) {
//    const currentTransform = $truck.css('transform');
//    const [currentX, currentY] = currentTransform !== 'none'
//      ? currentTransform.match(/matrix\(([^,]+),[^,]+,([^,]+),[^,]+,([^,]+),([^,]+)\)/).slice(3, 5).map(parseFloat)
//      : [0, 0];
//
//
//    const { x: newX, y: newY } = getRandomLocation();
//
//    updateTruckDirection($truck, currentX, currentY, newX, newY);
//
//    $truck.css('transform', `translate(${newX}px, ${newY}px)`);
//  }
//
//  function animateTrucks() {
//    $trucks.each(function() {
//      const $truck = $(this);
//
//      const randomDelay = Math.random() * 5000; 
//
//      setTimeout(() => {
//        moveTruck($truck);
//
//        setInterval(() => moveTruck($truck), 8000);
//      }, randomDelay);
//    });
//  }
//
//  animateTrucks();
//});
