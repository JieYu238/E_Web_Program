# Pokémon Search App

This application allows users to search for Pokémon by their name or ID using the [PokéAPI](https://pokeapi.co/). It retrieves and displays detailed information about the selected Pokémon, including its stats, types, and sprite image.

## Features

- **Search Functionality**: Search for Pokémon by name or ID.
- **Display Pokémon Information**:
  - Name
  - ID
  - Weight and height
  - Sprite image
  - Types
  - Base stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)
- **Error Handling**: Alerts the user if the Pokémon is not found.
- **Dynamic Updates**: Clears previous Pokémon data between searches.

## User Interaction

1. **Search Input**: Enter the Pokémon name or ID in the input field.
2. **Search Button**: Click the "Search" button to fetch and display Pokémon details.
3. **Keyboard Support**: Press "Enter" in the search field to trigger the search.

## Dependencies

- **PokéAPI Proxy**: The application uses the [PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/) for fetching Pokémon data.

## How to Use

1. Open the application in a web browser.
2. Enter a valid Pokémon name or ID in the search field.
3. Click the "Search" button or press "Enter."
4. View the Pokémon's details displayed dynamically.

## Error Handling

- If an invalid Pokémon name or ID is entered, the application clears the display, resets the search input, and alerts the user that the Pokémon is not found.

## Design Highlights

- **Dynamic Rendering**: Updates the display without requiring a page reload.
- **Responsive Input Handling**: Supports both button clicks and keyboard events.
- **Clear and Simple Layout**: Ensures a user-friendly experience with accessible and structured information.

---

This README serves as a quick guide to the application's functionality and usage. For further details or improvements, feel free to explore or modify the source code.
