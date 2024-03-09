document.getElementById('hello').addEventListener('click', () => {
    alert('Hello!!!')
});

document.getElementById('world').addEventListener('click', () => {
    alert('Hello World BUDDY!!!');
});

document.getElementById('dateTime').addEventListener('click', () => {
    alert(new Date().toLocaleString());
});