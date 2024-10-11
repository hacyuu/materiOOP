function Person(firstname,lastname,age) {
    this.firstname = firstname ;
    this.lastname = lastname ;
    this.age = age
    
    this.showDetail= function(name){
        console.log(`hai ${name} , nama saya ${this.firstname}`);
        
    }


}

    const apay = new Person("apay","mungkung","34") ;
    apay.showDetail("mungkung");


    //no 2

     function persegipajang(panjang,lebar) {
        this.panjang = panjang ;
        this.lebar = lebar ; 

        this.hitungluas= () => {
            return `luas nya  adalah ${this.panjang * this.lebar} `;    
        }

        this.hitungkeliling = () => {
            return `kelilingnya adalah ${2*(this.panjang + this.lebar )}`;
        }

        }

     const luas = new persegipajang("23","4");
     console.log(luas.hitungluas());
     
     const keliling = new persegipajang("25","5");
     console.log(keliling.hitungkeliling());
    
