// 23.10.17(수)

const locationOne_p = "korea";
const locationTwo_p = "korea";

console.log(locationOne_p === locationTwo_p);

//  리터럴 객체
const locationOne_o = {
    country:"korea"
}

const locationTwo_o = {
    country:"korea"
}

console.log(locationOne_o === locationTwo_o);



// 23.10.17(수)

console.log(a); // undefined
var a;
a = 3;

// 에러
/* console.log(b);
let b;
b = 3; */ 

// 에러
/* const a = "Hello";
a= "Hi";
console.log(a) */

const name = {
    eng : 'jingom'  
};

console.log(name.eng);

name.eng = 'cat';

console.log(name.eng);

var a = 3;

function sum() {
    a = 5;
}

console.log(a);
console.log('');



// 23.10.17(수)

// 템플릿 스트링

const name2 = '김민수'
const age = 30;

// Non-Blocking I/O, Single Thread, 객체지향, 프로토타입 언어...

/* 
프로토타입 언어(Prototype-based programming language)는 프로그래밍 언어의 한 유형으로, 
객체지향 프로그래밍의 한 방식입니다. 이러한 언어에서 객체는 다른 객체를 기반으로 만들어지며, 
이러한 객체들 간에 상속과 변형이 발생합니다.
프로토타입 언어의 핵심 개념은 "프로토타입"이라는 객체의 원형입니다. 
프로토타입은 다른 객체로부터 상속된 속성과 메서드를 가지고 있습니다. 
객체가 다른 객체의 프로토타입을 가리키고 이를 상속하면 해당 객체는 프로토타입의 속성과 메서드를 사용할 수 있습니다.
프로토타입 언어에서 새로운 객체를 만들 때, 이미 존재하는 다른 객체를 프로토타입으로 선택하여 그 속성과 메서드를 상속받습니다. 
이를 통해 코드의 재사용이 간편해지고 유연한 프로그래밍이 가능해집니다.
JavaScript는 대표적인 프로토타입 언어로, 객체지향 프로그래밍을 프로토타입 기반으로 지원합니다. 
객체의 생성과 상속은 프로토타입 체이닝을 통해 이루어집니다.
다른 프로토타입 기반 언어로는 Self, Lua 등이 있습니다.
 */

// console.log('이름은 ' + name + '이고 나이는 ' + age + '입니다.');
console.log(`이름은 ${name2}이고, 나이는 ${age}입니다.`);
console.log('');



function mul(num) {
    return num*num;
}

function mulNum(func, number) {
    return func(number);
}

console.log(mulNum(mul, 3)); //9

function mulNum(func, number) {
    return func(number);
}

console.log(mulNum(mul, 4)); // 16

// p. 198
const person = {
    name: "장진웅",
    birthday: "20000429",
    pld: "1234567",
    sayName: function() {
        return this.name;
    }
};

console.log(person.sayName()); // 장진웅

let b = 'age';

const user = {
    name : 'mike',
    [b] : 30
}

const user01 = {
    [1 + 4] : 5,
    ["안녕"+"하세요"] : "Hello"
}

console.log(user);
console.log(user01);
console.log(user01['5']);
