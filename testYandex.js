const isEquals = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase()
}

const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase()
}


const func = (str) => {
    let start = 0
    let end = str.length - 1

    while(start < end){
        const firstChar = str[start]
        const endChar = str[end]

        if(!isLetter(firstChar)){
            start += 1
            continue
        }

        if(!isLetter(endChar)){
            end -= 1
            continue
        }

        if(!isEquals(firstChar, endChar)){
            return false
        }

        start += 1
        end -= 1
    }

    return true
}

let str1 = 'Казак'
let str2 = 'А роза упала на лапу Азора'
let str3 =  'Do geese see God'
let str4 = 'Madam, I\'m Adam'
const a = func(str3)
console.log(a)