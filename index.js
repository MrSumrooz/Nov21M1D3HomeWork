

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

let postiveNumArray = [2,4,6,8,10]
console.log(postiveNumArray)
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
let SmrProfile = {

     name : "Sumrooz",
     surname : "Zia",
     age : 27 ,
     email : "sumrooz.zia@gmail.com",
     address : "Odanplan 59 Area D H#99 " ,

}

console.log(SmrProfile)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
SmrProfile.hasDrivingLicense = true

console.log(SmrProfile)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
delete SmrProfile.age

console.log(SmrProfile)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let  newProfile = {
    name : "Summer",
    surname : "Raj",
    age : 26 ,
    email : "sum******@gmail.com",
    address : "Stockholm  Area D H#99 " ,

}
console.log(newProfile)

let emailCompare = SmrProfile.email === newProfile.email


console.log(emailCompare)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

  let currentuserSpent = 99
  let spentTotal     = 90 

  if ( currentuserSpent < spentTotal )  {
    console.log("you have to pay for shipping ")
  } else {
    console.log("you have Free shipping ")

  }
  



/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log("----------------------------------------------------------------------------")

let currentuserPurchase =  200


let salePrice = (20 /100) *currentuserPurchase

let isBlessFriday = true



if (isBlessFriday){
console.log(currentuserPurchase-salePrice)
} else{
    console.log(currentuserPurchase)
}



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
 let car0 = {
    brand :"Ford",
    model : "2011",
    licensePlatre : "A128F"


 }
console.log(car0)

 let  car1 = {}
 let  car2 = {}
 let  car3 = {}
 let  car4 = {}
 let  car5 = {}

 Object.assign(car1,car0)
 Object.assign(car2,car0)
 Object.assign(car3,car0)
 Object.assign(car4,car0)
 Object.assign(car5,car0)




 car1.licensePlatre = "F128C"
 car2.licensePlatre = "FC12Ac"
 car3.licensePlatre = "DH127"
 car4.licensePlatre = "LB456"
 car5.licensePlatre = "LH78900"
 


 console.log(car0)
 console.log(car1)
 console.log(car2)
 console.log(car3)
 console.log(car4)
 console.log(car5)



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */


let carForRent = [car0,car1,car3,car4,car5]

console.log(carForRent)


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
// this is for last car remove 
carForRent.pop()
console.log(carForRent)
/* WRITE YOUR ANSWER HERE */
// this is for first car remove 

carForRent.splice(0,1)
console.log(carForRent)



/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("------------------------------------------------------------")
console.log(car0.brand,car0.licensePlatre)
console.log("Car Name :- " + car1.brand + " License Number is " +car1.licensePlatre)
console.log("Car Name :- " + car2.brand + " License Number is " +car2.licensePlatre)
console.log("Car Name :- " + car3.brand + " License Number is " +car3.licensePlatre)
console.log("Car Name :- " + car4.brand + " License Number is " +car4.licensePlatre)
console.log("Car Name :- " + car5.brand + " License Number is " +car5.licensePlatre)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

/* WRITE YOUR ANSWER HERE */
console.log("-------------------------------car for sale array ----------------------------")
let carsForSaleArray = []


carsForSaleArray = {
    carf1: {
        carname :" Ford ka",
        model: 2021,
        licensePlate : "HK12001"

    },
    carf2: {
        carname :" Hondai",
        model: 2020,
        licensePlate : "DH7810"

    },
    carf3: {
        carname :" Ford ka",
        model: 2018,
        licensePlate : "BOB265"

    }
}

console.log(carsForSaleArray)

console.log("-------------------------------Total car for sale array ----------------------------")


let totalcars = [carsForSaleArray,carForRent]

console.log(totalcars)

console.log("-------------------------------Loop  For all car display car  sale array ----------------------------")
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

let Allcars = carsForSaleArray

 for (let i = 0; i < Allcars.length; i++) {
     
     console.log(`car at index ${i} is ${Allcars}`)
 }




