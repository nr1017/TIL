/* 문제 설명
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(n) {
    let answer = [];
    for(i=1; i <= n; i++){
       if(n % i === 0){
           answer.push(i);
       } 
    }
    return answer;
}

// 다른 사람 풀이

function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}

// Array(arrayLength) -> 배열 생성자, 길이가 n인 배열을 만든다
// array.fill() -> 배열의 모든 요소를 ​​시작 인덱스(기본값 0)에서 끝 인덱스(기본값 array.length)까지 정적 값으로 변경. 수정된 배열을 반환.
// fill(value, start, end)

Array(n).fill(0)
// [0, 0, 0...]
Array(n).fill(0).map((v, index) => v+index+1)
// [1, 2, 3, 4 ... n]


