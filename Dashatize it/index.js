// 17 ////////// Dashatize it //////////

function dashatize(num) {
    return num.toString()
        .replace(/([13579])/g, "-$1-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
}

console.log(dashatize(6815));

