/*
    select elements
*/
const toggle_button = document.querySelector('[data_toggle]');
const counter = document.querySelector('[data_counter]');
const input_element = document.querySelector('[data_input]');

let mode = 'characters';

/*
    functions
*/

/*  
    events
*/
// 
toggle_button.addEventListener('click', () => {
    if (mode === 'characters') {
        mode = 'words';
        toggle_button.textContent = 'Contar caracteres';
    }
    else {
        mode = 'characters';
        toggle_button.textContent = 'Contar palavras';
    };

    input_element.dispatchEvent(new Event('input'));
});

// 
input_element.addEventListener('input', () => {
    let count = 0;

    if (mode === 'characters') {
        count = input_element.value.length;
        counter.textContent = `${count} caractere(s)`;
    }
    else {
        const words = input_element.value.trim().split(/\s+/);
        count = input_element.value.trim() === '' ? 0 : words.length;
        counter.textContent = `${count} palavras(s)`;
    };
});