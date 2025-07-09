import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 py-8 mx-auto bg-white">
      <div className="max-w-screen-md mt-10 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-6 text-center">
            Hi, see my works below
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Link href="/showcase/dashboard" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/showcase/dashboard.png" 
              alt="Project 1 Preview"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">E-Commerce Platform</h3>
              <p className="text-sm text-gray-600">Modern shopping experience with React</p>
            </div>
          </Link>

          <Link href="/showcase/customizable-product-viewer" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/showcase/customizable-product-viewer.gif"
              alt="Customizable Product Viewer"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Customizable Product Viewer</h3>
              <p className="text-sm text-gray-600">Customizable product viewer for products with 360 degree view</p>
            </div>
          </Link>

          <Link href="/showcase/showroom" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/showcase/showroom.png"
              alt="Project 3 Preview" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Virtual Workspace</h3>
              <p className="text-sm text-gray-600">Virtual workspace for customers to view products in 360 degree view</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
