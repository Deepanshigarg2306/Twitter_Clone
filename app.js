let audience_btn = document.getElementById('audience_btn');
let show_bx_1 = document.getElementsByClassName('show_bx_1')[0];
audience_btn.addEventListener('click', () => {
    show_bx_1.classList.toggle('show_bx_active');

})

function auto_grow(e) {
    e.style.height = "5px";
    e.style.height = (e.scrollHeight) + "px";
}

const audience_check_off = () => {
    Array.from(document.getElementsByClassName('check_audience_i')).forEach((i) => {
        i.style.color = "#fff";

    })
}
Array.from(document.getElementsByClassName('check_audience')).forEach((i, a) => {
    i.addEventListener('click', () => {
        audience_check_off();
        document.getElementsByClassName('check_audience_i')[a].style.color = "#1ca1f1";
        if (a === 0) {
            audience_btn.innerHTML = 'Everyone <i class="fas fa-angle-down">';
            audience_btn.style.color = "#1ca1f1";
            audience_btn.style.borderColor = "#1ca1f1";
        } else {
            audience_btn.innerHTML = 'Twitter Circle <i class="fas fa-angle-down">';
            audience_btn.style.color = "green";
            audience_btn.style.borderColor = "green";
        }
        show_bx_1.classList.toggle('show_bx_active');

    })
})

let select_reply_btn = document.getElementsByClassName('select_reply_btn')[0];
let who_can_reply_bx = document.getElementsByClassName('who_can_reply_bx')[0];

select_reply_btn.addEventListener('click', ()=> {
    who_can_reply_bx.classList.toggle('show_bx_active');
})
const who_can_reply_off = () => {
    Array.from(document.getElementsByClassName('check_audience_i')).forEach((i) => {
        i.style.color = "#fff";
    })
}

Array.from(document.getElementsByClassName('check_audience')).forEach((i, a) => {
    i.addEventListener('click', () => {
        audience_check_off();
        document.getElementsByClassName('check_audience_i')[a].style.color = "#1ca1f1";
        if (a === 0) {
            audience_btn.innerHTML = 'Everyone <i class="fas fa-angle-down">';
            audience_btn.style.color = "#1ca1f1";
            audience_btn.style.borderColor = "#1ca1f1";
        } else {
            audience_btn.innerHTML = 'Twitter Circle <i class="fas fa-angle-down">';
            audience_btn.style.color = "green";
            audience_btn.style.borderColor = "green";
        }
        show_bx_1.classList.toggle('show_bx_active');

    })
})