import { Box, Text } from "@chakra-ui/react"
import './dashboard.scss'
import moment from "moment"
import { ContentTop } from "./contentHeader"

const Dashboard = () => {
    const newDate = new Date()
    const date = moment(newDate).format('dddd D MMM, YYYY')
    return (
        <Box className="container-dashboard">
            <Box className="header-dashboard">
                <Text>Dashboard</Text>
                <Text>{date}</Text>
            </Box>
            <Box className="content-top">
                {
                    ContentTop.map((item) => {
                        return (
                            <Box className="container-content-top">
                                <Box className="content-header-top">
                                    <Box className="content-icon">
                                        {item?.icon}
                                    </Box>
                                    <Box className="content-persen" style={{ color: item?.color }}>
                                        {item?.persen}
                                    </Box>
                                </Box>
                                <Box className="content-body-top">
                                    {item?.price}
                                </Box>
                                <Box>
                                    {item?.total}
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
export default Dashboard;