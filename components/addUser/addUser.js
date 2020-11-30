import { useState } from "react";

import Input from "components/input";
import Button from "components/button";

import styles from "./adduser.module.scss";

const AddUser = ({ setAllUsers, setShowModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
  });

  const { username, lastname, email } = formData;

  const getFormData = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/addUser`,
      requestOptions
    );

    setFormData({
      username: "",
      lastname: "",
      email: "",
    });
    updateUsersList();
  };

  const updateUsersList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
    const data = await res.json();

    setAllUsers(data);
    setShowModal(false);
  };

  return (
    <form className={styles.addUserForm} onSubmit={submitForm}>
      <Input
        inputLabel="User name"
        name="username"
        onHandleInput={getFormData}
        placeholder="User name"
        required
        type="text"
        value={username}
      />

      <Input
        inputLabel="Last Name"
        name="lastname"
        onHandleInput={getFormData}
        placeholder="Last Name"
        required
        type="text"
        value={lastname}
      />

      <Input
        inputLabel="Email"
        name="email"
        onHandleInput={getFormData}
        placeholder="Email"
        required
        type="email"
        value={email}
      />

      <Button type="submit" text="Save user" />
    </form>
  );
};

export default AddUser;
