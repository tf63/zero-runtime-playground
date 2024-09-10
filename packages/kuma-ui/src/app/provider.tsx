import { KumaRegistry } from '@kuma-ui/next-plugin/registry'

export const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <KumaRegistry>{children}</KumaRegistry>
}
