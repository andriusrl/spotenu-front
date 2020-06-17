import React, { useState } from "react"
import { TextField } from "@material-ui/core";

export const mapForm = (form) => {

    const [getForm, setForm] = useState(form = undefined)

    const handleFormChange = (e) => {
        const { name, value } = e.target

        setForm(
            form = {
                ...form,
                [name]: value
            }
        )
    }

    return (
        form.map((form) => {
            if (form.type === "text" || form.type === "password") {
                return (
                    <div key={form.name}>
                        <TextField
                            onChange={handleFormChange}
                            id={form.name}
                            name={form.name}
                            type={form.type}
                            required={form.required}
                            pattern={form.pattern}
                            label={form.label}
                            value={getForm[form.name] || ""}
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