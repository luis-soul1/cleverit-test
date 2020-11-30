import { getUsers } from "services/api";

export default async (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-type", "application/json")
  const userList = await getUsers()
  res.json(userList)
  res.end()
};
