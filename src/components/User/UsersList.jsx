import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UsersList = () => {

    const [documents, setlisDoc] = useState([]);

    //useEffect = componentDidMount

    useEffect(() => {
        const obtenerDocuments = async () => {
            const url = 'http://127.0.0.1:8000/document';
            const resul = await axios.get(url);
            //console.log(resul.data);
            setlisDoc(resul.data);
        };
        obtenerDocuments();
    },[]);

    console.log(documents);

  return (
    <div>UsersList</div>
  )
}

export default UsersList


