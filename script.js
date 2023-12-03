class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }
    ucFirst(str) {
        return str.slice(0, 1).toUpperCase() + str.slice()
    }
    ucWords(str) {
        return str.split(' ').map((el) => el.slice(0, 1).toUpperCase() + el.slice(1)).join(' ')
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'