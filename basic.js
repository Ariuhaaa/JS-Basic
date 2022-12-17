// let a = 5;
// console.log (a)
// console.log (typeof(a));
// let b = 5;
// console.log(b)
// console.log (typeof(b));


// Daalgavar 

// 1. 1. "Comments can make code readable" - нэг мөртэй коммент болгох 

// let comment = "Comments can make code readable";

// 2. "Javascript lesson begin" - нэг мөртэй коммент болгох 

// let text = "Javascript lesson begin";
// console.log (text);

// 3. "Comments can make code readable" олон мөртэй коммент болгох 

/* "Comments can make code readable" */

// 4. Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх 

let h = 9;
let pp = "9";
let c = true;
let d = false;
let f;
let g = null; 

// 5. 5. Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined,  null гэх мэт 

let ar = 9;
console.log (ar)
console.log (typeof (ar));

let pa = "9";
console.log (pa)
console.log (typeof (pa));

let ca = true;
console.log (ca)
console.log (typeof (ca));

let da = false;
console.log (da)
console.log (typeof (da));

let fa ;
console.log (fa)
console.log (typeof (fa));

let ga = null; 
console.log (ga)
console.log (typeof (ga));

// 6. Утга оноогоогүй хувьсагч зарлах 

let basic;
console.log (basic);

// 7. Утга оноосон хувьсагч зарлах 

let test = 5;
console.log (test);

// 8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let FirstName;
console.log (FirstName);

let LastName;
console.log(LastName);

let MaritalStatus;
console.log(MaritalStatus);

let Country;
console.log(Country);

let Age;
console.log(Age);

// 9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 

let FirstName1, LastName1, MaritalStatus1, Country1, Age1;
console.log (FirstName1, LastName1, MaritalStatus1, Country1, Age1);

// 10. MyAge, yourAge нэртэй хувьсагч зарлан эхний утгыг оноох 

let MyAge = 1;
console.log (MyAge);

let yourAge = 2;
console.log (yourAge);

// 11. Гурвалжингийн периметрийг олох 
let ss = 3;

let hh = 4; 

let gg = 5;                         

sum = ss+hh+gg;
console.log(sum);

// 12. Тойргийн талбайг олох 

let rr= 4;
let yy= 2;

sum= rr*2**2
console.log(sum);

// 13. m = y2-y1/x2-x1 хариуг олох 

let y= 10;
let x= 5;

let div = y*2-y*1/x*2-x*1;

console.log(div);

// 14. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?

let Gegabyte = 15;
let Bit = 0.000000000125;

let Gegabyte_15 = 15*0.000000000125;

console.log(Gegabyte_15);



// 15. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = 10;
let side2 = 20;
let side3 = 30;

let talbai = side1 + side2 + side3
 
console.log(talbai);


// 16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

let  cels = 10;
let far = 0;

 let Fahrenheit = (cels * (9/5))+32

 console.log(Fahrenheit);

// 17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.

let fahren = 44.6;
let celsius = 0;

let Cel = ((fahren-32)*(5/9))

console.log(Cel);

// 18. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: 



// Өгөгдсөн 2 тооны нийлбэр нь 25 

let a = 10;
let b = 15;

let niilber = a + b;
console.log(niilber);

// Өгөгдсөн 2 тооны ялгавар нь 5

let i = 65;
let j = 60;

let has = i - j;
console.log(has);

// 19. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх

let sm = 3;
let inch = 4;

let inches = 3 / 2.54;
console.log(inches);

let sms = 4 * 2.54;
console.log(sms);

// 20. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.

let r = 31;
let p = 3.14


let s = p * r;
let ezel = s * s;
console.log(ezel);


let L = 2 * r;
let hureeniiUrt = L * p

console.log(hureeniiUrt);

// 21. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

let number = 423;

// 22. Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу.   

let q = "Baby ";
let u = " Shark,";
let w = " doo-doo,";
let e = "Mommy";
let t = "Daddy";
let o = "Grandma";
let l = "Grandpa";
let k = "Let's go hunt";
let cv = "Run away";
let vc = "Safe at last";
let z = "It's the end";

console.log(q+u+w+w);
console.log(q+u+w+w);
console.log(q+u+w+w);
console.log(q+u);
console.log(e+w+w);
console.log(e+w+w);
console.log(e+w+w);
console.log(e+u);
console.log(t+u+w+w);
console.log(t+u+w+w);
console.log(t+u+w+w);
console.log(t+u);
console.log(o+u+w+w);
console.log(o+u+w+w);
console.log(o+u+w+w);
console.log(o+u);
console.log(l+u+w+w);
console.log(l+u+w+w);
console.log(l+u+w+w);
console.log(l+u);
console.log(k+w+w);
console.log(k+w+w);
console.log(k+w+w);
console.log(k);
console.log(cv+w+w);
console.log(cv+w+w);
console.log(cv+w+w);
console.log(cv);
console.log(vc+w+w);
console.log(vc+w+w);
console.log(vc+w+w);
console.log(vc);
console.log(z+w+w);
console.log(z+w+w);
console.log(z+w+w);
console.log(z);