const { paginateResults } = require('./utils')

module.exports = {
    Query: {
        playersByTeam: (_, id, { dataSources }) =>
            dataSources.premierLeaugeAPI.getPlayersByTeamID(id),
        players: async (_, { pageSize = 20, after }, { dataSources }) => {
            const allPlayers = await dataSources.premierLeaugeAPI.getPlayers()
            // we want these in reverse chronological order
            allPlayers.reverse()

            const players = paginateResults({
                after,
                pageSize,
                results: allPlayers
            })
            return {
                players,
                cursor: players.length ? players[players.length - 1].cursor : null,
                // if the cursor of the end of the paginated results is the same as the
                // last item in _all_ results, then there are no more results after this
                hasMore: players.length
                    ? players[players.length - 1].cursor !==
                    allPlayers[allPlayers.length - 1].cursor
                    : false
            }
        },
        teams: (_,id , { dataSources }) =>
            dataSources.premierLeaugeAPI.getTeams()
    }
}
