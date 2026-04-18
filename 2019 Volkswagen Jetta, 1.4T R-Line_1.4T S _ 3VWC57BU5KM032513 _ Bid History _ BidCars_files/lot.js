$(document).ready(function() {
	pushButton();
	recalculateTruckingToPoland();
	recalculateDocumentsTranslation();
	recalculateRestrictedStates();
	recalculateHazardousCargo();
	recalculateOversizedVehicle();
	recalculateOversizedVehiclePlus();
	pushButtonCustoms();
	includeNum();
	updateExchangeRate();
	updateStoredValue(lotNumber);

	if(finalBid>0) {
		//$("#final-calculator-bid-button").html(finalCalculatorBidButtonCurrentBidTranslation);
		generateBidValue(finalBid);
	} else if(yourBid>0 && yourBid >= currentBid)
		generateBidValue(yourBid + 500);
	else {
		if(isArchived == 0)
			generateBidValue(currentBid + 500);
		else
			generateBidValue(currentBid);
	}

	$("#buyNowPriceModal").html(buyNowPrice);

	if(currentEstimator=='bid')
		finalCalculatorBidButtonUpdate();

	$('#calculator-info-close').click(function() {
		$('#calculator-info').hide();
		setCookie('calculator-info', 'close', 1);

		// Reload sticky
		var fix = new Sticky('.scroll-wrapper');
		fix.update();
	})

	$('#delivery-port-close-message').click(function() {
		$('#delivery-port-message').hide();
		setCookie('delivery-port-message', 'close', 1);
	})
});

$(document).ready(function() {
	var timeout = null;

	$("#bidInput").on("click", ".input-group-append", function() {
		$(".msg.increments").addClass("hide");
		let inputVal = $("input[name=bidInput]").val().replace(/[$,]/gim, "");

		$("#final-calculator-estimated-button").removeClass("active");
		$("#final-calculator-bid-button").addClass("active");
		$("#final-calculator-buy-now-button").removeClass("active");
		$("#final-calculator-bid-button").html(finalCalculatorBidButtonYourBidTranslation);

		if(finalBid>0)
			updateCalculatorIndicators('final-calculator-final-bid-button');
		else
			updateCalculatorIndicators('final-calculator-bid-button');

		currentEstimator = 'bid';
		currentEstimatorHover = 'bid';
		finalCalculatorBidButton = 'your-bid';
		
		generateBidValue(+inputVal + 500);
		pushButton();
		pushButtonCustoms();
	});

	$("#bidInput").on("click", ".input-group-prepend", function() {
		$(".msg.increments").addClass("hide");
		let inputVal = $("input[name=bidInput]").val().replace(/[$,]/gim, "");

		$("#final-calculator-estimated-button").removeClass("active");
		$("#final-calculator-bid-button").addClass("active");
		$("#final-calculator-buy-now-button").removeClass("active");
		$("#final-calculator-bid-button").html(finalCalculatorBidButtonYourBidTranslation);

		if(finalBid>0)
			updateCalculatorIndicators('final-calculator-final-bid-button');
		else
			updateCalculatorIndicators('final-calculator-bid-button');

		currentEstimator = 'bid';
		currentEstimatorHover = 'bid';
		finalCalculatorBidButton = 'your-bid';

		generateBidValue(+inputVal - 500);
		pushButton();
		pushButtonCustoms();
	});

	$("input[name=bidInput]").keyup(function() {
		$("#final-calculator-estimated-button").removeClass("active");
		$("#final-calculator-bid-button").addClass("active");
		$("#final-calculator-buy-now-button").removeClass("active");
		$("#final-calculator-bid-button").html(finalCalculatorBidButtonYourBidTranslation);

		if(finalBid>0)
			updateCalculatorIndicators('final-calculator-final-bid-button');
		else
			updateCalculatorIndicators('final-calculator-bid-button');

		currentEstimator = 'bid';
		currentEstimatorHover = 'bid';
		finalCalculatorBidButton = 'your-bid';

		clearTimeout(timeout);
		timeout = setTimeout(function() {
			let inputVal = $("input[name=bidInput]").val().replace(/[$,]/gim, "");

			generateBidValue(+inputVal);
			pushButton();
			pushButtonCustoms();
		}, 1000);
	});

	$("#customs-amount .input-group-append").on("click", function() {
		let inputVal = $('input[name="customs-input"]')
			.val()
			.split('-')[0]
			.replace(/[^0-9]/gim, "");
		generateCustomsValue(+inputVal + 500);
		pushButtonCustoms();
	});

	$("#customs-amount .input-group-prepend").on("click", function() {
		let inputVal = $('input[name="customs-input"]')
			.val()
			.split('-')[0]
			.replace(/[^0-9]/gim, "");
		generateCustomsValue(+inputVal - 500);
		pushButtonCustoms();
	});

	$("input[name=customs-input]").keyup(function() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			let inputVal = $('input[name="customs-input"]')
			.val()
			.split('-')[0]
			.replace(/[^0-9]/gim, "");

			generateCustomsValue(+inputVal, false);
			pushButtonCustoms();
		}, 1000);
	});

	$("#akcyza-price .plus-btn").on("click", function() {
		let inputVal = $('input[name="akcyza-input"]').val().replace(/\s+/g, "").replace("PLN", "");
		generateAkcyzaValue(+inputVal + 5000);
		pushButtonAkcyza();
	});

	$("#akcyza-price .minus-btn").on("click", function() {
		let inputVal = $('input[name="akcyza-input"]').val().replace(/\s+/g, "").replace("PLN", "");
		generateAkcyzaValue(+inputVal - 5000);
		pushButtonAkcyza();
	});

	$("input[name=akcyza-input]").keyup(function() {
		let inputVal = $('input[name="akcyza-input"]').val().replace(/\s+/g, "").replace("PLN", "");

		clearTimeout(timeout);
		timeout = setTimeout(function() {
			generateAkcyzaValue(inputVal);
			pushButtonAkcyza();
		}, 1000);
	});

	$("#whatAkcyza").on("change", function() {
		pushButtonAkcyza();
	});

	$("#final-calculator-estimated-button").on("click", function() {
		event.preventDefault();
		$("#final-calculator-estimated-button").addClass("active");
		$("#final-calculator-bid-button").removeClass("active");
		$("#final-calculator-buy-now-button").removeClass("active");

		updateCalculatorIndicators('final-calculator-estimated-button');

		currentEstimator = 'estimated';
		currentEstimatorHover = 'estimated';
		pushButton();
		pushButtonCustoms();
	});

	$("#final-calculator-bid-button").on("click", function() {
		event.preventDefault();
		finalCalculatorBidButtonUpdate();

		if(finalBid>0)
			updateCalculatorIndicators('final-calculator-final-bid-button');
		else
			updateCalculatorIndicators('final-calculator-bid-button');
	});

	$("#final-calculator-buy-now-button").on("click", function() {
		event.preventDefault();
		$("#final-calculator-estimated-button").removeClass("active");
		$("#final-calculator-bid-button").removeClass("active");
		$("#final-calculator-buy-now-button").addClass("active");

		updateCalculatorIndicators('final-calculator-buy-now-button');

		currentEstimator = 'buy-now';
		currentEstimatorHover = 'buy-now';
		pushButton();
		pushButtonCustoms();
	});

	$(".info-checkbox").click(function() {
		var field1 = $("#exampleCheck1").is(":checked"),
			field2 = $("#exampleCheck2").is(":checked");
		if (field1 && field2) {
			$("#sendBid").removeClass("disabled");
		} else {
			$("#sendBid").addClass("disabled");
		}

		var fieldbyNow1 = $("#buyNowCheck1").is(":checked"),
			fieldbyNow2 = $("#buyNowCheck2").is(":checked");
		if (fieldbyNow1 && fieldbyNow2) {
			$("#byNow").removeClass("disabled");
		} else {
			$("#byNow").addClass("disabled");
		}
	});

	$("#sendBid").click(function() {
		var field1 = $("#exampleCheck1").is(":checked"),
			field2 = $("#exampleCheck2").is(":checked");

		if (field1 && field2) {
			$("#increaseModalSpinner").removeClass("display-none");
			$("#sendBid").addClass("disabled");
			
			$.when(
				$.post(baseUrl + "app/lot/" + lotNumber + "/bid", {
					amount: yourBid,
				})
			).done(function(value) {
				if (typeof ajaxStaticPageRequest === 'function')
					ajaxStaticPageRequest();

				setTimeout(function() {
					location.reload();
				}, 3000);
			});
		}
	});

	$('button[data-target="#increaseModal"]').click(function() {
		$(".bid-message").addClass("hide");
		$("#increaseModal .modal-footer").fadeIn();
	});

	$('a[data-target="#buynowModal"]').click(function() {
		$(".buy-now-message").addClass("hide");
		$("#buynowModal .modal-footer").fadeIn();
	});

	$("#byNow").click(function() {
		var field1 = $("#buyNowCheck1").is(":checked"),
			field2 = $("#buyNowCheck2").is(":checked");

		if (field1 && field2) {
			$("#buyNowModalSpinner").removeClass("display-none");
			$("#byNow").addClass("disabled");

			$.when(
				$.post(baseUrl + "app/lot/" + lotNumber + "/buy-now", {
					buy_now: "yes",
				})
			).done(function(value) {
				if (typeof ajaxStaticPageRequest === 'function')
					ajaxStaticPageRequest();

				setTimeout(function() {
					location.reload();
				}, 3000);
			});
		}
	});

	$("#generate-fox-report").click(function(event) {
		event.preventDefault();
		$("#generate-fox-report").addClass("download");
		$("#generate-fox-report").addClass("disabled");
		$("#generate-fox-report i.fa-spinner").removeClass("display-none");

		var counter = parseInt($("#reportsCounter").text());
		$("#reportsCounter").text(counter - 1);

		$.when(
			$.post(baseUrl + "app/lot/" + lotNumber + "/history-report/fox")
		).done(function(value) {
			if (typeof ajaxStaticPageRequest === 'function')
				ajaxStaticPageRequest();

			setTimeout(function() {
				location.reload();
			}, 35000);
		});
	});

	$("#generate-check-report").click(function(event) {
		event.preventDefault();
		$("#generate-check-report").addClass("download");
		$("#generate-check-report").addClass("disabled");
		$("#generate-check-report i.fa-spinner").removeClass("display-none");

		var counter = parseInt($("#reportsCounter").text());
		$("#reportsCounter").text(counter - 1);

		$.when(
			$.post(baseUrl + "app/lot/" + lotNumber + "/history-report/check")
		).done(function(value) {
			if (typeof ajaxStaticPageRequest === 'function')
				ajaxStaticPageRequest();

			setTimeout(function() {
				location.reload();
			}, 35000);
		});
	});
});

function updateCalculatorIndicators(className) {
	var activeElement = $(".price_tabs li a.active");

    var basicCalculatorSpan = $('#basic-calculator .header span.markedby');
	var customClearanceCalculatorSpan = $('#custom-clearance-calculator .header span.markedby');

	if(isArchived == 0) {
		basicCalculatorSpan.removeClass();
		basicCalculatorSpan.addClass('markedby');
		basicCalculatorSpan.addClass(className);

		customClearanceCalculatorSpan.removeClass();
		customClearanceCalculatorSpan.addClass('markedby');
		customClearanceCalculatorSpan.addClass(className);
	}

	basicCalculatorSpan.text(activeElement.text());
    customClearanceCalculatorSpan.text(activeElement.text());
}

function finalCalculatorBidButtonUpdate() {
	$("#final-calculator-estimated-button").removeClass("active");
	$("#final-calculator-bid-button").addClass("active");
	$("#final-calculator-buy-now-button").removeClass("active");

	currentEstimator = 'bid';
	currentEstimatorHover = 'bid';
	pushButton();
	pushButtonCustoms();
}

function updateExchangeRate() {
	document.getElementById("usdeurrate").innerHTML = UsdEurRate;
	document.getElementById("usdplnrate").innerHTML = usdRate;
	document.getElementById("eurplnrate").innerHTML = eurRate;
}

function generateAkcyzaValue(val) {
	if (!(val < 0)) {
		let newString = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		var formattedValue = newString + " PLN";
		$("input[name='akcyza-input']").val(formattedValue);
	}
}

function generateCustomsValue(val, round = true) {
	if (!(val < 0)) {
		let inputValue = val.toString();

		if(round == true) {
			let ost = +inputValue % 500 === 0 ? 0 : 500 - (+inputValue % 500);
			inputValue = `${+inputValue + ost}`;
		}
		
		let newString = `$${inputValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		$("input[name=customs-input]").val(newString);
	}
}	

function generateBidValue(val) {
	if (!(val < 0)) {
		let inputValue = val.toString();

		if (+minPrice > +inputValue && finalBid == 0) {
			let minPriceFormatted = `$${minPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

			$(".msg.min-max").html(lotAlertCantLowerThan + minPriceFormatted + ".");
			//$(".msg.min-max").css("margin-top", "11px");
			//$(".msg.min-max").css("margin-bottom", "26px");

			if ($('#small-info-how-to').css('display') == 'none') {
				$(".msg.min-max").css("margin-bottom", "26px");
			} else {
				$(".msg.min-max").css("margin-bottom", "41px");
			}

			$(".msg.min-max").removeClass("hide");
			$('button[data-target="#increaseModal"]').hide();
		} else if (+maxPrice < +inputValue && finalBid == 0) {
			$(".msg.min-max").html(lotAlertAvailablePowerExceeded);
			$(".msg.min-max").css("margin-top", "15px");
			$(".msg.min-max").css("margin-bottom", "11px");

			$(".msg.min-max").removeClass("hide");
			$('button[data-target="#increaseModal"]').hide();
			$("button.increase-power").show();
		} else {
			let ost = +inputValue % 25 === 0 ? 0 : 25 - (+inputValue % 25);
			inputValue = `${+inputValue + ost}`;
			//$(".msg.increments").addClass("hide");
			$(".msg.min-max").addClass("hide");
			/*if (!val && ost !== 0) {
				$(".msg.increments").removeClass("hide");
			}*/
			$('button[data-target="#increaseModal"]').show();
			$("button.increase-power").hide();
			//$('button#btn-login').show();
		}

		let newString = `$${inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		$("input[name=bidInput]").val(newString);
		$(".current-bid").html(newString);
		yourBid = +newString.replace(/[^0-9]/gim, "");
	}
}

function selectTextWithoutDollar(inputElement) {
    if (inputElement.value.startsWith('$')) {
        inputElement.setSelectionRange(1, inputElement.value.length);
    } else {
        inputElement.select();
    }
}

function selectTextWithoutPLN(inputElement) {
    const value = inputElement.value.trim();

    // Znajdź pierwszy znak, który nie jest spacją
    let startIndex = 0;
    while (startIndex < value.length && value[startIndex] === ' ') {
        startIndex++;
    }

    // Znajdź indeks początku końcówki "PLN" (ignorując białe znaki przed "PLN")
    let endIndex = value.toUpperCase().indexOf(" PLN");
    if (endIndex === -1) {
        endIndex = value.length; // Jeśli "PLN" nie istnieje, to końcówka to koniec wartości
    }

    // Ustaw zaznaczenie tekstu od pierwszego znaku po spacjach do miejsca przed " PLN"
    inputElement.setSelectionRange(startIndex, endIndex);
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// Responsive design
window.addEventListener('resize', handleResize);

var boxOptions = 'bidding';
var $isStickyOn = 0;
var $isStickyHidden = 0;

var $biddingPosition = 0;
var $vehicleInformationPosition = 0;
var $temporaryBlockSavingPosition = 0;

$(document).ready(function() {
	if (window.innerWidth <= 1280) {
		handleResize();
	}

	function isMobile() {
		return window.matchMedia("(max-width: 768px)").matches;
	}
	
	function isElementInViewport($element, offset = 300) {
		var elementTop = $element.offset().top;
		var elementBottom = elementTop + $element.outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
	
		return elementBottom > (viewportTop + offset) && elementTop < (viewportBottom - offset);
	}

	if(isMobile()) {
		setTimeout(function() {
		   var $boxOptions = $('#box-options');
		   var $offers = $('section#offers');
		   var $makes = $('section#makes-section');
		   var $footerMap = $('section#footer-map');
		   var $footerMain = $('footer#footer-main');
   
		   var offsetTop = $boxOptions.offset().top;
   
		   $(window).scroll(function() {
				console.log('Scroll on');
			
				if(window.innerWidth <= 768) {
					if ($(window).scrollTop() > offsetTop && $isStickyOn == 0) {
						console.log('Sticky on');
						$isStickyOn = 1;
		
						$boxOptions.addClass('pre-sticky');
		
						setTimeout(function() {
							$boxOptions.css('transition', 'all .2s');
							$boxOptions.addClass('is-sticky');
						}, 1);
		
						setTimeout(function() {
							$boxOptions.removeClass('pre-sticky');
						}, 2);
		
						if($('div#live-auction').length)
							$('div#live-auction').addClass('fix-sticky');
						else
							$('div#bidding-info').addClass('fix-sticky');

						$('div#main-info').addClass('fix-sticky');
		
						setTimeout(function() {
							$boxOptions.css('transition', '');
						}, 200);
					} else if($(window).scrollTop() <= offsetTop && $isStickyOn == 1) {
						console.log('Stick off');
						$isStickyOn = 0;
		
						$biddingPosition = 0;
						$vehicleInformationPosition = 0;
		
						$boxOptions.addClass('post-sticky');
		
						setTimeout(function() {
							$boxOptions.css('transition', 'all .2s');
							$boxOptions.removeClass('is-sticky');
						}, 1);
		
						setTimeout(function() {
							$boxOptions.removeClass('post-sticky');
						}, 2);
		
						$('div#live-auction').removeClass('fix-sticky');
						$('div#bidding-info').removeClass('fix-sticky');
						$('div#main-info').removeClass('fix-sticky');
		
						setTimeout(function() {
							$boxOptions.css('transition', '');
						}, 200);
					} else if ($isStickyHidden == 0 && (isElementInViewport($offers) || isElementInViewport($makes) || isElementInViewport($footerMap) || isElementInViewport($footerMain)) && $isStickyOn == 1) {
						$isStickyHidden = 1;
						console.log('Hide');
						$boxOptions.animate({ top: '-100px', opacity: 0 }, 400);
					} else if ($isStickyHidden == 1 && !isElementInViewport($offers) && !isElementInViewport($makes) && !isElementInViewport($footerMap) && !isElementInViewport($footerMain) && $isStickyOn == 1) {
						$isStickyHidden = 0;
						console.log('Show');
						$boxOptions.animate({ top: '0px', opacity: 1 }, 400);
					}
		
					if($isStickyOn == 1 && $temporaryBlockSavingPosition == 0) {
						if($('#box-options-bidding').hasClass('active')) {
							$biddingPosition = $(window).scrollTop();
							console.log('Bidding position: ' + $biddingPosition);
						} else if($('#box-options-information').hasClass('active')) {
							$vehicleInformationPosition = $(window).scrollTop();
							console.log('Vehicle information position: ' + $vehicleInformationPosition);
						}
					}
				} else if(window.innerWidth > 768 && $isStickyOn == 1) {
					console.log('Stick off');
					$isStickyOn = 0;
	
					$biddingPosition = 0;
					$vehicleInformationPosition = 0;
	
					$boxOptions.addClass('post-sticky');
	
					setTimeout(function() {
						$boxOptions.css('transition', 'all .2s');
						$boxOptions.removeClass('is-sticky');
					}, 1);
	
					setTimeout(function() {
						$boxOptions.removeClass('post-sticky');
					}, 2);
	
					$('div#live-auction').removeClass('fix-sticky');
					$('div#bidding-info').removeClass('fix-sticky');
					$('div#main-info').removeClass('fix-sticky');
	
					setTimeout(function() {
						$boxOptions.css('transition', '');
					}, 200);
				}
		   });
		}, 1500);
	}
});

function boxOption(type) {
	$temporaryBlockSavingPosition = 1;

	boxOptions = type;
	handleResize();

	if(boxOptions == 'bidding')
		var scrollHeight = $biddingPosition;
	else if(boxOptions == 'vehicle-information')
		var scrollHeight = $vehicleInformationPosition;

	if($isStickyOn == 1) {
		if(scrollHeight > 0) {
			$(window).scrollTop(scrollHeight);
			$(document).scrollTop(scrollHeight);
			console.log('Scroll to ' + boxOptions + ' : ' + scrollHeight);
		} else {
			if(boxOptions == 'bidding')
				var boxToScroll = $('#bidding-info');
			else if(boxOptions == 'vehicle-information')
				var boxToScroll = $('#main-info');

			var offsetTop = boxToScroll.offset().top - 80;

			$(window).scrollTop(offsetTop);
			$(document).scrollTop(offsetTop);
			console.log('Scroll to beginning');
		}
	}

	setTimeout(function() {
		$temporaryBlockSavingPosition = 0;
	}, 10);
}

function handleResize() {
	if (window.innerWidth <= 1280) {
		if (boxOptions == 'bidding') {
            $('#box-options-bidding').addClass('active');
            $('#box-options-information').removeClass('active');
            
			$('div#main-info').hide();
			$('div#secondary-info').hide();
			$('div#tertiary-info').hide();
			$('div#vehicle_reports').hide();

			$('div#additional-services').show();
			$('div#excise-calculator').show();

			$('div#live-auction').show();
			$('div#bidding-info').show();
			$('div#final-price-estimator').show();

			if (getCookie('calculator-info') != 'close')
				$('div#calculator-info').show();

			$('div#basic-calculator').show();
			$('div#custom-clearance-calculator').show();
		} else if (boxOptions == 'vehicle-information') {
            $('#box-options-information').addClass('active');
            $('#box-options-bidding').removeClass('active');
            
			$('div#main-info').show();
			$('div#secondary-info').show();
			$('div#tertiary-info').show();
			$('div#vehicle_reports').show();

			$('div#additional-services').hide();
			$('div#excise-calculator').hide();

			$('div#live-auction').hide();
			$('div#bidding-info').hide();
			$('div#final-price-estimator').hide();
			$('div#calculator-info').hide();
			$('div#basic-calculator').hide();
			$('div#custom-clearance-calculator').hide();
		}
	} else {
		$('div#main-info').show();
		$('div#secondary-info').show();
		$('div#tertiary-info').show();
		$('div#vehicle_reports').show();

		$('div#additional-services').show();
		$('div#excise-calculator').show();

		$('div#live-auction').show();
		$('div#bidding-info').show();
		$('div#final-price-estimator').show();

		if (getCookie('calculator-info') != 'close')
			$('div#calculator-info').show();

		$('div#basic-calculator').show();
		$('div#custom-clearance-calculator').show();
	}
}
// End of responsive design

function updateStoredValue(key) {
    let storedData = localStorage.getItem('BidCars.visits');

    let data;
    if (storedData === null) {
        data = {};
    } else {
        data = JSON.parse(storedData);
    }

    if (data.hasOwnProperty(key)) {
        data[key] += 1;
    } else {
        data[key] = 1;
		setTimeout(registerVisit, 2000);
    }

    localStorage.setItem('BidCars.visits', JSON.stringify(data));
}

async function registerVisit() {
    const url = baseUrl + 'app/lot/' + lotNumber + '/register-visit';

    const formData = new FormData();
    formData.append("hash", visitCounterHash);

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            console.log("Wizyta zarejestrowana pomyślnie.");
        } else {
            console.error("Błąd rejestracji wizyty:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Błąd sieci:", error);
    }
}


$(document).ready(function () {
  let hideTimeout;
    
  function showBox($wrapper) {
    clearTimeout(hideTimeout);

    $wrapper.find('.box-images').addClass('visible');
    $('a.img_tltp_preview').addClass('visible');
  }

  function hideBox($wrapper) {
    hideTimeout = setTimeout(function () {
      // Hide only if mouse is not over wrapper
      if (!$wrapper.is(':hover')) {
        $wrapper.find('.box-images').removeClass('visible');
          $('a.img_tltp_preview').removeClass('visible');
      }
    }, 200); // adjust delay if needed
  }

  $('.img_tltp_wrapper').on('mouseenter', function () {
    showBox($(this));
  });

  $('.img_tltp_wrapper').on('mouseleave', function () {
    hideBox($(this));
  });
    
$('.front_side, .rear_side').on('mouseenter', function (e) {
  e.preventDefault();
  e.stopPropagation();

  const isFront = $(this).hasClass('front_side');

  // Toggle visibility
  $('.image_front').toggle(isFront);
  $('.image_rear').toggle(!isFront);

  // Toggle active class
  $('.switch a').removeClass('active');
  $(this).addClass('active');
});

$('.front_side').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.image_front').click();
});
    
$('.rear_side').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.image_rear').click();
});

$('a.img_tltp_preview.rotation_anim').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
  if (window.innerWidth <= 768) {
     document.querySelector('[data-fancybox="gallery-b"]').click();
  } 
});


    
});
