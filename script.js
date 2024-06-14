const Btn = document.getElementById("btn");
const Input = document.getElementById("input");
const Wind = document.getElementById("wind");
const TempFl = document.getElementById("tempfl");
const City = document.getElementById("city");
const Temp = document.getElementById("temp");
const ContainerTwo = document.querySelector(".containertwo");


async function Get_Data(cityName){
   let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40938f3988640a4502fe127637507684&units=metric`
)
return await promise.json();
}
Btn.addEventListener("click", async ()=>{

    const Value = Input.value;
    const data =  await Get_Data(Value)
    console.log(data)

    if(Value == ""){
        alert("please enter a city name")
    }else{
    ContainerTwo.style.display = "block"
    City.innerText = data.name
    Temp.innerText =  data.main.temp 
    TempFl.innerText = data.main.feels_like
    Wind.innerText =  data.wind.speed
    }
})


