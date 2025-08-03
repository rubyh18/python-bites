#average of 3 numbers
def avg_num(a, b,c):
    sum = a+b+c
    count = 3
    avg = sum/count
    return avg


average = avg_num(413, 3455, 456)
print("the average is ", average)

#practice function
def sum(a=1, b=3):
    sum_total = a + b
    print(sum_total)
    return sum_total

sum(2, 25)

#print the length of a list.
list = [1, 2, 3, 4, 6, 7, 8, 9]
marvel = ["iron man", "Spiderman", "Captain America", "Thor", "Groot", "Rocket"]
marvel1 = ["iron man", "Spiderman", "Captain America", "Thor", "Groot", "Rocket", "Wanda"]
def tell_len(list):
    print(len(list))
    print(len(marvel))



tell_len(marvel1)   
  