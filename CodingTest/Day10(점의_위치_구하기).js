/* 문제 설명
x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(dot) {
    const x = dot[0];
    const y = dot[1]

    return x > 0 && y > 0 ? 1
    : x < 0 && y > 0 ? 2
    : x < 0 && y < 0 ? 3
    : 4;
}

// 다른 사람 풀이

function solution(dot) {
    const [num,num2] = dot; //구조분해 할당
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

// 변수에 할당하는 것 대신 구조분해할당으로 표현하여 코드가 더 깔끔하다!
