import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { SampleCard } from './sample-card'

type SampleCardType = typeof SampleCard

export default {
    title: 'Kuma/SampleCard',
    component: SampleCard,
    render: (props) => <SampleCard {...props} />,
    decorators: (Story: StoryFn) => (
        <KumaRegistry>
            <Story />
        </KumaRegistry>
    )
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
    args: { text: 'SampleCard Component' }
}
