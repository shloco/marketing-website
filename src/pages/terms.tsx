import EmbedLayout from '@/layouts/embed'

export default function TermsPage() {
  return (
    <EmbedLayout>
      <iframe
        src="/terms.html"
        className="w-full h-full"
        title="Privacy Policy"
      />
    </EmbedLayout>
  )
}
