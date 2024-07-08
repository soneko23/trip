const calculate = document.querySelector("#calculate");
calculate.addEventListener("click", transportationCost);
let price = 0.7;

const button = document.querySelector("#btn");
button.addEventListener("click", baggageCost);

function baggageCost(e) {
    e.preventDefault();
    bag.style.display = "block";
}

function transportationCost(e) {
    e.preventDefault();
    const distance = document.querySelector("#distance").value;
    const voyager = document.querySelector("#voyager").value;
    const bag = document.querySelector("#bag").value;

    if (distance === "" || distance < 1 || voyager === "" || voyager < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Введіть дані!',
          })
    }

    let cost = distance*voyager*price;
    let bagCost = cost*bag;
    let total = cost + bagCost;

    cost = cost.toFixed(2);
    bagCost = bagCost.toFixed(2);
    total = total.toFixed(2);
    
    document.querySelector("#trip").textContent = cost;
    document.querySelector("#baggage").textContent = bagCost;
    document.querySelector("#total").textContent = total;
}
gsap.to("#case", {y:-500, duration:2, rotation:360, delay:.5, opacity:0})