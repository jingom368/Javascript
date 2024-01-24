// JSON 포맷은 자바스크립트에선 제대로 값이 연산이 안됨.
// REST API에서 전송된 JSON 포맷은 "반드시" JSON.parse() 메소드를 사용해서 자바스크립트 객체로 변환
// 직렬화 --> serialization : 자바스크립트에서 AJAX를 통해 자바스크립트 내에서 가공된 데이터를 서버로 전송할 때
//           네트워크를 통해 전송 가능하도록 뭔가 작업을 해줘야 함...
//           자바스크립트에서 자바 객체를 전송 할때는 반드시 직렬화 과정의 일환으로 자바 객체를 JSON으로 변경해야 함...
// 역직렬화 --> deserialization : 자바스크립트에서 직렬화되어 전송 받은 데이터를 자바스크립트 내에서 사용할 수 있게 할려면
//             역직렬화 과정을 거쳐서 자바스크립트 내에서 사용이 가능한 값(리터럴...)으로 변환시켜줘야 함...
const str = `{
    "name": "홍길동",
    "age": 25,
    "married": false,
    "family": { "father": "홍판서", "mother": "춘성"},
    "hobbies": ["독서", "음악감상"],
    "jobs": null
}`; // 이건(JSON 포맷으로 작성) 자바스크립트에 속한 문법상 에러는 아니지만 자바스크립트에서 인식이 안됨.

const obj = JSON.parse(str);
console.log(obj);
console.log(str);

console.log(obj.name, obj.family.father, obj.hobbies["독서"]);
console.log(str.name, str.family.father, );