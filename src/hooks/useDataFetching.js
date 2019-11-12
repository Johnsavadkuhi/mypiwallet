import React ,{useState , useEffect} from 'react'; 

function useDataFetching (dataSource , request ){

    const [loading , setLoading ] = useState(false ); 
    const [results ,  setResults] = useState([]); 
    const [error , setError] = useState("");

    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await fetch(dataSource , {
                    method: 'POST',
                    body: JSON.stringify(request),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }); 
                const json = await data.json(); 
                if(json){
                    setLoading (false ); 
                    setResults(json); 
                }

            }catch(error){
                setLoading(false ); 
                setError(error.message); 
            }
            setLoading(false);

        }
        
        fetchData();

    } , [dataSource]); 



    return {
        loading , 
        results , 
        error
    }
}

export default useDataFetching ; 
