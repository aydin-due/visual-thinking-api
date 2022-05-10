const StudentService = require("../../lib/services/StudentService");

describe("Tests para StudentService", () => {
    test("Requerimiento 1: Consultar todos los estudiantes con todos sus campos", () => {
        const students = [{id: "1", name:"student1"}, {id: "1", name:"student1"}];
        const allStudents = StudentService.getStudents(students)
        expect(allStudents.length).toBe(2);
        expect(allStudents[0].id).toBe("1");
    }),
    test("Requerimiento 2: Consultar los emails de todos los estudiantes que tengan certificación", () => {
        const students = [{email:"student1@gmail.com", haveCertification:true}, {email:"student2@gmail.com", haveCertification:false}];
        const emailsWithCeritifcation = StudentService.getEmailsWithCertification(students)
        expect(emailsWithCeritifcation.length).toBe(1);
        expect(emailsWithCeritifcation[0].email).toBe("student1@gmail.com");
    }),
    test("Requerimiento 3: Consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const students = [{id:1, credits:199}, {id:2, credits:501}];
        const studentsAbove500Credits = StudentService.getStudentsAbove500Credits(students)
        expect(studentsAbove500Credits.length).toBe(1);
        expect(studentsAbove500Credits[0].id).toBe(2);
    });
});