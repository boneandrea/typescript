function hoge(name, age) {
    return age >= 20;
}
// hoge() // error
// hoge("john")// error
console.log(hoge("john", 19));
console.log(hoge("john", 20));
const hogeES6 = (name, age) => {
    console.log(age || "NO ARG");
    return age >= 20;
};
console.log(hogeES6("john"));
console.log(hogeES6("john", 19));
console.log(hogeES6("john", 20));
const hogeES6_2 = (name, age) => age >= 20;
console.log(hogeES6_2("john", 19));
console.log(hogeES6_2("john", 20));
