tup = (1, 2, 3, 3, 3, 4, 5, 6, 7, 8)
i = 0
while i < len(tup):
    if(tup[i] == 4 ):
        print("FOUND 4")
        break
    print(tup[i])
        
    i += 1
print("END OF LOOP")  