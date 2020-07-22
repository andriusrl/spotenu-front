import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { fetchFeed, createPost } from "../../actions/posts"
import { setLogged } from "../../actions/menu"
import Post from "../../components/Post"
import { ButtonCustom } from '../../style/style';
import { TextField } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { classes } from '../../style/theme';

const AdminPageWrapper = styled.div`

`
let token = window.localStorage.getItem("token")

class AdminPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }

    render() {
        return (
            <AdminPageWrapper>
                Página do admin
            </AdminPageWrapper>
        )
    }
}

export default AdminPage;