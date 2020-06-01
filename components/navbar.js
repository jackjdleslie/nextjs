import {Box, Flex, Image, Link, Text, ThemeProvider} from "@chakra-ui/core";
import Layout from "./layout";
import React from "react";

const NavLink = ({ children, ...props }) => (
    <Link px={2} color="white" {...props}>
        {children}
    </Link>
);

export default function NavBar({ children, home }) {
    return (
        <ThemeProvider>
            <Flex
                bg="#58b4db"
                w="100%"
                px={1}
                py={1}
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    <Image
                        src="https://i.ya-webdesign.com/images/computer-emoji-png-4.png"
                        size={30}
                    />
                    <Text pl={3} color="white">
                        <Link px={3} color="white"  href="/">Ariane Hine</Link>
                    </Text>
                </Flex>
                <Box>
                    <Link px={2} color="white"  href="education">Education</Link>
                    <Link px={2} color="white"  href="workexperience">Work</Link>
                    <Link px={2} color="white"  href="skills">Skills</Link>
                </Box>
            </Flex>
        </ThemeProvider>
    );
}
