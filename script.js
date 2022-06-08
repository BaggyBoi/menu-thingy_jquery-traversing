$(".item").click(function () {
    $(this).css({"backgroundColor":"rgb(100,100,100)"})
    $(this).siblings().css({"backgroundColor":""})
});
$(".item").first().css({"backgroundColor":"rgb(100,100,100)"})