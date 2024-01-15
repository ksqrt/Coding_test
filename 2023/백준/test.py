import heapq as hq

n = int(input())
heap = []


for i in range(n):
    k = int(input())
    if k == 0 :
        if len(heap) == 0:
            print(0)
        else:
            print(hq.heappop(heap)[1])
    else :
        hq.heappush(heap,(abs(k),k))
        