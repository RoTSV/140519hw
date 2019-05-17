
//типы данных
let a = 1;
console.log( typeof a);
let b = 'Hello';
console.log( typeof b);
let c = true;
console.log( typeof c);
let d;
console.log( typeof d);
let mas = [ 1,2,'Hello'];
console.log( typeof mas);
let e = null;
console.log( e);
//
let x;
let y;
y = 3;
x = y + 4;
console.log (x*y);
let f = 10;
f += 4;
let g;
g = f - 2;
console.log (g);
// сравнение
let h = 2;
let i = 1;
console.log (h>i);
console.log (h<i);
console.log (h>=i);
console.log (h==i);
console.log (h!=i);
//условные операторы
let k = prompt( 'какае чесло верно?');
if (k == 10) {
    alert ('верно');
} 
else if (k > 10) {
    alert ( 'неверно');
}
else if (k < 10 ){
    alert ( 'неверно');
}

else{
    alert ('неверно2');
}
//
let m = [22, 'hello', true, 12, null];
console.log (m[0]);
console.log (m[4]);
console.log (m);
alert (m.length);
console.log (m[0] + m[3]);

