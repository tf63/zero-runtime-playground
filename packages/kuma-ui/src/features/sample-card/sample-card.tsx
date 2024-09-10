import { Box } from '@kuma-ui/core'

type SampleCardProps = { text: string }

export const SampleCard = ({ text }: SampleCardProps) => {
    return (
        <Box p={16} bg="violet" color={'white'} borderRadius={10} textAlign={'center'}>
            {text}
        </Box>
    )
}
