import { MongoClient } from 'mongodb';

export default async function getQuestions(req, res) {
  try {
      const { level, quantity } = req.query;
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db().collection('questions');
      const questions = await db
        .aggregate([
          { $match: { difficultyLevel: level } },
          { $sample: { size: +quantity } },
        ])
        .toArray();
        client.close();
        for (const question of questions) {
      question.answers.sort(() => Math.random() - 0.5);
        };
      res.json(questions);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(
        'There was a problem connecting to the database, please try again later.'
      );
  }
}