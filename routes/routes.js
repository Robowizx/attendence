const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const attendence = require('../js/student');
const teamDetails = require('../configs/teamDetails');
const moment = require('moment');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
const {
    databases,
    tables,
    details
} = require('../configs/configs');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
router.get('/', (req, res) => {
    res.render('index', {
        teamDetails : teamDetails
    });
});

router.post('/attendence', /*urlencodedParser
       ,*/ function (req, res) {
    var time_in = moment().format("YYYY/MM/DD HH:mm:ss");
    var time_out = moment().format("YYYY/MM/DD HH:mm:ss");
    var data;
   /* var test =  {
        [details.s3.labId]: req.body.rail_id,
        [details.s3.current_team]: req.body.current_team,
        [details.s3.purpose]: req.body.purpose,
        [details.s3.time_in]: time_in,
    }*/
    console.log(req.body);
    console.log(req.query);
    if(req.query.type==1){
        data = {
            [details.s3.labId]: req.query[details.s3.labId],
            [details.s3.current_team]: req.query[details.s3.current_team],
            [details.s3.purpose]: req.query[details.s3.purpose],
            [details.s3.time_in]: time_in,
        }
        attendence.studentAttendence(data);
    } else if (req.query.type == 2) {
        data = {
            [details.s3.labId]: req.query[details.s3.labId],
            [details.s3.time_out]: time_out,
        }
        attendence.studentAttendence(data);
    }
});


module.exports = router;