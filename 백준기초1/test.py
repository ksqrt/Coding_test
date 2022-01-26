#10845
import sys
input=sys.stdin.readline

stack1 = []

def stack_util(commend):
    if commend[0] == "push":
        stack1.insert(0,int(commend[1]))
        return
    elif commend[0] == "pop":
        if len(stack1)==0:
            print(-1)
        else:
            print(stack1.pop())
        return
    elif commend[0] == "size":
        print(len(stack1))
        return
    elif commend[0] == "empty":
        if len(stack1) == 0:
            print(1)
        else:
            print(0)
        return
    elif commend[0] == "back":
        if len(stack1)==0:
            print(-1)
        else:
            print(stack1[0])
        return
    elif commend[0] == "front":
        if len(stack1)==0:
            print(-1)
        else:
            print(stack1[-1])
        return

a = int(input())

for i in range(a):
    b = list(map(str,input().split()))
    stack_util(b)