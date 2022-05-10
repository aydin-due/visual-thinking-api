class StudentService {
    static getStudents(students){
        console.log(students)
        return students;
    }

    static getEmailsWithCertification(students){
        const emailsWithCertification = students.filter((student) => student.haveCertification === true);
        return emailsWithCertification;
    }

    static getStudentsAbove500Credits(students){
        const studentsAbove500Credits = students.filter((student) => student.credits >= 500);
        return studentsAbove500Credits;
    }
}

module.exports = StudentService