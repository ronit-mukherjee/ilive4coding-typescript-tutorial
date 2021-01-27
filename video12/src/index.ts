//Syntax of class

class Student{
    // public name:string;
    // age: number;
    // gender: string;
    public readonly id:number;

    private subjects: string[];

    constructor(public name:string,public age:number, public gender:string){
        // this.name = n;
        // this.age = age;
        // this.gender = gender;
        this.subjects = [];
        this.id = Math.random();
    }

    allocateSubjects(subject:string){
        //Functionality/checks
        this.subjects.push(subject);
    }

    getInfo(this:Student,x:string){
       return `Student's name: ${this.name} ${x}` 
    }

    getSubjects(){
        return this.subjects;
    }
}

const stud1 = new Student("Amit",10,"M");
console.log(stud1);
//stud1.id = 101;
//console.log(stud1);
// console.log(stud1.getInfo());

//const tempObj = {name: "Kapil", getInfo:stud1.getInfo};
//console.log(tempObj.getInfo("Hello"));

//stud1.allocateSubjects("Maths");
//stud1.allocateSubjects("English");
//stud1.subjects.push("Computer");
// console.log(stud1.getSubjects());
// stud1.allocateSubjects("Computer");
// console.log(stud1.getSubjects());