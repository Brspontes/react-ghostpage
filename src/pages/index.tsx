import { Flex, Image, Text, HStack, Box } from '@chakra-ui/react'
import Header from '../components/Header'

export default function Home() {
  return (
   <Flex direction="column" height="100vh">
    <Header />  
    <Flex width="100%" 
      maxWidth={1600} 
      height={20} 
      justifyContent="center" 
      marginX="auto" 
      marginTop="80" 
      paddingX="6" align="center">
      <HStack spacing="70">
        <Flex>
          <Image width="1400px" height="1000px" border="none" src="/skull.png" alt=""  />
        </Flex>
        <Flex width="40rem">
          <Box mt="-36" >
            <Text fontWeight="bold" color="#FFFFFF">#3 TOP SCARIEST GHOST 2020</Text>
            <Text css="-webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #000;" fontSize="5xl" fontWeight="bold" color="#FFFFFF">UOOOO <br />TRICK <br />OR TREAT!!</Text>
            <Text color="#FFFFFF">Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia.</Text>
          </Box>
        </Flex>
      </HStack>
    </Flex>
   </Flex>
  )
}
