if (is_static == 1 || (!localStorage.getItem('userLoginTime') && typeof userLogged !== 'undefined' && userLogged == 1)) {
    $(document).ready(function() {
        ajaxStaticPageRequest();
    });
}

function ajaxStaticPageRequest() {
    $.ajax({
        url: 'https://bid.cars/app/logged-user/info',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            if(localStorage.getItem('liveAuctions') != response.live_auctions || localStorage.getItem('liveAuctionsUpdatedAt') != response.live_auctions_updated_at || localStorage.getItem('canDeposit') != response.can_deposit || localStorage.getItem('telephoneValid') != response.telephone_valid || localStorage.getItem('availablePowerInteger') != response.available_power) {
                if (typeof infoBarPaint === 'function') {
                    setTimeout(function() {
                        if (typeof infoBarPaint === 'function') {
                            infoBarPaint();
                        }
                    }, 500);
                }
            }

            localStorage.setItem('liveAuctionsUpdatedAt', response.live_auctions_updated_at);
            localStorage.setItem('liveAuctions', response.live_auctions);

            let userArray = {
                'id': null,
                'id_hashed':  null,
                'name': null,
                'surname': null,
                'email': null,
                'telephone_prefix': null,
                'telephone': null,
                'telephone_valid': null,
                'available_power_formatted': null,
                'bidding_power_formatted':  null,
                'bids_active_count':  null,
                'bids_active_limit':  null,
                'bids_count':  null,
                'shippings_count':  null,
                'reports':  null,
            };

            if(response.support_telephone.available == 1) {
                $("#contact-telephone-link").attr("href", "tel:" + response.support_telephone.telephone).text(response.support_telephone.telephone);
            }

            if (response.logged === 1) {
                //$.cookie('is_logged', 1, { expires: 1, path: '/' });
                const currentTime = Date.now();

                $('#user-bidding-power').text(response.available_power_formatted + '/' + response.bidding_power_formatted);
                $('#user-bidding-power-2').text(response.available_power_formatted + '/' + response.bidding_power_formatted);
                $('#user-button-name').text(response.name + ' ' + response.surname + ' (' + response.id + ')');
                $('#user-button-name-mobile').text(response.name + ' ' + response.surname + ' (' + response.id + ')');
                $('#user-button-name-mobile-2').text(response.name + ' ' + response.surname + ' (' + response.id + ')');
                $('#user-button-img').attr('alt', response.name + ' ' + response.surname);
                $('#user-button-img-mobile').attr('alt', response.name + ' ' + response.surname);

                $('#available-power-counter').text(response.available_power_formatted);
                $('#bidding-power-counter').text(response.bidding_power_formatted);
                $('#bids-active-counter').text(response.bids_active_count);
                $('#bids-active-limit-counter').text(response.bids_active_limit);

                $('#user-watchlist-counter').text('(' + response.auctions_count + ')');
                $('#user-watchlist-counter-side-menu').text(response.auctions_count);
                $('#user-shipping-counter').text('(' + response.shippings_count + ')');
                $('#user-shipping-counter-side-menu').text(response.shippings_count);
                $('#user-current-bids-counter').text('(' + response.bids_active_count + ')');
                $('#user-current-bids-counter-side-menu').text(response.bids_active_count);
                $('#user-won-bids-counter').text('(' + response.bids_won_count + ')');
                $('#user-won-bids-counter-side-menu').text(response.bids_won_count);

                /*$('#watchlist-auctions-counter').text(' (' + response.auctions_count + ')');
                $('#bids-active-counter-2').text(response.bids_active_count);
                $('#bids-won-counter').text(response.bids_won_count);
                $('#shipping-counter').text(response.shippings_count);*/

                localStorage.setItem('watchlistAuctionCounter', response.auctions_count);
                localStorage.setItem('watchlistAuction', JSON.stringify(response.watchlist));

                if(!localStorage.getItem('watchlistAuctionTime') || response.auctions_count != localStorage.getItem('watchlistAuctionCounter')) {
                    localStorage.setItem('watchlistAuctionTime', currentTime);
                    updateLinksAndCounters();
                }

                localStorage.setItem('bidingPowerInteger', response.bidding_power);
                localStorage.setItem('availablePowerInteger', response.available_power);

                localStorage.setItem('userBiddingPower', response.available_power_formatted + '/' + response.bidding_power_formatted);
                localStorage.setItem('userName', response.name + ' ' + response.surname + ' (' + response.id + ')');

                localStorage.setItem('availablePowerCounter', response.available_power_formatted);
                localStorage.setItem('biddingPowerCounter', response.bidding_power_formatted);
                localStorage.setItem('bidsActiveCounter', response.bids_active_count);
                localStorage.setItem('bidsActiveLimitCounter', response.bids_active_limit);
                localStorage.setItem('bidsWonCounter', response.bids_won_count);
                localStorage.setItem('shippingsCounter', response.shippings_count);
                localStorage.setItem('canDeposit', response.can_deposit);
                localStorage.setItem('telephoneValid', response.telephone_valid);

                $('#not-logged-buttons').css('display', 'none');
                $('#not-logged-buttons-mobile').css('display', 'none');
                $('#logged-buttons').css('display', '');
                $('#logged-buttons-mobile').css('display', '');

                if (!localStorage.getItem('userLoginTime')) {
                    //fetchCachedPage(baseLangUrl + 'user/watchlist');
                    fetchCachedPage(baseLangUrl + 'user/watchlist?c=' + localStorage.getItem('watchlistAuctionTime'));
                    fetchCachedPage(baseLangUrl + 'user/watchlist/archived');
                    fetchCachedPage(baseLangUrl + 'user/increase-power');
                    localStorage.setItem('userLoginTime', currentTime);
                }

                userArray = {
                    'id': response.id,
                    'id_hashed':  response.id_hashed,
                    'name': response.name,
                    'surname': response.surname,
                    'email': response.email,
                    'telephone_prefix': response.telephone_prefix,
                    'telephone': response.telephone,
                    'telephone_valid': response.telephone_valid,
                    'available_power_formatted': response.available_power_formatted,
                    'bidding_power_formatted':  response.bidding_power_formatted,
                    'bids_active_count':  response.bids_active_count,
                    'bids_active_limit':  response.bids_active_limit,
                    'bids_count':  response.bids_count,
                    'shippings_count':  response.shippings_count,
                    'reports':  response.reports,
                };

                console.log("Logged in - perform action X");
            } else {
                //$.removeCookie('is_logged', { path: '/' });
                localStorage.removeItem('watchlistAuctionCounter');
                localStorage.removeItem('watchlistAuctionTime');

                localStorage.removeItem('bidingPowerInteger');
                localStorage.removeItem('availablePowerInteger');

                localStorage.removeItem('userBiddingPower');
                localStorage.removeItem('userName');

                localStorage.removeItem('availablePowerCounter');
                localStorage.removeItem('biddingPowerCounter');
                localStorage.removeItem('bidsActiveCounter');
                localStorage.removeItem('bidsActiveLimitCounter');
                localStorage.removeItem('bidsWonCounter');
                localStorage.removeItem('shippingsCounter');
                localStorage.removeItem('canDeposit');
                localStorage.removeItem('telephoneValid');

                localStorage.removeItem('userLoginTime');
                
                $('#not-logged-buttons').css('display', '');
                $('#not-logged-buttons-mobile').css('display', '');
                $('#logged-buttons').css('display', 'none');
                $('#logged-buttons-mobile').css('display', 'none');

                console.log("Not logged in - perform action Y");

                const url = new URL(window.location.href);
                if (url.hostname === 'bid.cars' && (url.pathname.includes('/user/watchlist') || url.pathname.includes('/user/watchlist/archived') || url.pathname.includes('/user/increase-power')))
                    location.href = baseLangUrl + 'login';
            }

            if (typeof chatraStatic === 'function' && response.show_telephone_chat == true) {
                chatraStatic(response.logged, response.visitor_country, userArray);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching logged user info:', textStatus, errorThrown);
        }
    });
}

function fetchCachedPage(url) {
    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        },
        success: function(data) {
            console.log('Pobrano stronę: ', url);
        },
        error: function(error) {
            console.log('Błąd podczas pobierania strony: ', url);
        }
    });
}

// Funkcja do wykonania, gdy watchlistAuctionTime lub watchlistAuctionCounter zostanie zmienione
function updateLinksAndCounters() {
    const watchlistAuctionTime = localStorage.getItem('watchlistAuctionTime');
    const watchlistAuctionCounter = localStorage.getItem('watchlistAuctionCounter');
    
    $('a.watchlist-link').each(function() {
        const link = $(this);
        const url = new URL(link.attr('href'));
        if (url.hostname === 'bid.cars' && url.pathname.includes('/user/watchlist')) {
            url.searchParams.set('c', watchlistAuctionTime);
            link.attr('href', url.toString());
        }
    });

    $('#watchlist-auctions-counter').text('(' + watchlistAuctionCounter + ')');
    $('#user-watchlist-counter').text('(' + watchlistAuctionCounter + ')');
    $('#user-watchlist-counter-tab').text('(' + watchlistAuctionCounter + ')');
    $('#user-watchlist-counter-side-menu').text(watchlistAuctionCounter);
}

function updateBiddingPowerCounters() {
    const availablePowerCounter = localStorage.getItem('availablePowerCounter');
    const biddingPowerCounter = localStorage.getItem('biddingPowerCounter');
    const bidsActiveCounter = localStorage.getItem('bidsActiveCounter');
    const bidsActiveLimitCounter = localStorage.getItem('bidsActiveLimitCounter');
    const bidsWonCounter = localStorage.getItem('bidsWonCounter');
    const shippingsCounter = localStorage.getItem('shippingsCounter');
    const userBiddingPower = localStorage.getItem('userBiddingPower');

    $('#available-power-counter').text(availablePowerCounter);
    $('#bidding-power-counter').text(biddingPowerCounter);
    $('#bids-active-counter').text(bidsActiveCounter);
    $('#bids-active-limit-counter').text(bidsActiveLimitCounter);

    $('#user-current-bids-counter').text('(' + bidsActiveCounter + ')');
    $('#user-won-bids-counter').text('(' + bidsWonCounter + ')');
    $('#user-shipping-counter').text('(' + shippingsCounter + ')');

    $('#user-current-bids-counter-side-menu').text(bidsActiveCounter);
    $('#user-won-bids-counter-side-menu').text(bidsWonCounter);
    $('#user-shipping-counter-side-menu').text(shippingsCounter);

    $('#user-bidding-power').text(userBiddingPower);
    $('#user-bidding-power-2').text(userBiddingPower);

    if (typeof updateIndicatorHeights === 'function') {
        updateIndicatorHeights();
    }
}

// Funkcja do przeładowania strony watchlist z nowym c
function reloadWatchlistPage() {
    const watchlistAuctionTime = localStorage.getItem('watchlistAuctionTime');
    const url = new URL(window.location.href);
    if (url.pathname.includes('/user/watchlist') && !url.pathname.includes('/archived')) {
        url.searchParams.set('c', watchlistAuctionTime);
        window.location.href = url.toString();
    }
}

function reloadCurrentBidsPage() {
    const url = new URL(window.location.href);
    if (url.pathname.includes('/user/bids/current')) {
        location.reload();
    }
}

function reloadWonBidsPage() {
    const url = new URL(window.location.href);
    if (url.pathname.includes('/user/bids/won')) {
        location.reload();
    }
}

function reloadLostBidsPage() {
    const url = new URL(window.location.href);
    if (url.pathname.includes('/user/bids/lost')) {
        location.reload();
    }
}

function reloadShippingPage() {
    const url = new URL(window.location.href);
    if (url.pathname.includes('/user/shipping')) {
        location.reload();
    }
}

// Listener dla zmian w localStorage w innych kartach
$(window).on('storage', function(event) {
    /*if(event.originalEvent.key === 'userName') {
        location.reload();
    }*/

    if (event.originalEvent.key === 'watchlistAuctionTime' || event.originalEvent.key === 'watchlistAuctionCounter') {
        updateLinksAndCounters();
        setTimeout(function() {
            reloadWatchlistPage();
        }, 500);        
    }

    if (event.originalEvent.key === 'biddingPowerCounter' || event.originalEvent.key === 'availablePowerCounter' 
    || event.originalEvent.key === 'bidsActiveLimitCounter' || event.originalEvent.key === 'bidsActiveCounter' 
    || event.originalEvent.key === 'bidsWonCounter' || event.originalEvent.key === 'shippingsCounter'
    || event.originalEvent.key === 'userBiddingPower') {
        updateBiddingPowerCounters();
    }

    if (event.originalEvent.key === 'bidsActiveCounter' || event.originalEvent.key === 'availablePowerCounter') {
        setTimeout(function() {
            reloadCurrentBidsPage();
            reloadLostBidsPage();
        }, 500);
    }

    if (event.originalEvent.key === 'bidsWonCounter') {
        setTimeout(function() {
            reloadWonBidsPage();
        }, 500);
    }

    if (event.originalEvent.key === 'shippingsCounter') {
        setTimeout(function() {
            reloadShippingPage();
        }, 500);
    }

    if (event.originalEvent.key === 'canDeposit' || event.originalEvent.key === 'telephoneValid' || event.originalEvent.key === 'availablePowerInteger' || event.originalEvent.key === 'liveAuctions' || event.originalEvent.key === 'liveAuctionsUpdatedAt') {
        setTimeout(function() {
            if (typeof infoBarPaint === 'function') {
                infoBarPaint();
            }
        }, 500);
    }
});

$(document).ready(function() {
    updateLinksAndCounters();
});