//start of javascript

//selection of all elements
let shop = document.querySelectorAll('.button-mini-max');

//selection of shop
let filteredShop = document.querySelector('.button-list');

document.querySelector('#input').oninput = () => {
    filter(document.querySelector('#input').value);
}

function filter(criteria) {
    filteredShop.innerHTML = '';
    shop.forEach(e => {


        console.log(e.lastElementChild);

        let raw = [];
        criteria.split('').forEach(e => {
            raw.push(e.toLowerCase());
        })


        if (raw.length == 0) {
            filteredShop.innerHTML = '';
            shop.forEach(e => {
                filteredShop.innerHTML += e.outerHTML;
            })

        }
        let i = 0;
        let verify = 0;


        let comp = [];
        e.firstElementChild.firstElementChild.innerHTML.split('').forEach(e => {
            comp.push(e.toLowerCase());
        })
        let comp2 = [];
        e.firstElementChild.lastElementChild.innerHTML.split('').forEach(e => {
            comp2.push(e.toLowerCase());
        })



        while (i < raw.length) {
            //code
            if (raw[i] == comp[i] || raw[i] == comp2[i]) {
                verify++;
            }
            if (verify == raw.length) {
                filteredShop.innerHTML += e.outerHTML;
            }
            i++;
        }

    })
}

//To count visits

