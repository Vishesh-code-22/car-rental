export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>

                <p className="text-xl font-semibold text-gray-700">
                    Loading...
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Please wait a moment
                </p>
            </div>
        </div>
    );
}
