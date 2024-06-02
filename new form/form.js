let right = document.querySelector("#right");
let second = document.querySelector('#second-form');
let one = document.querySelector('#one');
let left = document.querySelector('#left');


let nom = document.querySelector('#nom');
let prenom = document.querySelector('#Prenom');
let cni = document.querySelector('#cni');
// let matriule = document.querySelector('#matricule');
let marque = document.querySelector('#marque');
let modele = document.querySelector('#modele');
let saved = document.querySelector('#saved');







right.addEventListener('click', function() {
    second.style.display = 'block';
    one.style.display = 'none';
})

left.addEventListener('click', function(){
    second.style.display = 'none';
    one.style.display = 'block';
})

saved.addEventListener('click', function(){
    alert(`    Votre Nom Et Prenom c'est: ${nom.value} ${prenom.value}
    Votre Cni: ${cni.value}
    Votre Marque: ${marque.value}
    Votre Modele: ${modele.value}
`)
})