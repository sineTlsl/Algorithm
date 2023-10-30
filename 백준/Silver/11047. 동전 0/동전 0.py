N, K = map(int, input().split())
coinArr = [int(input()) for _ in range(N)]
cnt = 0

for i in range(N-1, -1, -1):
    cnt += K // coinArr[i]
    K %= coinArr[i]
    if K == 0:
        break

print(cnt)
