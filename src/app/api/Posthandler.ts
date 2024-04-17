// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";

// Define a POST handler function
export const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Extract data from the request body
        const { firstName, LastName, email, number, location, inquiry, message } = req.body;

        // Perform validation if needed

        // Do whatever processing or handling of the data you need here
        console.log('Received data:', { firstName, LastName, email, number, location, inquiry, message });

        // Respond with a success message
        res.status(200).json({ message: 'Data received successfully' });
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
