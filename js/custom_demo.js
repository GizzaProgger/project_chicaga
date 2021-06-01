$(document).ready(initProject);

function initProject() {
	objM.init();
}
var objM = {
	config: {
		//ajaxURL: 'assets/components/project/connector.php',
	},
	init: function () {
		// load custom function
		this.preload();
		this.tooltip();
		this.carousel();
		this.gMap();
		//this.audioF();
		this.browser();
		this.windowHeight();
		
		let addItemsInMenu = (menu, isFooter) => {
			if (menu) {
				let e = document.createElement("div");
				if (!location.href.includes("/on-line/")) {
					e.innerHTML = '<li><a href="/on-line/#main_online" class="link"><strong>ОНЛАЙН</strong>-курсы</a></li>'
					menu.append(e.lastChild)
				}
				if (!location.href.includes("onlain-test-po-angliiskomu-iazyku")) {
					let redLabel = isFooter ? "" : "red-label";
					e.innerHTML = `<li><a href="/onlain-test-po-angliiskomu-iazyku/" class="link ${redLabel}"><strong>ОНЛАЙН</strong>-тест</a></li>`
					menu.append(e.lastChild)	
				}
			}
		}
		addItemsInMenu(document.querySelector(".menu-footer"), true);
		addItemsInMenu(document.querySelector(".no-home .top-menu"), false);
		
		objM.videoBg();
		if ($('.scroll-top').length > 0) {
			$(window).scroll(function () {
				// Если отступ сверху больше 50px то показываем кнопку "Наверх"
				if ($(this).scrollTop() > 50) {
					$('.scroll-top').addClass(
						'visible');
				}
				else {
					$('.scroll-top').removeClass(
						'visible');
				}
			});
			this.ancore();
		}
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$('.header').addClass(
					'header__scroll');
			}
			else {
				$('.header').removeClass(
					'header__scroll');
			}
		});
		$('a[data-toggle="tab"]').on(
			'shown.bs.tab',
			function (e) {
				//objM.fullP();
			});
		//|| document.location.pathname === '/on-line/'
		if (document.documentElement.clientWidth >
			768) {
			$('html,body,#fullpage,section').trigger(
				'click');
			// objM.fullP();
			// calling fullpage.js methods using jQuery
			$('#moveSectionUp').on('click',
				function (e) {
					e.preventDefault();
					// $.fn.fullpage.moveTo(1, 0);
				});
			$('#moveSectionDown,.move-down').on(
				'click',
				function (e) {
					e.preventDefault();
					// $.fn.fullpage.moveSectionDown();
				});
			//adding the actions to the buttons
			$(document).on('click',
				'.privacy_policy, .privacy_policy2',
				function () {
					// $.fn.fullpage.setAllowScrolling(
					// 	false);
					// $.fn.fullpage.setKeyboardScrolling(
					// 	false);
				});
			if (document.location.href ===
				'https://chicaga.ru/' || document
				.location.pathname ===
				'/on-line/') {
				$('.modal').on('hidden.bs.modal',
					function () {
						// $.fn.fullpage.setAllowScrolling(
						// 	true);
						// $.fn.fullpage.setKeyboardScrolling(
						// 	true);
					});
			}
			$('a[data-toggle="tab"]').on(
				'shown.bs.tab',
				function (e) {
					e.target // newly activated tab
					e.relatedTarget // previous active tab
				})
		}
		else {
			$('body').addClass('mob');
			setTimeout(function () {
				objM.scrollMenu();
			}, 100);
			/*
		 $('#fullpage').fullpage({
			//verticalCentered: true,
			//menu: '.menu',
			//navigation: true,
			scrollOverflow: true,
			//easingcss3: 'cubic-bezier(0.175, 0.785, 0.320, 1.175)',
			//autoScrolling: false,
			//scrollOverflowReset: false,
			scrollingSpeed: 1300,
		 });*/
		}
		//alert($(window).width() +'-'+ $(window).height());
		// $("body").on("submit", "form", function() {
		//   $("#successModal").modal();
		// })
		$(".modal .close").on("click",
			function () {
				// $.fn.fullpage.setAllowScrolling(true);
				// $.fn.fullpage.setKeyboardScrolling(true);
			});
		$(".modal").on("click", function (e) {
			if (e.target.classList.contains(
					"modal")) {
				// $.fn.fullpage.setAllowScrolling(true);
				// $.fn.fullpage.setKeyboardScrolling(true);
			}
		})
		$(".call").click(function () {
			// $.fn.fullpage.setAllowScrolling(false);
			// $.fn.fullpage.setKeyboardScrolling(false);
		})
		// $('[name="phone"]').mask(
		// 	'+9 999 999-99-99');
		// $.fn.setCursorPosition = function(
		// 	pos) {
		// 	if ($(this).get(0).setSelectionRange) {
		// 		$(this).get(0).setSelectionRange(
		// 			pos, pos);
		// 	}
		// 	else if ($(this).get(0).createTextRange) {
		// 		var range = $(this).get(0).createTextRange();
		// 		range.collapse(true);
		// 		range.moveEnd('character', pos);
		// 		range.moveStart('character', pos);
		// 		range.select();
		// 	}
		// };
		$(document).on('click',
			'[name="phone"]',
			function (e) {
				e.preventDefault();
				$(this).setCursorPosition(3);
			});
		$(".open-pay-modal").click(function (
			e) {
			e.preventDefault();
			$("#buyModal").modal();
		})
		$(".open-pay-modal-video").click(
			function (e) {
				e.preventDefault();
				$("#buyModalVideo").modal();
			});
		$('#buyModalVideo .close').on(
			'click',
			function (e) {
				if ($(
						"#buyModalVideo .jquery-background-video-pauseplay.pause"
					).length > 0) $(
					"#buyModalVideo .jquery-background-video-pauseplay"
				).click();
			});
		// let nextQuizBtn =document.querySelector(".btn-next");
		// if (nextQuizBtn) {
		//   nextQuizBtn.onclick = function() {
		//     let index = document.querySelector(".quiz-counter-current").innerHTML;
		//     if (index == 24) {
		//       document.querySelector(".form-submit").innerHTML = `<button type="submit" class="btn-submit btn-nav btn-finish" name="quiz-form-1">I finished    <div class="loading-wave d-none">
		// 		<div class="rect1"></div>
		// 		<div class="rect2"></div>
		// 		<div class="rect3"></div>
		// 		<div class="rect4"></div>
		// 		<div class="rect5"></div>
		// 		</div>
		// 	</button>`;
		//     nextQuizBtn.style.display = "none";
		//     let finishQuizBtn = document.querySelector(".btn-finish");
		//     finishQuizBtn.onclick = function () {
		//       finishQuizBtn.style.display = "none"
		//     }
		//     }
		//   }
		// }
		$('.call, .open-buy-modal').on(
			'click',
			function (e) {
				e.preventDefault();
				$('#exampleModal').modal();
			});
		$('.privacy_policy').on('click',
			function (e) {
				e.preventDefault();
				$('#policyModal').modal();
			});
		$('.privacy_policy2').on('click',
			function (e) {
				e.preventDefault();
				$('#policyModal2').modal();
			});
		$('.open-proposal-modal').on(
			'click',
			function (e) {
				e.preventDefault();
				$('#propocal_modal').modal();
			});
		$('#propocal_modal').on(
			'shown.bs.modal',
			function () {
				$(".modal-backdrop").hide();
			})
		$('.hamburger').on('click',
			function (e) {
				e.preventDefault();
				$(this).toggleClass('is-active');
				$(this).parents('.header').toggleClass(
					'in');
			});
		$('.language-el li a').on('click',
			function (e) {
				e.preventDefault();
				$('.language-el li').removeClass(
					'active');
				$(this).parent().addClass(
					'active');
			});
		$('.commMigx').on('click', function (
			e) {
			e.preventDefault();
			$('#commentModal').modal();
			var index = $(this).data('idx');
			$(
				'#commentModal .modal-body .comment-mini-box .item'
			).removeClass('show');
			$(
				'#commentModal .modal-body .comment-mini-box .item'
			).eq(index).addClass('show');
			//console.log(index);
		});
		/**/
		$(document).on('click',
			'.js-rvg-play .rvg-icon',
			function (e) {
				e.preventDefault();
				objM.iLoadF();
			});
		$(document).on('Quiz.result.after',
			function () {
				$('.section-quiz').addClass(
					'quiz-finished');
				$('.bgRight').attr('style',
					'background-image: url(assets/components/project/app/img/rightImage_rez.jpg);'
				);
				$('.section-quiz .row-line-form')
					.removeClass('d-none');
				$('[name="success_result"]').val(
					$('.success-result').text());
				$('[name="count_step"]').val($(
					'.count-step').text());
			});
		var lazyLoadInstance = new LazyLoad({
			elements_selector: ".lazy",
			load_delay: 100
		});
		if (lazyLoadInstance) {
			lazyLoadInstance.update();
		}
		/*
	  document.addEventListener('lazybeforeunveil', function(e){
		 var bg = e.target.getAttribute('data-bg');
		 if(bg){
			e.target.style.backgroundImage = 'url(' + bg + ')';
		 }
	  });
	  */
		window.addEventListener('resize',
			function () {
				objM.windowHeight();
			});
		//   var setVideoWidth = function(relation, el, reverse=1) {
		// 	  var s = reverse ? window.innerHeight > window.innerWidth*(1/relation) : window.innerHeight <= window.innerWidth*(1/relation)
		// 	  if (window.innerHeight <= window.innerWidth*(1/relation)) {
		// 		var width = window.innerWidth
		// 		var height = window.innerWidth*(1/relation)
		// 	  } else {
		// 		var width = (window.innerHeight)*(1/relation)
		// 		var height = window.innerHeight
		// 	  }
		// 	  $(el).css({
		// 		  "height": width,
		// 		  "width": height,
		// 	  })
		//   }
		//================ FORM-GROUP-SELECT
		$('.custom-select').each(function () {
			const _this = $(this),
				selectOption = _this.find(
					'option'),
				selectOptionLength =
				selectOption.length,
				selectedOption = selectOption.filter(
					':selected'),
				duration = 450; // длительность анимации
			_this.hide();
			_this.wrap(
				'<div class="select"></div>');
			$('<div>', {
				class: 'new-select',
				text: this.querySelector(
					"option").innerHTML
			}).insertAfter(_this);
			const selectHead = _this.next(
				'.new-select');
			$('<div>', {
				class: 'new-select__list'
			}).insertAfter(selectHead);
			const selectList = selectHead.next(
				'.new-select__list');
			for (let i = 1; i <
				selectOptionLength; i++) {
				$('<div>', {
					class: 'new-select__item',
					html: $('<span>', {
						text: selectOption.eq(i).text()
					})
				}).attr('data-value',
					selectOption.eq(i).val()).appendTo(
					selectList);
			}
			const selectItem = selectList.find(
				'.new-select__item');
			selectList.slideUp(0);
			selectHead.on('click', function () {
				if (!$(this).hasClass('on')) {
					$(this).addClass('on');
					selectList.slideDown(
						duration);
					selectItem.on('click',
						function () {
							let chooseItem = $(this).data(
								'value');
							$('select').val(
								chooseItem).attr(
								'selected', 'selected');
							selectHead.text($(this).find(
								'span').text());
							selectList.slideUp(
								duration);
							selectHead.removeClass(
								'on');
						});
				}
				else {
					$(this).removeClass('on');
					selectList.slideUp(duration);
				}
			});
		});
		// End
		// Start
		// Вызов модальных окон в зависимости от get запроса
		let ifGetParemetrDo = (
			getParametrName, yesCallback,
			noCallback, deleteParametr =
			false) => {
			let url = new URL(document.location);
			let searchParams = url.searchParams;
			let parametrValue = searchParams.get(
				getParametrName);
			if (parametrValue === "true") {
				yesCallback();
			}
			else if (parametrValue ===
				"false") {
				noCallback();
			}
			if (deleteParametr &&
				parametrValue) {
				let params = new URLSearchParams(
					url.search.slice(1));
				params.delete(getParametrName);
				window.history.replaceState({},
					"",
					`${location.pathname}?${params}${location.hash}`
				)
			}
		}
		ifGetParemetrDo("success_pay", () =>
			$("#successPayModal").modal(), () =>
			$("#unSuccessPayModal").modal(),
			true);
		// End
		// Start
		// Отправка данных для оплаты
		$(".form__pay").submit(function (e) {
			e.preventDefault();
			let errorFun = r => {
				console.log(r)
				$("#buyModal").modal("toggle")
				$("#unSuccessPayModal").modal();
			}
			$.ajax({
				method: "GET",
				url: "https://chicaga.ru/assets/components/project/app/php_scripts/pay.php",
				data: $(this).serialize(),
				success: r => {
					r = JSON.parse(r);
					if (Number(r.code) === 1) {
						location.href = r.data.url;
					}
					else {
						errorFun(r);
					}
				},
				error: r => errorFun(r)
			})
		})
		// End
		// Start
		// При переходе по якорю в меню происходит автопрокрутка всех блоков с кастомным скроллом
		function customScrollToTop(e) {
			// document.querySelectorAll(".fp-scroller").forEach(scroller => {
			//   let split = scroller.style.transform.split(",");
			//   split[1] = 0;
			//   scroller.style.transform = split.join(",");
			// })
			// document.querySelectorAll(".iScrollIndicator").forEach(scrollIndicator => {
			//   split = scrollIndicator.style.transform.split(",");
			//   split[1] = 0;
			//   scrollIndicator.style.transform = split.join(",");
			// })
		}
		$("body").on("click",
			'[data-menuanchor]',
			customScrollToTop)
		// End
		//Форма покупки. Сокрытие элементов форм в зависимости от чекбокса "Я ваш клиент"
		const hideElementsBuyForm = {
			checkbox: null,
			form: null,
			statusHiden: false,
			init: function () {
				this.form = document.querySelector(
					"#buyModal form");
				this.checkbox = this.form.querySelector(
					"input[name=existing]");
				// Чекбокс почему-то сам не меняет свое значение
				if (this.checkbox) {
					this.checkbox.onclick = () => {
						this.statusHiden ? this.show() : this
							.hide();
						this.statusHiden = !this.statusHiden;
					}
				}
			},
			hide: function () {
				this.form.querySelectorAll(
					".form-group").forEach(group => {
					if (this.isGroupNotRequired(
							group)) {
						group.style.display =
							"none";
					}
				});
			},
			show: function () {
				this.form.querySelectorAll(
					".form-group").forEach(group => {
					group.style.display =
						"block";
				});
			},
			isGroupNotRequired: function (
				group) {
				let elms = group.querySelectorAll(
					"select, input, textarea");
				if (group.querySelector(
						"button")) {
					return false;
				}
				else if (elms) {
					return !Array.from(elms).find(
						el => el.hasAttribute(
							"required"));
				}
			}
		}
		hideElementsBuyForm.init();
		// End
		function setVideoWidth(relation, el,
			callback = function (size) {}) {
			var ww = window.innerWidth;
			var wh = window.innerHeight;
			if (ww / relation <= wh) {
				var width = ww;
				var height = ww / relation;
			}
			else {
				var height = wh;
				var width = wh * relation;
			}
			$(el).css({
				"height": height,
				"width": width,
			})
			callback({
				width,
				height
			})
		}
		if (window.innerWidth <= 1259) {
			setVideoWidth(0.5610278372591007,
				".bgRight.element-with-video-bg"
			)
			$(window).resize(function () {
				setVideoWidth(
					0.5610278372591007,
					".bgRight.element-with-video-bg"
				)
			})
		}

		function setMobSizeCallback(size) {
			$(".proposal-triger-mobile").css(
				"width", size.width)
		}
		setVideoWidth(2,
			".offer-video .offer-desktop-video"
		)
		setVideoWidth(0.5,
			".offer-video .offer-phone-video",
			function (size) {
				setMobSizeCallback(size)
			})
		$(window).resize(function () {
			setVideoWidth(2,
				".offer-video .offer-desktop-video"
			)
			setVideoWidth(0.5,
				".offer-video .offer-phone-video",
				function (size) {
					setMobSizeCallback(size)
				})
		})

		function autoplay(section, el) {
			var clicked = 0;
			$(document).scroll(function (e) {
				if ($(section).position()) {
					if ($(document).scrollTop() >=
						$(section).position().top *
						0.9 && !clicked) {
						$(el +
							" .jquery-background-video-pauseplay"
						).click();
						clicked = 1;
					}
				}
			})
		}
		// 	if (window.innerWidth > 992) {
		// 		autoplay(".offer-bg-video", ".offer-desktop-video")
		// 	} else {
		// 		autoplay(".offer-bg-video", ".offer-phone-video")
		// 	}
	},
	onLoadWindow() {
		objM.anchors.scrollIntoViewByHash();
	},
	// custom function
	preload: function () {
		$('.preload').fadeOut('slow');
	},
	tooltip: function () {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		});
	},
	carousel: function () {
		if ($('.teacher-carousel').length >
			0) {
			$('.teacher-carousel').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				dotsEach: false,
				mouseDrag: false,
				touchDrag: false,
				pullDrag: false,
				navText: [
					'<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM15 5.25L1 5.25V6.75L15 6.75V5.25Z" fill="#B0B0B0"/>\n' +
					'</svg>\n',
					'<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L9.75736 0.696699C9.46447 0.403806 8.98959 0.403806 8.6967 0.696699C8.40381 0.989593 8.40381 1.46447 8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 11.3033L14.5303 6.53033ZM0 6.75H14V5.25H0L0 6.75Z" fill="#B0B0B0"/>\n' +
					'</svg>\n'
				],
				items: 1,
				autoplay: false,
				autoplaySpeed: 800,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
			});
		}
		if ($('.comment-in-carousel').length >
			0) {
			$('.comment-in-carousel').owlCarousel({
				loop: false,
				nav: false,
				dots: true,
				dotsEach: false,
				mouseDrag: false,
				touchDrag: false,
				pullDrag: false,
				margin: 40,
				items: 2,
				autoplay: false,
				autoplaySpeed: 800,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				responsiveClass: true,
				responsive: {
					// breakpoint from 0 up
					0: {
						items: 1
					},
					// breakpoint from 768 up
					768: {
						items: 2
					}
				}
			});
		}

		function fotoramaApi() {
			$('.fotorama').fotorama({
				width: '100%',
				maxwidth: '100%',
				ratio: 1600 / 950,
				maxheight: '100%',
				allowfullscreen: false,
				nav: 'thumbs',
				thumbwidth: 160,
				thumbheight: 100,
				fit: 'scaledown',
				thumbborderwidth: 4,
				thumbmargin: 10,
				thumbfit: 'cover',
				swipe: true,
				trackpad: true,
			});
			if ($('#aniimated-thumbnials').length) {
				var $lg = $(
					'#aniimated-thumbnials');
				// 1. Initialize fotorama manually.
				var $fotoramaDiv = $('.fotorama')
					.fotorama();
				// 2. Get the API object.
				var fotorama = $fotoramaDiv.data(
					'fotorama');
				var total = fotorama.size;

				function fotoramaElementStatik() {
					$('.counter').html(
						'<span class="current">' + (
							fotorama.activeIndex + 1) +
						'</span> / <span class="total">' +
						total + '</span>');
					//$('.fotorama__nav-wrap').append('<div class="foto__captions"><div class="in_cap">'+fotorama.activeFrame.caption+'<div></div>');
				}
				fotoramaElementStatik();

				function fotoramaElementEvent() {
					$('.counter').find('.current').text(
						fotorama.activeIndex + 1);
					//$('.fotorama__nav-wrap').find('.in_cap').text(fotorama.activeFrame.caption);
				}
				//fotorama
				//console.log(fotorama);
				$('.fotorama').on('fotorama:show',
					function (e) {
						e.preventDefault();
						fotoramaElementEvent();
					});
				$('.fotorama__arr').click(
					function (event) {
						event.preventDefault();
						fotoramaElementEvent();
					});
				$('.fotorama__stage__shaft').mouseup(
					function (event) {
						event.preventDefault();
						setTimeout(function () {
							fotoramaElementEvent();
						}, 250);
					});
				document.addEventListener(
					'touchstart',
					function (event) {
						//event.preventDefault();
						event.stopPropagation();
						setTimeout(function () {
							fotoramaElementEvent();
						}, 250);
					}, false);

				function fototamaResOptions() {
					if ($(window).width() <= 768) {
						fotorama.setOptions({
							ratio: 16 / 9,
							fit: 'cover',
							captions: false,
							thumbwidth: 100,
							thumbheight: 70
						});
						//console.log('asd1');
					}
					else {
						fotorama.setOptions({
							ratio: 16 / 9,
							fit: 'cover',
							captions: true,
							thumbwidth: 110,
							thumbheight: 90
						});
					}
				}
				fototamaResOptions();
				window.addEventListener('resize',
					function () {
						fototamaResOptions();
					});
				$lg.lightGallery();
				$('.full_foto').click(function (
					event) {
					event.preventDefault();
					//  $('#aniimated-thumbnials a').trigger('click');
					$lg.data('lightGallery').slide(
						fotorama.activeIndex);
					$(
						'.lg-thumb.lg-group .lg-thumb-item'
					).removeClass('active');
					$(
						'.lg-thumb.lg-group .lg-thumb-item'
					).eq(fotorama.activeIndex).addClass(
						'active');
				});
			}
		}
		fotoramaApi();
	},
	gMap: function () {
		var map, infoWindow;
		var gmarkers = [];

		function initMap() {
			var mapOptions = {
				zoom: 14,
				scrollwheel: true,
				//styles: [{"featureType": "all","elementType": "geometry.fill","stylers": [{"color": "#191f1f"}]}, {"featureType": "all","elementType": "labels.text.fill","stylers": [{"color": "#a4b0b0"}]}, {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"color": "#000000"}, {"weight": "1.5"}]}, {"featureType": "landscape","elementType": "geometry.fill","stylers": [{"hue": "#ff0000"}]}, {"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#111111"}]}, {"featureType": "landscape.natural","elementType": "geometry.fill","stylers": [{"color": "#0c0e0e"}]}, {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#0b2a28"}]}, {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"visibility": "on"}, {"color": "#38a6a6"}]}, {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#52c2c2"}]}, {"featureType": "road.highway.controlled_access","elementType": "geometry.fill","stylers": [{"color": "#000000"}, {"weight": "1.50"}]}, {"featureType": "road.highway.controlled_access","elementType": "geometry.stroke","stylers": [{"color": "#000000"}, {"weight": "0.2"}]}, {"featureType": "road.highway.controlled_access","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]}, {"featureType": "road.arterial","elementType": "geometry","stylers": [{"visibility": "on"}]}, {"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"weight": "1.5"}, {"color": "#000000"}]}, {"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{"color": "#3f3f3f"}, {"weight": "0.50"}]}, {"featureType": "road.local","elementType": "all","stylers": [{"visibility": "on"}]}, {"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"color": "#2c3434"}, {"weight": "0.41"}]}, {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]}, {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#2f434a"}]}]
			};
			map = new google.maps.Map(document
				.getElementById('map'),
				mapOptions);
			infoWindow = new google.maps.InfoWindow();
			google.maps.event.addListener(map,
				"click",
				function () {
					infoWindow.close();
				});
			var bounds = new google.maps.LatLngBounds();
			for (var i = 0; i < markersData.length; i++) {
				var latLng = new google.maps.LatLng(
					markersData[i].lat, markersData[
						i].lng);
				var name = markersData[i].name;
				var address = markersData[i].address;
				var phone = markersData[i].phone;
				var email = markersData[i].email;
				var file = markersData[i].file;
				var idx = markersData[i].idx;
				addMarker(latLng, name, address,
					phone, email, file, idx);
				bounds.extend(latLng);
			}
			map.fitBounds(bounds);
			map.panBy(0, -100);
		}

		function addMarker(latLng, name,
			address, phone, email, file, idx) {
			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: name,
				phone: phone,
				email: email,
				file: file,
				flat: true,
				icon: 'assets/components/project/app/img/webp/ellipse.webp',
				animation: google.maps.Animation
					.DROP
			});
			gmarkers.push(marker);
			google.maps.event.addListener(
				marker, 'click',
				function () {
					marker.setAnimation(google.maps
						.Animation.BOUNCE);
					var contentString =
						'<div class="infowindow">' +
						'<div class="map-title">' +
						name + '</div>' +
						'<div class="map-address">' +
						address + '</div>' +
						'<div class="map-info d-flex justify-content-between">' +
						'<div class="map-phone">' +
						phone + '</div>' +
						'<div class="map-email">' +
						email + '</div>' + '</div>' +
						'<a href="' + file +
						'" class="map-link" data-fancybox>Место входа на карте</a>' +
						'</div>';
					map.setZoom(16);
					map.setCenter(marker.getPosition());
					infoWindow.setContent(
						contentString);
					infoWindow.open(map, marker);
					var parent_elemet = $(
						'.gm-style-iw').parent();
					parent_elemet.addClass(
						'wrapper_style');
					map.panBy(0, -150);
				});
		}
		if ($('#map').length > 0) {
			initMap();
			setTimeout(function () {
				$('#map .gm-style').find('>div')
					.eq(0).find('>div').eq(2).find(
						'>div').find('>div').eq(2).addClass(
						'wrap_marker');
			}, 100);
		}
		$('.info-schools .item .map-link').click(
			function (e) {
				e.preventDefault();
				$('#mapModal').modal();
				$('.wrap-map .inner #map').insertAfter(
					'#mapModal .modal-body');
				var link = $(this).data('idx');
				google.maps.event.trigger(
					gmarkers[link], 'click');
			});
		$(document).on('click',
			'.gm-style-iw.gm-style-iw-c >button',
			function (e) {
				e.preventDefault();
				$('#mapModal').modal('hide');
			});
		$(
			'#tabs-map .nav-item a[data-toggle="tab"]'
		).on('shown.bs.tab', function () {
			$('.wrap-map .inner #map').insertAfter(
				'.wrap-map-tab .item .inner');
			initMap();
			setTimeout(function () {
				$('#map .gm-style').find(
						'>div').eq(0).find('>div').eq(
						2).find('>div').find('>div')
					.eq(2).addClass(
						'wrap_marker');
			}, 100);
		});
	},
	audioF: function () {
		if ($('audio').length > 0) {
			let audio = document.querySelector(
				'audio');
			audio.volume = 0.7;
			setTimeout(function () {
				$('audio')[0].play();
			}, 300);
			setTimeout(function () {
				$('.volume').trigger('click');
			}, 5000);

			function toggleMuteAudio() {
				$('audio').prop("muted", !$(
					'audio').prop("muted"));
			}
			$(document).on('click', '.volume',
				function () {
					toggleMuteAudio();
					$(this).toggleClass('mute');
				});
		}
	},
	windowHeight: function () {
		let fullHeight = $(window).height();
		if ($(window).width() < 576) {
			$('.section-main').height(
				fullHeight);
		}
	},
	ancore: function () {
		$('a[href^="#"]').click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(_href).offset().top +
					"px"
			});
			return false;
		});
	},
	scrollMenu: function () {
		$(function () {
			$(".anchor[href^='#']").on(
				'click',
				function (e) {
					e.preventDefault();
					console.log('ss222');
					var _href = $(this).attr(
						"href");
					$("html, body").animate({
						scrollTop: $(
								'[data-anchor="' + _href
								.replace('#', '') + '"]'
							).offset().top - 85 +
							"px"
					});
					$('.hamburger').trigger(
						'click');
				});
		});
	},
	browser: function () {
		if (jQuery.browser.safari) {
			$('.gradient-text').addClass(
				'color');
		}
		else {
			$('.gradient-text').removeClass(
				'color');
		}
	},
	videoBg: function () {
		$('.my-background-video').bgVideo({
			fadeOnPause: true
		});
		setTimeout(function () {
			$(
				'.jquery-background-video-pauseplay'
			).removeClass('pause').addClass(
				'play');
		}, 500);
	},
	fullP: function () {
		$('#fullpage').fullpage({
			verticalCentered: true,
			menu: '.menu',
			navigation: true,
			scrollOverflow: true,
			easingcss3: 'cubic-bezier(0.175, 0.785, 0.320, 1.175)',
			//autoScrolling: false,
			scrollOverflowReset: true,
			scrollingSpeed: 900,
			scrollOverflow: true,
			normalScrollElements: '#exampleModal',
			responsiveHeight: 300,
			afterResponsive: function (
				isResponsive) {},
			afterLoad: function (origin,
				destination, direction) {
				//console.log(document.location);
				// 	if(document.location.pathname === '/on-line/' && destination.index == 5){
				// 	   $('.jquery-background-video-pauseplay')[0].click();
				// 	}
				if (document.location.href ===
					'https://chicaga.ru/#video' &&
					destination.index == 2) {
					$(
						'.jquery-background-video-pauseplay'
					)[0].click();
				}
			},
		});
	},
	iLoadF: function () {
		setTimeout(function () {
			var src = $(document).find(
				'.rvg-iframe iframe').attr(
				'src');
			if (src.length > 0) {
				var r = src.replace(
					'?rel=0&showinfo=0&autoplay=1',
					'?autoplay=1');
				$(document).find('.rvg-iframe')
					.html('').addClass('visible');
				$(document).find('.rvg-iframe')
					.html('<iframe src="' + r +
						'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
					);
			}
		}, 1100);
	},
	//number_format
	nf: function (number, decimals,
		dec_point, thousands_sep) {
		var i, j, kw, kd, km;
		// input sanitation & defaults
		if (isNaN(decimals = Math.abs(
				decimals))) {
			decimals = 2;
		}
		if (dec_point == undefined) {
			dec_point = ',';
		}
		if (thousands_sep == undefined) {
			thousands_sep = '.';
		}
		i = parseInt(number = (+number || 0)
			.toFixed(decimals)) + '';
		if ((j = i.length) > 3) {
			j = j % 3;
		}
		else {
			j = 0;
		}
		km = j ? i.substr(0, j) +
			thousands_sep : '';
		kw = i.substr(j).replace(
			/(\d{3})(?=\d)/g, "$1" +
			thousands_sep);
		kd = (decimals ? dec_point + Math.abs(
			number - i).toFixed(decimals).replace(
			/-/, '0').slice(2) : '');
		return km + kw + kd;
	},
	anchors: {
		init() {
			this.setHashOnScroll();
			let anchors = [...document.querySelectorAll('a[href*="/#"]'), ...document.querySelectorAll('a[href*="#"]')];
			anchors.forEach(anchor => {
				var elIsNotNav = !anchor.classList.contains("nav-link");
				if (anchor.getAttribute("data-anchor") !== "disable" && elIsNotNav) {
					anchor.addEventListener('click', (e) => {
						e.preventDefault();
						let href = anchor.getAttribute('href');
						if (this.targetExistOnThisPage(this.getTargetName(href))) {
							this.setHashByHref(href);
							this.scrollIntoViewByHref(href);
						} else {
							location.href = href;
						}
						
					});
				}
			})
		},
		scrollIntoViewByHref(href) {
			document.querySelector(`[data-anchor=${this.getTargetName(href)}]`).scrollIntoView({
				behavior: 'smooth'
			});
		},
		scrollIntoViewByHash() {
			this.scrollIntoViewByHref(location.hash);
		},
		setHashByHref(href) {
			location.hash = "#" + this.getTargetName(href);
		},
		setHashOnScroll() {
			window.addEventListener('scroll', e => {
				document.querySelectorAll("[data-anchor]").forEach(el => {
					let scrollTop =  window.scrollY;
					if (el.offsetTop - 50 < scrollTop && scrollTop < el.offsetTop + el.offsetHeight + 50 && "#" + el.getAttribute("data-anchor") != location.hash) {
						this.setHashByHref(el.getAttribute("data-anchor"));
					}
				})
			});
		},
		getTargetName(href) {
			let start = href.lastIndexOf("/") != -1 ? href.lastIndexOf("/") : 0;
			return href.substr(start, href.length).replace("/", "").replace("#", "");
		},
		targetExistOnThisPage(target) {
			return document.querySelector(`[data-anchor=${target}]`) !== null;
		}
	}
};
window.onload = objM.onLoadWindow;
