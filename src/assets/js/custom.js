$(document).ready(function () {

    $('#jsHamburgerBtn').click(function () {
        $(this).toggleClass('clicked');
    })

    $('.jsStickyList .sticky-link').click(function () {
        $('.sticky-link').removeClass('active')
        $(this).closest('.sticky-list').find('.sticky-link').addClass('active');
    })

    $('.jsProfileSelect').click(function () {
        $(this).toggleClass('active');
    })

    $(document).on("click", function (event) {
        var $trigger = $(".close-on-outside");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.jsChannelList').addClass('d-none');
            $('.jsChannelToggle').removeClass('active');
            /*10-01-2023*/
        }
    });

    $('.jsChannelToggle').click(function () {
        $(this).toggleClass('active');
        $('.jsChannelList').toggleClass('d-none');
    })

    $('.jsFinancesList .custom-radiobox-label').click(function () {
        var currentText = $(this).text().trim();
        $('.jsChannelToggle').text(currentText);
        $('.jsChannelToggle').removeClass('active');
        $('.jsChannelList').addClass('d-none');
    });

    $('.jsViewOption .option-btn').click(function () {
        $('.option-btn').removeClass('active');
        $(this).closest('.option-items').find('.option-btn').addClass('active');
    })

});

$(window).resize(function () {


});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".header-box").addClass("affix");
    } else {
        $(".header-box").removeClass("affix");
    }
});