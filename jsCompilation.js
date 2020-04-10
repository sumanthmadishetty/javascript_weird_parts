// // https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md

// //
// Tokenizing/Lexing:
//  breaking up a string of characters into meaningful (to the language) chunks, called tokens.
//     For instance, consider the program: var a = 2;.
//     This program would likely be broken up into the following tokens: var, a, =, 2, and ;.
//      Whitespace may or may not be persisted as a token, depending on whether it's meaningful or not.

//      (The difference between tokenizing and lexing is subtle and academic,
//      but it centers on whether or not these tokens are identified in a stateless or stateful way.
//      Put simply, if the tokenizer were to invoke stateful parsing rules to figure out whether a should be considered a distinct token or just part of another token,
// that would be lexing.)

// Parsing:
//   taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program.
//   This is called an Abstract Syntax Tree (AST).

//   For example, the tree for var a = 2; might start with a top-level node called VariableDeclaration, with a child node called Identifier (whose value is a),
// and another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2).

// Code Generation:
// taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, and other factors.

// The JS engine takes the just described AST for var a = 2; and turns it into a set of machine instructions to actually create a variable called a
// (including reserving memory, etc.), and then store a value into a.
