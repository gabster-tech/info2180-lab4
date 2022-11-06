window.onload = function() {
    let searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener('click', function(event) {
        let url = "superheroes.php"
        event.preventDefault();

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } 
                else {
                    let error = Promise.reject('An error has occured')
                    console.log(error)
                    return error
                    
                }
            })
            .then(superheroes => {
               alert(superheroes);
            })
    });
}