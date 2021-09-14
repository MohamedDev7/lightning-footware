"use strict";
const slider = document.querySelector(".slider");
const btnNext = document.querySelector(".btn-slider--next");
const btnPrev = document.querySelector(".btn-slider--prev");
const slides = document.querySelectorAll(".slider__img-wraper");
let curSlide = 0;

const goToSlide = function (slide) {
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slide)}%)`;
		if (i - slide !== 0) {
			s.style.opacity = "0";
		} else {
			s.style.opacity = "1";
		}
	});
};

goToSlide(0);

const nextSlide = function () {
	if (curSlide === slides.length - 1) curSlide = 0;
	else {
		curSlide++;
	}
	goToSlide(curSlide);
};

const prevSlide = function () {
	if (curSlide === 0) curSlide = slides.length - 1;
	else {
		curSlide--;
	}
	goToSlide(curSlide);
};

// 0 / 100 / 200

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
