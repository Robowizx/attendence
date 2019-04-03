var dataAppend = function (studentData) {
    let {
        PythonShell
    } = require('python-shell')
    var path = require("path");
    var options = {
        scriptPath: path.join(__dirname, '/path'),
        args: [studentData]
    }
    var attendence = new PythonShell('scriptName.py', options);
    attendence.on('message', function (message) {
        window.alert(message);
    })
};

module.exports = dataAppend;