import React from "react"
import ImageRow from "./ImageRow"

class Dashboard extends React.PureComponent{

    constructor(){
        super();
        this.state = {
            clientId : "e238ceeffbaba9b3974ac3e35d93987c4375520c3a1a1d68f2eab7acef09d3ef",
            rowData1 : [],
            rowData2 : [],
            isLoading : true,
            searchParam : ""
        };
        this.loadImage = this.loadImage.bind(this);
        this.searchImages = this.searchImages.bind(this);
    }

    componentDidMount() {
        this.loadImage();
    }

    loadImage(){
        fetch("https://api.unsplash.com/photos/random?count=8&client_id="+this.state.clientId)
        .then(response => response.json())
        .then(data => {
            console.log("asdasd");
            var row1 = [];
            var row2 = [];
            for(let img in data){
                if(row1.length < 4){
                    //console.log(data[img].urls.raw);
                    row1.push(data[img].urls.thumb);
                }else{
                    row2.push(data[img].urls.thumb);
                }
            }
            this.setState({rowData1 : row1});
            this.setState({rowData2 : row2});
            this.setState({isLoading : false});
        });
    }

    searchImages() {
        
        fetch("https://api.unsplash.com/search/photos?query='"+this.state.searchParam
        +"'&per_page=8&client_id="+this.state.clientId)
        .then(response => response.json())
        .then(data => {
            var row1 = [];
            var row2 = [];
            for(let img in data.results){
                if(row1.length < 4){
                    //console.log(data[img].urls.raw);
                    row1.push(data.results[img].urls.thumb);
                }else{
                    row2.push(data.results[img].urls.thumb);
                }
            }
            this.setState({rowData1 : row1});
            this.setState({rowData2 : row2});
            this.setState({isLoading : false});
        })
        //this.setState({searchParam : ""});
    }

    render(){
        return (
            <div>
                <div style={{display : this.state.isLoading && "none"}}>
                    <nav className="navbar is-dark">
                        <div className="container">
                            <div id="navbarMenu" className="navbar-brand">
                                <label className="navbar-item">Welcome {this.props.name}</label>
                                <div className="navbar-item">
                                    <input className="input" onChange={e => this.setState({searchParam : e.target.value})}
                                        type="text" placeholder="search" name="search"/>
                                </div>
                                <div className="navbar-item">
                                    <button onClick={ this.searchImages } className="button">search</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <br/>
                    <ImageRow urls={this.state.rowData1} />
                    <ImageRow urls={this.state.rowData2} />
                </div>
                
            </div>
        );
    }
    
}

export default Dashboard