const UserDetail = ({ id, username, lastname, email }) => (
  <div className="users-content">
    <p>"email": {email}</p>
    <p>"lastName": "{lastname}"</p>
    <p>"name": "{username}"</p>
    <p>"id": {id}</p>
  </div>
);

export default UserDetail;
