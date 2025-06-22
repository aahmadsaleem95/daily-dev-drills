// We will get an error of syntaxError because Rest parameter must be last formal parameter
function getItems(list, ...args, moreItem){
    return [...list, ...args, moreItem];
}

getItems(["berry", "apple"], "pear", "kiwi");