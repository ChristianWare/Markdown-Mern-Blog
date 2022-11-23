import AdminNav from "../common/AdminNav";
import styles from './AdminLayout.module.css'

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AdminNav />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};
export default AdminLayout;
