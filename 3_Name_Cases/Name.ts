let personName :string = '';

personName = prompt('What is your name?') || '';

let lowercase :string = personName.toLowerCase() ;
let uppercase :String = personName.toUpperCase() ;
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, here are your name in
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
} 
else{
    alert('Please fill your name !')
}