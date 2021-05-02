type Gender = "M" | "F";

interface HumanBeing{
    gender: Gender
}

interface Person extends HumanBeing{
    name:string
    age:number
}

class Student implements Person{
    protected subjects:string[];
    constructor(public name:string,public age:number,public gender:Gender,public yearOfJoining:number){
        this.subjects = []
    }

    allocateSubjects(subject:string){
        this.subjects.push(subject)
    }
}

class CollegeStudent extends Student{
    constructor(name:string,age:number,gender:Gender, yearOfJoining:number, private stream:string){
        super(name,age,gender,yearOfJoining);
    }

    //giev string of concatinated subjects
    getAllSubjects(){
        return this.subjects.join(",");
    }
}

//const stud1 = new Student("Ronit",20,2020);
// stud1.allocateSubjects("English");
// stud1.allocateSubjects("Hindi");

const cStud1:CollegeStudent = new CollegeStudent("Amit",25,"M",2018,"Science")
cStud1.allocateSubjects("Physics");
cStud1.allocateSubjects("Chemestry");

//console.log(stud1);
console.log(cStud1);
console.log(cStud1.getAllSubjects());

