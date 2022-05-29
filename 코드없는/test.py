nums = [1, 7, 3, 6, 5, 6]


def findPivot(nums):
    _sum = sum(nums)
    _l = []
    _r = []
    for i in nums: 
        _l.append(_sum - sum(nums[0:i]))
        _r.append(_sum - sum(nums[i:len(nums)]))
        
        if _l[i] == _r[i]:
            return _l[i]

print(findPivot(nums))
