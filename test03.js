function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
        
    }
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 30);
let user3 = new User('Tom', 30);
let user4 = new User('Man', 40);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

user4.sayName();

let a = 'Hello';
