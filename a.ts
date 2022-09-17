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
