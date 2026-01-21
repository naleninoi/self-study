import styles from './UserList.module.css';
import React, { useState } from 'react';

interface User {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    isFavorite?: boolean;
}

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.isActive).length;
    const usersOver30 = users.filter(u => u.age > 30).length;

    const [activityFilter, setActivityFilter] = useState<'all' | 'active' | 'inactive'>('all');

    const filteredUsers = users.filter((user: User) => {
        switch (activityFilter) {
            case 'active':
                return user.isActive;
            case 'inactive':
                return !user.isActive;
            default:
                return true;
        }
    });

    return (
        <div className={styles.container}>
            <h2>Список пользователей</h2>

            <p className={styles.filterInfo}>
                {activityFilter === 'active' && 'Показываются только активные пользователи'}
                {activityFilter === 'inactive' && 'Показываются только неактивные пользователи'}
                {activityFilter === 'all' && 'Показываются все пользователи'}
            </p>

            <div className={styles.filters}>
                <button onClick={() => setActivityFilter('all')}
                        className={activityFilter === 'all' ? styles.active : ''}>
                    Все
                </button>
                <button onClick={() => setActivityFilter('active')}
                        className={activityFilter === 'active' ? styles.active : ''}>
                    Активные
                </button>
                <button onClick={() => setActivityFilter('inactive')}
                        className={activityFilter === 'inactive' ? styles.active : ''}>
                    Неактивные
                </button>
            </div>

            {filteredUsers.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>Нет пользователей для отображения</p>
                    {activityFilter !== 'all' && users.length > 0 && (
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
                <p>Всего пользователей: {totalUsers}</p>
                <p>Активных: {activeUsers}</p>
                <p>Старше 30 лет: {usersOver30}</p>
                <p>Показано: {filteredUsers.length}</p>
            </div>
        </div>
    );
};

export default UserList;