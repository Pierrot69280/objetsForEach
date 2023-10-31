const etudiant1 = {
    name : "Pierre",
    age : 19,
    github : "Pierrot69280",
    platPrefere : "Pizza",
    booleenPrefere : true
}

const etudiant2 = {
    name : "Natan",
    age : 19,
    github : "Natanbinisti",
    platPrefere : "pates à la bolognaise",
    booleenPrefere : false
}

const etudiant3 = {
    name : "Mey",
    age : 17,
    github : "MeyDetour",
    platPrefere : "Boeuf bourguignon",
    booleenPrefere : false
}

const etudiant4 = {
    name : "Raphaël",
    age : 18,
    github : "raphaelmoynat",
    platPrefere : "Risotto",
    booleenPrefere : true
}

const etudiant5 = {
    name : "Malakaya",
    age : 21,
    github : "MalakayaLvg",
    platPrefere : "Pates carbo",
    booleenPrefere : true
}


const etudiants = [etudiant1, etudiant2, etudiant3, etudiant4, etudiant5]

const card = document.querySelector('.boiteEtudiants')

const divEtudiants = document.querySelector('.etudiants')
function makeCardFromStudent (student) {

    let cardTemplate =
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Âge : ${student.age}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Plât : ${student.platPrefere}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Booleen : ${student.booleenPrefere}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Github : ${student.github}</h6>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
         </div>`
    return cardTemplate
}

etudiants.forEach((etudiant)=>{
    divEtudiants.innerHTML += makeCardFromStudent(etudiant)
})


// API :

const h3 = document.querySelector('.chuck')
const button = document.querySelector('.button')


async function blagueChuck()  {
   return await fetch("https://api.chucknorris.io/jokes/random")
        .then(reponseEnJson=> reponseEnJson.json())
        .then((reponsseDeserialisee) => {
           // console.log(reponsseDeserialisee.value)
           // h3.innerHTML = reponsseDeserialisee.value
            return reponsseDeserialisee
        })
}


button.addEventListener("click", () => {
    blagueChuck().then(chuckElement => {
        console.log(chuckElement.value)
        h3.innerHTML = chuckElement.value
    })
})








