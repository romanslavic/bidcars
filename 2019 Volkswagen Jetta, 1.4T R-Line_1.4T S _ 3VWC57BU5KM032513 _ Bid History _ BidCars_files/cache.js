// Funkcja do sprawdzania i aktualizowania cache
async function checkAndUpdateCache() {
    if (localStorage.getItem('cacheUpdateLock')) {
        //console.log("Funkcja checkAndUpdateCache jest zablokowana.");
        return;
    } else {
        //console.log("Wykonywanie funkcji checkAndUpdateCache.");
    }

    localStorage.setItem('cacheUpdateLock', true);
    let cachedUrls = JSON.parse(localStorage.getItem('cachedUrls')) || [];

    for (let item of cachedUrls) {
        let currentTime = Date.now();

        // Sprawdzenie, czy currentTime przekroczył nextCache
        if (currentTime >= item.nextCache) {
            try {
                let response;

                if(item.forceCache == true) {
                    response = await fetch(item.url, {
                        headers: {
                            'Cache-Control': 'no-cache, no-store, must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0'
                        }
                    });
                } else {
                    response = await fetch(item.url, {});
                }

                if (response.ok) {
                    let data = await response.text();

                    // Zaktualizuj datę nextCache na nową
                    item.nextCache = currentTime + (item.cacheTime * 60000) - 15000; // Ponowne ustawienie czasu cache
                    // Możesz wykonać jakieś operacje na pobranych danych
                    console.log(`Cached URL ${item.url}`);
                } else {
                    console.error(`Error fetching ${item.url}:`, response.statusText);
                }
            } catch (error) {
                console.error(`Error fetching ${item.url}:`, error);
            }
        }
    }

    // Zaktualizuj cachedUrls w localStorage
    localStorage.setItem('cachedUrls', JSON.stringify(cachedUrls));
    localStorage.removeItem('cacheUpdateLock');
}

$(document).ready(function() {
    const urlCacheTimes = [
        { url: baseLangUrl, cacheTime: 1 },
        { url: baseLangUrl  + "status", cacheTime: 53, forceCache: true },
        { url: baseLangUrl  + "how-it-works", cacheTime: 54, forceCache: true },
        { url: baseLangUrl  + "schedule", cacheTime: 55, forceCache: true },
        { url: baseLangUrl  + "help", cacheTime: 56, forceCache: true },
        { url: baseLangUrl  + "about-us", cacheTime: 57, forceCache: true },
        { url: baseLangUrl  + "contact", cacheTime: 58, forceCache: true },
        { url: baseLangUrl  + "sales-documents", cacheTime: 59, forceCache: true },
        { url: baseLangUrl  + "blog", cacheTime: 60, forceCache: true }
    ];

    if (localStorage.getItem('userName')) {
        urlCacheTimes.push(
            { url: baseLangUrl  + "user/watchlist?c=" + localStorage.getItem('watchlistAuctionTime'), cacheTime: 1, forceCache: true },
            { url: baseLangUrl  + "user/watchlist/archived", cacheTime: 9, forceCache: true },
            { url: baseLangUrl  + "user/increase-power", cacheTime: 10, forceCache: true }
        );
    }

    urlCacheTimes.push(
        { url: "https://bid.cars/css/new/style-new.css?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/style.css?ver=" + version, cacheTime: 1440, forceCache: false },
    
        { url: "https://bid.cars/css/new/bootstrap-slider.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/carousel.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/carousel.thumbs.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/countrySelect.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/dataTables.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/fancybox.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/font-awesome.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/intlTelInput-24-5-0.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/jquery.svg.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/panzoom.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/select2.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/star-rating.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/swiper-bundle-11-1-14.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/video-js.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap-min-width-1200px.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap-min-width-576px.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap-min-width-768px.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap-min-width-992px.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap-slider.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/bootstrap/bootstrap.min.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/fonts/fonts.css", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/css/new/fonts/fonts2.css", cacheTime: 1440, forceCache: false },
    
        { url: "https://bid.cars/js/new/cache.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/calculator.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/car-video.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/custom.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/live-auction.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/lot.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/main.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/search-results.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/time-left.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/user.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/watchlist.js?ver=" + version, cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/calculate.js?ver=" + version, cacheTime: 1440, forceCache: false },
    
        { url: "https://bid.cars/js/new/external/accounting.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/bootstrap-slider.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/bootstrap.bundle.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/carousel.thumbs.umd.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/carousel.umd.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/countrySelect.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/dataTables.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/fancybox.umd.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/intlTelInput-24-5-0.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery-3.7.1.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery.cookie.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery.countdown.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery.svg.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jquery.validate.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/jstz.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/lottie-player.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/mdb.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/panzoom.umd.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/select2.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/star-rating.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/sticky.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/swiper-bundle-11-1-14.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/utils-tel-24-5-0.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/video.min.js", cacheTime: 1440, forceCache: false },
        { url: "https://bid.cars/js/new/external/wow.min.js", cacheTime: 1440, forceCache: false }
    );

    let cachedUrlsMap = new Map();
    let cachedUrls = JSON.parse(localStorage.getItem('cachedUrls'));
    
    if (cachedUrls) {
        cachedUrls.forEach(item => {
            cachedUrlsMap.set(item.url, item);
        });
    } else {
        cachedUrls = [];
    }
    
    // Aktualizacja lub usuwanie nieprawidłowych elementów z cachedUrls
    cachedUrls = cachedUrls.filter(item => {
        return urlCacheTimes.find(urlCache => urlCache.url === item.url);
    });
    
    // Dodanie nowych elementów, jeśli nie istnieją
    urlCacheTimes.forEach(item => {
        if (!cachedUrlsMap.has(item.url)) {
            cachedUrlsMap.set(item.url, {
                url: item.url,
                cacheTime: item.cacheTime,
                forceCache: item.forceCache,
                nextCache: 0 // Obliczenie nextCache w milisekundach
            });
            cachedUrls.push(cachedUrlsMap.get(item.url));
        }
    });
    
    // Zapisanie zaktualizowanej listy cachedUrls w localStorage
    localStorage.setItem('cachedUrls', JSON.stringify(cachedUrls));
    localStorage.removeItem('cacheUpdateLock');

    setTimeout(function() {
        checkAndUpdateCache();
    }, 5000);
    
    setInterval(checkAndUpdateCache, 10000);
});