import React from "react"
import {  Col , Alert } from "reactstrap"


const customAlertStyles = {
    main: {
        backgroundColor: 'rgba(0,0,0,0)' ,
        maxWidth: '600px' ,
        margin: '3px auto',
    },
    link: {
        textDecoration: 'none',
    }
}

export default function CustomAlert(props) {
  return (
        
        <Alert color="secondary" style={customAlertStyles.main}><a href={props.url} target="_blank" rel="noreferrer" style={customAlertStyles.link}>{props.name}</a></Alert>
        
  )
}