//////////////////////////////////////////////////////
console.log(`[[[[ ARRAY ]]]`);
// Tuple: まず使わないなこれ
const movie = ["fe", 1, 2n];
movie[0] = "fe";
movie[1] = 10;
movie[2] = 20n;
console.log(movie);
// const car: [string, number, bigint] //  'const' declarations must be initialized.
// car[0]="fe"
// car[1]=10
// car[2]=20n
// console.log(car)
const hands = ["大三元", "緑一色", "ザンク"];
const [, ...other] = hands;
console.log(other);
const [ga, gb, gc] = hands;
console.log(ga);
console.log(gb);
console.log(gc);
for (const [i, value] of hands.entries()) {
    console.log(i, value);
}
for (const value of hands) {
    console.log(value);
}
const gd = [1, 2];
console.log(gd[0]);
console.log(gd[1]);
gd.push(3);
console.log(gd[2]);
const ge = [1, 2];
console.log(ge[0]);
console.log(ge[1]);
// ge.push(3)
// 定義はキー、コロン(:)、値を書く。要素間は改行
const key = 'favorite drink';
const smallAnimal = {
    [key]: "ストロングゼロ"
};
// 参照は `.`+名前、もしくは [名前]
console.log(smallAnimal[key]); // ストロングゼロ
let animal;
animal = {
    name: "小動物",
    favorite: "beer"
};
// if strict:false
console.log(animal?.favorite?.toUpperCase());
animal = null;
// if strict:false
console.log(animal?.favorite?.toUpperCase());
// if strict
console.log(animal ? animal?.favorite?.toUpperCase() : undefined);
const map = new Map([
    ["五反田", "約束の地"],
    ["戸越銀座", "TGSGNZ"]
]);
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}
const u = { name: "shibukawa", age: 39 };
// same as above
// const u = {name: "shibukawa", age: 39} as const;
//u.age = 17; // Cannot assign to 'age' because it is a read-only property.
// u.name="name"
console.log(u);
console.log(u.name);
function someFunction(opts) {
    // debugがあるかどうかチェックしないので
    // コンパイルエラーにならない
    // runtime errorになる
    console.log(opts.fuga);
}
function func(opts) {
    // debugがあるかどうかチェックしないので
    // コンパイルエラーにならない
    console.log(opts);
    console.log(`${opts.hoge} =>${opts.fuga}`);
}
// func(1) // error
// func({}) // error
func({ hoge: "ho-ge", fuga: 13 });
// 考えんとわからん
// function func2(arg: unknown): arg is Kata{
//     if (typeof(arg) === "object" && arg !== null) {
//         // ここで任意のキーを持つオブジェクト型にする
//         const obj: {[hoge: string, fuga:number]:any} = arg;
//         // そうすると、ここで属性へのアクセスがエラーとならなくなる
//     }
// }
// // func2(1) // error
// // func2({}) // error
// func2({hoge: "ho-ge", fuga:13})
function hello() {
    console.log("ごきげんよう");
}
hello();
let check;
