#!/usr/bin/env scala
!#
def primes(ps: Seq[Int], n: Int): Seq[Int] =
  if (ps.length>=100) ps
  else if (ps.filter(i=> i*i<=n).exists(n%_==0)) primes(ps, n+1)
  else primes(ps :+ n, n+1)

println("Primes: "+primes(Seq(), 2).mkString(", "))
