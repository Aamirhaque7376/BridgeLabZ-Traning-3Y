# Assignment3 – JavaScript Assignment

This folder contains separate JavaScript files for Q1–Q10. Q8 has two files so you can compare strict and non-strict behavior.

## Run the files
Install Node.js, open a terminal in this folder, and run for example:

```bash
node Q1_Dynamic_Data_Parser.js
node Q2_Employee_Bonus_Calculator.js
node Q3_Transaction_Validator.js
node Q4_Debugging_Mystery.js
node Q5_Hoisting_Lab.js
node Q6_Pyramid_Pattern_Generator.js
node Q6_Pyramid_Pattern_Generator.js 4
node Q7_Smart_Calculator.js
node Q8_Strict_Mode_Showdown.js
node Q8_NonStrict_Comparison.js
node Q9_JSON_Audit.js
node Q10_Nested_Hoisting_and_Closures.js
```

## Debugging in VS Code
1. Open this `Assignment3` folder in VS Code.
2. Open the file you want to debug.
3. Click in the left gutter beside a line number to add a breakpoint.
4. Press **F5** and choose **Node.js** if prompted.
5. Inspect variables in **VARIABLES**, add expressions under **WATCH**, and follow the **CALL STACK** panel.

## Notes
- All normal program output uses `console.log()`.
- Q1 treats `null` as a valid numeric conversion because `Number(null) === 0`; `undefined`, whitespace, `NaN` text, and nonnumeric strings are invalid.
- Q5's original sequence is documented in comments because its `let status` access throws due to the temporal dead zone. The corrected sequence runs.
- Q8's strict and non-strict examples must be run as separate files.
