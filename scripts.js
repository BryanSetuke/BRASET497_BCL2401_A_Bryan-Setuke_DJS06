// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Logging Each Province
provinces.forEach((province) => console.log(province));

// Logging Each Name
names.forEach((name) => console.log(name));

// Logging Names With Their Corresponding Provinces:
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Transforming Province Names To Uppercase
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// Getting The Lengths of Name
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Sorting Provinces Alphabetically
provinces.sort();
console.log(provinces);

// Filtering Out Provinces That Include "Cape"
const provincesWithoutCape = provinces.filter(
    (province) => !province.includes("Cape")
);
console.log(provincesWithoutCape.length);

// Checking If Names Include The Letter 'S'
const hasS = names.map((name) => name.includes("S"));
const hasSIncludes = names.some((name) => name.includes("S")); // Check if at least one name has 'S'
console.log(hasS);
console.log(hasSIncludes);

// Creating an Object Mapping Names to Provinces:
const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index] || "No Province Assigned"; // Assign default if no province
    return acc;
}, {});
console.log(nameProvinceMap);

// Logging a Comma-Separated List of Product Names
console.log(products.map((product) => product.product).join(", ")); // Join product names with comma

// Filtering Products By Name Length(5 Characters or Less):
console.log(products.filter((product) => product.product.length <= 5));

// Calculating the total price of products:
const total = products
    .filter((product) => product.price !== "" && !isNaN(product.price)) // Filter products with valid prices
    .reduce((acc, product) => {
        acc += parseInt(product.price); // Convert price to number and add to accumulator
        return acc;
    }, 0);
console.log(`Total Price: ${total}`);

// Concatenating all product names into a single string:
console.log(products.reduce((acc, product) => acc + product.product, "")); // Concatenate product names

// Finding the highest and lowest prices:
const priceExtremes = products.reduce((acc, product) => {
    const price = parseInt(product.price);
    if (!acc.highest || price > acc.highest) {
        acc.highest = price;
    }
    if (!acc.lowest || price < acc.lowest) {
        acc.lowest = price;
    }
    return acc;
}, {});
console.log(
    `Highest: ${priceExtremes.highest}. Lowest: ${priceExtremes.lowest}`
);

// Transforming products into a specific object format:
const transformedProducts = Object.entries(
    products.reduce((acc, product) => {
        acc[product.product] = {
            name: product.product,
            cost: parseInt(product.price) || 0,
        };
        return acc;
    }, {})
).map(([key, value]) => ({ [key]: value })); // Destructuring and wrapping in object
console.log(transformedProducts);