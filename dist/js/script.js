// Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// membuat event function ketika hamburger di klik
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// FIXED NAVBAR
// buat function window ketika di scroll
window.onscroll = function(){
    // buat variable untuk mengambil nilai dari window
    const header = document.querySelector('header');
    // buat variabel untuk header berada di atas halaman 
    const fixedNav = header.offsetTop;

    // jika ketika scroll kebawah, maka panggil variabel untuk menetapkan navbar berada atas halaman
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        // maka ketika tidak discroll kebawah, maka akan menetap diatas
    }else{
        header.classList.remove('navbar-fixed');
    }
}