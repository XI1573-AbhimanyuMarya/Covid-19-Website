const today = new Date()

const year = today.getFullYear()

var newDate = new Date( today.getTime() - (1 * 24 * 60 * 60 * 1000) );
const month = `${newDate.getMonth() + 1}`.padStart(2, "0")

const day = `${newDate.getDate()}`.padStart(2, "0")

const stringDate = [month,day,year].join("-") 
console.log(stringDate);
globalDataUrl :String;
this.globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${stringDate}.csv`;




