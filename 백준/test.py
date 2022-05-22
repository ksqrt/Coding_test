N, M = map(int, input().split())
tree = list(map(int, input().split()))
start, end = 1, max(tree) #이분탐색 검색 범위 설정

while start <= end: #적절한 벌목 높이를 찾는 알고리즘
    mid = (start+end) // 2
    
    log = 0 #벌목된 나무 총합
    for i in tree:
        # mid 보다 작은건 더하지 않고 큰것만 더함
        if i >= mid:
            # 나무길이 - 값
            log += i - mid
    
    #벌목 높이를 이분탐색
    # m 보다 나무가 길면 
    if log >= M:
        start = mid + 1
    else:
        end = mid - 1
print(end)