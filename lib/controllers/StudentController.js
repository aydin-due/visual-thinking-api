const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

class StudentController{
    static getStudents(){
        const students = Reader.readJsonFile("visualpartners.json")
        const allStudents = StudentService.getStudents(students)
        return allStudents
    }

    static getEmailsWithCertification(){
        const students = Reader.readJsonFile("visualpartners.json")
        const emailsWithCertification = StudentService.getEmailsWithCertification(students)
        return emailsWithCertification
    }

    static getStudentsAbove500Credits(){
        const students = Reader.readJsonFile("visualpartners.json")
        const studentsAbove500Credits = StudentService.getStudentsAbove500Credits(students)
        return studentsAbove500Credits
    }
}

module.exports = StudentController