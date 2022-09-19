//////////////////////////////////////////////////////
console.log(`[[[[ FUNCTION ]]]`);
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
function sort(a, conv) {
    const entries = a.map((value) => [value, conv(value)]);
    entries.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1;
        }
        else if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    return entries.map(entry => entry[0]);
}
const a = ["a", "B", "D", "c"];
console.log(sort(a, s => s.toLowerCase()));
// ["a", "B", "c", "D"]
let callback;
callback = (name) => { };
let callback1 = (name) => { };
function f(name = "小動物", favorite = "小豆餅") {
    console.log(`${name}は${favorite}が好きです`);
}
f(); // 省略して呼べる
