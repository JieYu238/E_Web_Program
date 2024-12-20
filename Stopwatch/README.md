# Stopwatch

This is a simple JavaScript-based stopwatch application that allows users to start, stop, and reset the timer. The application tracks time in hours, minutes, seconds, and milliseconds, and displays it in a formatted output.

## Features
- **Start**: Begin the stopwatch and track elapsed time.
- **Stop**: Pause the stopwatch while retaining the elapsed time.
- **Reset**: Reset the stopwatch to `00:00:00:00`.

## Code Structure
The stopwatch functionality is implemented as a class for better modularity and reusability.

### Key Components

#### **Class: `Stopwatch`**
- **`constructor(displayElement)`**: Initializes the stopwatch with:
  - `display`: The element where the time is displayed.
  - `timer`: Stores the interval ID.
  - `startTime`: Tracks the starting time.
  - `elapseTime`: Tracks the total elapsed time.
  - `isRunning`: A boolean to track whether the stopwatch is running.

- **`start = () => {}`**: Starts the stopwatch and updates the display every 10 milliseconds.
- **`stop = () => {}`**: Stops the stopwatch and retains the elapsed time.
- **`reset = () => {}`**: Resets all values and updates the display to `00:00:00:00`.
- **`update = () => {}`**: Calculates elapsed time, formats it, and updates the display.

### Why Use Arrow Functions (`=>`)?
Arrow functions are used in this implementation to ensure that `this` always refers to the instance of the `Stopwatch` class. Without arrow functions, passing class methods as callbacks (e.g., to `setInterval`) could result in `this` referring to the global context or `undefined`. Arrow functions preserve the correct `this` context automatically.

## How to Use
1. Include the HTML, CSS, and JavaScript code in your project.
2. Link the respective buttons (`startBtn`, `stopBtn`, and `resetBtn`) to their functions in the class.
3. Open the application in your browser and interact with the buttons to start, stop, or reset the stopwatch.

## Benefits of Arrow Functions
- **Context Preservation**: Arrow functions inherit `this` from their surrounding scope.
- **No Manual Binding**: Eliminates the need to explicitly bind methods to the class instance.
- **Simpler Syntax**: Cleaner and more concise compared to traditional function declarations.
