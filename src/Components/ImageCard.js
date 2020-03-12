import React, { Component } from 'react';

class ImageCard extends Component{
    constructor(props)
    {

        super(props);
        this.state = {
            spans : 0
        }
        this.imageRef = React.createRef();
    }
    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setUp); 
        console.log(this.imageRef);
    }
    setUp = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/150) + 1;
        this.setState({spans});
        console.log(this.imageRef.current.clientHeight);
    }
    render(){
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref = {this.imageRef}
                alt = {this.props.image.description}
                src = {this.props.image.urls.regular}/>
            </div>
        )
    }
}
export default ImageCard;