import React from 'react';
import './index.css';
import LinkIcon from '@material-ui/icons/Link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function Div(props){
    return(
<div className="card"> 
<h4> <AccountCircleOutlinedIcon/> {props.head} </h4>
<a href={props.link}><button> {props.data} <span> <LinkIcon/></span></button></a>
</div>
);
};
export default Div;