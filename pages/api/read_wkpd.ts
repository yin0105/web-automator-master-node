import Axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  let { name = '' } = request.query;

  if (Array.isArray(name)) {
    name = name.join(' ');
  }

  try {
    const { data } = await Axios.get(
      `https://en.wikipedia.org/wiki/${encodeURI(name)}`,
    );

    response.json(data);
  } catch (error) {
    if (!error.isAxiosError) {
      console.log(error);
    }

    response.status(404).json('');
  }
};
