
$(window).on('load', function () {
    // 获取当前页面的完整URL
    var currentUrl = window.location.href;
    // 提取路径部分（去除域名等信息，只保留相对路径）
    var currentPath = window.location.pathname;
    // 获取slide1元素
    var slide1 = $('#nav.slide1');
    // 获取所有导航栏链接元素
    var navLinks = $('#nav a');
    navLinks.each(function () {
        var linkHref = $(this).attr('href');
        // 对比链接的href属性和当前页面路径（处理可能的相对路径差异等情况）
        if (linkHref.endsWith(currentPath) || (linkHref + '/').endsWith(currentPath + '/')) {
            var button = $(this).parent();
            var buttonOffset = button.offset();
            slide1.css({
                'left': buttonOffset.left,
                'width': button.outerWidth()
            });
            return false; // 找到匹配项后退出循环，类似纯JavaScript中的break
        }
    });
});

$("#nav a").on("click", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();

    // $("#nav .slide1").css({ opacity: 1, left: +position.left, width: width });
    
});
$("#nav a").on("mouseover", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#nav .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
});
$("#nav a").on("mouseout", function () {
    $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
});
var currentWidth = $("#nav li:nth-of-type(3) a").parent("li").width();
var current = $("li:nth-of-type(3) a").position();
$("#nav .slide1").css({ left: +current.left, width: currentWidth });