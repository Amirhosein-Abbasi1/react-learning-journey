//Define a class to represent a persons name
class Name{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    //Method to display the full name
    render(){
        document.writeln(
            "Hello my full name is " + this.firstName + " " + this.lastName
        )
    }
}

//Define a class that extends Name to include more personal info
class Bio extends Name{
    constructor(firstName, lastName, age, major){
        //Call parent class constructor
        super(firstName, lastName);
        //Set additional properties: age and major
        this.age = age
        this.major = major
    }

    //Method to display age and major
    render2(){
        document.writeln(
            " and Im " + this.age + " years old and my major is " + this.major
        )
    }
}

//Create an instance
const obj1 = new Name("Amirhosein", "Abbasi");
const obj2 = new Bio("Amirhosein", "Abbasi", 17, "Computer");

//Call (render, render2) methods
obj1.render();
obj2.render2();