//////////////////////////////////////////////////////
console.log(`[[[[ FUNCTION ]]]`);

type Kata={
    hoge: string,
    fuga: number|null
}
function func(opts: Kata) {
    // debugがあるかどうかチェックしないので
    // コンパイルエラーにならない
    console.log(opts)
    console.log(`${opts.hoge} =>${opts.fuga}`);
}

// func(1) // error
// func({}) // error
func({hoge: "ho-ge", fuga:13})


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

function hello(): void {
    console.log("ごきげんよう");
}

hello()

let check: (arg1: string, arg2: (arg3: string) => number) => boolean;

function sort(a: string[], conv: (value: string) => string) {
    const entries = a.map((value) => [value, conv(value)])
    entries.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    return entries.map(entry => entry[0]);
}

const a: string[] = ["a", "B", "D", "c"];
console.log(sort(a, s => s.toLowerCase()))
// ["a", "B", "c", "D"]

let callback: (name: string) => void;
callback = (name: string): void => {};

let callback1 = (name: string): void => {};

function f(name="小動物", favorite="小豆餅") {
    console.log(`${name}は${favorite}が好きです`);
}
f(); // 省略して呼べる



// 最後の={}がないとエラーになるので注意
function f1({name="小動物", favorite="小豆餅"}={}) {
    //:
}

f1()

const smallAnimal = {
    getName() {
        return "小動物"
    },
    _favorite: "小笠原",
    get favorite() {
        return this._favorite;
    },
    set favorite(favorite) {
        this._favorite = favorite;
    }
};

console.log(smallAnimal.getName());
console.log(smallAnimal.favorite);
smallAnimal.favorite="missile";
console.log(smallAnimal.favorite);

// 新: スプレッド構文。固定属性との共存もラクラク
const f2 = (a, b, ...c) => {
    console.log(a, b, c);
};

f2(1, 2, 3, 4, 5, 6)

const start = Date.now();
console.log(start.valueOf());

const d = new Date(2020, 8, 21, 21, 10, 5)
console.log(d)

const d1 = new Date(Date.UTC(2020, 8, 21, 21, 10, 5))
console.log(d1)
console.log(d1.toISOString())
// CLASS

// 小型犬
class SmallDog {
    // 小型犬は宝物を秘密の場所に埋める
    private secretPlace: string;

    private secretDig(): string {
        return this.secretPlace;
    }

    dig(): string {
        return this.secretPlace;
    }

    // 埋める
    bury(treasure: string) {
        this.secretPlace = treasure;
    }
}

const dog0 = new SmallDog();
// 埋めた
dog0.bury("骨");

// 秘密の場所を知っているのは小型犬のみ
// アクセスするとエラー
// error TS2341: Property 'secretPlace' is private and
// only accessible within class 'SmallDog'.
//miniatureDachshund.secretPlace;

// 掘り出した
console.log(dog0.dig());
//console.log(dog0.secretDig()); // error


// 小型犬
class StaticDog {

    static staticVariable: number;
    variable: number;

    constructor(private secretPlace: string) {
        // 勝手に次相当の処理が走る
        // this.secretPlace=secretPlace;
    }

    // 静的なメソッド
    static classMethod() {
        // 静的なメソッドから静的プロパティは ``this.`` もしくは、 ``クラス名.`` で参照可能
        console.log(this.staticVariable);
        console.log(StaticDog.staticVariable);

        // 通常のプロパティは参照不可
        // error TS2339: Property 'variable' does not exist on
        //     type 'typeof StaticDog'.
        // console.log(this.variable);
    }

    method() {
        // 通常のメソッドから通常のプロパティは ``this.`` で参照可能
        console.log(this.variable);
        // 通常のメソッドから静的なプロパティは ``クラス名.`` で参照可能
        console.log(StaticDog.staticVariable);
        // 通常のメソッドから静的なプロパティを ``this.`` では参照不可
        // console.log(this.staticVariable);
        // error TS2576: Property 'staticVariable' is a static
        //     member of type 'StaticDog'
    }

    dig(): string {
        return this.secretPlace;
    }

    // 埋める
    bury(treasure: string) {
        this.secretPlace = treasure;
    }
}



// 掘り出した
const dog1 = new StaticDog("フリスビー");
console.log(dog1.dig()); // フリスビー

StaticDog.staticVariable=33;
console.log(StaticDog.staticVariable); // 3

class SimLockPhone {
    readonly carrier: string;
    constructor(carrier: string) {
        this.carrier = carrier;
    }
}

// キャリア変更できない！
const myPhone = new SimLockPhone("Docomo");
// myPhone.carrier = "au";
// error TS2540: Cannot assign to 'carrier' because it is a read-only property.
console.log(myPhone.carrier);



// たまに実行される
async function randomRun() {
    console.log(1)
}

// 必ず実行される
async function finallyFunc() {
    console.log(2)
}

async function main(){
    if (Date.now() % 2 === 1) {
        await randomRun();
    }
    await finallyFunc();
}

main();
