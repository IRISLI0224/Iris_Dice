# dice-roller-react

Create a simple web app that allows the user to roll some dice, and displays a list of the previous rolls. Each list item may be interacted with to display the details of the roll.

## Instructions

The user can enter a [dice notation](https://en.wikipedia.org/wiki/Dice_notation) expression (e.g. `2d6+3`) into a text input and press a button to compute the roll.

Upon the dice being rolled a list of computed rolls is also displayed. 

When the user rolls again the new roll should update the list. You can decide what you visually display for a list item.

Pressing an item on the list should navigate the user to another route that reveals the details of the computed expression. 

The schema for a single dice roll should include the following:

```JSON
{
  expression: "2d6+3",
  dice: [3, 5],
  modifier: 3,
  total: 11
}
```

You may layout and style the list and details of rolls however you like.

This project has been generated with [Create React App](https://create-react-app.dev/) so you may easily use any features supported by default, e.g. CSS Modules, SVG imports, etc.

## Guidance

- We're not expecting 3D visualisation of the dice rolls, just the results.
- Design your app in a way that local state may be easily replaced with API calls.
- Demonstrate your experience with the React ecosystem by making use of well known libraries if called for.
- You may decide to only support a basic version of dice notation.
- You may decide to display the dice rolls however you like, but an example (in HTML) might be:

  ```HTML
  <!-- list -->
  <ol>
    <li>
      <a href="/rolls/1">2d6+2</a>
    </li>
    <li>
      <a href="/rolls/2">1d10+3</a>
    </li>
    ...
  </ol>

  <!-- detail -->
  <h1>Roll 1</h1>
  <dl>
    <dt>Expression</dt>
    <dd>2d6+2</dd>
    <dt>Dice</dt>
    <dd>3, 6</dd>
    <dt>Total</dt>
    <dd>11</dd>
  </dl>
  ```

- Time may be an issue and that's OK. Just come prepared to answer questions about where your time was spent and why.
