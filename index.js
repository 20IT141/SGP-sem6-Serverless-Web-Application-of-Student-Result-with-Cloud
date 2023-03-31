
const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

var tableName = "Student-Result";

exports.handler = (event , context , callback) =>{
    console.log(event.StudentID)
    
    var params = {
        TableName : tableName,
        Key:{
            "StudentID" : event.StudentID
        }
    }
   console.log("StudentID:", event.StudentID);
        if (!event.StudentID || event.StudentID.trim().length === 0) {
         callback("Invalid StudentID");
     return "Invalid StudentID";
}

    docClient.get(params, function(err,data){
        if (err) {
            return callback(err);
        }
        // Return data to the caller
        return callback(null, data);
    })
    
};
