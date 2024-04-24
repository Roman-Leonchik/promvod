const swiperHome = new Swiper('.js-swiper-home', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (`0${index + 1}`) + "</span>";
        },
    },
});

const swiperWork = new Swiper(".js-swiper-work", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        960: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("js-form");
    form.addEventListener("submit", formSend)

    async function formSend(e) {
        e.preventDefault();
        
        const error = formValidate(form);
        const formData = new FormData(form);

        if (error === 0) {
            form.classList.add("_sending");
            const response = await fetch("../sendmail.php", {
                method: "POST",
                body: formData,
            })

            console.log(response);

            if(response.ok) {
                form.classList.remove("_sending");
                form.reset();
            }
        }
    };

    function formValidate() {
        let error = 0; 
        const formReq = document.querySelectorAll("._req");

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if(Boolean(input.value.length)) {
                formRemoveError(input);
            } else {
                formAddError(input);
                error++;
            }
        }

        return error;
    }

    function formAddError(input) {
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.classList.remove("_error");
    }
});