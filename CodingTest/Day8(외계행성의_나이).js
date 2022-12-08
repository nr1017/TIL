/* 문제 설명
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.*/

// 나의 풀이

function solution(age) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j"];
   let newAge = '';
  [...(age+'')].forEach((num)=>{newAge += alphabet[num]})
  return newAge;
}

// age를 string으로 바꾼뒤 한자리씩 배열로 만들어서 배열 alphabet의 인덱스에 넣어서 해당 알파벳을 더했다.

// 다른 사람의 풀이

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

// 문자열 자체도 인덱스가 있어서 알파벳 배열을 만들어 줄 필요없이 문자열에서 바로 알파벳 찾기 가능!
