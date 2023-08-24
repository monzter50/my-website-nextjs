import TimelineContainer from './TimelineContainer'
import TimelineItem, { ITimelineItem } from './TimelineItem'

interface ITimeline{
  experiences?: ITimelineItem[]
}
export default function Timeline({ experiences = [] }: ITimeline) {
  return (

            <TimelineContainer
            >
                {
                    experiences?.map((experience, index) => (
                        <TimelineItem key={index} {...experience}/>
                    ))
                }
            </TimelineContainer>

  )
}
