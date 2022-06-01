# 2sum 3sum 4sum

nums = [1,3,7,4,8]
target = 7

nums.sort()

for idx1 in range(len(nums)):
    for idx2 in range(len(nums),idx1,-1):
        value = nums[idx1]+nums[idx2]
        if value == target:
            print(idx1,idx2)
        else : 
            idx2 -= 1

    
    