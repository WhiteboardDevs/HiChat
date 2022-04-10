import json

# import requests

def handler(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello from function 1",
            # "location": ip.text.replace("\n", "")
        }),
        "headers": {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : True,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        }
    }
