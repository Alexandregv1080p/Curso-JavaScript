function range(a,b,s = 1){
    const n1 = b === undefined ? 1 : a //b é undefined ? ser for, n1 recebe o valor 1, senão, recebe o valor de a
    const n2 = b === undefined ? a : b //b é undefined ? se for, n2 recebe o valor de a, senão, recebe o valor de b
    nums = []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += s){
        nums.push(i)
    }
    return nums
}
console.log(range(5))
console.log(range(6,10))
console.log(range(10,19,2))
console.log(range(6,2))
console.log(range(8,-3,4))