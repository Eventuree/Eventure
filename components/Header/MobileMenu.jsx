import styles from "./MobileMenu.module.css";

const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.profile}>
          <img src="" alt="avatar" className={styles.avatar} />
          <div>
            <div className={styles.name}>Імʼя</div>
            <div className={styles.nick}>@name</div>
          </div>
        </div>

        <nav className={styles.nav}>
          <button className={styles.navItem}>Мої івенти</button>
          <button className={styles.navItem}>Зареєстровані івенти</button>
          <button className={styles.navItem}>Архівовані івенти</button>

          <button className={styles.createBtn}>Створити івент</button>

          <button className={styles.editBtn}>Редагувати профіль</button>

          <button className={styles.logoutBtn}>Вийти</button>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
