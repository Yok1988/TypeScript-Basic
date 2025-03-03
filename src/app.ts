//คำสั่ง tsc แปลง TypeScript >>JavaScript
//tsc -w หรือ tsc --watch รันออโต้ compile แบบ เรียลไทม์
//ตั้งค่าไฟล์ tsconfig.json
// ``  Atl+9+6 
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
console.log("==== ⚡ Any ============")
let myVar:any = "Yok"; //เป็น string ก็ได้
myVar = 10;//เป็น number ก็ได้
myVar = true;//เป็น boolean ก็ได้

function formatNumber(num:number){
    return num.toFixed(2);
}
let amount = 50.222 //TypeScript ถ้ากำหนดค่าเริ่มต้น จะกำหนดชนิดข้อมลตามค่าเริ่มต้น
console.log("any ไม่มีการตรวจสอบข้อมูล")
console.log(formatNumber(amount))


//ความสามารถของ unknown============
console.log("====🟢 ความสามารถของ unknown============")
function formatNumber2(num:number){
    return num.toFixed(2);
}
let money:unknown = "50.12345"
money = 50.12345
if(typeof money ==="number"){
    console.log(formatNumber2(money))
    console.log("unknown มีการตรวจสอบข้อมูล")
}


console.log("==== 🟢 Type Assertion as <ชนิดข้อมูล>============")
let username : unknown;
username = "Yok Pornthip";
//(username as string).toUpperCase();
//(<string>username).toUpperCase()
console.log((username as string).toUpperCase());
console.log((<string>username).toUpperCase());


console.log("==== 🟢 IF(){}else{} ============")
let amountX = 50;
let result:string;
let result1 :string;
if(amountX %2 === 0 ){
    result="เลขคู่"
}else{
    result="เลขคี่"
}
result1 = (amount %2 === 0 ) ?"เลขคู่":"เลขคี่" ; //ternary if ย่อ condition ? true : false ;
console.log(` ผลลัพธ์ = ${result}`);
console.log(` ternary ผลลัพธ์ = ${result1}`);

console.log("==== 🟢 switch case ============")
let service : number = 1;
let resultSer:string;
switch(service){
    case 1 :
        resultSer = "สอบถามยอดเงินในบัญชี"
        break;
    case 2 :
        resultSer = "ฝากเงิน"
        break;
    case 3 : 
        resultSer = "ถอนเงิน"
        break;
    default:
        resultSer = "หมายเลขบริการไม่ถูกต้อง"
        break;
}
console.log("switch case แสดงผลลัพธ์ ",resultSer);


console.log("==== 🟢 for loop ============")
for(let count : number = 1 ; count <=10 ;count++){
    console.log(count);
}
for(let count = 1 ; count <=10 ;count++){
    console.log(count);
}

console.log("==== 🚩 array ============")
let users : string[] = ["ก้อง","โจโจ้","นัท"]
console.log(users);
for(let i = 0 ; i < users.length ;i++){   
    console.log(users[i]);
}

console.log("==== ✅ forEach array ============")
users.forEach( (element)=> { 
    console.log(element)
})


console.log("==== 📌✅ (function)  ฟังก์ชั่น ============")
//ฟังก์ชันที่ไม่มีการรับและส่งค่า(void)
//ฟังก์ชั่นที่มีการรับค่า(Parameter)
//ฟังก์ชั่นที่มีส่งค่า(Return)
//ฟังก์ชั่นที่มีการรับและส่งค่า (Parameter & Return)

