import { APIGatewayEvent, Context } from 'aws-lambda';
export async function handler (event: APIGatewayEvent, context: Context) {
    console.dir(event)
}
