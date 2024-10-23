// class person {
//     constructor(firstname,lastname,age) {
        
//             this.firstname = firstname ;
//             this.lastname = lastname ;
//             this.age = age
        
//     }
//     sayhello(name){
//         console.log(`hai ${name} , nama saya ${this.firstname}`);
        
//     }

//     }
        




//     const apay = new Person("apay","mungkung","34") ;
//     apay.sayhello("mungkung");
//     console.info(apay);
    


//     //no 2

    class persegipanjang {
      
    constructor(panjang,lebar) {
//property
        this.panjang = panjang;
        this.lebar = lebar; 
     
//method
        this.hitungluas= function () {
            return `luas nya  adalah ${this.panjang * this.lebar} `
            
        }  
        
        this.hitungkeliling = function() {
            return `kelilingnya adalah ${2*(this.panjang + this.lebar )}`
        }
        
    }
}

//meanampilkan
     const luas = new persegipanjang(23,4);
     console.log(luas.hitungluas());
     
     const keliling = new persegipanjang(25,5);
     console.log(keliling.hitungkeliling());
    

//soal 3

class rekeningBank {
    constructor(norek, saldo) {
    //property
        this.norek = norek ;
        this.saldo = saldo ;
        
    }
//method
     tariksaldo(uang) {
          return(this.saldo = this.saldo - uang);
          
        }

        setorsaldo(uang) {
           return(this.saldo = uang + this.saldo );
           
        }
    }

//menampilkan
const rekening1 = new rekeningBank(123456,100000);
console.log(rekening1.tariksaldo(50000));
console.log(rekening1.setorsaldo(50000));

const rekening2 = new rekeningBank(123456,150000);
console.log(rekening2.tariksaldo(50000));
console.log(rekening2.setorsaldo(10000));

const rekening3 = new rekeningBank(123456,200000);
console.log(rekening3.tariksaldo(50000));
console.log(rekening3.setorsaldo(50000));

//no 4

class bank{
    constructor(namabank,kantorcabang) {
        this.namabank = namabank ;
        this.kantorcabang = kantorcabang ;


    }
    
    menambahkankantorbank(kantor) {
        this.kantorcabang.push(kantor);

    }

    hapus(kantor) {
        this.kantorcabang.splice(kantor,1);
    }

    menampilkankantorcabang() {
        console.log(this.kantorcabang);
        
    }
}

const bank1 = new bank("bank1",["kantor1","kantor2","kantor3"]);
bank1.menambahkankantorbank("kantor4");
bank1.hapus(1);
bank1.menampilkankantorcabang();