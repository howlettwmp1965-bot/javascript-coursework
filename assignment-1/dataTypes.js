////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    COP 2801 JavaScript
//       Assignment 1 - Data Types
//
//    William Howlett
//    St-ID 2549431
//
//    Purpose: The goal of this Program is to demonstrate working knowledge using JavaScript DataTypes.
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ASSIGNMENT - PART 1 Data Types

//  Working Storage Declaration

    let age = 25;                           // Number
    let fullName = "William Howlett";       // String
    let currentlyEnrolled = true;           // Boolean
    let futureGoal;                         // Undefined
    let completedCourse = null;             // Null

////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Main 

    // Print variable values and their data types
    console.log("Age:", age, "| Type:", typeof age);
    console.log("Full Name:", fullName, "| Type:", typeof fullName);
    console.log("Enrolled:", currentlyEnrolled, "| Type:", typeof currentlyEnrolled);
    console.log("Future Goal:", futureGoal, "| Type:", typeof futureGoal);
    console.log("Completed Course:", completedCourse, "| Type:", typeof completedCourse);

//  NULL vs. UNDEFINED Comparison
//    The NULL assignment represents the intentional assignment of a null value to a variable;
//    Undefined indeicates that the variable has been defined but a value has not been assigned to it yet.


//  ASSIGNMENT - PART 2 Type Conversion and Operations



//  Convert age (Number → String)
    let ageString = String(age);
    console.log("\n--- Age Conversion ---");
    console.log("Original:", age, "| Type:", typeof age);
    console.log("Converted:", ageString, "| Type:", typeof ageString);

    // Convert fullName (String → Boolean)
    let nameBoolean = Boolean(fullName);
    console.log("\n--- Name Conversion ---");
    console.log("Original:", fullName, "| Type:", typeof fullName);
    console.log("Converted:", nameBoolean, "| Type:", typeof nameBoolean);

    // Convert currentlyEnrolled (Boolean → Number)
    let enrolledNumber = Number(currentlyEnrolled);
    console.log("\n--- Enrollment Conversion ---");
    console.log("Original:", currentlyEnrolled, "| Type:", typeof currentlyEnrolled);
    console.log("Converted:", enrolledNumber, "| Type:", typeof enrolledNumber);

    // Convert completedCourse (Null → Number)
    let courseNumber = Number(completedCourse);
    console.log("\n--- Completed Course Conversion ---");
    console.log("Original:", completedCourse, "| Type:", typeof completedCourse);
    console.log("Converted:", courseNumber, "| Type:", typeof courseNumber);

//
//  NULL to Number Conversion 
// 
//  null converts to 0 when using Number().
//    This happens because null represents an empty or non-existent value,
//    and JavaScript treats it as 0 in numeric conversions.
//


//  ASSIGNMENT - PART 3 Arithmatic and Logical Operations



    // Create two Number variables
    let x = 10;
    let y = 3;

    console.log("\n--- Arithmetic Operations ---");

    // Addition
    console.log("Addition (x + y):", x + y);

    // Subtraction
    console.log("Subtraction (x - y):", x - y);

    // Multiplication
    console.log("Multiplication (x * y):", x * y);

    // Division
    console.log("Division (x / y):", x / y);

    // Modulus
    console.log("Modulus (x % y):", x % y);

    //  Division by 0 in javascript can produce 1 of three alternatives

//     When dividing a positive number by 0, the result is Infinity.
//     When dividing a negative number by 0, the result is -Infinity.
//     When dividing 0 by 0, the result is NaN (Not a Number).`


//  ASSIGNMENT - PART 4 (Logical Operations)

    // New Boolean variable
    let hasCompletedAssignment = false;

    console.log("\n--- Logical Operations ---");

    // AND (&&)
    console.log("AND (currentlyEnrolled && hasCompletedAssignment):",
        currentlyEnrolled && hasCompletedAssignment);

    // OR (||)
    console.log("OR (currentlyEnrolled || hasCompletedAssignment):",
        currentlyEnrolled || hasCompletedAssignment);

    // NOT (!)
    console.log("NOT (!currentlyEnrolled):", !currentlyEnrolled);
    console.log("NOT (!hasCompletedAssignment):", !hasCompletedAssignment);


//  Truth Table
// 
// A     B       A && B     A || B        !A
// true  true    true        true        false
// true  false   false       true        false
// false true    false       true        true
// false false   false       false       true
//


