import styles from './UserList.module.css';
import React from 'react';

interface User {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}

interface UserListProps {
    users: User[];
    showActiveOnly?: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, showActiveOnly = false }) => {
    const filteredUsers = showActiveOnly
        ? users.filter(user => user.isActive)
        : users;

    return (
        <div className={styles.container}>
            <h2>Список пользователей</h2>

            <p className={styles.filterInfo}>
                {showActiveOnly
                    ? 'Показываются только активные пользователи'
                    : 'Показываются все пользователи'
                }
            </p>

            {filteredUsers.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>Нет пользователей для отображения</p>
                    {showActiveOnly && users.length > 0 && (
                        <p>Попробуйте показать всех пользователей</p>
                    )}
                </div>
            ) : (
                <div className={styles.listContainer}>
                    {filteredUsers.map(({ id, name, age, isActive }, index) => (
                        <div key={id} className={styles.userCard}>
                            <p className={styles.index}>№: {index + 1}</p>
                            <p className={styles.name}>
                                Имя: {name}
                                {isActive && <span className={styles.activeIcon}>✅</span>}
                            </p>
                            <p className={age > 30 ? styles.ageHighlight : styles.age}>
                                Возраст: {age}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Статистика */}
            <div className={styles.stats}>
                <p>Всего пользователей: {users.length}</p>
                <p>Активных: {users.filter(u => u.isActive).length}</p>
                <p>Старше 30 лет: {users.filter(u => u.age > 30).length}</p>
                <p>Показано: {filteredUsers.length}</p>
            </div>
        </div>
    );
};

export default UserList;