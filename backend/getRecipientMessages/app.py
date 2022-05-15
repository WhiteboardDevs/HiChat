import json
import boto3
# import requests

client = boto3.client('dynamodb')

def handler(event, context):
    print()
    print(event)
    print(context)
    print()
    data = client.get_item(
        TableName='Message',
        Key={
            'recipient': {
                'S': 'praveen'
            },
            'timestamp': {
                'S': '1651466322'
            }
        }
    )

    response = {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            "Content-Type" : "application/json",
                "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Methods" : "OPTIONS,POST",
                "Access-Control-Allow-Credentials" : True,
                "Access-Control-Allow-Origin" : "*",
                "X-Requested-With" : "*"
        },
    }
    
    return response
