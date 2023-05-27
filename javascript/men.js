function home() {
    window.location.href = "home.html";
}
function men() {
    document.location.href = "men.html ";
}
function women() {
    document.location.href = "women.html";
}
function logout() {
    window.location.href = "index.html";
}
function mysize(x) {
    x.style.backgroundColor = "black";
    x.style.color = 'white';
    let c = document.getElementsByClassName('sm');
    for (let i of c) {
        if (i != x) {
            i.style.backgroundColor = 'white';
            i.style.color = 'black';
        }
    }
}

function shirt(im) {
    let img = document.getElementById("main-img");
    img.src = im.src;
}
function tshirt(im) {
    let img = document.getElementById("main-img2");
    img.src = im.src;
}

function pant(im) {
    let img = document.getElementById("main-img3");
    img.src = im.src;
}
function watch(im) {
    let img = document.getElementById("main-img4");
    img.src = im.src;
}
function shoe(im) {
    let img = document.getElementById("main-img5");
    img.src = im.src;
}
function submit() {
    alert("Your item is Ordered");
    return window.location.href = "home.html";
}
function cart() {
    alert("Your Order are added Cart ")
    return window.location.href = "men.html";
}