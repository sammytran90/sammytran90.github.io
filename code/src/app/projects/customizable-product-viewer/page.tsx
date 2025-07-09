import { VideoPlayer } from '@src/components/ui/video-player'
export default function CustomizableProductViewer() {
  const videoSrc = '/projects/customizable-product-viewer_video.mp4' // Placeholder - add your video file

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Customizable Product Viewer
          </h1>
          <p className="text-gray-600">
            Interactive video player for product demonstrations
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
