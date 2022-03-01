#17298 오큰수
import sys

n = int(sys.stdin.readline())
arr1 = [list(map(int,sys.stdin.readline().split())) for _ in range(n)]

nge = []
temp = []
for i in range(n-1):
    k = arr1[i]
    for j in range(i+1,n):
        if arr1[j] > k :
            temp.append(arr1[j])
            
    if len(temp)==0:
        nge.append(-1)
    else :
        nge.append(temp[0])
        temp.clear()
         
nge.append(-1)
print(nge)