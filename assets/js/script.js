// https://www.w3schools.com/js/js_functions.asp
function JavaScriptGenericFunction() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts')

    postsPromise// promise here on left...
        .then(data => data.json())//....returns a response on left of arrow|now convert that response to json on right of arrow
        .then(data => {//....and then this in turn gets passed to the this then
            //so the data in the first of the two thens on left of arrow
            // is not the same as 
            // data in the second then
            // as this data in the second then is going to be referring to what got returned
            // which is the json formatted version
            data.posts;// begin parsing through data returned (where the data is an object called posts)
            // to allow rendering on a screen etc.
        })
}