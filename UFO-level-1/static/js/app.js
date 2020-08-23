// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", runFilter); 

defaultDataLoad();

  function runFilter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    if(inputValue === ''){
        defaultDataLoad();
    }
    else{
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
        tbody.html("");

        filteredData.forEach((ufoReport) => {
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }
  };

  function defaultDataLoad(){
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };
