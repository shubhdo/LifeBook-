'use strict';

angular.module('myApp').controller('View1Ctrl',['$scope','$location','dataService' ,function(scope,location,dataService) {
    dataService.currentData=null;
console.log("asgdje");
   /* var latitude;
    var longitude;
    var address;
*/
    scope.obj={};

    scope.country=[
        {
            id:1,
            country:"India"
        },
        {
            id:2,
            country:"USA"
        },
        {
            id:3,
            country:"Australia"
        }

    ];

    scope.states=[
        {
            c:"India",
            state:"Himachal Pradesh"
        },
        {
            c:"USA",
            state:"Alabama"
        },
        {
            c:"Australia",
            state:"New South Wales"
        }

    ];


   /* scope.countries = {

        'USA': {
            'Alabama': ['Montgomery', 'Birmingham'],
            'California': ['Sacramento', 'Fremont'],
            'Illinois': ['Springfield', 'Chicago'],
            'Alaska':['Homer','Nome','Palmer'],
            'Connecticut':['Wallingford', 'Waterbury','Waterford','Watertown','West Hartford','West Haven','Westport','Wethersfield','Willimantic','Windham','Windsor','Windsor Locks','Winsted']
        },
        'India': {
            'Himachal Pradesh':[ 'Amb','Dalhousie','Lahaul','Mandi','Shimla','Sirmaur','Spiti','Udaipur','Una'],
            'Uttarakhand':['Lansdowne','Paudi','Nainital','Haridwar','Dehradun','Rishikesh','Mussorie'],
            'Uttar Pradesh':['Lucknow','Varanasi','Agra','Gorakhpur','Ghaziabad','Allahabad','Jhansi'],
            'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
            'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
            'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur'],
            'Bihar':['Patna','Gaya','Bhagalpur']
        },
        'Australia': {
            'New South Wales': ['Sydney'],
            'Victoria': ['Melbourne']
        }
    };*/

  /*  scope.GetSelectedCountry = function() {
        scope.strCountry = scope.countrySrc;
    };
    scope.GetSelectedState = function() {
        scope.strState = scope.stateSrc;
    };
*/
    scope.submit = function (signup) {


     /*   var countryElement=document.getElementById('country');
        var stateElement=document.getElementById('state');
        var country=countryElement.options[countryElement.selectedIndex].text;
        var state=stateElement.options[stateElement.selectedIndex].text;
*/
      /*  var oneData= {
            fname: scope.fname,
            lname: scope.lname,
            password: scope.password,
            email: scope.email,
            contact: scope.contact,
            address: address,
            lat:latitude,
            lng:longitude
          /!*  country:country,
            state:state*!/
        }*/
        if (scope.obj.lat === undefined || scope.obj.lng === undefined) {
            alert("Please Check valid address");
        }
        else {
            dataService.currentData = scope.obj;
            dataService.dataArray.push(scope.obj);


            console.log(scope.obj);
            console.log(dataService.currentData);
            alert('You have successfully registered');
            location.path('/display');
        }

    }
    scope.add = function (signup) {

        /*   var countryElement=document.getElementById('country');
           var stateElement=document.getElementById('state');
           var country=countryElement.options[countryElement.selectedIndex].text;
           var state=stateElement.options[stateElement.selectedIndex].text;

      */
        /* var oneData= {
                fname: scope.fname,
                lname: scope.lname,
                password: scope.password,
                email: scope.email,
                contact: scope.contact,
                address: address,
                lat:latitude,
                lng:longitude
             /!*   country:country,
                state:state*!/
            }*/
        if (scope.obj.lat === undefined || scope.obj.lng === undefined) {
           alert("Please Check valid address");
        }
        else {
            dataService.currentData = scope.obj;
            dataService.dataArray.push(scope.obj);


            console.log(scope.obj);
            console.log(dataService.currentData);
            alert('You have successfully registered');
            scope.obj = {};
            scope.signup.$setPristine(true);
        }
    }
        var input = document.getElementById('address');
        var autocomplete = new google.maps.places.Autocomplete(input);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            scope.obj.lat=place.geometry.location.lat();
            scope.obj.lng=place.geometry.location.lng();

            scope.obj.address=place.formatted_address;
            console.log(place);
        });

}]);