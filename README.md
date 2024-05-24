# DJS06 Project Brief: Higher Order Functions

## Objective

This project challenged and deepened my understanding of JavaScript's powerful array methods. By manipulating data using `forEach`, `map`, `filter`, `reduce`, and more, I performed a variety of tasks that tested my ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

The essence of using these higher-order functions is to encourage a declarative approach to programming: defining what I want to achieve (e.g., filter a list, transform data) without specifying step-by-step operations (as with imperative loops like `for` or `while`). This leads to more readable, concise, and maintainable code. Additionally, these functions help avoid side effects and create pure functions, key aspects of functional programming.

## Data Sets

I worked with three primary datasets:

1. **List of provinces:**
    ```javascript
    const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
    ```
2. **List of names:**
    ```javascript
    const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
    ```
3. **List of products with prices:**
    ```javascript
    const products = [
      { product: 'banana', price: "2" },
      { product: 'mango', price: 6 },
      { product: 'potato', price: ' ' },
      { product: 'avocado', price: "8" },
      { product: 'coffee', price: 10 },
      { product: 'tea', price: '' },
    ];
    ```

## Exercises and Solutions

### Basic Exercises

1. **ForEach Basics:**
    - Log each name and each province to the console.
    - Log each name with a matching province in the format "Name (Province)".

    ```javascript
    provinces.forEach((province) => console.log(province));
    names.forEach((name) => console.log(name));
    names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
    ```

2. **Uppercase Transformation:**
    - Use `map` to create a new array of province names in all uppercase.

    ```javascript
    const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
    console.log(uppercaseProvinces);
    ```

3. **Name Lengths:**
    - Create a new array using `map` that contains the length of each name.

    ```javascript
    const nameLengths = names.map((name) => name.length);
    console.log(nameLengths);
    ```

4. **Sorting:**
    - Use `sort` to alphabetically sort the provinces.

    ```javascript
    provinces.sort();
    console.log(provinces);
    ```

5. **Filtering Cape:**
    - Use `filter` to remove provinces containing "Cape" and log the count of remaining provinces.

    ```javascript
    const provincesWithoutCape = provinces.filter((province) => !province.includes("Cape"));
    console.log(provincesWithoutCape.length);
    ```

6. **Finding 'S':**
    - Create a boolean array using `map` to determine if a name contains the letter 'S'.
    - Use `some` to check if at least one name contains 'S'.

    ```javascript
    const hasS = names.map((name) => name.includes("S"));
    const hasSIncludes = names.some((name) => name.includes("S"));
    console.log(hasS);
    console.log(hasSIncludes);
    ```

7. **Creating Object Mapping:**
    - Use `reduce` to transform the names array into an object mapping names to their respective provinces.

    ```javascript
    const nameProvinceMap = names.reduce((acc, name, index) => {
        acc[name] = provinces[index] || "No Province Assigned";
        return acc;
    }, {});
    console.log(nameProvinceMap);
    ```

### Advanced Exercises (Single `console.log` Execution)

1. **Log Products:**
    - Iterate over the products array, logging each product name.

    ```javascript
    console.log(products.map((product) => product.product).join(", "));
    ```

2. **Filter by Name Length:**
    - Filter out products with names longer than 5 characters.

    ```javascript
    console.log(products.filter((product) => product.product.length <= 5));
    ```

3. **Price Manipulation:**
    - Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.

    ```javascript
    const total = products
        .filter((product) => product.price.trim() !== "" && !isNaN(product.price))
        .reduce((acc, product) => {
            acc += Number(product.price);
            return acc;
        }, 0);
    console.log(`Total Price: ${total}`);
    ```

4. **Concatenate Product Names:**
    - Use `reduce` to concatenate all product names into a single string.

    ```javascript
    console.log(products.reduce((acc, product) => acc + product.product, ""));
    ```

5. **Find Extremes in Prices:**
    - Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."

    ```javascript
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
    console.log(`Highest: ${priceExtremes.highest}. Lowest: ${priceExtremes.lowest}`);
    ```

6. **Object Transformation:**
    - Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

    ```javascript
    const transformedProducts = Object.entries(
        products.reduce((acc, product) => {
            acc[product.product] = {
                name: product.product,
                cost: parseInt(product.price) || 0,
            };
            return acc;
        }, {})
    ).map(([key, value]) => ({ [key]: value }));
    console.log(transformedProducts);
    ```

## Struggles and Lessons Learned

### Struggles

- **Handling Data Transformation:** Initially, I found it challenging to correctly transform data using `reduce`. Understanding how to accumulate results in various formats required a deeper comprehension of accumulator functions and careful planning of logic.
  
- **Dealing with Invalid Data:** Filtering out invalid data, especially handling cases where prices were empty strings or just whitespace, was tricky. Ensuring that all data was properly cleaned before manipulation was essential to avoid runtime errors and incorrect calculations.

- **Combining Multiple Array Methods:** Effectively combining multiple array methods to achieve complex transformations took practice. Balancing readability with functionality was a key challenge.

### Lessons Learned

- **Declarative Programming:** The declarative nature of higher-order functions in JavaScript, such as `map`, `filter`, and `reduce`, leads to more readable and maintainable code. This approach emphasizes defining the "what" over the "how."

- **Data Cleaning:** Proper data cleaning is crucial before performing transformations. Ensuring that data is in the correct format and filtering out invalid entries prevents errors and simplifies subsequent operations.

- **Power of `reduce`:** The `reduce` method is incredibly powerful for a variety of transformations, not just summing values. It can be used to construct objects, filter data, and more, making it an essential tool in any JavaScript programmer's toolkit.

- **Functional Programming Concepts:** Through this project, I gained a deeper appreciation for functional programming concepts, such as pure functions and avoiding side effects. These principles help create more predictable and testable code.

## Conclusion

This project provided a comprehensive exercise in utilizing JavaScript's array methods to perform complex data manipulations. By overcoming the initial challenges and applying these higher-order functions effectively, I have gained confidence in writing more declarative, readable, and maintainable code. The skills learned here are invaluable for any future JavaScript development tasks.