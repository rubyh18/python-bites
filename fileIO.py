#to create a file and write some data. 
f = open("practice.txt", "w")
data =f.write(" Hi everyone \n We are learning File I/O \n using Java. \n I like programming in Java.")
f.close()
#replace the word Java with Python.
f = open("practice.txt", "r+")
data1 = f.read()
data2 = data1.replace("Java", "Python")
print(data2)

#search if the word 'learning' exists in the file.
with open("practice.txt", "r") as f:
  data = f.read()
  print(data)
  if(data.find("learning") != -1):
    print("found")
  else:
    print("NOT found")