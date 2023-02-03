/* 문제 설명
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(s1, s2) {
    var answer = s1.filter((v) => s2.includes(v));
    return answer.length;
}

// array.includes() 를 이용해 s1에 있는 원소가 s2에 있는지 여부를 true false로 반환
// array.filter() -> true 인 값만 배열로 반환
// answer 배열의 길이는 일치하는 원소의 개수가 된다.

