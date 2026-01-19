import React from 'react';

import styles from './Welcome.module.css';

interface WelcomeProps {
    userName: string,
    message?: string,
}

const Welcome: React.FC<WelcomeProps> = ({userName, message}) => {
    const currentDate = new Date();
    const visits = 42;

    return (
        <article className={styles.container}>
            <header>
                <h1 className={styles.title}>Welcome, {userName}</h1>
            </header>
            <section>
                <p className={styles.date}>Today is {currentDate.toLocaleString('ru-RU')}</p>
                <div className={styles.visits}>Current visits: {visits}</div>
                {message && <div className={styles.message}>Сообщение: {message}</div>}
            </section>
        </article>
    )
}

export default Welcome;