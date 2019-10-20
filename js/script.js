! function (e) {
	"use strict";
	e(window).on("load", function () {
		e(".loader-inner").fadeOut(), e(".loader").delay(200).fadeOut("slow")
	}), e("a.scroll").smoothScroll({
		speed: 800,
		offset: -60
	});
	var i = e(".header"),
		a = i.offset(),
		s = e(".block-top");
	e(window).scroll(function () {
		e(this).scrollTop() > a.top + 500 && i.hasClass("default") ? i.fadeOut("fast", function () {
			e(this).removeClass("default").addClass("switched-header").fadeIn(200), s.addClass("active")
		}) : e(this).scrollTop() <= a.top + 500 && i.hasClass("switched-header") && i.fadeOut("fast", function () {
			e(this).removeClass("switched-header").addClass("default").fadeIn(100), s.removeClass("active")
		})
	});
	var t = e(" .hero .main-slider .slides li");

	function l() {
		t.css("height", e(window).height())
	}
	e(function () {
		l()
	}), e(window).resize(function () {
		l()
	}), e(".main-slider").flexslider({
		animation: "fade",
		slideshow: !0,
		directionNav: !1,
		controlNav: !0,
		pauseOnAction: !1,
		animationSpeed: 1e3
	}), e(".review-slider").flexslider({
		animation: "slide",
		slideshow: !0,
		directionNav: !0,
		controlNav: !1,
		pauseOnAction: !1,
		animationSpeed: 500
	});
	var o = e(".mobile-but"),
		n = e(".main-nav ul");
	n.height();
	e(o).on("click", function () {
		return e(".toggle-mobile-but").toggleClass("active"), n.slideToggle(), e(".main-nav li a").addClass("mobile"), !1
	}), e(window).resize(function () {
		e(window).width() > 320 && n.is(":hidden") && (n.removeAttr("style"), e(".main-nav li a").removeClass("mobile"))
	}), e(".main-nav li a").on("click", function () {
		e(this).hasClass("mobile") && (n.slideToggle(), e(".toggle-mobile-but").toggleClass("active"))
	}), e(".background-img").each(function () {
		var i = e(this).children("img").attr("src");
		e(this).css("background-image", 'url("' + i + '")').css("background-position", "initial")
	});
	var u = e(".main-nav li span.search-ico"),
		h = {
			container: e(".block-search-form"),
			config: {
				effect: "slideToggle",
				speed: "300"
			},
			init: function (i) {
				e.extend(this.config, i), u.on("click", this.show)
			},
			show: function () {
				var e = h,
					i = e.container,
					a = e.config;
				i.is(":hidden") && (h.close.call(i), h.container[a.effect](a.speed))
			},
			close: function () {
				var i = e(this);
				i.find("span.search-close").length || (document.onkeydown = function (e) {
					27 == (e = e || window.event).keyCode && i[h.config.effect](h.config.effect.speed)
				}, e("<span class=close-search></span>").prependTo(i).on("click", function () {
					i[h.config.effect](h.config.effect.speed)
				}))
			}
		};
	h.init({
		effect: "fadeToggle",
		speed: "300"
	})
}(jQuery);
