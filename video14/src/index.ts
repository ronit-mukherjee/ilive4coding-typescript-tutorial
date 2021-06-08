interface Student {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}

interface StudentInput {
  name: string;
  age: number;
  sex: "M" | "F";
}

class School {
  private _boardToppers: Student[] = [];
  private _students: Student[] = [];

  constructor(name: string) {}

  private generateId(): number {
    return this._students.length + 1;
  }

  private getStudentById(id: number): Student | undefined {
    for (let i = 0; i < this._students.length; i++) {
      const stud = this._students[i];
      if (stud.id === id) {
        return stud;
      }
    }
  }

  addStudent({ name, age, sex: gender }: StudentInput) {
    const newStudent: Student = {
      id: this.generateId(),
      name,
      age,
      gender,
    };

    this._students.push(newStudent);
  }

  getAllStudents(): string[] {
    return this._students.map((student) => student.name);
  }

  set boardToppers(ids: string[]) {
    for (let i = 0; i < ids.length; i++) {
      const student = this.getStudentById(parseInt(ids[i]));
      if (student) {
        this._boardToppers.push(student);
      }
    }
  }

  get boardToppers(): string[] {
    return this._boardToppers.map((student) => student.name);
  }
}

const dps = new School("DPS");
dps.addStudent({ name: "Ronit", age: 18, sex: "M" });
dps.addStudent({ name: "Amit", age: 18, sex: "M" });
dps.addStudent({ name: "Sakshi", age: 17, sex: "F" });
dps.addStudent({ name: "Ankita", age: 17, sex: "F" });
dps.addStudent({ name: "Pankaj", age: 18, sex: "M" });

dps.boardToppers = ["1", "3"];

console.log(dps.boardToppers);
console.log(dps.getAllStudents());
