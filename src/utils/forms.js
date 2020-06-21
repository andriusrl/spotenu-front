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

        // console.log(e.target)
        // console.log("UEHHHHHHHHHHHHHHHHH")
        // console.log(name)
        // console.log(value)

        // console.log(this.state.form)
        // console.log(this.state.form.name)

        this.setState({
            formValues: {
                ...this.state.formValues,
                [name]: value
            }
        })
        // console.log(this.state.form)
        // console.log(this.state.form.name)

    }

    showform = () => {
        return (
            this.state.form.map((form) => {
                if (form.type === "text" || form.type === "password") {
                    // console.log(form)
                    // console.log(this.state.formValues)
                    // console.log.log(this.state.formValues)
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


// showform = () => {
//     return (
//         this.state.form.map((form) => {
//             if (form.type === "text" || form.type === "password") {
//                 let test = undefined;
//                 return (
//                     <div key={form.name}>
//                         <TextField
//                             onChange={this.handleFormChange}
//                             id={form.name}
//                             name={form.name}
//                             type={form.type}
//                             required={form.required}
//                             pattern={form.pattern}
//                             label={form.label}
//                             value={this.state[form.name] || ""}
//                         />
//                     </div>
//                 )
//             }
//             return (
//                 <div>Tipo de formulário não encontrado</div>
//             )

//         })
//     )
// }