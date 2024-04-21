let literal: "hello world"
let pi: "3,1415"
let number:number

literal = 'oi ai' //da erro
pi = number //da erro tbm

let option: "Yes" | "No" | "maybe"
let or: boolean | number

option = 'Yes'

// let planet: "Terra" | "Marte" | "júpiter" 

type Planet = "Terra" | "Marte" | "júpiter"

let planet: Planet

// let homePlanet: Planet = `venus` dá erro
let homePlanet: Planet = `Terra`

function chechPlanet(planet:Planet){
    if(planet === 'Terra'){
        console.log(`Welcome to earth`)
    }
}

// chechPlanet('saturno') da erro
chechPlanet(homePlanet)