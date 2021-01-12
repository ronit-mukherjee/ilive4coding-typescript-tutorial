//UNION
let currentPadding = 10;
function addPadding(paddingValue: number | string) {
  if (typeof paddingValue === "string") paddingValue = Number(paddingValue);

  currentPadding += paddingValue;
}

addPadding(10);
console.log(currentPadding);

let arr: (number | string)[] = [1, "String"];

//INTERSECTION
enum Role {
    TEACHER = "Teacher",
    STUDENT = "Student",
    DIRECTOR = "Director"
}

//ALIAS 1
type BaseRes = {
  success: boolean;
  error?: string;
};

//ALIAS 2
type Teacher = {
  age: number;
  exp: number;
};

//ALIAS 3
type Student = {
  class: number;
  subjects: string[];
};

//ALIAS 4
type MainRes = {
    data: Teacher | Student
}

//ALIAS 5
type Res = BaseRes & MainRes;

type ResFor = Role.TEACHER | Role.STUDENT | "director";

let baseRes = {
  success: true,
  error: "",
};


function getResponseFor(resFor:ResFor):Res | undefined {
  let teacher = {
    age: 10,
    exp: 5,
  };

  let student = {
    class: 5,
    subjects: [],
  };

  if (resFor === "Teacher") {
    return { data: teacher, ...baseRes };
  } else if (resFor === "Student") {
    return { data: student, ...baseRes };
  }
}

getResponseFor(Role.TEACHER);

//ALIAS
