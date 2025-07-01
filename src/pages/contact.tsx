import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We would love to hear from you! Whether you have questions,
            feedback, or just want to say hello, feel free to reach out.
          </p>
          <p className="mt-2 text-gray-600">
            You can email us at{' '}
            <a
              href="mailto:hello@shlo.co"
              className="text-blue-500 hover:underline"
            >
              hello@shlo.co
            </a>
          </p>
        </div>
      </section>
    </DefaultLayout>
  )
}
