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
            data.posts.forEach((item) => {//Had posts. Now start iterating over... using a for Each loop
            // for Each takes an argument of item
            // So, this is the item that we're iterating over
            // Then use another arrow function:
                // Now have a block
                // So can say:
                console.log(item.title);// when run
                // this prints out each on of the titles
                // inside of the API
 
        }) 
}