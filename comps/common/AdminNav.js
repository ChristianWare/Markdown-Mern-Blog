import styles from "./AdminNav.module.css";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className={styles.container}>
      <Link href='/admin' legacyBehavior>
        <a>Admin</a>
      </Link>
      <div className={styles.menu}>
        <Link href='/admin' legacyBehavior>
          <a>Dashboard</a>
        </Link>
        <Link href='/posts' legacyBehavior>
          <a>Posts</a>
        </Link>
        <Link href='/users' legacyBehavior>
          <a>Users</a>
        </Link>
        <Link href='/comments' legacyBehavior>
          <a>Comments</a>
        </Link>
        <Link href='/comments' legacyBehavior>
          <a>Contacts</a>
        </Link>
        <Link href='admin/post/create' legacyBehavior>
          <a>New Post</a>
        </Link>
      </div>
    </div>
  );
};
export default AdminNav;
