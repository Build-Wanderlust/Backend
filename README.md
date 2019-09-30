`GET /api/users` will return all of the users in the application. A user will have:

    {
      firstname: *string*,
      lastname: *string*,
      email: *string*,
      id: *integer*
    }
   
 `POST /api/users/register` will return the registered user if successful, it will also provide a token. A user should be posted as:
 
     {
      firstname: *string*,
      lastname: *string*,
      email: *string*,
      password: *string*
    }

`POST /api/users/login*` will return the logged in user if succesful, it will also provide a token. A user should be posted as:

    {
      email: *string*,
      password: *string*
    }
