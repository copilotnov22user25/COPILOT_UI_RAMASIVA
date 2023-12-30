import { useEffect } from "react";

export default function FetchJSON(){
    const url = "http://localhost:8000/Desktop/JSONS/dt.json"
    // const [data, setData] = useState([]);
    function getData() {
      try {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // setData(data);
            console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
  
    }

    useEffect(() => { getData(); }, []);

    return(<>
    </>)
}

