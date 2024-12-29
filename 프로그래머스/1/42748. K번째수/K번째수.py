def solution(array, commands):
    answer = []
    
    for arr_num in commands:
        i, j, k = arr_num
        sliced = sorted(array[i - 1:j])
        answer.append(sliced[k-1])
        
    return answer