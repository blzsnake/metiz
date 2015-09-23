import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';

$(() => {
	$('#mainSlider').slick({
		prevArrow: '.arrow_main_prev'
		, nextArrow: '.arrow_main_next'
		, dots: true
		, dotsClass: 'pagination'
	});

	$('#salesSlider').slick({
		slidesToShow: 5
		, prevArrow: '.arrow_sales_prev'
		, nextArrow: '.arrow_sales_next'
		, infinity: true
	});

	$('#newsSlider').slick({
		slidesToShow: 5
		, prevArrow: '.arrow_news_prev'
		, nextArrow: '.arrow_news_next'
		, infinity: true
	});

	$('#popularSlider').slick({
		slidesToShow: 5
		, prevArrow: '.arrow_popular_prev'
		, nextArrow: '.arrow_popular_next'
		, infinity: true
	});

	$('.js-prod-list').on('mouseover', function () {
		setTimeout(function () {
			$(this).closest('.aside-menu').addClass('is-active');
			$('.prod-list').addClass('is-active');
		}, 200);
	});

	$(document).on('mouseover', function (e) {
		if (!$(e.target).closest('.prod-list').length) {
			$(this).closest('.prod-list').removeClass('is-active');
			$('.prod-list').removeClass('is-active');
		}
	}).on('click', function(e) {
		if (!$(e.target).closest('.aside-menu').length && !$('.is-collapsed').length && !$(e.target).closest('.js-toggle-menu')) {
			$(this).closest('.prod-list').removeClass('is-active');
			$('.js-aside-menu').toggleClass('is-collapsed');
		}
	});

	$('.js-toggle-menu').on('click', function () {
		$('.js-aside-menu').toggleClass('is-collapsed');
	});

	$('.js-toggle-list').on('click', function () {
		var $this = $(this);
		$('.js-toggle-list').removeClass('is-active');
		$('.js-prod-wrapp').removeClass('is-active');
		$this.addClass('is-active');
		$('#' + $this.data().type).addClass('is-active');
	});
});
