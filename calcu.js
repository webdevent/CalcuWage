
function appendToDisplay(input) {
    document.getElementById("display").value += input;
}

function clr() {
    display.value = "";
}

function solve() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
}

function calcuWage(val) {
    event.preventDefault(); // Prevent the form from submitting
    const hours = document.getElementById("hours").value;
    const wage = document.getElementById("wage").value;
    const resultElement = document.getElementById("results");
    const countryTaxRate = {
       "Afghanistan": 0.20,
       "Albania": 0.23,
       "Algeria": 0.35,
       "Angola": 0.25,
       "Argentina": 0.35,
       "Armenia": 0.20,
       "Aruba": 0.52,
       "Australia": 0.45,
       "Austria": 0.55,
       "Azerbaijan": 0.25,
       "Bahamas": 0,
       "Bahrain": 0,
       "Bangladesh": 0.25,
       "Barbados": 0.285,
       "Belarus": 0.13,
       "Belgium": 0.50,
       "Bermuda": 0,
       "Bolivia": 0.13,
       "Bosnia and Herzeg" : 0.10,
       "Botswana": 0.25,
       "Brazil": 0.275,
       "Brunei": 0,
       "Bulgaria": 0.10,
       "Cambodia": 0.10,
       "Cameroon": 0.20,
       "Canada": 0.30,
       "Cayman Islands": 0,
       "Chile": 0.40,
       "China": 0.45,
       "Colombia": 0.39,
       "Congo": 0.40,
       "Costa Rica": 0.25,
       "Croatia": 0.30,
       "Cuba": 0.34,
       "Cyprus": 0.35,
       "Czech Republic": 0.23,
       "Denmark": 0.55,
       "Dominican Republic": 0.25,
       "Ecuador": 0.37,
       "Egypt": 0.27,
       "El Salvador": 0.30,
       "Equatorial Guinea": 0.35,
       "Estonia": 0.21,
        "Ethiopia": 0.35,
        "Euro area": 0.43,
        "European Union": 0.378,
        "Fiji": 0.28,
        "Finland": 0.57,
        "France": 0.55,
        "Gabon": 0.35,
        "Gambia": 0.25,
        "Georgia": 0.20,
        "Germany": 0.47,
        "Ghana": 0.30,
        "Greece": 0.45,
        "Guatemala": 0.07,
        "Guinea": 0.40,
        "Honduras": 0.25,
        "Hong Kong": 0.15,
        "Hungary": 0.15,
        "Iceland": 0.462,
        "India": 0.427,
        "Indonesia": 0.35,
        "Iraq": 0.15,
        "Ireland": 0.40,
        "Israel": 0.50,
        "Italy": 0.43,
        "Jamaica": 0.30,
        "Japan": 0.559,
        "Kazakhstan": 0.10,
        "Kenya": 0.30,
        "Kosovo": 0.10,
        "Kuwait": 0,
        "Malawi": 0.35,
        "Mexico": 0.35,
        "Morocco": 0.38,
        "Mozambique": 0.32,
        "Netherlands": 0.495,
        "New Zealand": 0.39,
        "Nigeria": 0.24,
        "Norway": 0.396,
        "Pakistan": 0.35,
        "Panama": 0.25,
        "Peru": 0.30,
        "Philippines": 0.35,
        "Portugal": 0.48,
        "Puerto Rico": 0.33,
        "Russia": 0.13,
        "Singapore": 0.22,
        "South Africa": 0.45,
        "South Korea": 0.45,
        "Spain": 0.47,
        "Suriname": 0.38,
        "Swaziland": 0.33,
        "Sweden": 0.523,
        "Switzerland": 0.40,
        "Syria": 0.22,
        "Thailand": 0.35,
        "Trinidad And Tobago": 0.25,
        "Turkey": 0.40,
        "Ukraine": 0.18,
        "United Kingdom": 0.45,
        "United States": 0.37,
        "Uruguay": 0.36,
        "Uzbekistan": 0.12,
        "Venezuela": 0.34,
        "Vietnam": 0.35,
        "Zambia": 0.375,
        "Zimbabwe": 0.412
    }
    const country = document.getElementById("dropdown").value;
    const taxRate = countryTaxRate[country];
    console.log(taxRate);

    // Calculate the pay
        const pay = hours * wage;
        const tax = pay * taxRate;
        const taxPay = pay - tax;
        resultElement.textContent = `Results: Your pay is: $${pay.toFixed(2)} (Pay after tax: $${taxPay})`;
}