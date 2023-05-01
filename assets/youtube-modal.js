const youtubeModalLink = document.querySelector('.product-single__thumbnails-item--youtube a');
const youtubeCloseLink = document.querySelector('.youtube-modal__close');
const modalOverlay = document.querySelector('.youtube-modal__overlay');

youtubeModalLink && youtubeModalLink.addEventListener('click', e => {
    e.preventDefault();

    let videoModal = document.querySelector('.youtube-modal__modal');
    let embedContainer = document.querySelector('.youtube-modal__modal .embed-container');
    let videoCode = e.currentTarget.dataset.videoCode;
    let embedUrl = `https://youtube.com/embed/${videoCode}/`;
    let iframe = document.createElement('iframe');

    iframe.setAttribute('src', embedUrl);
    embedContainer.innerHTML = iframe.outerHTML;
    videoModal.classList.add('youtube-modal__modal--active');
    modalOverlay.classList.add('youtube-modal__overlay--active');
})

youtubeCloseLink && youtubeCloseLink.addEventListener('click', e => {
    let videoModal = document.querySelector('.youtube-modal__modal');
    let iframe = document.querySelector('.youtube-modal__modal iframe');

    closeYTModal(videoModal);
    stopYTIframe(iframe);
    modalOverlay.classList.remove('youtube-modal__overlay--active');
})

modalOverlay && modalOverlay.addEventListener('click', e => {
    let videoModal = document.querySelector('.youtube-modal__modal');
    let iframe = document.querySelector('.youtube-modal__modal iframe');

    closeYTModal(videoModal);
    stopYTIframe(iframe);
    modalOverlay.classList.remove('youtube-modal__overlay--active');
})

function stopYTIframe(iframe) {
    iframe.src = iframe.src;
}

function closeYTModal(modal) {
    modal.classList.remove('youtube-modal__modal--active');
}
