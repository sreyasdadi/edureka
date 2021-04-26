const fs = require('fs');
const argv=require('yargs');
console.log(argv.argv._[0]);

const path = "./"+argv.argv._[0];
if(fs.existsSync(path)){
        fileExists();
}
else{
    fs.appendFileSync('app.txt',argv.argv._[0] +"\n");
    fs.writeFileSync(argv.argv._[0],'You are Awesome');
}


function fileExists() {
    console.log('File already exists');
    return 1;
}
