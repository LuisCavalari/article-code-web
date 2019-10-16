import React from 'react';

import { Container } from './styles';

export default function Title({icon,title}) {
    return (
        <Container>
            <i className={`fa fa-${icon}`} ></i>
            {title}
            <div className="line">
                
            </div>
        </Container>
    )
}
