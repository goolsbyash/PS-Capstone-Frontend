export default function Settings({ user }) {
  const { _id } = user;
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="firstName" placeholder="First Name:" />
        <input type="text" name="lastName" placeholder="Last Name:" />
        <input type="email" name="email" placeholder="Update email:" />
        <input
          type="password"
          name="oldPassword"
          placeholder="Current Password:"
        />
        <input
          type="password"
          name="newPassword"
          placeholder="Enter New Password:"
        />
        <input
          type="password"
          name="newPassword2"
          placeholder="Confirm New Password:"
        />
      </form>
    </div>
  );
}
