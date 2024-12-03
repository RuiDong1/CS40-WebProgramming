let menuIcon = document.getElementById("menuIcon");
let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.classList.toggle("active");
}

// function toggleMenu(){
//     if(navLinks.style.display === "none"){
//         navLinks.style.display = "flex";
//     } else {
//         navLinks.style.display = "none";
//     }
// }

menuIcon.addEventListener("click", showMenu);

let date = new Date();
let dayOfWeek = date.getDay();

let dateText = document.getElementById("dayOfWeek");
let dateImg = document.getElementById("calendarPic");
if(dayOfWeek === 0){
    dateText.textContent = "Sunday";
    dateImg.src = "images/week-day-sunday-icon.svg";
}
else if (dayOfWeek === 1){
    dateText.textContent = "Monday";
    dateImg.src = "images/week-day-monday-icon.svg";
}
else if (dayOfWeek === 2){
    dateText.textContent = "Tuesday";
    dateImg.src = "images/week-day-tuesday-icon.svg";
}
else if (dayOfWeek === 3){
    dateText.textContent = "Wedneday";
    dateImg.src = "images/week-day-wednesday-icon.svg";
}
else if (dayOfWeek === 4){
    dateText.textContent = "Thursday";
    dateImg.src = "images/week-day-thursday-icon.svg";
}
else if (dayOfWeek === 5){
    dateText.textContent = "Friday";
    dateImg.src = "images/week-day-friday-icon.svg";
}
else{
    dateText.textContent = "Saturday";
    dateImg.src = "images/week-day-saturday-icon.svg";
}

let body = document.querySelector("body");
function changeBackgroundColor(){
    if(body.style.backgroundColor === "lightsteelblue"){
        body.style.backgroundColor = "lightgoldenrodyellow"; 
    }
    else{
        body.style.backgroundColor = "lightsteelblue";
    }
}

let quote = document.querySelector("#quote");
let num = 0;
function changeQuote(){
    if(num === 0){
        quote.textContent = "“Amateurs hack systems; professionals hack people.” – Bruce Schneier";
    }
    else if(num === 2){
        quote.textContent = "“It takes 20 years to build a reputation and a few minutes of cyber-incident to ruin it.” – Stephane Nappo";
    }
    else if(num === 3){
        quote.textContent = "“The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had.”– Eric Schmidt";
    }
    else if(num === 4){
        quote.textContent = "“One of the main cyber-risks is to think they don’t exist. The other is to try to treat all potential risks.” – Stephane Nappo";
    }
    else{
        quote.textContent = "“Privacy is not an option, and it shouldn’t be the price we accept for just getting on the Internet.” – Gary Kovacs";
    }
    num++;
    if(num > 5){
        num=0;
    }
}


let colorButton = document.getElementById("backgroundColorButton");
colorButton.addEventListener("click", changeBackgroundColor);

let quoteButton = document.getElementById("quoteButton");
quoteButton.addEventListener("click", changeQuote);