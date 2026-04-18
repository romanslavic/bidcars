// Copart Fees
// buyerFeeCopart, buyerFeeCopartBroker, buyerFeeCopartCrashedToys, buyerFeeHeavyVehiclesCopart
// internetBidFeeCopart

function buyerFeeCopart(lotPrice) {
    const fees = [
        { max: 50, fee: 1 },
        { max: 100, fee: 1 },
        { max: 200, fee: 25 },
        { max: 300, fee: 60 },
        { max: 350, fee: 85 },
        { max: 400, fee: 100 },
        { max: 450, fee: 125 },
        { max: 500, fee: 135 },
        { max: 550, fee: 145 },
        { max: 600, fee: 155 },
        { max: 700, fee: 170 },
        { max: 800, fee: 195 },
        { max: 900, fee: 215 },
        { max: 1000, fee: 230 },
        { max: 1200, fee: 250 },
        { max: 1300, fee: 270 },
        { max: 1400, fee: 285 },
        { max: 1500, fee: 300 },
        { max: 1600, fee: 315 },
        { max: 1700, fee: 330 },
        { max: 1800, fee: 350 },
        { max: 2000, fee: 370 },
        { max: 2400, fee: 390 },
        { max: 2500, fee: 425 },
        { max: 3000, fee: 460 },
        { max: 3500, fee: 505 },
        { max: 4000, fee: 555 },
        { max: 4500, fee: 600 },
        { max: 5000, fee: 625 },
        { max: 5500, fee: 650 },
        { max: 6000, fee: 675 },
        { max: 6500, fee: 700 },
        { max: 7000, fee: 720 },
        { max: 7500, fee: 755 },
        { max: 8000, fee: 775 },
        { max: 8500, fee: 800 },
        { max: 9000, fee: 820 },
        { max: 10000, fee: 820 },
        { max: 10500, fee: 850 },
        { max: 11000, fee: 850 },
        { max: 11500, fee: 850 },
        { max: 12000, fee: 860 },
        { max: 12500, fee: 875 },
        { max: 15000, fee: 890 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.06;
}

function buyerFeeCopartBroker(lotPrice) {
    const fees = [
        { max: 50, fee: 25 },
        { max: 100, fee: 45 },
        { max: 200, fee: 80 },
        { max: 300, fee: 130 },
        { max: 350, fee: 137.5 },
        { max: 400, fee: 145 },
        { max: 450, fee: 175 },
        { max: 500, fee: 185 },
        { max: 550, fee: 205 },
        { max: 600, fee: 210 },
        { max: 700, fee: 240 },
        { max: 800, fee: 270 },
        { max: 900, fee: 295 },
        { max: 1000, fee: 320 },
        { max: 1200, fee: 375 },
        { max: 1300, fee: 395 },
        { max: 1400, fee: 410 },
        { max: 1500, fee: 430 },
        { max: 1600, fee: 445 },
        { max: 1700, fee: 465 },
        { max: 1800, fee: 485 },
        { max: 2000, fee: 510 },
        { max: 2400, fee: 535 },
        { max: 2500, fee: 570 },
        { max: 3000, fee: 610 },
        { max: 3500, fee: 655 },
        { max: 4000, fee: 705 },
        { max: 4500, fee: 725 },
        { max: 5000, fee: 750 },
        { max: 5500, fee: 775 },
        { max: 6000, fee: 800 },
        { max: 6500, fee: 825 },
        { max: 7000, fee: 845 },
        { max: 7500, fee: 880 },
        { max: 8000, fee: 900 },
        { max: 8500, fee: 925 },
        { max: 9000, fee: 945 },
        { max: 10000, fee: 945 },
        { max: 10500, fee: 1000 },
        { max: 11000, fee: 1000 },
        { max: 11500, fee: 1000 },
        { max: 12000, fee: 1000 },
        { max: 12500, fee: 1000 },
        { max: 15000, fee: 1000 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.075;
}

function buyerFeeCopartCrashedToys(lotPrice) {
    const fees = [
        { max: 50, fee: 30.00 },
        { max: 100, fee: 45.00 },
        { max: 200, fee: 70.00 },
        { max: 300, fee: 105.00 },
        { max: 350, fee: 130.00 },
        { max: 400, fee: 132.50 },
        { max: 450, fee: 145.00 },
        { max: 500, fee: 150.00 },
        { max: 550, fee: 165.00 },
        { max: 600, fee: 170.00 },
        { max: 700, fee: 190.00 },
        { max: 800, fee: 225.00 },
        { max: 900, fee: 250.00 },
        { max: 1000, fee: 270.00 },
        { max: 1200, fee: 300.00 },
        { max: 1300, fee: 335.00 },
        { max: 1400, fee: 335.00 },
        { max: 1500, fee: 360.00 },
        { max: 1600, fee: 370.00 },
        { max: 1700, fee: 400.00 },
        { max: 1800, fee: 415.00 },
        { max: 2000, fee: 465.00 },
        { max: 2400, fee: 500.00 },
        { max: 2500, fee: 510.00 },
        { max: 3000, fee: 570.00 },
        { max: 3500, fee: 695.00 },
        { max: 4000, fee: 710.00 },
        { max: 4500, fee: 710.00 },
        { max: 5000, fee: 720.00 },
        { max: 5500, fee: 780.00 },
        { max: 6000, fee: 815.00 },
        { max: 6500, fee: 850.00 },
        { max: 7000, fee: 880.00 },
        { max: 7500, fee: 900.00 },
        { max: 8000, fee: 1020.00 },
        { max: 9000, fee: 1025.00 },
        { max: 10000, fee: 1050.00 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.105;
}

function buyerFeeHeavyVehiclesCopart(lotPrice) {
    const fees = [
        { max: 50, fee: 1 },
        { max: 100, fee: 1 },
        { max: 200, fee: 25 },
        { max: 300, fee: 60 },
        { max: 350, fee: 85 },
        { max: 400, fee: 100 },
        { max: 450, fee: 125 },
        { max: 500, fee: 135 },
        { max: 550, fee: 145 },
        { max: 600, fee: 155 },
        { max: 700, fee: 170 },
        { max: 800, fee: 195 },
        { max: 900, fee: 215 },
        { max: 1000, fee: 230 },
        { max: 1200, fee: 250 },
        { max: 1300, fee: 270 },
        { max: 1400, fee: 285 },
        { max: 1500, fee: 300 },
        { max: 1600, fee: 315 },
        { max: 1700, fee: 330 },
        { max: 1800, fee: 350 },
        { max: 2000, fee: 370 },
        { max: 2400, fee: 390 },
        { max: 2500, fee: 425 },
        { max: 3000, fee: 460 },
        { max: 3500, fee: 505 },
        { max: 4000, fee: 555 },
        { max: 4500, fee: 600 },
        { max: 5000, fee: 625 },
        { max: 5500, fee: 650 },
        { max: 6000, fee: 675 },
        { max: 6500, fee: 700 },
        { max: 7000, fee: 720 },
        { max: 7500, fee: 755 },
        { max: 8000, fee: 775 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.10;
}

function internetBidFeeCopart(lotPrice) {
    const feeThresholds = [
        { max: 100, fee: 0 },
        { max: 500, fee: 50 },
        { max: 1000, fee: 65 },
        { max: 1500, fee: 85 },
        { max: 2000, fee: 95 },
        { max: 4000, fee: 110 },
        { max: 6000, fee: 125 },
        { max: 8000, fee: 145 }
    ];

    for (let i = 0; i < feeThresholds.length; i++) {
        if (lotPrice < feeThresholds[i].max) {
            return feeThresholds[i].fee;
        }
    }

    // Default case for all prices above
    return 160;
}

// IAAI Fees
// buyerFeeIAAI, buyerFeeIAAIBroker, buyerFeeIAAIRecRides, buyerFeeHeavyVehiclesIAAI
// internetBidFeeIAAI

function buyerFeeIAAI(lotPrice) {
    const fees = [
        { max: 100, fee: 1 },
        { max: 200, fee: 25 },
        { max: 300, fee: 60 },
        { max: 350, fee: 85 },
        { max: 400, fee: 100 },
        { max: 450, fee: 125 },
        { max: 500, fee: 135 },
        { max: 550, fee: 145 },
        { max: 600, fee: 155 },
        { max: 700, fee: 170 },
        { max: 800, fee: 195 },
        { max: 900, fee: 215 },
        { max: 1000, fee: 230 },
        { max: 1200, fee: 250 },
        { max: 1300, fee: 270 },
        { max: 1400, fee: 285 },
        { max: 1500, fee: 300 },
        { max: 1600, fee: 315 },
        { max: 1700, fee: 330 },
        { max: 1800, fee: 350 },
        { max: 2000, fee: 370 },
        { max: 2400, fee: 390 },
        { max: 2500, fee: 425 },
        { max: 3000, fee: 460 },
        { max: 3500, fee: 505 },
        { max: 4000, fee: 555 },
        { max: 4500, fee: 600 },
        { max: 5000, fee: 625 },
        { max: 5500, fee: 650 },
        { max: 6000, fee: 675 },
        { max: 6500, fee: 700 },
        { max: 7000, fee: 720 },
        { max: 7500, fee: 755 },
        { max: 8000, fee: 775 },
        { max: 8500, fee: 800 },
        { max: 10000, fee: 820 },
        { max: 11500, fee: 850 },
        { max: 12000, fee: 860 },
        { max: 12500, fee: 875 },
        { max: 15000, fee: 890 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.06;
}

function buyerFeeIAAIBroker(lotPrice) {
    const fees = [
        { max: 50, fee: 25 },
        { max: 100, fee: 45 },
        { max: 200, fee: 80 },
        { max: 300, fee: 130 },
        { max: 350, fee: 137.5 },
        { max: 400, fee: 145 },
        { max: 450, fee: 175 },
        { max: 500, fee: 185 },
        { max: 550, fee: 205 },
        { max: 600, fee: 210 },
        { max: 700, fee: 240 },
        { max: 800, fee: 270 },
        { max: 900, fee: 295 },
        { max: 1000, fee: 320 },
        { max: 1200, fee: 375 },
        { max: 1300, fee: 395 },
        { max: 1400, fee: 410 },
        { max: 1500, fee: 430 },
        { max: 1600, fee: 445 },
        { max: 1700, fee: 465 },
        { max: 1800, fee: 485 },
        { max: 2000, fee: 510 },
        { max: 2400, fee: 535 },
        { max: 2500, fee: 570 },
        { max: 3000, fee: 610 },
        { max: 3500, fee: 655 },
        { max: 4000, fee: 705 },
        { max: 4500, fee: 725 },
        { max: 5000, fee: 750 },
        { max: 5500, fee: 775 },
        { max: 6000, fee: 800 },
        { max: 6500, fee: 825 },
        { max: 7000, fee: 845 },
        { max: 7500, fee: 880 },
        { max: 8000, fee: 900 },
        { max: 8500, fee: 925 },
        { max: 10000, fee: 945 },
        { max: 15000, fee: 1000 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.075;
}

function buyerFeeIAAIRecRides(lotPrice) {
    const fees = [
        { max: 50, fee: 30 },
        { max: 100, fee: 45 },
        { max: 200, fee: 70 },
        { max: 300, fee: 100 },
        { max: 400, fee: 120 },
        { max: 500, fee: 150 },
        { max: 600, fee: 170 },
        { max: 700, fee: 195 },
        { max: 800, fee: 225 },
        { max: 900, fee: 245 },
        { max: 1000, fee: 265 },
        { max: 1200, fee: 290 },
        { max: 1400, fee: 325 },
        { max: 1600, fee: 350 },
        { max: 1800, fee: 375 },
        { max: 2000, fee: 425 },
        { max: 2200, fee: 450 },
        { max: 2500, fee: 475 },
        { max: 3000, fee: 500 },
        { max: 3500, fee: 575 },
        { max: 4000, fee: 600 },
        { max: 5000, fee: 650 },
        { max: 6000, fee: 700 },
        { max: 7000, fee: 750 },
        { max: 8000, fee: 825 },
        { max: 9000, fee: 900 },
        { max: 10000, fee: 975 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.105;
}

function buyerFeeHeavyVehiclesIAAI(lotPrice) {
    const fees = [
        { max: 100, fee: 1 },
        { max: 200, fee: 25 },
        { max: 300, fee: 60 },
        { max: 350, fee: 85 },
        { max: 400, fee: 100 },
        { max: 450, fee: 125 },
        { max: 500, fee: 135 },
        { max: 550, fee: 145 },
        { max: 600, fee: 155 },
        { max: 700, fee: 170 },
        { max: 800, fee: 195 },
        { max: 900, fee: 215 },
        { max: 1000, fee: 230 },
        { max: 1200, fee: 250 },
        { max: 1300, fee: 270 },
        { max: 1400, fee: 285 },
        { max: 1500, fee: 300 },
        { max: 1600, fee: 315 },
        { max: 1700, fee: 330 },
        { max: 1800, fee: 350 },
        { max: 2000, fee: 370 },
        { max: 2400, fee: 390 },
        { max: 2500, fee: 425 },
        { max: 3000, fee: 460 },
        { max: 3500, fee: 505 },
        { max: 4000, fee: 555 },
        { max: 4500, fee: 600 },
        { max: 5000, fee: 625 },
        { max: 5500, fee: 650 },
        { max: 6000, fee: 675 },
        { max: 6500, fee: 700 },
        { max: 7000, fee: 720 },
        { max: 7500, fee: 755 },
        { max: 8000, fee: 775 }
    ];

    for (let i = 0; i < fees.length; i++) {
        if (lotPrice < fees[i].max) {
            return fees[i].fee;
        }
    }

    // Default case for all prices above
    return lotPrice * 0.10;
}

function internetBidFeeIAAI(lotPrice) {
    const feeThresholds = [
        { max: 100, fee: 0 },
        { max: 500, fee: 50 },
        { max: 1000, fee: 65 },
        { max: 1500, fee: 85 },
        { max: 2000, fee: 95 },
        { max: 4000, fee: 110 },
        { max: 6000, fee: 125 },
        { max: 8000, fee: 145 }
    ];

    for (let i = 0; i < feeThresholds.length; i++) {
        if (lotPrice < feeThresholds[i].max) {
            return feeThresholds[i].fee;
        }
    }

    // Default case for all prices above
    return 160;
}

function formatCurrency(amount, currency) {
    if(currency == 'PLN') {
        return accounting.formatMoney(amount, {
            symbol: currency,
            precision: 0,
            thousand: " ",
            decimal: ",",
            format: "%v %s"
        });
    } else if(currency == 'USD') {
        return accounting.formatMoney(amount, {
            symbol: "$",
            precision: 0,
            thousand: ",",
            decimal: ".",
            format: "%s%v"
        });
    }
}

var customsAmount = 0;
var totalFees = 0;
var totalFees2 = 0;

var truckingToPoland = 0;
var documentTranslationFee = 0;
var brokerFee = 0;
var hazardousCargoFee = 0;
var oversizedVehicleFee = 0;
var exciseTax = 0;

var whatCurrency = "PLN";

function recalculateTruckingToPoland() {
    const checkbox = document.getElementById("inlineCheckbox2");
    const truckingValueField = document.getElementById("truckingToPoland");
    const displayElement = document.getElementById("trucking-to-poland-amount");

    if (checkbox && checkbox.checked) {
        truckingToPoland = parseInt(truckingValueField.value) || 0;
    } else {
        truckingToPoland = 0;
    }

    if (displayElement) {
        displayElement.innerHTML = formatCurrency(truckingToPoland, "PLN");
    }

    setEstimatorLocationName();
}

function setEstimatorLocationName() {
    const checkbox = document.getElementById("inlineCheckbox2");
    const locationNameElement = document.getElementById('estimator-location-name');
    const locationImgElement = document.getElementById('estimator-location-img');

    if (locationImgElement && checkbox && checkbox.checked) {
        locationImgElement.style.display = 'block';
        updateLocationName(locationNameElement);
    } else if(locationImgElement) {
        locationImgElement.style.display = 'none';
        locationNameElement.textContent = '---';
    }
}

function updateLocationName(locationNameElement) {
    const select = document.getElementById('truckingToPoland');
    const selectedOption = select.options[select.selectedIndex];
    const wojewodztwo = selectedOption.getAttribute('data-wojewodztwo');
    const formattedWojewodztwo = formatWojewodztwo(wojewodztwo);
    
    locationNameElement.textContent = formattedWojewodztwo;
}

function formatWojewodztwo(wojewodztwo) {
    return wojewodztwo.charAt(0).toUpperCase() + wojewodztwo.slice(1).toLowerCase();
}

function pushButtonTruckingToPoland() {
    recalculateTruckingToPoland();
    pushButtonCustoms();
    includeNum();
}

function recalculateDocumentsTranslation() {
    const checkbox = document.getElementById("inlineCheckbox3");
    const amountDisplayElement = document.getElementById("document-translation-amount");

    // Determine the document translation fee based on the checkbox state
    documentTranslationFee = checkbox && checkbox.checked ? 260 : 0;

    // Update the display element if it exists
    if (amountDisplayElement) {
        amountDisplayElement.innerHTML = formatCurrency(documentTranslationFee, "PLN");
    }
}

function pushButtonDocumentsTranslation() {
    recalculateDocumentsTranslation();
    pushButtonCustoms();
    includeNum();
}

function recalculateRestrictedStates() {
    const checkbox = document.getElementById("inlineCheckbox4");
    const amountDisplayElement = document.getElementById("restricted-states-amount");

    // Calculate the broker fee based on the checkbox state
    brokerFee = checkbox && checkbox.checked ? 100 : 0;

    // Update the display element if it exists
    if (amountDisplayElement) {
        amountDisplayElement.innerHTML = formatCurrency(brokerFee, "USD");
    }
}

function pushButtonRestrictedStates() {
    recalculateRestrictedStates();
    pushButton();
    pushButtonCustoms();
    includeNum();
}

function recalculateHazardousCargo() {
    const checkbox = document.getElementById("inlineCheckbox5");
    const amountDisplayElement = document.getElementById("hazardous-cargo-amount");

    // Calculate the hazardous cargo fee based on the checkbox state
    hazardousCargoFee = checkbox && checkbox.checked ? 100 : 0;

    // Update the display element if it exists
    if (amountDisplayElement) {
        amountDisplayElement.innerHTML = formatCurrency(hazardousCargoFee, "USD");
    }
}

function pushButtonHazardousCargo() {
    recalculateHazardousCargo();
    pushButton();
    pushButtonCustoms();
    includeNum();
}

function recalculateOversizedVehicle() {
    const checkbox = document.getElementById("inlineCheckbox6");
    const amountDisplayElement = document.getElementById("oversized-vehicle-amount");

    const checkboxOpposite = document.getElementById("inlineCheckbox7");
    if (checkbox.checked && checkboxOpposite.checked) {
        checkboxOpposite.checked = false;
        recalculateOversizedVehiclePlus();
    }

    // Determine the oversized vehicle fee based on the checkbox state
    oversizedVehicleFee = checkbox && checkbox.checked ? 800 : 0;

    // Update the display element if it exists
    if (amountDisplayElement) {
        const feePrefix = oversizedVehicleFee !== 0 ? '$250-' : '';
        amountDisplayElement.innerHTML = feePrefix + formatCurrency(oversizedVehicleFee, "USD");
    }
}

function pushButtonOversizedVehicle() {
    recalculateOversizedVehicle();
    pushButton();
    pushButtonCustoms();
    includeNum();
}

function recalculateOversizedVehiclePlus() {
    const checkbox = document.getElementById("inlineCheckbox7");
    const amountDisplayElement = document.getElementById("oversized-vehicle-plus-amount");

    const checkboxOpposite = document.getElementById("inlineCheckbox6");
    if (checkbox.checked && checkboxOpposite.checked) {
        checkboxOpposite.checked = false;
        recalculateOversizedVehicle();
    }

    // Determine the oversized vehicle fee based on the checkbox state
    oversizedVehicleFee = checkbox && checkbox.checked ? 1600 : 0;

    // Update the display element if it exists
    if (amountDisplayElement) {
        const feePrefix = oversizedVehicleFee !== 0 ? '$800-' : '';
        amountDisplayElement.innerHTML = feePrefix + formatCurrency(oversizedVehicleFee, "USD");
    }
}

function pushButtonOversizedVehiclePlus() {
    recalculateOversizedVehiclePlus();
    pushButton();
    pushButtonCustoms();
    includeNum();
}

function pushAmount() {
    pushButton();
    pushButtonCustoms();
}

// Basic calculator
function pushButton() {
    if((currentEstimator == 'estimated' || currentEstimatorHover == 'estimated') && estimatedAmount1 > 0 && estimatedAmount1 != estimatedAmount2) {
        pushButtonDouble();
    } else {
        pushButtonSingle();
    }
}

function pushButtonSingle() {
    if(currentEstimator == 'estimated' || currentEstimatorHover == 'estimated')
        var lotPrice = validateLotPrice(estimatedAmount1);
    else if(currentEstimator == 'buy-now' || currentEstimatorHover == 'buy-now')
        var lotPrice = validateLotPrice(buyNowAmount);
    else {
        if(finalBid>0 && finalCalculatorBidButton=='current-bid')
            var lotPrice = validateLotPrice(finalBid);
        else if(finalCalculatorBidButton == 'your-bid')
            var lotPrice = validateLotPrice(yourBid);
        else
            var lotPrice = validateLotPrice(currentBid);
    }

    const auctionFees = calculateAuctionFees(lotPrice);
    const trucking = getTruckingCost();
    const shipping = getShippingCost();

    totalFees = calculateTotalFees(lotPrice, auctionFees, trucking, shipping);
    
    updateUISingle({
        lotPrice: lotPrice,
        auctionFees: auctionFees,
        trucking: trucking,
        shipping: shipping,
        totalFees: totalFees
    });
}

function pushButtonDouble() {
    const lotPrice = validateLotPrice(estimatedAmount1);
    const lotPrice2 = validateLotPrice(estimatedAmount2);

    const auctionFees = calculateAuctionFees(estimatedAmount1);
    const auctionFees2 = calculateAuctionFees(estimatedAmount2);

    const trucking = getTruckingCost();
    const shipping = getShippingCost();

    totalFees = calculateTotalFees(lotPrice, auctionFees, trucking, shipping);
    totalFees2 = calculateTotalFees(lotPrice2, auctionFees2, trucking, shipping);
    
    updateUIDouble({
        lotPrice: lotPrice,
        lotPrice2: lotPrice2,
        auctionFees: auctionFees,
        auctionFees2: auctionFees2,
        trucking: trucking,
        shipping: shipping,
        totalFees: totalFees,
        totalFees2: totalFees2
    });
}

function validateLotPrice(price) {
    return isInteger(price) ? price : 0;
}

function isInteger(n) {
    return n === +n && n === (n | 0);
}

function getTruckingCost() {
    return parseInt(trucking) || 0;
}

function getShippingCost() {
    return parseInt(document.getElementById("shipping").value) || 0;
}

function calculateTotalFees(lotPrice, auctionFees, trucking, shipping) {
    return lotPrice + auctionFees + trucking + shipping;
}

function calculateAuctionFees(lotPrice) {
    let fees = 0;
    if(auctionType == 'Copart')
        fees = 95 + 15 + 20; // Gate Fee and Environmental Fee and Title Pickup Fee
    else if(auctionType == 'IAAI') {
        if(isCheckboxChecked("inlineCheckbox4"))
            fees = 95 + 15 + 20 + 35; // Service Fee and Environmental Fee and Title Handling Fee and Broker Fee
        else
            fees = 95 + 15 + 20; // Service Fee and Environmental Fee and Title Handling Fee
    }

    let feeDetails = {};

    switch (auctionType) {
        case "Copart":
            feeDetails = calculateCopartFees(lotPrice);
            break;
        case "IAAI":
            feeDetails = calculateIAAIFees(lotPrice);
            break;
        default:
            console.error("Unsupported auction type");
            return 0;
    }

    fees += feeDetails.fees;
    updateTooltips(auctionType, feeDetails.tooltips);
    return fees;
}

function calculateCopartFees(lotPrice) {
    let buyerFee = 0;
    let feeTooltip = '';
    
    if (isHeavy == "1" || custom_fees == "4") {
        buyerFee = buyerFeeHeavyVehiclesCopart(lotPrice);
    } else if (custom_fees == "1") {
        buyerFee = buyerFeeCopartCrashedToys(lotPrice);
    } else {
        buyerFee = isCheckboxChecked("inlineCheckbox4") ? buyerFeeCopartBroker(lotPrice) : buyerFeeCopart(lotPrice);
    }

    feeTooltip = accounting.formatMoney(buyerFee, "$", 0, ",", ".");
    const internetBidFee = internetBidFeeCopart(lotPrice);

    return {
        fees: buyerFee + internetBidFee,
        tooltips: {
            buyerFeeTooltip: feeTooltip,
            liveBidFeeTooltip: accounting.formatMoney(internetBidFee, "$", 0, ",", ".")
        }
    };
}

function calculateIAAIFees(lotPrice) {
    let buyerFee = 0;
    let feeTooltip = '';

    if (isHeavy == "1" || custom_fees == "3") {
        buyerFee = buyerFeeHeavyVehiclesIAAI(lotPrice);
    } else if (custom_fees == "2") {
        buyerFee = buyerFeeIAAIRecRides(lotPrice);
    } else {
        buyerFee = isCheckboxChecked("inlineCheckbox4") ? buyerFeeIAAI(lotPrice) : buyerFeeIAAI(lotPrice); // buyerFee = isCheckboxChecked("inlineCheckbox4") ? buyerFeeIAAIBroker(lotPrice) : buyerFeeIAAI(lotPrice);
    }

    feeTooltip = accounting.formatMoney(buyerFee, "$", 0, ",", ".");
    const internetBidFee = internetBidFeeIAAI(lotPrice);
    const additionalFees = 0; // Premium Vehicle Report

    return {
        fees: buyerFee + internetBidFee + additionalFees,
        tooltips: {
            buyerFeeTooltip: feeTooltip,
            liveBidFeeTooltip: accounting.formatMoney(internetBidFee, "$", 0, ",", ".")
        }
    };
}

function isCheckboxChecked(id) {
    const checkbox = document.getElementById(id);
    return checkbox && checkbox.checked;
}

function updateUISingle({ lotPrice, auctionFees, trucking, shipping, totalFees }) {
    const formatMoney = (amount) => accounting.formatMoney(amount, "$", 0, ",", ".");
    
    document.getElementById("auction-fees").innerHTML = formatMoney(auctionFees);
    document.getElementById("lot-price").innerHTML = formatMoney(lotPrice);
    document.getElementById("lot-price-large").innerHTML = formatMoney(lotPrice);
    //document.getElementById("trucking-cost").innerHTML = formatMoney(trucking);
    document.getElementById("shipping-cost").innerHTML = formatMoney(shipping);
    document.getElementById("final-price").innerHTML = formatMoney(totalFees);

    document.getElementById("customs-input").value = formatMoney(lotPrice + auctionFees + trucking + shipping);
}

function updateUIDouble({ lotPrice, lotPrice2, auctionFees, auctionFees2, trucking, shipping, totalFees, totalFees2 }) {
    const formatMoney = (amount) => accounting.formatMoney(amount, "$", 0, ",", ".");
    
    document.getElementById("auction-fees").innerHTML = formatMoney(auctionFees) + ' - ' + formatMoney(auctionFees2);
    document.getElementById("lot-price").innerHTML = formatMoney(lotPrice) + ' - ' + formatMoney(lotPrice2);
    document.getElementById("lot-price-large").innerHTML = formatMoney(lotPrice) + ' - ' + formatMoney(lotPrice2);
    //document.getElementById("trucking-cost").innerHTML = formatMoney(trucking);
    document.getElementById("shipping-cost").innerHTML = formatMoney(shipping);
    document.getElementById("final-price").innerHTML = formatMoney(totalFees) + ' - ' + formatMoney(totalFees2);

    document.getElementById("customs-input").value = formatMoney(lotPrice + auctionFees + trucking + shipping) + ' - ' + formatMoney(lotPrice2 + auctionFees2 + trucking + shipping);
}

function updateTooltips(auctionType, { buyerFeeTooltip, liveBidFeeTooltip }) {
    if(auctionType == 'Copart')
        var tooltips = `Buyer Fee: ${buyerFeeTooltip}<br/>Virtual Bid Fee: ${liveBidFeeTooltip}<br/>Gate Fee: $95<br/>Environmental Fee: $15<br/>Title Pickup Fee: $20`;
    else if(auctionType == 'IAAI') {
        if(isCheckboxChecked("inlineCheckbox4"))
            var tooltips = `Buyer Fee: ${buyerFeeTooltip}<br/>Internet Bid Fee: ${liveBidFeeTooltip}<br/>Service Fee: $95<br/>Environmental Fee: $15<br/>Title Handling Fee: $20<br/>Broker Fee: $35`;
        else
            var tooltips = `Buyer Fee: ${buyerFeeTooltip}<br/>Internet Bid Fee: ${liveBidFeeTooltip}<br/>Service Fee: $95<br/>Environmental Fee: $15<br/>Title Handling Fee: $20`;
    }

    document.getElementById('auction-fees-tooltip').setAttribute('data-original-title', tooltips);
}
// End of basic calculator

// Customs clearance calculator
function pushButtonCustoms() {
    if((currentEstimator == 'estimated' || currentEstimatorHover == 'estimated') && estimatedAmount1 > 0 && estimatedAmount1 != estimatedAmount2) {
        pushButtonCustomsDouble();
    } else {
        pushButtonCustomsSingle();
    }
}

function pushButtonCustomsSingle() {
    const [invoiceAmount, invoiceAmount2] = parseInvoiceAmount();

    const tax = calculateTax(invoiceAmount);
    const vat = calculateVat(invoiceAmount, tax);
    const allIn = calculateAllInFee();

    const totalCustoms = tax + vat + allIn;
    updateDisplayValues(tax, vat, allIn, totalCustoms);
    handleCurrencyChanges();
    handleFinalCalculations(totalCustoms);
}

function pushButtonCustomsDouble() {
    const [invoiceAmount, invoiceAmount2] = parseInvoiceAmount();

    if(invoiceAmount2 == 0) {
        const tax = calculateTax(invoiceAmount);

        const vat = calculateVat(invoiceAmount, tax);

        const allIn = calculateAllInFee();

        const totalCustoms = tax + vat + allIn;

        updateDisplayValuesDouble(tax, tax, vat, vat, allIn, totalCustoms, totalCustoms);
        handleCurrencyChanges();
        handleFinalCalculationsDouble(totalCustoms, totalCustoms);
    } else {
        const tax = calculateTax(invoiceAmount);
        const tax2 = calculateTax(invoiceAmount2);

        const vat = calculateVat(invoiceAmount, tax);
        const vat2 = calculateVat(invoiceAmount2, tax2);

        const allIn = calculateAllInFee();

        const totalCustoms = tax + vat + allIn;
        const totalCustoms2 = tax2 + vat2 + allIn;

        updateDisplayValuesDouble(tax, tax2, vat, vat2, allIn, totalCustoms, totalCustoms2);
        handleCurrencyChanges();
        handleFinalCalculationsDouble(totalCustoms, totalCustoms2);
    }
}

function parseInvoiceAmount() {
    const formatMoney = (amount) => accounting.formatMoney(amount, "$", 0, ",", ".");

    const inputString = $("input[name=customs-input]").val();
    const cleanedInput = inputString.replace(/[$,]/g, "");

    if (cleanedInput.includes('-')) {
        const splitInputs = inputString.split('-').map(amount => amount.replace(/[$,]/g, "").trim());
        document.getElementById("customs-amount-large").innerHTML = formatMoney(splitInputs[0]) + ' - ' + formatMoney(splitInputs[1]);

        const amounts = splitInputs.map(amount => parseFloat(amount) * UsdEurRate);
        return amounts;
    } else {
        document.getElementById("customs-amount-large").innerHTML = formatMoney(cleanedInput);

        const amount = parseFloat(cleanedInput) * UsdEurRate;
        return [amount, 0];
    }
}

/*function parseInvoiceAmountOld() {
    const inputString = $("input[name=customs-input]").val().replace(/[$,]/g, "");
    return parseInt(inputString * UsdEurRate);
}*/

function calculateTax(invoiceAmount) {
    const taxPercent = parseInt(document.getElementById("taxPercent").value);
    return (taxPercent / 100) * invoiceAmount;
}

function calculateVat(invoiceAmount, tax) {
    const vatPercent = parseInt(document.getElementById("vatPercent").value);
    return (vatPercent / 100) * (tax + invoiceAmount);
}

function calculateAllInFee() {
    switch (typeOfVehicle) {
        case 'Motorcycle': return 300;
        case 'ATV': return 400;
        case 'Personal Watercraft': return 400;
        case 'Snowmobile': return 400;
        default: 
            switch (bodyStyleNumber) {
                case 3: return 600;
                case 9: return 600;
                case 13: return 600;
                default: return 500;
            }
    }
}

function updateDisplayValues(tax, vat, allIn, total) {
    document.getElementById("tax-amount").innerHTML = accounting.formatMoney(tax, "€", 0, ",", ".");
    document.getElementById("vat-amount").innerHTML = accounting.formatMoney(vat, "€", 0, ",", ".");
    document.getElementById("allIn-amount").innerHTML = accounting.formatMoney(allIn, "€", 0, ",", ".");
    document.getElementById("customs-final").innerHTML = accounting.formatMoney(total, "€", 0, ",", ".");
}

function updateDisplayValuesDouble(tax, tax2, vat, vat2, allIn, total, total2) {
    document.getElementById("tax-amount").innerHTML = accounting.formatMoney(tax, "€", 0, ",", ".") + ' - ' + accounting.formatMoney(tax2, "€", 0, ",", ".");
    document.getElementById("vat-amount").innerHTML = accounting.formatMoney(vat, "€", 0, ",", ".") + ' - ' + accounting.formatMoney(vat2, "€", 0, ",", ".");
    document.getElementById("allIn-amount").innerHTML = accounting.formatMoney(allIn, "€", 0, ",", ".");
    document.getElementById("customs-final").innerHTML = accounting.formatMoney(total, "€", 0, ",", ".") + ' - ' + accounting.formatMoney(total2, "€", 0, ",", ".");
}

function handleCurrencyChanges() {
    const currentCurrency = document.getElementById("whatCurrency").value;
    if (whatCurrency !== currentCurrency) {
        whatCurrency = currentCurrency;
        recalculateTruckingToPoland();
        recalculateDocumentsTranslation();
    }
}

function handleFinalCalculations(totalCustoms) {
    const currency = document.getElementById("whatCurrency").value;
    if (currency === "PLN") {
        const finalInPln = calculateFinalInPln(totalFees, totalCustoms);
        document.getElementById("final-in-currency").innerHTML = accounting.formatMoney(finalInPln, "", 0, " ", ",") + " zł";
        document.getElementById("final-in-currency-large").innerHTML = accounting.formatMoney(finalInPln, "", 0, " ", ",") + " zł";
    } else if (currency === "EUR") {
        const finalInEur = calculateFinalInEur(totalFees, totalCustoms);
        document.getElementById("final-in-currency").innerHTML = accounting.formatMoney(finalInEur, "€", 0, ",", ".");
        document.getElementById("final-in-currency-large").innerHTML = accounting.formatMoney(finalInEur, "€", 0, ",", ".");
    }
}

function handleFinalCalculationsDouble(totalCustoms, totalCustoms2) {
    const currency = document.getElementById("whatCurrency").value;
    if (currency === "PLN") {
        const finalInPln = calculateFinalInPln(totalFees, totalCustoms);
        const finalInPln2 = calculateFinalInPln(totalFees2, totalCustoms2);
        document.getElementById("final-in-currency").innerHTML = accounting.formatMoney(finalInPln, "", 0, " ", ",") + " zł - " + accounting.formatMoney(finalInPln2, "", 0, " ", ",") + " zł";
        document.getElementById("final-in-currency-large").innerHTML = accounting.formatMoney(finalInPln, "", 0, " ", ",") + " zł - " + accounting.formatMoney(finalInPln2, "", 0, " ", ",") + " zł";
    } else if (currency === "EUR") {
        const finalInEur = calculateFinalInEur(totalFees, totalCustoms);
        const finalInEur2 = calculateFinalInEur(totalFees2, totalCustoms2);
        document.getElementById("final-in-currency").innerHTML = accounting.formatMoney(finalInEur, "€", 0, ",", ".") + " - " + accounting.formatMoney(finalInEur2, "€", 0, ",", ".");
        document.getElementById("final-in-currency-large").innerHTML = accounting.formatMoney(finalInEur, "€", 0, ",", ".") + " - " + accounting.formatMoney(finalInEur2, "€", 0, ",", ".");
    }
}

function calculateFinalInPln(totalFees, totalCustoms) {
    return (totalFees + brokerFee + hazardousCargoFee + oversizedVehicleFee + Math.round(450 * 1.23)) * usdRate + totalCustoms * eurRate + truckingToPoland + documentTranslationFee + exciseTax;
}

function calculateFinalInEur(totalFees, totalCustoms) {
    return (totalFees + brokerFee + hazardousCargoFee + oversizedVehicleFee + Math.round(450 * 1.23)) * UsdEurRate + totalCustoms + truckingToPoland / eurRate + documentTranslationFee / eurRate + exciseTax / eurRate;
}
// End of customs clearance calculator

function includeNum() {
    let htmlContent = '';
    const checkbox = document.getElementById("inlineCheckbox2"); // Trucking checkbox

    if (checkbox && checkbox.checked) {
        htmlContent += '<div class="num num-large">9</div>';
    }
    if (documentTranslationFee > 0) {
        htmlContent += '<div class="num num-large">10</div>';
    }
    if (brokerFee > 0) {
        htmlContent += '<div class="num num-large">11</div>';
    }
    if (hazardousCargoFee > 0) {
        htmlContent += '<div class="num num-large">12</div>';
    }

    if (oversizedVehicleFee > 800) {
        htmlContent += '<div class="num num-large">14</div>';
    } else if (oversizedVehicleFee > 0) {
        htmlContent += '<div class="num num-large">13</div>';
    }

    if (exciseTax > 0) {
        htmlContent += '<div class="num num-large">15</div>';
    }

    const includeBlock = document.getElementById("include-block");
    const includeNum = document.getElementById("include-num");

    if(includeBlock && includeNum && htmlContent == '') {
        includeBlock.style.visibility = 'hidden';
    } else if(includeBlock && includeNum) {
        includeBlock.style.visibility = 'visible';
        includeNum.innerHTML = htmlContent;
    }
}

function pushButtonAkcyza() {
    var inputAkcyza = document.getElementById("akcyza-input").value;
    var cleanedInput = inputAkcyza.replace(/\s+/g, "").replace("PLN", "");

    var percentAkcyza = parseFloat(document.getElementById("whatAkcyza").value);
  
    var percentAkcyzaPlus = percentAkcyza + 1;
  
    var podstawaAkcyza = cleanedInput / 1.23 / percentAkcyzaPlus;
  
    exciseTax = Math.round(podstawaAkcyza * percentAkcyza);

    document.getElementById("wartosc-pojazdu-uszkodzonego").innerHTML = inputAkcyza;
    document.getElementById("stawka-akcyzy-wzor-inside").innerHTML = percentAkcyzaPlus;
    document.getElementById("stawka-akcyzy-wzor-outside").innerHTML = percentAkcyza;
    document.getElementById("stawka-akcyzy-wzor-outside-sec").innerHTML = percentAkcyza;
    document.getElementById("final-akcyza").innerHTML = formatCurrency(exciseTax, "PLN");
    document.getElementById("final-akcyza-sec").innerHTML = formatCurrency(exciseTax, "PLN");
    document.getElementById("podstawa-akcyza").innerHTML = formatCurrency(podstawaAkcyza, "PLN");
    document.getElementById("podstawa-akcyza-sec").innerHTML = formatCurrency(podstawaAkcyza, "PLN");

    pushButtonCustoms();
    includeNum();
}