// 文字列を逆順にする
function reverse(string) {
  return string.split("").reverse().join("");
}

// パリンドロームならtrueを、違うならfalseを返す
function palindrome(string) {
  return string === reverse(string);
}