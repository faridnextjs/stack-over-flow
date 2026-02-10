import Link from "next/link";

const Profile = () => {
  return (
    <ul>
      <li>
        <Link href="/profile/1">User 1</Link>
      </li>
      <li>
        <Link href="/profile/2">User 2</Link>
      </li>
      <li>
        <Link href="/profle/3">User 3</Link>
      </li>
      <li>
        <Link href="/profile/4">User 4</Link>
      </li>
    </ul>
  );
};
export default Profile;
