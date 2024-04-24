let menu = document.getElementById('navbar');
let hamburgerMenu = document.getElementById('hamburger-menu');
let menuCloseBtn = document.getElementById('navbar-close-btn');

hamburgerMenu.onclick = () => {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 
    if (screenWidth <= 900){
        menu.style.display = 'block';
        hamburgerMenu.style.display = 'none';
        menuCloseBtn.classList.add('active');
    }
};

menuCloseBtn.onclick = () => {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 
    if (screenWidth <= 900){
        menu.style.display = 'none';
        hamburgerMenu.style.display = 'block';
        menuCloseBtn.classList.remove('active');
    }
   
};

let user = document.getElementById('profile');
let profileBtn = document.getElementById('profile-dropdown');
let profileCloseBtn = document.getElementById('profile-close-btn');

profileBtn.onclick = () => {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 900) {
        user.style.display = 'block';
        profileBtn.style.display = 'none';
        profileCloseBtn.classList.add('active');
    }
};

profileCloseBtn.onclick = () => {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 
    if (screenWidth <= 900){
    user.style.display = 'none';
    profileBtn.style.display = 'block';
    profileCloseBtn.classList.remove('active');
}
};

// Add a resize event listener to handle changes in screen size
window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // If the screen size is greater than 900 pixels, make sure both menus are hidden
    if (screenWidth > 900) {
        menu.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
        menuCloseBtn.classList.remove('active');

        user.style.display = 'flex';
        profileBtn.style.display = 'none';
        profileCloseBtn.classList.remove('active');
    }

    if (screenWidth <= 900) {
        menu.style.display = 'none';
        hamburgerMenu.style.display = 'block';
        menuCloseBtn.classList.remove('active');

        user.style.display = 'none';
        profileBtn.style.display = 'block';
        profileCloseBtn.classList.remove('active');
    }
});
