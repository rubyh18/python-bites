#print the elements of the following list using a loop
# list = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# for el in list:
#     print(el)

# search for a number x in this tuple
tuple = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
x = 64
for el in tuple:
     print(el)
     if el == x:
          print("FOUND", el)
          continue 
print("END OF LOOP")