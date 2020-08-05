module.exports = {
    provider: "backblaze-b2",
    providerOptions: {
      accountId: process.env.B2_ACCOUNT_ID,
      applicationKey: process.env.B2_APP_KEY,
      bucket: process.env.B2_BUCKET
    }
  }