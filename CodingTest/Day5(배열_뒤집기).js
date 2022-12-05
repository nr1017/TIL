/* 문제 설명
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(num_list) {
    var answer = [];
    while(num_list.length > 0)
    answer.push(num_list.pop());
    return answer;
}
// array.pop() -> 배열에서 마지막 요소를 제거하고 해당 요소를 반환


// 다른 사람의 풀이

function solution(num_list) {
    return num_list.reverse()
}

//array.reverse() -> 배열을 뒤집고 동일한 배열에 대한 참조를 반환
