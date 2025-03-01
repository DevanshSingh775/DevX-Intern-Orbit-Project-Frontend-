function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const temp = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    if (isNaN(temp)) {
        alert('Please enter a valid temperature');
        return;
    }
    document.querySelector('.converter-form').classList.remove('active');
    document.querySelector('.converter-results').classList.add('active');
    document.getElementById('originalTemp').textContent = 
        '${temp} $getUnitSymbol(unit)';
    const conversions = calculateConversions(temp, unit);
    displayResults(conversions);
}
function calculateConversions(temp, unit) {
    let conversions = [];   
    switch(unit) {
        case 'celsius':
            conversions = [
                { unit: 'Fahrenheit', value: (temp * 9/5) + 32 },
                { unit: 'Kelvin', value: temp + 273.15 }
            ];
            break;
        case 'fahrenheit':
            conversions = [
                { unit: 'Celsius', value: (temp - 32) * 5/9 },
                { unit: 'Kelvin', value: (temp - 32) * 5/9 + 273.15 }
            ];
            break;
        case 'kelvin':
            conversions = [
                { unit: 'Celsius', value: temp - 273.15 },
                { unit: 'Fahrenheit', value: (temp - 273.15) * 9/5 + 32 }
            ];
            break;
    }
    return conversions;
}
function displayResults(conversions) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    conversions.forEach(conversion => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div class="result-name">${conversion.unit}</div>
            <div class="result-value">${conversion.value.toFixed(2)}</div>
            <div class="result-unit">${getUnitSymbol(conversion.unit)}</div>
        `;
        resultsContainer.appendChild(card);
    });
}
function getUnitSymbol(unit) {
    const symbols = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    };
    return symbols[unit.toLowerCase()] || '';
}
function goBack() {
    document.querySelector('.converter-results').classList.remove('active');
    document.querySelector('.converter-form').classList.add('active');
    
    document.getElementById('temperature').value = '';
}