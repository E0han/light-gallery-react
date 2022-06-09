import "@babel/register";
import React from 'react';
import {Item} from "./Item";
import {Row} from "react-bootstrap";

export default function LightGallery({
    lg_col=4,
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