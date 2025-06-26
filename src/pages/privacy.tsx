import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import privacy from './privacy.html?raw'
import EmbedLayout from '@/layouts/embed'

export default function PrivacyPage() {
  return (
    <EmbedLayout>
      <iframe
        src="./public/privacy.html"
        className="w-full h-full"
        title="Privacy Policy"
      />
    </EmbedLayout>
  )
}
