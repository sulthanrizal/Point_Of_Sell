import { Box, Text } from "@chakra-ui/react"
import './home.scss'
import { ImgSearch } from "./imgSvg";
import moment from "moment";
import BarHome from "./barHome"
import { useState } from "react";
import routerMenuHome from "./routerMenuHome";
const Home = () => {
    const [ubahPageHome, setUbahPageHome] = useState(false)
    const date = new Date()
    const today = moment(date).format('dddd, D MMM YYYY')
    const [selectedBar, setSelectedBar] = useState("/hotdishes")

    return (
        <Box className="container-home">
            <Box className="header-home">
                <Box className="header-first">
                    <Text>Jaegar Resto</Text>
                    <Text>{today}</Text>

                </Box>
                <Box className="header-last">
                    <ImgSearch />
                    <input placeholder="search for food ,coffe, etc.." />
                </Box>
            </Box>
            <Box className="flex-navbar">
                <Box className="navbar-title-box">
                    {
                        BarHome.map((item) => {
                            return (
                                <Box
                                    onClick={() => setSelectedBar(item?.path)}
                                    className={`navbar-title ${selectedBar === item?.path && "selected-navbar"}`}  >
                                    {item?.titleBar}
                                    {console.log(selectedBar)}
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box className="navbar-input">
                    <Text>Choose Dishes</Text>
                    <select name="pilih">
                        <option value=''>Dine In</option>
                        <option>Dessert</option>
                    </select>
                </Box>
                <Box className="container-menu-bar">
                    {
                        routerMenuHome.map((item) => {
                            const pathMenuHome = item?.path
                            const element = item?.element

                            return (
                                <Box className="col-menu-bar">
                                    {
                                        selectedBar === pathMenuHome ?
                                            element :
                                            ''
                                    }
                                </Box>
                            )
                        })

                    }
                </Box>
            </Box>
        </Box>
    )
}
export default Home;