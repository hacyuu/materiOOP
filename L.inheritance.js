//no 5
// class book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;   
//         this.year = year;

//     }

//     bookdetail() {  
//         return `${this.title} buku ini di buat oleh ${this.author} di ${this.year}`;
//     }
// }

//  class Ebook extends book {
//     constructor(title, author, year, harga) {
//         super(title, author, year);
//         this.harga = harga;
//     }

//     bookdetail() {
//         return `${this.title} buku ini di buat oleh ${this.author} di ${this.year} dan harga nya adalah ${this.harga}`;
//     }
//  }


//  const buku1 = new book("buku1", "author1", "2020");
//  console.log(buku1.bookdetail());
//  const buku2 = new Ebook("buku2", "author2", "2021", "10000");
//  console.log(buku2.bookdetail());

 // no 6


// class Employee{
//         constructor(nama, gajibulanan){
//             this.nama = nama;
//             this.gajibulanan = gajibulanan;
//         }
//         hitungGajiTahunan(){
//             return` ${this.nama} ${this.gajibulanan*12};`
//     }
//     }
    
//     class Manager extends Employee{
//         constructor(nama, gajibulanan, departemen){
//             super(nama, gajibulanan);
//             this.departemen = departemen;
//         }
//         hitungGajiTahunan(){
//         return `nama karyawan :${this.nama}, gaji bulanan :${this.gajibulanan}, nama manager :${this.nama} departemen: ${this.departemen}, bonus: 10%, total gaji: ${this.gajibulanan * 12 + (this.gajibulanan / 10)};`
     
//     }
// }

//     let abix = new Manager('Abiyyu', 500000, 'Kominfo');
//     console.log(abix.hitungGajiTahunan());
    
//     let karyawan2 = new Manager('Denggol', 1000000, 'IT');
//     console.log(karyawan2.hitungGajiTahunan());

//no 7

// class product {
//     constructor(idproduct,name, price) {
//         this.idproduct = idproduct;
//         this.name = name;
//         this.price = price;
//     }
//     totalproduct(qty) {
//         return  qty * this.price ;
//     }
// }

// class electronic extends product {
//     constructor(idproduct,name, price, garansi, qty) {
//         super(idproduct,name, price);
//         this.garansi = garansi;
//         this.qty = qty;
//     }

//     detailproduct() {
//     return`id product : ${this.idproduct}, name : ${this.name}, price : ${this.price}, garansi : ${this.garansi}, qty : ${this.qty}, total product : ${this.totalproduct(this.qty)}`;       
//     }
// }

// let product1 = new product('laptop' , 1000000, 1);
// let product2 = new electronic( 1, 'laptop', 1000000, 1, 9);  
// console.log(product2.detailproduct())

// soal8

class bankaccount {
    constructor(nama,norek, saldo) {
        this.nama = nama;
        this.norek = norek;
        this.saldo = saldo;

    }   
    setorsaldo(uang) {
        return this.saldo = uang + this.saldo;
    }
    tariksaldo(uang) {
        return this.saldo = this.saldo - uang;
    }
    mentransfer(uang) {
        return this.saldo = this.saldo - uang;
    }
 }

 let rekening1 = new bankaccount("apay", 123456, 100000);
 console.log(rekening1.tariksaldo(50000));  
 console.log(rekening1.mentransfer(50000));
 console.log(rekening1.setorsaldo(50000));
 let rekening2 = new bankaccount("apay", 123456, 100000);
 console.log(rekening2.tariksaldo(50000));  
 console.log(rekening2.setorsaldo(10000));
 let rekening3 = new bankaccount("apay", 123456, 100000);
 console.log(rekening3.tariksaldo(50000));  
 console.log(rekening3.setorsaldo(50000));