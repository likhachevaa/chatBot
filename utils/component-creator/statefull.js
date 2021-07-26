const fs = require('fs');
const path = require('path');
const toKebabCase = require("webpack-cli/lib/utils/to-kebab-case");

module.exports = componentName => {
    const content =
`import React, { Component } from 'react';
import './style.scss';

export default class ${componentName} extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return <div className="${toKebabCase(componentName)}">
    
        </div>;
    } 
};`;

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
};