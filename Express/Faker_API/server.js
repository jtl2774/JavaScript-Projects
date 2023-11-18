const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};


app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    const newCombinedObject = {
        user: newFakeUser, 
        company: newFakeCompany
    };
    res.json(newCombinedObject);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );