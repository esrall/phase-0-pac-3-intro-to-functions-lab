function shout(string) {
    return string.toUpperCase("Hello");
}

function whisper(string) {
    return string.toLowerCase("HELLO");
}
function logShout(string) {
    console.log(string.toUpperCase()); 
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    if (string.toLowerCase() === 'hello')
    return 'I can\'t hear you!'
    else if (string.toUpperCase() === 'HELLO')
    return "YES INDEED!";
    else (string === "I love you, Grandma")
    return"I love you, too."
}