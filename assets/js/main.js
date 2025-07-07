const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const langToggleEventHandler = () => {
    const target = get('.lang_arrow');
    target.addEventListener('click', () => {
        const langBox = get('.lang');
        langBox.classList.toggle('on')
    })
}

const playBgVideo = () => {
    window.addEventListener('scroll', () => {
        const section = get("#section3")
        const video = get("#player")
        const rect = section.getBoundingClientRect();

        if (rect.top < 680) {
            video.muted = false;
            video.play();
        } else {
            video.muted = true;
            video.pause();
        }
    });
}

const familySiteToggle = () => {
    const tit = get('#footer .inner .select_box .tit');
    const selectBox = get('#footer .inner .select_box');
    tit.addEventListener('click', () => {
        tit.classList.toggle('on');
        selectBox.classList.toggle('on');
    })
}
const init = () => {
    langToggleEventHandler();
    playBgVideo();
    familySiteToggle();
};

init();
