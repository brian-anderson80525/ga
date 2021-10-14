#Project "Disney Trivia App" documentation

## by Brian Anderson



##Introduction

My trivia app idea comes from my trips to Walt Disney World with my fiance and (soon to be) step kids.  While standing in line, we play games (like "Heads Up") to help pass the time.  This trivia game is built to help pass the time and bring people together while standing in those lines waiting.  enjoy!
My trivia app is simply a trivia game based on Walt Disney World. It will...
  • Display a random question (taken from a api pulled from Contenful)
  • Display 4 possible answers (only 1 of them is correct).
  • Upon correct guess...The player that is playing will get a point
  • Be responsive/mobile-friendly

## Technologies Used

- HTML
- CSS
- JS
- jQuery
- Ajax
- A crap ton of Googling
- 5 Hour Energy "Extra Strength" shots
- Coffee

## Challenges - day by day
• the first challenge for me was getting my contentful api to load...it took be 90 minutes to get it done.

>End of Day - Tuesday:  I was pleased with my progress overall. I had the basics of a working trivia website.  I was getting fitted for my cape...practicing leaping over buildings in a single bound.

• Wednesday was spent learning what not to do.  Broke the js several times.  I did meditate on the code, but ran out of time to implement improvements (like keeping track of whose turn it was, a reset button, a "WIN" function, keep the app from repeating same question in game)

>End of Day - Wednesday:  i was exhausted, not feeling good about my software development skills at all.  Filled out an application at Walmart and McDonald's as a backup option. 

• Thursday was a bit of Alice In Wonderland down the rabbit hole of CSS...had a few bugs (live server not reading my background image) and my responsive attempts not great.  

>End of Day - Thursday:  I have had enough.  I got it to work and meet the requirements for MVP.  Finishing up my README.md I couldn't get my instructional modal to work..something in js was wrong.

## Trivia Sources
- https://thelifeofspicers.com/disney-world-trivia/
- https://www.funtrivia.com/en/Entertainment/Walt-Disney-World-2566.html

#### I got a little lost in syntax hell...

My broken code looked like this

```js
// const chooseAnswer = (event, question) => {
//     console.log(event)
//     if 
//     (event.target.innerText === question.answer){
//     console.log("correct")
// { if (state.which){
//     state.player1++
//     state.which = !state.which
// } 
// else {
//     state.player2++
//     state.which = !state.which
// }
// setBoard(questions)}
// } else { 
//     console.log("incorrect")
//     setBoard(questions)
//     state.which = !state.which
// }}
```

It was a giving me a problem... when it was fixed it looked like this:

```js
const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        // console.log("correct")
        if (state.which){
            state.player1++
            state.which = !state.which
        } else{
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        // console.log("incorrect")
        setBoard(questions)
        state.which = !state.which
    }
        

}
```

Thank you for your time.</br> 

brian anderson</br>
chief executive geek</br>
gadget geek apps</br>

<!-- #### Example Table -->

<!-- | Column1 | Column2 |
|---------|---------|
| thing1 | thing2 |
| yadda1 | yadda2 | -->
