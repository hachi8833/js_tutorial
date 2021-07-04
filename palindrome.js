// 文字列を逆順にする
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// パリンドロームならtrueを、違うならfalseを返す
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;
}