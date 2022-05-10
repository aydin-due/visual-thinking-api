const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking API welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});

app.get("/v1/students", (request, respone) => {
    const allStudents = StudentController.getStudents()
    respone.json(allStudents);
});

app.get("/v1/students/emails", (request, respone) => {
    const emailsWithCertification = StudentController.getEmailsWithCertification()
    respone.json(emailsWithCertification);
});

app.get("/v1/students/credits", (request, respone) => {
    const studentsAbove500Credits = StudentController.getStudentsAbove500Credits()
    respone.json(studentsAbove500Credits);
});