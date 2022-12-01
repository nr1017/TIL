/* 문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. */

// 나의 풀이
function solution(denum1, num1, denum2, num2) {
    var answer = [];
    const denum = (denum1 * num2) + (denum2 * num1)        
    const num = num1 * num2
    let gcd = 1;

//최대공약수 gcd 구하기
// Math.min() => 제공된 숫자 중 가장 작은 숫자를 반환
    
    for(i=2; i<= Math.min(num, denum); i++){
        if(denum % i === 0 && num % i === 0){
            gcd = i;
        }
    }
    answer.push(Math.floor(denum/gcd))
    answer.push(Math.floor(num/gcd))
    return answer;
}


