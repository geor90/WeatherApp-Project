 
 let weather = {
     apiKey: "eaf10a8ec370a50c6444b10023efb75f" ,
     fetchWeather(city){

     
 fetch(
     "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid="+ this.apiKey 
    )
 
  .then((response) => response.json())
  .then((data)=> this.displayWeather(data));
 },

 

     displayWeather(data){
         const { name} = data;
  
         const { icon } = data.weather[0];
         const { temp } = data.main;

         
        

         console.log(name , icon, temp) ;
         document.querySelector(".name").innerHTML= name;

         document.querySelector('img').src= "http://openweathermap.org/img/wn/" + icon + ".png" ;
         
         document.querySelector(".degree").innerHTML = parseInt(temp) + " " + "°Celsius";
     },
     search(){
         this.fetchWeather (document.querySelector(".bar").value) ;
     },
    };

      document.querySelector("button").addEventListener("click", function(){
         weather.search();
     });



     document.querySelector(".bar").addEventListener("keypress", function(event){
         if (event.key== "Enter"){
             weather.search();
         }
     });

 

