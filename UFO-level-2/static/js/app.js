// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", runFilter); 

DataLoad(tableData);

  function runFilter() {
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputDateValue = inputDate.property("value");
    var inputCity = d3.select("#city");
    var inputCityValue = inputCity.property("value");
    var inputState = d3.select("#state");
    var inputStateValue = inputState.property("value");  
    var inputCountry = d3.select("#country");
    var inputCountryValue = inputCountry.property("value");
    var inputShape = d3.select("#shape");
    var inputShapeValue = inputShape.property("value");  
    filteredData = tableData;
    tbody.html("");
    if((inputDateValue === '' ) && (inputCityValue === '') && (inputStateValue === '') && (inputCountryValue === '') && (inputShapeValue === '')){
      DataLoad(filteredData); 
    }
    else{
      if(inputDateValue !== ''){
        filteredData = filteredData.filter(ufo => ufo.datetime === inputDateValue);
      }
      if(inputCityValue !== ''){
        filteredData = filteredData.filter(ufo => ufo.city === inputCityValue);
      }
      if(inputStateValue !== ''){
        filteredData = filteredData.filter(ufo => ufo.state === inputStateValue);
      }
      if(inputCountryValue !== ''){
        filteredData = filteredData.filter(ufo => ufo.country === inputCountryValue);
      }
      if(inputShapeValue !== ''){
        filteredData = filteredData.filter(ufo => ufo.shape === inputShapeValue);
      }    
      DataLoad(filteredData);                         
    }
  };

  function DataLoad(paraData){
    paraData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
  }); 
  };

