import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Parse the request body if needed
        // For example, if you're receiving JSON data:
        const data = JSON.parse(req.body);

        // Now you can work with the parsed data
        console.log('Data:', data);

        // Send a response
        res.status(200).json({ name: 'John Doe' });
    } else {
        // Handle other HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// import { type NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   return NextResponse.json('Hello from API!');
// }