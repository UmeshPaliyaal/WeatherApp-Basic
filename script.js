const Btn = document.getElementById("btn");
const Input = document.getElementById("input");
const Country = document.getElementById("country");
const Region = document.getElementById("region");
const City = document.getElementById("city");
const Temp = document.getElementById("temp");
const ContainerTwo = document.querySelector(".containertwo");


async function Get_Data(cityName){
   let promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=7423db57c1ad4e6a9a2185631241306&q=${cityName}&aqi=yes`
)
return await promise.json();
}
Btn.addEventListener("click", async ()=>{
     setTimeout(()=>{
         Btn.classList = "btn2"
     },)

    const Value = Input.value;
    const data =  await Get_Data(Value)
    console.log(data)

    if(Value == ""){
        alert("please enter a city name")
    }else{
    ContainerTwo.style.display = "block"
    Country.innerText = "Country- " + data.location.country
    Region.innerText = "Region- " + data.location.region
    City.innerText = "City- " + data.location.name
    Temp.innerText = "Temprature- " + data.current.temp_c + " °C"
    }
})


