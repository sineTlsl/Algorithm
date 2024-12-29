from collections import deque

def solution(arr):
    queue = deque()
    
    for num in arr:
        if not queue or queue[-1] != num:
            queue.append(num)
            
    return list(queue)