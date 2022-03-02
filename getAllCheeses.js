// getAllCheeses.js
import productList from "./productList.js"

function getAllCheeses() {
    fetch("/data.json")
        .then(function(response) {
            if (response.status !== 200) {
                console.log("næhæh!") // TODO: bedre brugerbeskeder
                return []
            }
            return response.json()
        })
        .then(function(data) {
            productList(data.results)
        })
}

export default getAllCheeses
