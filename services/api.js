const API_URL = "https://arsene.azurewebsites.net";

const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/User`);
    const data = await response.json();
    return data.reverse();
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (params) => {
  const esc = encodeURIComponent;
  const queryParams = Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");

  try {
    const response = await fetch(`${API_URL}/User?${queryParams}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API_URL}/User`, requestOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, getUser, addUser };
