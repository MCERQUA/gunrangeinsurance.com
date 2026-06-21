import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shooting Range Insurance Resources & Blog',
  description: 'Expert articles on gun range insurance, firearms instructor coverage, FFL dealer insurance, and shooting facility risk management from Contractors Choice Agency.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
            Shooting Range Insurance Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert guidance on coverage for gun ranges, firearms instructors, FFL dealers, and shooting sports facilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted text-center py-20">No posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="p-6">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{post.category}</span>
                    <h2 className="mt-2 text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors leading-tight mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">Ready to Protect Your Range?</h2>
            <p className="text-red-100 mb-6">Get a free, no-obligation quote from shooting range insurance specialists.</p>
            <Link href="/quote" className="bg-white text-secondary font-heading font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
