var mraa = require('mraa');
var SerialPort = require('serialport').SerialPort;
var gpio44 = new mraa.Gpio(44);
gpio44.dir(mraa.DIR_OUT);

var port = new SerialPort('/dev/ttyS0',{
        baudRate : 57600
        //parser: SerialPort.parsers.readline('\n')
});
var ana
port.on('open',function(){
        console.log('ok');
        port.on('data',function(data){
                setTimeout(function(){
                        gpio44.write(0);

                 }, data.readInt16LE(0,1) * 100);
                gpio44.write(1);
                console.log(data.readInt16LE(0,1));

        });
});
