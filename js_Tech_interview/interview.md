What is a closure?
what is pure function?
what is aysnc/desync?

1)A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.


The closure has access to the variable in three scopes:

Variable declared in his own scope
Variable declared in parent function scope
Variable declared in the global namespace


2)Primirtive Javascript data types
number
String
boolean
undefined: Data type of variable that does not have a value yet
null: Also means 'non-existent'

3)they are 3 ways to do conditional statement
if else statement
ternary operator
switch statement


4) pure function ?
that means a pure function always returns the same result given same parameters.
benefit using pure function 
- is easy to test.


5) function declartion and function expression ?
A function declaration creates a function that you can call later in your code, the interpreter always looks for variables and function declarations before going through each section of a script, line-by -line.

This means that a function created with a function declaration 

In a function expression, the function is not processed until the interpreter gets to that statement. This means you cannot call this function before the interpreter has discovered it.

The main difference between function declarations and function expressions is that function declarations are hoisted, meaning that we can use function declarations in our code even before declaring them. Function expressions are not hoisted, so you can't call the function unless it appears earlier in your code.

Both ways of writing a function are perfectly acceptable, and besides hoisting, there is no real advantage of one over the other.

they are 3 conditional expression?
- ternary operator
- switch statement
-if else statement