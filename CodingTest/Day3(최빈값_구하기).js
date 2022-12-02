/* 문제 설명
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
*/

// 풀이

function solution(array) {
  
  //배열안에 값이 몇번 나오는지 check라는 객체로 만든다
  // ex) {1: 1, 2: 2, 3: 2, 4: 1}
  
    const check = array.reduce((obj, num)=>{
        obj[num] = (obj[num] || 0 ) + 1;
        return obj
    },{})
    
    const max = Math.max(...Object.values(check));
    const modes = Object.keys(check).filter(key => check[key] === max);
    return modes.length === 1 ? +modes[0] : -1;
}


// array.reduce(콜백함수, 초기값)
// array.reduce((콜백 반환값 누적, 처리할 현재 요소, 처리할 요소의 인덱스)=>{실행문}, 초기값)

// 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

