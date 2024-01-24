const user = {
    name:'Mike',
    age: 30,
    gender: 'male'
}

const cloneUser = user; // 깊은 복사(Deep Copy)

cloneUser.name = 'Tom';

console.log('user의 name :' + user.name);
console.log('user의 name :' + cloneUser.name);

const newUser = Object.assign({}, user); // 얕은 복사(Shallow copy) : 다른 객체

newUser.name = 'Kate';
console.log('user의 name :' + user.name);
console.log('user의 name :' + newUser.name);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const arr =
[
    ["name","mike"],
    ["age",30],
    ["gender","male"]
]

console.log(Object.fromEntries(arr));