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
                console.log(item.title);// and the reason able to do this is because...
            });//(Aside: close out for Each curly bracket and parenthesis)
            // .... from above: .... the reason able to do this is because this data (on line with forEach, two code lines up from here)...
            // .... and when I call posts...
            // .... what this (posts two code lines up from here) is doing is ...
            // .... this is going to grab:
            // the array called posts
            // and then we're iterating over it.
            // Each item in that array (called posts) ...
            // .... will have access to ...
            // .... and that (item) is ...
            // .... it's own object (that is, item in array is it's own object) ...
            // .... and so, I can then call:
            // item.title
            // if you go and look at the API
            // you can see right here we have 
            // posts (the object's name)
            // and then you have this set of arrays.
            // see api at:
            // https://api.dailysmarty.com/posts
            // have first one of id 414
            // then have next one of 413 (see api above or video at this time in link here: https://youtu.be/12iA-xSuM4E?t=904 )
            // So, all I am doing is inside of these nested objects 
            // I am just going to be calling title
            // and I have access to it because we are iterating over that
            // and so I have: 
            // console log item title
 
        }) 
}