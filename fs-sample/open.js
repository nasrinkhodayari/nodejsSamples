/* Flag & Description
1-	r:Open file for reading. An exception occurs if the file does not exist.
2-	r+:Open file for reading and writing. An exception occurs if the file does not exist.
3-	rs:Open file for reading in synchronous mode.
4-	rs+:Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.
5-  w:Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
6-  wx:Like 'w' but fails if the path exists.
7-	w+:Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
8-  wx+:Like 'w+' but fails if path exists.
9-  a:Open file for appending. The file is created if it does not exist.
10-	ax:Like 'a' but fails if the path exists.
11- a+:Open file for reading and appending. The file is created if it does not exist.
12- ax+:Like 'a+' but fails if the the path exists. */
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});