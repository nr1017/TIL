/* 문제 설명
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이
const solution = (array) => {
    const orderArr = [];
    while(array.length > 0) {
        let minNum = Math.min(...array)
        orderArr.push(minNum)
        array.splice(array.indexOf(minNum), 1)
    }
    return orderArr[(orderArr.length - 1) / 2];
}

/* Math.min() -> 매개 변수로 제공된 숫자 중 가장 작은 숫자를 반환
매개변수가 배열일 경우 아래처럼 작성해야한다. */
Math.min(...array)

// array.splice(시작인덱스, 제거할 요소의 개수)
// array.indexOf() -> 해당 값이 몇번째 인덱스인지 반환(없으면 -1 반환), 앞에서 부터 찾음

// 다른 사람의 풀이
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

/* array.sort() 
-> 배열의 요소를 오름차순(문자열)으로 정렬

숫자를 정렬하면 잘못된 결과가 나올 수 있다.
ex) "2"가 "1"보다 크기 때문에 "25"는 "100"보다 크다고 잘못 인식
*/


// 숫자를 오름차순으로 정렬:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
// 1,5,10,25,40,100

// 숫자를 내림차순으로 정렬:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
// 100,40,25,10,5,1

