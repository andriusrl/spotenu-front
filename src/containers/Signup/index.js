import React from "react"
import { connect } from "react-redux"
import { signup } from "../../actions/loginSignup"
import styled from "styled-components"
import { ButtonCustom } from '../../style/style';
import NativeSelect from '@material-ui/core/NativeSelect';
import { styles } from '../../style/theme';
import MapForm from "../../utils/forms"

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

const signupFormBand = [
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
        name: "description",
        label: "Descrição",
        type: "text",
        required: true,
        // pattern: "/^@[A-Za-z0-9]+([._][A-Za-z0-9]+)*$/",
        title: "Descrição da banda",
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

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userType: "listener",
            form: []
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state.form)
    }

    handleChangeUserType = (e) => {
        this.setState({ userType: e.target.value })
    }


    showForm = () => {
        return this.state.userType == "listener" ?
            <MapForm key="listener" form={signupFormUser} returnForm={(form)=>{this.setState({form: form})}} /> :
            <MapForm key="band" form={signupFormBand} returnForm={(form)=>{this.setState({form: form})}} />
    }

    render() {
        return (
            <SignupWrapper onSubmit={this.handleOnSubmit}>
                <span>
                    <label>Cadastrar como </label>
                    <NativeSelect
                        value={this.state.userType}
                        onChange={this.handleChangeUserType}
                        name="age"
                        className={styles.selectEmpty}
                    >
                        <option value="listener">Ouvinte</option>
                        <option value="band">Banda</option>
                    </NativeSelect>
                </span>

                {this.showForm()}

                <ButtonCustom type="submit">Criar conta</ButtonCustom>
            </SignupWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signup: (formData) => dispatch(signup(formData))
})

export default connect(null, mapDispatchToProps)(Signup);