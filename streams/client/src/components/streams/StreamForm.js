import React from 'react';
import { Field, Form } from 'react-final-form';

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        // only ran if the user did not enter the title
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        // only ran if the user did not enter the title
        errors.description = 'You must enter a description';
    }
    return errors;
}

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
        return null;
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <Form initialValues={this.props.initialValues}
                validate={validate}
                onSubmit={this.onFormSubmit}>
                {({ handleSubmit }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="ui form error"
                    >
                        <Field name="title" component={this.renderInput} label="Enter Title" />
                        <Field name="description" component={this.renderInput} label="Enter Description" />
                        <button className="ui button primary">Submit</button>
                    </form>
                )}
            </Form>
        );
    }
}

export default StreamForm;