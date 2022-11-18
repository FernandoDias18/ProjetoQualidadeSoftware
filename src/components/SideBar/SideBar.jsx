
import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiHome,
    FiCalendar,
} from 'react-icons/fi'

import { CgDanger } from 'react-icons/cg'
import { BsListCheck } from 'react-icons/bs'


import NavItem from './NavItem'


export default function SideBar() {
    const [navSize, changeNavSize] = useState("large")
    
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={"30px"}
            w={"250px"}
            flexDir="column"
            justifyContent="space-between"
            transitionDuration="200ms"
            
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={"flex-start"}
                as="nav"
                
            >
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active={false} />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendario" active={false} />
                <NavItem navSize={navSize} icon={BsListCheck} title="Check-list" active={false} />
                <NavItem navSize={navSize} icon={CgDanger} title="non-compliances" active={false} />
                <NavItem navSize={navSize} icon={CgDanger} title="item" active={false} />
                <NavItem navSize={navSize} icon={CgDanger} title="item"  active={false}/>
                <NavItem navSize={navSize} icon={CgDanger} title="item"  active={false}/>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={ "flex-start"}
                mb={4}
            >
                <Divider display={"flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={ "flex"}>
                        <Heading as="h3" size="sm"> User Name</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
