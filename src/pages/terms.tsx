import { title } from '@/components/primitives'
import terms from './terms.html?raw'
import EmbedLayout from '@/layouts/embed'

export default function TermsPage() {
  return (
    <EmbedLayout>
      <iframe
        src="./public/terms.html"
        className="w-full h-full"
        title="Privacy Policy"
      />
    </EmbedLayout>
  )
}
