# 15651번 
n,m = list(map(int,input().split()))

# 백트래킹을 위해 사용되는 리스트 s 

s = []
 
def dfs():
    # 재귀함수의 조건 특정 입력에 대해서는 자기자신을 
    # 호출하지않고 종료되어야함 (Base condition)
    # 또한 모든 입력은 base condition 으로 수렴해야함
    if len(s)==m:
        # " "을 띄우고 s 를 출력하는방법
        print(' '.join(map(str,s)))
        return
    
    for i in range(1,n+1):
        if i not in s:
            s.append(i)
            dfs()
            s.pop()
 
dfs()