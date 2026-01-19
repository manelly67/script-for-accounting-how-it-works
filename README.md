##  This repository explains how the script for repetitive accounting tasks works

see the link: https://manelly67.github.io/script-for-accounting-how-it-works

### A well-designed Google Sheets + Google Apps Script system.

This approach was designed for a small company looking for a simple solution, to keep and generate all accounting records and financial statements, with manageable transaction volumes, without specialized accounting software.

### Features

-The pre-designed spreadsheet uses linked formulas and pivot tables to generate the trial balance, general ledgers, balance sheet, and income statement.

-The script was designed to write the contents of each journal entry to its respective ledger account.

- This significantly reduces the time and effort spent on this task and minimizes the possibility of human error.

- The journal entries are written with their respective account codes and amounts in the debit and credit columns, on the sheet designed for that purpose.

- The script is then executed:  Extensions =>  Macros => Name of the script.

- The script starts and first checks the data that will be posted, then sends a message asking the user to confirm if they agree.

- After user confirmation, the script begins writing the formulas and data that will enable the generation of the corresponding statements.

- The respective states will provide all updated information.

### Design highlights

 - The script is designed as a standalone Google Apps Script library, which allows for centralized management and reuse across multiple projects. This library is deployed as a versioned script in Google Drive, and its unique Script ID is used to reference it from other Google Sheets.

- By using a library, you avoid duplicating code in each spreadsheet, ensuring consistency and simplifying updates—any changes made to the library are automatically reflected in all linked spreadsheets when they are set to use the latest version.

- The accounting spreadsheet, which was previously designed for accounting records, now integrates this library to automate the repetitive task of accounting for each journal entry. This integration is achieved by adding the library to the spreadsheet’s script editor using its Script ID.

- This facilitates maintenance and testing, and avoids performance issues or quota limitations that could arise when linking scripts directly to individual spreadsheets.
 
  




