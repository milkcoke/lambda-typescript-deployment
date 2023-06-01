import { S3Event, Context } from 'aws-lambda';
import {S3Client} from '@aws-sdk/client-s3'
import {GetObjectCommand} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: 'ap-northeast-2'
})
export async function handler (s3Event: S3Event, context: Context) {
    console.dir(s3Event.Records)
    const s3Record = s3Event.Records[0]
    console.dir(s3Record)

    // const res = await s3Client.send(new GetObjectCommand({
    //     Bucket: process.env.S3Bucket,
    //     Key: process.env.S3Key
    // })).then(res=>res.Body as ReadableStream)
}
