// https://www.w3schools.com/js/js_functions.asp
function JavaScriptGenericFunction() {
    console.log('Starting fetch call');
    const postsPromise = fetch('https://api.dailysmarty.com/posts')
    console.log('After fetch call');
    console.log(postsPromise);
    console.log('After program has run');
}