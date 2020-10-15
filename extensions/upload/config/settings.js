module.exports = {
//   provider: "backblaze-b2",
//   providerOptions: {
//    accountId: process.env.B2_ACCOUNT_ID,
//      applicationKey: process.env.B2_APP_KEY,
//      bucket: process.env.B2_BUCKET
//    }
  provider: 'aws-s3',
  providerOptions: {
    accessKeyId: env('AWS_ACCESS_KEY_ID'),
    secretAccessKey: env('AWS_ACCESS_SECRET'),
    region: env('AWS_REGION'),
    endpoint: env('AWS_ENDPOINT'),
    params: {
      Bucket: env('AWS_BUCKET'),
    }
  }
}