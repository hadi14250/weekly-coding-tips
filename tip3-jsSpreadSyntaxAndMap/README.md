# The spread [...] and map() method in Javascript

This week’s coding tip dives into a clever way to replace every character in a string with another character in JavaScript using the spread syntax and the `map()` function!

## What is it?

In JavaScript, spread syntax (`...`) expands an iterable like a string or array into individual elements. Combined with the `map()` function, which applies a transformation to each element in an array, we can effectively manipulate and replace characters in a string in one line!

## Example

Here's the code:

```javascript
function contamination(text, char) {
  return [...text].map(() => char).join("");
}

console.log(contamination("abc", 'z')); // Output: "zzz"
```

### Explanation

- **Spread Syntax (`...text`)**: Expands the string `text` into an array of individual characters. For `"abc"`, this becomes `['a', 'b', 'c']`.
- **`map()`**: We use `map()` to replace each element in the array with the new `char` value. Here, every character in `['a', 'b', 'c']` is replaced with `'z'`.
- **`join("")`**: Joins the transformed array back into a single string. So, `['z', 'z', 'z']` becomes `"zzz"`.

## Why This Approach?

This method is a quick and readable way to apply a single character transformation across an entire string. By leveraging spread syntax and `map()`, you can make code more concise and expressive.

### Practical Uses

This pattern can be helpful for:
1. Censoring strings (e.g., replacing all characters with `*`).
2. Formatting text by repeating a single character.
3. Quickly modifying or generating patterns in strings.