//Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctors = [
    {
    name: "Amanda Luong",
    speciality: "women's health",
    address: "51 W. 51st Street, New York, NY"
}
]

const createDoctor = (name, speciality, address) => {
    return {
        name: name,
        speciality: speciality,
        address: address
    }
}

const newDoctor = createDoctor("Genevieve Brown", "Gynecology", "Nashville, TN")


console.log("new doctor", newDoctor)

doctors.push(newDoctor);
console.log("My doctors", doctors)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels




const createPets = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const BowWowKennels = []

const sadie = createPets("Sadie", "Calico Cat")
const chloe = createPets("Chloe", "Cocker Spaniel")
const biscuit = createPets("Biscuit", "Tabby Cat")

BowWowKennels.push(sadie, chloe, biscuit)

console.table("Leigh's pets", BowWowKennels)

// Practice: Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.

// Create an array for each of these record labels.
let jumpStop = []
let chatten = []
let polar = []

console.log(jumpStop, chatten, polar);

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        genre: "Bluegrass",
        age: age
    }
}

console.log(createBluegrassArtist);

const createRapArtist = (name, age) => {
    return {
        name: name,
        genre: "Rap",
        age: age
    }
}

const createFunkArtist = (name, age) => {
    return {
        name: name,
        genre: "Funk",
        age: age
    }
}

const createPopArtist = (name, age) => {
    return {
        name: name,
        genre: "Pop",
        age: age
    }
}

const createCountryArtist = (name, age) => {
    return {
        name: name,
        genre: "Country",
        age: age
    }
}

console.log(createCountryArtist.name.name);


//Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const bruceCountry = createCountryArtist("Bruce Atikins", 23)
const jensenPop = createPopArtist("Jensen Brown", 20)
const dreFunk = createFunkArtist("Dre Funkz", 25)
const dustaRap = createRapArtist("Dusta Grimes", 25)
const bartBluegrass = createBluegrassArtist("Bartholemew Danielson", 23)
const aviCountry = createCountryArtist("Avilee Dallas", 19)
const austinPop = createPopArtist("Austin Kinkaid", 22)
const loyonceRap = createRapArtist("Loyonce Branis", 27)

console.log(bruceCountry)

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old