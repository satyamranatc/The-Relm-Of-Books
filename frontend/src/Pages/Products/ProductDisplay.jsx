import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function ProductDisplay() {
    let { id } = useParams();
    let [BookDetails,setBookDetails] = useState();


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:5100/api/GetOneBook/${id}`);
            console.log(response.data.BookData[0]);
            setBookDetails(response.data.BookData[0]);
          } catch (error) {
            console.error("Error fetching book data:", error);
          }
        }
        fetchData();
      }, []);

  return (
    <div>
        <center>
            {
                BookDetails && (
                    <div>
                        <h1>{BookDetails.title}</h1>
                        <img src={BookDetails.poster} alt={BookDetails.title}/>
                        <p>{BookDetails.description}</p>
                        <p>Author: {BookDetails.author}</p>
                        <p>Price: ${BookDetails.price.toFixed(2)}</p>
                    </div>
                )
            }

        </center>
    </div>
  )
}
