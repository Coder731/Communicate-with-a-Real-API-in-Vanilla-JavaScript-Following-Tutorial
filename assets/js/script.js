// https://www.w3schools.com/js/js_functions.asp
function JavaScriptGenericFunction() {
    console.log('Starting fetch call');
    const postsPromise = fetch('https://api.dailysmarty.com/posts')
    console.log('After fetch call');
    console.log(postsPromise);
    console.log('After program has run');

    postsPromise// promise here on left...
        .then(data => data.json())//....returns a response on left of arrow|now convert that response to json on right of arrow
        .then(data => {//....and then this in turn gets passed to the this then
            //so the data in the first of the two thens on left of arrow
            // is not the same as 
            // data in the second then
            // as this data in the second then is going to be referring to what got returned
            // which is the json formatted version
            console.log(data);//this line and previous are critical to working with APIs
        })
}