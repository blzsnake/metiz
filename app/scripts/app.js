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

	$('.js-prod-list').on('click', function () {
		$(this).closest('.aside-menu').toggleClass('is-active');
		$('.prod-list').toggleClass('is-active');
	});
	// Code here
});
