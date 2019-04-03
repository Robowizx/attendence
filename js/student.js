const {
    databases,
    tables,
    details
} = require('../configs/configs');
const pyShell = require('./../js/linker');
var type;
var studentDetails = {


    studentAttendence: function (student) {
        var obj = {
            "HEADER": {
                "DATABASE": databases,
                "TABLE_NAME": tables.s3,
                "REQUEST_TYPE": "insert"
            },
            "DATA": {
                "FIELDS": {
                    [details.s3.labId]: student[details.s3.labId],
                    [details.s3.current_team]: student[details.s3.current_team],
                    [details.s3.time_in]: student[details.s3.time_in],
                    [details.s3.time_out]: student[details.s3.time_out],
                    [details.s3.purpose]: student[details.s3.purpose]
                },
                "SET": null,
                "WHERE": null
            },
            "FOOTER": {
                "DATA ABOUT THE REQUEST": "just a test",
                "COMMENT": "THIS IS A TEST",
                "DEP": [{
                    "HEADER": {
                        "DATABASE": databases,
                        "TABLE_NAME": tables.s2,
                        "REQUEST_TYPE": "select"
                    },
                    "DATA": {
                        "FIELDS": [
                            details.s2.labId
                        ],
                        "SET": null,
                        "WHERE": {
                            [details.s2.labId]: student[details.s2.labId]
                        }
                    },
                    "FOOTER": {
                        "DATA ABOUT THE REQUEST": "just a test",
                        "COMMENT": "THIS IS A TEST",
                        "DEP": null,
                        "UPDATE": null
                    }
                }],
                "UPDATE": [{
                    "HEADER": {
                        "DATABASE": databases,
                        "TABLE_NAME": tables.s2,
                        "REQUEST_TYPE": "update"
                    },
                    "DATA": {
                        "FIELDS": null,
                        "SET": {
                            [details.s2.login_status]: student[details.s2.login_status]
                        },
                        "WHERE": {
                            [details.s2.labId]: student[details.s2.labId]
                        }
                    },
                    "FOOTER": {
                        "DATA ABOUT THE REQUEST": "just a test",
                        "COMMENT": "THIS IS A TEST",
                        "DEP": null,
                        "UPDATE": null
                    }
                }]
            }
        }
        console.log(JSON.stringify(obj));
       // pyShell.dataAppend(obj);
    }

}

module.exports = studentDetails;