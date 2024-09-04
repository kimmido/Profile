async function getData(data) {
    try {
        const res = await axios.get('https://kimmido.github.io/Profile/data/profile.json');
        return res.data[data]; 
    } catch (err) {
        console.error(err);
        return null; 
    }
}