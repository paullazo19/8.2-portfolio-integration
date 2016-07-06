export default [
  {
    heading: "CSS",
    date: "May 31st, 2016",
    paragraph1: "What are some of the 'gotchas' for writing efficient CSS? Use unique class names for elements. Use variables for colors and border styling. Use mixins for repeating code. Describe pseudo-elements and discuss what they are used for. Pseudo-elements are different states of an element, added as suffixes, identified to style the element, also adding more information to the user. An example is ':after' which places content after a defined element or ':hover' which styles an element when a user hovers the cursor over the element.",
    paragraph2: "The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage? Priority is determined by inheritance. A child element will inherit certain styling from their parent element, such as margin or font-size. This can be used to my advantage by selecting multiple elements at once with an encompassing selector like '*' or 'body' if I know I want a consistent style on all the contained elements. Even if one element needs to be changed in the group, I'd only have to apply a new style to that one element. What's the difference between inline and inline-block? An element with a display property of inline means that the element cannot accept a width or height as a property. Only the content in the element will add to the width and height. With inline-block, the element acts like a block, with the ability to be on the same line as other elements but also take a defined height and width."
  },
  {
    heading: "Test-driven Development",
    date: "May 18th, 2016",
    paragraph1: "TDD (test-driven development) is the process of writing tests for code of a product feature before the functional code is written. TDD does not actually affect functional code, meaning it doesn't alter it in anyway. Rather, it provides feedback in the form of passing or failing tests to validate whether expected events occurred in the functional code. As beneficial as these tests can be, they come with a price.",
    paragraph2: "Time. A downside of TDD is the time it requires to construct the test. Learning how to design the tests is a skill in and of itself, as well as become familiar with the libraries used for testing with javascript. Some libraries are Travis, Jenkins, and Jasmine. An example of how to test a simple javascript function can be checking if a selector is empty before and after the function is run. Another example is testing whether a selector contains a certain class."
  },
  {
    heading: "Quick thought about event delegation",
    date: "May 5th, 2016",
    paragraph1: "Event delegation is useful when html elements are dynamically created meaning they may not exist in the html doc when the page loads. By delegating an event to the parent of the element you want to place the event on and adding the child element as a third argument (second in order), it allows you to place an event on a dynamically-created element anywhere in the javascript doc.`This` is used in javascript when sharing child element information with parent elements.",
    paragraph2: "Ajax stands for asynchronous javascript and it means that information in javascript can be requested and sent in non-sequential order leading to faster computing speeds. An ajax request is a request for information at the precise time it was requested, not necessarily in the sequence of the javascript doc."
  },
  {
    heading: "My first tech meetup!",
    date: "May 5th, 2016",
    paragraph1: "I attended the monthly meetup for San Antonio Coders at the Friendly Spot on Tuesday, May 3rd. One of the attendees was a mechanical engineer. He said his day-to-day work involved working with PLCs (programmable logic controllers) to aid in the production of slurpee machines. He mainly coded in Ruby and NodeJS. Another attendee works at an interactive company and is currently on a project for a product that allows a camera on a tripod, for instance, to follow a person doing an activity like wake boarding. Unlike a GoPro which has to be statically mounted, the product he described tracks movement and records the user in action.",
    paragraph2: "Listening to these people talk about their work and how some of the tools I’m familiar with, like Node JS and React JS, are used in their work was encouraging. I wanted to attend a meetup to see people in the tech community first-hand. People interact constantly online about coding with has been a great help, but I also want to sit with people to get a sense of personalities I may work with in the near future. I am looking for my next meetup to be focused on javascript because I want to hear how people use certain lexical words in conversation."
  }
]
