const takeNumber = () => {
    const input = prompt('Enter any number')
    const number = JSON.parse(input);
    const add = number + 200;
    alert(add);
}
const showLocation = () => {
    const askForPermission = confirm('Are you willing to show your website location?');
    if (askForPermission === true) {
        alert('http://127.0.0.1:5500/Index.html');
    }
    else {
        alert("It's ok we respect your privacy");
    }
}