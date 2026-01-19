import Welcome from './Welcome/Welcome.tsx';

import './App.css';
import UserList from './UserList/UserList.tsx';

function App() {
    const users = [
        {id: 1, name: 'Анна', age: 25, isActive: true},
        {id: 2, name: 'Иван', age: 32, isActive: false},
        {id: 3, name: 'Мария', age: 28, isActive: true},
        {id: 4, name: 'Алексей', age: 45, isActive: true},
    ];

    return (
        <div className="app-container">
            <Welcome userName="Viktor" message="Как тебе React?"/>
            <UserList users={users} showActiveOnly={true}/>
        </div>
    )
}


export default App
