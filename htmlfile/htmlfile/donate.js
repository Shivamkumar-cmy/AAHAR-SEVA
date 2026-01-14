document.querySelectorAll('.fq h3').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.nextElementSibling.style.opacity = '1';
        this.nextElementSibling.style.maxHeight = '200px'; // Adjust as needed
        this.querySelector('.plus').style.transform = 'rotate(45deg)';
    });
    item.addEventListener('mouseout', function() {
        this.nextElementSibling.style.opacity = '0';
        this.nextElementSibling.style.maxHeight = '0';
        this.querySelector('.plus').style.transform = 'rotate(0deg)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
const s = document.querySelectorAll('.section1, .section2, .Section3, .section4, .section5, .section6');
const i = document.querySelectorAll('.card-details img');
const h = document.querySelectorAll('h2, h3');
const p = document.querySelectorAll('p');

function hL() {
s.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('show');
        section.classList.remove('hide');
    } else {
        section.classList.remove('show');
        section.classList.add('hide');
    }
});

i.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        image.classList.add('show');
        image.classList.remove('hide');
    } else {
        image.classList.remove('show');
        image.classList.add('hide');
    }
});

h.forEach(heading => {
    const rect = heading.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        heading.classList.add('show');
        heading.classList.remove('hide');
    } else {
        heading.classList.remove('show');
        heading.classList.add('hide');
    }
});

p.forEach(paragraph => {
    const rect = paragraph.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        paragraph.classList.add('show');
        paragraph.classList.remove('hide');
    } else {
        paragraph.classList.remove('show');
        paragraph.classList.add('hide');
    }
});
}

window.addEventListener('scroll', hL);

hL();
});