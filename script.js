/* document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        if (navbar.style.display === 'flex' || navbar.style.display === '') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'inline-block';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });
});
 */

/* var typed=new Typed(".auto-type",{
    Strings:["COCOCANE","NATURAL DELIGHT","TROPICAL"],
    typespeed: 150,
    backspeed:150,
    loop: true
}) */

document.querySelectorAll('.box-option [id="box"]').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.box-option [id="box"]').forEach(btn => {
            btn.classList.remove('special');
        });
        box.classList.add('special');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var boxMotto = document.querySelector(".box-motto");
    boxMotto.addEventListener("click", function() {
        var allTextElements = document.querySelectorAll(".box-text > *");
        allTextElements.forEach(function(element) {
            element.style.display = "none";
        });

        var mottoHeading = document.querySelector(".motto-heading");
        var mottoText = document.querySelector(".motto-text");
        mottoHeading.style.display = "block";
        mottoText.style.display = "block";
    });
    var boxMotto = document.querySelector(".box-trade");
    boxMotto.addEventListener("click", function() {
        var allTextElements = document.querySelectorAll(".box-text > *");
        allTextElements.forEach(function(element) {
            element.style.display = "none";
        });

        var mottoHeading = document.querySelector(".trade-heading");
        var mottoText = document.querySelector(".trade-text");
        mottoHeading.style.display = "block";
        mottoText.style.display = "block";
    });
    var boxMotto = document.querySelector(".box-service");
    boxMotto.addEventListener("click", function() {
        var allTextElements = document.querySelectorAll(".box-text > *");
        allTextElements.forEach(function(element) {
            element.style.display = "none";
        });

        var mottoHeading = document.querySelector(".service-heading");
        var mottoText = document.querySelector(".service-text");
        mottoHeading.style.display = "block";
        mottoText.style.display = "block";
    });
    var boxMotto = document.querySelector(".box-infrastructure");
    boxMotto.addEventListener("click", function() {
        var allTextElements = document.querySelectorAll(".box-text > *");
        allTextElements.forEach(function(element) {
            element.style.display = "none";
        });

        var mottoHeading = document.querySelector(".infrastructure-heading");
        var mottoText = document.querySelector(".infrastructure-text");
        mottoHeading.style.display = "block";
        mottoText.style.display = "block";
    });
});

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#about').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#introduction-section').scrollIntoView({behavior: 'smooth'});
    });
    document.querySelector('#service').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#service-section').scrollIntoView({behavior: 'smooth'});
    });
    document.querySelector('#contact').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#footer').scrollIntoView({behavior: 'smooth'});
    });
    document.querySelector('#about-link').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#introduction-section').scrollIntoView({behavior: 'smooth'});
    });
    document.querySelector('#service-link').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#service-section').scrollIntoView({behavior: 'smooth'});
    });
    document.querySelector('#contact-link').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#footer').scrollIntoView({behavior: 'smooth'});
    });
});