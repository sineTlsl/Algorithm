def solution(n, m):
    answer = []
    
    def gcd(a, b):
        while b > 0:
            a, b = b, a % b
        return a
    
    def lcm(a, b):
        return a * b // gcd(a, b)
    
    answer.append(gcd(n, m))
    answer.append(lcm(n, m))
    
    return answer