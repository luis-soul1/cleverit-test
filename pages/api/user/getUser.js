import { getUser } from "services/api";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  const userDetail = await getUser(req.query);
  res.json(userDetail);
  res.end();
};
