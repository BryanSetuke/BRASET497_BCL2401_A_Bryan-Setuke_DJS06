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

provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

provinces.sort();
console.log(provinces);

const provincesWithoutCape = provinces.filter(
    (province) => !province.includes("Cape")
);
console.log(provincesWithoutCape.length);

const hasS = names.map((name) => name.includes("S"));
const hasSIncludes = names.some((name) => name.includes("S")); // Check if at least one name has 'S'
console.log(hasS);
console.log(hasSIncludes);

const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index] || "No Province Assigned"; // Assign default if no province
    return acc;
}, {});
console.log(nameProvinceMap);