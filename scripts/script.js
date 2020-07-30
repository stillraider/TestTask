let FlexJackdaw = $(".flex-block__jackdaw");
let FlexBlock = $(".flex-block__check-mark");
let Label = $(".label");
let LabelText = $(".label__main-text");
let index = 0;

// Label.on("click", function () {
//     index = Label.index(this);
//     LabelText.css("color", "#797ea3");
//     LabelText.eq(index).css("color", "white");
// })

FlexJackdaw.on("click", function () {
    FlexBlock.toggleClass("check-mark");
})

$(function(){
    $("#phone").mask("+7 (999) 999-9999");
});












function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});