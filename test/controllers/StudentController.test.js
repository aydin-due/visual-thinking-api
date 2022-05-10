const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para StudentController", () => {
    test("1: Consultar todos los estudiantes con todos sus campos", () => {
        const allStudents = StudentController.getStudents();
        expect(allStudents.length).toBe(51);
        expect(allStudents[allStudents.length-1].name).toBe("Clare");
    }),
    test("2. Consultar los emails de todos los estudiantes que tengan certificación", () => {
        const emailsWithCertification = StudentController.getEmailsWithCertification();
        expect(emailsWithCertification.length).toBe(29);
        expect(emailsWithCertification[0].id).toBe("6264d5d89f1df827eb84bb23");
    }),
    test("3. Consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const studentsAbove500Credits = StudentController.getStudentsAbove500Credits();
        expect(studentsAbove500Credits.length).toBe(27);
        expect(studentsAbove500Credits[0].name).toBe("Warren");
    });
});