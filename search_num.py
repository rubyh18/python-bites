num = [4, 12, 7, 20, 33, 24, 40, 18]
x = 7
i = 0
while i < len(num):
    if(num[i] == x):
        print("FOUND at index", i)
        break
    else:
        print("Finding..") 
        i += 1  