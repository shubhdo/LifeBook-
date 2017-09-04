function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function dateValidation() {
    var date = new Date();
    var date2 = date.getTime() - 1000 * 60 * 60 * 24 * 365.25 * 18;
    var date3 = new Date(date2);

    var year = date3.getFullYear();
    var month = date3.getMonth();
    var day = date3.getDate();
    month++;
    if (month < 10)
        month = "0" + month;
    if (date < 10)
        date = "0" + date;
    var formatDate = year + "-" + month + "-" + day;
    console.log(formatDate);
    document.getElementById('dob1').setAttribute('max', formatDate);
    date2 = date.getTime() - 1000 * 60 * 60 * 24 * 365.25 * 60;
    date3 = new Date(date2);
    year = date3.getFullYear();
    month = date3.getMonth();
    day = date3.getDate();
    month++;
    if (month < 10)
        month = "0" + month;
    if (date < 10)
        date = "0" + date;
    formatDate = year + "-" + month + "-" + day;
    console.log(formatDate);
    document.getElementById('dob1').setAttribute('min', formatDate);
}



function myFunc(count) {
    var data="";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:3000/getPaginatedData/59a2bcf8e6d7f1495a7ae860/2/'+count, false ); // false for synchronous request
    xmlHttp.send( null );
    var x=JSON.parse(xmlHttp.responseText).response.docs;

    console.log(JSON.parse(xmlHttp.responseText).response.docs);
        for(var i=0;i<x.length;i++) {
           data  += '<tr><td>' + x[i].name + '</td><td>' + x[i].email + '</td></tr>'
        }
    document.getElementById('list').innerHTML=data

}

