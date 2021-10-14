#Project 1 documentation

## by Brian Anderson



##Introduction

My trivia app is simply a trivia game based on Walt Disney World. It will...
  • Display a random question (taken from a api pulled from Contenful)
  • Display 4 possible answers (only 1 of them is correct).
  • Upon correct guess...The player that is playing will get a point

## Technologies Used

- HTML
- CSS
- JS
- jQuery
- Ajax

## Challenges
• the first challenge for me was getting my contentful api to load...it took be 90 minutes to get it done.


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

#### Example Table

| Column1 | Column2 |
|---------|---------|
| thing1 | thing2 |
| yadda1 | yadda2 |
