class Person
  attr_reader :name
  attr_writer :name
  def initialize(name)
    @name = name
  end

end

person1 = Person.new("Jimmy")
puts person1.name

puts person1.class

puts Person.class