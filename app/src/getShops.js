import { DynamoDB } from 'aws-sdk';

const dynamoDB = new DynamoDB.DocumentClient();

async function getShopData(ShopID) {
    const params = {
        TableName: 'ip-Shoplist',  // あなたのDynamoDBテーブル名
        Key: { storeid }
    };

    const response = await dynamoDB.get(params).promise();

    return response.Item;
}

