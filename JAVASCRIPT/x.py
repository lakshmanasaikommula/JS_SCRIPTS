fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(lambda s: s[0] == "A", fruit)

print(list(map_object))

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filter_object = filter(lambda s: s[0] == "A", fruit)

print(list(filter_object))


from functools import reduce

list = [2, 4, 7, 3]
print(reduce(lambda x, y: x + y, list))
print("With an initial value: " + str(reduce(lambda x, y: x + y, list, 10)))

z = [" ",'india','united states',' ','china','japan']

cc = filter(lambda x: x[0]!=' ',z)
#print(list(cc))

k = [1,2,3,4,5,6,7,8,9,0]
a = sum(k)//len(k)
aa = list(filter(lambda x: x>a,k))
print(aa)