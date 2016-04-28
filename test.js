var ibeaconidgen = require('./ibeacon-id-gen');


var config = {
    uuid: null,
    major: null,
    minor: null
};

if (6 == process.argv.length) {
    config.uuid = process.argv[2];
    config.major = parseInt(process.argv[3]);
    config.minor = parseInt(process.argv[4]);
    config.txPower = parseInt(process.argv[5]);
} else if (5 == process.argv.length) {
    config.major = parseInt(process.argv[2]);    
    config.minor = parseInt(process.argv[3]);    
    config.txPower = parseInt(process.argv[4]);
} else if (4 == process.argv.length) {
    config.major = parseInt(process.argv[2]);    
    config.minor = parseInt(process.argv[3]);    
}

var generator = new ibeaconidgen.IBeaconIDGenerator(config);

console.dir(generator.generate(), {depth: null});