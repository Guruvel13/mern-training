import { useEffect, useState } from "react"
import axios from 'axios'

const UseEffectAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apicall = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        }
        apicall();
    }, []);

    return (
        <div>
            <h3>This page for API</h3>
            <h3>JSONPlaceholder API Posts are:</h3>
            {
                data.map((singleData) => {
                    return (
                        <ul key={singleData.id}  sstyle={{ marginBottom: '10px' }}>
                            <li>{singleData.userId}</li>
                            <li>{singleData.title}</li>
                        </ul>
                    );
                })
            }
        </div>
    );
}

export default UseEffectAPI;
