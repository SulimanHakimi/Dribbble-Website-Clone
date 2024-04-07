const highwayCar = document.querySelectorAll(".highway-car")
highwayCar.forEach((car)=>{
    car.addEventListener("mouseover",()=>{
        // car.classList.remove("card-images-second-2")
    })
    car.addEventListener("mouseup",()=>{
        car.classList.add("card-images-second-2")
    })
})