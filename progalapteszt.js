const modul = require('./modul');

//1. feladat
//string
let string = "string";
//num
let num = 3;
//boolean
let boolean = true;
//tömb(array)
let array = ['alma','körte',2];
//objektum(object)
let object = {'alma':2,'körte':3};

//2. feladat
/* Const változó értéke állandó, létrehozáskor meg kell adni neki értéket, nem megváltoztatható
Let változó létrehozáskor nem muszáj értéket megadni(deklarálás), változtatható. */
const konstans;
//Error!
const konstans = 2;
konstans = 3;
//Error!
let variable = 2;
variable = 5;

//3. feladat
/* Referencia szerinti átadás esetén az eredeti változó is módosul, érték átadás esetén,
az eredeti változó nem módosul.
Referenciaként tömb, objektum adható át. Érték esetén pedig a primitívek.*/

let list1 = ['alma', 'körte', 'narancs'];
let list2;
list1 = list2;
list2[0] = ['répa'];
//list1 első eleme módosult.

//4. feladat
const containsElement = (array, num) => {
    for (let i=0; i < array.length; i++){
        if (array[i] === num){
            return true;
        }else return false;
    }
};
containsElement([2,5,10],2);
console.log(containsElement([2,5,10],2));

//5. feladat
const oldestName = (obj) =>{
    let oldest = obj.age;
    for (let i =0; i < obj.length; i++){
        if ( obj[i].age > oldest ){
            oldest = obj[i];
        }
    }return oldest.name;
};
oldestName();

//6. feladat
const arr1 = [2,5,8];
const arr2 = [2,3,5,10];
const metszet = [];
for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i]===arr2[j]){
            metszet.push(arr[i])
        }
    }
}
console.log(metszet);

//7. feladat
modul.osszeadas(5,5);
console.log(modul.osszeadas(5,5));

//8. feladat
const twoDArray = (n,m) => {
    let array = [];
    for (let i = 0; i < n; i++ ){
        for (let j = 0; j < m; j++){
            array.push([i*i][j*j]);
        }
    }return array;
};
twoDArray(3,3);
console.log(twoDArray(3,3));