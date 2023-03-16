a = [1,2,3,4,5]
map1 = list(map(lambda x:x%2==0,a))
print(map1)

filter1 = list(filter(lambda x:x%2==0,a))
print(filter1)