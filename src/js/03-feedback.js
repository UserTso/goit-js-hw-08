import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');
const btn = document.querySelector('button')

form.addEventListener('input', throttle(onInputText), 500);
form.addEventListener('submit', onFormSubmit);
const KEY_STORAGE = "feedback-form-state";

let getData = null;

const saveData = {
    email: getData?.email ? getData.email : "",
    message: getData?.message ? getData.message : "",
};


function onInputText(event) {
    saveData[event.target.name] = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(saveData));

    // console.log(saveData);
};

function checkData() {
    getData = JSON.parse(localStorage.getItem(KEY_STORAGE));

    if (getData) {
        if (getData.email) {
            inputForm.value = getData.email;
        }
        if (getData.message) {
            textareaForm.value = getData.message;
        }
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (!saveData.email || !saveData.message) {
        alert('Всі рядки повинні бути заповнені');
        return;
    }
    form.reset();
    localStorage.removeItem(KEY_STORAGE);
    
    console.log(saveData);
}






