import { useState, useEffect } from 'react';
import axios from 'axios'; 

const AxiosUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
            setLoading(false);
        }catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return(
        <div>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}

            <ul>
                {users.map((user) => {
                    <li key={user.id}>{user.name} - {user.email}</li>
                })}
            </ul>
        </div>
    )
}

export default AxiosUser;