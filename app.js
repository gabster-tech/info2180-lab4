window.onload = function(){
    var searchBtn =document.getElementById('search-btn');
    var searchRes = document.getElementById('result');
    var avenger = document.getElementById('search-field');
    var xmlReq = new XMLHttpRequest();
    
    xmlReq.addEventListener("load",() =>{
        let output = xmlReq.responseText;
        searchRes.innerHTML = output;
    });

    searchBtn.addEventListener('click', () => {

        let searchQuery='superheroes.php?query='+avenger.value;
        
        fetch(searchQuery)
            .then(response => {
                if (response.ok) {
                    xmlReq.open('GET',searchQuery);
                    xmlReq.send();
                    return response.text()   
                } 
                else {
                    let error = Promise.reject('An error has occured')
                    console.log(error)
                    return error
                }
            })
        })
}