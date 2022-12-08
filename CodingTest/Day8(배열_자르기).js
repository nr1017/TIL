/* 문제 설명
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1)
}

// slice(start, end) -> start인덱스부터 end인덱스 전까지를 새배열로 반환
// 기존 배열을 변경하지 않음

// 다른 사람의 풀이

function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}

/* splice(start, deleteCount, item)
(배열변경 시작 인덱스, 제거 요소수, 추가할 요소)
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

// ["Banana", "Orange", "Kiwi"]

const months = ['Jan', 'Feb', 'March', 'April', 'June'];
months.splice(4, 1, 'May');

// ["Jan", "Feb", "March", "April", "May"]
