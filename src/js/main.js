import '../scss/main.scss';

const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close'
};

const addButton = document.querySelector('.btn__modal-adds'),
      todolist = document.querySelector('.todo_main');

todolist.addEventListener('click', checkTask);
    
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

addButton.addEventListener ('click', ()=>{

    console.log(document.querySelector('.adder-task').value.lenght);
    document.querySelector('.todo_main').innerHTML += `
    <li class="todo_items">
        <div class="text-space">
            <p class="todo_items todo_items-text">${document.querySelector('.adder-task').value}</p>
            <p class="todo_items">${document.querySelector('.adder-date').value}</p>
        </div>
        <div class="btn-space">
            <button class="btn btn-del"></button>
            <button class="btn btn-edit"></button>
            <button class="btn btn-finish"></button>
        </div>
    </li>`;
    
    document.querySelector('.adder-task').value = "";
    document.querySelector('.adder-date').value = "";

    const modal = event.target.closest(`.${CLASS_LIST.MODAL_ACTIVE}`);

    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
})

function checkTask(e){
    const item = e.target;
    if(item.classList[1] === "btn-del"){
        const currentTask = item.parentElement.parentElement;
        currentTask.remove();
    }

    if(item.classList[1] === "btn-finish"){
        const currentTask = item.parentElement.parentElement.childNodes[1];
        console.log(currentTask);
        if(currentTask.classList[0] === "text-space") currentTask.classList.toggle("text-space-finish")
    }   
}