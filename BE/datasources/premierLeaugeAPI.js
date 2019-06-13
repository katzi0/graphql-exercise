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
        const allPlayers  = response ? response.filter(player => player.team === teamID.id)  : []
        return allPlayers.map(player => this.playerReducer(player))
    }

    playerReducer(player) {
        return {
            id: player.id,
            firstName: player.first_name,
            secondName: player.second_name,
        }
    }


}

module.exports = PremierLeaugeAPI
