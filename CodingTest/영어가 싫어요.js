/* 문제 설명
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

// 나의 풀이

function solution(numbers) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = numbers;
  numArr
    .map((num, i) =>
      numbers.includes(num) ? (answer = answer.replaceAll(num, i)) : ""
    )
    .join("");
  return parseInt(answer);
}

// string.includes()는 한 문자열이 다른 문자열안에 있는지 여부에 따라 true or false를 반환

// 해당 문자열이 존재하면 numbers 에서 해당 문자열의 인덱스(해당숫자)로 대체하여 answer에 할당한다.
// string.replaceAll() 은 모든 일치된 항목을 새문자열로 대체한다.

// 다른 사람 풀이

function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

// key:문자열 value:숫자로 객체를 만들어 두었고,
// 정규표현식에서 두번째 매개변수에 해당 문자열을 숫자 value값으로 변경하는 함수를 넣어서 해결했다.
