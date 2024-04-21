import React, {useState} from "react"
import contact from "../../assets/image/contact_open_time.png";
import EventSuggest from "../../components/Event/EventSuggest";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function EventDetailPage() {
    const [loading, setLoading] = useState(false);
    return (
        <>
            {loading && <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div role="status">
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin mx-auto dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="block mt-1 text-center">Loading...</span>
                </div>
            </div>}
            <div>
            <div className="container mx-auto px-5 py-10">
                <div className="md:grid md:grid-cols-3 md:space-x-2">
                    <div className="md:col-span-2">
                        <div className="">
                            <img className="w-full" src={contact} alt=""/>
                        </div>
                        <div className="">
                            <span style={{fontFamily: 'Roboto'}}><CalendarMonthIcon color="warning"/> 14/01/2024</span>
                        </div>
                        <div className="py-3 border-b">
                            <h1 className="font-bold text-3xl">Fruit and vegetables and protection against diseases</h1>
                        </div>
                        <div className="my-3">
                            <p>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue
                                condimentum placerat habitasse potenti ac orci a quisque tristique elementum et
                                viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper
                                nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum
                                suspendisse hac integer leo erat aliquam ut himenaeos.</p>
                            <p>
                                Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue
                                magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus
                                feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui
                                gravida justo.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum.
                            </p>
                        </div>

                    </div>
                    <div className="col-span-1">
                        <EventSuggest/>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default EventDetailPage
