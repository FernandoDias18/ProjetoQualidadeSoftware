import {NavLink as Rota} from 'react-router-dom'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox'



export default function NavItem({ icon, title, description, active, navSize }) {


    
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={ "flex-start"}
           
        >
            <Menu placement="right">
            <Rota to={`/${title}`} activeClassName="socorro"  >
                <Link
                    
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize === "large" && "100%"}
                >
                        <MenuButton w="100%" onClick={()=>console.log("oi")}>
                            <Flex alignItems={"center"} >
                                <Icon  as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                                <Text ml={5} display={"flex"}  > {title}</Text>
                            </Flex>
                        </MenuButton>


                </Link>
                </Rota>
                {/* <MenuList
                    py={0}
                    border="none"
                    w={0}
                    h={0}
                    ml={5}
                    backgroundColor="trasparent"
                >
                    <NavHoverBox title={title} icon={icon} description={description} />
                </MenuList> */}
            </Menu>
        </Flex>
    )
}
