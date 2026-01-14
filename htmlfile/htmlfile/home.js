document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section1, .section2, .section3, .section4, .section5, .section6');
    const images = document.querySelectorAll('.card-details img');
    const texts = document.querySelectorAll('h3, p');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => observer.observe(section));
    images.forEach(image => observer.observe(image));
    texts.forEach(text => observer.observe(text));
});