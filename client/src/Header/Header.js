import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import TeamSelect from './TeamSelect/TeamSelect'
import { Container } from '@material-ui/core'
import  { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

const Header = ({ id, completed, text }) => {
    const classes = useStyles()
    return (
        <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo => (
        <Container>
            <Button variant="contained" className={classes.button}>
                Default
            </Button>
            <span  onClick={toggleTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}>test</span>
            <TeamSelect />
        </Container>
    )}
    </Mutation>
    )}

export default Header
