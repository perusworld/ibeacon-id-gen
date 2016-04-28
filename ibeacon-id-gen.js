var uuid = require('node-uuid');
var pad = require('pad');

function IBeaconIDGenerator(config) {
    this.uuid = config.uuid;
    this.major = config.major;
    this.minor = config.minor;
    this.txPower = config.txPower;
};

IBeaconIDGenerator.prototype.generate = function () {
    if (!this.uuid) {
        this.uuid = uuid.v4();
    }
    if (!this.major) {
        this.major = 00;
    }
    if (!this.minor) {
        this.minor = 00;
    }
    if (!this.txPower) {
        this.txPower = 51200;
    }
    var separted = this.uuid.toUpperCase().replace(/-/g, '').match(/.{1,2}/g).join(' ');
    var majorHex = pad(4, this.major.toString(16), '0').toUpperCase().replace(/-/g, '').match(/.{1,2}/g).join(' ');
    var minorHex = pad(4, this.minor.toString(16), '0').toUpperCase().replace(/-/g, '').match(/.{1,2}/g).join(' ');
    var txPowerHex = pad(4, this.txPower.toString(16), '0').toUpperCase().replace(/-/g, '').match(/.{1,2}/g).join(' ');
    return {
        input: {
            uuid: this.uuid.toUpperCase(),
            major: this.major,
            minor: this.minor,
            txPower: this.txPower
        },
        formatted: {
            uuid: separted,
            major: majorHex,
            minor: minorHex,
            txPower: txPowerHex
        },
        hcitool: {
            command: 'sudo hcitool -i hci0 cmd 0x08 0x0008 1E 02 01 1A 1A FF 4C 00 02 15 ' + separted + ' ' + majorHex + ' ' + minorHex + ' ' + txPowerHex
        }
    };
};

module.exports.IBeaconIDGenerator = IBeaconIDGenerator;