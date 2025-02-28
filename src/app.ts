//คำสั่ง tsc แปลง TypeScript >>JavaScript
//tsc -w หรือ tsc --watch รันออโต้ compile แบบ เรียลไทม์
//ตั้งค่าไฟล์ tsconfig.json

console.log("Hello TypeScript Apps 89")
function total(a:number,b:number){
    return a + b;
}
total(100,200)
total(10,20)


console.log("____  การนิยามตัวแปร _____")
//การนิยามตัวแปร
//const ,let ชื่อตัวแปร :ชนิดข้อมูล =ค่าเริ่มต้น
//ตัวอย่าง
//let fname : string = "Yok"
//age:number = 30;
//let isWorking :boolean=false;

const fname:string="Yok"; //ไม่สามารถเปลี่ยนแปลงข้อมูลได้
let fname2:string ='Yok2'//เปลี่ยนแปลงข้อมูลได้
fname2='YoK88';

let age:number=30;
let isWorking:boolean=false;

age +=6;

console.log(`ชื่อ = ${fname.toUpperCase()}`);
console.log(`อายุ = ${age}`);


//ตัวอย่างการใช้งาน Any & unknown ประโยชน์สามารถทำได้เมื่อต้องการอยากให้ข้อมูลมีการเปลี่ยนแปลงค่าได้ 
//ข้อเสียอาจเกิดข้อผิดพลาด
let myVar:any = "Yok"; //เป็น string ก็ได้
myVar = 10;//เป็น number ก็ได้
myVar = true;//เป็น boolean ก็ได้

function formatNumber(num:number){
    return num.toFixed(2);
}
let amount = 50.222 //TypeScript ถ้ากำหนดค่าเริ่มต้น จะกำหนดชนิดข้อมลตามค่าเริ่มต้น
console.log(formatNumber(amount))

let money:any="50.12345";
function formatNumber2(num:any){
    return num;
}
console.log(formatNumber2(money))





