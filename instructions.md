I've made the requested changes to the coding exercise. Please see the updated version below.

---

Now we have played with integers, let's play with strings

## Steps
1. Create function `plural` with one argument: `word`
2. In the function body, return the `word` with an `s` at the end.
```javascript
function plural(word) {
  return `${word}s`;
}
```
3. Create variable `pluraled` and assign to function `plural` with argument string `'apple'`.
```javascript
const pluraled = plural('apple');
```
4. Console log `pluraled` and run the code. It should log:
```
apples
```
5. Create variable `food` and assign it to your favourite food in a string. (assuming favorite food is pizza)
```javascript
const food = 'pizza';
```
6. Create variable `pluraledFood` and assign to function `plural` with argument variable `food`.
```javascript
const pluraledFood = plural(food);
```
7. Console log `pluraledFood` and run the code.
```javascript
console.log(pluraledFood);
```

Output (assuming favorite food is pizza):
```
pizzas
```

<details>
<summary>Full Code</summary>

```javascript
function plural(word) {
  return `${word}s`;
}

const pluraled = plural('apple');
console.log(pluraled);

const food = 'pizza';
const pluraledFood = plural(food);
console.log(pluraledFood);

// In console, it should should look like this:
// apples
// pizzas
```
</details>