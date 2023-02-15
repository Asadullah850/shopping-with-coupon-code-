document.getElementById('kitkat-buy-btn').addEventListener('click',function() {
    let Id = srtingToNumber('kitkat-price');
    let InputField =  inputFieldSrtingToNumber('kitkat-quantity')
    let calculetAmount = Id * InputField;
    // console.log(kitkatInputField);
    setCalculetValue('chocolate',calculetAmount);
    let total = srtingToNumber('total');
    let calculetTotal = total + calculetAmount;
    setCalculetValue('total',calculetTotal);

})
// ---------------------------
document.getElementById('rose-buy-btn').addEventListener('click',function() {
    let Id = srtingToNumber('rose-price');
    let InputField =  inputFieldSrtingToNumber('rose-quantity')
    let calculetAmount = Id * InputField;
    // console.log(kitkatInputField);
    setCalculetValue('rose',calculetAmount);
    let total = srtingToNumber('total');
    let calculetTotal = total + calculetAmount;
    setCalculetValue('total',calculetTotal);
})
// ---------------------------
document.getElementById('diary-buy-btn').addEventListener('click',function() {
    let Id = srtingToNumber('diary-price');
    let InputField =  inputFieldSrtingToNumber('diary-quantity')
    let calculetAmount = Id * InputField;
    // console.log(kitkatInputField);
    setCalculetValue('diary',calculetAmount);
    let total = srtingToNumber('total');
    let calculetTotal = total + calculetAmount;
    setCalculetValue('total',calculetTotal);
})
document.getElementById('promo').addEventListener('click',function() {
    let promoInput = document.getElementById('promo-code').value;
    let cod = 'DISC30';
    if (promoInput == cod) {
        let total = srtingToNumber('total');
        let calculetTotal = total * 0.3;
        let discountTotal = total - calculetTotal;
        setCalculetValue('all-total',discountTotal);
        console.log(calculetTotal, discountTotal);
        let discountHead = document.getElementById('discount-head');
        discountHead.style.display= 'none'

    }
    else{
        let discountHead = document.getElementById('discount-head');
        let p =document.createElement('p');
        p.innerText = 'coppon cod not match'
        discountHead.appendChild(p)

    }
})
