import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, Draggable, setOptions, getJson, toast } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const now = new Date();

export default function Calendar() {
    const [myEvents, setEvents] = React.useState([]);
    const [draggableMeeting, setDraggableMeeting] = React.useState();
    const [draggableRetreat, setDraggableRetreat] = React.useState();
    const [draggableBlank, setDraggableBlank] = React.useState();

    const setMeetingElm = React.useCallback((elm) => {
        setDraggableMeeting(elm);
    }, []);   
    
    const setRetreatElm = React.useCallback((elm) => {
        setDraggableRetreat(elm);
    }, []); 
    
    const setBlankElm = React.useCallback((elm) => {
        setDraggableBlank(elm);
    }, []);  
                    
    const meetingData = {
        title: 'QA meeting',
        color: '#cf4343',
        start: now,
        end: now,
    };
    
    const retreatData = {
        title: 'Team retreat',
        color: '#1064b0',
        start: now,
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
    };
    
    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);
    
    const onEventCreate = React.useCallback((event) => {
        toast({
            message: 'Event dropped'
        });
    }, []);

    return (
        <div className="mbsc-grid mbsc-no-padding">
            <div className="mbsc-row">
                <div className="mbsc-col-sm-9 external-drop-calendar">
                    <Eventcalendar
                        data={myEvents}
                        view={view}
                        dragToMove={true}
                        externalDrop={true}
                        onEventCreate={onEventCreate}
                    />
                </div>
                <div className="mbsc-col-sm-3">
                    <div className="mbsc-form-group-title">Available tasks</div>
                    
                     <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
                        <div>Product team meeting</div>
                        <div>1.5 h</div>
                        <Draggable dragData={meetingData} element={draggableMeeting} />
                    </div>
                    
                    <div ref={setRetreatElm} className="external-drop-task" style={{background: '#1064b0'}}>
                        <div>General orientation</div>
                        <div>2 h</div>
                        <Draggable dragData={retreatData} element={draggableRetreat} />
                    </div>
                    
                    <div ref={setBlankElm} className="external-drop-task external-drop-task-blank">
                        <div>Blank event</div>
                        <Draggable element={draggableBlank} />
                    </div>
                </div>
            </div>
        </div>
    ); 
}

 