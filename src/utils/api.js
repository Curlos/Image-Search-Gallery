const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY

export const getPhotosFromAPI = async (searchText) => {
    const API_URL = `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=1&query=${searchText}`
    const response = await fetch(API_URL)
    const data = response.json()
    
    return data
}