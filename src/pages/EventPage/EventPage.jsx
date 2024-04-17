import React from "react"
import Event from "../../components/Event/Event";
import EventSuggest from "../../components/Event/EventSuggest";

function EventPage() {
    return (
        <div className="container mx-auto px-5 py-10">
            <div className="md:grid md:grid-cols-3 md:space-x-2">
                <div className="md:grid md:grid-cols-2 md:col-span-2">
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </div>
                <div className="col-span-1">
                    <EventSuggest/>
                </div>
            </div>

        </div>
    )
}

export default EventPage
