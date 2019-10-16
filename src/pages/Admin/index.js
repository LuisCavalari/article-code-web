import React from 'react';
import Title from '../../components/Title'
import { Container, TabContent } from './styles';
import { TabList, Tab, Tabs, TabPanel } from 'react-tabs'
import UserAdmin from '../../components/UserAdmin'
import CategorieAdmin from '../../components/CategorieAdmin'
import ArticleAdmin from '../../components/ArticleAdmin'
import "react-tabs/style/react-tabs.css";
export default function Admin() {
    return (
        <Container>
            <Title icon="cogs" title="Administração do sistema" />
            <div className="tabs">

                <Tabs>
                    <TabList>
                        <Tab>Artigo</Tab>
                        <Tab>Categorias</Tab>
                        <Tab>Usuario</Tab>
                    </TabList>

                    <TabPanel>
                        <TabContent>
                            <ArticleAdmin />
                        </TabContent>
                    </TabPanel>

                    <TabPanel>
                        <TabContent>
                            <CategorieAdmin />
                        </TabContent>
                    </TabPanel>

                    <TabPanel>
                        <TabContent>
                            <UserAdmin />
                        </TabContent>
                    </TabPanel>
                </Tabs>
            </div>
        </Container>
    );
}
