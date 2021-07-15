# Node Typescript REST API

Download the Project and type in your terminal

### `npm i`

and start your server with

### `npm start`

Make sure you use the node version defined in the 

## `cat .nvmrc` : v14.17.3

then you can type `nvm use`

If you want to run your Docker Container with MongoDB locally just type

## `docker compose up -d`

and start your container.

You can display your data with a tool like Robo 3T and create a local connection at `localhost:27017`.

The endpoint is available at `localhost:3000`.

In your Terminal `curl --request GET localhost:3000`.

You can start sending `POST` request to `localhost:3000/users` and create your first user and make sure you add a json body in Postman Client like:

```
{
    "email":"janedane@hotmail.com",
    "password":"123456"
}

```

You can authentifiy the user `POST` request to `localhost:3000/auth` and still with the same json body in Postman Client like:

```
{
    "email":"janedane@hotmail.com",
    "password":"123456"
}

```

you'll get a response like:

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJGbEUyTmwzMTMiLCJlbWFpbCI6ImphbmVkYW5lQGhvdG1haWwuY29tIiwicHJvdmlkZXIiOiJlbWFpbCIsInBlcm1pc3Npb25MZXZlbCI6MSwicmVmcmVzaEtleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6WzI0LDg0LDEwMyw0Nyw3NSwyMzksMTc4LDEzNCwyMDgsMjEyLDEwMiw1MSwxNjgsMTM4LDgyLDE0XX0sImlhdCI6MTYyNjMzMjkzMSwiZXhwIjoxNjI2MzY4OTMxfQ.KqwUoK7oqoEw-Jz99a8etUGV38Q3hprAv-u0B5IHpfg",
    "refreshToken": "CLD2tH8XShRb60gsgxPeVI+OWTzhifrzHkgInUayDq1RGZYsUPeiHyKtoLP81UKt2m0I1WByF9pPf0Cwh3FcCQ=="
}

```

and use the `"accessToken"` to make a `GET` request for a specific user `http://localhost:3000/users/FlE2Nl313` for example and try to get the response.

Don't forget to use the `"accessToken"` as the `Authorization`: `Bearer Token` and paste the token in the `Token` value.

Run tests

### `npm test`