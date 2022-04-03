import json

# import requests

def handler(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello from function 2",
            # "location": ip.text.replace("\n", "")
        }),
    }
