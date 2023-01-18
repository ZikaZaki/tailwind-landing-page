const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});