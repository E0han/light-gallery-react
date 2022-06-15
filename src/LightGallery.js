import "@babel/register";
import React from 'react';
import Item from "./Item";
import {Row} from "react-bootstrap";

function LightGallery({
    lg_col=1,
    md_col=6,
    xs_col=6,
    div_padding="5%",
    img_padding="5%",
    images=[]
}) {
    return(
        <div className="lightgallery" style={{padding:div_padding}}>
            <Row lg={12} md={12} xs={12}>
                {
                    images.map((image, index)=>{
                        return(
                            <Item index={index} img_src={image} img_padding={img_padding} lg_col={lg_col} md_col={md_col} xs_col={xs_col}></Item>
                        )}
                    )
                }
            </Row>
        </div>
    )
}

LightGallery.protoTypes = {
    lg_col: PropTypes.number,
    md_col: PropTypes.number,
    xs_col: PropTypes.number,
    div_padding: PropTypes.string,
    img_padding: PropTypes.string,
    images: PropTypes.array
}


export default LightGallery;