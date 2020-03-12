import React , { Component } from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
class ImageList extends Component{
    constructor(props){
        super(props);
        console.log("star ImageList")
       
    }
    componentDidMount(){
        
    }
    render()
    {
        const images =   this.props.url.map((image)=>  
        <ImageCard image={image} key={image.id}  />) 
        return(
            <div className="image-list">
                {images}
            </div>
        )
        //Key property always be with root element of the list.
        // console.log(this.props);
        // return(
        //     <div> 
        //         {list} 
        //     </div>
        /* {this.props.images.map((e)=><li>{e}</li>)}</div> */
        
    }
}

export default  ImageList;