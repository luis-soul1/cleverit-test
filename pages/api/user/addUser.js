import { addUser } from "services/api";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  const userId = await addUser(req.body);
  res.json(userId);
  res.end();
};
