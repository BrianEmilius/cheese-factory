function getCheese(sku) {
    fetch("/data.json")
        .then(function(response) {
            if (response.status !== 200) {
                console.log("næhæh!") // TODO: bedre brugerbeskeder
                return []
            }
            return response.json()
        })
        .then(function(data) {
            const cheese = data.results.find(element => element.sku === sku)

            if (!cheese) {
                window.location.href = "/404.html"
                return
            }

            document.title += " - " + cheese.name

            const output = `<article>
                <h1>${cheese.name}</h1>
                <p>${cheese.description}</p>
                <p>${cheese.price}</p>
            </article>`

            document.getElementsByClassName("singleProduct")[0]
                .innerHTML += output
        })
}

export default getCheese
