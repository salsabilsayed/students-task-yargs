const fs = require('fs');

const addStudent = (id,name,subject,grade,comment) => {
    const students = getAllStudents();

    const duplicateStudents = students.find(student => student.id === id);

    if(duplicateStudents){
        console.log('Error duplicate value');
    }
    else{
        students.push({
            id,
            name,
            subject,
            grade,
            comment
        });

        saveStudents(students);
    }
}

const removeStudent = id => {
    const students = getAllStudents();
    const studentToKeep = students.filter(student => student.id !== id);
    saveStudents(studentToKeep);
}

const readStudent = id => {
    const students = getAllStudents();
    const selectedStudent = students.find(student => student.id === id);
    console.log(`student name is ${selectedStudent.name} and his grade of ${selectedStudent.subject}
     is ${selectedStudent.grade}. comments: ${selectedStudent.comment || 'no comments available'}`);
}

const listStudents = () => {
    const students = getAllStudents();
    students.forEach(student => {
        console.log(`student name is ${student.name} and his grade is ${student.grade}`);
    });
}

// function for returning student data from json file

const getAllStudents = () =>{
    try{
        const studentJson = fs.readFileSync('students.json').toString();
        return JSON.parse(studentJson);
    }
    catch(e){
        return [];
    }
}


// save new data into json file

const saveStudents = (students) => {
    const studentData = JSON.stringify(students);
    fs.writeFileSync('students.json',studentData);
}

module.exports ={
    addStudent,
    removeStudent,
    readStudent,
    listStudents
}