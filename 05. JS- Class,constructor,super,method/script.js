// 1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. Bu metod
//  width və height dəyərlərini istifadə edərək düzbucaqlının 
//  sahəsini hesablayacaq və geri qaytaracaq.

// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının 
// perimetrini hesablayacaq və geri qaytaracaq.

// Reactangle sinifinin instanceni yaradın və onun sahəsini və 
// perimetrini hesablayın.

// class Rectangle {
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }


// calculateArea() {
//     return this.width*this.height
// }

// calculatePerimeter() {
//     return (this.width+this.height)*2
// }
// }

// const myRectangle = new Rectangle(5, 10);

// console.log("Area of the rectangle:", myRectangle.calculateArea()); 
// console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter());


// class Rectangle {
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }


// calculateArea() {
// ...
// }

// calculatePerimeter() {
// ...
// }
// }

// const myRectangle = new Rectangle(5, 10);

// console.log("Area of the rectangle:", myRectangle.calculateArea()); 
// console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter());


// 2) BankAccount Class-ı Yaratmaq:

// BankAccount adlı bir class yaradın.
// Bu class-da aşağıdakı xüsusiyyətlər olsun:
// accountNumber (hesab nömrəsi) — Hesabın nömrəsi (string).
// balance (balans) — Hesabın balansı (rəqəm, ilkin olaraq 0 olaraq 
// təyin edilsin).
// Metodlar:

// deposit(amount): Bu metod, istifadəçiyə hesabına müəyyən məbləği 
// əlavə etməyə imkan verəcək.
// Şərt: Əgər əlavə ediləcək məbləğ müsbət deyilsə (sıfır və ya mənfi), 
// xəta mesajı verilməlidir.
// withdraw(amount): Bu metod, istifadəçiyə hesabından müəyyən 
// məbləği çıxarmağa imkan verəcək.
// Şərt 1: Çıxarılacaq məbləğ müsbət olmalıdır.
// Şərt 2: Hesabda kifayət qədər vəsait yoxdursa, xəta mesajı verilməlidir.
// Şərt 3: Əgər çıxarılacaq məbləğ sıfır və ya mənfi olarsa, xəta 
// mesajı verilməlidir.

// BankAccount class-ından iki nümunə yaradın:
// Birinci hesab üçün:
// Hesab nömrəsi: "101"
// İlkin balans: 1000
// İkinci hesab üçün:
// Hesab nömrəsi: "102"
// İlkin balans: 500
// Əməliyyatlar:

// Hesab 101 (Alice):
// 500 məbləği əlavə etsin.
// 200 məbləği çıxarsın.
// Hesab 102 (Bob):
// 100 məbləği çıxarsın.
// 700 məbləği əlavə etsin.
// Əməliyyatların Nəticələri:

// Hər iki hesab üzrə əməliyyatları yerinə yetirəndən sonra hər birinin
//  balansını çap edin.
// Əgər əməliyyat düzgün yerinə yetirilməyibsə, müvafiq xəta mesajını 
// göstərmək vacibdir.


// class BankAccount {
// constructor(accountNumber, balance = 0) {
// this.accountNumber=accountNumber
// this.balance=balance
// }

// deposit(amount) {
// if(amount <= 0){
//     this.balance+=amount
//     console.log(`account: ${this.accountNumber}, deposited: ${amount}, new balance: ${this.balance}`);
    
// }
// else if(amount>this.balance){
//     console.log(`${this.accountNumber} Əlavə ediləcək məbləğ müsbət olmalıdır.`);
    
// }
// }

// withdraw(amount) {
//     if(amount <= 0){
//         console.log(`${this.accountNumber} Çıxarılacaq məbləğ müsbət olmalıdır.`);
        
//     }
//     else if(amount>this.balance){
//         console.log(`${this.accountNumber} Hesabda kifayət qədər vəsait yoxdur`);
        
//     }
//     else {
//         this.balance -= amount;
//         console.log(`account: ${this.accountNumber}, withdrew: ${amount}, new balance: ${this.balance}`);
//       }
// }
// }

// const account1 = new BankAccount('101', 1000); 
// const account2 = new BankAccount('102', 500); 

// // Alice-in əməliyyatları
// account1.deposit(500); 
// account1.withdraw(200);

// // Bob-un əməliyyatları
// account2.withdraw(100); 
// account2.deposit(700); 


// 3) Aşağıdakı parameter-lrə sahib bir Human class-ı yaradın.
// Human class
// - Name,
// - Surname,
// - Age (default sıfır),
// - gender
// - nationality
// - getFullName() - method
// - getBirthYear() - method - new Date() - currentYear

// Human classından miras alan User class-ı yaradın.
// User class
// - Username
// - Email
// - isAdmin (true/false)
// - isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
// - password (minimum 5 simvol olmalidir)
// - bio (maxlength 30 ola biler)
// - changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa,
// newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
// Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
// - changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
// Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.
// Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
// User class-ından istifadə edib bir neçə user yaradın və bir users array-inə yığın.

// Global functions.

// 1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir.

// 2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir.

// 3. Login() - parameter olaraq users array-i, bir username və bir password qəbul edir. Və əgər
// a. username-də bir user tapılmazsa, 'user not found!'
// b. username ve ya password yalnish olarsa, 'incorrect username or password'
// c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'another user currently logged in' return etmelidir
// d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir
// 3. LogOut() - parameter olaraq bir users array-i ve username qebul, Eger,
// a. Daxil olunmush username-de bir user tapmazsa 'user not found'
// b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'user did not logged in to log out!'
// c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur ve 'successfully' logged out

// 4. CreateUser() - parameter olaraq bir array ve bir User obj qebul edir ve hemin user-i array-e elave edir


// 5. DeleteUser() - parameter olaraq bir array ve bir username qebul edir ve daxil olunmush username-de user tapilarsa hemin User-i silir,
// tapmazsa o zaman 'user not found' return edir.



class Human {
    constructor(name, surname, age = 0, gender, nationality){
        this.name = name;
        this.surname = surname;
        this.age = typeof age === 'number' ? age : 0;
        this.gender = gender;
        this.nationality = nationality;
    }

    getFullName(){
        return(`${this.name} ${this.surname}`)
    }

    getBirthYear(){
        const currentYear = new Date().getFullYear();
        return typeof this.age === 'number' ? currentYear - this.age : "invalid age";
    
    }


}


class User extends Human {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio = '') {
      super(name, surname, age, gender, nationality);
      this.username = username;
      this.email = email;
      this.isAdmin = isAdmin;
      this.isLogged = false;
      this.password = password.length >= 5 ? password : "password 5 simvoldan chox olmalidir"
      this.bio = bio.length <= 30 ? bio : "bionun max uzunlugu 30 ola biler"
    }
}

let users = [
    new User(
      "John",
      "Doe",
      "Male",
      "American",
      "johndoe",
      "john.doe@example.com",
      false,
      "password123",
      "A bit about John.",
      30
    ),
    new User(
      "Jane",
      "Doe",
      "Female",
      "British",
      "janedoe",
      "jane.doe@example.com",
      true,
      "securepassword",
      "Jane's bio goes here.",
      28
    ),
    new User(
      "Alex",
      "Smith",
      "Non-binary",
      "Canadian",
      "alexsmith",
      "alex.smith@example.com",
      false,
      "alexspassword",
      "All about Alex.",
      35
    ),
    new User(
      "Emily",
      "Clark",
      "Female",
      "Australian",
      "emilyclark",
      "emily.clark@example.com",
      false,
      "emilyspassword",
      "Explorer and photographer.",
      26
    ),
    new User(
      "Michael",
      "Brown",
      "Male",
      "German",
      "michaelbrown",
      "michael.brown@example.com",
      true,
      "michaelspass",
      "Coffee enthusiast. Avid reader.",
      32
    ),
    new User(
      "Luis",
      "Gomez",
      "Male",
      "Spanish",
      "luisgomez",
      "luis.gomez@example.com",
      false,
      "luispassword",
      "Music lover, Guitar player.",
      29
    ),
    new User(
      "Sophia",
      "Lopez",
      "Female",
      "Mexican",
      "sophialopez",
      "sophia.lopez@example.com",
      true,
      "sophiaspassword",
      "Digital marketer and content creator.",
      31
    ),
  ];


console.log(users[3].getFullName()); 
console.log(users[4].getBirthYear());
