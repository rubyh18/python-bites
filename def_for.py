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

#print number if its even or odd.
def take_num(n):
    if n % 2 == 0:
        print("EVEN")
    else:
        print("ODD")

take_num(788) 

#printthe num that returns the larger of the two nums
def take_digits(a, b):
    if a > b:
        print("the first val is larger =", a)
    elif b > a:
        print("the second val is larger =", b)
    else:
        print("ahh! thanks--")

take_digits(9, 7)   
