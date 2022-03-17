# 9613 
def solution(nums):
    
    arr = [False,False]+[True]*(1000+1)
    primes = []
    for i in range(2,1000+1):
        if arr[i] == True:
            primes.append(i)
            for i in range(i*2,1000+1,i):
                arr[i] = False
    # print(primes)
    stack = []
    cnt = 0
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            for k in range(j+1,len(nums)):
                stack.append(nums[i])
                stack.append((nums[j]))
                stack.append((nums[k]))
                if sum(stack) in primes:
                    cnt += 1
                stack =[]
    return cnt

solution([1,2,3,4])