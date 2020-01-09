/* Buffer() is deprecated due to security and usability issues.
    Please use the 
    Buffer.alloc()
    Buffer.allocUnsafe()
    Buffer.from()
  methods instead.*/
var buf = new Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
//buf.toString([encoding][, start][, end])
console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   // outputs: abcde
console.log(buf.toString('utf8', 0, 5));    // outputs: abcde
console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde

// toJson
var buf = new Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//concat
var buffer1 = new Buffer.from('TutorialsPoint ');
var buffer2 = new Buffer.from('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 content: " + buffer3.toString());

//compare
var buffer4 = new Buffer.from('ABC');
var buffer5 = new Buffer.from('ABCD');
var result = buffer4.compare(buffer5);

if (result < 0) {
    console.log(buffer4 + " comes before " + buffer5);
} else if (result === 0) {
    console.log(buffer4 + " is same as " + buffer5);
} else {
    console.log(buffer4 + " comes after " + buffer5);
}
// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
/*
    targetBuffer − Buffer object where buffer will be copied.
    targetStart − Number, Optional, Default: 0
    sourceStart − Number, Optional, Default: 0
    sourceEnd − Number, Optional, Default: buffer.length
*/
var buffer1 = new Buffer.from('ABCD');

//copy a buffer
var buffer2 = new Buffer.alloc(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//buf.slice([start][, end])
/*
    start − Number, Optional, Default: 0
    end − Number, Optional, Default: buffer.length
*/
var buffer1 = new Buffer.from('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//buffer.lenght
var buffer = new Buffer.from('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);