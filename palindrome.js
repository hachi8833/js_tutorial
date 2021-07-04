// 文字列を逆順にする
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // フレーズを全部大文字にする
  this.louder = function() {
    return this.content.toUpperCase()
  };
}