#to calculate factorial
def cal_fact(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    print(fact) 
    

cal_fact(7)       

#to convert USD in INR
def convert(USD_val):
    INR_val = USD_val * 87.54
    print(USD_val, "USD =", INR_val)

convert(100)