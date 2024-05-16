// Hamburger and close icon 
document.addEventListener('DOMContentLoaded', function () {
    const openIcon = document.getElementById('open');
    const closeIcon = document.getElementById('close');
    const navMenu = document.getElementById('navmenu');

    openIcon.addEventListener('click', function () {
        navMenu.classList.add('active');
        closeIcon.style.display = 'block'; // Shows the close icon
        openIcon.style.display = 'none'; // Hides the hamburger icon
    });

    closeIcon.addEventListener('click', function () {
        navMenu.classList.remove('active');
        closeIcon.style.display = 'none'; // Hides the close icon
        openIcon.style.display = 'block'; // Shows the hamburger icon
    });
});

// Footer 
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollHeight - clientHeight <= scrollTop + 10) { // Adjust this threshold as needed
        footer.style.transform = 'translateY(0)'; // Show the footer
    } else {
        footer.style.transform = 'translateY(100%)'; // Hide the footer
    }
});






