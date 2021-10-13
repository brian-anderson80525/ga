//•••••••••••••••
//  APP STATE
//•••••••••••••••

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}

}
let questions = []

//•••••••••••••••
//  MAIN DOM ELEMENTS
//•••••••••••••••

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $plyr1score = $("#playr1 h4")
const $plyr2score = $("#playr2 h4")


//•••••••••••••••
//  FUNCTIONS
//•••••••••••••••

const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

   //update question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)
    //answer.innerText = randomQuestion.answer

    //update players score
    $plyr1score.text(state.player1)
    $plyr2score.text(state.player2)
}










const URL = "https://cdn.contentful.com/spaces/65xpfl7lwlp1/environments/master-2021-10-12/entries?access_token=sH6cuOfVp4bRtP3XNLdm2rM5HGLuAs6HGW8nV2PcnX8&content_type=DisneyTriviaQ"
$.ajax(URL)
.then((data) => {
questions = data.items.map((q) => q.fields)
console.log(data)
console.log(questions)

setBoard(questions)
}) 