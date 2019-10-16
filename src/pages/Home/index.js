import React from 'react';
import Title from '../../components/Title'
import { Container, DataGrid, Card } from './styles';

export default function Home() {
    return (
        <>
            <Title icon="home" title="Dashboard">

            </Title>
            <Container>
                <DataGrid>
                    <Card color="rebeccapurple">
                        <i className="fa fa-folder"></i>
                        <div className="card-content">
                            <h2>Categorias</h2>
                            <span>4</span>
                        </div>
                    </Card>

                    <Card color="yellowgreen">
                        <i className="fa fa-file"></i>
                        <div className="card-content">
                            <h2>Artigo</h2>
                            <span>4</span>
                        </div>
                    </Card>

                    <Card color="royalblue"> 
                        <i className="fa fa-user"></i>
                        <div className="card-content">
                            <h2>Artigo</h2>
                            <span>4</span>
                        </div>
                    </Card>
                </DataGrid>
            </Container>
        </>
    );
}
