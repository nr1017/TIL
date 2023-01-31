/* 문제 설명
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.*/

// 나의 풀이

function solution(my_string) {
    const arr = my_string.split(" ")
  var answer = parseInt(arr[0]);
  for(let i=1; i<arr.length-1; i+=2){
    if(arr[i] === '+'){
      answer += parseInt(arr[i+1])
    } else if(arr[i] === '-'){
      answer -= parseInt(arr[i+1])
    } 
  }
  return answer
}

// 문자열로 된 수식을 배열로 만들어 준 후, 첫번째 인덱스에 오는 숫자를 answer에 할당해준다
// for문을 사용하여 홀수 인덱스(연산자)를 확인 한 후 answer에 다음 인덱스 숫자를 계산해준다.


// 다른사람 풀이

function solution(my_string) {
    const arr = my_string.split(' ');
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}

//예를들어

arr = [ '1', '+', '2', '-', '3', '+', '4' ]

// arr.shift()로 첫번째 인덱스에 있는 숫자를 꺼낸다. +연산자를 붙여서 문자열에서 숫자로 변환.

arr.unshift(1 + (arr.shift() === "+" ? 1 : -1) * arr.shift())

// arr.shift()로 그다음 인덱스를 꺼내서 연산자를 확인 한 후,
// 다시 arr.shift()로 그다음 인덱스를 꺼내서 앞의 연산자와 곱해서 계산한다. -> 연산자가 - 일경우 다음 숫자가 음수가 된다.

arr.unshift(1 + 2)

arr = [3, '-', '3', '+', '4']
