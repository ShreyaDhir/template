import { Conatainer } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const Page = () => {
    return (
        <Conatainer>
            <Box borderRadius="lg" bg="red" p={3} mb={6} algin="center">
                Hello, I&apos;m a front-end developer based in India!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Shreya Dhir
                    </Heading>
                    <p>Front-end Developer (React.js / React Native)</p>
                </Box>
            </Box>
        </Conatainer>
    )
}

export default Page;