let personName :string = '';

personName = prompt('What is Your Name?') || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, would you like to learn some Python today?`)
}
else{
    alert('You Have to fill your name !')
}