---
# File Copying Utility
This Node.js project demonstrates how to copy a file from one location to another using a simple utility function.

## Project Structure
```
exercise_3/
├── lib/
│   ├── readMe.txt
|   |── source.txt
├── index.js
└── package.json
```

## Files and Directories

- **lib/**: This directory contains the files used by the project.
  - **source.txt**: The source file to be copied.
- **index.js**: The main JavaScript file that contains the `copyFile` function.
- **package.json**: The npm configuration file.

## Usage

### Prerequisites
- Node.js installed on your machine.
- npm (Node Package Manager) installed.

### Instructions
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/your-project.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd your-project
   ```

3. **Create the necessary files**:
   - In the `lib` directory, create a file named `source.txt` and add some content to it.

4. **Run the project**:
   - Use npm to run the project:
     ```sh
     npm start
     ```

### Expected Output

After running the project, you should see the following output in the console:

```
source.txt has been copied to destination.txt
```

A new file named `destination.txt` will be created in the `lib` directory, containing the same content as `source.txt`.

## Notes

- Ensure that the `source.txt` file exists in the `lib` directory before running the script.
- You can change the filenames in the `copyFile` function call within `index.js` to copy different files as needed.

---

This `readme.txt` file should help users understand the purpose of the project, how to set it up, and how to run the `copyFile` function to copy a file.