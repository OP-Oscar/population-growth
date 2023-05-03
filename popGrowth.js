// Population Growth

// Difficulty
// Medium
// Concepts
// Math, Loops

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nbYear should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:

// nbYear(1500, 5, 100, 5000) --> 15

// nbYear(1500000, 2.5, 10000, 2000000) --> 10
// Note: Don’t forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.



// CODE STARTS HERE

//four variables
let pO = 0  // => initial population
let percent = 15 // => percentage population increased YoY
let aug = 0 // => inhabitants leaving/entering 
let p = 0 // => population we are aiming for

// note- aug will be positive or negative (not decimal)
// note- p and p0 are >0


// console.log(percent*.01) // this converts percentage to decimal


//create a function that takes 4 arguments
function nbYear(pO, percent, aug, p){
    //percent conversion
    let per = percent*.01
    //get initial population
    let initialPopulation = pO
    let targetPopulation = 0
    let years = 0
    
    while(targetPopulation <= p){
        targetPopulation = initialPopulation + (initialPopulation*per) + aug
        years +=1
        initialPopulation = targetPopulation
    }
    //function should return n (number) of years needed to get target population
    return years
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))



//version 2 solution
function nbYear2(pO, percent, aug, p){
    let years = 0
    while(pO < p){
        pO = pO + (pO * (percent*.01))+aug
        years++
    }
    return years
}

console.log(nbYear2(1500, 5, 100, 5000))
console.log(nbYear2(1500000, 2.5, 10000, 2000000))