// home.js
document.getElementById('nav-home').addEventListener('click', () => {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('home-page').style.display = 'flex';
});