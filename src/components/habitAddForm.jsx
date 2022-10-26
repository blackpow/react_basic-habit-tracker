import React, { PureComponent } from 'react';

class habitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    
    render() {
        return (
            <>
                <form ref={this.formRef} action="" className="add-form" onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} type="text" className="add-input" placeholder="habit"/>
                    <button className="add-button">ADD</button>
                </form>                
            </>
        );
    }
}

export default habitAddForm;