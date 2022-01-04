#1406 
import sys
stack_L =  list(sys.stdin.readline().strip())
stack_R = []
n = int(input())

for i in range(n):
    temp =  sys.stdin.readline()
    if  temp[0] == "L":
        if len(stack_L) != 0 :
            stack_R.append(stack_L.pop())
    elif temp[0] == "D":
        if len(stack_R) != 0 :
            stack_L.append(stack_R.pop())
    elif temp[0] == "B":
        if len(stack_L) != 0 :
            stack_L.pop()
    elif temp[0] == "P":
            stack_L.append((temp[2]))   
            
stack_R.reverse()
stack_L.extend(stack_R) 

print("".join(stack_L))
