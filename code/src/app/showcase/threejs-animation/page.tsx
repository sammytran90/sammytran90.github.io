import { VideoPlayer } from '@src/components/ui/video-player'

export default function VirtualShowroom() {
  const videoSrc = '/showcase/demo_threejs_interactive_model.mp4' // Placeholder - add your video file

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Three.js Animation
          </h1>
          <p className="text-gray-600">
            Three.js animation for products
          </p>
        </div>

        {/* Video Player Component */}
        <VideoPlayer
          src={videoSrc}
          className="mb-8"
        />
      </div>
    </div>
  )
}
