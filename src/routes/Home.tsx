import React, { useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { EventApi, EventInput } from "@fullcalendar/core";
import koLocale from "@fullcalendar/core/locales/ko";

const initialEvents: EventInput[] = [{ title: "Initial Event", start: new Date().toISOString().split("T")[0] }];

export default function Home() {
	// Draggable 생성 함수
	const createDraggable = (element: HTMLElement) => {
		return new Draggable(element, {
			itemSelector: ".fc-event",
			eventData: (eventEl) => ({
				title: eventEl.innerText,
			}),
		});
	};

	// setupDraggable 함수 정의
	const setupDraggable = useCallback(() => {
		const draggableEl = document.getElementById("external-events");
		if (draggableEl) {
			createDraggable(draggableEl);
		}
	}, []); // 빈 배열로 memoization

	useEffect(() => {
		setupDraggable();
	}, [setupDraggable]); // 의존성 배열에 setupDraggable 추가

	const handleEventReceive = (info: { event: EventApi }) => {
		console.log("Event dropped:", info.event.title);
		console.log("Start date:", info.event.start);
	};

	return (
		<div className="flex gap-8 p-4">
			{/* External Events */}
			<div id="external-events" className="w-1/4 p-4 border rounded">
				<h2 className="text-lg font-bold mb-4">Draggable Events</h2>
				<div className="fc-event bg-blue-500 text-white px-2 py-1 rounded mb-2 cursor-pointer">Meeting</div>
				<div className="fc-event bg-green-500 text-white px-2 py-1 rounded mb-2 cursor-pointer">Workshop</div>
				<div className="fc-event bg-red-500 text-white px-2 py-1 rounded mb-2 cursor-pointer">Conference</div>
				<p className="text-gray-500 text-sm mt-4">Drag and drop these events onto the calendar.</p>
			</div>

			{/* FullCalendar */}
			<div className="flex-grow">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					editable
					droppable
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					}}
					initialEvents={initialEvents}
					eventReceive={handleEventReceive}
					locale={koLocale}
				/>
			</div>
		</div>
	);
}
