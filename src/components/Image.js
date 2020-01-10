import React from "react";

function Image(props){
    if(props && typeof props !== 'undefined' && props.imageURL !== null && typeof props.imageURL !== 'undefined'){
        return (
            <div>
                <div className="column is-one-fourth">
                    <div className="box has-text-centered" style={{display : !props.imageURL && "none"}}>
                        <article className="media">
                            <div className="media-center" style={{'marginLeft': 'auto','marginRight': 'auto'}}>
                            {/* <img src={""+props.imageURL+""} alt="new" /> */}
                                <figure className="image is-256x256">
                                    {console.log(props.imageURL)}
                                    <img src={""+props.imageURL+""} alt="new" />
                                </figure>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }else{
        return (<div></div>);
    }
    
}
export default Image