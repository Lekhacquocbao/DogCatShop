import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import React, { Fragment } from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {

  return (
    <div>
      <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }></Route>
              )
            })}
          </Routes>
        </Router>
    </div>
  )
}

export default App;
