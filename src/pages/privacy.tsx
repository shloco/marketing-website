import EmbedLayout from '@/layouts/embed'

export default function PrivacyPage() {
  return (
    <EmbedLayout>
      <iframe
        src="/privacy.html"
        className="w-full h-full"
        title="Privacy Policy"
      />
    </EmbedLayout>
  )
}
