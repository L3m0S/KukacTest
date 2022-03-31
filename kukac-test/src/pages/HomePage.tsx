import { Header } from "../components/Header/Header";
import { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export function HomePage() {

    const [palindromes, setPalindromes] = useState([]);

    async function getData(body: {}) {
        try { 
            console.log(body)
            let response = await axios.post(`http://localhost:3333/palindromes`, body);
            setPalindromes(response.data);
            console.log(palindromes)
            
        } catch(err:any) {
            throw new Error(err.message)
        }
    };

    return(
        <>
            <Header/>
            <section>
                <div className="palindromes-main-div">
                    <Button type="submit" variant="contained" onClick={()=> getData({initialNumber:1, limitNumber:32})}>Calcular</Button>
                </div>
            </section>
        </>
    )
}