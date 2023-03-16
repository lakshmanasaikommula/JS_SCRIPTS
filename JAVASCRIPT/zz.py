p = [55,33,55,77,99]
l = list(filter(lambda x: p.index(x)%2==0,p))
print(l)

a = [' ','ram',' ']
b = list(filter(lambda x: x[0] != ' ', a))
print(b)