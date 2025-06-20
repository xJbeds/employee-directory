import employees from '#db/employees'

import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.send("Hello employees!")
})


app.get('/employees', (request, response) => {
  response.send(employees)
})

app.get('/employees/random', (request, response) => {
  const randomEmployeeIndex = Math.floor(Math.random() * employees.length)
  response.send(employees[randomEmployeeIndex])
})

app.get('/employees/:id', (request, response) => {
  const { id } = request.params;
  const index = Number (id) - 1

  if(!employees[index]) {
    response.status(404).send("There is no employee with that id.")
  }

  response.send(employees[index]);
})

export default app;