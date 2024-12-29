def solution(arr):
    queue = []
    
    for num in arr:
        if not queue or queue[-1] != num:
            queue.append(num)
            
    return queue