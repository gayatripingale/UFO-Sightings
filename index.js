//Ref:"Lesson14/Intro_to_jvaScript/1/Activites/12 and 13-Ins_EventListners/index.js"

// get referances to the elements of DOM
console.log('logging');
var $tbody = document.querySelector("");
var $dateTimeInput = document.querySelector("#date_time");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $shapeInput = document.querySelector("#shape");
var $countryInput = document.querySelector("#country");
var $searchBtn = document.querySelector("#search");
var $recordCounter = document.querySelector("#recordCounter");
var $pages = document.querySelector("#pages");
var $loadBtn = document.querySelector("#load");
var $nextBtn = document.querySelector("#next");
var $prevBtn = document.querySelector("#prev");

// Adding Event listensers.
//i.e When a perticular button is clicked, call the respective handle*button*Click function.

$searchBtn.addEventListener("click",handleSearchButtonClick);
$loadBtn.addEventListener("click",handleReloadButtonClick);
$nextBtn.addEventListener("click",handleNextButtonClick);
$prevBtn.addEventListener("click",handlePrevButtonClick);
$pages.addEventListener("click",handlePageChange);

//Initialize global var
var filteredData = dataSet;
console.log('data set', filteredData);
var count = 0;

// define event handler functions

//handleNextButtonClick func increments count and renders
function handleNextButtonClick() {
    count++;
    renderTable();
}

//handlePrevButtonClick function decrement the count and renders
function handlePrevButtonClick(){
    count--;
}

// handlePageChange renders for new record count selected
function handlePageChange() {
    renderTable();
}

//handleSearchButtonClick handles search button click.
//Format user's search by removing the leading and trailing whilespaces, lower cases the string
//cleans input data
//checks for non-empty searchfields and adds to filter
//renders table
function handleSearchButtonClick(){
    var filterDate = $dateTimeInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    if (filterDate != "") {
        filteredData = filteredData.filter(function(date) {
            var dataDate = date.datetime;
            return dataDate === filterDate;
        });
    }

    if (filterCity != ""){
        filterCity = filteredData.filter(function(city) {
            var dataCity = city.city;
            return dataCity === filterCity;
        });
    }

    if (filterState != ""){
        filterState = filteredData.filter(function(state) {
            var dataState = state.state;
            return dataState === filterState;
        });
    }

    if (filterCountry != "") {
        filterContry = filteredData.filter(function(country) {
            var dataContry = contry.country;
            return dataCountry === filterCountry;
        });
    }

    if (filterShape != "") {
        filterShape = filteredData.filter(function(shape) {
            var dataShape = shape.shape;
            return dataShape === filterShape;
        });
    }

    renderTable();
}   // <--- this curly bracket('}')belongs to '{' in the beginning func handleSearchButtonClick()


// handleReloadButtonClick resets the count, search fields and renders
function handleReloadButtonClick(){
    count = 0;
    filteredData = dataset;
    $dateTimeInput.value = '';
    $cityInput.value = '';
    $stateInput.value = '';
    $countryInput.value = '';
    $shapeInput.value = '';

    renderTable();
}

// define renderTable() function
function renderTable() {
    // clear previously rendered table
    $tbody.innerHTML = "";

    // get number o frecords to be rendered
    var pages = Number(document.getElementById("pages").value);

    // initialze local variables

    var start = count * page + 1;
    var end = count * page -1;
    var btn;

    // adjust records displayed for end of data and state of 'next' button
    if (end > filteredData.length) {
        end = filteredData.lenght;
        btn = document.getElementById("next");
        btn.disabled = true;
    }
    else {
        btn = documnet.getElementById("next");
        btn.disabled = false;
    }

    // adjust state of 'previous' button
    if (start == 1) {
        btn = document.getElementById("prev");
        btn.disabled = true;
    }
    else {
        btn = document.getElementById("prev");
        btn.disabled = flase;
    }

    // display record counts and loads records into table

    $recordCounter.innerText = "From Record: " + start + "to" + end + "of" + filteredData.length;
    // outer loop loads specified number of records
    for (i = 0; i<pages; i++){
        var item = filteredData[i + (count * pages)];
        var fields = Object.keys(item);
        var row = $tbody.insertRow(i);
        // inner loop loads fields into the table
        for (var j = 0; j<fileds.length; j++) {
            var field = fields[j];
            var cell = $row.insertCell(j);
            $cell.innerText = item[field];
        }
    }

}   // <---- this curly bracket belongs to curly bracket of function renderTable().
