let hidden = false;
let text;
let speed = 30;
let cursorPosition = 0;
let currentlyWriting = null;
let tagOpen = false;
let loop;
let flag;

/**
 * 
 * @param {string} page name of the page that is selected
 */
function typewriter(page) {

    console.log(currentlyWriting);

    if (currentlyWriting == true) {
        console.log("clear!!");
        flag = false;
    }

    switch (page) {
        case 'home':
            text = "let welcomeMessage = {æ  title: 'Hello World',æ  message: 'Welcome to my webpage!'æ};";
            break;

        case 'about':
            text = "let me = {æ  name: 'Christian Marker',æ  age: 23,æ  place: 'Oslo',æ  url: 'cmarker.no',æ  " +
                "study: {æ    title: 'Programming',æ    subtitle: 'Computer programming',æ    school: 'Westerdals Oslo ACT',æ    type: 'Bachelor',æ    mainCourses: ['Java', 'C#',æ      'webDev', 'JavaScript']æ  }æ};";
            break;

        case 'skills':
            text = "let skills = [æ  {name: 'Java', value: 7},æ  {name: 'JavaScript', value: 5},æ  {name: 'C#', value: 2}æ];";
            break;

        case 'projects':
            text = "let projects = {};";
            break;

        default:
            console.log("ERROR!!");
            break;
    }

    document.getElementById("textField").innerHTML = "";

    let textElements = text.split("");

    for (let i = 0; i < textElements.length; i++) {
        appendText(i, textElements);
    }
}

async function appendText(index, text) {

    if (index < text.length - 1) {
        currentlyWriting = true;
    }

    loop = setTimeout(() => {

        if (text[index] === "æ") {
            document.getElementById("textField").innerHTML += "<br>";

        } else if (text[index] === " ") {
            document.getElementById("textField").innerHTML += "&nbsp;";

        } else {
            document.getElementById("textField").innerHTML += text[index];
        }

        if (index == text.length - 1) {
            currentlyWriting = false;
            flag = false;
        }
    }, (index * speed));
}

function showDiv() {
    "use strict";
    if ((!hidden)) {
        //Appear
        hidden = true;
        document.getElementById('navBar').style.left = "0px";
        document.getElementById('menuIcon').style.left = "121px";
    } else {
        //Disappear
        document.getElementById('navBar').style.left = "-103px";
        document.getElementById('menuIcon').style.left = "20px";
        hidden = false;
    }
}

function select(page) {
    switch (page) {
        case 'home':
            resizeTextWindow('50vh', '50vw');
            document.getElementById("windowTitle").innerHTML = "Home"
            typewriter("home");
            showDiv()
            break;

        case 'about':
            resizeTextWindow('70vh', '70vw');
            document.getElementById("windowTitle").innerHTML = "About"
            typewriter("about");
            showDiv()
            break;

        case 'skills':
            resizeTextWindow('70vh', '70vw');
            document.getElementById("windowTitle").innerHTML = "Skills"
            typewriter("skills");
            showDiv()
            break;

        case 'projects':
            resizeTextWindow('70vh', '70vw');
            document.getElementById("windowTitle").innerHTML = "Projects"
            typewriter("projects");
            showDiv()
            break;

        default:
            break;
    }
}

function resizeTextWindow(height, width) {
    document.getElementById('window').style.height = height;
    document.getElementById('window').style.width = width;
}