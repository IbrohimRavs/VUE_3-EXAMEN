import { all } from "@/components"

let api = 'https://fakestoreapi.com/products'
let loginApi = 'https://reqres.in/api/login'
function getAll() {
    fetch(api)
    .then(res => res.json())
    .then(data => all.getAll = data)
}
function spliceAll() {
    fetch(api)
    .then(res => res.json())
    .then(data => all.spliceAll = data.splice(16, 20))
}
function splice() {
    fetch(api)
    .then(res => res.json())
    .then(data => all.splice = data.splice(0,4))
}

function getById(id) {
    fetch(api + '/' + id + '/')
    .then(res => res.json())
    .then(data => {
        all.getById = data
    })
}

function loginPost() {
    fetch(loginApi, {
        headers: {"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify({
            username: all.email,
            password: all.password,
        })  
    })
    .then(res => res.json())
    .then(data => {
        try {
            if(data.token){
                window.localStorage.setItem('token', data.token)
                alert('togri')
                location.reload()
            }else(
                alert('no togri')
                )
            } catch (error) {
                alert('no togri')
            }
        })
    }
    
    
    
    export{ getAll, spliceAll, splice, loginPost, getById }