def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a

num1 = int(input())
num3 = []
for i in range(num1):
    num2=(list(map(int, input().split())))
    for k in range(1, len(num2)):
       for j in range(i+1,len(num2)):
            num3.append(gcd(num2[i],num2[k]))

print(num2)
print(num3)