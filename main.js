let storeArray = [];

let elStoretitle = document.getElementById("store title");
console.log(elStoretitle)

let StoreOne = {
    location: "Gaithersburg",
    name: "Cookie Craze",
    employees: 8,
    hours: "10am- 7pm",
    type: "infused",
    inventory: 150,
};

let StoreTwo = {
    location: "Germantown",
    name: "Craver's Cookie Class",
    employees: 10,
    hours: "7am- 5pm",
    type: "variety",
    inventory: 300,
};

let StoreThree = {
    location: "Annapolis",
    name: "Crustacean Cookies",
    employees: 12,
    hours: "7am- 7pm",
    type: "crustacean",
    inventory: 200,
};

console.log(StoreOne.location);
console.log(StoreOne.type);
console.log(StoreTwo.location);
console.log(StoreTwo.type);
console.log(StoreOne);
console.log(StoreTwo);
console.log(StoreThree);

storeArray.push(StoreOne, StoreTwo, StoreThree);

console.log(storeArray[2]);
