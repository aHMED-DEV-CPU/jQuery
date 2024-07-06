//side-nav
$("#openNav").click(function () {
    $(".side-right").animate({ width: "150px" }, function () {
        $(".side-links").css("display", "block");
    })
})
$("#closeNav").click(function () {
    $(".side-right").animate({ width: "0" }, function () {
        $(".side-links").css("display", "none");
    })
})

$(".side-anchor").click(function (e) {
    let linkId = $(e.target).attr("href");
    let linkPos = $(linkId).offset().top;
    $("html, body").animate({ scrollTop: linkPos }, 1000);

    $(e.target).addClass("active");
    $(".side-anchor").not(e.target).removeClass("active");
});
//scrollspy
$(window).scroll(function () {
    let windowScrolling = $(window).scrollTop()
    for (let i = 0; i < 4; i++) {
        let sideLink = $('[href^="#"]').eq(i).attr("href")
        let linkTop = $(sideLink).offset().top;
        if (windowScrolling >= linkTop - 100) {
            $('[href^="#"]').removeClass("active");
            $('[href^="#"]').eq(i).addClass("active")
        }
    }

});

//slider
$("#slider h3").click(function (e) {
    $(e.target).next().slideToggle()
});
//contact
$("textarea").on("input", function () {
    var textLength = $("textarea").val().length
    if (textLength >= 100) {
        $("#chars").text("your available character finished")
        $("#remaining").removeClass("d-inline-block").addClass("d-none");
    }
    else {
        $("#remaining").removeClass("d-none").addClass("d-inline-block");
        $("#chars").text(100 - textLength);
    }
});
//counter
let futureDate = new Date(2025, 8, 29, 23, 33, 5)
let futureTime = futureDate.getTime()
function counter() {
    let presentDate = new Date()
    let presentTime = presentDate.getTime()
    let timeDiff = futureTime - presentTime
    let min = 60 * 1000
    let hour = min * 60
    let day = hour * 24

    if (futureTime >= presentDate) {
        let daysLeft = Math.floor(timeDiff / day)
        let hoursLeft = Math.floor((timeDiff % day) / hour)
        let minsLeft = Math.floor((timeDiff % hour) / min)
        let secLeft = Math.floor((timeDiff % min) / 1000)
        $("#days").text(daysLeft)
        $("#hours").text(hoursLeft);
        $("#min").text(minsLeft);
        $("#sec").text(secLeft);
    }
    else {
        $("#innerContainer").html('<h2 class=" text-white text-center display-1">time Expired</h2>');
        clearInterval(timer)
    }
}
let timer = setInterval(counter, 1000)



