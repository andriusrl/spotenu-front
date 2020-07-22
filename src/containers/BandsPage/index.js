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
import { getAllBands, approveBand } from "../../actions/admin";

const BandsPageWrapper = styled.div`
    width: 300px;
    margin: 0 auto 0 auto;
`
let token = window.localStorage.getItem("token")

class BandsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
    }
    componentDidMount() {
        this.props.getAllBands(token)
    }

    handleApprovedBand = (email) => {
        this.props.approveBand(token, email)
    }

    showBandsNotApproved = () => {
        return (
            <div>
                {this.props.bandsList.filter(band => {
                    return !band.status
                }).map(band => {
                    return (
                        <div>
                            teste
                            <div>
                                <h3>{band.name}</h3>
                                <h3>{band.email}</h3>
                            </div>
                            <button onClick={()=>{this.handleApprovedBand(band.email)}}>Aprovar</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        console.log(this.props.bandsList)
        return (
            <BandsPageWrapper>
                <h2>Bandas não aprovadas</h2>
                {this.props.bandsList ? this.showBandsNotApproved() : <div>Carregando...</div>}
            </BandsPageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        bandsList: state.users.bands,
    }
}

const mapDispatchToProps = dispatch => ({
    getAllBands: (token) => dispatch(getAllBands(token)),
    approveBand: (token, email) => dispatch(approveBand(token, email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsPage);