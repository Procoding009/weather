const temperateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector("input");
const form = document.querySelector("form");

let target = "delhi"

const fetchData = async () => {

    const url = `https://api.weatherapi.com/v1/current.json?key=b5d6a4bf7f964f89828110407230210&q=${target}`

    const response = await fetch(url)
    const data = await response.json()

    const { current: { temp_c, condition: { icon, text } },
        location: { name, localtime }
    } = data
    updatedom(temp_c, name, localtime, icon, text)
}

const updatedom = (temp, city, time, emoji, text) => {
    temperateField.innerHTML = temp
    cityField.innerHTML = city
    
    const execttime = time.split(" ")[1]
    const exectdate = time.split(" ")[0]
   const exectday = new Date(exectdate).getDay()


   dateField.innerHTML = `${execttime} ${fulldayname(exectday)} ${exectdate}`


    emojiField.src = emoji
    weatherField.innerHTML = text
}
function search(e){
    e.preventDefault()
    target = searchField.value
    fetchData(target)

}

form.addEventListener('submit',search)

const fulldayname = (day) => {
    switch (day) {
        case 0:
            return "sunday"
        case 1:
            return "monday"
        case 2:
            return "tuesday"
        case 3:
            return "wednesday"
        case 4:
            return "thusday"
        case 5:
            return "friday"
        case 6:
            return "saturaday"
        default: 
            return "invaild day"
    }
}

fetchData()

