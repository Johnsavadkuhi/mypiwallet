
async function Fetch(query) {

    const response = await fetch(process.env.REACT_APP_END_POINT,
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