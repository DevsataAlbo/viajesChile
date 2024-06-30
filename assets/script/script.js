
// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Agregar y quitar clases para modificar colores del menu segun el scroll vertical
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('navbar-light', 'bg-info');
    } else {
        navbar.classList.remove('bg-light', 'navbar-light');
        navbar.classList.add('bg-transparent', 'navbar-dark');
    }
});