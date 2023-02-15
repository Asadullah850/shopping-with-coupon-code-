// privious value present value balance sheet

function srtingToNumber(e) {
    let valentinePriviousValueId = document.getElementById(e).innerText;
    let priviousValueParseFloat = parseFloat(valentinePriviousValueId);
    return priviousValueParseFloat;

}
function inputFieldSrtingToNumber(e) {
    let Id = document.getElementById(e).value;
    let ParseFloat = parseFloat(Id);
    Id.value = '';
    return ParseFloat;
    
}

function setCalculetValue(id,newValue) {
    let setId = document.getElementById(id);
    setId.innerText = newValue;
    return setId;
}
