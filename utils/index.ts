export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '443bfa79a7mshb1e1ff5ae288461p123d76jsne2c1d2f7362a',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
