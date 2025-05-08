//1.将以下代码重写为使用 let 和 const 代替 var。解释为什么在每种情况下 let 或 const 更合适。
let name = "Alice";
if (true) {
    let name = "Bob";
    console.log(name);
}
console.log(name);
//以上输出第一个name是Bob，第二个name是Alice,原因是let 是块级作用域，if 里面的 name 是局部变量，不会影响外层的 name
const name1 = "Alice";
if (true) {
    const name1 = "Bob";
    console.log(name1);
}
console.log(name1);
//如果将let改成const则也是一样，let 和 const 是块级作用域（block-scoped），只在 if 块内有效，外部的 name 不会被覆盖。
//当声明一个变量，其值不会被重新赋值时，应使用 const,当需要在之后重新赋值这个变量时，使用 let。var容易产生作用域污染也有变量提升行为

//2.箭头函数
const add = (a, b) => a + b;
//箭头函数不绑定自己的 this，它会继承外部上下文的 this

//3.模板字面量
let greeting = `Hello, ${name}!\nWelcome to the course.`;

//4.解构赋值
const personInfo = ({ name, age, city }) => {
    console.log(`Name: ${name}, Age: ${age}, City:${city}`);
};

//5. 默认参数
function calculateArea(width, height = width) {
    return width * height;
}
console.log(calculateArea(10))
//6.RestSpread 运算符
function countNUm(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let add1 = [...arr1, ...arr2];

console.log(countNUm(...add1));
