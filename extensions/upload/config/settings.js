module.exports = {
//   provider: "backblaze-b2",
//   providerOptions: {
//    accountId: process.env.B2_ACCOUNT_ID,
//      applicationKey: process.env.B2_APP_KEY,
//      bucket: process.env.B2_BUCKET
//    }
  provider: 'aws-s3',
  providerOptions: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
    endpoint: process.env.AWS_ENDPOINT,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    params: {
      Bucket: process.env.AWS_BUCKET,
    }
  }
}