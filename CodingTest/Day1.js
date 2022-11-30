/* 문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이
const solution = (num1, num2) => Math.floor(num1 / num2)


// Math.floor와 parseInt의 차이점?

// Math.floor => 내림하고 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환

Math.floor(0.60);
// 0
Math.floor(0.40);
// 0
Math.floor(5.8);
// 5
Math.floor(5.1);
// 5
Math.floor(-5.1);
// -6
Math.floor(-5.9);
// -6

// parseInt => 값을 문자열로 구문 분석하고 첫 번째 정수를 반환

parseInt("10");
// 10
parseInt("10.00");
// 10
parseInt("10.33");
// 10
parseInt("34 45 66");
// 34
parseInt(" 60 ");
// 60
parseInt("40 years");
// 40
parseInt("He was 40");
// NaN
