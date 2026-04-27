// 🔒 PASSWORD
function checkPass() {
    let p = document.getElementById("pass").value;
    if (p === "1234") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        typeText();
    } else {
        alert("Wrong Password!");
    }
}

// ⌨️ TYPING EFFECT
let text = "Today is someone's special day... And it's YOU 💖";
let i = 0;
function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 50);
    }
}

// 💌 NOTE TYPING
let note = "You are one of the most amazing people in my life...";
let j = 0;
if (document.getElementById("noteText")) {
    function typeNote() {
        if (j < note.length) {
            document.getElementById("noteText").innerHTML += note.charAt(j);
            j++;
            setTimeout(typeNote, 50);
        }
    }
    typeNote();
}

// ➡️ NAVIGATION
function nextPage() {
    let pages = ["page2.html","page3.html","page4.html","page5.html"];
    let current = window.location.pathname.split("/").pop();
    let index = pages.indexOf(current);
    window.location.href = pages[index + 1];
}

// 🎁 GIFT
function openGift() {
    document.getElementById("gift").style.display = "none";
    document.getElementById("finalMsg").style.display = "block";
    document.getElementById("finalText").style.display = "block";
}

// 🎆 FIREWORKS
let canvas = document.getElementById("fireworks");
if (canvas) {
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let i=0;i<50;i++){
            ctx.beginPath();
            ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height,2,0,6.28);
            ctx.fillStyle="yellow";
            ctx.fill();
        }
    },300);
}