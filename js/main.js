import {
    setSearchFocus,
    showClearTextButton,
  
  } from "./searchBar.js";
import {buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults"
import {getSearchTerm} from "./dataFunctions.js"


document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    //3 listners 

    const form =document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

//Procedural "workflow" function

const submitTheSearch = (event) => {
    deleteSearchResults();
    event.preventDefault();
    proscessTheSearch();
    setSearchFocus();

};

//Procedural

const proscessTheSearch =async () =>{
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if(searchTerm === "") return;
    const resultArray = await retriveSearchResults(searchTerm);
    if(resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);

};
