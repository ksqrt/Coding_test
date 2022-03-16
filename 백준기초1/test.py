# 6588 골드바흐의 추축

import sys
input = sys.stdin.readline


n = 1000000
primes = []
arr = [False,False]+[True]*(n+1)
for i in range(2,n+1):
    if arr[i] == True:
        primes.append(i)
        for j in range(2*i,n+1,i):
            arr[j] = False

li = []

while True:
    breaker =  True
    a = int(input())
    if a == 0 :
        break
    for i in range(len(primes)):
        for j in range(i,len(primes)):
            if primes[i] + primes[j] == a :
                print(a,"=",primes[i],"+",primes[j])
                # 이중for 문의 break 기술 
                breaker = False
                break
        if(breaker == False):
            break
