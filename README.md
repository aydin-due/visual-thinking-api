# Visual Thinking API
API de los estudiantes en los cursos de Visual Thinking

## Dependencias
- **Jest (versión 26.1.0).** Para la realización de pruebas unitarias mediante `npm test` y GitHub Actions
- **ESLint (versión 8.15.0).** Para corregir errores en el formato del código mediante `npm run linter-fix`
- **Express (versión 8.15.0).** Para correr el servidor localmente mediante `npm run server`

## Diseño de Componentes
![api-components](https://user-images.githubusercontent.com/54159730/167732362-c91328f8-8a0e-4d53-a1a2-2255387840f6.png)
- **Reader.** Permite la lectura de la base de datos de los estudiantes en formato JSON
- **StudentService.** Contiene las funciones para obtener: 
  - todos los estudiantes
  - los correos de los estudiantes con certificación
  - los estudiantes cuyos créditos son mayores a 500
- **StudentController.** Permite hacer uso de las funciones en StudentService a partir de la base de datos de Visual Thinking
- **Server.** Llama a los métodos en StudentController según los endpoints del localhost 

## ¿Cómo interactuar con el API?
Se necesita descargar el repositorio y dirigirse al directorio en el que se encuentra almacenado para ejecutar el comando `npm run server`
En el navegador, puedes ingresar a tres direcciones diferentes según la información que se desea consultar.
- **localhost:3000/v1/students** - Consultar todos los estudiantes en la base de datos de Visual Thinking
![students](https://user-images.githubusercontent.com/54159730/167736215-1e765243-be06-4e81-878c-02a0c8e2a80d.png)

- **localhost:3000/v1/students/emails** - Consultar los correos de los estudiantes con certificación 
![emails](https://user-images.githubusercontent.com/54159730/167736243-97170600-487b-4048-8e22-9622ad114881.png)


- **localhost:3000/v1/students/credits** - Consultar los estudiantes cuyos créditos son mayores a 500
![credits](https://user-images.githubusercontent.com/54159730/167736262-ad5eff33-f47f-49b0-8681-aefa4ca89c97.png)
