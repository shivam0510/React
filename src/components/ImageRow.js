import React from "react"
import Image from "./Image"

class ImageRow extends React.Component{
    render(){
        return(
            <div>
                <div className="columns" style={{display : this.props.urls.length === 0 && "none"}}>
                    <div className="column">
                        <Image imageURL={this.props.urls[0]}/>
                    </div>
                    <div className="column">
                        <Image imageURL={this.props.urls[1]}/>
                    </div>
                    <div className="column">
                        <Image imageURL={this.props.urls[2]}/>
                    </div>
                    <div className="column">
                        <Image imageURL={this.props.urls[3]}/>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default ImageRow