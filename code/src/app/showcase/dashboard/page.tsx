import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card"
import { Button } from "@src/components/ui/button"
import { Badge } from "@src/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar"
import { 
  Activity, 
  Users, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Calendar,
  Settings,
  Bell,
  Search,
  MoreHorizontal
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <Badge variant="secondary" className="bg-bisque-100 text-bisque-800">
              Live
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <Card className="bg-white border-bisque-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-bisque-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$45,231.89</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-bisque-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-bisque-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">+2,350</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-bisque-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Sales
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-bisque-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">+12,234</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +19% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-bisque-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Now
              </CardTitle>
              <Activity className="h-4 w-4 text-bisque-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">+573</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="bg-white border-bisque-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest updates from your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Doe", action: "completed a task", time: "2 minutes ago" },
                  { name: "Jane Smith", action: "uploaded a file", time: "5 minutes ago" },
                  { name: "Mike Johnson", action: "commented on a post", time: "10 minutes ago" },
                  { name: "Sarah Wilson", action: "created a new project", time: "1 hour ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-bisque-100 text-bisque-800">
                        {activity.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.action}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white border-bisque-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-bisque-50 hover:bg-bisque-100 border border-bisque-200">
                  <Calendar className="h-6 w-6 text-bisque-600" />
                  <span className="text-sm font-medium text-gray-700">Schedule</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-bisque-50 hover:bg-bisque-100 border border-bisque-200">
                  <Users className="h-6 w-6 text-bisque-600" />
                  <span className="text-sm font-medium text-gray-700">Team</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-bisque-50 hover:bg-bisque-100 border border-bisque-200">
                  <BarChart3 className="h-6 w-6 text-bisque-600" />
                  <span className="text-sm font-medium text-gray-700">Analytics</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-bisque-50 hover:bg-bisque-100 border border-bisque-200">
                  <Settings className="h-6 w-6 text-bisque-600" />
                  <span className="text-sm font-medium text-gray-700">Settings</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card className="bg-white border-bisque-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Recent Projects
                </CardTitle>
                <CardDescription>
                  Your latest project updates
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Website Redesign", progress: 75, status: "In Progress", team: 4 },
                { name: "Mobile App", progress: 45, status: "Planning", team: 6 },
                { name: "Marketing Campaign", progress: 90, status: "Review", team: 3 },
                { name: "Database Migration", progress: 100, status: "Completed", team: 2 },
              ].map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{project.name}</h3>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-bisque-100 text-bisque-800"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{project.team} team members</span>
                      <span>{project.progress}% complete</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-bisque-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
