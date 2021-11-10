
const yargs = require('yargs');
const students = require('./students');

yargs.command({
    command:'add',
    describe:'Add notes',
    builder:{
        id:{
            describe:'This is the unique identifier for each student',
            type:'number',
            demandOption:true
        },
        name:{
            describe:'This is the name of added student',
            type:'string',
            demandOption:true
        },
        subject:{
            describe:'This is the subject of student to be added',
            type:'string',
            demandOption:true
        },
        grade:{
            describe:'This is grade of student to be added',
            type:'number',
            demandOption:true
        },
        comment:{
            describe:'This is the comment to be added',
            type:'string',
            demandOption:false
        }
    },
    handler:(argv)=>{
        students.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment);
    
    }

})

yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
            describe:'id of the student to be deleted',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        students.removeStudent(argv.id);
    }
});

yargs.command({
    command:'read',
    describe:'read one of the students information',
    builder:{
        id:{
            describe:'id of selected student for reading',
            type:'number',
            demandOption:true
        }
    },
    handler:(argv)=>{
        students.readStudent(argv.id)
    }
});

yargs.command({
    command:'list',
    describe:'list students names and grade',
    handler:()=>{
        students.listStudents();
    }
})

yargs.parse();
