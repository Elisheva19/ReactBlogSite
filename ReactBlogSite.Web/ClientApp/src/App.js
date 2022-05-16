import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import ViewBlog from './Pages/ViewBlog';
import MostRecent from './Pages/MostRecent';
import Admin from './Pages/Admin';



const App = () => {
    return (
        <Layout>
             <Route exact path='/mostrecent' component={MostRecent} />
            <Route exact path='/' component={Home} />
            <Route exact path='/viewblog/:id' component={ViewBlog} />
            <Route exact path='/admin' component={Admin} />
        </Layout>
    )
}

export default App;