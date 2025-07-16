import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="px-4 py-8 mx-auto bg-white">
      <div className="max-w-screen-md mt-10 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-6 text-center">
            Hi, see my works below
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Link href="/showcase/dashboard" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/showcase/dashboard.png" 
              alt="Project 1 Preview"
              className="w-full h-48 object-cover"
              width={400}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Elegant Dashboard</h3>
              <p className="text-sm text-gray-600">Clear dashboard with business insights</p>
            </div>
          </Link>

          <Link href="/showcase/customizable-product-viewer" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/showcase/customizable-product-viewer.gif"
              alt="Customizable Product Viewer"
              className="w-full h-48 object-cover"
              width={400}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Customizable Product Viewer</h3>
              <p className="text-sm text-gray-600">Customizable product viewer for products with 360 degree view</p>
            </div>
          </Link>

          <Link href="/showcase/virtual-showroom" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/showcase/virtual_lab.gif"
              alt="Project 3 Preview" 
              className="w-full h-48 object-cover"
              width={400}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Virtual Workspace</h3>
              <p className="text-sm text-gray-600">Virtual workspace for customers to view products in 360 degree view</p>
            </div>
          </Link>

          <Link href="/showcase/threejs-animation" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/showcase/threejs-animation-trigger.gif"
              alt="Three.js Animation" 
              className="w-full h-48 object-cover"
              width={400}
              height={192}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Three.js Animation</h3>
              <p className="text-sm text-gray-600">Three.js animation for products</p>
            </div>
          </Link>

          <Link href="/showcase/music-admin" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
                <p className="text-sm font-medium">Music Admin</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Music Admin Dashboard</h3>
              <p className="text-sm text-gray-600">Bilingual platform for lyricists with payment processing</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
