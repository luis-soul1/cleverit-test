import Error from "components/error";
import styles from "./userList.module.scss";

const UserList = ({ users, getUserById }) =>
  users.length ? (
    users.map(
      ({ id, username, lastname }) =>
        username && (
          <p className={styles.name} key={id} onClick={() => getUserById(id)}>
            {username} {lastname}
          </p>
        )
    )
  ) : (
    <Error errorMsg="No se han encontrado usuarios" />
  );

export default UserList;
