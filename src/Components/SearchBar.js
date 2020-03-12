import React, { Component } from 'react';
class SearchBar extends Component{
    constructor(props)
    {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            term:""
        }
    }
    onInputChange(event)
    {
        // console.log(event.target.value);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        // console.log(this.state.term)
    }
    render(){
        return(
        <div className="ui segment search-bar">
            <form onSubmit={(event)=>{event.preventDefault();this.props.onSubmit(this.state.term)}} className="ui form">
                <div className="field">
                    <label>Enter the searched value</label>
                    <input type="text" placeholder="search..."
                       value={this.state.term}
                     onChange={(event)=>this.setState({term:event.target.value})}/>
                </div>       
            </form>
        </div>
        );
    }
}
export default SearchBar;