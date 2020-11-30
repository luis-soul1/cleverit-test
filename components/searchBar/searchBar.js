import { useState } from "react";
import Button from "components/button";
import Input from "components/input";
import SearchSvg from "assets/searchSvg";

import styles from "./searchbar.module.scss";

const SearchBar = ({ setAllUsers }) => {
  const [searchTxt, setSearchTxt] = useState("");

  const onHandleInput = async ({ target: { value } }) => {
    setSearchTxt(value);
    if (value == "") {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
      const data = await res.json();
      setAllUsers(data);
    }
  };

  const getUserByName = async (name) => {
    if (name !== "") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/getUser?username=${name}`
      );
      const data = await res.json();
      setAllUsers(data);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <Input
        name="seach"
        type="text"
        placeholder="Search user"
        onHandleInput={onHandleInput}
        withIcon={<SearchSvg />}
      />

      <Button text="Search" action={() => getUserByName(searchTxt)} />
    </div>
  );
};

export default SearchBar;
