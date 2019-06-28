import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TeamSelect from './TeamSelect/TeamSelect'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Container>
            <Button variant="contained" className={classes.button}>
                Default
            </Button>
            <span>test</span>
            <TeamSelect/>
        </Container>
    )
}

export default Header
