// 배열 구조 분해
let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1, user2, user3)

// 배열 구조 분해
let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split('-');
console.log(user4, user5, user6)

// 배열 구조 분해 : 기본값
let [a,b,c] = [1,2];
console.log(a, b, c);
let [d=4, e=5, f=6] = [1,2];
console.log(d, e, f);

// 배열 구조 분해 : 일부 반환값 무시
let [user7, ,user8,] = ['Mike','Tom','Jane','Tony'];
console.log(user7, user8);

// 배열 구조 분해 : 바꿔치기
let g=1, h=2;
[g,h] = [h,g]
console.log(g,h);

// 객체 구조 분해
let user = {name:'Mike', age:30};
let{age,name} = user;
console.log(name,age);

// 객체 구조 분해 : 새로운 변수 이름으로 할당
let user_1 = {name1:'Mike', age1:30};
let {name1:userName, age1:userAge} = user_1;
console.log(userName,userAge);

// 객체 구조 분해 : 기본값
let user_2 = {
    name2: 'Jane',
    age2: 18,
    gender2 : 'female'
};

let {name2, age2, gender2 = 'male'} = user_2
console.log(gender2);
