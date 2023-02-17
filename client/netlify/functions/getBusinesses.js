import fetch from 'node-fetch' 

export const handletr = async (event, context) => { // function must be named 'handler', any other name will return 500 intenal server error

    console.log("get businesses func ran")

    const eventBody = JSON.parse(event.body)
    console.log({eventBody});
    const zipCode = eventBody.zipCode
    const category = eventBody.category

    const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&term=${category}&radius=2000&sort_by=best_match&limit=5`
    const API_KEY = process.env.YELP_API_KEY

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
        statusCode: 200, 
        body: JSON.stringify( data.businesses ) //function response must be a string per netlify
    }
}

