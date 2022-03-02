import productList from "./productList.js"

function findCheese(keyword) {
    fetch("/data.json")
        .then(function(response) {
            if (response.status !== 200) {
                console.log("næhæh!") // TODO: bedre brugerbeskeder
                return []
            }
            return response.json()
        })
        .then(function(data) {
            const results = data.results.filter(element =>
                element.name.toLowerCase().includes(keyword.toLowerCase())
                || element.description.toLowerCase().includes(keyword.toLowerCase())
            )

            if (results.length) {
                productList(results)
            } else {
                document.getElementsByClassName("products")[0].innerHTML +=
                    "<p>Der var ingen resultater, prøv igen i morgen.</p>"
            }
        })
}

export default findCheese
