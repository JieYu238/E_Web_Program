# Calorie Counter Application

## Overview  
This is a simple calorie counter application that helps users manage their daily calorie intake and expenditure. It allows users to dynamically add food and exercise entries, calculate calorie balances, and reset the form for new inputs. The application focuses on JavaScript fundamentals and user-friendly interaction.

## Features  
- **Add Entries:** Add food or exercise entries dynamically for various categories like breakfast, lunch, dinner, snacks, and exercise.  
- **Calculate Calorie Balance:** Computes the total calories consumed and burned, compares it to the budget, and displays whether the user is in a surplus or deficit.  
- **Input Validation:** Ensures that all inputs are valid numbers and handles errors gracefully.  
- **Clear Form:** Resets all input fields and hides the output for a fresh start.  

## Usage Instructions  
1. **Add New Entries:**  
   - Use the dropdown menu to select a category (e.g., breakfast, lunch, etc.).  
   - Click the "Add Entry" button to add new input fields for the selected category.  
   - Enter a name and calorie value for each item.

2. **Set Calorie Budget:**  
   - Enter your daily calorie budget in the designated field.  

3. **Calculate Results:**  
   - Click the "Calculate" button to compute and display your calorie balance, including surplus or deficit.

4. **Clear the Form:**  
   - Use the "Clear" button to reset the form and remove all inputs and results.

## Validation and Error Handling  
- Input strings are cleaned to remove unnecessary characters (e.g., spaces or symbols).  
- Invalid inputs, such as scientific notation (`1e5`), trigger an error alert, and the calculation stops.  
- The application uses a global error flag (`isError`) to handle invalid data and prevent further processing.

## Technology Stack  
- **HTML:** For structuring the user interface.  
- **JavaScript:** For input validation, DOM manipulation, and core logic.  
- **CSS:** Minimal styling for layout and user feedback (not included in this example).

## How It Works  
1. **Dynamic Entry Creation:**  
   - Entries are added dynamically using the `insertAdjacentHTML()` method to append new input fields.

2. **Calorie Calculation:**  
   - User inputs are summed up based on their categories.  
   - The total calories consumed are compared with the calorie budget and calories burned to determine the balance.

3. **Error Handling:**  
   - Invalid inputs halt the process and provide feedback through alerts.  

## FreeCodeCamp Inspiration  
This project was developed following a [FreeCodeCamp tutorial](https://www.freecodecamp.org/), emphasizing JavaScript fundamentals, DOM manipulation, and event handling. The principles learned through FreeCodeCamp's hands-on teaching approach were instrumental in building this application.

## Known Limitations  
- Assumes all calorie values are positive, except for exercise calories, which reduce the total.  
- No persistent storage for tracking historical data or saving entries across sessions.

## Future Enhancements  
- Add local storage to save user entries and budgets.  
- Implement user authentication for personalized tracking.  
- Include a graphical representation of calorie balance trends over time.

## License  
This project is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute as needed.
