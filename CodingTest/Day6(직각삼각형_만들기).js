/* 문제 설명
"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
*/

// 나의 풀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

//'\n' -> 줄바꿈

function solution(n){
    let result = '';
    for(i=1; i <=n; i++){
        for(j=1; j<=i; j++){
            result+= '*';
        }
        result+= '\n'
    }
    return console.log(result)
}


// 다른 사람의 풀이

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

// String.repeat() -> 문자열을 지정된 수만큼 반복하는 새 문자열을 구성하고 반환한다

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}
