// 文字列を逆順にする
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // パリンドロームのテスト用に小文字に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // パリンドロームのテスト用に処理した訳文を返す
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();