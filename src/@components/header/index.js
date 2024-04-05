import { Box } from "@chakra-ui/react";
import './header.scss'
import ImgSvgHeader from "./imgSvgHeader";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <Box className="container-header">
            <Box className="col-header">
                {
                    ImgSvgHeader?.map((img, index) => {
                        return (
                            <Box className="content-header" index={index}>{img?.imageComponent({ navigate: navigate })} </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
export default Header