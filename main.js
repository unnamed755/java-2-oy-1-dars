// Tugmalarni olish
const lightModeButton = document.querySelector('.bos');
const darkModeButton = document.querySelector('.bos1');

// Body elementini olish
const body = document.body;

// Light Mode-ni yoqish
lightModeButton.addEventListener('click', () => {
    body.classList.remove('dark'); // Dark klassini o'chiradi
});

// Dark Mode-ni yoqish
darkModeButton.addEventListener('click', () => {
    body.classList.add('dark'); // Dark klassini qo'shadi
});
