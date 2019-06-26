const { RESTDataSource } = require('apollo-datasource-rest')

class PremierLeaugeAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://fantasy.premierleague.com/drf/'
    }

    async getPlayers() {
        const response = await this.get('elements')
        return Array.isArray(response) ? response.map(player => this.playerReducer(player)) : []
    }

    async getPlayersByTeamID(teamID) {
        const response = await this.get('elements')
        const allPlayers = response ? response.filter(player => player.team === teamID.id) : []
        return allPlayers.map(player => this.playerReducer(player))
    }

    async getTeams(){
        const response = await this.get('teams')
        return Array.isArray(response) ? response.map(team => this.teamReducer(team)) : []
    }

    playerReducer(player) {
        return {
            id: player.id,
            cursor: player.id,
            firstName: player.first_name,
            secondName: player.second_name,
        }
    }

    teamReducer(team){
        return {
            id: team.id,
            name: team.name
        }
    }


}

module.exports = PremierLeaugeAPI
