const saveuser = JSON.parse(localStorage.getItem('user'));
let span = document.querySelector('h1 span');
if (saveuser != null) {
    span.textContent = `${saveuser.nom}. Vous avez ${saveuser.age} ans
    et tu es sur la page 2`;
}