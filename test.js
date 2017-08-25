let readlineSync = require('readline-sync');

process.stdin.on('end', function() {
    process.stdout.write('end');
});

function gets(cb){
    process.stdin.setEncoding('utf8');
    process.stdin.resume();
    process.stdin.on('data', function(chunk) {
        console.log('start!');
        process.stdin.pause();
        cb(chunk);
    });
    console.log('请输入后回车');
}

gets(function (reuslt) {
    console.log("["+reuslt+"]");
});