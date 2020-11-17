// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let text = document.getElementById('text');
// text.oninput =(ev)=>{
//     console.log(ev.target.value);
//     localStorage.setItem('id', ev.target.value)
// }
// text.value = localStorage.getItem('id')

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let in1 = document.getElementById('in1');
// let in2 = document.getElementById('in2');
// let text = document.getElementById('textarea');
//
// function save() {
//     in1.oninput = (ev) => {
//         localStorage.setItem('in1', ev.target.value);
//     }
//     in2.oninput = (ev) => {
//         localStorage.setItem('in2', ev.target.value);
//     }
//
//     function check() {
//         let check = document.getElementById('check');
//         check.addEventListener('click', function () {
//             localStorage.setItem('onChecked', 'true');
//         });
//         if (localStorage.getItem('onChecked') === 'true') {
//             check.checked = true;
//         }
//     }
// check();
//
//     text.oninput=(ev)=>{
//         localStorage.setItem('text',ev.target.value);
//     }
//     in1.value = localStorage.getItem('in1');
//     in2.value = localStorage.getItem('in2');
//
//     text.value = localStorage.getItem('text')
// }
// save();

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let textarea = document.getElementById('textarea');
let save = document.getElementById('save');
let next = document.getElementById('next');
let back = document.getElementById('back');


save.onclick=()=>{
    localStorage.setItem(localStorage.length+1, textarea.value)
}
back.onclick=()=> {
    if (onclick === true) {
        textarea.value = localStorage.getItem(localStorage.length - 1)
    }
}
