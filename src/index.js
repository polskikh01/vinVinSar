const body = document.body;
const darkMode = document.getElementById('darkMode');
const allIcon = Array.from(document.querySelectorAll('img')).slice(0, 8);
let theme = body.className === null ? '' : body.className;
let setTheme;

const iconTheme = () => {
    body.className === '' ? allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('dark', 'light'))) : allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('light', 'dark')));
}

localStorage.setItem('theme', '')

const lm = () => {
    body.classList.remove('darkMode');
    allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('dark', 'light')));
    theme = body.className;
    localStorage.setItem('theme', theme);
}

const dm = () => {
    body.classList.add('darkMode');
    allIcon.forEach(i => i.setAttribute('src', i.currentSrc.replace('light', 'dark')));
    theme = body.className;
    localStorage.setItem('theme', theme);
}

darkMode.addEventListener('click', () => {
    body.className === '' ? dm() : lm();
})

setTheme = localStorage.getItem('theme');
body.classList.add(String(setTheme));

iconTheme();