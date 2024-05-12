import { Box, Text } from "@chakra-ui/react"
import menuHotDishes from "./menuHotDishes"

const MenuHotDishes = () => {
    return (
        <>
            {
                menuHotDishes.map((item, index) => (
                    index <= 9 ?
                        (
                            <Box className="menu-bar"
                            // onClick={() => { setUbahPageHome(true) }}
                            >
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
                        :
                        ''
                ))
            }
        </>
    )
}

export default MenuHotDishes;