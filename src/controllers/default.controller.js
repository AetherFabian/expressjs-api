
const getAPI = (req, res)=>{
    return res.status(200).json({
        message: "Welcome to the default API"
    });
}

export default getAPI();