# Node JS Ecommerce REST API

### Dependencies
- express
- mongoose
- dotenv
- nodemon

### Stack
- ReactJS and react-router-dom 
- NodeJs and Express
- Mongo DB
- Postman and MongoDB compass for testing and validations


## Build Process
### Boiler Plate
- Prepared server and database connection with express and MONGODB
- Created Routes and Models for **auth, cart, order** and **products** - boilerplate

### Authentication
- Creating register route, to register users securely to the DB
- using CryptoJs to hash user password for security
- Login route created
- get-a-user route created to get one user by ID
- get-all-users route created to get all registered users
- update-a-user route created for user's details to be updated 
- delete-a-user route created for user's details to be deleted by their ID
- user-stats route created that'll monitor registered number of users per month (for a chart for admin later) 

### Products
- Created route for admin to add / create products
- Created open route to get single product
- Created open route to get all products
- Created feature to get products by category, or title or newly added products
- Created route for admin to Delete products

### Orders
- Created route for admin to add / create orders
- Created open route to get single order
- Created open route to get all orders
- Created route for admin to Delete orders


### Carts
- Created route for users to add / create cart
- Created open route to display all carts for users
- Created route for users to Delete products from cart