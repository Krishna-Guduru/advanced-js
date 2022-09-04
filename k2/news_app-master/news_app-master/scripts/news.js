// Ude Import export (MANDATORY)
let searchNews = async (e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("search_input").value;
        try{
            const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
            const data = await res.json();
            //const searched = 
            let searchedData = data.articles;
            console.log("data:",searchedData);
            return searchedData
            //append(searchedData)
        }catch(err){
            console.log("err:",err);
        }
    }
}
document.getElementById("search_input").addEventListener("keydown", searchNews);

export {searchNews};