import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardContainer from './@dashboardComponents';
import routers from './@routers';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box className='container-app'>
          <DashboardContainer>
            <Routes>
              {
                routers?.map(({ path, element }, index) => {
                  return (
                    <Route key={index} path={path} element={element} />
                  )
                })
              }
            </Routes>
          </DashboardContainer>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
