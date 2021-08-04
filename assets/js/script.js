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
            // This is how to parse json data in JavaScript
            // because the post object was logged to the console.
            // So, now, calling the key
            // called posts
            // Alternatively if this returned a set of guides
            // would call .guides
            // So it is dependent on what the API returns.
            // This is part of why taking this in a 
            // step by step process
            // Because if try to go right from beginning 
            // all the way to calling all of those 
            // post titles for example
            // then may not realise the way the data flow changes
            // Now have posts.
        })
}