/* 1. 템플릿 리터럴에서 변수를 문자열에 삽입하기 위해 사용되는 문법은 무엇인가요?
    ${}
*/

// 2. 아래 코드의 출력 결과는?
    let name = 'Gyejin';
    console.log(`Hello, ${name}!`);     // Hello, Gyejin!

/* 3. 템플릿 리터럴을 사용하여 여러 줄의 문자열을 어떻게 작성할 수 있나요?
    백틱(`)을 사용하여 문자열을 감싸고, 줄바꿈을 포함할 수 있다.
*/

// 4. 배열 디스트럭처링을 사용하여 변수 first와 second에 [10, 20]을 할당하는 코드를 작성하세요.
    const [first, second] = [10, 20];

    console.log(first);     // 10
    console.log(second);    // 20

// 5. 객체 티스트럭처링을 사용하여 객체의 name과 age 속성을 변수로 추출하는 코드를 작성하세요.
    const person = { name1: 'Gyejin', age: 28 };
    const { name1, age } = person;

    console.log(name1); // Gyejin
    console.log(age);   // 28

// 6. 디스트럭처링 할당에서 기본값을 설정할 수 있나요? 
//    예
    const [a1, b1 = 20] = [10];
    console.log("a1: " + a1);
    console.log("b1: " + b1);

// 7. 스프레드 연산자를 사용하여 두 배열 [1, 2]와 [3, 4]를 결합하는 코드를 작성하세요.
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1,...arr2];

    console.log(combined);  // [ 1, 2, 3, 4 ]

/* 8. 스프레드 연산자를 사용하면 배열을 깊은 복사할 수 있다.
    아니오 ; 스프레드 연산자는 얕은 복사(shallow copy)만 수행
        객체안에 중첩된 객체가 있을 경우, 원본 객체와 참조를 공유하게됨.
    중첩된 객체를 복사할 때 -> 깊은 복사(deep copy)를 따로 처리
*/

// 9. 아래 코드를 실행했을 때 출력 결과는 무엇인가요?
    const arr = [1, 2];
    const newArr = [...arr, 3, 4];
    console.log(newArr);    // [ 1, 2, 3, 4 ]

// 10. 나머지 매개변수를 사용하여 여러 개의 숫자를 인자로 받아 그 합을 구하는 sum함수를 작성하세요.
    const sum = (...args) => {
        return args.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    };  

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));    // 55
// 11. 아래 함수의 결과는 무엇인가요?
    function printNumbers(first, ...rest) {
        console.log(first);
        console.log(rest);
    }

    printNumbers(1, 2, 3, 4);   // 1 과 [ 2, 3, 4 ]

/* 12. 나머지 매개변수는 항상 함수의 마지막 매개변수로 사용되어야 한다.
    참; 함수의 매개변수 목록에서 마지막에 위치해야하고, 나머지 모든 인자를 배열로 모아서 처리
*/

/* 13. math.js 파일에서 add 함수를 기본 내보내기(default export)하고, main.js 파일에서 불러오는 코드 작성
    // math.js:
    export default function add(a, b) {
    }

    // main.js:
    import add from '.math.js';
    add()
*/

/* 14. 여러 함수를 명시적 내보내가(named export)로 내보내는 예시 코드를 작성하세요.:
    export const pi = 3.14;
    export func1 = () => {};
    export func2 = () => {};
*/

/* 15. 아래 코드에서 subtract 함수를 별칭(alias)으로 불러오는 코드를 작성하세요.
    // main.js:
        import { subtract as subtraction } from './math.js';
*/

/* 16. 모듈 시스템에서 동적 import는 무엇을 위한 것인가요?
    파일을 비동기적으로 불러오기 위함
*/

/*------------- ES6 기능 관련 Recap(복습) --------------*/

/* 1. ES6클래스에서 constructor는 언제 호출되나요?
    클래스 인스턴스를 생성할 때 
    (`new`키워드를 사용하여 클래스의 인스턴스를 만들 때 `constructor` 실행)
*/

// 2. 클래스 Person을 정의하고, 이름을 출력하는 greet 메서드를 작성하세요.
    class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, ${this.name}`);
        }
    }

    const Gyejin = new Person('홍길동');
    Gyejin.greet(); // Hello, 홍길동

/* 3. ES6 클래스에서 상속을 구현하기 위한 키워드는 무엇인가요?
    extends
*/

// 4. 아래 코드에서 Promise의 출력 결과는 무엇인가요?
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success'), 1000);
    });

    promise.then(result => console.log(result));    // 1초 후 'Success' 출력 

/* 5. Promise의 세 가지 상태는 무엇인가요?
    대기(Pending), 이행(Fulfilled), 거부(Rejected)
*/

/* 6. Promise.all은 언제 사용하나요?
    여러 Promise를 병렬로 처리하고 모두 완료되면 하나의 결과를 얻을때
*/

/* 7. 이터레이터의 기본 메서드는 무엇인가요?
    next() ; 이터레이터의 다음 값을 반환
*/

/* 8. 제너레이터 함수를 정의하기 위한 키워드는 무엇인가요?
    function*
*/

// 9. 아래 제너레이터 함수의 출력은 무엇인가요?
    function* generator() {
        yield 1;
        yield 2;
        return 3;
    }

    const gen = generator();

    console.log(gen.next().value);  // 1
    console.log(gen.next().value);  // 2
    console.log(gen.next().value);  // 3

/* 10. Set은 어떤 특징을 가지고 있나요? 
    중복된 값을 허용하지 않는다.
    순서가 있는 데이터 구조, 삽입된 순서대로 요소 유지
*/

// 11. 아래 코드의 출력 결과는 무엇인가요?
    const mySet = new Set([1, 2, 3, 3]);

    console.log(mySet); // {1, 2, 3}

/* 12. Map 객체는 어떤 자료 구조인가요?
    키-값 쌍을 저장하는 자료 구조
*/

/* 13. Map의 메서드 중, 특정 키에 해당하는 값을 얻는 메서드는 무엇인가요?
    Map.prototype.et("key");
*/
