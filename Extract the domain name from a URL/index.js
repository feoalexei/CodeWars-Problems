// 30 ////////// Extract the domain name from a URL //////////

function domainName(url){
  return url
    .replace(/(https?:\/\/)?(w{3}.)?/, '')
    .split('.')[0]
}
  
console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
