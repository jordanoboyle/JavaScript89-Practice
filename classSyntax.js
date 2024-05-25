class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}
let song1 = new Song("Get Low", "Usher", "4:35");
console.log(song1); //this pulls the actual object
console.log(song1.name, song1.artist, song1.duration); //this will pull individual pieces

/* Here we are looking at traditional Javascript syntax. While similar to ruby and python, there are some differences. 
Ruby requires 
class <ClassName>
  def initialize
    @<var_name> = var_name
  end
end

obj = new.ClassName(parameters)

*************************************

Python looks like this
class <ClassName>:
  def __init__(<var_name>)
    self.<var_name> = var_name

obj = <ClassName>(parameters)
    
I think it is fun to look at the syntactical natures and notice the discreet differences and similarities.
While similar in many ways, each has distinct differences that set them apart. 
JavaScript has one big thing which is paying attention to curly braces and parantheses. It is necessary to always balance them first 
before writing any serious code blocks. Incredibly hard to debug later (often resulting in rewriting).*/

