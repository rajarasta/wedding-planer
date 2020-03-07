User routes
./controllers/users.js

//////////

/signup - 
method: POST
function: signup
middleware: none

required input: 
    JSON:
    email: req.body.email, // string
    password: req.body.password, // string
    confirmPassword: req.body.confirmPassword, // string
    userHandle: req.body.userHandle // string

response: 
    JSON: 
    tokenID // string


//////////

/login
method: POST
function: login
middleware: none

required input:
    JSON:
    email: req.body.email, // string
    password: req.body.password // string

response:
    JSON:
    tokenID // string 


//////////

FirebaseAuth middleware:

input:
    request header:
    {"Authorization": `Bearer ${tokenId}`}

    Sa svakim requestom koji ima ovaj middleware ukljucen, potrebno je poslati dodatni request header, kao gore.
    tokenId se dobije kao response login ili signup processa.
    Dakle: u za sve ostale requestove ga je potrebno ukljuciti u Axios request (ili koji god plugin da koristis).

output:
    permission to access asset


//////////

/user/image
method: POST
function: uploadImage 
middleware: FirebaseAuth (provjera tokenID-a)

required input:
    image/.jpeg/.png

response:
    JSON message (Image updated successfully | Error)
 
Uploadaje avatar/sliku usera i ne bi se smjelo koristit u druge svrhe.

//////////

/user 
method: POST
function: addUserDetails
middleware: FirebaseAuth (provjera tokenID-a, smije pristupiti samo user koji sebe editira)

input:
    JSON objekt (ubacuje sve sto se posalje u dokument pa pripaziti koji se fieldovi salju)

response:
    JSON message (User updated successfully | Error)


//////////

/user
method: POST
function: getAuthenticatedUser
middleware: FirebaseAuth (provjera tokenID-a, smije pristupiti samo user koji sebe gleda)

response:
    JSON objekt usera