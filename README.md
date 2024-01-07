# SQL Compiler
## Overview
This project is a web application for executing and managing SQL queries.
It provides a user-friendly interface for data analysts to run SQL queries, view the query results in a tabular format,copy code copy to clipboard and save their frequently used queries for future use.
The application layout follows a user-friendly tabs design, allowing users to switch between multiple queries seamlessly.

## Features
1. **Tab Internface**

- Description: The app uses a tab-based interface to organize and manage multiple SQL queries simultaneously. Each tab represents an individual query panel with its own query editor and results.

 - Note: The app enforces a maximum tab limit of **15 Tabs** and minimum tab **1** to prevent the excessive opening of new tabs and maintain a smooth user experience. Users are notified when the maximum and minimun tab limit is reached.


2. **Query Editor**

- Description: The app includes a feature-rich SQL query editor powered by the `react-codemirror` library. It provides syntax highlighting, SQL suggestions, and a modern theme for an enhanced editing experience. The query editor comes with a convenient "Reset Code" button, allowing users to quickly reset the current query to Initial Query.



3. **Fullscreen Mode**

   - Description: To maximize the editing space and focus solely on the query panel, the app offers a "Fullscreen" button. When users click on this button, the sidebar and tabs are hidden, providing an unobstructed view of the query panel.

4. **Query Execution**
  - Description: Users can run SQL queries from the query editor and view the results in the corresponding query results panel.
   - Note: The app provides demo data in the form of CSV files for demonstration purposes. Users can explore the following demo queries:
    1. `SELECT * FROM customers;` - Fetches data from the `customers.csv` file.
     2. `SELECT * FROM order_details;` - Fetches data from the `order_details.csv` file.
     3. `Custom queries or queries with no specific demo data` - Fetches data from the `products.csv` file.
     
     **Demo Data:** 
     You can find the demo data at this [GitHub repository](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv). The SQL compiler fetches data from these CSV files to simulate real database queries and display the results in the query results panel.
     The data are :-
                  customers.csv
                  order_details.csv
                  products.csv
5. **Copy to Clipboard:** 
      - Description: The "Copy to Clipboard" button in this React component utilizes the clipboard-copy library to seamlessly copy SQL queries. Integrated with the popular react-toastify library, it provides real-time feedback through a toast notification when the copy operation is successful. The button enhances user experience by simplifying the process of copying code snippets and ensures a smooth interaction within the QueryRunner component.

6. **Split View for Editor and Results**

   - Description: The app includes split view using `react-split` to enhance the user experience when working with the query editor and viewing query results. Allowing users to adjust the size of the editor and results panels according to their preferences.

7. **Table Schema**

   - Description: The app also shows the schema of each table.The table schema includes the names of columns along with their respective data types. This feature provides users with a quick overview of the structure of the tables in the database and helps them understand the data they are working with.

8. **Saved Queries**

   - Description: The app allows users to save queries for future use. Users can click on a saved query to open it in a new tab for further editing and execution. The sidebar includes two demo queries that are preloaded to showcase the app's functionality:
     - **"All Customers :"** This demo query retrieves all customer data from the "customers" table.
     - **"All Order Details :"** This demo query retrieves all order details from the "order_details" table.
     -**Product :** This demo query retrieves all product details from the "products" table.
   - Note: If you delete the demo queries from the saved queries list, they will reappear on page refresh. This behavior is intentional to ensure that users can always access the demo queries for reference and testing purposes.


8. **Local Storage Integration**

   - Description: The app leverages local storage to persist the list of saved queries even after the user refreshes or closes the browser. This ensures that the saved queries are available across sessions.

9. **Dark Mode Support**

   - Description: The app provides a dark mode toggle that allows users to switch between light and dark themes, enhancing readability and reducing eye strain in low-light environments.

10. **Export to CSV**

    - Description: Users can export the query results data to a CSV file using the "Export CSV" button. The exported CSV file contains the data displayed in the query results table.

11. **Error Handling and Feedback**
    - Description: The app provides informative error messages and alerts to notify users of any issues, such as empty query names, empty queries, or when trying to close the last active tab.

## JavaScript Framework and Major Packages

- **React**: A popular front-end JavaScript library for building user interfaces.
- **Vite** :  Frontend build tool designed for modern web development, providing fast development server and optimized production builds.
- **@codemirror/lang-sql**: CodeMirror language support for SQL, enhancing code editing experiences with SQL syntax highlighting and features.

- **@uiw/codemirror-theme-github**: GitHub-themed styling for CodeMirror, providing a visually appealing code editor theme.

- **@uiw/react-codemirror**: React wrapper for CodeMirror, enabling seamless integration of CodeMirror into React applications for advanced code editing capabilities.

- **clipboard-copy**: Library simplifying text copying to the clipboard, enhancing user interaction with a straightforward copy mechanism.

- **framer-motion**: Animation library for React applications, enabling the creation of smooth and interactive UI animations.

- **lodash.debounce**: Lodash utility for creating debounced functions, useful for optimizing performance by limiting the frequency of function calls.

- **lodash.throttle**: Lodash utility for creating throttled functions, controlling the rate at which a function is invoked.

- **papaparse**: CSV parsing library for JavaScript, facilitating the parsing of CSV data in web applications.

- **react-dom**: React's package for DOM-specific methods, essential for integrating React with the Document Object Model (DOM).

- **react-split**: React component for resizable split views, enabling the creation of flexible and interactive layout designs.

- **react-toastify**: Toast notification library for React applications, providing a simple and customizable way to display notifications.

- **zustand**: State management library for React, offering a minimalistic yet powerful solution for managing global state in React applications.

- **tailwindcss**: Utility-first CSS framework for building modern web applications, streamlining the styling process with a utility-centric approach.

## Page Load Time Measurement
Performance Image (https://github.com/pallavidhakne/sql_compiler/assets/85501739/1c615926-779a-451e-b3ed-1a2571f985fd)


