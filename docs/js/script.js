document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

});