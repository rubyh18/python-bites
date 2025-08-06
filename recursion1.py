def cal_nat(n):
    if n == 0:
        return
    print(n)
    cal_nat(n-1) + n

cal_nat(6)    