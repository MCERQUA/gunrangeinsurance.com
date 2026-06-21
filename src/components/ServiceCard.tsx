import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group card flex flex-col hover:border-secondary/30 transition-all duration-300">
      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="font-heading font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>
      <div className="flex items-center gap-2 mt-4 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}
