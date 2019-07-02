$(document).ready(function(){
//    
//     function getInput(){//Get value of city name entered
//        //Clear previous weatherData
//        document.getElementById("weatherData").innerHTML = ""; 
//        var cityName = $("#placeInput").val();
//        getWeather(cityName);
//    };


    $.ajax({
            url: "https://api.myjson.com/bins/y9mqr",
            method: "GET",
            dataType: 'json',
            success: function(data) {
               
                console.log(typeof(data));
                // Logs the about of objects which is 5
                console.log(data);
                
                
                var myJSON = JSON.stringify(data);
                var html_to_append = "";
                var record;
                var value;
                
                //Putting the data from the json into variables
                var cityName = data.city.name;
                var message = data.message;
                
             
                //Printing out the specific object from the JSON data
                $(".counties").append(cityName + "<br>" + message + "<br>");
             
                
                $.each(data, function(index, element){
                    //index return the actual name of object
                    //element returns the value of the object
                    $(".counties").append("Name of object:" + index + "<br>" + "Object Value (element):" + element + "<br>");
                
                   
                });
                
                    //How to iterate through a nested JSON in a single pass
                    // If you want the outer scope inside the inner one, 
                    // then you will need to store the reference in a variable. 
                    // I usually use me as the name, but it is just a name
                
                     $.each(data.list, function(key, val) {
                         
                          var me = this.dt;//save `this` reference
                          //console.log(val);
                          $.each(val, function(i, j){
                           var listMain = me.main;//use `this` from outer scope
                           var listWind = me.wind;//use `this` from outer scope
                           var listClouds = this.clouds;
                           var listWeather = this.weather;
                              
                             console.log(val.weather);
                          });
                     });
                
                     console.log(data.list[5].weather);
                
                
                
                //This is how you show the json as text output on screen
//                console.log(myJSON);
//                $(".agency").append(myJSON);
//                
//                
//                    $.each(data, function(i, value){
//                    
//                      //Putting value without a property will list all the data in the object/    
//                            console.log(data.message);
//                        
////                            $.each(value, function(i_sub, value2){
////                               console.log(value2.weather); 
////                                
////                            });
//                     
//                        $(".agency").append(data.city.name + "<br>");
////                        
//                    });
//                
                    //Single call without looping though the array 
                    //$(".agency").append(data.city.name + "<br>" + data.city.coord.lat);
                
            
//                    for(var key in data){
//                        record = data[key];
//                        
//                          console.log(data.list[5].weather[0].description);
//                    }
//                    
//               
//                    $(".counties").append(data.cnt);
//                    console.log(data.cnt);
//                    
//                    console.log(record.coord);
//                    $(".counties").append(record.coord);
//                   
//                    console.log(data.list[10].weather[0].icon)
                
                    //$.each(data, function(i, item) {
//
//                        html_to_append +=
//                        '<div class="counties">' +
//                            data.data.list[i].main.temp
////                        item.city +   
////                        '<div class="agency">' +
////                        item.cnt + 
////                        '</div>' + 
////                        '</div>'    
//                    });
//                
//                    for (var i=0; data.length > i; i++){
//                     
//                    }
//                     console.log(data);
//                     $(".counties").append(data.list[i].main.temp);
//                    $(".counties").append(html_to_append);
//                    
            },


              error: function() {
                    console.log(data);
                }
           });










});