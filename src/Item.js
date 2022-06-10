import React from 'react';
import { useState } from "react";
import { Col } from "react-bootstrap";

function Item({index,img_src, img_padding, lg_col,md_col,xs_col}){
    const [layout, setLayout] = useState({
        lg_col:lg_col,
        md_col:md_col,
        xs_col:xs_col
    });

    const handleLayout =({target:image})=>{
        if(image.offsetHeight > image.offsetWidth){
            //this image is a vertical image
        }else if(image.offsetHeight < image.offsetWidth){
            //this image is a horizontal image
            setLayout({
                lg_col:lg_col+lg_col,
                md_col:md_col+md_col,
                xs_col:xs_col+md_col
            })
        }else{
            //this image is square
            
        }
    }
    return(
        <Col lg={layout.lg_col} md={layout.md_col} xs={layout.xs_col} key={index} style={{display:"inline-block", overflow:"hidden",padding:img_padding}}>
                <img onLoad={handleLayout} src={img_src} style={{width:"100%"}}></img>
        </Col>
    )
}

export default Item;