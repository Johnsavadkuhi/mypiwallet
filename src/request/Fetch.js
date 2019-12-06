
async function Fetch(query) {

         
    const response = await fetch("https://46.4.199.148:5000/graphql",
        {  
            method: 'POST', 
            body: JSON.stringify(query),
            headers: {
                "Content-Type": "application/json"
            }
        });

    const data = await response.json();
    return data;
}

export default Fetch; 