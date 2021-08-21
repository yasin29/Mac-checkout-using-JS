// memory update 
document.getElementById('8gb-memory').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    memoryCost('16gb', 0);
    totalPrice();
    finalTotal();
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    memoryCost('8gb', 180);
    totalPrice();
    finalTotal();
});
// set memory price 
function memoryCost(memory, price) {
    document.getElementById(memory + '-memory').style.backgroundColor = 'LightSlateGrey';
    document.getElementById('memory-cost').innerText = price;

};

// Storage update 
document.getElementById('256gb-storage').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    storageCost('512gb', '1024gb', 0);
    totalPrice();
    finalTotal();
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    storageCost('256gb', '1024gb', 90);
    totalPrice();
    finalTotal();
})
document.getElementById('1024gb-storage').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    storageCost('256gb', '512gb', 180);
    totalPrice();
    finalTotal();
})
// set storage price 
function storageCost(storage1, storage2, price) {
    document.getElementById(storage1 + '-storage').style.backgroundColor = 'LightSlateGrey';
    document.getElementById(storage2 + '-storage').style.backgroundColor = 'LightSlateGrey';
    document.getElementById('storage-cost').innerText = price;
}

// delivery update 
document.getElementById('free-delivery').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    deliveryCost('charged', 0);
    totalPrice();
    finalTotal();
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    this.style.backgroundColor = 'skyblue';
    deliveryCost('free', 20);
    totalPrice();
    finalTotal();
})
// set delivery price 
function deliveryCost(delivery, price) {
    document.getElementById(delivery + '-delivery').style.backgroundColor = 'LightSlateGrey';
    document.getElementById('delivery-cost').innerText = price;
}
// get feature input numeric value 
function getInput(feature) {
    const featurePrice = document.getElementById(feature + '-cost');
    const featureNumber = parseFloat(featurePrice.innerText);
    return featureNumber;
}
// total price function 

function totalPrice() {
    const totalPrice = document.getElementById('total-cost');
    const memoryCost = getInput('memory');
    const storageCost = getInput('storage');
    const deliveryCost = getInput('delivery');
    totalPrice.innerText = 1299 + memoryCost + storageCost + deliveryCost;
}

// total  function for bottom total 
function finalTotal() {
    const memoryCost = getInput('memory');
    const storageCost = getInput('storage');
    const deliveryCost = getInput('delivery');
    const finalTotalPrice = document.getElementById('total').innerText = 1299 + memoryCost + storageCost + deliveryCost;

}

// apply discount 
document.getElementById('promo-btn').addEventListener('click', function () {
    const inputPromo = document.getElementById('promo-input');
    const inputPromoCode = inputPromo.value;
    if (inputPromoCode == 'stevekaku') {
        discount();
    }
    inputPromo.value = '';

})

//20% discount function 
function discount() {
    const memoryCost = getInput('memory');
    const storageCost = getInput('storage');
    const deliveryCost = getInput('delivery');
    const finalTotalPrice = 1299 + memoryCost + storageCost + deliveryCost;
    const discountAmount = 20 / 100;
    const priceAfterDiscount = finalTotalPrice - (finalTotalPrice * discountAmount);
    document.getElementById('total').innerText = priceAfterDiscount;
}

