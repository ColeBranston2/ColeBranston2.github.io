const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
var box = document.getElementsByClassName("firstBox");
var scrollDIV = document.getElementsByClassName("scrollDIV")
var scrollField = document.getElementsByClassName("ScrollField");
var bodyScreen = document.getElementsByClassName("body screen");

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop;
    let currentWidth = parseFloat(getComputedStyle(box[0]).width);
    let currentHeight = parseFloat(getComputedStyle(box[0]).height);

    let remInPixels = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    if(top > vh*0.1){
        console.log("It is")

        if (box[0].classList.contains("animated") == false && scrollDIV[0].classList.contains("fade") == false) {
            box[0].classList.add("animated");
            bodyScreen[0].classList.add("becomeApparent")

            setTimeout(() => {
                box[0].classList.add("hidden")
            }, 1000);

            scrollDIV[0].classList.add("moveDown")

            setTimeout(() => {
                bodyScreen[0].classList.remove("hidden")
                bodyScreen[0].classList.remove("transparent")
            }, 1000);

        }
    }
}

function menuSelect(x){
    var buttons = document.getElementsByClassName("navButtons");
    var backButton = document.getElementsByClassName("backButton");
    var backButtonDiv = document.getElementsByClassName("backButtonDiv")
    var text = document.getElementsByClassName("bodyText");
    var row = document.getElementsByClassName("body screen row");

    for (var i = 0; i < buttons.length; i++){
        buttons[i].classList.add("hidden");
    }
    console.log("Menu's Hidden");
    backButton[0].classList.remove("hidden");
    backButtonDiv[0].classList.remove("hidden");
    bodyScreen[0].classList.add("after");

    switch(x){
        case 1:
            text[0].classList.remove("hidden");
            row[1].classList.add("hidden");
            row[0].classList.add("main");
            break;
        case 2:
            text[1].classList.remove("hidden");
            row[1].classList.add("hidden");
            row[0].classList.add("main");
            break;
        case 3:
            text[2].classList.remove("hidden");
            row[0].classList.add("hidden");
            row[1].classList.add("main");
            break;
        case 4:
            text[3].classList.remove("hidden");
            row[0].classList.add("hidden");
            row[1].classList.add("main");
            break;
    }
    
}

function backSelect(){
    var backButton = document.getElementsByClassName("backButton");
    var backButtonDiv = document.getElementsByClassName("backButtonDiv")
    var buttons = document.getElementsByClassName("navButtons");
    var text = document.getElementsByClassName("bodyText");
    var row = document.getElementsByClassName("body screen row");

    backButton[0].classList.add("hidden");
    backButtonDiv[0].classList.add("hidden");
    bodyScreen[0].classList.remove("after");

    for (var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("hidden");
    }

    for (var i = 0; i < text.length; i++){
        if (text[i].classList.contains("hidden") == false){
            text[i].classList.add("hidden");
            continue;
        }
    }

    for (var i = 0; i < row.length; i++){
        if (row[i].classList.contains("hidden")){
            row[i].classList.remove("hidden");
        }
        if (row[i].classList.contains("main")){
            row[i].classList.remove("main");
        }
    }

    console.log("Menu's Revealed");
}