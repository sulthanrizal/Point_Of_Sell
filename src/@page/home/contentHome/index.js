import { Box, Text } from "@chakra-ui/react"
import { imgHotDishes } from "../menuHome"

const HotDishes = () => {
    return (
        <Box className="container-hotdishes">
            {
                imgHotDishes.map((item => {
                    return (
                        <Box className="menu-bar">
                            <Box className="content-menu-bar">
                                <Box className="menu-img">
                                    <img src={item?.imgMenu} />
                                </Box>
                                <Box className="text-menu">
                                    <Text className="title-menu">
                                        {item?.titleMenu}
                                    </Text>
                                    <Text className="price-menu">
                                        {item?.price}
                                    </Text>
                                    <Text className="stock-menu">
                                        {item?.stock}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    )
                }))
            }
        </Box>
    )
}
export default HotDishes;