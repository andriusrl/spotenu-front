import React, { useState } from "react"
import { connect } from "react-redux"
import { signupAdmin } from "../../actions/loginSignup"
import styled from "styled-components"
import { ButtonCustom } from '../../style/style';
import NativeSelect from '@material-ui/core/NativeSelect';
import { styles } from '../../style/theme';
import MapForm from "../../utils/forms"

let token = window.localStorage.getItem("token")

const signupFormUser = [
    {
        name: "name",
        label: "Nome",
        type: "text",
        required: true,
        // pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/",
        title: "Nome do usuário",
    },
    {
        name: "email",
        label: "Email",
        type: "text",
        required: true,
        pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/",
        title: "Email do usuário",
    },
    {
        name: "nickname",
        label: "Nickname",
        type: "text",
        required: true,
        pattern: "/^@[A-Za-z0-9]+([._][A-Za-z0-9]+)*$/",
        title: "Nickname do usuário",
    },
    {
        name: "password",
        label: "Senha",
        type: "password",
        required: true,
        title: "Senha do usuário",
    }
]

const SignupWrapper = styled.form`
    width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const handleOnSubmit = (props, form) => {
    // console.log("Quase la")
    // console.log(form)
    props.signupAdmin(form, token)
}

const showForm = (setForm) => {
    return <MapForm key="signupAdmin" form={signupFormUser} returnForm={(form)=>{setForm({form: form})}} />
}

const SignupAdmin =(props)=>{
    const [form, setForm] = useState([])
        return (
            <SignupWrapper onSubmit={(e)=>{e.preventDefault();handleOnSubmit(props, form)}}>

                Signup Admin Page

                    {showForm((form)=>{setForm(form)})}

                <ButtonCustom type="submit">Criar conta</ButtonCustom>
            </SignupWrapper>
        )
}


const mapDispatchToProps = dispatch => ({
    signupAdmin: (formData, token) => dispatch(signupAdmin(formData, token))
})

export default connect(null, mapDispatchToProps)(SignupAdmin);