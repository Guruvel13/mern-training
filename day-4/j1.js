var a = [1,"two","three"]
console.log(a)

var b = [{
    "name" : "guru",
    "class" : "CSE A"
},
{
    "name" : "aji",
    "class" : "CSE A"
},
{
    "name" : "arjun",
    "class" : "CSE A"
}]
b.forEach((person) => {
    console.log(person.name,person.class)
})