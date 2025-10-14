const url = require("url");
// console.log(url);
// let myurl =
//   "https://example.com:8080/pathname/index.html?name=John&age=30#section";
// let myurl2 =
//   "https://www.amazon.com/SAMSUNG-Technology-Intelligent-Turbowrite-MZ-V9S1T0B/dp/B0DHLFWBQ1/ref=sr_1_1?crid=CNO7YOHJ7FW9&dib=eyJ2IjoiMSJ9.H39GvN73WU3e9olWq8mPvWcZ_XecvGi5Ggov5vyauIMarDYSYZscORWN3F8Wd6zViqD3a0uuMTj4m2FRTNTKTWUoM5D_yjGNU-Udii_rdvoAjASt4MZJ5Zgq65CA8ywe_KOpqd9M8djF_1DOGT5CvVwvRPinfTHESviVntNKuHhvIQbjGg7dtI4BDNSmpYKGfPhRkUDFblQHEhMSrmQvecExEysNj4GYg8AxFzp06wM.X3WsHFvfc4qyxA5Y9BAHlTEzCl2L2vQG91oFirQPmfk&dib_tag=se&keywords=ssd&qid=1760417379&sprefix=ss%2Caps%2C302&sr=8-1&th=1";
// console.log(url.parse(myurl));
// console.log(url.parse(myurl2).query);
let myUrl = new URL(
  "https://www.amazon.com/SAMSUNG-Technology-Intelligent-Turbowrite-MZ-V9S1T0B/dp/B0DHLFWBQ1/ref=sr_1_1?crid=CNO7YOHJ7FW9&dib=eyJ2IjoiMSJ9.H39GvN73WU3e9olWq8mPvWcZ_XecvGi5Ggov5vyauIMarDYSYZscORWN3F8Wd6zViqD3a0uuMTj4m2FRTNTKTWUoM5D_yjGNU-Udii_rdvoAjASt4MZJ5Zgq65CA8ywe_KOpqd9M8djF_1DOGT5CvVwvRPinfTHESviVntNKuHhvIQbjGg7dtI4BDNSmpYKGfPhRkUDFblQHEhMSrmQvecExEysNj4GYg8AxFzp06wM.X3WsHFvfc4qyxA5Y9BAHlTEzCl2L2vQG91oFirQPmfk&dib_tag=se&keywords=ssd&qid=1760417379&sprefix=ss%2Caps%2C302&sr=8-1&th=1"
);
// console.log(typeof( myurl));
// console.log(myurl);
console.log(myUrl.href); //
https://example.com:8080/pathname/index.html?name=John&age=30#sectionconsole.log(myUrl.protocol); // https:
console.log(myUrl.host); // example.com:8080
console.log(myUrl.hostname); // example.comconsole.log(myUrl.port); // 8080
console.log(myUrl.protocol);//https://
console.log(myUrl.pathname); // /pathname/index.html
console.log(myUrl.search); // ?name=John&age=30
console.log(myUrl.hash); // #section
console.log(myUrl.origin);


// console.log(myurl.searchParams.get('crid'));
// console.log(myurl.searchParams.get('qid'));
// console.log(myurl.searchParams.get('dib'));
// console.log(myurl.searchParams.get('sprefix'));