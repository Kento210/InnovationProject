import AWS from 'aws-sdk';

const getShops = async () => {
  AWS.config.update({
    region: 'us-west-2',  // 使用するAWSリージョンを設定します
    // 必要に応じて、認証情報を設定します。
    // accessKeyId: 'your-access-key',
    // secretAccessKey: 'your-secret-access-key',
  });

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: 'Shops',  // DynamoDBのテーブル名を設定します
  };

  try {
    const data = await docClient.scan(params).promise();
    return data.Items;
  } catch (err) {
    console.log('Error', err);
  }
};

