document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.download-btn').addEventListener('click', function() {
    alert('Thank you for downloading my resume!');
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
    } else {
        header.style.backgroundColor = '#333';
    }
});