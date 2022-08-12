
const myHost = "https://cdn.contentful.com"
    const fetchData = async () =>{
    const response = await fetch(`${myHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
    const result = await response.json();
    console.log(result)
    return result
  }
    const fetchAssets = async () =>{
    const response = await fetch(`${myHost}/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
    const result = await response.json();
    console.log(result)
    return result
  }
  export{
    fetchData,
    fetchAssets
  }