const petsData = [
  {
    name: 'Purrsloud',
    species: 'Cat',
    favFoods: ['wet food', 'dry food', '<strong>any</strong> food'],
    birthYear: 2023,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    name: 'Barksalot',
    species: 'Dog',
    birthYear: 2022,
    photo: 'https://learnwebcode.github.io/json-example/images/dog-1.jpg',
  },
  {
    name: 'Meowsalot',
    species: 'Cat',
    favFoods: ['tuna', 'catnip', 'celery'],
    birthYear: 2012,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-1.jpg',
  },
]

function age(birthYear) {
    let calcAge = new Date().getFullYear() - birthYear
    if (calcAge == 1) {
        return " 1 year old "
    } else if (calcAge == 0 ) {
        return " baby "
    }else {
        return `${calcAge} years old `
    }
}

function foods(foods) {
    return `<h4><strong>Favourite Foods: 
    </strong></h4>
        <ul class="foods-list">
            ${foods.map(food => `<li>${food}</li>`).join('')}
        </ul>`
}

function petTemplate(pet) {
        return `<div class="animal">
        <img class="pet-photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name} 
            <span class="species">(${pet.species})</span>
        </h2>
        
        <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
        ${pet.favFoods ?  foods(pet.favFoods) : ''}
    </div>`
}




document.getElementById('app').innerHTML = `
    <h1 class="app-title">Pets <span class="species">( ${petsData.length} results )</span></h1>
    
    ${petsData.map(petTemplate).join('')}

    <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>`
