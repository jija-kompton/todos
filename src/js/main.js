import '../scss/main.scss';

const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close'
};

document.addEventListener('click', (event) =>{

    if (
        event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
            event.preventDefault();

            const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
            const modal = document.querySelector('.modal');

            modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
        }
        
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
        (event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE))
    ) {
        event.preventDefault();

        const modal = event.target.closest(`.${CLASS_LIST.MODAL_ACTIVE}`);

        modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    }
});