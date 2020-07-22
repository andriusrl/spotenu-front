import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { ButtonCustom } from '../../style/style';
import Card from '@material-ui/core/Card';
import { classes } from '../../style/theme';

const BandWrapper = styled(Card)`
    
`
const Name = styled(Card)`
    display: flex;
    flex-direction: column;
`

const Post = (props) => {
    return (
        <BandWrapper className={classes.card}>
            <Name>
                <span>{props.nickname}</span>
                <span>{props.email}</span>
            </Name>
            <ButtonCustom>Aprovar</ButtonCustom>
        </BandWrapper>
    )
}

export default Post;