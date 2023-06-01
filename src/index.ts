import { APIGatewayEvent, Context } from 'aws-lambda';
import {S3Client} from '@aws-sdk/client-s3'
import {GetObjectCommand} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: 'ap-northeast-2'
})
export async function handler (event: APIGatewayEvent, context: Context) {
    const responseBody = await s3Client.send(new GetObjectCommand({
        Bucket: process.env.S3Bucket,
        Key: process.env.S3Key
    })).then(res=>Buffer.from(res.Body).toString('utf-8'))

    console.dir(responseBody)
}
