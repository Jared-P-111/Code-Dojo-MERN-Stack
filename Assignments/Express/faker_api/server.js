const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 3000;

app.get('/api/user', (req, res) => {
  const user = { user: faker.name.fullName() };
  console.log(user);
  res.status(200).json(user);
});

app.get('/api/company', (req, res) => {
  const company = { company: faker.company.name() };
  console.log(company);
  res.status(200).json(company);
});

app.get('/api/company/user', (req, res) => {
  const companyUser = { company: faker.company.name(), user: faker.name.fullName() };
  res.status(200).json(companyUser);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
