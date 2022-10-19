const getResBtn = document.querySelector('button')

const baseURL = 'https://swapi.dev/api'

const getResidents = () => {
    axios
    .get(`${baseURL}/planets/?search=alderaan`)
    .then((res) => {
        const alderaan = res.data.results[0]
        for (let i = 0; i < alderaan.residents.length; i++) {
            axios.get(alderaan.residents[i])
            .then((res2) => {
                let resName = document.createElement('h2')
                resName.textContent = res2.data.name
                document.querySelector('body').appendChild(resName)
            })
            .catch((err) => console.log(err))
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

getResBtn.addEventListener('click', getResidents)