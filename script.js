// localStorage.setItem('cle', 'valeur');
// localStorage.getItem('cle');
// localStorage.clear()
// JSON.stringifi(objet)
// JSON.parse(string)

let span = document.querySelector('h1 span');
const nom = document.querySelector('#nom');
const form = document.querySelector('body div');
const age = document.querySelector('#age');
const btn = document.querySelector('#btn');
const supprimeloc = document.querySelector('#CLEAR');
console.log(supprimeloc);

// console.log(btn);

btn.onclick = () => {
    document.location.reload();
    form.classList.add('sup');
    const user = {
        nom: nom.value,
        age: age.value
    }
    localStorage.setItem('user', JSON.stringify(user));
}

const saveuser = JSON.parse(localStorage.getItem('user'));
if (saveuser != null) {
    span.textContent = `${saveuser.nom}.\nVous avez ${saveuser.age} ans`;
}

supprimeloc.onclick = () => {
    localStorage.clear();
    form.classList.remove('sup');
}