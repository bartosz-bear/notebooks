import copy

class Solider():
    health = 5

    def take_damage(self, damage):
        self.health -= damage

    @staticmethod
    def static_damage():
        print('doing damage')

    def __init__(self):
        self.health = 10

#
print('class attribute', Solider.health)

a = Solider()
a.ama = 6

print('instance attribute', a.health)

print(a.health)
print(a.ama)

a.take_damage(2)

print(a.health)

print(Solider.static_damage())

deep_copy1 = copy.deepcopy(Solider)

class_var = Solider
print('what is', class_var)

class_var.health = 150

print('copy', Solider.health)


print('deep copy health', deep_copy1.health)