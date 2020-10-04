async function load() {
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR3wa_b0SVsQ9qRd-XO2bbBieFOZ6X_fuNPs0SJhUhN-muxRgA-MD5jH6kM");
    //   .then(response => response.json())
    //   .then(response => console.log('Success:', JSON.stringify(response)))
    //   .catch(error => console.error('Error:', error));
    const data = await conn.json();
    // console.log(data);
    return data;
}

let x = load();
console.log(x);
