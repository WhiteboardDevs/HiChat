import json
import boto3
import time
# import requests

client = boto3.client('dynamodb')

def handler(event, context):
    assert event['body']
    print(event['body'])
    body = json.loads(event['body'])

    resp = client.put_item(
        TableName='Message',
        Item={
            'recipient': {
                'S': body['to']
            },
            'timestamp': {
                'S': str(int(time.time()))
            },
            'sender': {
                'S': body['from']
            },
            'message': {
                'S': body['message']['message']
            }
        }
    )

    response = {
        'statusCode': 201,
        'body': json.dumps(resp),
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
