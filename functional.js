let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
// 変換例: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// URL生成: 命令型バージョン
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// URL生成: 関数型バージョン
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function validUrlList(list){
  return list.map(elm => "https://example.com/" + urlify(elm));
}
console.log(validUrlList(states));

// 1単語の文字列抽出: 命令型バージョン
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// 1単語の文字列抽出: 関数型バージョン
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));
