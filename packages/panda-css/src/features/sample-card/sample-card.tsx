import { css } from '@repo/panda-css/styled-system/css'

type SampleCardProps = { text: string }

export const SampleCard = ({ text }: SampleCardProps) => {
    return (
        <div className={css({ textAlign: 'center', bgColor: 'violet', p: 15, rounded: 10, color: 'white' })}>
            {text}
        </div>
    )
}
