# 1931 

n = int(input())
arr = []
for i in range(n):
    arr.append(list(map(int,input().split())))    
print(arr)
# 끝나는 시간이 작은순서 대로 정렬 
# 덱 정렬후 

stack = []
tmp = 0
# arr 이 빈 배열이 될때까지 반복
while arr:
    stack.append(arr[tmp])
    del arr[tmp]
    arr = list(filter(lambda x: x[0] > stack[tmp][1],arr))
    tmp += 1

print(len(stack))
