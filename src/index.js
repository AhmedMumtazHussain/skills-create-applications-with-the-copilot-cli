#!/usr/bin/env node
// CLI entry for calculator
// Supports: add (+), subtract (-), multiply (*), divide (/)

const calc = require('./calculator');

function printUsage() {
  console.error('Usage: node src/index.js <operation> <a> <b>');
  console.error('Operations: add | +, subtract | -, multiply | *, divide | /');
}

function parseNumber(s) {
  const n = Number(s);
  if (!Number.isFinite(n)) return null;
  return n;
}

async function main() {
  const [, , op, aStr, bStr] = process.argv;

  if (!op || aStr === undefined || bStr === undefined) {
    printUsage();
    process.exit(1);
  }

  const a = parseNumber(aStr);
  const b = parseNumber(bStr);

  if (a === null || b === null) {
    console.error('Invalid numeric inputs.');
    process.exit(2);
  }

  let result;
  try {
    switch (op) {
      case 'add':
      case '+':
        result = calc.add(a, b);
        break;
      case 'subtract':
      case '-':
        result = calc.subtract(a, b);
        break;
      case 'multiply':
      case '*':
        result = calc.multiply(a, b);
        break;
      case 'divide':
      case '/':
        result = calc.divide(a, b);
        break;
      default:
        console.error('Unsupported operation:', op);
        printUsage();
        process.exit(3);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(4);
  }

  console.log(result);
}

main();
