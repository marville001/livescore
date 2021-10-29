const AWS = require('aws-sdk')

AWS.config.update({region:"us-east-2"})

exports.handler = async (event, context, callback) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({
        apiVersion: '2012-08-10',
    })
    
    const params = {
        TableName: "live-score"
    }
    
    try{
        const data = await documentClient.scan(params).promise();


        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(data),
        };
        
        return response
    }catch(err){
        console.log(err)
    }
};