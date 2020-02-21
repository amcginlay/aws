var AWS = require('aws-sdk');
s3 = new AWS.S3();
s3.listBuckets((err, data) => {
    data.Buckets.forEach(bucket => {
        console.log(bucket.Name);
    });
});
