import { useState, useEffect } from 'react';
import axios from 'axios'; 

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async () => {

        setLoading(true);
        const newUser = {
            name: name,
            email: email
        }

        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
            setMensagem(`Usuário: ${response.data.name} foi criado com sucesso!`);
            setLoading(false);
        }catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    return(
        <div>
            <h1>Criar novo usuário</h1>

            <div>
                <input type="text" placeholder='Nome' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

            <div>
                <input type="text" placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <button onClick={createUser} disabled={loading}>{loading ? 'Enviado...' : 'Criar Usuário'}</button>

            {mensagem && <p>{mensagem}</p>}
        </div>
    )
}

export default AxiosPost;