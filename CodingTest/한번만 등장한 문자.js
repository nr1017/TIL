/* 문제 설명
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

// 나의 풀이

function solution(s) {
  const newObj = [...s].reduce((obj, str) => {
    obj[str] = (obj[str] || 0) + 1;
    // obj에 해당 str이 없으면 obj[str]은 undefined 이므로 0 + 1 = 1이 된다

    return obj;
  }, {});

  let answer = [];

  for (let v in newObj) {
    if (newObj[v] === 1) answer.push(v);
  }
  return answer.sort().join("");
}

// array.reduce()를 사용하여 문자가 몇번나오는지 객체로 만든다
// 객체에서 값이 1인 문자열만 newObj배열로 추가한 뒤, array.sort()를 이용하여 사전순으로 정렬한다.

// 다른 사람 풀이

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

// array.indexOf() -> 배열에서 요소를 찾을 수 있는 첫번째 인덱스 반환
// array.lastIndexOd() -> 배열에서 요소를 찾을 수 있는 마지막 인덱스 반환
// 위의 두 인덱스가 같다 => 해당문자가 한번만 등장했다


