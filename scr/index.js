function reverse(number){
    let a = ''; let num_string;
    num_string = String(number)
    len = num_string.length
    for (let i = 1; i <= len; ++i){
        a += num_string[num_string.length - 1]
        num_string = num_string.substr(0, num_string.length - 1)
        console.log(a)
    } 
    return Number(a)
}
