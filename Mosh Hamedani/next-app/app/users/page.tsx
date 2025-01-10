import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            // cache: 'no-store'
            next: { revalidate: 10 } // revalidate after every 10 sec
        });
    const users: User[] = await res.json()
    return (
        <>
            <h1>USERS</h1>
            <hr />
            <p>{new Date().toLocaleDateString()}</p>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }

            </ul>
        </>
    )
}

export default UsersPage