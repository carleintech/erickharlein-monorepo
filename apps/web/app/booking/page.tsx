import { Calendar, Clock, Video, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@erickharlein/ui';
import { BookingForm } from '@/components/booking-form';

const services = [
  {
    type: 'CONSULTATION',
    title: 'General Consultation',
    duration: 60,
    description: 'Discuss your project, get technical advice, and explore potential solutions.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💡',
  },
  {
    type: 'TECH_REVIEW',
    title: 'Technical Review',
    duration: 90,
    description: 'In-depth review of your system architecture, code, or technical stack.',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🔍',
  },
  {
    type: 'SYSTEM_DESIGN',
    title: 'System Design Session',
    duration: 120,
    description: 'Collaborative system architecture and design planning for your project.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🏗️',
  },
  {
    type: 'AI_STRATEGY',
    title: 'AI Strategy',
    duration: 90,
    description: 'Strategic planning for AI integration, deployment, and governance.',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🤖',
  },
  {
    type: 'MENTORSHIP',
    title: 'Mentorship Session',
    duration: 60,
    description: 'Career guidance, technical mentorship, and professional development.',
    gradient: 'from-orange-500 to-amber-500',
    icon: '🎓',
  },
];

export default function BookingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="container py-12 max-w-6xl">
        {/* Header */}
        <div className="space-y-6 mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Schedule a Session</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Book a Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Schedule a one-on-one session to discuss your project, get technical advice, or explore collaboration
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div className="space-y-6">
            <Card className="glass hover:scale-[1.01] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms' }}>
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardHeader>
                <CardTitle className="text-2xl">Services Offered</CardTitle>
                <CardDescription>Choose the service that best fits your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {services.map((service, index) => (
                  <div 
                    key={service.type} 
                    className="group p-4 rounded-xl glass border-l-4 hover:scale-[1.02] transition-all duration-300"
                    style={{ 
                      borderImage: `linear-gradient(to bottom, var(--tw-gradient-stops)) 1`,
                      borderImageSlice: 1,
                      animationDelay: `${(index + 1) * 100}ms`
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} text-white flex items-center gap-1 whitespace-nowrap`}>
                            <Clock className="h-3 w-3" />
                            {service.duration}m
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass hover:scale-[1.01] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
                <CardDescription>Simple 4-step process to book your session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Select Service & Time</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Choose the service type and preferred date/time</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Submit Request</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Fill out the form with your information and needs</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Confirmation</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Receive confirmation email with meeting details within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Meet Online</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Join the video call at the scheduled time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-2 border-indigo-500/30 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '600ms' }}>
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex-shrink-0">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground flex items-center gap-2">
                    Virtual Meetings
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All consultations are conducted via video call (Zoom, Google Meet, or Microsoft Teams). 
                    Link will be provided in your confirmation email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '800ms' }}>
            <Card className="glass hover:shadow-2xl transition-all duration-300 sticky top-4">
              <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
              <CardHeader>
                <CardTitle className="text-2xl">Request a Session</CardTitle>
                <CardDescription>Fill out the form below to request a consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm services={services} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
