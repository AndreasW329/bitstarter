#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";

function primes(ps, n) {
  if (ps.length>=100) return ps;          // got 100 primes, we are done
  else {
    if (ps.
      filter(function(i){return i*i<=n}). // check all potential factors
      some(function(i){return n%i==0})    // if any of them divide,
    ) return primes(ps, n+1);                // not prime, try next
    else return primes(ps.concat([n]), n+1); // otherwise, add to list.
  }
}

/* Compare with Scala version:
def primes(ps: Seq[Int], n: Int) =
  if (ps.length>=100) ps
  else if (ps.filter(i=> i*i<=n).exists(n%_==0)) primes(ps, n+1)
  else primes(ps :+ n, n+1)

less lines, less semicolons, less braces ...
more type safety
*/

var out = primes([], 2)
console.log("Primes: " + out);
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

