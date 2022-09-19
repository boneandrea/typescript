//////////////////////////////////////////////////////
console.log(`[[[[ type ]]]`);
let birthday: number|string;

birthday=18;
birthday="TODAY";
// birthday=[]; // error

let rank: "kacho" | "bucho";

rank="kacho";
//rank="hira"; // dead

let x: any;
x="xx";
x=14;
x=null;
x=undefined;

const scope=()=>{
    {
        //この変数はこの中でのみ有効
        const store = "小売店";
        console.log(store)
    }
    // console.log(store) // Cannot find name 'store'
}

//////////////////////////////////////////////////////
console.log(`[[[[ bool ]]]`);
let my_bool: boolean

my_bool= 1>0;
//my_bool="kacho"; // error

console.log(my_bool)
console.log(typeof my_bool)
console.log(my_bool.toString())
console.log(typeof my_bool.toString())

console.log(Boolean)
console.log(new Boolean)
console.log(new Boolean(0))
console.log(new Boolean(0))
console.log(new Boolean(1))
console.log(Boolean(1))
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(true))
console.log(typeof Boolean)

let my_number: number
// my_number="nnnn";// error
my_number=1;
my_number=100000000000000000000;
//my_number=100000000000000000000n;

{
    let my_number: bigint
    // my_number="nnnn"; // error
    // my_number=5; // error
    my_number=5n;
    //my_number=5.6n; // must be integer

    // my_number=500000000000000000000; // error
    my_number=5000000n;
}

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004
console.log(Infinity)
console.log(NaN)

//////////////////////////////////////////////////////
console.log(`[[[[ string ]]]`);
let s:string;

s="0";

// error
// s="1
// b";

// error
// s='2
// ';

s=`31

32`;

console.log(s)

console.log(parseInt('0100', 10)); // 100になる
console.log(parseInt('0100', 8)); // 100になる

console.log(Boolean('')); // false
// all true
console.log(Boolean('0'));
console.log(Boolean('1'));
console.log(Boolean('false'));
console.log(Boolean('true'));

//
s="ユニコード"
console.log(s)
console.log("ＡＢＣABCアーメンｱｲｳｴｵ㍻".normalize("NFKC"))
console.log("ＡＢＣABCアーメンｱｲｳｴｵ㍻".split(""))
console.log("ＡＢＣABCアーメンｱｲｳｴｵ㍻".split("").join())
console.log("ＡＢＣABCアーメンｱｲｳｴｵ㍻".split("").join(""))
