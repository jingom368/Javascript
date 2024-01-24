// 나머지 매개변수(Rest Parameter)
const add = (...numbers) => {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

add(1,2,3)
add(1,2,3,4,5,6,7,8,9,10);

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike',30,'html','css');
const user2 = new User('Tom',20,'JS','React');
const user3 = new User('Mike',23,'English');

console.log(user1, user2, user3);

// 전개 구문(Spread Syntax)
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [0, ...arr1, ...arr2, 7, 8, 9]; // 얕은 복사
console.log(result);

let user = {name:'Mike'}
let mike = {...user,age:30}
console.log(mike);

let member = {name:'Mike'}
let info = {age:30}
let fe = ["JS","react"]
let lang = ["Korean", "English"]

member = {
    ...member,
    ...info,
    skills : [ ...fe, ...lang],
}
console.log(member);