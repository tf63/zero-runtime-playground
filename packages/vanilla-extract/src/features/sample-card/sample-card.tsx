import { container } from './sample-card.css'

type SampleCardProps = { text: string }

export const SampleCard = ({ text }: SampleCardProps) => {
    return <div className={container}>{text}</div>
}
