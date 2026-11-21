const person = {
    name:'John Doe',
    age: 25,
    job: 'Developer'
}
console.log('Name ', person['name']);

for (let key in person) {
    console.log(key, person[key]);
    
}

