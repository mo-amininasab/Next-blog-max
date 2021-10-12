import { NextApiRequest, NextApiResponse } from 'next';

type inputType = {
  email: string;
  name: string;
  message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message }: inputType = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // store in a db
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: 'Successfully stored message!', yourMessage: newMessage });
  }
};

export default handler;
