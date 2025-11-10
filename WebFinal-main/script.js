  $(document).ready(function() {

    console.log("jQuery is ready!");

    const $datetimeContainer = $('#datetime-container');
    if ($datetimeContainer.length) {
        function updateDateTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            $datetimeContainer.text(now.toLocaleString('ru-RU', options));
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }

    const $colorChangerBtn = $('#color-changer-btn');
    if ($colorChangerBtn.length) {
        const colors = ['#e8ecef', '#f0f8ff', '#faebd7', '#f5f5dc', '#fffacd'];
        let currentColorIndex = 0;
        $colorChangerBtn.on('click', function() {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            $('body').css('backgroundColor', colors[currentColorIndex]);
        });
    }

    const $readMoreBtn = $('#read-more-btn');
    if ($readMoreBtn.length) {
        $readMoreBtn.on('click', function() {
            $('#product-desc-more').toggle();
            $('#product-desc-short').toggle();
            const text = $(this).text();
            $(this).text(text === 'Читать далее' ? 'Скрыть' : 'Читать далее');
        });
    }

    const faqData = [
        { question: "What are the delivery times?", answer: "Standard delivery takes 3-5 business days. Express delivery is available and takes 1-2 business days within Almaty." },
        { question: "Is it possible to return the product?", answer: "Yes, you can return an unopened product within 14 days of purchase. Please check our return policy for more details." },
        { question: "Are the perfumes original?", answer: "Absolutely. We are an authorized retailer and guarantee that all our products are 100% original." }
    ];

    const $faqContainer = $('#faq-accordion-container');

    if ($faqContainer.length) {
        $.each(faqData, function(index, item) {
            const faqHtml = `
                <div class="my-faq-item">
                    <button class="my-faq-question">${item.question}</button>
                    <div class="my-faq-answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `;
            $faqContainer.append(faqHtml);
        });

        $faqContainer.on('click', '.my-faq-question', function() {
            $(this).toggleClass('active');
            $(this).next('.my-faq-answer').slideToggle(300);
        });
    }


    const $popupContainer = $('#popup-form-container');
    $('#open-popup-btn').on('click', () => $popupContainer.addClass('show'));
    $('#close-popup-btn').on('click', () => $popupContainer.removeClass('show'));
    $popupContainer.on('click', function(event) {
        if (event.target === this) {
            $popupContainer.removeClass('show');
        }
    });

    $('#subscription-form').on('submit', function(event) {
        event.preventDefault();

        const $emailInput = $('#email');
        const $emailError = $('#email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = $emailInput.val().trim();
        let isValid = true;

        $emailError.hide().text('');
        $emailInput.removeClass('is-invalid');

        if (emailValue === '') {
            $emailError.text('Email address is required.').show();
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            $emailError.text('Please enter a valid email address.').show();
            isValid = false;
        }

        if (!isValid) {
            $emailInput.addClass('is-invalid');
        } else {
            const $submitBtn = $(this).find('button[type="submit"]');
            const originalBtnHtml = $submitBtn.html();

            $submitBtn.prop('disabled', true)
                     .html('<span class="spinner"></span> Please wait...');

            setTimeout(() => {
                $submitBtn.prop('disabled', false).html(originalBtnHtml);

                alert('Thank you for subscribing!');

                $popupContainer.removeClass('show');
                $(this)[0].reset();
            }, 2000);
        }
    });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape' && $popupContainer.hasClass('show')) {
            $popupContainer.removeClass('show');
        }

        if (event.code === 'Space' && !$popupContainer.hasClass('show')) {

        }
    });

    try {
        const buySound = new Audio('sound/buttonsound.mp3');
        $('.buy-button').on('click', function() {
            buySound.currentTime = 0;
            buySound.play().catch(e => console.error("Ошибка воспроизведения звука:", e));

            alert('Добавлено в корзину!');
        });
    } catch (e) {
        console.error("Не удалось загрузить аудиофайл. Убедись, что путь правильный.", e);
    }

    let counterAnimationStarted = false;
    const $statsSection = $('.stats-section');

    function startCounterAnimation() {
        if (!$statsSection.length || counterAnimationStarted) return;

        const windowTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const sectionTop = $statsSection.offset().top;

        if (windowTop + windowHeight > sectionTop) {
            counterAnimationStarted = true;

            $('.stat-number').each(function() {
                const $this = $(this);
                const goal = parseInt($this.data('goal'));

                $({ counter: 0 }).animate({
                    counter: goal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.counter));
                    },
                    complete: function() {
                        $this.text(goal);
                    }
                });
            });
        }
    }

    startCounterAnimation();
    $(window).on('scroll', startCounterAnimation);

});
