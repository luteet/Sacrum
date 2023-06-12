
const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	burger = document.querySelector('.header__burger'),
	header = document.querySelector('.header');


// =-=-=-=-=-=-=-=-=-=- <image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-

const imageBody = document.querySelectorAll('.image-body, figure');
imageBody.forEach(imageBody => {
	const img = imageBody.querySelector('img'), style = getComputedStyle(imageBody);
	if(img) {
		if(img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
		imageBody.style.paddingTop = Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%';
	}
	
})

// =-=-=-=-=-=-=-=-=-=- </image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-


// =-=-=-=-=-=-=-=-=-=- <Get-device-type> -=-=-=-=-=-=-=-=-=-=-

const getDeviceType = () => {

	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return "tablet";
	}

	if (
		/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
		ua
		)
	) {
		return "mobile";
	}
	return "desktop";

};

// =-=-=-=-=-=-=-=-=-=- </Get-device-type> -=-=-=-=-=-=-=-=-=-=-




// =-=-=-=-=-=-=-=-=-=-=-=- <animation> -=-=-=-=-=-=-=-=-=-=-=-=

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//responsive
let mm = gsap.matchMedia();

let smoother;
function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return rand;
  }

mm.add("(min-width: 992px)", () => {

	ScrollTrigger.normalizeScroll(true);
	// create the smooth scroller FIRST!
	smoother = ScrollSmoother.create({
		smooth: 1.5,
		effects: true,
	});

	

	/* smoother.wrapper(".smooth-wrapper")
	smoother.wrapper(".smooth-content") */

	const folderCards = document.querySelectorAll('.anim-folder-card');
	folderCards.forEach(folderCard => {
		/* gsap.set(folderCard, { filter: "blur(10px)", });
		gsap.to(folderCard, {
			scrollTrigger: {
			  trigger: folderCard,
			  scrub: true,
			  start: "top 80%",
			  end: "bottom bottom",
			},
			filter: "blur(0px)",
			//duration: 1, ease: "circ.out",
		}); */

		smoother.effects(folderCard, {speed: randomInteger(1.1, 1.3)});
	})

	//console.log(randomInteger(1, 1.7))

	//smoother.effects(folderCards[0], {speed: randomInteger(0.5, 2.5), lag: 0.3});

	/* gsap.from('.schedule__bg', {
		scrollTrigger: {
		  trigger: '.schedule',
		  pin: true,
		  scrub: true,
		  start: "top top",
		  end: "bottom bottom",
		  //pinSpacing: true,
		},
		//y: "100%",
	}) */

	/* gsap.from('.schedule__bg--image, .schedule__bg .noise-decor', {
		scrollTrigger: {
		  trigger: '.schedule__bg--wrapper',
		  scrub: true,
		  pin: true,
		  start: "top bottom",
		  end: "bottom -20%",
		  ignoreMobileResize: true
		},
		y: "400px",
		duration: 2,
		//duration: 1, ease: "circ.out",
	}); */

	/* ScrollTrigger.create({
		trigger: '.schedule__bg',
		start: "top top",
		end: "bottom bottom",
		pin: true,
	}) */

	gsap.from('.schedule__bg--wrapper', {
		scrollTrigger: {
		  trigger: '.schedule__bg',

		  //scub: true,
		  //markers: true,
		  start: "top top",
		  //end: `${document.querySelector('.schedule__bg').offsetHeight - 100}px`,
		  pin: true,
		  //pin: true,
		  //start: "-20% top",
		},
		/* bottom: `${document.querySelector('.schedule__bg').offsetHeight - window.innerHeight}px`,
		duration: 2 */
		//bottom: `${document.querySelector('.schedule__bg').offsetHeight - document.querySelector('.schedule__bg--wrapper').offsetHeight - 50}px`,
	});

	/* const sections = document.querySelectorAll('section');
	
	sections.forEach(section => {
		
	}) */
	ScrollTrigger.create({
		trigger: '.sections-wrapper__container',
		//start: "50% top",
		start: "top top",
		end: `${window.innerHeight} top`,
		pin: true,
	})

});

mm.add("(max-width: 992px)", () => {
	/* ScrollTrigger.normalizeScroll({
		allowNestedScroll: true,
		type: "touch,wheel,pointer",
	});
	// create the smooth scroller FIRST!
	smoother = ScrollSmoother.create({
		smooth: 4,
		//effects: true,
	}); */
	document.querySelector('.schedule__bg').offsetHeight = `${document.querySelector('.schedule__bg').offsetHeight}px`;
	gsap.from('.schedule__bg--wrapper', {
		scrollTrigger: {
		  trigger: '.schedule__bg--wrapper',

		  //scub: true,

		  start: "top top",
		  end: `${document.querySelector('.schedule__bg').offsetHeight}px 0vh`,
		  pin: true,
		  //markers: true,
		  //pin: true,
		  //start: "-20% top",
		},
		//bottom: `${document.querySelector('.schedule__bg').offsetHeight - window.innerHeight}px`,
		//duration: 2
		//bottom: `${document.querySelector('.schedule__bg').offsetHeight - document.querySelector('.schedule__bg--wrapper').offsetHeight - 50}px`,
	});

	/* ScrollTrigger.normalizeScroll({
		allowNestedScroll: true, 
		lockAxis: false,
		momentum: 2, // dynamically control the duration of the momentum when flick-scrolling
		type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list 
	}); */

	//ScrollTrigger.config({ignoreMobileResize: true})
	/* gsap.fromTo('.schedule__bg--wrapper', {
		scrollTrigger: {
			trigger: '.schedule__bg--wrapper',
			scub: true,	
			markers: true,
		},
		y: 0,
	}, {
		y: `${document.querySelector('.schedule__bg').offsetHeight - document.querySelector('.schedule__bg--wrapper').offsetHeight - 50}px`,
	}) */
	
	/* ScrollTrigger.create({
		trigger: '.schedule__bg--wrapper',
		start: "top top",
		end: `${document.querySelector('.schedule__bg').offsetHeight}px`,
		markers: true,

		//end: '100% bottom',
		//end: `${document.querySelector('.schedule__bg').offsetHeight + window.innerHeight}px`,
		pin: true,
		//pinReparent: ".main"
		
	}) */

	/* setTimeout(() => {
		const heightScreen = window.innerHeight;
		//document.querySelector('.schedule__bg').style.height = document.querySelector('.schedule__bg').offsetHeight + 'px';
		ScrollTrigger.create({
			trigger: '.schedule__bg',
			//start: () => document.querySelector('.schedule__bg').offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
			pinSpacing: false,
			//start: `top ${window.innerHeight / 2}px`,
			//endTrigger: '.sections__wrapper',
			//end: `bottom ${window.innerHeight}px`,
			//end: `bottom ${window.innerHeight}px`,
			//end: `${document.querySelector('.schedule').offsetHeight}px ${heightScreen}px`,
			//end: `+=${document.querySelector('.schedule').offsetHeight - window.innerHeight}`,
			markers: true,
			pin: true,
		})
	},200) */

	/* gsap.to(".test:not(:last-child)", {
		yPercent: -100, 
		ease: "none",
		stagger: 0.5,
		scrollTrigger: {
		  trigger: ".main",
		  start: "top top",
		  end: "+=300%",
		  scrub: true,
		  pin: true
		}
	}); */

	ScrollTrigger.create({
		trigger: '.sections-wrapper__container',
		//start: "50% top",
		start: "top top",
		end: `${window.innerHeight}px top`,
		toggleClass: "active",
		//markers: true,
		onUpdate: self => (self.progress == 1) ? document.querySelector('.sections-wrapper__container').classList.add('_active') : document.querySelector('.sections-wrapper__container').classList.remove('_active'),
		//end: `${window.innerHeight} top`,
		pin: true,
		
	})
	

	

	/* const folderCards = document.querySelectorAll('.anim-folder-card');

	folderCards.forEach(folderCard => {
		gsap.to(folderCard, {
			scrollTrigger: {
			  trigger: folderCard,
			  scrub: true,
			  //pin: true,
			  start: "top center",
			},
			y: `-${randomInteger(50, 100)}%`,
			duration: 2,
			//duration: 1, ease: "circ.out",
		});
	}) */

	
})

/* ScrollTrigger.create({
	trigger: '.schedule__bg',
	start: "top top",
	//end: "+= " + do,
	pin: true,
}) */

/* gsap.from('.schedule__bg', {
	scrollTrigger: {
	  trigger: '.hero',
	  pin: true,
	  scub: true,
	  start: "top top",
	  end: "bottom bottom",
	},
	y: "-100%",
	//y: "20%",
	//duration: 1, ease: "circ.out",
}); */
var sticky = new Sticky('.schedule__bg');






// =-=-=-=-=-=-=-=-=-=-=-=- </animation> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <get-coords> -=-=-=-=-=-=-=-=-=-=-=-=

function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
	top: box.top + window.pageYOffset,
	right: box.right + window.pageXOffset,
	bottom: box.bottom + window.pageYOffset,
	left: box.left + window.pageXOffset
	};
}

// =-=-=-=-=-=-=-=-=-=-=-=- </get-coords> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let resizeCheck = {}, windowSize = 0;

const appendToOnTablet = document.querySelectorAll("[data-append-to]"),
	  appendToOnTabletArray = [];

appendToOnTablet.forEach(appendToOnTablet => {
	appendToOnTablet.style.display = "none";
	appendToOnTabletArray.push({
		element: appendToOnTablet,
		parent: appendToOnTablet.parentElement,
		appendAddress: document.querySelector(appendToOnTablet.dataset.appendTo),
	})
})

function resizeCheckFunc(size, minWidth, maxWidth) {
	if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
		resizeCheck[String(size)] = false;
		maxWidth(); // < size
	}

	if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
		resizeCheck[String(size)] = true;
		minWidth(); // > size
	}
}

//document.querySelector('.message').style.opacity = 1;

function resize() {

	html.style.setProperty("--height-header", header.offsetHeight + "px");
	html.style.setProperty("--screen-height", body.offsetHeight + "px");
	
	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
		//document.querySelector('.message').textContent = window.innerHeight;
		
	}
	html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
	
	windowSize = window.innerWidth;
	
	resizeCheckFunc(992,
		function () {  // screen > 992px

			
			Array.from(appendToOnTabletArray).forEach(appendElement => {
				appendElement["element"].style.display = "none";
				appendElement["appendAddress"].append(appendElement["element"]);
				appendElement["element"].style.removeProperty('display');
			})


		},
		function () {  // screen < 992px

			Array.from(appendToOnTabletArray).forEach(appendElement => {
				appendElement["element"].style.display = "none";
				appendElement["parent"].append(appendElement["element"]);
				appendElement["element"].style.removeProperty('display');
			})
		}
	);
}

resize();

window.addEventListener('resize', resize)

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=- <click events> -=-=-=-=-=-=-=-=-=-=-

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

	if ($('.header__burger')) {
		menu.forEach(element => {
			element.classList.toggle('_mob-menu-active')
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=-=-=- <header-nav> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerLink = $(".header__nav--list a, .scroll-btn");
	if(headerLink) {

		event.preventDefault();
	
		if(smoother) {
			
			const section = document.querySelector(headerLink.getAttribute('href'));
			if(section) {
				if(section.closest('.sections-wrapper')) {
					/* window.scrollTo({
						left:0, top: getCoords(section.closest('.sections-wrapper')).top + window.innerHeight + section.offsetTop, behavior: "smooth"
					}) */
					smoother.scrollTo(getCoords(section.closest('.sections-wrapper')).top + window.innerHeight + section.offsetTop, true);
				} else {
					window.scrollTo({
						left:0, top: getCoords(section).top, behavior: "smooth"
					})
				}
			}
			
		} else {
			section = document.querySelector(headerLink.getAttribute('href'))

			//ScrollTrigger.disable();
	
			menu.forEach(elem => {
				elem.classList.remove('_mob-menu-active')
			})
		
			if(section) {

				if(section.closest('.sections-wrapper')) {
					window.scrollTo({
						left:0, top: getCoords(section.closest('.sections-wrapper')).top + window.innerHeight + section.offsetTop, behavior: "smooth"
					})
				} else {
					window.scrollTo({
						left:0, top: getCoords(section).top, behavior: "smooth"
					})
				}
				//section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
				
				ScrollTrigger.refresh( true ) ;
				/* setTimeout(() => {
					ScrollTrigger.enable();
				},500) */
			} else {
				window.scrollTo({
					left:0, top: 0, behavior: "smooth"
				})
				ScrollTrigger.refresh( true ) ;
			}
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-nav> -=-=-=-=-=-=-=-=-=-=-=-=
	

	// =-=-=-=-=-=-=-=-=-=-=-=- <header-lang> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerLangTarget = $(".header__lang--target")
	if(headerLangTarget && getDeviceType() != "desktop") {
	
		headerLangTarget.classList.toggle('_active')
	
	} else if(!$('.header__lang') && document.querySelector('.header__lang--target._active')) {
		document.querySelector('.header__lang--target._active').classList.remove('_active');
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-lang> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <FAQ> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const faqItem = $(".faq__item")
	if(faqItem) {

		faqItem.classList.toggle('_active');
	
		const faqItemAnswear = faqItem.querySelector('.faq__item--answear');

		if(faqItem.classList.contains('_active')) {
			gsap.fromTo(faqItemAnswear, {
				height: 0,
				ease: "circ.out",
			}, {
				height: "auto",
				ease: "power4.out",
				onComplete: function (event) {
					if(windowSize >= 992) ScrollTrigger.refresh();
				}
			})
		} else {
			gsap.to(faqItemAnswear, {
				height: 0,
				ease: "power4.out",
				onComplete: function (event) {
					if(windowSize >= 992) {
						ScrollTrigger.refresh();
						if(smoother) {
							if(smoother.scrollTrigger.progress == 1) {
								smoother.scrollTo(smoother.scrollTrigger.end - (1))
							}
						}
					}
				}
			})
		}

	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </FAQ> -=-=-=-=-=-=-=-=-=-=-=-=




	// =-=-=-=-=-=-=-=-=-=-=-=- <header-lang> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerLang = $(".header__lang")
	if(headerLang) {
	
		headerLang.classList.toggle('_active');
		if(headerLang.classList.contains('_active')) {
			setTimeout(() => {
				window.location.href = headerLang.dataset['lang-1'];
			},200)
		} else {
			setTimeout(() => {
				window.location.href = headerLang.dataset['lang-2'];
			},200)
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-lang> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <click> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerSubmitBtn = $(".application-popup__submit-container .btn");
	if(headerSubmitBtn) {
	
		const form = headerSubmitBtn.closest('.popup').querySelector('.application-popup__form');
		form.classList.toggle('_active');
		headerSubmitBtn.classList.toggle('_disabled');

		headerSubmitBtn.closest('.popup').querySelector('.popup-body').scrollTo({
			left: 0, top: 0, behavior: "smooth"
		});
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </click> -=-=-=-=-=-=-=-=-=-=-=-=
	

})

// =-=-=-=-=-=-=-=-=-=- </click events> -=-=-=-=-=-=-=-=-=-=-






// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=

function Popup(arg) {

	let body = document.querySelector('body'),
		html = document.querySelector('html'),
		saveHref = (typeof arg == 'object') ? (arg['saveHref']) ? true : false : false,
		popupCheck = true,
		popupCheckClose = true;

	const removeHash = function () {
		let uri = window.location.toString();
		if (uri.indexOf("#") > 0) {
			let clean_uri = uri.substring(0, uri.indexOf("#"));
			window.history.replaceState({}, document.title, clean_uri);
		}
	}

	const open = function (id, initStart) {

		if (popupCheck) {
			popupCheck = false;

			let popup = document.querySelector(id);

			if (popup) {

				if(popup.classList.contains('popup')) {

					body.classList.remove('_popup-active');
					html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
					body.classList.add('_popup-active');
					if(smoother) {
						smoother.paused(true)
						//smoother.kill();
					}

					if (saveHref) history.pushState('', "", id);

					setTimeout(() => {
						if (!initStart) {
							popup.classList.add('_active');
							function openFunc() {
								popupCheck = true;
								popup.removeEventListener('transitionend', openFunc);
							}
							popup.addEventListener('transitionend', openFunc)
						} else {
							popup.classList.add('_transition-none');
							popup.classList.add('_active');
							popupCheck = true;
						}

					}, 0)
				}

			} else {
				return new Error(`Not found "${id}"`)
			}
		}
	}

	const close = function (popupClose) {
		
		let popup
		if (typeof popupClose === 'string') {
			popup = document.querySelector(popupClose)
		} else {
			popup = popupClose.closest('.popup');
		}

		const form = popup.querySelector('.application-popup__form'),
		formTarget = popup.querySelector('.application-popup__submit-container .btn');

		if(form) {

			if (popupCheckClose && !form.classList.contains('_active')) {
				popupCheckClose = false;

				if (popup.classList.contains('_transition-none')) popup.classList.remove('_transition-none')
				if(smoother) smoother.paused(false);

				

				setTimeout(() => {
					popup.classList.remove('_active');
					function closeFunc() {
						const activePopups = document.querySelectorAll('.popup._active');

						if (activePopups.length < 1) {
							body.classList.remove('_popup-active');
							html.style.setProperty('--popup-padding', '0px');
						}

						if (saveHref) {
							removeHash();
							if (activePopups[activePopups.length - 1]) {
								history.pushState('', "", "#" + activePopups[activePopups.length - 1].getAttribute('id'));
							}
						}

						popupCheckClose = true;
						popup.removeEventListener('transitionend', closeFunc)
					}

					popup.addEventListener('transitionend', closeFunc)

				}, 0)

			} else {
				form.classList.remove('_active')
				formTarget.classList.remove('_disabled');
			}
		}
	}

	return {

		open: function (id) {
			open(id);
		},

		close: function (popupClose) {
			close(popupClose)
		},

		init: function () {

			let thisTarget
			body.addEventListener('click', function (event) {

				thisTarget = event.target;

				let popupOpen = thisTarget.closest('.open-popup');
				if (popupOpen) {
					event.preventDefault();
					open(popupOpen.getAttribute('href'))
				}

				let popupClose = thisTarget.closest('.popup-close');
				if (popupClose) {
					close(popupClose)
				}

			});

			if (saveHref) {
				let url = new URL(window.location);
				if (url.hash) {
					open(url.hash, true);
				}
			}
		},

	}
}

const popup = new Popup();

popup.init()

// =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=


const preloader = document.querySelector('.preloader');
const heroBg = document.querySelector('.hero__bg');

document.addEventListener("DOMContentLoaded", function (event) {
	setTimeout(() => {
		
		if(heroBg) {
			const heroBgVideo = heroBg.querySelector('.hero__bg--video');

			if(heroBgVideo) {
				heroBgVideo.load();
				/* heroBgVideo.addEventListener('loadeddata', function (event) {
					
				}) */
			}
		}
		preloader.classList.add('_loading');
	},200)
})

window.addEventListener('load', function (event) {
	setTimeout(() => {
		if(heroBg) {
			const heroBgVideo = heroBg.querySelector('.hero__bg--video');

			if(heroBgVideo) {
				heroBgVideo.autoplay = true;
				heroBgVideo.play();
				heroBg.classList.add('_loaded');
			}
		}
		
	},0)
	setTimeout(() => {
		preloader.classList.remove('_loading');
		preloader.classList.add('_loaded');

		setTimeout(() => {
			preloader.remove();
		},1500)
	},1300)
})
