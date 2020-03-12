import React,{ Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import  ImageList  from "./ImageList";
import unsplash from '../api/Unsplash';
class App extends Component{
    constructor(props)
    {
        super(props);
        // this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.state = {
            images:[],
            num:undefined
        } 
    }
    componentDidMount()
    {
    }
     onSearchSubmit = async (term) => {
        
        const result = await unsplash.get('/search/photos/',{ 
        params:{
                query:term
            },
            headers:{
                Authorization:'Client-ID 7d2IkUk7cjiC0wLjpAyQrNIwA8YZZxGdlD_VuDcmnKU'
            }
        });
        
        console.log("pawan nikoten")
        // console.log(this.props);
        this.setState({
            images:result.data.results
        })

        
        console.log("pawan Stops");
        
        
        // console.log(this.state.images);
    }


    render()
    {
        
        return(
            <div className="ui container app">
                
                <SearchBar onSubmit={this.onSearchSubmit}  mudit="Goyal"   />
                {this.state.images.length}
                <ImageList url={this.state.images} />

            </div>
        )
    }
}
export default App;

