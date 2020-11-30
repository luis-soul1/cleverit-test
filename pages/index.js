import { useState } from "react";
import UserList from "components/userList";
import UserDetail from "components/userDetail";
import AddUser from "components/addUser";
import SearchBar from "components/searchBar";
import Button from "components/button";
import Modal from "components/modal";
import Panel from "components/panel";
import UserSvg from "assets/userSvg";

import styles from "./home.module.scss";

const Home = ({ users }) => {
  const [allUsers, setAllUsers] = useState(users);
  const [userInfo, setUserInfo] = useState();
  const [showModal, setShowModal] = useState(false);

  const getUserById = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/getUser?id=${id}`
    );
    const [userDetail] = await res.json();
    setUserInfo(userDetail);
  };

  return (
    <>
      <h1 className={styles.title}>Clever Test</h1>

      <section className={styles.actionsPanel}>
        <SearchBar setAllUsers={setAllUsers} />
        <Button
          text="Add user"
          action={() => setShowModal(!showModal)}
          icon={<UserSvg width={12} height={12} />}
        />
      </section>

      <section className={styles.panelList}>
        <Panel title="User names">
          <UserList users={allUsers} getUserById={getUserById} />
        </Panel>

        <Panel title="Users info">
          {userInfo && (
            <UserDetail
              id={userInfo.id}
              email={userInfo.email}
              lastname={userInfo.lastname}
              username={userInfo.username}
            />
          )}
        </Panel>
      </section>

      {showModal && (
        <Modal
          isOpen={showModal}
          handleClose={setShowModal}
          title={"Add user"}
          content={
            <AddUser setAllUsers={setAllUsers} setShowModal={setShowModal} />
          }
        />
      )}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
  const data = await res.json();

  return { props: { users: data } };
}

export default Home;
