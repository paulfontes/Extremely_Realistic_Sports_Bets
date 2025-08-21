let bank = 100;

// let teamOneElementID = document.getElementById('team1')

const players = [
    { teamNumber: 1, emoji: "🏃‍♂️", skill: 100, name: "D'Marcus Williums" },
    { teamNumber: 1, emoji: "🤾‍♂️", skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: "🏇", skill: 88, name: "Jackmerius Tacktheratrix" },
    { teamNumber: 1, emoji: "🏌️‍♀️", skill: 50, name: "Javaris Jamar Javarison-Lamar", },
    { teamNumber: 1, emoji: "🏋️‍♂️", skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: "🏌️‍♂️", skill: 77, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: "🤾", skill: 50, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: "🏂", skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: "🧘‍♀️", skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: "🚶‍♀️", skill: 60, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: "🏋️‍♀️", skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: "🤺", skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: "🏄", skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: "🧜‍♂️", skill: 76, name: "Bisquiteen Trisket" },
    { teamNumber: 2, emoji: "🤸", skill: 47, name: "Scoish Velociraptor Maloish", },
    { teamNumber: 2, emoji: "⛹️‍♀️", skill: 23, name: "Donkey Teeth" },
    { teamNumber: 2, emoji: "🕴️", skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V", },
    { teamNumber: 2, emoji: "💃", skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: "🧍‍♂️", skill: 30, name: "Dan Smith" },
    { teamNumber: 2, emoji: "🐅", skill: 100, name: "Tiger" },
];
function draftPlayers() {
    team1Container.innerHTML = ''
    team2Container.innerHTML = ''    

    let draftTeamNumber = [1,2]
    players.forEach((player) => {
        let randomPosition = Math.floor(Math.random() * 2)
        player.teamNumber = draftTeamNumber[randomPosition]
    })
    console.log('Drafting Teams')
    drawTeam2()
    drawTeam1()
}
const team1Container = document.getElementById('team1')

function drawTeam1() {
    let team1players = players.filter((player) => player.teamNumber === 1)
    console.log(team1players)
    team1players.forEach((player) => {
        console.log(player.emoji)
        team1Container.innerHTML += `<span>${player.emoji}</span>`
    }
)
}
const team2Container = document.getElementById('team2')

function drawTeam2() {
    let team2players = players.filter((player) => player.teamNumber === 2)
    console.log(team2players)
    team2players.forEach((player) => {
        console.log(player.emoji)
        team2Container.innerHTML += `<span>${player.emoji}</span>`
    }
)
}

// function placeBet(bid, teamNumber){
    
// }

function betTeam(bid, teamBetOn) {
    let team1Skill = 0 
    let team2Skill = 0
    
    if(bank < bid){
        
        return
    }
    
    players.forEach((player) => {
        
        if(player.teamNumber === 1) {
            team1Skill += player.skill
            // console.log(team1Skill)
        }else {
            team2Skill += player.skill
            // console.log(team2Skill)
        }
        
    })
    
    if(teamBetOn == 2) bid *= -1
    
    if(team1Skill > team2Skill){
        bank += bid 
        // window.alert("You won money")
    } else {
        bank -= bid 
        // window.alert("You lost money")
    }
    
    // return team1Skill && team2Skill
    console.log("⚽Team 1", team1Skill)
    console.log("🏐Team 2", team2Skill)
    console.log("🏦", bank)
    drawBankTotal()
    draftPlayers()
}

// function betTeam2() {
    //     let team1Skill = 0 
    //     let team2Skill = 0
    
    //     players.forEach((player) => {
        
        //         if(player.teamNumber === 2) {
            //             team2Skill += player.skill
            //             // console.log(team1Skill)
            //         }else {
                //             team2Skill += player.skill
                //             // console.log(team2Skill)
                //         }
                
                //     })
                //     if(team2Skill > team1Skill){
                    //         bank += 25,
                    //         window.alert("You won money")
                    //     } else {
                        //         bank -= 25,
                        //         window.alert("You lost money")
                        //     }
                        //     // return team1Skill && team2Skill
                        //     console.log("⚽Team 1", team1Skill)
                        //     console.log("🏐Team 2", team2Skill)
                        //     console.log("🏦", bank)
                        //     drawBankTotal()
                        // }
                        
                        
                        function drawBankTotal() {
                            let bankContainer = document.getElementById("bank")
                            bankContainer.innerHTML = `<span>${bank}</span>`
                        }
                        
                        drawBankTotal()
                        draftPlayers()
                    
                        