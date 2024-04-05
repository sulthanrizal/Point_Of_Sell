import { Box } from "@chakra-ui/react"
import Header from "../@components/header";
import './dashboardcomponents.scss'

const DashboardContainer = ({ children }) => {
    return (
        <Box className="container-dashboard-components">
            <Box className="container-header">
                <Header />
            </Box>
            <Box className="container-body">
                {children}
            </Box>
            {/* <Box className=""></Box> */}
        </Box>
    )
}
export default DashboardContainer;