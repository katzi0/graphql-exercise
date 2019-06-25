const axios = require('axios')
const fs = require('fs')
let teamsObj = {}
let playersData = {}

const getData = async () => {
    console.log('here')
    let teams = await  axios.get('https://fantasy.premierleague.com/drf/teams')
    let { data: teamsData = [] } = teams
    teamsObj = teamsData.reduce((teamsObj, currentTeam) => {
        teamsObj[currentTeam.id] = {
            name: currentTeam.name.toString().replace(' ', '-'),
            players: []
        }
        return teamsObj
    }, {})
    console.log('finishd team parsing')

    console.log('before writing to json')
    console.log(JSON.stringify(teamsObj))
    // fs.writeFile('./json/teams.json', JSON.stringify(teamsObj), (err) => err ? console.log('error: ', err) : 'succeed')
    console.log('after writing to json')

    const players = await axios.get('https://fantasy.premierleague.com/drf/elements/')
    let { data: playersData } = players
    playersData.forEach((player, index) => {
        teamsObj[player.team] && teamsObj[player.team].players.push(`${player.first_name} ${player.second_name}`)
        console.log(`parsing player ${index + 1} from ${playersData.length}`)
    })
    console.log('before writing to json')
    fs.writeFile('./json/teams.json', JSON.stringify(teamsObj), (err) => err ? console.log('error: ', err) : 'succeed')
    console.log('after writing to json')
}

getData().then(() => {
})





