function appendToDisplay(value) {
    content = document.getElementById('display').value
    document.getElementById('display').value = content + value
}

function clearDisplay() {
   document.getElementById('display').value = ''

}
 function notImplemented(){
    alert('Not Implemented yet!')
}

function calculate() {
    content = document.getElementById('display').value
    console.log(content)
    try {
        console.log(eval(content));
        document.getElementById('display').value = eval(content);
    } catch (error) {
        return 'Error';
    }
}

function deleteLastCharacter() {
    content = document.getElementById('display').value
    slicedContent = content.slice(0,-1)
    document.getElementById('display').value = slicedContent
}