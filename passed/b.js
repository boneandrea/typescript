//////////////////////////////////////////////////////
console.log(`[[[[ string ]]]`);
function i18n(texts, ...placeholders) {
    console.log(texts);
    console.log(placeholders);
    return; // 翻訳処理
}
const hobby = "小旅行";
const food = "人間";
console.log(`小動物は${hobby}が好きです`);
console.log(i18n `小動物は${hobby}が好きです.they eat ${food}.`);
let favoriteGame; // まだ代入してないのでundefined;
favoriteGame = "murakami HR";
console.log(favoriteGame);
