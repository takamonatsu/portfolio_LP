import Glide from '@glidejs/glide';

const initGlideSlider = () => {
    new Glide('.glide', {
        type: 'carousel',
        perView: 5.5,
        gap: 10,
        autoplay: 3000,
        animationDuration: 2000,
        breakpoints: {
            1280: {
                perView: 6,
            },
            1000: {
                perView: 5
            },
            800: {
                perView: 4
            },
            650: {
                perView: 3
            },
            500: {
                perView: 2
            },
            375: {
                perView: 1.5
            }
        }
    }).mount();
}

export { initGlideSlider };