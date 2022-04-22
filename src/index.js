const body = document.body;
const darkMode = document.getElementById('darkMode');
const allIcon = Array.from(document.querySelectorAll('img')).slice(0, 7);

const lm = () => {
    body.classList.remove('darkMode');
    allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('dark', 'light')));
}

const dm = () => {
    body.classList.add('darkMode');
    allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('light', 'dark')));
}

darkMode.addEventListener('click', () => {
    body.className === '' ? dm() : lm();
})