// function ranomQutes() {
//     var qoure = [
//       "“Be yourself; everyone else is already taken.”",
//       "“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can t handle me at my worst, then you sure as hell don t deserve me at my best.”",
//       "“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”",
//     ];
//     var other = ["― Oscar Wilde", "― Marilyn Monroe", "― Albert Einstein"];
//     var num = Math.floor(Math.random() * qoure.length);
//     console.log(qoure[num]);
//     console.log(other[num]);

//     }

function QuoteOfTheDay() {
  var Quote = [
    "“Be yourself; everyone else is already taken.”",
    "“Do one thing every day that scares you”",
    "“We are what we pretend to be, so we must be careful about what we pretend to be” Kurt Vonnegut”",
    "“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too”",
    "“Study nature, love nature, stay close to nature. It will never fail you",
    "“I wish it need not have happened in my time,",
    "“So do I,said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us”",
    "“There comes a time when the world gets quiet and the only thing left is your own heart. So you'd better learn the sound of it. Otherwise you'll never understand what it's saying.”",
    "“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”",
    "“It is the time you have wasted for your rose that makes your rose so important.”",
    "“Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this.”",
    "“How did it get so late so soon?”",
    "“Don't waste your time with explanations: people only hear what they want to hear.”",
    "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”",
    "“You can have it all. Just not all at once.”",
    "“Don't spend time beating on a wall, hoping to transform it into a door. ”",
    "“We are what we pretend to be, so we must be careful about what we pretend to be.”",
    "“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”",
    "“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.”",
    "“Hold fast to dreams,For if dreams dieLife is a broken-winged bird,That cannot fly.”",
    "“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye",
    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",
  ];
  var Author = [
    " Oscar Wilde",
    "Eleanor Roosevelt",
    "Mother Night",
    "  Paulo Coelho, The Alchemist",
    "Frank Lloyd Wright",
    "J.R.R. Tolkien, The Fellowship of the Ring",
    "Sarah Dessen, Just Listen",
    "Roy T. Bennett",
    "Antoine de Saint-Exupéry, The Little Prince",
    " Dave Eggers",
    "Dr. Seuss",
    "Paulo Coelho",
    "Mother Theresa",
    "Oprah Winfrey",
    "Coco Chanel",
    " Kurt Vonnegut, Mother Night",
    "Paulo Coelho, The Alchemist",
    "“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.”",
    "Langston Hughes",
    "Antoine de Saint-Exupéry, The Little Prince",
    "Roy T. Bennett, The Light in the Heart",
  ];
  var randomQuoteQuote = Math.floor(Math.random() * Quote.length);
  var randomQuote = Quote[randomQuoteQuote];
  var randomAuthor = Author[randomQuoteQuote];
  document.getElementById("Quote").innerHTML = randomQuote;
  document.getElementById("Author").innerHTML = randomAuthor;
}
