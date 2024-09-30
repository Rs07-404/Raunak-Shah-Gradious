import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimeLine = (props)=>{
  if(props.name=="experience"){
  return(<Timeline position='left'>
        {props.experiences.map((experience)=>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <div className="experienceArea">
                      <div className="bold">{experience.company}</div>
                      <div className="small">{`${experience.role + " " + experience.years}`}</div>
                  </div>
              </TimelineContent>
            </TimelineItem>
        )}
    </Timeline>)
  }else if(props.name=="education"){
    return(<Timeline position='left'>
        {props.educations.map((education)=>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <div className="experienceArea">
                      <div className="bold">{education.institution}</div>
                      <div className="small">{`${education.degree + " " + education.years}`}</div>
                  </div>
              </TimelineContent>
            </TimelineItem>
        )}
    </Timeline>)}
}

export default TimeLine