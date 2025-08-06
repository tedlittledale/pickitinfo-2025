import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, MapPin, Trophy } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Smart Route Tracking',
    description: 'GPS-powered route recording with before/after photo documentation.',
  },
  {
    icon: Users,
    title: 'Community Challenges',
    description: 'Join local cleanup events and compete in friendly environmental competitions.',
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Unlock badges, climb leaderboards, and track your environmental impact.',
  },
  {
    icon: CheckCircle,
    title: 'Council Integration',
    description: 'Direct reporting to local authorities with automated waste collection requests.',
  },
  {
    icon: Users,
    title: 'Privacy First',
    description: 'GDPR-compliant data handling with full user control over personal information.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Impact',
    description: 'See your environmental contribution with live statistics and community metrics.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose PickIt?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining community engagement with cutting-edge technology to create lasting environmental impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}