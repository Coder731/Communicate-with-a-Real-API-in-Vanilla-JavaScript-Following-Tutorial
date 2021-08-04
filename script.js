// https://www.w3schools.com/js/js_functions.asp
function JavaScriptGenericFunction() {
    console.log('Starting fetch call');
    const postsPromise = fetch('https://api.dailysmarty.com/posts')
    console.log('After fetch call');
    console.log(postsPromise);
    console.log('After program has run');

    postsPromise// promise here on left...
        .then(data => data.json())//....returns a response on left of arrow|now convert that response to json on right of arrow
        .then(data)
}