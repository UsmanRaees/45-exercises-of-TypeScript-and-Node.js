let age:number = 26;

if(age < 2) {
    console.log("person is a baby.");
} 
else if(age >= 2 && age < 4) {
    console.log("person is a toodler.");
}
else if(age >=4 && age < 13) {
    console.log("person is a kid.");
}
else if(age >= 13 && age < 20) {
    console.log("person is a teenager");
}
else if(age >=20 && age < 65) {
    console.log("person is an adult.");
}
else{
    console.log("person is an elder");
}