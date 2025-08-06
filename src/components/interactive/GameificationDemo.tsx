import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Star, Target } from 'lucide-react'

export function GameificationDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <CardTitle className="text-lg">Achievements</CardTitle>
          </div>
          <CardDescription>Unlock badges as you make progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="success">First Route</Badge>
            <Badge variant="secondary">Week Warrior</Badge>
            <Badge variant="outline">Community Hero</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-primary-500" />
            <CardTitle className="text-lg">Leaderboard</CardTitle>
          </div>
          <CardDescription>Compete with your community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>1. EcoWarrior22</span>
              <span>2,456 pts</span>
            </div>
            <div className="flex justify-between">
              <span>2. GreenHero</span>
              <span>2,103 pts</span>
            </div>
            <div className="flex justify-between font-medium text-primary-600">
              <span>3. You</span>
              <span>1,847 pts</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-orange-500" />
            <CardTitle className="text-lg">Challenges</CardTitle>
          </div>
          <CardDescription>Join weekly community goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Park Cleanup</span>
                <span>3/5 days</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}