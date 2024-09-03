function getData(data) {
    axios.get('https://kimmido.github.io/Profile/data/profile.json')
    .then((res) => res.data[data])
    .catch((err) => console.error(err))
}