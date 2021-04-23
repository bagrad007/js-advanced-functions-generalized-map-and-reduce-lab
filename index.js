function map(source, callback) {
    let arr = []

    for (let i = 0; i < source.length; i++) {
        let theElement = source[i]
        arr.push(callback(theElement))
    }

    return arr;
}


function reduce(source, callback, int) {
    let arr = (!!int) ? int : source[0]
    let i = (!!int) ? 0 : 1

    for (; i < source.length; i++) {
        arr = callback(source[i], arr)
    }
    return arr
}