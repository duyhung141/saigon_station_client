import React from "react"
import contact from "../../assets/image/contact_open_time.png";
import EventSuggest from "../../components/Event/EventSuggest";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function EventDetailPage() {
    return (
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
    )
}

export default EventDetailPage
