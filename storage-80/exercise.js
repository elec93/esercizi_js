const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setInLocal(user){
  localStorage.setItem("user", JSON.stringify(user))
}
setInLocal(user)

function getInLocal(){
  console.log(JSON.parse(localStorage.getItem("user"))); 
}
getInLocal();
