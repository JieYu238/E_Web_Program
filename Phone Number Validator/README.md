# Phone Number Validation Project

## Overview

This project allows users to enter a phone number and validate it against common US phone number formats. The validation checks for different variations such as with or without the country code, with or without parentheses, and with different separators like spaces or hyphens.

## Features

- **Phone number validation**: Supports multiple formats like:
  - `555-555-5555`
  - `1 555-555-5555`
  - `(555) 555-5555`
  - `1 (555) 555-5555`
- **Clear output**: Users can clear the result from the screen after validation.
- **Real-time feedback**: Once the "Check" button is clicked, users see whether the number is valid or invalid.

## How It Works

1. **Input Field**: The user enters a phone number into the input field.
2. **Validate**: When the user clicks the "Check" button, the system checks if the phone number matches any of the valid formats.
3. **Result**: The result is displayed below the input field, showing either "Valid US number: [number]" or "Invalid US number: [number]" based on the validation.
4. **Clear Output**: Users can click the "Clear" button to remove the result.

## Usage

1. Enter a phone number in the input field.
2. Click the **Check** button to validate the phone number.
3. If you want to clear the validation message, click the **Clear** button.

## Technologies Used

- **HTML**: Used for the basic structure of the page.
- **CSS**: Used for styling the page 
- **JavaScript**: Handles the logic for validating the phone number formats and displaying the result.

## Installation

No installation required. Just open the `index.html` file in your browser to start using the validation tool.

## License

This project is open-source and available under the [MIT License](LICENSE).
