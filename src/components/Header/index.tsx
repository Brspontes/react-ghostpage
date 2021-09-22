import { Image, Flex, Text, Spacer, HStack, Link, Button} from '@chakra-ui/react'

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
          <Link color="#FFFFFF">Graveyard</Link>
          <Link color="#FFFFFF">Track Record</Link>
          <Link color="#FFFFFF">Services</Link>
          <Link color="#FFFFFF">Know More</Link>
          <Button color="#FFFFFF" borderColor="#FFFFFF" width="36" variant="outline" borderRadius={100}>Support</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
