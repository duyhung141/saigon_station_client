import React from "react"
import contact from "../../assets/image/contact_open_time.png";

function EventSuggest(props) {
    return (
        <div className="border flex flex-col space-y-4 px-4 py-6">
            <h3 className="text-xl font-semibold mb-4">Recent</h3>

            {/*Bắt đầu vòng lặp qua từng bài viết*/}
            <div className="border-b pb-3 flex items-center space-x-3">
                <img className="w-16 h-16 object-cover flex-shrink-0 rounded" src={contact} alt="Mô tả ảnh"/>
                <div className="flex flex-col overflow-hidden">
                    <span className="h-[40px] font-medium text-sm text-gray-900 line-clamp-2">Fruit and vegetables and protection against diseases</span>
                    <span className="text-gray-500 text-xs">Ngày đăng bài</span>
                </div>
            </div>

            <div className="border-b pb-3 flex items-center space-x-3">
                <img className="w-16 h-16 object-cover flex-shrink-0 rounded" src={contact} alt="Mô tả ảnh"/>
                <div className="flex flex-col overflow-hidden">
                    <span className="h-[40px] font-medium text-sm text-gray-900 line-clamp-2">Asparagus Spring Salad with Rocket, Goat's Cheese</span>
                    <span className="text-gray-500 text-xs">Ngày đăng bài</span>
                </div>
            </div>
            {/*Kết thúc vòng lặp qua từng bài viết*/}
        </div>
    )
}

export default EventSuggest
