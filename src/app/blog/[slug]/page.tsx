import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Shield } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-accent text-sm font-semibold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-heading font-black text-white mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg mb-6">{post.description}</p>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <article className="prose-content max-w-none">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i}>{line.replace('## ', '')}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i}>{line.replace('### ', '')}</h3>
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i}>{line.replace('- ', '')}</li>
                  }
                  if (line.trim() === '') return <br key={i} />
                  if (line.trim().length > 0) {
                    return <p key={i}>{line}</p>
                  }
                  return null
                })}
              </article>

              <div className="mt-12 p-8 bg-surface rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-secondary" />
                  <h3 className="font-heading font-bold text-primary text-lg">Need a Quote?</h3>
                </div>
                <p className="text-muted mb-4">
                  Contractors Choice Agency specializes in insurance for shooting ranges, firearms instructors, and FFL dealers. Get a free, no-obligation quote today.
                </p>
                <Link href="/quote" className="btn-primary px-6 py-3 inline-block">
                  Get a Free Quote
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-heading font-bold text-white mb-3">Get Coverage Now</h3>
                <p className="text-red-100 text-sm mb-4">Speak with a specialist about your range&apos;s insurance needs.</p>
                <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-4 py-2.5 rounded block text-center text-sm hover:bg-gray-100 transition-colors">
                  Free Quote
                </Link>
                <a href="tel:8005550100" className="mt-2 block text-center text-white text-sm hover:underline">
                  (800) 555-0100
                </a>
              </div>

              {related.length > 0 && (
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-heading font-bold text-primary mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/blog/${r.slug}`} className="text-sm text-secondary hover:underline leading-snug block">
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-primary mb-4">Coverage Types</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: 'Gun Range Liability', href: '/services/gun-range-liability-insurance' },
                    { name: 'Indoor Range Insurance', href: '/services/indoor-shooting-range-insurance' },
                    { name: 'Firearms Instructor', href: '/services/firearms-instructor-insurance' },
                    { name: 'FFL Dealer Insurance', href: '/services/retail-gun-store-ffl-insurance' },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-secondary hover:underline">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
