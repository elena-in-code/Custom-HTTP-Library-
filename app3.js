const http = new EasyHTTP;

//Get users:
/*http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

//User data
const data = {
    name: "John Doe",
    username: "jony",
    email: "jd@gmail.com"
}

//Create a user - post
/*http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

//update user
/*http.put("https://jsonplaceholder.typicode.com/users/2", data)
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

//Delete user
http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .catch(err => console.log(err));