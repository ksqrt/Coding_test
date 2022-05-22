n = int(input())
k = int(input())

arr = [[1]*n]*n

for i in range(n):
    for j in range(n):
        arr[i][j] = (i+1)*(j+1)

print(arr)

