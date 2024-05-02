import { Box, color } from "@chakra-ui/react";
import './header.scss'
import ImgSvgHeader from "./imgSvgHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { onClickNav } from "../../@dashboardComponents/onClickNav";

const Header = () => {
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const [changeColor, setChangeColor] = useState('#EA7C69')

    const handleOnclick = (active, path) => {
        setNav(active)
        onClickNav({ path: path, navigate })

    }
    return (
        <Box className="container-header">
            <Box className="col-header" >
                {
                    ImgSvgHeader?.map((img, index) => {
                        const active = img?.active
                        const path = img?.path

                        return (
                            <Box className={`content-header ${nav === active && 'active-mode-out'}`} onClick={() => { handleOnclick(active, path) }}>
                                <Box className={`img - components ${nav === active && 'active-mode-in'} `} >
                                    {/* {console.log(active)} */}
                                    {img?.imageComponent({ navigate: navigate, changeColor: nav === active ? 'white' : '#EA7C69' })}
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box >
    )
}
export default Header