import React, { useReducer, useState } from "react"
import { TextField } from "@material-ui/core";

class MapForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: props.form,
            formValues: []
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state.form)
    }

    handleFormChange = (e) => {
        const { name, value } = e.target

        this.setState({
            formValues: {
                ...this.state.formValues,
                [name]: value
            }
        })
        this.props.returnForm({...this.state.formValues, [name]: value})
    }

    showform = () => {
        return (
            this.state.form.map((form) => {
                if (form.type === "text" || form.type === "password") {
                    return (
                        <div key={form.name}>
                            <TextField
                                onChange={this.handleFormChange}
                                id={form.name}
                                name={form.name}
                                type={form.type}
                                required={form.required}
                                pattern={form.pattern}
                                label={form.label}
                                value={this.state.formValues[form.name] || ""}
                            />
                        </div>
                    )
                }
                return (
                    <div>Tipo de formulário não encontrado</div>
                )

            })
        )
    }

    render() {
        return (
            <div>{this.showform()}</div>
        )
    }
}

export default MapForm;