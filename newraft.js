let home = document.getElementById('home');
let science = document.getElementById('science');
let platform = document.getElementById('platform');
let aboutus = document.getElementById('aboutus');
let news = document.getElementById('news');

home.onclick = () => {
    home.style.color = "black";
    science.style.color = "grey";
    platform.style.color = "grey";
    aboutus.style.color = "grey";
    news.style.color = "grey";
}
science.onclick = () => {
    home.style.color = "grey";
    science.style.color = "black";
    platform.style.color = "grey";
    aboutus.style.color = "grey";
    news.style.color = "grey";
}
platform.onclick = () => {
    home.style.color = "grey";
    science.style.color = "grey";
    platform.style.color = "black";
    aboutus.style.color = "grey";
    news.style.color = "grey";
}
aboutus.onclick = () => {
    home.style.color = "grey";
    science.style.color = "grey";
    platform.style.color = "grey";
    aboutus.style.color = "black";
    news.style.color = "grey";
}
news.onclick = () => {
    home.style.color = "grey";
    science.style.color = "grey";
    platform.style.color = "grey";
    aboutus.style.color = "grey";
    news.style.color = "black";
}