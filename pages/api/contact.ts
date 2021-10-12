import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type inputType = {
  email: string;
  name: string;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

    const newMessage = {
      email,
      name,
      message,
    };

    // ? MonoClient???
    let client: MongoClient;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.lzo9m.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      // @ts-ignore
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();

      res.status(500).json({ message: 'Storing message failed.' });
      return;
    }

    client.close();

    res.status(201).json({
      message: 'Successfully stored message!',
      yourMessage: newMessage,
    });
  }
};

export default handler;
