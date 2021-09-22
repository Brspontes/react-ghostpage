import { Image, Flex, Text, Spacer, HStack, Button} from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex as="header" width="100%" 
      maxWidth={1600} 
      height={20} 
      justifyContent="center" 
      marginX="auto" 
      marginTop="4" 
      paddingX="6" align="center">
      <Flex>
        <Image src="/Logo.png" />
        <Text paddingLeft="2" color="#FFFFFF" fontWeight="bold">IBLIZ INC</Text>
      </Flex>
      <Spacer />
      <Flex>
        <HStack spacing="20">
          <Button variant="link" color="#FFFFFF">Graveyard</Button>
          <Button variant="link" color="#FFFFFF">Track Record</Button>
          <Button variant="link" color="#FFFFFF">Services</Button>
          <Button variant="link" color="#FFFFFF">Know More</Button>
          <Button color="#FFFFFF" borderColor="#FFFFFF" width="36" variant="outline" borderRadius={100}>Support</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
